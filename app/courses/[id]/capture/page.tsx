"use client"
import React, { useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { Smartphone, HardDrive, ArrowLeft, Loader2, ShieldCheck } from 'lucide-react'

export default function CapturePage() {
  const router = useRouter()
  const params = useParams()
  const [isProcessing, setIsProcessing] = useState(false)

  const handleAction = () => {
    setIsProcessing(true)
    // Feature 4: Temporal Optimization simulation
    setTimeout(() => {
      router.push(`/courses/${params.id}/analysis`)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-[#001A33] text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        <header className="mb-12">
          <h1 className="text-4xl font-black tracking-tighter uppercase italic">Ingestion Bridge</h1>
          <p className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.3em] mt-2">Bilingual Technical Mapping</p>
        </header>

        <div className="grid gap-4">
          <button onClick={handleAction} className="bg-white/10 border border-white/20 p-8 rounded-[32px] font-bold hover:bg-blue-600 transition group">
            <div className="flex flex-col items-center gap-3">
              <Smartphone className="group-hover:scale-110 transition" size={32} />
              <span className="tracking-widest text-xs">SMARTPHONE SCAN</span>
            </div>
          </button>
          
          <button onClick={handleAction} className="bg-white/10 border border-white/20 p-8 rounded-[32px] font-bold hover:bg-slate-700 transition group">
            <div className="flex flex-col items-center gap-3">
              <HardDrive className="group-hover:scale-110 transition" size={32} />
              <span className="tracking-widest text-xs">CLOUD DRIVE</span>
            </div>
          </button>
        </div>

        {isProcessing && (
          <div className="mt-10 animate-pulse flex flex-col items-center gap-2">
            <Loader2 className="animate-spin text-blue-500" />
            <p className="text-[10px] font-black uppercase text-blue-400">Digitizing Assessment...</p>
          </div>
        )}
      </div>
    </div>
  )
}
