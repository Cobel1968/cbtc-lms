# CBTC-LMS Deployment & Security Audit Report

**Date:** February 18, 2025  
**Scope:** Codebase audit — functions, permissions, deployment readiness  
**Stack:** Backend = Supabase | Frontend = Vercel | Domain = cobelbtc.com (FastComet)

---

## 1. Executive Summary

| Area | Status | Notes |
|------|--------|--------|
| **Build** | OK | Build succeeds; one import fix applied previously |
| **Middleware / Auth** | Critical | Next.js middleware is **disabled** (only `.bak`/`.hold` exist) — no route protection |
| **API authorization** | Critical | Most API routes have **no auth/session checks** |
| **Placeholder routes** | High | Several API routes return placeholders or expose Windows paths |
| **Config / Env** | Medium | No `.env.example`; hardcoded keys in one file; Vercel config minimal |
| **Deployment docs** | Medium | FASTCOMET_DEPLOYMENT.md describes full app on FastComet; your setup is Vercel + FastComet domain |

---

## 2. Architecture (As Stated)

- **Backend:** Supabase (DB, Auth, Storage) — project `rvlcpygatguvxhuliand`
- **Frontend:** Vercel (Next.js 14)
- **Domain:** cobelbtc.com — DNS at FastComet (pointing to Vercel)

So: **Vercel** serves the app; **FastComet** holds the domain only (unless you also host something else there). The existing FASTCOMET_DEPLOYMENT.md assumes running the full Next.js app on FastComet (PM2, Node, etc.). If you are on Vercel, that doc is for an alternative deployment path.

---

## 3. Middleware & Page Protection

### 3.1 Middleware is not active

- **Current:** No `middleware.ts` at project root.
- **Found:** `middleware.ts.bak` and `middleware.ts.hold` (backup/disabled).
- **Effect:** No server-side auth or RBAC at the edge. Anyone can hit any path; redirects to `/login` for `/dashboard`, `/student`, `/trainer`, `/admin` do **not** run.

**Recommendation:** Restore middleware for production:

1. Copy `middleware.ts.bak` to `middleware.ts`.
2. Fix the public API path: in the backup it uses `pathname.startsWith('/api/analyzehandwriting')` but the real route is `/api/analyze-handwriting`. Use:

   `pathname.startsWith('/api/analyze-handwriting')`

3. Ensure `@supabase/ssr` is used with the same pattern as in the backup (cookies get/set/remove) and that env vars `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set on Vercel.

---

## 4. API Routes — Functions & Permissions

### 4.1 Routes with no auth/session check (high risk)

These routes do **not** verify the user or any admin/trainer role. Anyone who can reach the URL can call them:

| Route | Method | Risk |
|-------|--------|------|
| `/api/admin/update-profile` | POST | Updates any `profiles` row by `studentId` — **critical** |
| `/api/admin/export-friction` | GET | Exports trainer insights |
| `/api/admin/export-compliance` | GET | Exports user_profiles data |
| `/api/admin/student`, `/api/admin/student/[studentId]` | GET | Student data exposure |
| `/api/payments/student` | POST | Creates payment intent — fraud/abuse risk |
| `/api/payments/b2b`, `/api/payments/b2b/employees` | (review) | Same pattern likely |
| `/api/bulk-inflate` | GET | Seeds/rollback; `?rollback=true` **deletes modules** — **critical** |
| `/api/trainer/submit-feedback` | POST | Writes to `handwriting_assessments` |
| `/api/trainer/friction-report`, `/api/trainer/verify-milestone` | (review) | Trainer-only data/actions |
| `/api/instructor/*`, `/api/supervisor/*` | (review) | Role-specific data |
| `/api/vault/upload` | POST | Placeholder now; when implemented must be protected |
| `/api/analyze-handwriting` | POST | Writes assessments |
| `/api/friction-data` | GET | Friction logs |
| `/api/enrollments`, `/api/courses`, `/api/modules` | GET/POST | Data exposure or mutation |

**Recommendation:** For every route that reads or writes sensitive or role-scoped data:

- Resolve the user (e.g. via Supabase auth in Route Handler using cookies or `Authorization` header).
- For admin/trainer/instructor/supervisor routes: check `user.user_metadata?.role` (or equivalent) and return 403 if role is not allowed.
- Use Supabase service role only in server-side routes that intentionally bypass RLS; never expose service role to the client.

### 4.2 Routes with weak or custom auth

- **`/api/assessment` (POST):** Uses header `x-admin-id` and compares to a **hardcoded UUID** (`615671ad-a326-4d98-9b09-cb6c4c54c913`). Not role-based; brittle and easy to bypass if leaked.
- **Recommendation:** Replace with server-side session + role check (e.g. `user_metadata.role === 'admin'`).

### 4.3 Placeholder or broken routes

| Route | Issue |
|-------|--------|
| `/api/dashboard-metrics` | `route.ts` returns placeholder with Windows path `D:\cbtc-final\cbtc-lms\app\api\dashboard-metrics`. Real logic lives in `routes.ts` (not used by Next.js). |
| `/api/analytics/friction` | Same: placeholder in `route.ts`, real logic in `routes.ts`. `routes.ts` uses deprecated `createRouteHandlerClient` from `@supabase/auth-helpers-nextjs`. |
| `/api/vault/upload` | Placeholder only; no real upload. |

**Recommendation:**

- Move logic from `dashboard-metrics/routes.ts` into `dashboard-metrics/route.ts` (and remove Windows path from any user-facing message).
- Move logic from `analytics/friction/routes.ts` into `analytics/friction/route.ts`; replace `createRouteHandlerClient` with `@supabase/ssr` server client (e.g. from `@/lib/supabase-server` or cookie-based creation).
- Implement vault upload when needed and protect with auth + Supabase Storage RLS.

### 4.4 Health and debug routes

- **`/api/health`:** Queries table `users`. Supabase does not expose `auth.users` as a public table; typically you have `profiles` or similar. If you don’t have a public `users` table, this will fail in production.
- **`/api/debug/health-check`:** Uses `courses` table — correct. Prefer this (or a single health route) for “DB connectivity” checks.
- **Recommendation:** Change `/api/health` to query a table that exists in your Supabase project (e.g. `courses` or `profiles`), or remove the DB check and only check env/process, or consolidate with `/api/debug/health-check`.

### 4.5 Duplicate / dead code

- **`src/app/api/courses/route.ts`:** Duplicate of `app/api/courses/route.ts`. Uses relative import `'.\/utils/supabase/server'` (same class of bug as the analyze-assessment fix). Next.js App Router uses the `app/` directory at root, so the active route is `app/api/courses/route.ts`. The file under `src/app/` is effectively dead and can be removed or updated if you ever switch to `src/app` as the app root.

---

## 5. Supabase Usage Summary

### 5.1 Tables referenced by API routes (app/)

- `profiles`, `users`, `courses`, `modules`, `assessment_pool`, `friction_logs`, `handwriting_assessments`, `trainer_predictive_insights`, `user_profiles`, `students`, `student_profiles`, `evidence_logs`, `vocational_assessments`, `questions`, `entities`.

Ensure these exist in Supabase and that RLS policies match your intended roles (admin/trainer/student). If API routes use the **service role** key, they bypass RLS — so authorization must be enforced in the route (session + role check).

### 5.2 Client usage

- **Server-side:** Prefer a single pattern: e.g. `createClient()` from `@/lib/supabase-server` (which uses service role or anon as configured).
- **Client-side:** Use `NEXT_PUBLIC_SUPABASE_*` and anon key only; never expose service role.
- Some routes use `@/lib/supabase` (singleton anon client); others use `createClient()` from `@/lib/supabase-server`. Standardizing reduces mistakes.

---

## 6. Environment Variables

### 6.1 Required for production (Vercel)

Set these in Vercel Project → Settings → Environment Variables:

| Variable | Required | Used for |
|----------|----------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Yes | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Yes | Browser + server anon access |
| `SUPABASE_SERVICE_ROLE_KEY` | Yes | Server-only admin operations (never expose to client) |
| `STRIPE_SECRET_KEY` | If using payments | Payments |
| `BREVO_API_KEY` | If using email | Brevo mail |
| `NEXT_PUBLIC_API_URL` | Optional | Defaults to `https://api.cobelcenter.com` |

### 6.2 Issues in code

- **`audio-assessment.ts`:** Contains `apiKey: 'YOUR_OPENAI_API_KEY'`. Must use `process.env.OPENAI_API_KEY` (or similar) and set in Vercel if you use this flow.
- **Supabase Edge Function `process-handwriting`:** Uses `Deno.env.get('OCR_API_KEY') || 'helloworld'`. Remove fallback; fail explicitly if the secret is missing.

No `.env.example` exists. Adding one (see below) will help deployment and onboarding.

---

## 7. Deployment Readiness

### 7.1 Vercel

- **vercel.json:** `{"version":2,"cleanUrls":true,"framework":"nextjs"}` — fine. No domain config needed if you attach cobelbtc.com in Vercel UI and point DNS from FastComet to Vercel.
- **next.config.js:** `images.domains` includes Supabase host; `eslint.ignoreDuringBuilds` and `typescript.ignoreBuildErrors` are true — build is permissive. Re-enable type checking and lint for production when possible.

### 7.2 Domain (cobelbtc.com on FastComet)

- In **FastComet** (DNS): Add A/CNAME records as instructed by Vercel (e.g. CNAME `cobelbtc.com` or `www` → `cname.vercel-dns.com` or the given Vercel target).
- In **Vercel:** Add domain `cobelbtc.com` (and optionally `www.cobelbtc.com`), then follow Vercel’s DNS instructions.

### 7.3 Supabase

- Confirm project `rvlcpygatguvxhuliand` is in production and URL/keys match Vercel env.
- In Supabase Dashboard → Authentication → URL Configuration: set Site URL to `https://cobelbtc.com` and add `https://cobelbtc.com/**` (and Vercel preview URLs if needed) to Redirect URLs.
- Ensure all tables used by the app exist and RLS is configured; test with anon vs service role as intended.

---

## 8. Checklist Before Go-Live

- [x] Restore and fix `middleware.ts` (auth + RBAC + correct `/api/analyze-handwriting` path).
- [ ] Add auth + role checks to all sensitive API routes (admin, trainer, payments, bulk-inflate, vault, etc.).
- [x] Replace placeholder `route.ts` implementations with real logic for dashboard-metrics and analytics/friction; remove or fix Windows path in messages.
- [x] Fix `/api/health` to use an existing Supabase table (courses).
- [ ] Remove hardcoded admin UUID in `/api/assessment`; use session + role.
- [x] Add `.env.example` (no secrets) and document required vars.
- [ ] Set all required env vars in Vercel; remove any hardcoded API keys from code.
- [ ] Point cobelbtc.com DNS (FastComet) to Vercel; configure Supabase redirect URLs for cobelbtc.com.
- [ ] (Optional) Re-enable TypeScript strict checks and ESLint in build for better long-term reliability.

---

## 9. Document References

- **FASTCOMET_DEPLOYMENT.md:** Describes full Next.js deployment on FastComet (PM2, Node). Use this only if you host the app on FastComet; for “frontend on Vercel” it’s not the primary path.
- **DEPLOYMENT_AUDIT_REPORT.md:** This file.

---

*End of audit. Address critical and high items before production.*
