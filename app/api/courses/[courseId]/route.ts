import { supabase } from "@/lib/supabase";
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// GET handler for dynamic course ID
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    // Fetch modules for the given course
    const { data: modules, error } = await supabase
      .from('modules')
      .select('id, title_en, title_fr')
      .eq('course_id', id); // filter modules by course ID

    if (error) throw error;

    if (!modules || modules.length === 0) {
      return NextResponse.json({ error: `No modules found for course ${id}` }, { status: 404 });
    }

    const totalTarget = 191;
    const perModule = Math.floor(totalTarget / modules.length);
    let currentTotal = 0;

    const updates = modules.map((mod, index) => {
      const count = index === modules.length - 1 ? totalTarget - currentTotal : perModule;
      currentTotal += count;

      const questions = Array.from({ length: count }).map((_, i) => ({
        id: crypto.randomUUID(),
        text_en: `Technical Assessment: ${mod.title_en} - Item ${i + 1}`,
        text_fr: `Évaluation technique: ${mod.title_fr} - Élément ${i + 1}`,
        technical_term: `${mod.title_en.split(' ')[0]}_Term_${i}`,
        difficulty: 0.7
      }));

      return supabase
        .from('modules')
        .update({ category: JSON.stringify(questions) })
        .eq('id', mod.id);
    });

    await Promise.all(updates);

    return NextResponse.json({
      message: 'Category Injection Complete',
      course_id: id,
      total_questions: currentTotal
    });
  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
