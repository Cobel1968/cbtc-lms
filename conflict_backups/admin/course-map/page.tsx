'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CenteredBrandedMap() {
  const [completed, setCompleted] = useState([]);
  const [mounted, setMounted] = useState(false);
  const coreModules = ['OG-1', 'OG-2', 'M-1'];

  useEffect(() => {
    setMounted(true);
    const data = localStorage.getItem('COBEL_V1_DATA');
    if (data) setCompleted(JSON.parse(data).completedModules || []);
  }, []);

  if (!mounted) return <div className="bg-[#020617] min-h-screen" />;

  const isFullyCertified = coreModules.every(m => completed.includes(m));
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="p-10 bg-[#020617] min-h-screen text-white font-sans print:bg-white print:text-black">
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          @page { size: portrait; margin: 0; }
          .no-print { display: none !important; }
          .certificate-page {
            page-break-before: always;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            transform: rotate(90deg);
          }
        }
        .cert-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          padding: 40px 0;
        }
      `}} />

      <div className="max-w-5xl mx-auto">
        {/* NAV */}
        <nav className="mb-12 flex justify-between items-center no-print">
          <Link href="/admin" className="text-[10px] font-black uppercase text-slate-500 hover:text-emerald-500 transition-all flex items-center gap-2">
             Back to Command Center
          </Link>
          <button onClick={() => window.print()} className="bg-emerald-500 text-black px-8 py-3 rounded-2xl font-black uppercase text-[10px] shadow-xl shadow-emerald-500/20">
            Download Final Packet
          </button>
        </nav>

        {/* PAGE 1: TRANSCRIPT */}
        <section className="min-h-screen border-b border-white/5 pb-20 print:border-none">
          <div className="flex justify-between items-start border-b-4 border-emerald-500 pb-8 mb-12">
            <div>
              <h1 className="text-4xl font-black uppercase italic tracking-tighter">Academic Transcript</h1>
              <p className="text-emerald-500 font-mono text-[10px] mt-1 uppercase">Validating Technical Fluency</p>
            </div>
            <div className="text-right text-[9px] font-black text-slate-400 uppercase leading-relaxed">
              <p className="text-white">CBTC sarl</p>
              <p>Abidjan 01 BP 4256 Abidjan 01</p>
              <p>Tel: 0555007884</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {coreModules.map(id => (
              <div key={id} className="flex justify-between items-center p-8 bg-slate-900 border border-white/5 rounded-3xl print:bg-slate-50 print:border-black/10">
                <span className="font-black text-xl uppercase tracking-tighter">{id}</span>
                <span className={`text-[10px] font-black uppercase px-4 py-1 rounded-full ${completed.includes(id) ? 'bg-emerald-500 text-black' : 'bg-red-500/20 text-red-500'}`}>
                  {completed.includes(id) ? 'Verified' : 'Pending'}
                </span>
              </div>
            ))}
          </div>

          <div className="flex justify-end mt-16">
            <div className="border-4 border-emerald-500 p-6 rounded-2xl rotate-[-5deg] text-center w-64 bg-emerald-500/5 print:bg-white">
              <p className="text-emerald-500 font-black text-sm uppercase mb-1">Approved for Industry</p>
              <p className="text-[9px] font-bold text-slate-500 uppercase italic">CBTC sarl  Abidjan</p>
              <div className="h-[1px] bg-emerald-500/20 my-2"></div>
              <p className="text-[11px] font-mono font-black text-emerald-400">{currentDate}</p>
            </div>
          </div>
        </section>

        {/* PAGE 2: CENTERED CERTIFICATE */}
        <div className="certificate-page cert-container">
           <div className={`border-[12px] border-emerald-500/20 p-16 rounded-[4rem] text-center bg-slate-900/20 print:bg-white print:border-black/10 print:text-black w-full max-w-[900px] ${isFullyCertified ? 'opacity-100' : 'opacity-20'}`}>
              <div className="flex justify-between mb-8 opacity-50">
                 <span className="text-[8px] font-black uppercase">Ref: CBTC-4256-2026</span>
                 <span className="text-[8px] font-black uppercase text-right">CBTC sarl<br/>Abidjan, CI</span>
              </div>
              
              <h2 className="text-5xl font-black uppercase italic mb-6 tracking-tighter">Certificate of Mastery</h2>
              <p className="text-slate-400 text-xs uppercase font-bold tracking-widest mb-10">Bilingual Technical Fluency awarded to</p>
              
              <h3 className="text-6xl font-serif italic mb-12 underline decoration-emerald-500 underline-offset-8">Mr. Soro</h3>
              
              <div className="mt-10 pt-10 border-t border-white/5 print:border-black/10 flex justify-between items-end">
                 <div className="text-left">
                    <p className="text-[9px] font-black text-slate-500 uppercase">Lead Authority</p>
                    <p className="text-xl font-black italic mt-2">Abel C.</p>
                 </div>
                 <div className="text-right text-[9px] font-bold text-slate-500 uppercase leading-relaxed">
                    <p>CBTC sarl</p>
                    <p>BP 4256 Abidjan 01</p>
                    <p>Tel: 0555007884</p>
                 </div>
              </div>
           </div>
        </div>
        {/* CUMULATIVE PORTFOLIO SECTION */}
        <div className="mt-20 no-print">
          <h2 className="text-sm font-black uppercase text-emerald-500 mb-6 tracking-widest">Full Evidence Archive</h2>
          <div className="grid grid-cols-1 gap-2 border-t border-white/5 pt-6">
            {JSON.parse(localStorage.getItem('COBEL_V1_DATA') || '{"allScans":[]}').allScans?.map((scan, idx) => (
              <div key={idx} className="flex justify-between items-center py-3 px-6 bg-white/5 rounded-xl border border-white/5">
                <span className="text-[10px] font-mono font-black">{scan.id}</span>
                <span className="text-[10px] opacity-50 uppercase">Scan Verified: {new Date(scan.timestamp).toLocaleString()}</span>
                <span className="text-emerald-500 text-[10px] font-black">VALIDATED</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

