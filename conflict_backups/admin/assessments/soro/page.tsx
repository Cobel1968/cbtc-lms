'use client';
export default function HandwritingAnalysis() {
  return (
    <div className="p-10 bg-slate-50 min-h-screen">
      <h1 className="text-3xl font-black italic uppercase">Handwriting Analysis: Mr. Soro</h1>
      <div className="mt-8 p-10 bg-white rounded-3xl shadow-xl border-2 border-emerald-500">
        <h2 className="text-emerald-600 font-bold mb-4">ALGORITHM: ANALOG-TO-DIGITAL BRIDGE</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 rounded-xl">
            <p className="text-xs font-bold text-slate-400">ENGLISH TERMS</p>
            <p className="font-bold">Maintenance, Safety, Logic</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl">
            <p className="text-xs font-bold text-slate-400">FRANÇAIS</p>
            <p className="font-bold">Entretien, Sécurité, Logique</p>
          </div>
        </div>
      </div>
    </div>
  );
}
