import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  const report: any = { timestamp: new Date().toISOString(), checks: {} };

  try {
    // 1. DATA REACHABILITY & BILINGUAL CONTENT
    const { data: student, error: sError } = await supabase
      .from('student_profiles')
      .select('id, name_en, name_fr, curriculum_density')
      .eq('name_en', 'Jean Marc')
      .single();

    report.checks.data_integrity = sError ? " Fail" : " Pass";
    report.checks.bilingual_ready = (student?.name_fr) ? " Pass" : " name_fr is NULL";

    // 2. RELATIONSHIP TRAVERSAL (The UUID Bridge)
    const { data: assessments, error: aError } = await supabase
      .from('physical_assessments')
      .select('*')
      .eq('student_id', student?.id);

    report.checks.uuid_handshake = aError ? " Fail" : " Pass";

    // 3. ENGINE LOGIC: Temporal Optimization Calculation
    const density = student?.curriculum_density || 1.0;
    const baseDuration = 12; // weeks
    const optimized = baseDuration / density;
    report.checks.logic_calc = (optimized <= baseDuration) ? " Valid" : " Logic Error";

    return NextResponse.json({ 
      status: "FULL AUDIT COMPLETE", 
      student_id: student?.id,
      metrics: { density, optimized_weeks: optimized.toFixed(2) },
      report 
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
