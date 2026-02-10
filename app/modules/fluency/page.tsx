"use client"
import React, { useState } from 'react'
import TopNav from '@/components/TopNav'
import { Languages, CheckCircle2, AlertCircle } from 'lucide-react'

export default function FluencyModule() {
  const [analyzed, setAnalyzed] = useState(false)

  const mockTerms = [
    { fr: "Schéma Électrique", en: "Wiring Diagram", status: "Verified" },
    { fr: "Maintenance Préventive", en: "Preventive Maintenance", status: "Verified" },
    { fr: "Capteur de Pression", en: "Pressure Sensor", status: "New Term" }
  ]

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <TopNav />
      <main className="max-w-4xl mx-auto py-12 px-6">
        <div className="bg-[#003366] p-10 rounded-[40px] text-white shadow-xl mb-8">
          <Languages className="mb-4 opacity-50" size={32} />
          <h1 className="text-2xl font-black uppercase tracking-tighter">Bilingual Technical Mapping</h1>
          <p className="text-blue-100 text-sm mt-2 font-medium">Phase 2: Assessing technical fluency to reduce bilingual friction.</p>
        </div>

        {!analyzed ? (
          <div className="bg-white p-12 rounded-[40px] border-2 border-dashed border-slate-200 text-center">
            <h3 className="font-black text-xl mb-4">Ready for Diagnostic?</h3>
            <button 
              onClick={() => setAnalyzed(true)}
              className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition shadow-lg"
            >
              Start Technical Scan
            </button>
          </div>
        ) : (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h3 className="font-black text-sm uppercase text-slate-400 tracking-widest mb-4">Extraction Results</h3>
            {mockTerms.map((term, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 flex items-center justify-between shadow-sm">
                <div className="grid grid-cols-2 gap-8 flex-1">
                  <div>
                    <span className="block text-[10px] font-black text-blue-500 uppercase">French</span>
                    <p className="font-bold text-slate-800">{term.fr}</p>
                  </div>
                  <div>
                    <span className="block text-[10px] font-black text-blue-500 uppercase">English</span>
                    <p className="font-bold text-slate-800">{term.en}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-600 rounded-full">
                  <CheckCircle2 size={14} />
                  <span className="text-[10px] font-black uppercase">{term.status}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}