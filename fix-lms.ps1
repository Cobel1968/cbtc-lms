# fix-lms.ps1
# Fix alias imports and remove self-imports in CBTC LMS project

$rootFolder = "D:\cbtc-final\cbtc-lms\app"  # Change this if your app folder is elsewhere

Write-Host "Processing folder: $rootFolder"

# Recursively process all TypeScript files
Get-ChildItem -Path $rootFolder -Recurse -Include *.ts,*.tsx | ForEach-Object {
    $file = $_.FullName
    try {
        # Read file as array of lines and join (works without -Raw)
        $content = (Get-Content $file) -join "`n"

        $fixed = $content

        # Replace alias imports with relative paths
        $fixed = $fixed -replace '@\/components', '.\/components'
        $fixed = $fixed -replace '@\/lib', '.\/lib'
        $fixed = $fixed -replace '@\/utils', '.\/utils'

        # Remove self-import in PaymentOptions.tsx
        if ($file -match 'PaymentOptions\.tsx$') {
            $fixed = $fixed -replace 'import PaymentOptions from .*PaymentOptions.*;', ''
        }

        # Write back only if changes occurred
        if ($fixed -ne $content) {
            Set-Content -Path $file -Value $fixed
            Write-Host "Fixed imports in $file"
        }
    }
    catch {
        Write-Warning "Failed to process $file. $_"
    }
}

Write-Host "All alias imports replaced and PaymentOptions self-import removed."
