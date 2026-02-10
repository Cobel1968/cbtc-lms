"use client"
import React from 'react'
import TopNav from '@/components/TopNav'
import { Languages, Zap } from 'lucide-react'

export default function ModulePage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <TopNav />
      <main className="max-w-4xl mx-auto py-16 px-6">
        <div className="bg-white p-12 rounded-[40px] border border-slate-100 shadow-sm text-center">
          <div className="bg-blue-50 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 text-blue-600">
            <Zap size={40} />
          </div>
          <h1 className="text-3xl font-black uppercase tracking-tighter">Advanced Optimization</h1>
          <p className="text-slate-500 mt-4 max-w-md mx-auto">
            The Cobel AI Engine is preparing this specialized technical track based on your previous ingestion.
          </p>
        </div>
      </main>
    </div>
  )
}