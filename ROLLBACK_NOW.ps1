# EMERGENCY ROLLBACK SCRIPT
# Run this to restore Feb 09 Stable Build
Copy-Item -Path 'D:\cbtc-final\cbtc-backups\Stable_Build_Feb09\*' -Destination 'D:\cbtc-final\cbtc-lms' -Recurse -Force
Write-Host ' SYSTEM REVERTED TO FEB 09 STABLE STATE.' -ForegroundColor Yellow