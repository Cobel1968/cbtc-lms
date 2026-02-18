# What’s Left for a Successful Deployment

**Stack:** Supabase (backend) · Vercel (frontend) · cobelbtc.com (FastComet DNS)

---

## Already done (automated from codebase)

- **Middleware** — `middleware.ts` restored with auth, RBAC, and correct public paths.
- **Health route** — `/api/health` uses the `courses` table.
- **Placeholder routes** — `/api/dashboard-metrics` and `/api/analytics/friction` run real logic.
- **Env template** — `.env.example` added.
- **API auth (session + role):**
  - **`lib/auth-route.ts`** — `getRouteUser()`, `requireAdmin()`, `requireTrainerOrAdmin()`, `requireAuth()`.
  - **Admin:** `update-profile`, `export-friction`, `export-compliance`, `student`, `student/[studentId]` require admin.
  - **Trainer:** `submit-feedback`, `friction-report`, `verify-milestone`, `instructor` require trainer or admin.
  - **Auth required:** `payments/student` (and check studentId vs user), `analyze-handwriting`, `bulk-inflate` (admin; rollback disabled in production), `friction-data` (trainer/admin).
  - **Assessment POST** — hardcoded admin UUID replaced with `requireAdmin()`.
- **Secrets:** `audio-assessment.ts` uses `process.env.OPENAI_API_KEY` and Supabase env vars (hardcoded key removed). Supabase Edge Function `process-handwriting` no longer falls back to `'helloworld'` for `OCR_API_KEY`.

---

## Must do before go-live (manual)

### 1. **Vercel environment variables**

In Vercel: **Project → Settings → Environment Variables**, add:

| Variable | Required | Notes |
|----------|----------|--------|
| `NEXT_PUBLIC_SUPABASE_URL` | Yes | e.g. `https://rvlcpygatguvxhuliand.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Yes | From Supabase project API settings |
| `SUPABASE_SERVICE_ROLE_KEY` | Yes | Same place; **never** expose in client |
| `STRIPE_SECRET_KEY` | If using payments | Stripe dashboard |
| `BREVO_API_KEY` | If using email | Brevo dashboard |

Then redeploy so the build uses these.

---

### 2. **Domain and Supabase URLs**

- **FastComet (DNS):** Point `cobelbtc.com` (and `www` if you use it) to Vercel using the records Vercel shows when you add the domain (e.g. CNAME to `cname.vercel-dns.com` or the given target).
- **Vercel:** In the project, add the domain **cobelbtc.com** (and **www.cobelbtc.com** if needed). Follow the DNS instructions Vercel displays.
- **Supabase:** **Authentication → URL configuration**
  - **Site URL:** `https://cobelbtc.com`
  - **Redirect URLs:** Add `https://cobelbtc.com/**` (and `https://www.cobelbtc.com/**` if you use www). Add any Vercel preview URLs you need for testing.

---

### 3. **API route security** — done automatically

Auth and role checks have been added as above. Optionally review `/api/supervisor/*`, `/api/instructor/friction-details`, `/api/payments/b2b`, and other routes; add `requireAdmin()` or `requireTrainerOrAdmin()` or `requireAuth()` as needed.

---

### 4. **Optional but recommended**

- **Remove or fix hardcoded keys:**  
  - `audio-assessment.ts` uses `'YOUR_OPENAI_API_KEY'` — switch to `process.env.OPENAI_API_KEY` and set it in Vercel if you use that flow.  
  - Supabase Edge Function `process-handwriting`: remove the `'helloworld'` fallback for `OCR_API_KEY`; fail clearly if the secret is missing.
- **Re-enable strictness in build:** In `next.config.js`, consider setting `typescript.ignoreBuildErrors: false` and `eslint.ignoreDuringBuilds: false` once the codebase is clean, so deployment catches type/lint errors.

---

## Quick deployment checklist

- [ ] Set all required env vars in Vercel and redeploy.
- [ ] Add domain **cobelbtc.com** in Vercel and point FastComet DNS to Vercel.
- [ ] In Supabase, set Site URL and Redirect URLs for **cobelbtc.com**.
- [x] Secure **bulk-inflate** (admin-only; rollback disabled in production).
- [x] Add auth + role checks to admin, trainer, payment, and other sensitive API routes.
- [x] Replace hardcoded admin UUID in `/api/assessment` with session + role.

After 1–3 you can deploy and have the app and login working on your domain. Doing 4–6 is required for a **safe** production deployment (no open admin/payment/data endpoints).

For full detail, see **DEPLOYMENT_AUDIT_REPORT.md**.
