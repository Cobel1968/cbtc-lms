"use client";
import React, { useState } from 'react';
import { Play, CheckCircle, Clock, Languages } from 'lucide-react';

export default function EngineDemo() {
  const [stage, setStage] = useState('idle'); // idle, scanning, analyzing, updated
  const [density, setDensity] = useState(1.0);

  const startDemo = () => {
    setStage('scanning');
    setTimeout(() => setStage('analyzing'), 2000);
    setTimeout(() => {
      setStage('updated');
      setDensity(1.45);
    }, 4500);
  };

  return (
    <div className="bg-slate-950 border-2 border-amber-500/20 rounded-3xl p-8 max-w-2xl mx-auto shadow-2xl">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-white font-black uppercase tracking-tighter">Cobel AI Engine: Live Simulation</h3>
        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${stage === 'updated' ? 'bg-green-500/20 text-green-500' : 'bg-amber-500/20 text-amber-500'}`}>
          {stage === 'idle' ? 'Ready' : stage + '...'}
        </span>
      </div>

      <div className="space-y-6">
        {/* Visual Progress Map */}
        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
          <div className="flex justify-between mb-2">
            <span className="text-slate-500 text-[10px] font-bold uppercase">Curriculum Density</span>
            <span className="text-amber-500 font-black">{density}x</span>
          </div>
          <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-amber-600 to-amber-400 transition-all duration-1000" 
              style={{ width: `${(density / 2) * 100}%` }}
            />
          </div>
        </div>

        {/* Console Output */}
        <div className="bg-black rounded-xl p-4 font-mono text-[11px] h-32 overflow-hidden border border-slate-800">
          <p className="text-slate-500">{">"} Initializing Pedagogical Bridge...</p>
          {stage !== 'idle' && <p className="text-blue-400">{">"} Ingesting Physical Assessment_01_ELEC.png</p>}
          {stage === 'analyzing' && <p className="text-amber-500 animate-pulse">{">"} OCR Pre-processing: Detecting Bilingual technical terms...</p>}
          {stage === 'updated' && (
            <>
              <p className="text-green-500">{">"} Terms Detected: [Disjoncteur, Tension, Câblage]</p>
              <p className="text-green-500">{">"} Bilingual Fluency Score: 0.98</p>
              <p className="text-white font-bold">{">"} ADJUSTING GRADUATION TIMELINE: -4 WEEKS</p>
            </>
          )}
        </div>

        <button 
          onClick={startDemo}
          disabled={stage !== 'idle'}
          className="w-full bg-amber-500 hover:bg-amber-400 disabled:bg-slate-800 text-slate-950 font-black py-4 rounded-xl uppercase tracking-widest transition-all flex items-center justify-center gap-3"
        >
          {stage === 'idle' ? <><Play size={16}/> Run Demo Simulation</> : <CheckCircle size={16}/>}
        </button>
      </div>
    </div>
  );
}