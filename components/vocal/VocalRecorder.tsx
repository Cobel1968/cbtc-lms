"use client"
import React, { useState, useRef } from 'react'
import { Mic, Square, Play, UploadCloud, AlertCircle } from 'lucide-react'

export default function VocalRecorder({ promptId, expectedPhrases }: { promptId: number, expectedPhrases: string[] }) {
  const [isRecording, setIsRecording] = useState(false)
  const [results, setResults] = useState<{accuracy: number, friction: number} | null>(null)
  
  // Feature 2: Simulate Vocal Analysis Locally (Offline Compatible)
  const simulateVocalAnalysis = (transcript: string) => {
    const matches = expectedPhrases.filter(word => 
      transcript.toLowerCase().includes(word.toLowerCase())
    );
    const accuracy = (matches.length / expectedPhrases.length) * 100;
    const friction = accuracy < 70 ? 0.8 : 0.2;
    
    setResults({ accuracy, friction });
    console.log("Cobel AI Engine (Local):", { accuracy, friction });
  };

  return (
    <div className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl">
      <div className="flex flex-col items-center gap-6">
        <div className={p-6 rounded-full }>
          <Mic size={48} className={isRecording ? 'text-red-500' : 'text-cbtc-blue'} />
        </div>
        
        <div className="text-center">
          <h4 className="text-cbtc-navy font-black uppercase italic tracking-tight">Vocal Fluency Gate</h4>
          <p className="text-[10px] text-slate-500 font-bold">REQUIRED: {expectedPhrases.join(", ")}</p>
        </div>

        <button 
          onClick={() => setIsRecording(!isRecording)} 
          className="px-8 py-4 bg-cbtc-navy text-white rounded-2xl font-black text-xs uppercase"
        >
          {isRecording ? 'Stop & Analyze' : 'Start Vocal Test'}
        </button>

        {results && (
          <div className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="flex justify-between text-[10px] font-black uppercase">
              <span>Accuracy: {results.accuracy}%</span>
              <span className={results.friction > 0.5 ? 'text-red-500' : 'text-green-500'}>
                Friction Index: {results.friction}
              </span>
            </div>
            <div className="mt-2 w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div className="bg-cbtc-blue h-full" style={{ width: ${results.accuracy}% }}></div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
