import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildLawEmail, sendLawEmail } from "./law-mailer.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const isLive = process.argv.includes("--send-live");
const sourcePath = isLive ? path.join(root, "data", "pending-law-email.json") : path.join(root, "law-updates.json");
if (!fs.existsSync(sourcePath)) throw new Error(isLive ? "이번 실행에서 새로 감지된 메일 데이터가 없습니다." : "법령 변경 데이터가 없습니다.");
const data = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
const latest = data.changes.slice(0, 1);
if (!latest.length) throw new Error("테스트할 변경 이력이 없습니다.");

const preview = buildLawEmail(latest, { test: !isLive });
fs.writeFileSync(path.join(root, "email-preview.html"), preview.html, "utf8");
console.log(`메일 미리보기 생성: email-preview.html\n제목: ${preview.subject}`);

if (process.argv.includes("--preview-only")) process.exit(0);
const result = await sendLawEmail(latest, { test: !isLive });
console.log(`${isLive ? "변경 알림" : "테스트 메일"} 발송 완료: ${JSON.stringify(result)}`);
