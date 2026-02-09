"use client"
import React from 'react'
import Sidebar from '@/components/Sidebar'
import { Award, Globe, ShieldCheck, MessageSquare, ArrowUpRight } from 'lucide-react'

export default function ReadinessAudit() {
  const readinessData = {
    student: "Pilot User 01",
    technical: { score: 94, status: "Expert", path: "QC/QA" },
    linguistic: { score: 72, status: "IELTS 6.5 Target", path: "Linguistic Bridge" },
    ethical: { score: 88, status: "High Humility", path: "Conflict Resolution" }
  }

  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar />
      <div className="flex-1 p-10">
        <header className="mb-12">
          <h1 className="text-4xl font-black text-slate-900 uppercase italic">Global Readiness Test</h1>
          <p className="text-[#00629B] font-bold text-xs tracking-widest uppercase mt-2">Final Integration Audit // Cobel AI Engine</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* TECHNICAL MASTERY */}
          <div className="bg-white p-8 rounded-[3rem] shadow-xl border-t-8 border-green-500">
            <ShieldCheck className="text-green-500 mb-4" size={32} />
            <h3 className="font-black text-slate-900 uppercase italic">Technical Audit</h3>
            <p className="text-4xl font-black my-2">{readinessData.technical.score}%</p>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[10px] font-black uppercase">
              {readinessData.technical.status}
            </span>
          </div>

          {/* LINGUISTIC BRIDGE */}
          <div className="bg-white p-8 rounded-[3rem] shadow-xl border-t-8 border-blue-500">
            <Globe className="text-blue-500 mb-4" size={32} />
            <h3 className="font-black text-slate-900 uppercase italic">Linguistic Bridge</h3>
            <p className="text-4xl font-black my-2">{readinessData.linguistic.score}%</p>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-[10px] font-black uppercase">
              Needs Signposting Review
            </span>
          </div>

          {/* LEADERSHIP & ETHICS */}
          <div className="bg-white p-8 rounded-[3rem] shadow-xl border-t-8 border-purple-500">
            <MessageSquare className="text-purple-500 mb-4" size={32} />
            <h3 className="font-black text-slate-900 uppercase italic">Ethical Logic</h3>
            <p className="text-4xl font-black my-2">{readinessData.ethical.score}%</p>
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-[10px] font-black uppercase">
              {readinessData.ethical.status}
            </span>
          </div>
        </div>

        {/* ADAPTIVE RECOMMENDATION */}
        <div className="mt-12 bg-slate-900 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-xs font-black text-blue-400 uppercase tracking-widest mb-4">Adaptive HTML Injection Triggered</h2>
            <p className="text-2xl font-light max-w-2xl leading-relaxed">
              Based on the <span className="text-white font-bold italic">IELTS 6.5 Manual</span>, the student lacks complex sentence structures. 
              <span className="text-blue-400 font-bold"> Injecting: Technical Report Writing Module (Module 6) </span> 
              into their student path.
            </p>
            <button className="mt-8 flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-2xl font-black uppercase text-xs hover:bg-blue-400 transition-all">
              Update Student Path <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}