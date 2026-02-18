/**
 * Get the current user and role from the request (Route Handlers).
 * Use for protecting API routes: require auth and/or specific roles.
 */
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import type { User } from '@supabase/supabase-js';

export type Role = 'admin' | 'lead_trainer' | 'student' | string | null;

export async function getRouteUser(): Promise<{
  user: User | null;
  role: Role;
  supabase: ReturnType<typeof createServerClient>;
}> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseKey) {
    return { user: null, role: null, supabase: null as unknown as ReturnType<typeof createServerClient> };
  }

  const cookieStore = await cookies();
  const supabase = createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value;
      },
      set(name: string, value: string, options: Record<string, unknown>) {
        try {
          cookieStore.set({ name, value, ...options } as Parameters<typeof cookieStore.set>[0]);
        } catch (_) {
          // ignore in Route Handler when only reading
        }
      },
      remove(name: string, options: Record<string, unknown>) {
        try {
          cookieStore.set({ name, value: '', ...options } as Parameters<typeof cookieStore.set>[0]);
        } catch (_) {
          // ignore
        }
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const role: Role = user?.user_metadata?.role ?? null;
  return { user, role, supabase };
}

/** Require admin role; returns 403 response if not admin. */
export async function requireAdmin() {
  const { user, role } = await getRouteUser();
  if (!user) return { ok: false as const, status: 401, error: 'Unauthorized' };
  if (role !== 'admin') return { ok: false as const, status: 403, error: 'Forbidden: admin only' };
  return { ok: true as const, user, role };
}

/** Require trainer or admin. */
export async function requireTrainerOrAdmin() {
  const { user, role } = await getRouteUser();
  if (!user) return { ok: false as const, status: 401, error: 'Unauthorized' };
  if (role !== 'admin' && role !== 'lead_trainer')
    return { ok: false as const, status: 403, error: 'Forbidden: trainer or admin only' };
  return { ok: true as const, user, role };
}

/** Require any authenticated user. */
export async function requireAuth() {
  const { user, role } = await getRouteUser();
  if (!user) return { ok: false as const, status: 401, error: 'Unauthorized' };
  return { ok: true as const, user, role };
}
