import { supabase } from './supabase';

export async function getStudentCredential(studentId: string) {
  const { data: profile, error: profileError } = await supabase
    .from('student_profiles')
    .select('full_name, technical_fluency, milestone_history')
    .eq('id', studentId)
    .single();

  const { data: vaultFiles, error: vaultError } = await supabase.storage
    .from('evidence-vault')
    .list(`${studentId}/compliance`);

  if (profileError || vaultError) return null;
  return { profile, vaultFiles, timestamp: new Date().toLocaleDateString() };
}