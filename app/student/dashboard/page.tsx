"use client"
import React, { useState, useEffect } from 'react'
import TopNav from '@/components/TopNav'
import { Clock, Zap, TrendingDown, Target, CheckCircle2, ChevronRight } from 'lucide-react'

export default function StudentDashboard() {
  const [optimizationApplied, setOptimizationApplied] = useState(false);
  
  // Simulation of the "Apply Optimization" connection
  const originalHours = 40;
  const optimizedHours = 26.5;

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <TopNav />
      
      <main className="p-10 max-w-6xl mx-auto space-y-12">
        {/* TIME NAVIGATION HEADER */}
        <div className="flex justify-between items-center border-b border-slate-100 pb-8">
          <div>
            <span className="text-blue-600 text-[10px] font-black uppercase tracking-[0.3em]">Temporal Optimization Active</span>
            <h1 className="text-4xl font-black uppercase italic tracking-tighter mt-1">My Technical Path</h1>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-black text-slate-400 uppercase">Current Track</p>
            <p className="text-lg font-black uppercase italic text-blue-600">Hydraulic Systems v4</p>
          </div>
        </div>

        {/* FEATURE 3: TEMPORAL OPTIMIZATION PROGRESS BAR */}
        <div className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex justify-between items-end mb-6">
              <div>
                <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest">Timeframe Prediction</p>
                <h2 className="text-5xl font-black italic uppercase tracking-tighter">
                  {optimizationApplied ? optimizedHours : originalHours} <span className="text-xl">Hours Rem.</span>
                </h2>
              </div>
              <div className="text-right">
                <p className="text-green-400 text-xs font-black uppercase italic">
                  {optimizationApplied ? 'Optimization: Max Density' : 'Baseline Speed'}
                </p>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Est. Completion: March 12</p>
              </div>
            </div>

            {/* DYNAMIC PROGRESS BAR */}
            <div className="relative h-4 w-full bg-white/10 rounded-full overflow-hidden mb-4">
              <div 
                className="h-full bg-blue-500 transition-all duration-1000 ease-out" 
                style={{ width: optimizationApplied ? '65%' : '40%' }}
              />
              {/* SAVED TIME OVERLAY */}
              <div 
                className="absolute top-0 right-0 h-full bg-green-500/30 border-l border-green-400 border-dashed transition-all duration-1000" 
                style={{ width: optimizationApplied ? '25%' : '0%' }}
              />
            </div>
            
            <div className="flex justify-between text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">
              <span>Orientation</span>
              <span>Advanced Logic</span>
              <span>Final Assessment</span>
            </div>
          </div>
          
          {/* BACKGROUND DECORATION */}
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <Clock size={200} />
          </div>
        </div>

        {/* ANALYTIC CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnalyticCard 
            icon={<Target size={20}/>} 
            label="Curriculum Density" 
            value={optimizationApplied ? "High" : "Standard"} 
            sub="Based on Diagnostic" 
          />
          <AnalyticCard 
            icon={<TrendingDown size={20}/>} 
            label="Knowledge Gaps" 
            value="2 detected" 
            sub="Auto-remapping active" 
            color="text-orange-500"
          />
          <div 
            onClick={() => setOptimizationApplied(!optimizationApplied)}
            className="bg-blue-50 border border-blue-100 p-8 rounded-[2.5rem] flex flex-col justify-center cursor-pointer hover:bg-blue-100 transition-all group"
          >
            <Zap size={24} className="text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
            <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Simulate Trainer</p>
            <p className="text-xs font-bold text-slate-900 uppercase italic">Sync Optimization</p>
          </div>
        </div>

        {/* NEXT MILESTONE PREVIEW */}
        <div className="bg-slate-50 border border-slate-100 p-8 rounded-[2.5rem] flex items-center justify-between">
          <div className="flex gap-6 items-center">
             <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-blue-600">
                <CheckCircle2 size={28} />
             </div>
             <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Up Next</p>
                <h4 className="text-lg font-black uppercase italic">Bilingual Fluency Audit (Oral)</h4>
             </div>
          </div>
          <button className="bg-white border border-slate-200 p-4 rounded-2xl hover:bg-slate-900 hover:text-white transition-all">
            <ChevronRight size={20} />
          </button>
        </div>
      </main>
    </div>
  )
}

function AnalyticCard({ icon, label, value, sub, color="text-blue-600" }: any) {
  return (
    <div className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm">
      <div className={`${color} mb-4`}>{icon}</div>
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</p>
      <p className="text-2xl font-black uppercase italic text-slate-900">{value}</p>
      <p className="text-[9px] font-bold text-slate-400 uppercase mt-1">{sub}</p>
    </div>
  )
}