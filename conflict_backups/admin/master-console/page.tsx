'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function MasterConsole() {
  const [db, setDb] = useState({ allScans: [], completedModules: [] });
  const router = useRouter();

  useEffect(() => {
    const raw = localStorage.getItem('COBEL_V1_DATA');
    if (raw) setDb(JSON.parse(raw));
  }, []);

  const totalDocs = db.allScans?.length || 0;
  const density = Math.max(10, 100 - (totalDocs * 30));

  return (
    <div className="bg-[#F1F5F9] min-h-screen font-sans">
      <nav className="bg-[#003366] p-6 text-white flex justify-between items-center shadow-lg">
        <div className="font-black italic text-2xl tracking-tighter">CBTC sarl</div>
        <div className="flex gap-4">
            <button onClick={() => window.location.reload()} className="text-[10px] font-bold bg-white/10 px-4 py-2 rounded-full hover:bg-emerald-500 transition-all">REFRESH ENGINE</button>
        </div>
      </nav>

      <main className="p-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
           <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200">
              <p className="text-[10px] font-black text-slate-400 uppercase">Curriculum Density</p>
              <p className="text-5xl font-black text-[#003366]">{density}%</p>
              <p className="text-[8px] font-bold text-emerald-600 mt-2 uppercase tracking-widest">Efficiency Mode: Active</p>
           </div>
           <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200">
              <p className="text-[10px] font-black text-slate-400 uppercase">Ingested Evidence</p>
              <p className="text-5xl font-black text-[#003366]">{totalDocs}</p>
              <Link href="/admin/vault" className="text-[8px] font-black text-blue-600 mt-2 uppercase hover:underline">Open Vault View </Link>
           </div>
           <div className="bg-[#003366] p-8 rounded-[2.5rem] shadow-xl text-white relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 text-9xl opacity-5"></div>
              <p className="text-[10px] font-black opacity-50 uppercase">Time Waste Reduced</p>
              <p className="text-5xl font-black italic">+{totalDocs * 2.5}h</p>
              <p className="text-[10px] font-bold text-emerald-400 mt-2 uppercase">Temporal Optimization Phase 3</p>
           </div>
        </div>

        {/* ACTIVE ENGINE BUTTONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <PortalLink title="Multi-Dimensional Diagnostic" path="/enrollment/diagnostic" icon="" color="hover:border-emerald-500" />
          <PortalLink title="Evidence Vault (Bilingual Mapping)" path="/admin/vault" icon="" color="hover:border-blue-500" />
          <PortalLink title="Automated Milestone Forecasting" path="/admin/forecaster" icon="" color="hover:border-purple-500" />
          <PortalLink title="Student Profile" path="/admin/students" icon="" color="hover:border-orange-500" />
        <a href="/student/dashboard" className="flex flex-col items-center justify-center p-8 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[3rem] hover:bg-slate-100 transition-all group">
  <span className="text-[10px] font-black text-slate-400 uppercase">Preview Student Experience</span>
  <div className="w-4 h-1 bg-slate-200 mt-2 rounded-full group-hover:bg-[#E91E63]"></div>
</a> 
 </div> </main>
    </div>
  );
}

function PortalLink({ title, path, icon, color }) {
  return (
    <Link href={path} className={`bg-white p-10 rounded-[3rem] border-2 border-transparent shadow-sm ${color} transition-all flex flex-col items-center text-center group`}>
      <span className="text-5xl mb-4 group-hover:scale-110 transition-transform">{icon}</span>
      <span className="text-sm font-black uppercase text-[#003366] tracking-tighter">{title}</span>
      <span className="text-[9px] font-bold text-slate-400 mt-2 uppercase">Execute Module</span>
    </Link>
  );
}








