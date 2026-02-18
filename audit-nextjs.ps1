# audit-nextjs.ps1 (compatible with older PowerShell)
$projectRoot = "D:\cbtc-final\cbtc-lms"
Set-Location $projectRoot

$reportFile = Join-Path $projectRoot "audit-report.txt"
# Clear previous report
if (Test-Path $reportFile) { Remove-Item $reportFile }

Write-Host "Starting audit for placeholder pages..." -ForegroundColor Cyan

# 1. Find all page.tsx files recursively
$pages = Get-ChildItem -Path $projectRoot -Recurse -Include page.tsx

foreach ($file in $pages) {
    try {
        $content = Get-Content $file.FullName
        foreach ($line in $content) {
            if ($line -match "Placeholder") {
                Add-Content $reportFile "Placeholder page found: $($file.FullName)"
                break
            }
        }
    } catch {
        Write-Warning "Failed to read $($file.FullName): $_"
    }
}

Write-Host "Audit complete! Report saved to $reportFile" -ForegroundColor Green
