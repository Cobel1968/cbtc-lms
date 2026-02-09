'use client';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function EvidenceVault() {
  const searchParams = useSearchParams();
  const landingPath = searchParams.get('path') || 'Root';
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const db = JSON.parse(localStorage.getItem('COBEL_V1_DATA') || '{"allScans":[]}');
    setFiles(db.allScans);
  }, []);

  return (
    <div className="p-10 bg-slate-50 min-h-screen font-sans">
      <h1 className="text-3xl font-black text-[#003366] uppercase italic mb-2">Evidence Vault</h1>
      <p className="text-xs font-bold text-slate-400 mb-8">CURRENT DIRECTORY: <span className="text-[#E91E63]">{landingPath}</span></p>

      <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="p-6 text-[10px] font-black uppercase text-slate-400">Artifact</th>
              <th className="p-6 text-[10px] font-black uppercase text-slate-400">Destination Path</th>
              <th className="p-6 text-[10px] font-black uppercase text-slate-400">Score</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, i) => (
              <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/50">
                <td className="p-6 font-bold text-sm text-[#003366]">{file.fileName}</td>
                <td className="p-6 font-mono text-[10px] text-slate-500">{file.path}</td>
                <td className="p-6"><span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-[10px] font-black">{file.score}%</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
