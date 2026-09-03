$ErrorActionPreference = 'Stop'
$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$sourcePath = Join-Path $projectRoot 'print-guide.html'
$assetDirectory = Join-Path $projectRoot 'assets'
$pdfFileName = [System.Uri]::UnescapeDataString('%ED%95%98%EB%8F%84%EA%B8%89%EB%B2%95_%EC%8B%A0%EC%9E%85%EA%B5%AC%EB%A7%A4%EB%8B%B4%EB%8B%B9%EC%9E%90_%EA%B5%90%EC%9C%A1%EC%9E%90%EB%A3%8C.pdf')
$outputPath = Join-Path $assetDirectory $pdfFileName

if (-not (Test-Path -LiteralPath $assetDirectory)) {
    New-Item -ItemType Directory -Path $assetDirectory | Out-Null
}

$browserPath = 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
if (-not (Test-Path -LiteralPath $browserPath)) {
    $browserPath = 'C:\Program Files\Google\Chrome\Application\chrome.exe'
}
if (-not (Test-Path -LiteralPath $browserPath)) {
    throw 'Microsoft Edge or Google Chrome was not found. Open print-guide.html and print it to PDF.'
}

$sourceUri = [System.Uri]::new($sourcePath).AbsoluteUri
$profilePath = Join-Path ([System.IO.Path]::GetTempPath()) ("fairbuy-pdf-" + [guid]::NewGuid().ToString('N'))
$temporaryOutput = Join-Path $assetDirectory 'fairbuy-guide.tmp.pdf'
$browserArguments = @(
    '--headless=new'
    '--disable-gpu'
    '--disable-software-rasterizer'
    '--no-sandbox'
    '--no-pdf-header-footer'
    "--user-data-dir=$profilePath"
    "--print-to-pdf=$temporaryOutput"
    $sourceUri
)

try {
    if (Test-Path -LiteralPath $temporaryOutput) {
        Remove-Item -LiteralPath $temporaryOutput -Force
    }
    $process = Start-Process -FilePath $browserPath -ArgumentList $browserArguments -Wait -PassThru -WindowStyle Hidden
    if ($process.ExitCode -ne 0 -or -not (Test-Path -LiteralPath $temporaryOutput)) {
        throw "PDF generation failed with browser exit code $($process.ExitCode)."
    }
    Move-Item -LiteralPath $temporaryOutput -Destination $outputPath -Force
} finally {
    if (Test-Path -LiteralPath $temporaryOutput) {
        Remove-Item -LiteralPath $temporaryOutput -Force
    }
    if (Test-Path -LiteralPath $profilePath) {
        $resolvedProfile = (Resolve-Path -LiteralPath $profilePath).Path
        $resolvedTemp = (Resolve-Path -LiteralPath ([System.IO.Path]::GetTempPath())).Path
        if ($resolvedProfile.StartsWith($resolvedTemp, [System.StringComparison]::OrdinalIgnoreCase) -and (Split-Path -Leaf $resolvedProfile).StartsWith('fairbuy-pdf-')) {
            Remove-Item -LiteralPath $resolvedProfile -Recurse -Force
        }
    }
}

Write-Output $outputPath
