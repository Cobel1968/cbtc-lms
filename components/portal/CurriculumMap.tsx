"use client"
import React from 'react'
import { Zap, CheckCircle } from 'lucide-react'

export default function CurriculumMap({ timeSaved = 45 }) {
  const modulesToSkip = Math.floor(timeSaved / 1.5)
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><Zap className="text-yellow-500" size={20} /> Your Adaptive Path</h3>
      <div className="space-y-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className={`p-4 rounded-xl border ${i <= 3 ? 'bg-green-50 border-green-100 opacity-60' : 'bg-white border-slate-100'}`}>
            <div className="flex justify-between items-center text-slate-700">
              <span className="text-sm font-bold">Module {i}: Technical Fluency</span>
              {i <= 3 && <CheckCircle className="text-green-500" size={16} />}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}