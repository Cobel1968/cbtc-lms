import { supabase } from './supabase';

export async function checkGraduationStatus(studentId: string) {
  // Check if all modules in the Dynamic Path Mapping are 'completed'
  const { data: progress, error } = await supabase
    .from('curriculum_progress')
    .select('status, curriculum_density_update')
    .eq('user_id', studentId);

  if (error) return { eligible: false, reason: error.message };

  const allCompleted = progress.every(m => m.status === 'completed');
  const avgFluency = progress.reduce((acc, curr) => acc + (curr.curriculum_density_update || 0), 0) / progress.length;

  return {
    eligible: allCompleted,
    score: Math.round(avgFluency * 100),
    timestamp: new Date().toISOString()
  };
}