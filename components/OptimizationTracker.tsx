'use client';
import React from 'react';

export default function OptimizationTracker({ density = 1.0 }) {
  const progressPercent = Math.min((density - 1) * 200, 100);

  return (
    <div className="p-6 bg-slate-900 text-white rounded-xl mt-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">Temporal Optimization</h3>
        <span className="bg-green-500 text-black text-[10px] px-2 py-1 rounded font-bold">ACTIVE</span>
      </div>
      <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
        <div 
          className="bg-green-400 h-full transition-all duration-700" 
          style={{ width: progressPercent + '%' }}
        ></div>
      </div>
      <p className="mt-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest">Density: {density}x</p>
    </div>
  );
}