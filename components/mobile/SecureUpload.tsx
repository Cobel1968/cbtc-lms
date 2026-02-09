"use client"
import React, { useState } from 'react'
import { ShieldCheck, Camera, MapPin, CheckCircle2 } from 'lucide-react'

export default function SecureUpload() {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)

  const simulateStep = (next: number) => {
    setLoading(true)
    setTimeout(() => {
      setStep(next)
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="p-6 bg-slate-900 min-h-[400px] rounded-3xl text-white shadow-2xl border border-slate-800">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <ShieldCheck className="text-green-400" /> Secure AI Ingestion
      </h2>
      <p className="text-slate-400 text-xs mb-8">Verification required for Temporal Optimization credits.</p>

      <div className="space-y-4">
        {/* Step 1: Biometric */}
        <div className={`p-4 rounded-2xl border transition ${step >= 2 ? 'border-green-500 bg-green-500/10' : 'border-slate-700 bg-slate-800'}`}>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Camera size={20} className={step >= 2 ? 'text-green-400' : 'text-slate-500'} />
              <span className="text-sm font-bold">1. Identity Verification</span>
            </div>
            {step === 1 ? (
              <button onClick={() => simulateStep(2)} className="text-[10px] bg-blue-600 px-3 py-1 rounded-full font-bold">START</button>
            ) : <CheckCircle2 size={18} className="text-green-400" />}
          </div>
        </div>

        {/* Step 2: Geofencing */}
        <div className={`p-4 rounded-2xl border transition ${step >= 3 ? 'border-green-500 bg-green-500/10' : 'border-slate-700 bg-slate-800'}`}>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <MapPin size={20} className={step >= 3 ? 'text-green-400' : 'text-slate-500'} />
              <span className="text-sm font-bold">2. Site Geofence (Abidjan)</span>
            </div>
            {step === 2 ? (
              <button onClick={() => simulateStep(3)} className="text-[10px] bg-blue-600 px-3 py-1 rounded-full font-bold">LOCATE</button>
            ) : step > 2 ? <CheckCircle2 size={18} className="text-green-400" /> : null}
          </div>
        </div>

        {/* Step 3: Upload */}
        <button 
          disabled={step < 3}
          className={`w-full py-4 rounded-2xl font-black mt-4 transition flex items-center justify-center gap-2 ${step === 3 ? 'bg-green-500 text-white shadow-lg shadow-green-900/20' : 'bg-slate-800 text-slate-600 cursor-not-allowed'}`}
        >
          {loading ? 'Processing...' : 'SNAP TECHNICAL NOTES'}
        </button>
      </div>
    </div>
  )
}