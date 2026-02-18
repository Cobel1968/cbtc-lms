export const dynamic = 'force-dynamic';
import { supabase } from "@/lib/supabase";
import { NextResponse } from 'next/server';
import { requireTrainerOrAdmin } from '@/lib/auth-route';

export async function GET() {
  const auth = await requireTrainerOrAdmin();
  if (!auth.ok) return NextResponse.json({ error: auth.error }, { status: auth.status });
  const { data, error } = await supabase
    .from('friction_logs')
    .select('term, friction_index, created_at')
    .order('friction_index', { ascending: false });

  if (error) {
    console.error("COBEL_FRICTION_FETCH_ERROR:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}



