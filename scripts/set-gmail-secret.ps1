$ErrorActionPreference = "Stop"

$repository = "jjs37359379-cloud/subcontracting-law-learning"
$gh = Get-Command gh -ErrorAction SilentlyContinue
$ghPath = if ($gh) { $gh.Source } else { "C:\Program Files\GitHub CLI\gh.exe" }

if (-not (Test-Path -LiteralPath $ghPath)) {
  throw "GitHub CLI를 찾지 못했습니다. GitHub CLI 설치 후 다시 실행하세요."
}

Write-Host "Google 계정에서 만든 16자리 Gmail 앱 비밀번호를 입력하세요. 입력값은 화면에 표시되지 않습니다."
$securePassword = Read-Host "Gmail 앱 비밀번호" -AsSecureString
$pointer = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($securePassword)

try {
  $plainPassword = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($pointer) -replace "\s", ""
  if ($plainPassword.Length -ne 16) {
    throw "공백을 제외한 앱 비밀번호가 16자리가 아닙니다. Google 앱 비밀번호를 다시 확인하세요."
  }

  $plainPassword | & $ghPath secret set SMTP_PASS --repo $repository
  if ($LASTEXITCODE -ne 0) { throw "GitHub Secret 등록에 실패했습니다." }
  Write-Host "SMTP_PASS 등록 완료. 이제 법령 변경 시 Gmail 자동 발송이 활성화됩니다."
}
finally {
  [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($pointer)
  $plainPassword = $null
}
