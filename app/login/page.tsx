"use client"
import React from 'react'
import TopNav from '@/components/TopNav'
import { Mail, Lock, ArrowRight } from 'lucide-react'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <TopNav />
      <main className="max-w-md mx-auto py-20 px-6">
        <div className="bg-white p-10 rounded-[40px] shadow-xl border border-slate-100">
          <h1 className="text-2xl font-black uppercase tracking-tighter mb-2">Welcome Back</h1>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-8 text-center">Select your actor profile to enter</p>
          
          <div className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-4 top-4 text-slate-300" size={18} />
              <input type="email" placeholder="Email Address" className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border-none text-sm focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-4 text-slate-300" size={18} />
              <input type="password" placeholder="Password" className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border-none text-sm focus:ring-2 focus:ring-blue-500" />
            </div>
            <button className="w-full bg-[#003366] text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-800 transition flex items-center justify-center gap-2">
              Sign In <ArrowRight size={16} />
            </button>
          </div>
          
          <p className="mt-8 text-center text-slate-400 text-[10px] font-bold uppercase">
            New Business Partner? <Link href="/register" className="text-blue-600">Register Here</Link>
          </p>
        </div>
      </main>
    </div>
  )
}