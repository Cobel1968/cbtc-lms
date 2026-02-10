"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Upload, CheckCircle2, ArrowLeft, Languages, Zap } from 'lucide-react'

export default function FundamentalsModule() {
  const [status, setStatus] = useState('idle') // idle, uploading, complete

  const startIngestion = () => {
    setStatus('uploading')
    setTimeout(() => { setStatus('complete') }, 3000)
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <nav className="bg-white border-b px-8 py-4 flex items-center justify-between sticky top-0 z-50">
        <Link href="/curriculum" className="flex items-center gap-2 text-slate-500 font-bold text-[10px] uppercase hover:text-blue-600 transition">
          <ArrowLeft size={14} /> Back to Path
        </Link>
        <div className="text-center">
          <span className="block text-[9px] font-black text-blue-600 uppercase tracking-[0.2em]">Module 01</span>
          <h2 className="font-black text-slate-900 uppercase text-sm tracking-tight">Technical Fundamentals</h2>
        </div>
        <div className="w-20"></div>
      </nav>

      <main className="max-w-5xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm">
            <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">Vocational Logic</h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              Complete the physical assessment sheet. The AI Engine will bridge your analog notes to your digital profile.
            </p>
          </div>

          <div className="bg-blue-600 p-10 rounded-[40px] text-white shadow-xl shadow-blue-900/10">
            <Languages className="mb-4 opacity-50" size={32} />
            <h3 className="text-lg font-bold mb-2 uppercase tracking-tight">Bilingual Mapping</h3>
            <p className="text-blue-100 text-xs leading-relaxed font-medium">
              Scanning for technical terms in <strong>English</strong> and <strong>French</strong> to verify fluency.
            </p>
          </div>
        </div>

        <div className="bg-white p-12 rounded-[40px] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center">
          {status === 'complete' ? (
            <div className="animate-in zoom-in duration-500">
              <CheckCircle2 className="text-green-500 mx-auto mb-6" size={64} />
              <h3 className="font-black text-xl mb-2">Ingestion Success</h3>
              <p className="text-slate-500 text-xs mb-8 uppercase font-bold tracking-widest">Temporal path optimized: -2 days</p>
              <Link href="/curriculum" className="bg-green-500 text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-green-600 transition">
                Return to Path
              </Link>
            </div>
          ) : (
            <>
              <div className={`bg-slate-50 w-24 h-24 rounded-3xl flex items-center justify-center mb-8 ${status === 'uploading' ? 'animate-pulse' : ''}`}>
                <Upload className={status === 'uploading' ? "text-blue-600" : "text-slate-300"} size={40} />
              </div>
              <h3 className="font-black text-xl mb-2">Handwriting Bridge</h3>
              <p className="text-slate-400 text-[10px] mb-10 uppercase font-black tracking-[0.3em]">Analog-to-Digital Module</p>
              
              <button 
                onClick={startIngestion}
                disabled={status === 'uploading'}
                className="w-full bg-[#003366] text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/20"
              >
                {status === 'uploading' ? "AI SCANNING..." : "UPLOAD ASSESSMENT"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  )
}