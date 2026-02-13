import { supabase } from '@/lib/supabaseDB';
import { analyzeHandwriting } from './handwritingAnalysis';
import { calculateFriction } from './FrictionEngine';
import { predictMilestones } from './ForecastingEngine';

export const runFullDiagnosticSync = async (fileUrl: string, studentId: string) => {
  // 1. Process Physical Assessment
  const analysis = await analyzeHandwriting(fileUrl);
  
  // 2. Run Innovation Logic (Phase 1 & 3)
  const friction = await calculateFriction(analysis.terms);
  const timeline = await predictMilestones(friction.gapCount);

  // 3. IMMEDIATE SUPABASE SYNC
  const { data, error } = await supabase
    .from('student_diagnostics')
    .upsert({
      student_id: studentId,
      technical_terms: analysis.terms,
      friction_score: friction.syncScore,
      forecasted_days: timeline.completionEstimate,
      last_audit_at: new Date().toISOString()
    });

  if (error) throw new Error(`Supabase Sync Failed: ${error.message}`);
  
  return { success: true, timeline };
};
