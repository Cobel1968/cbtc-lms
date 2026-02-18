export const dynamic = 'force-dynamic';
// D:\CBTC-FINAL\cbtc-lms\app\api\assessment\route.ts
import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth-route';
import { supabase } from "@/lib/supabase";

/**
 * GET: Health Check & Metadata Verification
 * Confirms the Cobel Engine is online before injection.
 */
export async function GET() {
  try {
    const { count, error } = await supabase
      .from('assessment_pool')
      .select('*', { count: 'exact', head: true });

    if (error) throw error;

    return NextResponse.json({
      status: "Cobel Engine Online",
      current_pool_size: count,
      timestamp: new Date().toISOString()
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

/**
 * POST: Segmented Question Injection
 * Handles the 120-question payload for Oil, Hotel, Supply Chain, and AI.
 * Requires admin role (session-based).
 */
export async function POST(req: Request) {
  const auth = await requireAdmin();
  if (!auth.ok) return NextResponse.json({ error: auth.error }, { status: auth.status });
  try {
    const body = await req.json();

    // Insertion partitionnée dans la base de données SQL
    const { data, error } = await supabase
      .from('assessment_pool')
      .insert(body)
      .select();

    if (error) throw error;

    return NextResponse.json({ 
      success: true, 
      message: `Cobel AI Engine: ${data?.length || 0} questions partitioned and live.`,
      subject_sync: "Verified"
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}


