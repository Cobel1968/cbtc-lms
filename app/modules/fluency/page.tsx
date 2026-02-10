"use client"
import React, { useState } from 'react'
import TopNav from '@/components/TopNav'
import { Languages, CheckCircle, Search } from 'lucide-react'

export default function FluencyModule() {
  const [analyzing, setAnalyzing] = useState(false)
  const [terms, setTerms] = useState([])

  const runBilingualMapping = () => {
    setAnalyzing(true)
    setTimeout(() => {
      setTerms(['Circuit-Imprimé (FR)', 'Printed Circuit Board (EN)', 'Voltage/Tension', 'Oscilloscope'])
      setAnalyzing(false)
    }, 2500)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <TopNav />
      <main className="max-w-5xl mx-auto py-12 px-6">
        <div className="bg-[#003366] p-12 rounded-[40px] text-white mb-8 shadow-xl">
          <Languages size={40} className="mb-4 opacity-50" />
          <h1 className="text-3xl font-black uppercase tracking-tighter">Bilingual Technical Fluency</h1>
          <p className="text-blue-100 mt-2">The AI Engine is assessing your proficiency across technical vocabularies.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm">
            <h3 className="font-bold uppercase text-xs text-blue-600 mb-4 tracking-widest">Active Diagnostic</h3>
            <p className="text-slate-600 text-sm mb-8">Scan your Technical Dictionary to identify cross-language technical mastery.</p>
            <button 
              onClick={runBilingualMapping}
              disabled={analyzing}
              className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition"
            >
              {analyzing ? "Mapping Fluency..." : "Start Bilingual Mapping"}
            </button>
          </div>

          <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm">
            <h3 className="font-bold uppercase text-xs text-slate-400 mb-6 tracking-widest">Identified Technical Terms</h3>
            <div className="space-y-3">
              {terms.length > 0 ? terms.map((t, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl text-sm font-bold text-slate-700 animate-in slide-in-from-left">
                  <CheckCircle size={16} className="text-green-500" /> {t}
                </div>
              )) : (
                <p className="text-slate-300 text-xs italic text-center py-10">Run diagnostic to extract terms...</p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}