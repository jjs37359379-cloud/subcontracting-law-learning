import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const config = JSON.parse(fs.readFileSync(path.join(root, "config", "laws.json"), "utf8"));
const curatedHistory = JSON.parse(fs.readFileSync(path.join(root, "data", "curated-law-history.json"), "utf8"));
const statePath = path.join(root, "data", "law-state.json");
const sitePath = path.join(root, "law-updates.js");
const siteJsonPath = path.join(root, "law-updates.json");
const pendingEmailPath = path.join(root, "data", "pending-law-email.json");
const apiOc = process.env.LAW_API_OC;
const now = new Date().toISOString();

if (!apiOc) throw new Error("LAW_API_OC가 없습니다. 국가법령정보 공동활용 인증값을 환경변수로 설정하세요.");

const previousState = fs.existsSync(statePath)
  ? JSON.parse(fs.readFileSync(statePath, "utf8"))
  : { laws: {}, changes: [] };

function asArray(value) {
  return value == null ? [] : Array.isArray(value) ? value : [value];
}

function findValues(node, key, found = []) {
  if (!node || typeof node !== "object") return found;
  if (Object.prototype.hasOwnProperty.call(node, key)) found.push(node[key]);
  Object.values(node).forEach(value => findValues(value, key, found));
  return found;
}

function firstValue(node, keys) {
  for (const key of keys) {
    const value = findValues(node, key)[0];
    if (value !== undefined && value !== null && String(value).trim()) return String(value).trim();
  }
  return "";
}

function collectLawEntries(node, found = []) {
  if (!node || typeof node !== "object") return found;
  if (node["법령명한글"] && node["법령일련번호"]) found.push(node);
  Object.values(node).forEach(value => collectLawEntries(value, found));
  return found;
}

function textFrom(value) {
  if (value == null) return "";
  if (typeof value !== "object") return String(value).replace(/\s+/g, " ").trim();
  return Object.entries(value)
    .sort(([a], [b]) => a.localeCompare(b, "ko"))
    .map(([key, child]) => `${key}:${textFrom(child)}`)
    .join("|");
}

function collectArticles(node, result = {}) {
  if (!node || typeof node !== "object") return result;
  if (node["조문번호"] !== undefined) {
    const number = String(node["조문번호"]).replace(/^0+/, "") || "0";
    const branch = node["조문가지번호"] ? `의${String(node["조문가지번호"]).replace(/^0+/, "")}` : "";
    const key = `제${number}조${branch}`;
    result[key] = textFrom(node);
  }
  Object.values(node).forEach(value => collectArticles(value, result));
  return result;
}

function digest(value) {
  return crypto.createHash("sha256").update(JSON.stringify(value)).digest("hex");
}

function normalizeDate(value) {
  const digits = String(value || "").replace(/\D/g, "");
  return digits.length === 8 ? `${digits.slice(0, 4)}-${digits.slice(4, 6)}-${digits.slice(6)}` : String(value || "");
}

async function fetchJson(url) {
  const response = await fetch(url, { headers: { "user-agent": "fairbuy-law-monitor/1.0" } });
  if (!response.ok) throw new Error(`법령 API 오류 ${response.status}: ${url.pathname}`);
  const text = await response.text();
  try { return JSON.parse(text); } catch { throw new Error(`법령 API가 JSON 대신 다른 응답을 반환했습니다: ${text.slice(0, 120)}`); }
}

function decodeHtml(value) {
  return value.replace(/&nbsp;/g, " ").replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)));
}

async function fetchRevisionReason(mst) {
  try {
    const url = new URL("https://law.go.kr/LSW/lsRvsDocInfoR.do");
    url.search = new URLSearchParams({ lsiSeq: mst, chrClsCd: "010202" });
    const response = await fetch(url, { headers: { "user-agent": "fairbuy-law-monitor/1.0" } });
    if (!response.ok) return "";
    const html = await response.text();
    const plain = decodeHtml(html.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " "));
    const match = plain.match(/◇ 개정이유(?: 및 주요내용)?\s*([\s\S]*?)(?:◇ 주요내용|【제정·개정문】)/);
    return match ? articleExcerpt(match[1]).slice(0, 1200) : "";
  } catch {
    return "";
  }
}

async function fetchLawSnapshot(law) {
  const searchUrl = new URL("https://law.go.kr/DRF/lawSearch.do");
  searchUrl.search = new URLSearchParams({ OC: apiOc, target: "law", type: "JSON", query: law.name, display: "100" });
  const searchData = await fetchJson(searchUrl);
  const entries = collectLawEntries(searchData);
  const match = entries.find(entry => String(entry["법령명한글"]).trim() === law.name && String(entry["현행연혁코드"] || "현행") === "현행")
    || entries.find(entry => String(entry["법령명한글"]).trim() === law.name);
  if (!match) throw new Error(`법령 검색 결과에서 정확한 이름을 찾지 못했습니다: ${law.name}`);

  const mst = String(match["법령일련번호"]);
  const detailUrl = new URL("https://law.go.kr/DRF/lawService.do");
  detailUrl.search = new URLSearchParams({ OC: apiOc, target: "law", type: "JSON", MST: mst });
  const detail = await fetchJson(detailUrl);
  const articles = collectArticles(detail);
  if (!Object.keys(articles).length) throw new Error(`조문을 추출하지 못했습니다: ${law.name}`);

  const metadata = {
    name: law.name,
    mst,
    promulgation: firstValue(match, ["공포번호"]) ? `${firstValue(match, ["법령구분명"]) || ""} 제${firstValue(match, ["공포번호"])}호`.trim() : "",
    promulgationDate: normalizeDate(firstValue(match, ["공포일자"])),
    effectiveDate: normalizeDate(firstValue(match, ["시행일자"])),
    revisionType: firstValue(match, ["제개정구분명"]),
    url: law.url
  };
  const revisionReason = await fetchRevisionReason(mst);
  return { metadata, articles, revisionReason, hash: digest({ metadata: { ...metadata, mst: undefined }, articles }) };
}

function changedArticleNames(before = {}, after = {}) {
  return [...new Set([...Object.keys(before), ...Object.keys(after)])]
    .filter(key => before[key] !== after[key])
    .sort((a, b) => a.localeCompare(b, "ko", { numeric: true }));
}

function articleExcerpt(value) {
  const text = String(value || "없음").replace(/\s+/g, " ").trim();
  return text.length > 700 ? `${text.slice(0, 700)}…` : text;
}

function focusedDiff(before = "", after = "") {
  let prefix = 0;
  while (prefix < before.length && prefix < after.length && before[prefix] === after[prefix]) prefix++;
  let suffix = 0;
  while (suffix < before.length - prefix && suffix < after.length - prefix && before[before.length - 1 - suffix] === after[after.length - 1 - suffix]) suffix++;
  const cut = (text, start, end) => articleExcerpt(text.slice(Math.max(0, start - 50), Math.min(text.length, end + 50)) || "없음");
  return { before: cut(before, prefix, before.length - suffix), after: cut(after, prefix, after.length - suffix) };
}

function cautionsFor(articles, effectiveDate) {
  const cautions = [`${effectiveDate || "시행일"} 기준으로 계약서·발주서·사내 체크리스트의 관련 조문 인용과 절차를 점검하세요.`];
  const joined = articles.join(" ");
  if (/제3조/.test(joined)) cautions.push("서면 필수 기재사항과 작업 착수 전 발급 절차가 달라졌는지 우선 확인하세요.");
  if (/제13조|제16조/.test(joined)) cautions.push("대금 지급·보증·연동 산식과 재무 처리 기준을 구매·재무 부서가 함께 확인하세요.");
  if (/제12조/.test(joined)) cautions.push("기술자료 요구서, 사용 목적, 제3자 제공 및 반환·폐기 절차를 다시 검토하세요.");
  if (/제32조|제34조/.test(joined)) cautions.push("신고·분쟁·소송 대응 매뉴얼과 법무 보고 절차를 최신화하세요.");
  cautions.push("자동 요약만으로 업무 기준을 바꾸지 말고 법제처 개정문과 법무·컴플라이언스 검토를 거치세요.");
  return cautions;
}

function mergeLatestThree(...groups) {
  const merged = new Map();
  groups.flat().forEach(change => {
    const key = `${change.lawName}|${change.effectiveDate || change.detectedAt}`;
    merged.set(key, { ...(merged.get(key) || {}), ...change });
  });
  return [...merged.values()].sort((a, b) => String(b.effectiveDate || b.detectedAt).localeCompare(String(a.effectiveDate || a.detectedAt))).slice(0, 3);
}

const snapshots = {};
const newChanges = [];
for (const law of config) {
  const snapshot = await fetchLawSnapshot(law);
  snapshots[law.name] = snapshot;
  const before = previousState.laws[law.name];
  if (before && before.hash !== snapshot.hash) {
    const articles = changedArticleNames(before.articles, snapshot.articles);
    const focusedChanges = articles.slice(0, 10).map(article => ({ label: article, ...focusedDiff(before.articles[article], snapshot.articles[article]) }));
    newChanges.push({
      id: `${law.name}-${snapshot.metadata.promulgation}-${snapshot.metadata.effectiveDate}`,
      detectedAt: now,
      effectiveDate: snapshot.metadata.effectiveDate,
      status: "시행 중",
      type: snapshot.metadata.revisionType || "법령 변경",
      lawName: law.name,
      promulgation: snapshot.metadata.promulgation,
      headline: `${articles.slice(0, 3).join("·") || "공포·시행 정보"} 변경이 감지되었습니다`,
      summary: `${before.metadata.promulgation || "이전 공포정보"}에서 ${snapshot.metadata.promulgation || "새 공포정보"}로 변경이 감지되었습니다. 시행일은 ${snapshot.metadata.effectiveDate || "원문 확인 필요"}입니다.`,
      changedArticles: articles.slice(0, 30),
      changes: focusedChanges,
      why: snapshot.revisionReason || "법제처가 공포한 새 법령이 시행되어 조문 또는 공포·시행 정보가 변경되었습니다. 정확한 입법 취지는 연결된 제정·개정이유에서 확인하세요.",
      cautions: cautionsFor(articles, snapshot.metadata.effectiveDate),
      articleDiffs: articles.slice(0, 10).map(article => ({ article, before: articleExcerpt(before.articles[article]), after: articleExcerpt(snapshot.articles[article]) })),
      url: law.url
    });
  }
}

if (!Object.keys(previousState.laws).length || newChanges.length) {
  const changes = mergeLatestThree(previousState.changes || [], newChanges, curatedHistory);
  fs.mkdirSync(path.dirname(statePath), { recursive: true });
  fs.writeFileSync(statePath, `${JSON.stringify({ updatedAt: now, laws: snapshots, changes }, null, 2)}\n`, "utf8");
  const siteData = {
    generatedAt: now,
    source: "국가법령정보센터 공동활용 API·법제처 제정·개정이유",
    laws: Object.values(snapshots).map(snapshot => ({ ...snapshot.metadata, status: "자동 감시 중" })),
    changes
  };
  fs.writeFileSync(sitePath, `window.LAW_UPDATES = ${JSON.stringify(siteData, null, 2)};\n`, "utf8");
  fs.writeFileSync(siteJsonPath, `${JSON.stringify(siteData, null, 2)}\n`, "utf8");
  if (newChanges.length) fs.writeFileSync(pendingEmailPath, `${JSON.stringify({ generatedAt: now, changes: newChanges }, null, 2)}\n`, "utf8");
  console.log(newChanges.length ? `${newChanges.length}건의 변경을 반영했습니다.` : "최초 기준선을 생성했습니다. 메일은 발송하지 않았습니다.");
} else {
  console.log("변경 없음: 파일을 수정하지 않았습니다.");
}

if (process.env.GITHUB_OUTPUT) fs.appendFileSync(process.env.GITHUB_OUTPUT, `changed=${newChanges.length ? "true" : "false"}\nupdated=${!Object.keys(previousState.laws).length || newChanges.length ? "true" : "false"}\n`);
