"use client"
import React, { useState } from 'react'
import TopNav from '@/components/TopNav'
import { Upload, CheckCircle, BrainCircuit, Languages, FileText } from 'lucide-react'

export default function AnalysisPage() {
  const [status, setStatus] = useState('idle')
  const runAnalysis = () => {
    setStatus('analyzing')
    setTimeout(() => setStatus('complete'), 2500)
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <TopNav />
      <main className="max-w-4xl mx-auto py-12 px-6 text-center">
        <header className="mb-10">
          <h1 className="text-4xl font-black uppercase tracking-tighter text-[#003366]">Handwriting Bridge</h1>
          <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mt-2">Bilingual Technical Mapping</p>
        </header>
        <div className="bg-white rounded-[40px] p-12 border border-slate-100 shadow-sm">
          {status === 'idle' && (
            <div>
              <div onClick={runAnalysis} className="border-4 border-dashed border-slate-100 rounded-[32px] p-20 bg-slate-50/50 mb-8 cursor-pointer hover:bg-slate-100 transition">
                <Upload className="mx-auto text-slate-300" size={48} />
                <p className="text-slate-500 font-bold mt-4">Drop Assessment Image Here</p>
              </div>
              <button onClick={runAnalysis} className="bg-[#003366] text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-widest">Start AI Analysis</button>
            </div>
          )}
          {status === 'analyzing' && (
            <div className="py-20">
              <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
              <p className="text-[#003366] font-black uppercase tracking-widest text-xs">Ingesting Analog Data...</p>
            </div>
          )}
          {status === 'complete' && (
            <div className="animate-in fade-in duration-700">
              <div className="flex items-center gap-4 mb-8 text-green-600 justify-center">
                <CheckCircle size={32} />
                <h2 className="text-2xl font-black uppercase tracking-tighter">Analysis Successful</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="p-8 bg-blue-50 rounded-[32px]"><Languages size={24} className="mb-2 text-blue-600"/><p className="text-2xl font-black">92%</p><p className="text-[9px] uppercase font-bold text-slate-400">Bilingual Fluency</p></div>
                <div className="p-8 bg-slate-50 rounded-[32px]"><BrainCircuit size={24} className="mb-2 text-purple-600"/><p className="text-lg font-black">12 Terms</p><p className="text-[9px] uppercase font-bold text-slate-400">Technical Terms</p></div>
                <div className="p-8 bg-green-50 rounded-[32px]"><FileText size={24} className="mb-2 text-green-600"/><p className="text-2xl font-black">-3 Days</p><p className="text-[9px] uppercase font-bold text-slate-400">Temporal Gain</p></div>
              </div>
              <button onClick={() => window.location.href='/curriculum'} className="mt-12 w-full bg-slate-100 py-5 rounded-2xl font-black text-xs uppercase tracking-widest text-slate-400">Return to Modules</button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
