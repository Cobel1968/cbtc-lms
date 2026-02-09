"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { User, Bell, Settings } from 'lucide-react'

export default function TopNav() {
  return (
    <nav className="h-20 bg-white border-b border-cbtc-slate flex items-center justify-between px-10 sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12">
          {/* Replace with your actual logo file in /public/logo.png */}
          <div className="w-full h-full bg-cbtc-blue rounded-full flex items-center justify-center text-white font-black text-[10px] overflow-hidden">
             CBTC
          </div>
        </div>
        <div>
          <h1 className="text-sm font-black uppercase italic tracking-tighter text-cbtc-navy">Cobel Business Training Center</h1>
          <p className="text-[8px] font-bold text-cbtc-blue uppercase tracking-widest">Innovation: Adaptive Pedagogical Logic</p>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-cbtc-magenta animate-pulse" title="System Active" />
            <div className="w-2 h-2 rounded-full bg-cbtc-yellow" title="Sync Status" />
        </div>
        <button className="p-2 text-slate-400 hover:text-cbtc-blue transition-colors"><Bell size={20} /></button>
        <button className="p-2 text-slate-400 hover:text-cbtc-blue transition-colors"><Settings size={20} /></button>
        <div className="w-10 h-10 bg-cbtc-slate rounded-xl flex items-center justify-center text-cbtc-navy border border-slate-200">
          <User size={20} />
        </div>
      </div>
    </nav>
  )
}