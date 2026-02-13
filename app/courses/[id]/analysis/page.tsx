"use client"
import React from 'react'
import { useRouter, useParams } from 'next/navigation'
import { CheckCircle, BarChart3, ArrowLeft } from 'lucide-react'

export default function AnalysisPage() {
  const router = useRouter()
  const params = useParams()

  return (
    <div className="min-h-screen bg-slate-50 p-8 md:p-20 font-sans">
      <div className="max-w-4xl mx-auto">
        <button onClick={() => router.push('/curriculum')} className="flex items-center gap-2 text-slate-400 font-bold text-xs mb-12 hover:text-[#003366] transition">
          <ArrowLeft size={16} /> RETURN TO CURRICULUM
        </button>

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
             <div className="bg-green-500 text-white p-2 rounded-full">
               <CheckCircle size={24} />
             </div>
             <span className="text-green-600 font-black text-xs uppercase tracking-widest">Digitization Complete</span>
          </div>
          <h1 className="text-5xl font-black text-[#003366] uppercase tracking-tighter">Bilingual Technical Mapping</h1>
          <p className="text-slate-500 font-bold text-sm mt-2 uppercase">Feature 4: Analog-to-Digital Results for Module {params.id}</p>
        </header>

        <div className="bg-white border border-slate-200 p-10 rounded-[40px] shadow-2xl shadow-blue-900/5">
          <div className="flex items-center gap-4 mb-8">
            <BarChart3 className="text-blue-600" />
            <h2 className="text-xl font-black text-slate-800 uppercase">Diagnostic Insights</h2>
          </div>
          <p className="text-slate-600 leading-relaxed font-medium">
            The **Cobel AI Engine** has processed the handwritten assessment. 
            Technical terms in both **English** and **French** have been identified and mapped to your profile.
          </p>
          <div className="mt-8 pt-8 border-t border-slate-100 flex gap-10">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Fluency Score</p>
              <p className="text-3xl font-black text-[#003366]">88%</p>
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Time Saved</p>
              <p className="text-3xl font-black text-blue-600">4.2 Hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
