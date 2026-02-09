"use client";
import React, { useState } from 'react';
import StudentHandwritingUpload from '../StudentHandwritingUpload';

export default function DynamicViewer({ courseId, htmlPath }: { courseId: string, htmlPath: string }) {
  const [showUpload, setShowUpload] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-slate-950">
      <div className="p-4 bg-slate-900 border-b border-slate-800 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Cobel AI Engine</span>
          <h2 className="text-amber-500 font-black uppercase tracking-tighter text-sm">Active Session: {courseId}</h2>
        </div>
        <button 
          onClick={() => setShowUpload(true)}
          className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-6 py-2 rounded-xl text-[10px] font-black uppercase transition-all"
        >
          Submit Practical Assessment
        </button>
      </div>

      <div className="flex-1 relative bg-white">
        <iframe 
          src={htmlPath} 
          className="w-full h-full border-none"
          title="Vocational Course Content"
        />
      </div>

      {showUpload && (
        <div className="fixed inset-0 bg-slate-900/98 flex items-center justify-center z-50 p-6 backdrop-blur-sm">
          <div className="max-w-md w-full bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
               <h3 className="text-white font-black uppercase text-sm">Upload Handwriting</h3>
               <button onClick={() => setShowUpload(false)} className="text-slate-500 hover:text-white text-xs font-bold">CANCEL</button>
            </div>
            <StudentHandwritingUpload courseId={courseId} />
          </div>
        </div>
      )}
    </div>
  );
}