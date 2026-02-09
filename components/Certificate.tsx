"use client";
import { Award, FileText, Download } from 'lucide-react';

export default function Certificate({ studentName, modules, score }: { studentName: string, modules: any[], score: number }) {
  return (
    <div className="flex flex-col items-center gap-8 p-10">
      {/* THE CERTIFICATE */}
      <div id="certificate" className="w-[800px] h-[600px] bg-white border-[20px] border-[#00629B] p-12 relative shadow-2xl flex flex-col items-center text-center">
        <div className="absolute top-10 right-10 opacity-10"><Award size={150} /></div>
        <img src="/logo.png" className="h-16 mb-6" alt="Cobel Logo" />
        <h1 className="text-5xl font-serif font-bold text-slate-800 mb-2">CERTIFICATE</h1>
        <p className="text-xl uppercase tracking-[0.2em] text-slate-500 mb-10">of Achievement</p>
        <p className="text-lg italic text-slate-600">This is to certify that</p>
        <h2 className="text-4xl font-black text-[#00629B] my-4 uppercase">{studentName}</h2>
        <p className="max-w-md text-slate-600">has successfully mastered the Bilingual Vocational curriculum with a focus on Technical Fluency and Adaptive Logic.</p>
        <div className="mt-12 flex justify-between w-full px-20 text-sm font-bold border-t pt-4 text-slate-400">
           <span>GRADE: {score}%</span>
           <span>COBEL AI ENGINE VERIFIED</span>
        </div>
      </div>

      {/* THE TRANSCRIPT */}
      <div className="w-full max-w-4xl bg-white p-10 rounded-3xl shadow-lg border">
        <h3 className="flex items-center gap-2 text-xl font-black mb-6"><FileText /> BILINGUAL TECHNICAL TRANSCRIPT</h3>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-xs text-slate-400 uppercase">
              <th className="py-2">Technical Module</th>
              <th>English Competency</th>
              <th>Compétence Française</th>
              <th>Fluency</th>
            </tr>
          </thead>
          <tbody>
            {modules.map((m, i) => (
              <tr key={i} className="border-b hover:bg-slate-50 transition-colors">
                <td className="py-4 font-bold text-[#00629B]">{m.title}</td>
                <td className="text-sm">Pass</td>
                <td className="text-sm">Réussi</td>
                <td><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-[10px] font-black">98.2%</span></td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="mt-8 flex items-center gap-2 bg-[#10B981] text-white px-6 py-3 rounded-2xl font-bold hover:scale-105 transition-transform">
          <Download size={18} /> DOWNLOAD DOCUMENTS
        </button>
      </div>
    </div>
  );
}