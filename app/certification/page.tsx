"use client"
import React from 'react'
import TopNav from '@/components/TopNav'
import { Award, CheckCircle2, Zap, Download, Share2 } from 'lucide-react'

export default function CertificationPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
      <TopNav />
      
      <main className="max-w-4xl mx-auto py-16 px-6 text-center">
        <div className="bg-white p-12 md:p-20 rounded-[60px] shadow-2xl shadow-blue-900/10 border border-slate-100 relative overflow-hidden">
          {/* AI Engine Watermark */}
          <div className="absolute top-10 right-10 opacity-5 rotate-12">
            <Zap size={200} />
          </div>

          <div className="relative z-10">
            <div className="bg-blue-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 text-blue-600">
              <Award size={48} />
            </div>

            <h1 className="text-4xl font-black uppercase tracking-tighter text-slate-900 mb-4">
              Vocational Mastery Achieved
            </h1>
            <p className="text-slate-400 font-bold uppercase text-xs tracking-[0.3em] mb-12">
              Cobel Business Training Center | AI Engine Certified
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12 text-left">
              <div className="bg-slate-50 p-6 rounded-3xl">
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Technical Proficiency</span>
                <h4 className="font-black text-xl text-slate-800">Bilingual Fluency Lvl 4</h4>
                <p className="text-slate-500 text-xs mt-1">Verified via 14 Analog-to-Digital data points.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-3xl border-2 border-blue-100">
                <span className="text-[10px] font-black text-green-600 uppercase tracking-widest">Efficiency Metric</span>
                <h4 className="font-black text-xl text-slate-800">-3.5 Weeks Optimized</h4>
                <p className="text-slate-500 text-xs mt-1">Fast-tracked via Adaptive HTML Injection.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-[#003366] text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-800 transition flex items-center justify-center gap-2">
                <Download size={16} /> Download PDF
              </button>
              <button className="bg-white border border-slate-200 text-slate-600 px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-50 transition flex items-center justify-center gap-2">
                <Share2 size={16} /> Share with Employer
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}