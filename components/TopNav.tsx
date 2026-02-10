"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { ChevronRight, LogIn } from 'lucide-react'

export default function TopNav() {
  const pathname = usePathname()

  return (
    <nav className="bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between sticky top-0 z-[100]">
      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
          <div className="bg-[#003366] w-10 h-10 rounded-xl flex items-center justify-center text-white font-black shadow-lg">C</div>
          <div className="leading-none">
            <span className="font-black text-xl tracking-tighter block text-slate-900 uppercase">COBEL</span>
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Business Training Center</span>
          </div>
        </Link>
      </div>

      <div className="flex items-center gap-6">
        <Link href="/curriculum" className={`text-[10px] font-black uppercase tracking-widest ${pathname === '/curriculum' ? 'text-blue-600' : 'text-slate-400 hover:text-slate-900'}`}>
          View Curriculum
        </Link>
        
        <div className="h-4 w-[1px] bg-slate-200"></div>

        <Link href="/login" className="flex items-center gap-2 text-slate-600 font-bold text-[10px] uppercase hover:text-blue-600 transition">
          <LogIn size={14} /> Login
        </Link>

        <Link href="/register" className="bg-[#003366] text-white px-6 py-2.5 rounded-full font-black text-[10px] uppercase flex items-center gap-2 hover:bg-blue-800 transition shadow-md">
          B2B Portal <ChevronRight size={14} />
        </Link>
      </div>
    </nav>
  )
}