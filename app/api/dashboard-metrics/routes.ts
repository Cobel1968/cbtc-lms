import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

export async function GET() {
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    // Calcul de la densité par cours pour le forecasting
    const { data, error } = await supabase
        .from('modules')
        .select(`
            domaine,
            credits_ects,
            duree_heures,
            courses(title)
        `)

    if (error) return NextResponse.json({ error: error.message }, { status: 400 });

    // Agrégation pour le Dashboard Cobel
    const stats = data.reduce((acc: any, curr: any) => {
        const courseTitle = curr.courses?.title || 'Non classé';
        if (!acc[courseTitle]) {
            acc[courseTitle] = { total_ects: 0, total_hours: 0, module_count: 0 };
        }
        acc[courseTitle].total_ects += curr.credits_ects || 0;
        acc[courseTitle].total_hours += curr.duree_heures || 0;
        acc[courseTitle].module_count += 1;
        return acc;
    }, {});

    return NextResponse.json({
        engine: "Cobel AI Optimization Hub",
        timestamp: new Date().toISOString(),
        curriculum_metrics: stats
    });
}