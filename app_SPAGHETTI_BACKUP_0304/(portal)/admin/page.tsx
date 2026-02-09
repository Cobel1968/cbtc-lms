"use client";

import React from 'react';
import { Activity, Database, Zap, Settings, BarChart3 } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8 font-sans">
      <header className="mb-12 border-b border-slate-900 pb-8 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-black italic tracking-tighter uppercase">
            Admin <span className="text-amber-500">System Logs</span>
          </h1>
          <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-[10px] mt-2">
            Cobel AI Engine // Global Temporal Control
          </p>
        </div>
        <div className="flex gap-4">
           <div className="px-4 py-2 bg-slate-900 rounded-xl border border-slate-800 text-[10px] font-black uppercase tracking-widest text-green-400">
             Engine: Active
           </div>
           <button className="p-2 bg-slate-900 rounded-xl border border-slate-800 hover:border-amber-500 transition-all">
             <Settings size={18} />
           </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Global Efficiency Stats */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/50 p-6 rounded-3xl border border-slate-800">
            <Zap className="text-amber-500 mb-4" />
            <h3 className="text-sm font-bold text-slate-400 uppercase mb-1">Compute Velocity</h3>
            <p className="text-3xl font-black italic">0.42ms <span className="text-xs text-slate-600 not-italic">/ Ingestion</span></p>
          </div>
          <div className="bg-slate-900/50 p-6 rounded-3xl border border-slate-800">
            <BarChart3 className="text-blue-500 mb-4" />
            <h3 className="text-sm font-bold text-slate-400 uppercase mb-1">Milestone Drift</h3>
            <p className="text-3xl font-black italic">±2.1%</p>
          </div>
          <div className="bg-slate-900/50 p-6 rounded-3xl border border-slate-200/5">
            <Database className="text-purple-500 mb-4" />
            <h3 className="text-sm font-bold text-slate-400 uppercase mb-1">Ingestion Volume</h3>
            <p className="text-3xl font-black italic">1,240 <span className="text-xs text-slate-600 not-italic">Assessments</span></p>
          </div>

          {/* System Health Graph Placeholder */}
          <div className="md:col-span-3 bg-slate-900 p-8 rounded-3xl border border-slate-800 h-64 flex items-center justify-center relative overflow-hidden">
            <Activity className="text-amber-500/20 absolute w-full h-full scale-150" />
            <p className="text-slate-500 font-black uppercase tracking-widest text-xs z-10">Real-time Temporal Frequency Monitor</p>
          </div>
        </div>

        {/* Global Controls Sidebar */}
        <div className="space-y-6">
          <div className="bg-amber-500 p-6 rounded-3xl text-slate-950">
            <h3 className="font-black uppercase text-xs mb-4 tracking-widest">Global Density Bias</h3>
            <input type="range" className="w-full accent-slate-950" />
            <div className="flex justify-between text-[10px] font-black mt-2 uppercase">
              <span>Standard</span>
              <span>Aggressive</span>
            </div>
          </div>
          
          <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
             <h3 className="text-xs font-black uppercase text-slate-400 mb-4">Auth Gateways</h3>
             <div className="space-y-3">
                <div className="flex items-center justify-between text-[10px] font-bold">
                  <span>Student Portal</span>
                  <span className="text-green-500">LIVE</span>
                </div>
                <div className="flex items-center justify-between text-[10px] font-bold">
                  <span>Trainer Audit</span>
                  <span className="text-green-500">LIVE</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}