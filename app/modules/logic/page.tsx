"use client"
import React from 'react'
import TopNav from '@/components/TopNav'
import { Zap, TrendingDown, Clock } from 'lucide-react'

export default function LogicModule() {
  return (
    <div className="min-h-screen bg-slate-50">
      <TopNav />
      <main className="max-w-4xl mx-auto py-12 px-6">
        <div className="bg-white p-12 rounded-[40px] border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h1 className="text-3xl font-black uppercase tracking-tighter">Temporal Optimization</h1>
              <p className="text-slate-500 text-sm">Automated Milestone Forecasting</p>
            </div>
            <div className="bg-green-50 p-4 rounded-3xl text-green-600 text-center">
              <TrendingDown size={32} />
              <span className="block text-[10px] font-black uppercase mt-1">-30% Time</span>
            </div>
          </div>

          <div className="space-y-6">
            {[ 
              { title: "Circuit Logic", status: "Fast-Tracked", time: "2 Days" },
              { title: "Bilingual Safety Protocols", status: "Optimized", time: "1 Day" },
              { title: "System Integration", status: "Core Training", time: "5 Days" }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-6 bg-slate-50 rounded-[30px] border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="bg-white w-10 h-10 rounded-xl flex items-center justify-center shadow-sm">
                    <Clock size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-black text-sm uppercase">{item.title}</h4>
                    <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">{item.status}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="block font-black text-slate-900">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}