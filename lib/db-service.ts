export const EngineVault = {
  // Enhanced filing logic
  async uploadAssessment(file, studentId, courseId, role, isDiagnostic = false) {
    const prefix = isDiagnostic ? 'proctored' : 'student';
    const filePath = `${studentId}/${courseId}/${prefix}_${file.name}`;
    
    // Upload to Supabase Bucket 'evidence-vault'
    const { data, error } = await supabase.storage
      .from('evidence-vault')
      .upload(filePath, file);

    return { path: data?.path, error };
  }
};
