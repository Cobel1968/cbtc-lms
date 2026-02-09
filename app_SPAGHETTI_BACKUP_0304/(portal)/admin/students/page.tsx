import React from 'react';
import { supabase } from '@/lib/supabase';

export default async function AdminStudentTracker() {
  // Fetching profiles with their calculated density and course links
  const { data: students } = await supabase
    .from('user_profiles')
    .select('*, physical_assessments(count)');

  return (
    <div className="p-8 bg-black min-h-screen text-white">
      <div className="mb-10">
        <h1 className="text-3xl font-black uppercase tracking-tighter">Student Technical Audit</h1>
        <p className="text-slate-500">Monitoring Adaptive Learning Metrics & Evidence Vault Status.</p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/30 backdrop-blur-md">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-900/50">
              <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-500">Student ID</th>
              <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-500">Technical Density</th>
              <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-500">Bilingual Status</th>
              <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-500">Assessments</th>
              <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-500">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            {students?.map((s) => (
              <tr key={s.id} className="hover:bg-slate-800/30 transition-colors">
                <td className="p-6 font-mono text-amber-500">{s.id}</td>
                <td className="p-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-black">{s.curriculum_density || '1.0'}x</span>
                    <div className="h-1.5 w-24 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-amber-500" 
                        style={{ width: `${(s.curriculum_density || 1) * 50}%` }}
                      />
                    </div>
                  </div>
                </td>
                <td className="p-6">
                  <span className="px-3 py-1 rounded-md bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase">
                    Bilingual Mapping: OK
                  </span>
                </td>
                <td className="p-6 text-slate-400 font-bold">
                  {s.physical_assessments?.[0]?.count || 0} Files Vaulted
                </td>
                <td className="p-6">
                  <button className="text-[10px] font-black uppercase tracking-widest text-white hover:text-amber-500 transition-colors">
                    Generate Compliance PDF
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
