import process from "node:process";

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}

export function buildLawEmail(changes, { test = false } = {}) {
  const latest = changes[0];
  const [year, month, day] = String(latest.effectiveDate || "").split("-");
  const effectiveLabel = year && month && day ? `${year}년 ${month}월 ${day}일` : latest.effectiveDate;
  const changeRows = (latest.changes || []).map(item => `<tr>
    <td style="padding:12px;border:1px solid #dde2e5;font-weight:700;color:#102a43">${escapeHtml(item.label)}</td>
    <td style="padding:12px;border:1px solid #dde2e5;color:#68737d">${escapeHtml(item.before)}</td>
    <td style="padding:12px;border:1px solid #dde2e5;background:#edf7f3;color:#244f40">${escapeHtml(item.after)}</td>
  </tr>`).join("");
  const cautionItems = (latest.cautions || []).map(item => `<li style="margin:7px 0">${escapeHtml(item)}</li>`).join("");
  const secondaryLink = latest.secondaryUrl ? `&nbsp;&nbsp;<a href="${escapeHtml(latest.secondaryUrl)}" style="color:#ef6a52">시행령 개정문</a>` : "";
  const trainingSiteUrl = process.env.TRAINING_SITE_URL || latest.trainingSiteUrl || "";
  const trainingPdfUrl = process.env.TRAINING_PDF_URL || latest.trainingPdfUrl || (trainingSiteUrl ? new URL(`assets/${encodeURIComponent("하도급법_신입구매담당자_교육자료.pdf")}`, trainingSiteUrl.endsWith("/") ? trainingSiteUrl : `${trainingSiteUrl}/`).href : "");
  const trainingLinks = trainingSiteUrl ? `<div style="margin-top:24px;padding:20px;background:#102a43;color:#fff"><b style="font-size:15px">업데이트된 교육자료 확인</b><p style="margin:6px 0 14px;color:#bed0dc;font-size:12px">아래 고정 링크에서 최신 학습내용과 PDF 교육자료를 확인할 수 있습니다.</p><a href="${escapeHtml(trainingSiteUrl)}" style="display:inline-block;padding:11px 15px;background:#f4d35e;color:#102a43;text-decoration:none;font-weight:700;font-size:12px">학습사이트 바로가기</a>&nbsp;&nbsp;<a href="${escapeHtml(trainingPdfUrl)}" style="display:inline-block;padding:10px 14px;border:1px solid #8ea6b7;color:#fff;text-decoration:none;font-weight:700;font-size:12px">최신 PDF 교육자료</a></div>` : (test ? '<div style="margin-top:24px;padding:20px;background:#102a43;color:#fff"><b style="font-size:15px">교육자료 링크 영역</b><p style="margin:6px 0 14px;color:#bed0dc;font-size:12px">배포 주소 등록 후 아래 버튼이 실제 링크로 활성화됩니다.</p><span style="display:inline-block;padding:11px 15px;background:#f4d35e;color:#102a43;font-weight:700;font-size:12px">학습사이트 바로가기</span>&nbsp;&nbsp;<span style="display:inline-block;padding:10px 14px;border:1px solid #8ea6b7;color:#fff;font-weight:700;font-size:12px">최신 PDF 교육자료</span></div>' : "");
  const subject = `하도급 법규 변경[시행일 ${effectiveLabel}] - ${latest.emailSubject || latest.headline || latest.lawName}`;
  const html = `<!doctype html><html lang="ko"><body style="margin:0;background:#f4f1e9;font-family:Arial,'Malgun Gothic',sans-serif;color:#18232e">
    <div style="max-width:720px;margin:0 auto;background:#fff">
      <div style="padding:26px 32px;background:#102a43;color:#fff"><div style="font-size:11px;color:#f4d35e;letter-spacing:1px">FAIRBUY LAW UPDATE${test ? " · TEST MAIL" : ""}</div><h1 style="margin:8px 0 0;font-size:25px;line-height:1.4">${escapeHtml(latest.headline || latest.lawName)}</h1></div>
      <div style="padding:28px 32px">
        ${test ? '<p style="padding:10px 13px;background:#fff0ea;color:#9b3626;font-size:12px"><b>테스트 메일입니다.</b> 실제 자동 알림과 동일한 형식이며, 발송 여부와 문구를 검토하기 위한 메일입니다.</p>' : ""}
        <p style="font-size:12px;color:#68737d">${escapeHtml(latest.promulgation || "")} · ${escapeHtml(latest.lawName)}<br><b style="color:#ef6a52">${escapeHtml(latest.effectiveDate)} ${escapeHtml(latest.status || "시행")}</b></p>
        <h2 style="font-size:15px;color:#102a43;margin-top:24px">한눈에 보는 핵심</h2><p style="font-size:14px;line-height:1.75">${escapeHtml(latest.summary)}</p>
        <h2 style="font-size:15px;color:#102a43;margin-top:28px">딱 바뀐 부분</h2>
        <table style="width:100%;border-collapse:collapse;font-size:12px"><thead><tr><th style="padding:9px;border:1px solid #dde2e5">구분</th><th style="padding:9px;border:1px solid #dde2e5">변경 전</th><th style="padding:9px;border:1px solid #dde2e5;background:#d9eee7">변경 후</th></tr></thead><tbody>${changeRows}</tbody></table>
        <div style="margin-top:24px;padding:16px 18px;background:#eef3f6;border-left:4px solid #102a43"><b style="font-size:13px;color:#102a43">왜 바뀌었나요?</b><p style="font-size:12px;line-height:1.7;margin:6px 0 0">${escapeHtml(latest.why || "법제처 개정이유를 확인하세요.")}</p></div>
        <div style="margin-top:14px;padding:16px 18px;background:#fff0ea;border-left:4px solid #ef6a52"><b style="font-size:13px;color:#102a43">구매담당자 주의사항</b><ul style="padding-left:19px;font-size:12px;line-height:1.65;margin-bottom:0">${cautionItems}</ul></div>
        ${trainingLinks}
        <p style="margin-top:24px"><a href="${escapeHtml(latest.url)}" style="display:inline-block;padding:11px 16px;background:#ef6a52;color:#fff;text-decoration:none;font-weight:700;font-size:12px">법제처 개정이유·개정문 보기</a>${secondaryLink}</p>
        <p style="margin-top:28px;padding-top:16px;border-top:1px solid #dde2e5;color:#7a858e;font-size:10px;line-height:1.6">이 메일은 법령 변경 자동 감지 결과를 업무용으로 요약한 것입니다. 실제 계약·분쟁 판단 전에는 최신 원문과 법무·컴플라이언스 검토를 확인하세요.</p>
      </div>
    </div></body></html>`;
  const text = `${latest.headline}\n\n시행일: ${latest.effectiveDate} (${latest.status})\n${latest.promulgation} · ${latest.lawName}\n\n[핵심]\n${latest.summary}\n\n[딱 바뀐 부분]\n${(latest.changes || []).map(item => `- ${item.label}\n  전: ${item.before}\n  후: ${item.after}`).join("\n")}\n\n[왜 바뀌었나요?]\n${latest.why}\n\n[구매담당자 주의사항]\n${(latest.cautions || []).map(item => `- ${item}`).join("\n")}${trainingSiteUrl ? `\n\n[업데이트된 교육자료]\n학습사이트: ${trainingSiteUrl}\n최신 PDF: ${trainingPdfUrl}` : ""}\n\n원문: ${latest.url}`;
  return { subject, html, text };
}

export async function sendLawEmail(changes, { test = false } = {}) {
  const required = ["SMTP_HOST", "SMTP_USER", "SMTP_PASS", "MAIL_FROM", "MAIL_TO", "TRAINING_SITE_URL"];
  const missing = required.filter(key => !process.env[key]);
  if (missing.length) throw new Error(`메일 환경변수가 부족합니다: ${missing.join(", ")}`);
  const { default: nodemailer } = await import("nodemailer");
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
  });
  await transporter.verify();
  const message = buildLawEmail(changes, { test });
  const info = await transporter.sendMail({ from: process.env.MAIL_FROM, to: process.env.MAIL_TO, ...message });
  return { messageId: info.messageId, accepted: info.accepted, rejected: info.rejected };
}
