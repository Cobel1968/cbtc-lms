import { createClient } from '@/lib/supabase-server';
import { NextResponse } from 'next/server';
import { requireTrainerOrAdmin } from '@/lib/auth-route';

export async function POST(req: Request) {
  const auth = await requireTrainerOrAdmin();
  if (!auth.ok) return NextResponse.json({ error: auth.error }, { status: auth.status });
  try {
    const supabase = createClient();
    const { studentId, feedbackText, allocatedModule } = await req.json();
    
    // 1. Trainer ONLY updates the Assessment and the Allocation
    const { error } = await supabase.from('handwriting_assessments')
      .update({ 
        trainer_feedback_text: feedbackText, 
        allocated_module_code: allocatedModule, 
        is_synchronized: true 
      })
      .eq('student_id', studentId)
      .order('processed_at', { ascending: false })
      .limit(1);

    if (error) throw error;
    return NextResponse.json({ success: true, message: "Feedback and Allocation synced." });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
