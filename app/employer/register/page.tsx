"use client"
import React, { useState } from 'react'
import { Building2, Mail, Lock, ChevronRight, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

export default function EmployerRegister() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-6">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
        
        <div className="bg-blue-600 p-8 text-white text-center">
          <div className="font-black text-2xl tracking-tighter mb-2">COBEL</div>
          <p className="text-xs uppercase tracking-widest opacity-80">Corporate Partner Portal</p>
        </div>

        <form className="p-8 space-y-5">
          <h2 className="text-xl font-bold text-slate-800 mb-6">Register Your Organization</h2>
          
          <div className="space-y-4">
            <div className="relative">
              <Building2 className="absolute left-3 top-3 text-slate-400" size={18} />
              <input type="text" placeholder="Company Name" className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-sm" />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-3 text-slate-400" size={18} />
              <input type="email" placeholder="Corporate Email" className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-sm" />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 text-slate-400" size={18} />
              <input type="password" placeholder="Password" className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-sm" />
            </div>
          </div>

          <div className="p-4 bg-blue-50 rounded-xl flex gap-3 items-start">
            <ShieldCheck className="text-blue-600 shrink-0" size={18} />
            <p className="text-[11px] text-blue-700 leading-tight">
              By registering, you agree to the <strong>Cobel Vocational Standards</strong> and the B2B billing terms managed by <strong>Abel C.</strong>
            </p>
          </div>

          <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition">
            Create Employer Account <ChevronRight size={18} />
          </button>

          <p className="text-center text-xs text-slate-400 mt-4">
            Already a partner? <Link href="/login" className="text-blue-600 font-bold">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  )
}