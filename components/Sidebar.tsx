"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Users, BookOpen, ShieldAlert, BarChart, Settings } from 'lucide-react'

export default function Sidebar() {
  const pathname = usePathname()

  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/admin' },
    { name: 'Courses', icon: <BookOpen size={20} />, path: '/admin/courses' },
    { name: 'Integrity', icon: <ShieldAlert size={20} />, path: '/admin/integrity' },
    { name: 'Readiness', icon: <BarChart size={20} />, path: '/admin/audit/readiness' }
  ]

  return (
    <div className="w-64 bg-[#0F172A] min-h-screen flex flex-col p-6 border-r border-white/5">
      <div className="mb-10 px-2">
        <h2 className="text-white font-black text-xl italic tracking-tighter uppercase">
          CBTC <span className="text-blue-500">LMS</span>
        </h2>
        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Abel C. Engine</p>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.path
          return (
            <Link 
              key={item.name} 
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${
                isActive 
                ? 'bg-blue-600 text-white' 
                : 'text-slate-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto pt-6 border-t border-white/5">
        <div className="bg-slate-800/50 p-4 rounded-2xl border border-white/5">
          <p className="text-[10px] font-black text-slate-500 uppercase mb-1">Status</p>
          <p className="text-white text-xs font-bold flex items-center gap-2">
            <Settings size={12} className="text-blue-500" /> GOD MODE ACTIVE
          </p>
        </div>
      </div>
    </div>
  )
}