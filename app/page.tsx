"use client"
import React from 'react'
import Link from 'next/link'
import TopNav from '@/components/TopNav'
import { GraduationCap, BookOpen, ArrowRight, Zap, Target, Shield } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <TopNav />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-xs font-black tracking-widest uppercase mb-8">
          <Zap size={14} /> The Cobel AI Engine is Live
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight tracking-tighter mb-6">
          VOCATIONAL TRAINING <br/><span className="text-blue-600">REDEFINED.</span>
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 font-medium">
          Eliminate knowledge gaps and time waste with our computer-implemented pedagogical logic.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link href="/register" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition transform hover:scale-105">
            GET STARTED <ArrowRight size={20} />
          </Link>
          <Link href="/curriculum" className="bg-slate-100 text-slate-900 px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-200 transition">
            VIEW CURRICULUM <BookOpen size={20} />
          </Link>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 bg-slate-50 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-[32px] border border-slate-200 shadow-sm">
            <Target className="text-blue-600 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Diagnostic Mapping</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Multi-dimensional analysis to identify exact technical knowledge gaps.</p>
          </div>
          <div className="p-8 bg-white rounded-[32px] border border-slate-200 shadow-sm">
            <Shield className="text-blue-600 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Bilingual Fluency</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Bridge English and French technical terms through automated ingestion.</p>
          </div>
          <div className="p-8 bg-white rounded-[32px] border border-slate-200 shadow-sm">
            <Zap className="text-blue-600 mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Temporal Optimization</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Skip redundant content. Complete training up to 30% faster.</p>
          </div>
        </div>
      </section>
    </div>
  )
}