"use client";

import React, { useState } from 'react';
import { FileText, CheckCircle2, Loader2, AlertTriangle } from 'lucide-react';

export default function StudentHandwritingUpload({ studentId, courseId }: { studentId: string, courseId: string }) {
  const [status, setStatus] = useState<'idle' | 'processing' | 'done' | 'error'>('idle');

  const processAssessment = async () => {
    setStatus('processing');
    try {
      const response = await fetch('/api/ingest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studentId, courseId, image: 'base64_placeholder' })
      });
      
      if (response.ok) setStatus('done');
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm">
      <div className="flex flex-col items-center text-center">
        <div className="p-4 bg-amber-50 rounded-2xl mb-4">
          <FileText className="text-amber-600" size={32} />
        </div>
        
        <h3 className="font-black uppercase italic tracking-tighter text-slate-900">
          Analog-to-Digital <span className="text-amber-500">Bridge</span>
        </h3>
        
        {status === 'idle' && (
          <button 
            onClick={processAssessment}
            className="mt-6 w-full py-3 bg-slate-900 text-white rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-amber-500 transition-all"
          >
            Upload Physical Assessment
          </button>
        )}

        {status === 'processing' && (
          <div className="mt-6 flex items-center gap-2 text-amber-600 font-black uppercase text-[10px]">
            <Loader2 className="animate-spin" size={16} />
            Analyzing technical terms...
          </div>
        )}

        {status === 'done' && (
          <div className="mt-6 flex flex-col items-center gap-2">
            <CheckCircle2 className="text-green-500" size={32} />
            <p className="font-black uppercase text-[10px] text-green-600">Sync Complete // Data Pushed to Trainer</p>
          </div>
        )}

        {status === 'error' && (
          <div className="mt-6 text-red-500 flex items-center gap-2 font-black uppercase text-[10px]">
            <AlertTriangle size={16} /> Bridge Connection Failed
          </div>
        )}
      </div>
    </div>
  );
}