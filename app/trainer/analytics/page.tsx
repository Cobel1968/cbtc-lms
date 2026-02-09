"use client"
import React, { useState } from 'react'
import TopNav from '@/components/TopNav'
import { 
  BarChart3, Mic, PenTool, TrendingUp, 
  AlertTriangle, CheckCircle2, RotateCcw, 
  Activity, Users, Clock 
} from 'lucide-react'

export default function TrainerAnalytics() {
  const [rollbackStatus, setRollbackStatus] = useState(false)

  const triggerRollback = () => {
    setRollbackStatus(true)
    setTimeout(() => setRollbackStatus(false), 2000)
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900">
      <TopNav />
      
      <main className="p-8 max-w-[1600px] mx-auto space-y-8">
        {/* HEADER STATS */}
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-black uppercase italic tracking-tighter">Instructor Analytics</h1>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Cobel AI Engine // Real-Time Ingestion Monitoring</p>
          </div>
          <button 
            onClick={triggerRollback}
            className="flex items-center gap-2 bg-red-50 text-red-600 px-6 py-3 rounded-xl text-[10px] font-black uppercase border border-red-100 hover:bg-red-600 hover:text-white transition-all shadow-sm"
          >
            <RotateCcw size={14} /> {rollbackStatus ? 'Rolling Back...' : 'Manual Milestone Rollback'}
          </button>
        </div>

        {/* ANALYTICS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* ANALOG BRIDGE STATUS */}
          <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 space-y-4">
            <div className="flex justify-between items-center">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><PenTool size={20} /></div>
              <span className="text-green-500 text-[10px] font-black uppercase">Live Ingestion</span>
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Handwriting OCR Accuracy</p>
              <p className="text-3xl font-black italic">94.2%</p>
            </div>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-blue-600 w-[94%]" />
            </div>
          </div>

          {/* BILINGUAL FRICTION SCORE */}
          <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 space-y-4">
            <div className="flex justify-between items-center">
              <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl"><Mic size={20} /></div>
              <span className="text-orange-500 text-[10px] font-black uppercase">Attention Req.</span>
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Bilingual Friction (EN/FR)</p>
              <p className="text-3xl font-black italic">18.5%</p>
            </div>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-orange-500 w-[18%]" />
            </div>
          </div>

          {/* TIME SAVED (TEMPORAL OPTIMIZATION) */}
          <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 space-y-4">
            <div className="flex justify-between items-center">
              <div className="p-3 bg-green-50 text-green-600 rounded-2xl"><TrendingUp size={20} /></div>
              <span className="text-green-500 text-[10px] font-black uppercase">ROI Peak</span>
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Avg. Time Saved / Student</p>
              <p className="text-3xl font-black italic">22.4 hrs</p>
            </div>
            <div className="flex items-center gap-1 text-[9px] font-bold text-green-600 uppercase">
              <Activity size={10} /> +4.2% from last cohort
            </div>
          </div>

          {/* ACTIVE PATHS */}
          <div className="bg-slate-900 p-6 rounded-[2.5rem] shadow-xl text-white space-y-4">
            <div className="flex justify-between items-center">
              <div className="p-3 bg-white/10 text-blue-400 rounded-2xl"><Users size={20} /></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Diagnostic Paths</p>
              <p className="text-3xl font-black italic">142</p>
            </div>
            <p className="text-[9px] font-medium text-slate-400 leading-tight">Dynamic Path Mapping active across 7 vocational tracks.</p>
          </div>

        </div>

        {/* BOTTOM SECTION: RECENT INGESTION LOGS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-black uppercase italic">Automated Milestone Forecasting</h3>
              <button className="text-[10px] font-black uppercase text-blue-600 border-b border-blue-600 pb-1">View Full Log</button>
            </div>
            
            <div className="space-y-4">
              <IngestionRow name="Jean-Pierre" type="Handwriting" track="Hydraulics" status="Mapped" time="2m ago" />
              <IngestionRow name="Sarah L." type="Audio" track="Oil & Gas" status="Friction Alert" time="14m ago" color="text-orange-500" />
              <IngestionRow name="Marcus V." type="Diagnostic" track="QC / QA" status="Completed" time="1h ago" />
            </div>
          </div>

          <div className="bg-blue-600 rounded-[2.5rem] p-8 text-white relative overflow-hidden">
            <h3 className="text-lg font-black uppercase italic mb-4">Curriculum Density</h3>
            <p className="text-xs font-medium opacity-80 mb-6 leading-relaxed">AI suggests reducing content density for the Hydraulics module due to high baseline diagnostic scores.</p>
            <button className="bg-white text-blue-600 w-full py-4 rounded-2xl font-black uppercase text-xs hover:bg-slate-900 hover:text-white transition-all">
              Apply Optimization
            </button>
            <div className="absolute -bottom-10 -right-10 opacity-10">
              <BarChart3 size={200} />
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}

function IngestionRow({ name, type, track, status, time, color = "text-blue-600" }: any) {
  return (
    <div className="flex items-center justify-between p-4 rounded-2xl border border-slate-50 hover:bg-slate-50 transition-all">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-black text-xs">{name[0]}</div>
        <div>
          <p className="text-xs font-black uppercase tracking-tight">{name}</p>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{track}</p>
        </div>
      </div>
      <div className="text-right">
        <p className={`text-[10px] font-black uppercase tracking-widest ${color}`}>{status}</p>
        <p className="text-[9px] font-bold text-slate-300 uppercase">{time}  {type}</p>
      </div>
    </div>
  )
}