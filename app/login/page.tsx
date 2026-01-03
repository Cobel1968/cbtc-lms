'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Lock, User, ShieldCheck, Zap } from 'lucide-react'

export default function LoginPage() {
  const [role, setRole] = useState<'trainer' | 'student'>('trainer')
  const [email, setEmail] = useState('')
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // In demo mode, we redirect based on selection
    if (role === 'trainer') {
      router.push('/trainer-dashboard')
    } else {
      router.push('/student-dashboard')
    }
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-[40px] shadow-2xl shadow-indigo-100 border border-slate-100 overflow-hidden">
        <div className="p-10">
          <div className="flex flex-col items-center mb-10 text-center">
            <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-indigo-200">
              <Zap className="text-white" size={32} fill="white" />
            </div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">COBEL AI ENGINE</h1>
            <p className="text-slate-400 text-sm font-medium">Vocational Innovation Portal (2026)</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Role Selector */}
            <div className="flex bg-slate-100 p-1 rounded-2xl mb-8">
              <button
                type="button"
                onClick={() => setRole('trainer')}
                className={`flex-1 py-3 rounded-xl text-xs font-black transition-all ${role === 'trainer' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400'}`}
              >
                INSTRUCTOR
              </button>
              <button
                type="button"
                onClick={() => setRole('student')}
                className={`flex-1 py-3 rounded-xl text-xs font-black transition-all ${role === 'student' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400'}`}
              >
                STUDENT
              </button>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <User className="absolute left-4 top-4 text-slate-300" size={18} />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-600/20 font-medium text-sm"
                  required
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-4 text-slate-300" size={18} />
                <input 
                  type="password" 
                  placeholder="Access Key" 
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-600/20 font-medium text-sm"
                  required
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200"
            >
              <ShieldCheck size={18} />
              Secure Access
            </button>
          </form>
        </div>
        
        <div className="bg-slate-50 p-6 text-center">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
            Validated by Cobel Business Training Center
          </p>
        </div>
      </div>
    </div>
  )
}