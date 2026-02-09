"use client"
import React, { useState } from 'react'
import { AlertTriangle, CheckCircle2 } from 'lucide-react'

export default function TroubleshootingCircuit({ density }: { density: number }) {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null)
  const [isSolved, setIsSolved] = useState(false)

  // The "Correct" fault for this scenario is the Relief Valve
  const handleIdentifyFault = (component: string) => {
    setSelectedComponent(component)
    if (component === 'relief-valve') {
      setIsSolved(true)
    }
  }

  return (
    <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-2xl overflow-hidden relative">
      <div className="flex justify-between items-start mb-10">
        <div>
          <h2 className="text-2xl font-black uppercase italic tracking-tighter text-cbtc-navy">Scenario: Pressure Drop</h2>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Symptôme: Chute de pression dans le circuit principal</p>
        </div>
        {isSolved && (
          <div className="flex items-center gap-2 text-green-600 animate-bounce">
            <CheckCircle2 size={20} />
            <span className="text-[10px] font-black uppercase">Fault Identified</span>
          </div>
        )}
      </div>

      <svg viewBox="0 0 800 400" className="w-full h-auto">
        {/* Simple Hydraulic Schematic in SVG */}
        <g stroke="#1E293B" strokeWidth="3" fill="none">
          {/* Main Lines */}
          <path d="M 100 300 H 700" strokeDasharray={density > 1 ? "5,5" : "0"} /> 
          <path d="M 400 300 V 100 H 500" />
          
          {/* Pump (Cercle) */}
          <circle 
            cx="100" cy="300" r="30" 
            className="cursor-pointer hover:fill-cbtc-blue/10 transition-colors"
            onClick={() => handleIdentifyFault('pump')}
          />
          <text x="85" y="350" className="text-[10px] font-bold fill-slate-400">PUMP</text>

          {/* Relief Valve (The Faulty Component) */}
          <rect 
            x="370" y="270" width="60" height="60" 
            className={`cursor-pointer transition-all ${selectedComponent === 'relief-valve' ? 'fill-cbtc-magenta' : 'hover:fill-red-50'}`}
            onClick={() => handleIdentifyFault('relief-valve')}
          />
          <text x="350" y="350" className="text-[10px] font-bold fill-cbtc-navy">RELIEF VALVE (SOUPAPE)</text>
          
          {/* Actuator */}
          <rect x="500" y="70" width="150" height="60" />
          <text x="520" y="150" className="text-[10px] font-bold fill-slate-400">ACTUATOR (ACTIONNEUR)</text>
        </g>
      </svg>

      {selectedComponent && !isSolved && (
        <div className="mt-8 p-4 bg-red-50 rounded-2xl flex items-center gap-3 border border-red-100">
          <AlertTriangle className="text-red-500" size={18} />
          <p className="text-[10px] font-black text-red-600 uppercase">Incorrect: This component is functioning within nominal parameters.</p>
        </div>
      )}
    </div>
  )
}