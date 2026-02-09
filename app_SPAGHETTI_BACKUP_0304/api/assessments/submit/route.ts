import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
import { simulateOCR } from '../../../../lib/simulation/handwritingProcessor';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const { student_id, technical_score, assessment_type } = await req.json();

    // 1. Process Handwriting through the Simulation Engine
    const analysis = simulateOCR(technical_score);

    // 2. Insert the physical assessment record
    const { error: insertError } = await supabase
      .from('physical_assessments')
      .insert([{ 
        student_id, 
        technical_score: analysis.technicalFluency, 
        assessment_type,
        status: 'completed' 
      }]);

    if (insertError) throw insertError;

    // 3. Dynamic Path Mapping: Update Student Profile
    // Increase density if fluency is high (Temporal Optimization)
    const newDensity = analysis.technicalFluency > 85 ? 1.25 : 1.15;

    const { error: updateError } = await supabase
      .from('student_profiles')
      .update({ 
        curriculum_density: newDensity,
        technical_fluency: analysis.technicalFluency // New column we are tracking
      })
      .eq('id', student_id);

    if (updateError) throw updateError;

    return NextResponse.json({ 
      success: true, 
      analysis,
      new_density: newDensity 
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
