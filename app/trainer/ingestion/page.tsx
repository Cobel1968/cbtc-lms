"use client"
import React, { useState } from 'react'
import TopNav from '@/components/TopNav'
import { FileText, Mic, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

export default function TrainerIngestion() {
  const [status, setStatus] = useState('idle') // idle, uploading, complete

  const handleSimulatedUpload = () => {
    setStatus('uploading')
    // Connection to Supabase would happen here
    setTimeout(() => setStatus('complete'), 3000)
  }

  return (
    <div className="min-h-screen bg-cbtc-slate font-sans">
      <TopNav />
      <main className="max-w-4xl mx-auto py-20 px-6">
        <div className="bg-white rounded-[3rem] p-12 shadow-2xl border border-white">
          <h2 className="text-cbtc-blue text-[10px] font-black uppercase tracking-[0.4em] mb-2">Ingestion Console</h2>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-cbtc-navy mb-10">Digitize Technical Assessment</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <button 
              onClick={handleSimulatedUpload}
              className="group p-10 rounded-[2.5rem] border-2 border-dashed border-slate-200 hover:border-cbtc-yellow transition-all flex flex-col items-center"
            >
              <FileText size={40} className="text-slate-300 group-hover:text-cbtc-yellow mb-4" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-cbtc-navy">Handwriting Ingestion</span>
            </button>

            <button 
              onClick={handleSimulatedUpload}
              className="group p-10 rounded-[2.5rem] border-2 border-dashed border-slate-200 hover:border-cbtc-magenta transition-all flex flex-col items-center"
            >
              <Mic size={40} className="text-slate-300 group-hover:text-cbtc-magenta mb-4" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-cbtc-navy">Audio Fluency Audit</span>
            </button>
          </div>

          {status === 'uploading' && (
            <div className="mt-12 flex items-center gap-4 bg-cbtc-navy text-white p-6 rounded-3xl animate-pulse">
              <Loader2 className="animate-spin text-cbtc-yellow" />
              <p className="text-xs font-black uppercase italic">AI Engine: Processing Technical Extraction...</p>
            </div>
          )}

          {status === 'complete' && (
            <div className="mt-12 flex items-center gap-4 bg-green-50 text-green-600 p-6 rounded-3xl border border-green-100">
              <CheckCircle />
              <p className="text-xs font-black uppercase italic">Assessment Synchronized with Student Path</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}