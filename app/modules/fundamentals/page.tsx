"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import TopNav from '@/components/TopNav'
import { Upload, CheckCircle2, Languages } from 'lucide-react'

export default function FundamentalsModule() {
  const [status, setStatus] = useState('idle')

  const handleUpload = () => {
    setStatus('uploading')
    setTimeout(() => { setStatus('complete') }, 3000)
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <TopNav />
      <main className="max-w-5xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm">
            <h3 className="text-xl font-black mb-4 uppercase tracking-tighter text-slate-900">Module 01: Core Logic</h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              Upload your handwritten assessment. The AI Engine scans technical terms to optimize your path.
            </p>
          </div>
          <div className="bg-blue-600 p-10 rounded-[40px] text-white shadow-xl shadow-blue-900/10">
            <Languages className="mb-4 opacity-50" size={32} />
            <h3 className="text-lg font-bold mb-2 uppercase">Bilingual Mapping</h3>
            <p className="text-blue-100 text-xs font-medium">Scanning terms in English and French for Technical Fluency.</p>
          </div>
        </div>

        <div className="bg-white p-12 rounded-[40px] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center">
          {status === 'complete' ? (
            <div className="animate-in zoom-in duration-500">
              <CheckCircle2 className="text-green-500 mx-auto mb-6" size={64} />
              <h3 className="font-black text-xl mb-2">Scan Success</h3>
              <p className="text-slate-500 text-xs mb-8 uppercase font-bold">Temporal path optimized: -2 days</p>
              <Link href="/curriculum" className="bg-green-500 text-white px-10 py-4 rounded-2xl font-black text-xs uppercase hover:bg-green-600 transition">
                Return to Path
              </Link>
            </div>
          ) : (
            <>
              <div className={`bg-slate-50 w-24 h-24 rounded-3xl flex items-center justify-center mb-8 ${status === 'uploading' ? 'animate-pulse' : ''}`}>
                <Upload className={status === 'uploading' ? "text-blue-600" : "text-slate-300"} size={40} />
              </div>
              <button 
                onClick={handleUpload}
                disabled={status === 'uploading'}
                className="w-full bg-[#003366] text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-800 transition shadow-xl"
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