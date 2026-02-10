"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import TopNav from '@/components/TopNav'
import { Mail, Lock, Eye, EyeOff, ArrowRight, RefreshCcw } from 'lucide-react'
import { supabase } from '@/lib/supabase'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    
    if (error) {
      setMessage(`Error: ${error.message}`)
      setLoading(false)
    } else {
      window.location.href = '/dashboard/b2b'
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <TopNav />
      <main className="max-w-md mx-auto py-20 px-6">
        <div className="bg-white p-10 rounded-[40px] shadow-2xl border border-slate-100">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black uppercase tracking-tighter text-[#003366]">Actor Login</h1>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">Cobel AI Engine Access</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-4 top-4 text-slate-300" size={18} />
              <input 
                type="email" 
                placeholder="Email Address" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border-none text-sm focus:ring-2 focus:ring-blue-500 transition-all" 
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-4 text-slate-300" size={18} />
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-12 py-4 rounded-2xl bg-slate-50 border-none text-sm focus:ring-2 focus:ring-blue-500 transition-all" 
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-4 text-slate-400 hover:text-blue-600 transition"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="text-right">
              <Link href="/reset-password" alt="reset" className="text-[10px] font-black uppercase text-blue-600 hover:underline tracking-widest">
                Forgot Password?
              </Link>
            </div>

            {message && <p className="text-red-500 text-[10px] font-bold text-center uppercase">{message}</p>}

            <button 
              disabled={loading}
              className="w-full bg-[#003366] text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-800 transition flex items-center justify-center gap-2 shadow-xl shadow-blue-900/20 disabled:opacity-50"
            >
              {loading ? <RefreshCcw className="animate-spin" size={16} /> : "Authorize Entry"}
              {!loading && <ArrowRight size={16} />}
            </button>
          </form>
          
          <div className="mt-10 pt-8 border-t border-slate-50 text-center">
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
              New B2B Partner? <Link href="/register" className="text-blue-600 hover:underline">Register Fleet</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}