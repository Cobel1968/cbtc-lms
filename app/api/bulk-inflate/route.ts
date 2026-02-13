export const dynamic = 'force-dynamic';
import { supabase } from '../../../src/lib/supabase';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    if (searchParams.get('rollback') === 'true') {
        await supabase.from('modules').delete().neq('id', '00000000-0000-0000-0000-000000000000');
        return NextResponse.json({ message: "Rollback successful" });
    }

    const seedsDir = path.join(process.cwd(), 'seeds');
    if (!fs.existsSync(seedsDir)) return NextResponse.json({ error: "Seeds directory missing" });
    
    const files = fs.readdirSync(seedsDir).filter(f => f.endsWith('.json'));
    let successCount = 0;
    let errorLogs = [];

    for (const file of files) {
        try {
            const rawData = fs.readFileSync(path.join(seedsDir, file), 'utf8');
            const seedData = JSON.parse(rawData);
            
            for (const mod of seedData) {
                const { error } = await supabase.from('modules').insert({
                    title_en: mod.module_title,
                    title_fr: mod.module_title,
                    category: JSON.stringify(mod.questions)
                });
                if (!error) successCount++;
            }
        } catch (e: any) {
            errorLogs.push("Error in " + file + ": " + e.message);
        }
    }

    return NextResponse.json({ 
        message: "Inflation Attempted", 
        inflated: successCount, 
        issues: errorLogs 
    });
}
