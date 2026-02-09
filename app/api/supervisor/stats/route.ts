import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

export async function GET() {
  try {
    const { data: students, error } = await supabase
      .from('student_profiles')
      .select('full_name, curriculum_density, name_fr');

    if (error) throw error;

    const stats = students.map(s => {
      const standardHours = 100; // Mock course length
      const optimizedHours = standardHours / s.curriculum_density;
      return {
        name: s.full_name,
        name_fr: s.name_fr,
        velocity: s.curriculum_density,
        hoursSaved: Math.round(standardHours - optimizedHours)
      };
    });

    return NextResponse.json(stats);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
