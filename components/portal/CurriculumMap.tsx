"use client"
import React from 'react'
import { CheckCircle2, Clock, Zap, Lock } from 'lucide-react'

const MOCK_MODULES = [
  { id: 1, title: 'Basic Electrical Theory', category: 'General', hours: 10, requiredTerms: ['Voltage'] },
  { id: 2, title: 'Bilingual Technical Vocabulary', category: 'Vocational', hours: 5, requiredTerms: ['Multimeter'] },
  { id: 3, title: 'Advanced Circuitry', category: 'Technical', hours: 20, requiredTerms: ['Schéma électrique'] },
  { id: 4, title: 'Industrial Safety Protocols', category: 'Safety', hours: 8, requiredTerms: [] }
]

export default function CurriculumMap({ timeSaved }: { timeSaved: number }) {
  // Logic: Calculate how many modules are 'Skipped' based on timeSaved (1.5h per term)
  const modulesToSkip = Math.floor(timeSaved / 1.5);

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
        <Zap className="text-yellow-500" size={20} /> Your Adaptive Learning Path
      </h3>
      
      <div className="space-y-3">
        {MOCK_MODULES.map((mod, index) => {
          const isSkipped = index < modulesToSkip;
          
          return (
            <div key={mod.id} className={p-4 rounded-xl border-2 transition-all \}>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  {isSkipped ? (
                    <CheckCircle2 className="text-green-500" size={24} />
                  ) : (
                    <div className="w-6 h-6 rounded-full border-2 border-slate-300" />
                  )}
                  <div>
                    <h4 className={ont-semibold \}>
                      {mod.title}
                    </h4>
                    <p className="text-xs text-slate-500">{mod.category}  {mod.hours} Total Hours</p>
                  </div>
                </div>
                
                {isSkipped && (
                  <span className="bg-green-200 text-green-700 text-[10px] px-2 py-1 rounded-full font-bold uppercase">
                    Skipped by AI Engine
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}