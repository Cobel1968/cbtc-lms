"use client"
import React from 'react'
import { Zap, Languages, Clock, Award, Target } from 'lucide-react'

interface SidebarProps {
  stats: {
    timeSaved: string;
    fluencyScore: number;
    completionForecast: string;
    currentModule: number;
  }
}

export default function CourseSidebar({ stats }: SidebarProps) {
  return (
    <aside className="w-80 h-[calc(100vh-5rem)] sticky top-20 bg-white border-l border-slate-100 p-8 hidden xl:flex flex-col gap-8">
      <div>
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6">Engine Analytics</h3>
        
        {/* TIME OPTIMIZATION CARD (Feature 3) */}
        <div className="bg-cbtc-navy rounded-3xl p-6 text-white mb-4 relative overflow-hidden">
          <Zap className="absolute -right-2 -top-2 text-cbtc-yellow opacity-20" size={80} />
          <p className="text-[8px] font-black uppercase tracking-widest text-cbtc-yellow mb-1">Temporal Optimization</p>
          <h4 className="text-3xl font-black italic tracking-tighter">-{stats.timeSaved}</h4>
          <p className="text-[10px] opacity-70 font-bold uppercase mt-1">Saved via Adaptive Logic</p>
        </div>

        {/* BILINGUAL FLUENCY METER (Feature 2) */}
        <div className="bg-cbtc-slate/30 rounded-3xl p-6 border border-white">
          <div className="flex justify-between items-center mb-4">
            <Languages size={18} className="text-cbtc-magenta" />
            <span className="text-[10px] font-black uppercase tracking-widest text-cbtc-navy">Bilingual Fluency</span>
          </div>
          <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-cbtc-magenta transition-all duration-1000" 
              style={{ width: `${stats.fluencyScore}%` }}
            />
          </div>
          <p className="text-[9px] font-bold text-slate-500 uppercase mt-3">Current Level: Technical B2</p>
        </div>
      </div>

      <div className="mt-auto space-y-4">
        <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
          <div className="w-10 h-10 bg-cbtc-blue/10 rounded-xl flex items-center justify-center text-cbtc-blue">
            <Target size={20} />
          </div>
          <div>
            <p className="text-[8px] font-black text-slate-400 uppercase">Next Milestone</p>
            <p className="text-[10px] font-black text-cbtc-navy uppercase">Module 0{stats.currentModule + 1} Assessment</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 rounded-2xl bg-cbtc-yellow/10">
          <Clock size={20} className="text-cbtc-yellow" />
          <div>
            <p className="text-[8px] font-black text-slate-400 uppercase">Forecasted Completion</p>
            <p className="text-[10px] font-black text-cbtc-navy uppercase">{stats.completionForecast}</p>
          </div>
        </div>
      </div>
    </aside>
  )
}