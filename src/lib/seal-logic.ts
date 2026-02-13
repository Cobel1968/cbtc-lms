import { supabase } from './supabase';

export async function sealAssessment(fileName: string, studentId: string) {
  const sourcePath = `${studentId}/scanned/${fileName}`;
  const targetPath = `${studentId}/compliance/${fileName}`;

  try {
    // Cross-bucket move: Copy then Delete
    const { error: copyError } = await supabase.storage
      .from('assessments')
      .copy(sourcePath, targetPath, { destinationBucket: 'evidence-vault' });

    if (copyError) throw copyError;

    const { error: deleteError } = await supabase.storage
      .from('assessments')
      .remove([sourcePath]);

    if (deleteError) console.warn("File moved, but cleanup failed.");

    return { success: true };
  } catch (err: any) {
    console.error(" Seal Error:", err.message);
    return { success: false, error: err.message };
  }
}