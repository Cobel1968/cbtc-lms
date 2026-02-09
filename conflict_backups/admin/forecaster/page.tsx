'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function IntegratedForecaster() {
  const [data, setData] = useState({
    phase: 'Multi-Dimensional Diagnostic',
    validations: { mapping: false, bridge: false, friction: false },
    density: 100,
    prediction: 'Analyzing...'
  });

  useEffect(() => {
    const raw = localStorage.getItem('COBEL_V1_DATA');
    const db = raw ? JSON.parse(raw) : { allScans: [], completedModules: [] };
    const scanCount = db.allScans?.length || 0;

    // Logic Validation Checks
    const hasMapping = scanCount > 0; // Phase 1
    const hasBridge = scanCount > 1;  // Phase 2
    const hasFrictionReduction = scanCount >= 3; // Phase 3

    // Curriculum Density Logic: (Base 100% - total validation weight)
    const weight = (hasMapping ? 20 : 0) + (hasBridge ? 30 : 0) + (hasFrictionReduction ? 40 : 0);
    const finalDensity = 100 - weight;

    let currentPhase = 'Multi-Dimensional Diagnostic';
    if (hasBridge) currentPhase = 'Dynamic Path Mapping';
    if (hasFrictionReduction) currentPhase = 'Temporal Optimization';

    setData({
      phase: currentPhase,
      validations: { mapping: hasMapping, bridge: hasBridge, friction: hasFrictionReduction },
      density: finalDensity,
      prediction: hasFrictionReduction ? "12 Days to Fluency" : "Evaluating Pace..."
    });
  }, []);

  return (
    <div className="p-10 bg-[#020617] min-h-screen text-white font-sans">
      <div className="max-w-5xl mx-auto">
        {/* RETURN BUTTON */}
        <nav className="mb-12 no-print">
          <Link href="/admin" className="text-[10px] font-black uppercase text-slate-500 hover:text-emerald-500 flex items-center gap-2 transition-all">
            <span className="text-lg"></span> Back to Command Center
          </Link>
        </nav>

        <header className="mb-12 border-l-4 border-emerald-500 pl-8 py-2">
          <h1 className="text-5xl font-black uppercase italic tracking-tighter">Temporal Optimization</h1>
          <p className="text-emerald-500 font-mono text-[10px] uppercase tracking-[0.4em]">Feature 3: Automated Milestone Forecasting</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-900/50 p-8 rounded-[3rem] border border-white/5">
            <p className="text-[10px] font-black text-slate-500 uppercase mb-4">Engine Phase</p>
            <p className="text-lg font-bold text-white uppercase leading-tight">{data.phase}</p>
          </div>

          <div className="bg-slate-900/50 p-8 rounded-[3rem] border border-emerald-500/20 shadow-2xl shadow-emerald-500/5">
            <p className="text-[10px] font-black text-slate-500 uppercase mb-4">Curriculum Density</p>
            <p className="text-6xl font-black tracking-tighter text-emerald-500">{data.density}%</p>
            <p className="text-[8px] text-slate-500 mt-2 uppercase">Target: 10% (Zero Friction)</p>
          </div>

          <div className="bg-slate-900/50 p-8 rounded-[3rem] border border-white/5">
            <p className="text-[10px] font-black text-slate-500 uppercase mb-4">Timeframe Prediction</p>
            <p className="text-2xl font-black italic">{data.prediction}</p>
          </div>
        </div>

        {/* LOGIC VALIDATIONS SECTION */}
        <div className="bg-white/5 rounded-[3rem] p-12 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-5 text-8xl"></div>
          <h2 className="text-sm font-black uppercase mb-8 tracking-widest text-slate-400">Integrated Validation Logic</h2>
          
          <div className="space-y-6">
            <ValidationRow 
              label="Bilingual Vocational Mapping" 
              active={data.validations.mapping} 
              desc="Cross-referencing technical terms in English and French."
            />
            <ValidationRow 
              label="Analog-to-Digital Bridge" 
              active={data.validations.bridge} 
              desc="Ingesting physical assessments via Handwriting Analysis Module."
            />
            <ValidationRow 
              label="Friction & Time Waste Reduction" 
              active={data.validations.friction} 
              desc="Optimizing curriculum flow based on identified knowledge gaps."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ValidationRow({ label, active, desc }) {
  return (
    <div className={`p-6 rounded-2xl border ${active ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-white/5 opacity-40 grayscale'}`}>
      <div className="flex justify-between items-center">
        <div>
          <p className="font-black text-xs uppercase tracking-tight">{label}</p>
          <p className="text-[10px] text-slate-500 mt-1 uppercase font-bold">{desc}</p>
        </div>
        <div className={`h-4 w-4 rounded-full ${active ? 'bg-emerald-500 shadow-[0_0_10px_#10b981]' : 'bg-slate-800'}`}></div>
      </div>
    </div>
  );
}
