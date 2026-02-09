"use client"
import React from 'react'
import { Calendar, Target, Award } from 'lucide-react'

export default function MilestoneForecast({ timeSaved }: { timeSaved: number }) {
  // Logic: Calculate graduation based on a 40h/week pace
  const standardHours = 160; 
  const remainingHours = standardHours - timeSaved;
  const weeksToFinish = Math.ceil(remainingHours / 20); // Assuming 20h/week part-time
  
  const graduationDate = new Date();
  graduationDate.setDate(graduationDate.getDate() + (weeksToFinish * 7));

  return (
    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-2xl text-white shadow-xl mt-8">
      <div className="flex items-center gap-2 mb-6 opacity-80">
        <Target size={20} />
        <h3 className="text-xs font-bold uppercase tracking-widest">Automated Milestone Forecasting</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-blue-100 text-sm mb-1">Projected Certification Date</p>
          <h2 className="text-3xl font-black mb-4">
            {graduationDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs">
              <Calendar size={14} /> {weeksToFinish} Weeks Remaining
            </div>
            <div className="flex items-center gap-2 bg-green-400/20 px-3 py-1 rounded-full text-xs text-green-300 border border-green-400/30">
              <Award size={14} /> AI-Accelerated
            </div>
          </div>
        </div>

        <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
          <p className="text-xs text-blue-100 mb-2 font-bold uppercase">Optimization Impact</p>
          <div className="flex justify-between items-end">
            <div>
              <span className="text-2xl font-bold">-{timeSaved}h</span>
              <p className="text-[10px] opacity-70">Removed from Path</p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold">15%</span>
              <p className="text-[10px] opacity-70">Path Density Increase</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}