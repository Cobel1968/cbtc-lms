import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  const status: any = {
    database: "checking",
    storage: "checking",
    env_vars: "checking"
  };

  try {
    // 1. Check Env Vars
    status.env_vars = process.env.NEXT_PUBLIC_SUPABASE_URL ? " Configured" : " Missing URL";
    
    // 2. Test DB Connection (Querying coursesData count)
    const { count, error: dbError } = await supabase.from('courses').select('*', { count: 'exact', head: true });
    status.database = dbError ? ` Error: ${dbError.message}` : " Connected";

    // 3. Test Storage Access (Checking Evidence Vault bucket)
    const { data: buckets, error: storageError } = await supabase.storage.listBuckets();
    const vaultExists = buckets?.find(b => b.name === 'evidence-vault');
    status.storage = vaultExists ? " Vault Online" : " Bucket 'evidence-vault' not found";

    return NextResponse.json({ engine: "Cobel AI Engine v1.0", status });
  } catch (err: any) {
    return NextResponse.json({ status: "critical_failure", error: err.message }, { status: 500 });
  }
}
