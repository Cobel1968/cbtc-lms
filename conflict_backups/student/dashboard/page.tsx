'use client';
import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseDB';

export default function StudentDashboard() {
  const [forecast, setForecast] = useState<number | null>(null);
    useEffect(() => {
    const channel = supabase
      .channel('diagnostic-updates')
      .on('postgres_changes', { event: 'UPSERT', schema: 'public', table: 'student_diagnostics' }, 
      (payload) => {
        // AI Engine: Update UI with new Forecast
        setForecast(payload.new.forecasted_days);
      })
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, []); 
 return (
    <div className="min-h-screen bg-[#FBFBFF] p-10 font-sans">
      <header className="mb-12"> 
   <div className="flex items-center gap-2 mb-6">
    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
    <span className="text-[10px] font-black text-green-600 uppercase tracking-widest">Cobel AI: Live Optimization Active</span>
  </div>
        <h1 className="text-4xl font-black text-[#E91E63] uppercase italic tracking-tighter">My Optimized Curriculum</h1>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2">Cobel AI Engine / Phase 2: Dynamic Path Mapping</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-slate-100">
          <h3 className="font-black text-[#003366] uppercase text-sm mb-4">Current Milestone</h3>
          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-[#E91E63] w-[35%]"></div>
          </div>
          <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase">Forecasted Completion: 14 Days</p>
        </div>
        
        <div className="bg-[#003366] p-8 rounded-[3rem] shadow-xl text-white">
          <h3 className="font-black uppercase text-sm mb-4">Bilingual Technical Fluency</h3>
          <p className="text-3xl font-black italic">82%</p>
          <p className="text-[10px] font-bold opacity-60 uppercase mt-2">English / French Technical Sync</p>
        </div>
      </div>
    </div>
  );
}



