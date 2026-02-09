"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import TopNav from '@/components/TopNav'
import { Building2, Mail, ChevronRight, ShieldCheck } from 'lucide-react'

export default function Register() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleRegister = (e: any) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { router.push('/portal') }, 1500)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <TopNav />
      <div className="flex flex-col justify-center items-center p-10">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="bg-blue-700 p-8 text-white text-center">
            <h2 className="text-xl font-bold uppercase tracking-widest">Cobel B2B Portal</h2>
            <p className="text-xs opacity-80 mt-1">Vocational Training & Adaptive Learning</p>
          </div>

          <form onSubmit={handleRegister} className="p-8 space-y-5">
            <div className="space-y-4">
              <div className="relative">
                <Building2 className="absolute left-3 top-3 text-slate-400" size={18} />
                <input required type="text" placeholder="Company Name" className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 text-sm" />
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-slate-400" size={18} />
                <input required type="email" placeholder="Corporate Email" className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 text-sm" />
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-xl flex gap-3 border border-blue-100">
              <ShieldCheck className="text-blue-700 shrink-0" size={20} />
              <p className="text-[11px] text-blue-800 leading-tight">
                <strong>Instant B2B Access:</strong> Enrollment grants immediate access to the Cobel AI Engine and tax-deductible invoicing.
              </p>
            </div>

            <button type="submit" disabled={loading} className="w-full bg-blue-700 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-800 transition shadow-lg shadow-blue-200">
              {loading ? 'Creating Organization...' : 'REGISTER NOW'} <ChevronRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}