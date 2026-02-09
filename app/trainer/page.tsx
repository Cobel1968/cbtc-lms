"use client"
import React from 'react'
import Sidebar from '@/components/Sidebar'
import TopNav from '@/components/TopNav'
import { AlertTriangle } from 'lucide-react'

export default function InstructorPortal() {
  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopNav />
        <main className="p-10">
          <h1 className="text-2xl font-black uppercase italic text-slate-900">Instructor Dashboard</h1>
          <p className="text-slate-400 text-[10px] font-bold uppercase mb-8 tracking-widest">Active Pedagogical Oversight</p>
          
          <div className="bg-orange-50 border-2 border-orange-200 p-6 rounded-3xl flex items-center gap-4">
            <AlertTriangle className="text-orange-500" />
            <div>
              <p className="font-black text-orange-900 text-sm">Friction Alert Detected</p>
              <p className="text-orange-700 text-xs uppercase font-bold">Student: Abel C. | Module: QC-707</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}