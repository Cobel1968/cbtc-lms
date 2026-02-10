"use client"
import React from 'react'
import TopNav from '@/components/TopNav'
import { TrendingDown, Zap, Clock } from 'lucide-react'

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <TopNav />
      <main className="max-w-5xl mx-auto py-12 px-6">
        <h1 className="text-3xl font-black uppercase tracking-tighter mb-8">Optimization Report</h1>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100">
            <TrendingDown className="text-green-500 mb-4" size={32} />
            <h4 className="font-black text-2xl">-35%</h4>
            <p className="text-slate-400 text-[10px] uppercase font-bold">Time Optimization</p>
          </div>
          <div className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100">
            <Zap className="text-blue-500 mb-4" size={32} />
            <h4 className="font-black text-2xl">89%</h4>
            <p className="text-slate-400 text-[10px] uppercase font-bold">Technical Fluency</p>
          </div>
          <div className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100">
            <Clock className="text-purple-500 mb-4" size={32} />
            <h4 className="font-black text-2xl">2.5 Weeks</h4>
            <p className="text-slate-400 text-[10px] uppercase font-bold">Saved via Fast-Tracking</p>
          </div>
        </div>
      </main>
    </div>
  )
}