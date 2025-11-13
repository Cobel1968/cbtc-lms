# Fix .env.local file - Correct the key placements
$envFile = ".env.local"

if (-not (Test-Path $envFile)) {
    Write-Host "ERROR: .env.local file not found!" -ForegroundColor Red
    exit 1
}

Write-Host "Fixing .env.local file..." -ForegroundColor Yellow

$correctedContent = @"
# ============================================
# COBEL BTC - Supabase Configuration
# Generated: 2025-11-13 05:31:21
# ============================================

# Supabase Project URL (from Supabase Dashboard > Settings > API)
NEXT_PUBLIC_SUPABASE_URL=https://rvlcpygatguvxhuliand.supabase.co

# Supabase Anonymous/Public Key (from Supabase Dashboard > Settings > API > anon public)
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2bGNweWdhdGd1dnhodWxpYW5kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIxNDgzMzMsImV4cCI6MjA3NzcyNDMzM30.AEQlmpXngX9RSFYFj5ZmIgBA-z3JAznOYGP88VVc530

# Supabase Service Role Key (from Supabase Dashboard > Settings > API > service_role)
# WARNING: KEEP THIS SECRET! Never commit to version control.
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2bGNweWdhdGd1dnhodWxpYW5kIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MjE0ODMzMywiZXhwIjoyMDc3NzI0MzMzfQ.shtG62BDC1rVeYvSCq04KjW0cFNp0joALVMdUoE38tc

# Optional: API URL for backward compatibility
NEXT_PUBLIC_API_URL=http://localhost:3000/api
"@

$correctedContent | Out-File -FilePath $envFile -Encoding utf8 -NoNewline
Write-Host "[OK] .env.local file has been corrected!" -ForegroundColor Green
Write-Host ""
Write-Host "The keys are now in the correct format:" -ForegroundColor Cyan
Write-Host "  - NEXT_PUBLIC_SUPABASE_ANON_KEY is set" -ForegroundColor White
Write-Host "  - SUPABASE_SERVICE_ROLE_KEY is set" -ForegroundColor White
Write-Host ""
Write-Host "You can now test the connection with: npm run dev" -ForegroundColor Yellow

