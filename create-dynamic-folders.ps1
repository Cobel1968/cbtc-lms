# =========================
# create-dynamic-folders.ps1
# =========================
# Purpose: Create dynamic [id] folders with placeholder page.tsx files
# Safe for Windows PowerShell
# =========================

# Set the project root
$projectRoot = "D:\cbtc-final\cbtc-lms\app"

# List of dynamic folders relative to app/
$dynamicFolders = @(
    "admin\student\id_placeholder",        # replaces [id]
    "courses\id_placeholder\analysis",     # replaces [id]/analysis
    "courses\id_placeholder\capture",      # replaces [id]/capture
    "verify\id_placeholder",               # replaces [id]
    "api\courses\id_placeholder"           # replaces [id]
)

# Placeholder content for page.tsx
$placeholderContent = @"
'use client';

export default function Placeholder() {
    return <div>Placeholder page</div>;
}
"@

# Loop through folders and create them
foreach ($folder in $dynamicFolders) {
    $fullPath = Join-Path $projectRoot $folder

    if (-not (Test-Path $fullPath)) {
        Write-Host "Creating folder: $fullPath"
        New-Item -ItemType Directory -Path $fullPath -Force | Out-Null
    }

    # Create placeholder page.tsx
    $pageFile = Join-Path $fullPath "page.tsx"
    if (-not (Test-Path $pageFile)) {
        Write-Host "Creating placeholder page.tsx in $fullPath"
        Set-Content -Path $pageFile -Value $placeholderContent -Encoding UTF8
    }
}

Write-Host "✅ All dynamic folders and placeholder pages created successfully."
