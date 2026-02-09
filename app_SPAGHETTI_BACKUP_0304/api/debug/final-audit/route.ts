import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const { data: profile, error: pError } = await supabase
      .from('student_profiles')
      .select('id, full_name, name_en, curriculum_density')
      .limit(1)
      .single();

    const { error: jError } = await supabase
      .from('student_profiles')
      .select('id, physical_assessments(id)')
      .limit(1);

    const { data: buckets } = await supabase.storage.listBuckets();
    const vault = buckets?.find(b => b.name === 'evidence-vault');

    return NextResponse.json({
      schema_sync: pError ? ` ${pError.message}` : " Aligned",
      type_safety: jError ? ` ${jError.message}` : " UUID Handshake OK",
      vault_status: vault ? " Online" : " Bucket Missing"
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}