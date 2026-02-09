import React, { useEffect, useState } from 'react';

export default function SupervisorDashboard() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch('/api/supervisor/stats').then(res => res.json()).then(setStats);
  }, []);

  const handleExport = () => {
    window.print();
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8 print:hidden">
        <div>
          <h2 className="text-2xl font-bold">Cobel Business Training Center</h2>
          <p className="text-gray-600">Adaptive Learning Performance Report</p>
        </div>
        <button 
          onClick={handleExport}
          className="bg-black text-white px-6 py-2 rounded shadow hover:bg-gray-800 transition"
        >
          Export PDF Report
        </button>
      </div>

      {/* PDF ONLY HEADER (Hidden on web, visible in PDF) */}
      <div className="hidden print:block mb-10 border-b-2 border-black pb-4">
        <h1 className="text-3xl font-serif">OFFICIAL PERFORMANCE AUDIT</h1>
        <p className="text-sm">Generated: {new Date().toLocaleDateString()}</p>
        <p className="text-sm">Project: Cobel AI Engine (LMS)</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((s: any) => (
          <div key={s.name} className="p-4 bg-white rounded shadow border-l-4 border-blue-500 print:border-black print:shadow-none">
            <h4 className="font-bold text-lg">{s.name}</h4>
            <p className="text-sm text-gray-500 italic">{s.name_fr}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-xs font-semibold px-2 py-1 bg-green-100 text-green-700 rounded print:bg-gray-100">
                Velocity: {s.velocity}x
              </span>
              <span className="text-sm font-bold text-blue-600 print:text-black">
                {s.hoursSaved}h Saved
              </span>
            </div>
          </div>
        ))}
      </div>

      <footer className="mt-12 hidden print:block text-center text-xs text-gray-400">
        Cobel Business Training Center - Computer-Implemented Pedagogical Logic Proprietary System
      </footer>
    </div>
  );
}
