# 📁 File Location Guide - Where to Create Files

## Current Project Structure

```
CBTC-FINAL/
└── cbtc-fresh/                    ← YOUR MAIN PROJECT FOLDER
    ├── app/
    │   ├── api/                   ✅ Already created
    │   │   ├── auth/
    │   │   ├── courses/
    │   │   ├── enrollments/
    │   │   └── health/
    │   └── lib/                   ✅ Already created
    │       ├── supabase.ts
    │       ├── database.types.ts
    │       ├── db-helpers.ts
    │       └── ...
    ├── .env.local                 ⚠️ YOU NEED TO CREATE THIS FILE HERE
    ├── package.json               ✅ Already exists
    ├── next.config.js             ✅ Already exists
    ├── tsconfig.json              ✅ Already exists
    ├── QUICK_START.md             ✅ Already created
    └── SUPABASE_SETUP.md          ✅ Already created
```

## 🎯 Step-by-Step: Where to Create `.env.local`

### Option 1: Using File Explorer (Windows)

1. **Navigate to the project folder:**
   ```
   E:\CBTC-FINAL\cbtc-fresh
   ```

2. **Create the file:**
   - Right-click in the `cbtc-fresh` folder
   - Select "New" → "Text Document"
   - Name it exactly: `.env.local` (including the dot at the beginning)
   - Windows might warn you about the dot - click "Yes"

3. **Open the file** and paste this content:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://rvlcpygatguvxhuliand.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
   ```

4. **Replace the placeholder values** with your actual Supabase keys

### Option 2: Using VS Code / Cursor

1. **Open the `cbtc-fresh` folder** in Cursor/VS Code

2. **Create the file:**
   - Click "New File" button or press `Ctrl+N`
   - Name it: `.env.local`
   - Paste the content from above

3. **Save the file** (`Ctrl+S`)

### Option 3: Using Command Line (PowerShell)

1. **Open PowerShell** in the `cbtc-fresh` directory:
   ```powershell
   cd E:\CBTC-FINAL\cbtc-fresh
   ```

2. **Create the file:**
   ```powershell
   New-Item -Path ".env.local" -ItemType File
   ```

3. **Open it in Notepad:**
   ```powershell
   notepad .env.local
   ```

4. **Paste the content** and save

## 📍 Exact File Path

The `.env.local` file should be created at:
```
E:\CBTC-FINAL\cbtc-fresh\.env.local
```

**Important:** It must be in the `cbtc-fresh` folder (same level as `package.json`), NOT inside the `app` folder!

## ✅ Verification Checklist

After creating `.env.local`, verify:

- [ ] File is named exactly `.env.local` (with the dot)
- [ ] File is in `E:\CBTC-FINAL\cbtc-fresh\` (same folder as `package.json`)
- [ ] File contains all three environment variables
- [ ] You've replaced `your_anon_key_here` with your actual Supabase anon key
- [ ] You've replaced `your_service_role_key_here` with your actual service role key
- [ ] File is saved

## 🔑 Where to Get Your Supabase Keys

1. Go to: https://app.supabase.com/project/rvlcpygatguvxhuliand/settings/api
2. You'll see three sections:
   - **Project URL** → Copy this to `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → Copy this to `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role** key → Copy this to `SUPABASE_SERVICE_ROLE_KEY` (keep this secret!)

## 🧪 Test After Creating the File

1. **Restart your development server** (if it's running):
   ```powershell
   # Stop the server (Ctrl+C), then:
   cd E:\CBTC-FINAL\cbtc-fresh
   npm run dev
   ```

2. **Test the connection:**
   - Open browser: http://localhost:3000/api/health
   - You should see: `{"status":"healthy","message":"Supabase connection successful"}`

## 🚨 Common Mistakes to Avoid

❌ **Wrong location:**
```
E:\CBTC-FINAL\cbtc-fresh\app\.env.local  ← WRONG!
```

✅ **Correct location:**
```
E:\CBTC-FINAL\cbtc-fresh\.env.local  ← CORRECT!
```

❌ **Wrong filename:**
```
env.local          ← Missing the dot
.env               ← Wrong name
.env.local.txt     ← Has .txt extension
```

✅ **Correct filename:**
```
.env.local         ← CORRECT!
```

## 📝 Example `.env.local` File Content

```env
# Supabase Configuration
# Get these from: https://app.supabase.com/project/rvlcpygatguvxhuliand/settings/api

NEXT_PUBLIC_SUPABASE_URL=https://rvlcpygatguvxhuliand.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2bGNweWdhdGd1dnhodWxpYW5kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzNDU2NzgsImV4cCI6MjAyNzkyMTY3OH0.example
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2bGNweWdhdGd1dnhodWxpYW5kIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMjM0NTY3OCwiZXhwIjoyMDI3OTIxNjc4fQ.example
```

**Note:** The keys above are examples. Replace them with your actual keys from Supabase!

## 🆘 Still Having Trouble?

If you can't create a file starting with a dot in Windows:

1. **Use VS Code/Cursor** - it handles dotfiles easily
2. **Or use PowerShell:**
   ```powershell
   cd E:\CBTC-FINAL\cbtc-fresh
   echo "" > .env.local
   ```
   Then open it in a text editor to add the content.

---

**Remember:** The `.env.local` file is already in `.gitignore`, so it won't be committed to version control (which is good for security!).

