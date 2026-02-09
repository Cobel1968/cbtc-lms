"use client"
import React, { useState } from 'react'
import { Camera, FileText, Loader2, CheckCircle, Languages } from 'lucide-react'

export default function HandwritingModule({ onAnalysisComplete }: { onAnalysisComplete: (data: any) => void }) {
  const [isScanning, setIsScanning] = useState(false)
  const [result, setResult] = useState<any>(null)

  const simulateOCR = () => {
    setIsScanning(true)
    // Simulating the Analog-to-Digital Pedagogical Bridge delay
    setTimeout(() => {
      const mockExtraction = {
        termsFound: ["Soupape", "Actuator", "Pressure"],
        bilingualMatch: 0.85,
        handwritingConfidence: "High"
      }
      setResult(mockExtraction)
      setIsScanning(false)
      onAnalysisComplete(mockExtraction)
    }, 3000)
  }

  return (
    <div className="mt-12 p-8 bg-slate-50 rounded-[2.5rem] border-2 border-dashed border-slate-200">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-cbtc-navy rounded-2xl flex items-center justify-center text-white">
          <Camera size={24} />
        </div>
        <div>
          <h3 className="text-sm font-black uppercase italic text-cbtc-navy">Analog-to-Digital Bridge</h3>
          <p className="text-[10px] font-bold text-slate-400 uppercase">Upload handwritten vocational assessment</p>
        </div>
      </div>

      {!result ? (
        <button 
          onClick={simulateOCR}
          disabled={isScanning}
          className="w-full py-6 bg-white border border-slate-200 rounded-2xl flex flex-col items-center gap-2 hover:border-cbtc-blue transition-all"
        >
          {isScanning ? (
            <>
              <Loader2 className="animate-spin text-cbtc-blue" />
              <span className="text-[10px] font-black uppercase text-cbtc-blue">Extracting Technical Terms...</span>
            </>
          ) : (
            <>
              <FileText className="text-slate-300" />
              <span className="text-[10px] font-black uppercase text-slate-400">Scan Physical Notes</span>
            </>
          )}
        </button>
      ) : (
        <div className="bg-white p-6 rounded-2xl border border-green-100 animate-in zoom-in-95">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2 text-green-600">
              <CheckCircle size={16} />
              <span className="text-[10px] font-black uppercase">OCR Extraction Complete</span>
            </div>
            <div className="flex items-center gap-1 text-cbtc-magenta">
              <Languages size={14} />
              <span className="text-[10px] font-black">{(result.bilingualMatch * 100)}% Match</span>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            {result.termsFound.map((term: string) => (
              <span key={term} className="px-3 py-1 bg-cbtc-slate rounded-full text-[9px] font-bold text-cbtc-navy">
                {term}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}