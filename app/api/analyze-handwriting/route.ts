import { createClient } from '@/lib/supabase-server';
import { NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth-route';

export async function POST(req: Request) {
  const auth = await requireAuth();
  if (!auth.ok) return NextResponse.json({ error: auth.error }, { status: auth.status });
  try {
    const supabase = createClient();
    const { studentId, moduleId, rawText } = await req.json();
    
    // ONLY INSERT: Create the record for the trainer to review later.
    // No "profile update" logic allowed here.
    const { data, error } = await supabase
      .from('handwriting_assessments')
      .insert([{
        student_id: studentId,
        module_id: moduleId,
        raw_ocr_text: rawText,
        is_synchronized: false // Waiting for trainer review
      }])
      .select();

    if (error) throw error;
    return NextResponse.json(data, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
