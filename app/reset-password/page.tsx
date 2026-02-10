"use client"
import React, { useState } from 'react'
import TopNav from '@/components/TopNav'
import { Mail, Send } from 'lucide-react'
import { supabase } from '@/lib/supabase'

export default function ResetPage() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleReset = async (e) => {
    e.preventDefault()
    await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/update-password`,
    })
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <TopNav />
      <main className="max-w-md mx-auto py-20 px-6">
        <div className="bg-white p-10 rounded-[40px] shadow-xl text-center">
          <h1 className="text-2xl font-black uppercase mb-4">Reset Access</h1>
          {!sent ? (
            <form onSubmit={handleReset} className="space-y-4">
              <p className="text-slate-500 text-xs mb-6">Enter your email to receive an optimization recovery link.</p>
              <div className="relative">
                <Mail className="absolute left-4 top-4 text-slate-300" size={18} />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border-none text-sm" 
                />
              </div>
              <button className="w-full bg-[#003366] text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest">
                Send Recovery Link
              </button>
            </form>
          ) : (
            <div className="py-10">
              <Send className="text-green-500 mx-auto mb-4" size={48} />
              <p className="font-bold text-slate-800">Check your inbox.</p>
              <p className="text-slate-400 text-xs mt-2">The AI Engine has dispatched your recovery credentials.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}