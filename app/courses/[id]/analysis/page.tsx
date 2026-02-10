"use client"
import React, { useState } from 'react'
import TopNav from '@/components/TopNav'
import { FileText, Upload, CheckCircle, BrainCircuit } from 'lucide-react'

export default function HandwritingAnalysis() {
  const [status, setStatus] = useState('pending') // pending, uploading, analyzed

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <TopNav />
      <main className="max-w-4xl mx-auto py-12 px-6">
        <header className="mb-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-3xl mb-6 shadow-xl shadow-blue-200">
            <BrainCircuit size={32} />
          </div>
          <h1 className="text-4xl font-black uppercase tracking-tighter text-[#003366]">Handwriting Bridge</h1>
          <p className="text-slate-500 font-bold text-[10px] uppercase tracking-[0.2em] mt-2">Analog-to-Digital Pedagogical Ingestion</p>
        </header>

        <div className="bg-white rounded-[40px] border border-slate-100 p-12 shadow-sm text-center">
          {status === 'pending' && (
            <div className="space-y-8">
              <div className="border-4 border-dashed border-slate-100 rounded-[32px] py-20 bg-slate-50/50">
                <Upload className="mx-auto text-slate-300 mb-4" size={48} />
                <p className="text-slate-400 font-medium italic">Upload student handwriting sample for technical mapping...</p>
              </div>
              <button 
                onClick={() => setStatus('uploading')}
                className="bg-[#003366] text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg hover:scale-105 transition"
              >
                Start Analysis Engine
              </button>
            </div>
          )}

          {status === 'uploading' && (
            <div className="py-20 animate-pulse">
              <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
              <p className="text-[#003366] font-black uppercase tracking-widest text-xs">Processing Bilingual Metadata...</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}