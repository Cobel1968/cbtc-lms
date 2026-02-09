Write-Host "--- CBTC LMS INTEGRITY GUARD ---" -ForegroundColor Cyan
$count = (Get-ChildItem -Path ".\app", ".\components" -Recurse -Include *.tsx, *.ts | 
          Select-String -Pattern "createBrowserClient", "createClient\(" | 
          Where-Object { $_.Path -notlike "*lib\supabaseDB.ts*" }).Count

if ($count -eq 0) { 
    Write-Host " Status: 100% Singleton Integrity" -ForegroundColor Green 
} else { 
    Write-Host " Warning: $count Rogue Instances detected!" -ForegroundColor Red 
}
