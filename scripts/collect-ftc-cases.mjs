import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const base = "https://www.ftc.go.kr/www";
const cutoff = "2023-09-03";
const endDate = "2026-09-03";

function decode(value) {
  return value
    .replace(/&nbsp;?|&#160;?/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">");
}

function plainText(html) {
  return decode(html)
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function articleText(html, title) {
  const text = plainText(html);
  let article = text;
  const downloadMarker = text.indexOf("전체 압축 파일 받기");
  if (downloadMarker >= 0) article = text.slice(downloadMarker + 12);
  return article.replace(/^\s*0{3,}\s*/, "").replace(title, "").replace(/\s+/g, " ").trim();
}

function classify(text, title) {
  const source = `${title} ${text.slice(0, 7000)}`;
  const rules = [
    ["기술유용", /기술자료.{0,20}(유용|제3자|사용)|기술유용/],
    ["기술자료 요구", /기술자료.{0,20}(요구|요청|제출)|기술자료 요구행위/],
    ["부당감액", /부당.{0,8}감액|하도급대금.{0,15}감액|단가.{0,10}(소급|인하)/],
    ["부당 대금결정", /부당.{0,12}하도급대금.{0,8}결정|부당.{0,8}대금결정|최저(입찰)?가.{0,30}(낮|보다)|단가를.{0,20}낮/],
    ["위탁취소·수령거부", /부당.{0,10}(위탁취소|수령거부)|위탁.{0,8}취소/],
    ["부당반품", /부당.{0,8}반품/],
    ["서면발급", /서면.{0,30}(미발급|지연.{0,8}발급|발급.{0,8}(의무|하지|않)|교부)|서면발급.{0,10}(의무|위반)|법정기재사항/],
    ["대금 미지급", /하도급대금.{0,15}(미지급|지급하지)|미지급.{0,15}하도급대금/],
    ["지연이자 등", /(지연이자|어음할인료|수수료).{0,15}(미지급|지급하지)/],
    ["지급보증", /하도급대금.{0,10}지급보증|지급보증.{0,8}(미이행|의무)/],
    ["대금조정", /하도급대금.{0,15}(조정|증액).{0,12}(의무|하지|위반|않)|설계변경.{0,20}대금/],
    ["선급금", /선급금.{0,15}(미지급|지급하지|지연)/],
    ["부당특약", /부당.{0,8}특약/],
    ["경제적 이익 요구", /경제적.{0,8}이익.{0,8}(요구|제공)|성과장려금|판촉비|금전.{0,10}제공.{0,8}요구|대납.{0,8}요구/],
    ["부당 경영간섭", /부당.{0,8}경영간섭|경영상.{0,8}정보.{0,8}요구/],
    ["구매강제", /물품.{0,8}구매.{0,8}강제|구매강제/],
    ["검사·반품", /검사결과.{0,10}(미통지|지연)|부당.{0,8}검사/],
    ["탈법·허위서면", /허위.{0,20}(하도급대금|단가|서면)|실제.{0,15}다른.{0,15}(단가|서면)/],
    ["시정명령 불이행", /시정(조치|명령).{0,8}불이행/]
  ];
  const found = rules.filter(([, rule]) => rule.test(source)).map(([label]) => label);
  return found.length ? found : ["기타 위반"];
}

function extractSummary(html, title) {
  let article = articleText(html, title);
  const ftcStart = article.search(/공정거래위원회\s*\(/);
  if (ftcStart >= 0) article = article.slice(ftcStart);
  article = article
    .replace(/공정거래위원회\s*\([^)]*\)\s*는?\s*/, "공정위는 ")
    .replace(/\*[^*]{0,180}(?=\s[*■□◇○]|$)/g, " ")
    .replace(/\s+/g, " ");
  article = article.split(/공정거래위원회 보도자료 저작물|목록 하도급거래 관련/)[0].trim();
  const max = 420;
  if (article.length <= max) return article;
  const clipped = article.slice(0, max);
  const lastStop = Math.max(clipped.lastIndexOf("다."), clipped.lastIndexOf("했다."), clipped.lastIndexOf("였다."));
  return `${clipped.slice(0, lastStop > 170 ? lastStop + 2 : max).trim()}…`;
}

async function fetchText(url) {
  const response = await fetch(url, { headers: { "user-agent": "Mozilla/5.0 FairBuy Education" } });
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return response.text();
}

async function collectList() {
  const items = [];
  for (const page of [1, 2]) {
    const url = `${base}/selectBbsNttRltnList.do?bordCd=3&key=12&pageIndex=${page}&pageUnit=50&rltnNttSn=42088&searchCnd=all&searchViolt=08`;
    const html = await fetchText(url);
    const pattern = /nttSn=(\d+).*?<span class="p-table__text">(.*?)<\/span>\s*<\/a>\s*<\/td>\s*<td>(.*?)<\/td>\s*<td>(202[3-6]-\d{2}-\d{2})/gs;
    for (const match of html.matchAll(pattern)) {
      const item = { id: match[1], title: plainText(match[2]), department: plainText(match[3]), date: match[4] };
      if (item.date < cutoff || item.date > endDate) continue;
      if (!/(제재|최종 확정)/.test(item.title)) continue;
      if (/(입법예고|행정예고|실태조사|신고센터|심의 상정|절차 개시|기사 관련|긴급점검)/.test(item.title)) continue;
      if (!items.some(existing => existing.id === item.id)) items.push(item);
    }
  }
  return items;
}

async function collectDetails(items) {
  const output = [];
  for (let index = 0; index < items.length; index += 6) {
    const batch = items.slice(index, index + 6);
    const results = await Promise.all(batch.map(async item => {
      const url = `${base}/selectBbsNttView.do?key=12&bordCd=3&nttSn=${item.id}`;
      const html = await fetchText(url);
      const text = articleText(html, item.title);
      let categories = classify(text, item.title);
      if (categories.length === 1 && categories[0] === "기타 위반" && item.department.includes("기술유용")) {
        categories = ["기술자료 요구·유용"];
      }
      return {
        ...item,
        year: item.date.slice(0, 4),
        categories,
        summary: extractSummary(html, item.title),
        url
      };
    }));
    output.push(...results);
    process.stdout.write(`\r${output.length}/${items.length}`);
  }
  return output;
}

const items = await collectList();
const cases = await collectDetails(items);
const header = `// 공정거래위원회 공개 보도자료 자동 수집본\n// 범위: ${cutoff} ~ ${endDate}, 생성: ${new Date().toISOString()}\n`;
fs.writeFileSync(path.join(root, "case-data.js"), `${header}window.FTC_CASES = ${JSON.stringify(cases, null, 2)};\n`, "utf8");
console.log(`\ncase-data.js 생성 완료 (${cases.length}건)`);
