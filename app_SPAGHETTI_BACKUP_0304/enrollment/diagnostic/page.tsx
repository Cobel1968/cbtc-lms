'use client';
import React from 'react';
import StudentHandwritingUpload from '@/components/StudentHandwritingUpload';

export default function DiagnosticPage() {
  return (
    <div className="min-h-screen bg-[#FBFBFF] p-10 font-sans">
      <header className="mb-12">
        <h1 className="text-4xl font-black text-[#003366] uppercase italic tracking-tighter">
          Phase 1: Multi-Dimensional Diagnostic
        </h1>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2">
          Cobel AI Engine / Bilingual Vocational Mapping
        </p>
      </header>

      <div className="max-w-4xl bg-white p-12 rounded-[3rem] shadow-xl border border-slate-100">
        {/* The Actual Ingestion Bridge */}
        <StudentHandwritingUpload isInitial={true} />
      </div>
    </div>
  );
}