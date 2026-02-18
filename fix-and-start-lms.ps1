# fix-and-start-lms.ps1
# ---------------------------------------------------
# 1. Fix alias imports to relative paths
# 2. Create placeholder pages for missing dynamic folders
# 3. Clear Next.js cache (.next)
# 4. Start dev server
# ---------------------------------------------------

$ErrorActionPreference = "Stop"

# ----- Project root -----
$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Definition
Write-Host "Project root: $projectRoot"

# ----- Folders that need placeholder pages -----
# Replace [id] with safe placeholder names
$placeholderFolders = @(
    "app\admin\student\id_placeholder",
    "app\verify\id_placeholder"
)

# ----- Create missing folders and placeholder pages -----
foreach ($folder in $placeholderFolders) {
    $fullFolder = Join-Path $projectRoot $folder
    if (-not (Test-Path $fullFolder)) {
        Write-Host "Creating folder $fullFolder"
        New-Item -ItemType Directory -Path $fullFolder -Force | Out-Null
    }

    $pageFile = Join-Path $fullFolder "page.tsx"
    if (-not (Test-Path $pageFile)) {
        Write-Host "Creating placeholder page.tsx in $fullFolder"
        Set-Content -Path $pageFile -Value @"
'use client';

export default function Placeholder() {
    return <div>Placeholder page for dynamic route</div>;
}
"@
    }
}

# ----- Fix alias imports -----
Write-Host "Fixing alias imports in project files..."
$tsFiles = Get-ChildItem -Path $projectRoot -Recurse -Include *.ts,*.tsx

foreach ($file in $tsFiles) {
    $content = Get-Content $file.FullName
    $fixedContent = $content -replace '@\/', '.\/'  # convert @/ imports to relative ./
    Set-Content -Path $file.FullName -Value $fixedContent
    Write-Host "Fixed imports in $($file.FullName)"
}

# ----- Remove .next cache -----
$nextCache = Join-Path $projectRoot ".next"
if (Test-Path $nextCache) {
    Write-Host "Removing .next cache..."
    Remove-Item -Recurse -Force $nextCache
}

# ----- Start dev server -----
Write-Host "Starting Next.js dev server..."
npm run dev
