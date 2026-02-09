"use client"
import React from 'react'
import TopNav from '@/components/TopNav'
import { Building2, Mail, ChevronRight } from 'lucide-react'

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <TopNav />
      <div className="max-w-md mx-auto mt-20 bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
        <div className="bg-blue-700 p-8 text-white text-center">
          <h2 className="text-xl font-bold uppercase tracking-widest">Cobel B2B Portal</h2>
          <p className="text-xs opacity-80 mt-1">Vocational Training & Adaptive Learning</p>
        </div>
        <div className="p-8 space-y-4">
          <div className="relative">
            <Building2 className="absolute left-3 top-3 text-slate-400" size={18} />
            <input type="text" placeholder="Company Name" className="w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-sm" />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-slate-400" size={18} />
            <input type="email" placeholder="Corporate Email" className="w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-sm" />
          </div>
          <button className="w-full bg-blue-700 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-800 transition">
            GET STARTED <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}