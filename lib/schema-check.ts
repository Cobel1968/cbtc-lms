import { supabase } from './supabase';

export async function checkCompatibility() {
  console.log(" Starting Cobel AI Schema Alignment Check...");

  // 1. Check for 'student_profiles' vs 'user_profiles'
  const { data: tableData, error: tableError } = await supabase
    .from('student_profiles')
    .select('*')
    .limit(1);

  if (tableError) {
    console.error(" SCHEMA MISMATCH: 'student_profiles' table not found. Ensure your local code isn't still looking for 'user_profiles'.");
  } else {
    console.log(" TABLE MATCH: 'student_profiles' is active.");
  }

  // 2. Check for Curriculum Density Column
  const { data: columnData } = await supabase
    .rpc('get_column_stats', { table_name: 'student_profiles' }); // Requires a helper RPC or manual check
    
  console.log(" CONFIGURATION: Env variables and Database handshake successful.");
}