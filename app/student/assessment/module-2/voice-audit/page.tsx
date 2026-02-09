"use client"
import React, { useState, useEffect } from 'react'
import TopNav from '@/components/TopNav'
import { Mic, Square, Volume2, Languages, Loader2, CheckCircle, AlertCircle } from 'lucide-react'

export default function AudioVoiceAudit() {
  const [isRecording, setIsRecording] = useState(false)
  const [auditStatus, setAuditStatus] = useState('idle') // idle, recording, analyzing, complete
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    let interval: any
    if (isRecording) {
      interval = setInterval(() => setTimer(t => t + 1), 1000)
    } else {
      clearInterval(interval)
      setTimer(0)
    }
    return () => clearInterval(interval)
  }, [isRecording])

  const startAudit = () => {
    setIsRecording(true)
    setAuditStatus('recording')
  }

  const stopAudit = () => {
    setIsRecording(false)
    setAuditStatus('analyzing')
    setTimeout(() => setAuditStatus('complete'), 3500)
  }

  return (
    <div className="min-h-screen bg-cbtc-slate font-sans text-cbtc-navy">
      <TopNav />
      
      <main className="max-w-4xl mx-auto py-16 px-6">
        <div className="text-center mb-12">
          <span className="text-cbtc-magenta text-[10px] font-black uppercase tracking-[0.4em]">Feature 02 // Voice Audit</span>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter mt-2">Bilingual Technical Fluency</h1>
        </div>

        <div className="bg-white rounded-[4rem] p-12 shadow-2xl border border-white text-center relative overflow-hidden">
          {/* WAVEFORM VISUALIZER PLACEHOLDER */}
          <div className="h-32 flex items-center justify-center gap-1 mb-10">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className={`w-1.5 rounded-full transition-all duration-300 ${isRecording ? 'bg-cbtc-magenta animate-bounce' : 'bg-slate-100 h-4'}`}
                style={{ height: isRecording ? `${Math.random() * 80 + 20}%` : '16px', animationDelay: `${i * 0.05}s` }}
              />
            ))}
          </div>

          <div className="max-w-md mx-auto mb-12">
            <div className="flex items-center justify-center gap-2 text-cbtc-blue mb-4">
               <Languages size={18} />
               <span className="text-[10px] font-black uppercase tracking-widest">Bilingual Prompt</span>
            </div>
            <p className="text-xl font-black uppercase italic tracking-tighter leading-tight">
              "Explain the role of the <span className="text-cbtc-magenta">Accumulator</span> in maintaining pressure stability."
            </p>
            <p className="text-sm font-medium text-slate-400 mt-4 italic">
               Expliquez le rôle de l'accumulateur dans le maintien de la stabilité de la pression. 
            </p>
          </div>

          {/* CONTROLS */}
          <div className="flex flex-col items-center gap-6">
            {auditStatus === 'idle' && (
              <button 
                onClick={startAudit}
                className="w-24 h-24 bg-cbtc-blue text-white rounded-full flex items-center justify-center shadow-xl shadow-blue-100 hover:scale-110 transition-transform"
              >
                <Mic size={32} />
              </button>
            )}

            {auditStatus === 'recording' && (
              <div className="space-y-4">
                <button 
                  onClick={stopAudit}
                  className="w-24 h-24 bg-cbtc-magenta text-white rounded-full flex items-center justify-center shadow-xl shadow-pink-100 animate-pulse"
                >
                  <Square size={32} fill="currentColor" />
                </button>
                <p className="text-lg font-black italic tracking-tighter">00:{timer.toString().padStart(2, '0')}</p>
              </div>
            )}

            {auditStatus === 'analyzing' && (
              <div className="flex flex-col items-center gap-4 py-6">
                <Loader2 className="animate-spin text-cbtc-yellow" size={48} />
                <p className="text-[10px] font-black uppercase tracking-widest text-cbtc-blue">AI Engine: Extracting Fluency Markers...</p>
              </div>
            )}

            {auditStatus === 'complete' && (
              <div className="bg-green-50 border border-green-100 p-8 rounded-[2.5rem] w-full flex items-center justify-between">
                <div className="flex items-center gap-4 text-left">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-2xl flex items-center justify-center">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black uppercase italic text-green-700">Audit Verified</h4>
                    <p className="text-[10px] font-bold text-green-600 uppercase">Score: B2 Technical Fluency</p>
                  </div>
                </div>
                <button 
                  onClick={() => window.location.href = '/student/portal'}
                  className="bg-cbtc-navy text-white px-8 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-cbtc-blue"
                >
                  Return to Path
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 flex items-center gap-4 justify-center text-slate-400">
           <AlertCircle size={14} />
           <p className="text-[9px] font-bold uppercase tracking-widest">Your voice data is processed locally to maintain data integrity [Abel C. Pedagogical Logic]</p>
        </div>
      </main>
    </div>
  )
}