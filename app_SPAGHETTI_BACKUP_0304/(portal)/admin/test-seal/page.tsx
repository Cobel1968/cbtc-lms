"use client";
import { sealAssessment } from '@/lib/seal-logic';
import { useState } from 'react';

export default function TestSealPage() {
  const [status, setStatus] = useState('Ready');

  const runTest = async () => {
    setStatus('Sealing...');
    // Testing with your specific student ID
    const result = await sealAssessment('test-scan.pdf', 'ABEL-C-001');
    setStatus(result.success ? ' Success: File Vaulted' : ` Error: ${result.error}`);
  };

  return (
    <div className="p-20 bg-slate-900 min-h-screen text-white">
      <h1 className="text-2xl font-black mb-4 italic uppercase">Seal & Move System Test</h1>
      <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700">
        <p className="mb-4 text-sm text-slate-400">Target: ABEL-C-001/scanned/test-scan.pdf</p>
        <button onClick={runTest} className="bg-amber-500 text-slate-900 px-8 py-3 rounded-xl font-black uppercase tracking-widest">
          Execute Transfer
        </button>
        <p className="mt-6 font-mono text-amber-500">{status}</p>
      </div>
    </div>
  );
}