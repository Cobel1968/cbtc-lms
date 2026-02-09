"use client"
import React from 'react'
import { Award, CheckCircle, ShieldCheck, QrCode } from 'lucide-react'

export default function CompletionCertificate({ studentName, timeSaved }: { studentName: string, timeSaved: number }) {
  return (
    <div className="max-w-4xl mx-auto p-1 bg-gradient-to-tr from-amber-200 via-yellow-50 to-amber-200 shadow-2xl rounded-sm">
      <div className="bg-white p-12 border-[16px] border-double border-amber-100 flex flex-col items-center text-center relative overflow-hidden">
        
        {/* Background Watermark Logo */}
        <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center pointer-events-none">
          <Award size={600} />
        </div>

        {/* Header: Corporate Logo & Title */}
        <div className="mb-8">
          <div className="text-4xl font-black text-slate-800 tracking-tighter mb-2">COBEL</div>
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-blue-600">Business Training Center</p>
        </div>

        <h1 className="text-5xl font-serif text-slate-900 mb-6">Certificate of Technical Fluency</h1>
        
        <p className="text-lg text-slate-600 italic mb-2">This is to certify that</p>
        <h2 className="text-4xl font-bold text-blue-900 mb-8 underline decoration-amber-300 underline-offset-8">
          {studentName || 'Valued Candidate'}
        </h2>

        <p className="max-w-2xl text-slate-700 leading-relaxed mb-10">
          Has successfully completed the **AI-Optimized Vocational Training Path**, demonstrating bilingual proficiency in technical systems. Through the Cobel AI Engine, this candidate has verified **{timeSaved} hours** of prior technical mastery via handwriting analysis and diagnostic assessment.
        </p>

        {/* Transcript Summary */}
        <div className="w-full max-w-lg grid grid-cols-2 gap-4 mb-12 text-left bg-slate-50 p-6 rounded-lg border border-slate-100">
           <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Modules Mastered</p>
              <ul className="text-xs space-y-1 text-slate-700">
                <li className="flex items-center gap-1"><CheckCircle size={10} className="text-green-500"/> Electrical Theory</li>
                <li className="flex items-center gap-1"><CheckCircle size={10} className="text-green-500"/> Industrial Safety</li>
                <li className="flex items-center gap-1"><CheckCircle size={10} className="text-green-500"/> Technical French</li>
              </ul>
           </div>
           <div className="flex flex-col items-end justify-center">
              <QrCode size={80} className="text-slate-800" />
              <p className="text-[8px] mt-1 text-slate-400 font-mono">Verify: cobel-lms.com/verify</p>
           </div>
        </div>

        {/* Signatures */}
        <div className="w-full flex justify-between items-end mt-12 px-10">
          <div className="text-center">
            <div className="font-serif italic text-xl border-b border-slate-400 mb-1 px-4 text-slate-800">Coulibaly Abel</div>
            <p className="text-[10px] font-bold text-slate-500">Coulibaly Abel, PGCE, MBA, NEBOSH</p>
            <p className="text-[9px] text-blue-600 uppercase">Chief Executive Officer</p>
          </div>

          <div className="text-center">
            <div className="font-serif italic text-xl border-b border-slate-400 mb-1 px-4 text-slate-800 text-opacity-40">Respective Trainer</div>
            <p className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">Certified Vocational Instructor</p>
            <p className="text-[9px] text-blue-600 uppercase">Cobel Training Center</p>
          </div>
        </div>

      </div>
    </div>
  )
}