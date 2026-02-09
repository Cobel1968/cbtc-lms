"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { ChevronLeft, ChevronRight, Menu, LogOut } from 'lucide-react'
import Image from 'next/image'

export default function TopNav() {
  const router = useRouter()

  return (
    <nav className="bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between sticky top-0 z-50">
      {/* Branding: Your Corporate Logo */}
      <div className="flex items-center gap-4">
        <div className="relative w-10 h-10">
          <img src="/logo.png" alt="COBEL Logo" className="object-contain w-full h-full" />
        </div>
        <div>
          <span className="font-black text-xl tracking-tighter block leading-none">COBEL</span>
          <span className="text-[9px] uppercase tracking-widest text-blue-600 font-bold">Business Training Center</span>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center gap-2">
        <button 
          onClick={() => router.back()}
          className="p-2 hover:bg-slate-100 rounded-lg text-slate-600 flex items-center gap-1 text-xs font-bold"
        >
          <ChevronLeft size={18} /> Back
        </button>
        
        <div className="h-6 w-[1px] bg-slate-200 mx-2" />

        <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-600 flex items-center gap-1 text-xs font-bold">
          <Menu size={18} /> Menu
        </button>

        <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-600 flex items-center gap-1 text-xs font-bold">
          Next <ChevronRight size={18} />
        </button>
      </div>

      {/* Exit Action */}
      <button 
        onClick={() => router.push('/')}
        className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-xl text-xs font-bold hover:bg-red-100 transition"
      >
        <LogOut size={16} /> Exit
      </button>
    </nav>
  )
}