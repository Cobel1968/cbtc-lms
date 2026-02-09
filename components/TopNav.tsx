"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { ChevronLeft, ChevronRight, Menu, LogOut } from 'lucide-react'

export default function TopNav() {
  const router = useRouter()

  return (
    <nav className="bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <div className="relative w-10 h-10">
          <img src="/logo.png" alt="COBEL Logo" className="object-contain w-full h-full" />
        </div>
        <div>
          <span className="font-black text-xl tracking-tighter block leading-none text-slate-900">COBEL</span>
          <span className="text-[9px] uppercase tracking-widest text-blue-700 font-bold">Business Training Center</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button onClick={() => router.back()} className="px-3 py-2 hover:bg-slate-50 rounded-lg text-slate-500 flex items-center gap-1 text-xs font-bold border border-transparent hover:border-slate-200 transition">
          <ChevronLeft size={18} /> BACK
        </button>
        
        <button className="px-3 py-2 hover:bg-slate-50 rounded-lg text-slate-500 flex items-center gap-1 text-xs font-bold border border-transparent hover:border-slate-200 transition">
          <Menu size={18} /> MENU
        </button>

        <button className="bg-blue-700 text-white px-5 py-2 rounded-xl text-xs font-bold hover:bg-blue-800 transition flex items-center gap-2 shadow-lg shadow-blue-100">
          NEXT <ChevronRight size={18} />
        </button>
      </div>

      <button onClick={() => router.push('/')} className="flex items-center gap-2 text-slate-400 px-4 py-2 rounded-xl text-xs font-bold hover:text-red-500 transition">
        <LogOut size={16} /> EXIT
      </button>
    </nav>
  )
}