import { supabase } from "@/lib/supabase";
import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth-route';

export const dynamic = 'force-dynamic';

export async function GET() {
  const auth = await requireAdmin();
  if (!auth.ok) return NextResponse.json({ error: auth.error }, { status: auth.status });
  const { data, error } = await supabase
    .from('trainer_predictive_insights')
    .select('*');

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}




