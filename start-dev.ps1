$ErrorActionPreference = "Stop"

if ($env:NVM_SYMLINK -and (Test-Path $env:NVM_SYMLINK)) {
  $env:PATH = "$env:NVM_SYMLINK;$env:PATH"
} elseif (Test-Path "C:\nvm4w\nodejs") {
  $env:PATH = "C:\nvm4w\nodejs;$env:PATH"
}

Set-Location $PSScriptRoot
Write-Host "[AEROULTRA] Node version: $(node -v)" -ForegroundColor Cyan
npm run dev
