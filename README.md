# 바른구매 — 하도급법 학습센터

소비재 회사 신입 구매담당자를 위한 설치 없는 정적 웹사이트입니다.

## 실행

`index.html`을 브라우저에서 열면 됩니다. 로컬 서버를 사용하려면 Node.js가 설치된 환경에서 다음을 실행할 수 있습니다.

```powershell
npx serve .
```

## 구성

- `index.html`: 사이트 구조
- `styles.css`: 반응형 화면 및 인쇄 스타일
- `app.js`: 7개 수업, 챕터별 확인문제 3개, 9대 의무·13개 금지행위, 15문항 실전퀴즈, 학습 진도 저장
- `case-data.js`: 최근 3년 공정위 공개 제재사례 데이터
- `scripts/collect-ftc-cases.mjs`: 공정위 공식 목록과 상세페이지에서 사례를 갱신하는 수집 스크립트
- `law-updates.js`: 사이트의 법령 상태·변경 이력 데이터
- `data/curated-law-history.json`: 공식 개정이유를 구매 실무 언어로 정리한 최근 3회 이력
- `scripts/check-law-updates.mjs`: 국가법령정보센터 원문을 조문별로 비교하고 변경 시 메일을 보내는 스크립트
- `scripts/send-test-email.mjs`: 최신 변경 이력으로 이메일 미리보기·테스트 발송
- `.github/workflows/check-law-updates.yml`: 매일 오전 9시 10분(KST) 자동 점검·사이트 반영 작업
- `assets/하도급법_신입구매담당자_교육자료.pdf`: 다운로드용 교육자료
- `print-guide.html`: PDF 원본 문서
- `generate-pdf.ps1`: 교육자료를 수정한 뒤 PDF를 다시 만드는 스크립트

교육자료를 수정한 뒤 PDF를 다시 만들려면 PowerShell에서 다음을 실행합니다.

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\generate-pdf.ps1
```

법령 기준일은 2026년 9월 3일입니다. 실제 사안에는 최신 법령 및 법무 검토가 필요합니다.

각 챕터는 확인문제 3개를 모두 맞혀야 `학습 완료` 버튼이 활성화됩니다. 퀴즈 통과와 완료 상태는 해당 브라우저의 로컬 저장소에 기록됩니다.

## 법령 변경 자동 감지

감시 대상은 `config/laws.json`에서 관리합니다. 현재는 하도급법과 하도급법 시행령을 감시합니다. 감지기는 법령 검색 결과의 공포·시행 정보와 법령 본문의 조문별 정규화본을 비교합니다.

1. [국가법령정보 공동활용](https://open.law.go.kr/LSO/openApi/guideList.do)에 이용 신청 후 인증값(`OC`)을 발급받습니다.
2. GitHub 저장소의 `Settings → Secrets and variables → Actions`에 `LAW_API_OC`를 등록합니다.
3. Actions의 `하도급 법령 변경 확인`을 한 번 수동 실행합니다. 첫 실행은 현재 원문을 `data/law-state.json`에 기준선으로 저장하며 메일을 보내지 않습니다.
4. 이후 한국시간 월~금 오전 8시에 원문을 확인합니다. 변경이 없으면 파일·메일을 건드리지 않습니다. 변경이 있으면 `law-updates.js`, `law-updates.json`, 상태 파일과 PDF 교육자료를 갱신해 커밋한 뒤 Gmail 알림을 보냅니다. 화면에는 시행일 기준 최신 3회만 표시됩니다.

로컬에서 기준선을 생성하거나 수동 점검하려면 다음처럼 실행합니다.

```powershell
$env:LAW_API_OC="발급받은_OC"
npm.cmd ci
npm.cmd run law:check
```

## 변경 알림 이메일

자동발송은 Gmail SMTP를 사용합니다. 실제 메일을 보내려면 GitHub Actions 비밀값에 아래 항목을 등록합니다. 비밀번호를 소스 파일에 직접 적지 마세요.

- `SMTP_USER`: 발신 Gmail 주소
- `SMTP_PASS`: Gmail 앱 비밀번호
- `MAIL_FROM`: 발신 주소
- `MAIL_TO`: 수신 주소. 여러 명이면 쉼표로 구분
- Repository Variable `TRAINING_SITE_URL`: 직원에게 공유할 학습사이트 고정 주소
- Repository Variable `TRAINING_PDF_URL`: PDF 주소가 별도일 때만 등록. 비우면 사이트 주소에서 자동 생성

메일에는 변경이 감지된 법령, 공포·시행 정보, 변경 조문 목록, 국가법령정보센터 원문 링크가 들어갑니다. 자동 감지는 법률 검토를 대신하지 않으므로 메일 수신 후 법무·컴플라이언스 담당자가 시행일과 실제 업무 영향을 확인하는 운영을 권장합니다.

최신 변경 내용으로 메일 화면만 먼저 확인하려면 다음 명령을 실행합니다. 프로젝트 루트의 `email-preview.html`이 갱신됩니다.

```powershell
npm.cmd run mail:preview
```

실제 테스트 발송은 `.env.example`을 참고해 Git에 포함되지 않는 `.env` 파일을 만들거나, SMTP 환경변수를 현재 PowerShell 세션 또는 GitHub Actions Secrets에 등록한 다음 실행합니다.

```powershell
$env:SMTP_HOST="smtp.example.com"
$env:SMTP_PORT="587"
$env:SMTP_SECURE="false"
$env:SMTP_USER="sender@example.com"
$env:SMTP_PASS="앱 비밀번호 또는 SMTP 토큰"
$env:MAIL_FROM="바른구매 법령알림 <sender@example.com>"
$env:MAIL_TO="받을주소@example.com"
$env:TRAINING_SITE_URL="https://회사-학습사이트.example/"
npm.cmd ci
npm.cmd run mail:test
```

계정의 일반 로그인 비밀번호 대신 회사가 발급한 SMTP 토큰 또는 앱 비밀번호를 사용하세요. `.env.example`은 항목 안내용이며 실제 비밀값을 파일이나 저장소에 커밋하면 안 됩니다.

### Gmail 자동 발송을 켜기 위해 사용자가 한 번 할 일

1. 발신 Google 계정에서 2단계 인증을 켜고 `https://myaccount.google.com/apppasswords`에서 앱 비밀번호를 만듭니다.
2. 프로젝트 폴더의 PowerShell에서 `powershell -ExecutionPolicy Bypass -File .\scripts\set-gmail-secret.ps1`을 실행하고 16자리 앱 비밀번호를 숨김 입력합니다.

앱 비밀번호는 파일이나 채팅에 저장하지 않고 GitHub Actions의 암호화된 `SMTP_PASS` Secret으로 바로 등록됩니다.

## 링크 배포와 저장된 HTML

`index.html`을 PC에 복사해 둔 파일은 자동으로 새 파일로 교체되지 않습니다. 모든 사용자가 항상 최신 수업·PDF를 보게 하려면 GitHub Pages 같은 한 곳에 이 프로젝트를 배포하고 고정 링크를 공유해야 합니다.

- 웹 링크로 열면 배포된 최신 HTML, JavaScript와 PDF를 매번 사용합니다.
- 앞으로 배포할 HTML 복사본은 `site-config.js`의 `remoteLawDataUrl`에서 최신 `law-updates.json`을 다시 읽을 수 있습니다.
- 배포 전에 저장된 과거 HTML에는 이 기능이 없으므로 소급 업데이트할 수 없습니다. 해당 사용자는 최신 링크로 다시 안내해야 합니다.
- 현재 배포 주소는 `https://jjs37359379-cloud.github.io/subcontracting-law-learning/`이며, `site-config.js`가 이 주소의 최신 법령 데이터를 읽습니다.
