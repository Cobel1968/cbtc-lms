"use client"
import React from 'react'
import Link from 'next/link'
import { Zap, Globe, ShieldCheck, GraduationCap } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="font-black text-2xl tracking-tighter">COBEL CBTC</div>
        <div className="flex gap-6 items-center">
          <Link href="/login" className="text-sm font-bold text-slate-600 hover:text-blue-600">Login</Link>
          <Link href="/employer/register" className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold">Employer Portal</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-6xl font-black mb-6 tracking-tight">AI-Accelerated Vocational Training.</h1>
        <p className="text-xl text-slate-500 mb-10 leading-relaxed">
          Skip what you already know. Our <strong>Cobel AI Engine</strong> maps your technical fluency in English and French using 
          advanced handwriting analysis to fast-track your certification.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/register" className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold shadow-xl">Get Started</Link>
          <Link href="#how-it-works" className="border border-slate-200 px-8 py-4 rounded-2xl font-bold">View Curriculum</Link>
        </div>
      </header>

      {/* Features Grid */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <Zap className="text-blue-600" size={32} />
            <h3 className="font-bold text-xl">Temporal Optimization</h3>
            <p className="text-sm text-slate-500">Reduce training time by up to 30% by verifying prior technical knowledge.</p>
          </div>
          <div className="space-y-4">
            <Globe className="text-blue-600" size={32} />
            <h3 className="font-bold text-xl">Bilingual Mapping</h3>
            <p className="text-sm text-slate-500">Curriculum mapped for technical fluency in both English and French.</p>
          </div>
          <div className="space-y-4">
            <ShieldCheck className="text-blue-600" size={32} />
            <h3 className="font-bold text-xl">Employer Verified</h3>
            <p className="text-sm text-slate-500">Tamper-proof certificates with QR-code verification for industry trust.</p>
          </div>
        </div>
      </section>
    </div>
  )
}