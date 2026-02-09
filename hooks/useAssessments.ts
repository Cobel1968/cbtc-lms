import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase'; // Adjust based on your client location

export function useAssessments() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAssessments = async () => {
      const { data: assessments, error } = await supabase
        .from('physical_assessments')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error) setData(assessments);
      setLoading(false);
    };

    fetchAssessments();

    // Real-time subscription for the "A-Game" experience
    const channel = supabase
      .channel('schema-db-changes')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'physical_assessments' }, 
      (payload) => {
        setData((prev) => [payload.new, ...prev]);
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, []);

  return { data, loading };
}