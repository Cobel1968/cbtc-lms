"use client"
import React from 'react'
import Link from 'next/link'
import { Users, BrainCircuit, ArrowRight, ShieldCheck, Zap } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#003366]">
      {/* Hero Section */}
      <nav className="px-8 py-6 flex justify-between items-center border-b border-slate-50">
        <div className="font-black text-2xl tracking-tighter">COBEL AI</div>
        <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
          <span>Vocational Mapping</span>
          <span>Temporal Optimization</span>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 py-20">
        <div className="max-w-3xl mb-20">
          <h1 className="text-7xl font-black uppercase tracking-tighter leading-[0.9]">
            The Future of <span className="text-blue-600 text-outline">Vocational</span> Training.
          </h1>
          <p className="mt-6 text-xl text-slate-500 font-medium max-w-xl">
            Bridge the gap between analog assessments and digital efficiency with the Cobel AI Engine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Employer Card */}
          <div className="group p-12 bg-slate-50 rounded-[48px] border border-transparent hover:border-blue-200 transition-all duration-500">
            <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-xl mb-8 group-hover:scale-110 transition">
              <Users className="text-blue-600" size={32} />
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">Partner Portal</h2>
            <p className="text-slate-500 mb-8 font-medium">Manage your workforce, track temporal savings, and oversee bilingual technical mapping for your teams.</p>
            <Link href="/employer/dashboard" className="inline-flex items-center gap-3 bg-[#003366] text-white px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-blue-100">
              Enter Dashboard <ArrowRight size={16} />
            </Link>
          </div>

          {/* Student Card */}
          <div className="group p-12 bg-[#003366] text-white rounded-[48px] shadow-2xl shadow-blue-200">
            <div className="w-16 h-16 bg-blue-600 rounded-3xl flex items-center justify-center shadow-xl mb-8 group-hover:scale-110 transition">
              <BrainCircuit className="text-white" size={32} />
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 text-white">Student Bridge</h2>
            <p className="text-blue-200 mb-8 font-medium">Access your curriculum and upload your handwriting assessments for AI-driven technical verification.</p>
            <Link href="/curriculum" className="inline-flex items-center gap-3 bg-white text-[#003366] px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-widest">
              Start Learning <Zap size={16} />
            </Link>
          </div>
        </div>

        {/* Feature Tags */}
        <div className="mt-20 flex flex-wrap gap-4">
          <div className="flex items-center gap-2 px-6 py-3 bg-slate-100 rounded-full text-[10px] font-black uppercase tracking-widest">
            <ShieldCheck size={14} className="text-blue-600" /> Handwriting OCR Ready
          </div>
          <div className="flex items-center gap-2 px-6 py-3 bg-slate-100 rounded-full text-[10px] font-black uppercase tracking-widest">
            <Zap size={14} className="text-blue-600" /> Temporal Optimization
          </div>
        </div>
      </main>
    </div>
  )
}
