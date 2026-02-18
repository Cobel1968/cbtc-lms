import { createClient } from '@/lib/supabase-server';
import { getOptimizationMetrics, DiagnosticLevel } from '@/lib/pedagogy';
import { requireAdmin } from '@/lib/auth-route';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const auth = await requireAdmin();
  if (!auth.ok) return NextResponse.json({ error: auth.error }, { status: auth.status });
  try {
    const supabase = createClient();
    const { studentId, newLevel } = await req.json();
    
    // Admin logic: Actual profile modification
    const metrics = getOptimizationMetrics(newLevel as DiagnosticLevel);

    const { error } = await supabase.from('profiles')
      .update({ 
        diagnostic_status: metrics.status, 
        time_saved: metrics.timeValue 
      })
      .eq('id', studentId);

    if (error) throw error;
    return NextResponse.json({ success: true, message: "Profile updated by Admin authority." });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
