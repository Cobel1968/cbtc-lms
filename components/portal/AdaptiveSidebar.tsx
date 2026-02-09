"use client"
import React from 'react'
import { Zap, CheckCircle, Play } from 'lucide-react'

export default function AdaptiveSidebar({ modules, currentId, timeSaved }) {
  const modulesToSkip = Math.floor(timeSaved / 1.5);

  return (
    <div className="w-80 bg-slate-50 border-r h-[calc(100vh-64px)] p-4 overflow-y-auto">
      <h3 className="font-bold text-slate-400 text-xs uppercase mb-6 tracking-widest">Training Path</h3>
      <div className="space-y-2">
        {modules.map((mod, index) => {
          const isSkipped = index < modulesToSkip;
          const isActive = mod.id === currentId;

          return (
            <div key={mod.id} className={p-3 rounded-lg flex items-center justify-between \}>
              <div className="flex items-center gap-3">
                {isSkipped ? <Zap size={16} className="text-yellow-500" /> : <Play size={16} />}
                <span className="text-sm font-medium">{mod.title}</span>
              </div>
              {isSkipped && <CheckCircle size={14} className="text-green-500" />}
            </div>
          )
        })}
      </div>
    </div>
  )
}