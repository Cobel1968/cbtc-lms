"use client";

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseDB';

export default function MilestoneForecast({ studentId }: { studentId: string }) {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    async function getForecast() {
      const { data } = await supabase
        .from('student_diagnostics')
        .select('forecasted_days')
        .eq('student_id', studentId)
        .single();
      
      if (data) setDays(data.forecasted_days);
    }
    if (studentId) getForecast();
  }, [studentId]);

  return (
    <div className="mt-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
      <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Timeframe Prediction</p>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-black text-[#003366]">{days ?? '--'}</span>
        <span className="text-xs font-bold text-slate-500 uppercase">Days to Completion</span>
      </div>
    </div>
  );
}
