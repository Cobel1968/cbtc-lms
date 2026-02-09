# Cobel AI Engine - Production Backup & Recovery Utility
$Date = Get-Date -Format "yyyyMMdd_HHmm"
$BackupFile = "D:\CBTC-FINAL\cbtc-lms\backups\CBTC_Backup_$Date.sql"
$psqlPath = Get-ChildItem -Path "C:\Program Files\PostgreSQL" -Filter pg_dump.exe -Recurse | Select-Object -ExpandProperty FullName -First 1

if (!(Test-Path "D:\CBTC-FINAL\cbtc-lms\backups")) { New-Item -ItemType Directory -Path "D:\CBTC-FINAL\cbtc-lms\backups" }

Write-Host "--- Initiating Production Snapshot ---" -ForegroundColor Cyan

# Snapshotting the database (Schema + Data + Bilingual Lexicon)
& $psqlPath -U postgres -d cbtc_lms -f $BackupFile

Write-Host "Backup created: $BackupFile" -ForegroundColor Green

# Rollback Instruction (Standardized)
Write-Host "`nTo Rollback/Restore to this version, use:" -ForegroundColor Yellow
Write-Host "psql -U postgres -d cbtc_lms -f $BackupFile" -ForegroundColor Gray
