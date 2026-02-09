"use client"
import React, { useState } from 'react'
import TopNav from '@/components/TopNav'
import { Search, Languages, Volume2, CheckCircle2, AlertTriangle, BookOpen } from 'lucide-react'

export default function TechnicalGlossary() {
  const [searchTerm, setSearchTerm] = useState('')

  const terms = [
    { en: "Hydraulic Pump", fr: "Pompe Hydraulique", status: "mastered", gap: false },
    { en: "Pressure Relief Valve", fr: "Soupape de décharge", status: "review", gap: true },
    { en: "Circuit Breaker", fr: "Disjoncteur", status: "mastered", gap: false },
    { en: "Preventive Maintenance", fr: "Maintenance préventive", status: "review", gap: true },
  ]

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <TopNav />
      
      <main className="max-w-5xl mx-auto py-12 px-6">
        {/* HEADER SECTION */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-blue-600 text-[10px] font-black uppercase tracking-[0.3em]">Module: Bilingual Mapping</span>
            <h1 className="text-4xl font-black uppercase italic tracking-tighter mt-1">Technical Glossary</h1>
          </div>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="SEARCH TERMS..." 
              className="pl-12 pr-6 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-[10px] font-bold uppercase tracking-widest focus:outline-none focus:border-blue-600 w-64"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* GLOSSARY GRID */}
        <div className="grid grid-cols-1 gap-4">
          {terms.filter(t => t.en.toLowerCase().includes(searchTerm.toLowerCase())).map((term, i) => (
            <div key={i} className="group bg-white p-6 rounded-[2rem] border border-slate-100 hover:border-blue-600 hover:shadow-xl transition-all flex items-center justify-between">
              <div className="flex items-center gap-8">
                <div className="flex flex-col">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">English</span>
                  <span className="text-lg font-black text-slate-900 uppercase italic">{term.en}</span>
                </div>
                
                <Languages className="text-slate-200 group-hover:text-blue-600 transition-colors" size={20} />
                
                <div className="flex flex-col">
                  <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest mb-1">French</span>
                  <span className="text-lg font-black text-blue-600 uppercase italic">{term.fr}</span>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className={`text-[9px] font-black uppercase tracking-widest ${term.gap ? 'text-orange-500' : 'text-green-500'}`}>
                    {term.gap ? 'Gap Detected' : 'Verified'}
                  </p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Fluency: {term.status === 'mastered' ? '100%' : '65%'}</p>
                </div>
                <button className="p-4 bg-slate-50 rounded-2xl text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                  <Volume2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* INSIGHT BOX */}
        <div className="mt-12 bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden">
          <BookOpen className="absolute -bottom-10 -right-10 opacity-10" size={200} />
          <div className="relative z-10 flex items-center gap-8">
            <div className="w-20 h-20 bg-blue-600 rounded-[2rem] flex items-center justify-center">
              <AlertTriangle size={32} />
            </div>
            <div>
              <h3 className="text-xl font-black uppercase italic tracking-tighter">AI Remediation Suggestion</h3>
              <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-xl mt-2">
                The engine detected friction during your Audio Ingestion for "Pressure Relief Valve." 
                We have added this term to your high-frequency review list for the Hydraulics module.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}