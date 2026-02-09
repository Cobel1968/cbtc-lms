"use client"
import React from 'react'
import Sidebar from '@/components/Sidebar'
import { BookOpen, Award } from 'lucide-react'

export default function StudentPortal() {
  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar />
      <div className="flex-1 p-10">
        <div className="bg-blue-600 p-10 rounded-[2rem] text-white shadow-xl mb-10">
          <h1 className="text-3xl font-black uppercase italic">Welcome back, Abel</h1>
          <p className="opacity-80 font-bold text-sm">Track: Integrated Manufacturing & QA (MFG-1010)</p>
        </div>

        <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
          <h3 className="font-black text-slate-900 uppercase text-xs mb-4">Current Module</h3>
          <div className="flex justify-between items-center">
            <p className="font-bold text-slate-700">Module 4: Standard Operating Procedures (Bilingual)</p>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[10px] font-black uppercase">In Progress</span>
          </div>
        </div>
      </div>
    </div>
  )
}