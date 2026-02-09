"use client";
import React, { useState } from 'react';
import BrandedTranscript from '@/components/BrandedTranscript';

export default function TrainerPortal() {
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleVerify = async (studentId: string) => {
    setLoading(true);
    try {
      const response = await fetch('/api/trainer/verify-milestone', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studentId, documentId: 'DOC-99' }),
      });
      if (response.ok) setIsVerified(true);
    } catch (error) {
      console.error("Verification failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10 bg-slate-50 min-h-screen font-sans text-slate-900">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 flex justify-between items-end border-b pb-6">
          <div>
            <h1 className="text-[#003366] text-3xl font-black uppercase tracking-tight">Trainer Control</h1>
            <p className="text-slate-500 font-medium">Bilingual Technical Proficiency Audit</p>
          </div>
        </header>
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-400 text-[10px] uppercase font-bold">
              <tr>
                <th className="px-6 py-4">Student</th>
                <th className="px-6 py-4">Assessment</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="px-6 py-6"><p className="font-bold">Jean Marc</p></td>
                <td className="px-6 py-6"><span className="bg-purple-50 text-purple-700 text-[10px] px-2 py-1 rounded-full font-bold">HANDWRITING OCR</span></td>
                <td className="px-6 py-6 text-right">
                  <button 
                    onClick={() => handleVerify('JM-001')}
                    disabled={loading || isVerified}
                    className="bg-[#003366] text-white px-6 py-2 rounded-lg text-xs font-black uppercase"
                  >
                    {loading ? 'Processing...' : isVerified ? 'Verified' : 'Approve & Forecast'}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}