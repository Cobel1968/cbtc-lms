'use client';
import { useEffect, useState } from 'react';
import { OptimizationCard } from '../../components/admin/OptimizationCard';

export default function CommandCenter() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // This fetch now pulls directly from the engine logic we aligned earlier
    fetch('/api/admin/export-friction')
      .then(res => res.json())
      .then(data => setStudents(data))
      .catch(err => console.error("Alignment Error:", err));
  }, []);

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-4xl font-black text-slate-900 uppercase italic">Command Center</h1>
        <p className="text-emerald-500 font-bold tracking-tighter">ADAPTIVE LEARNING ALGORITHM ACTIVE</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {students.map((student) => (
          <div key={student.student_id} className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
            <h2 className="text-3xl font-bold text-slate-800 uppercase mb-1">{student.full_name}</h2>
            <p className="text-emerald-600 font-bold text-sm mb-6">GENERAL TECHNICAL</p>
            
            <div className="flex justify-between items-end">
              <div>
                <p className="text-blue-600 font-black text-xs uppercase tracking-widest mb-2">Temporal Optimization</p>
                <p className="text-5xl font-black text-slate-900">WEEK {Math.ceil(student.density * 12)}</p>
              </div>
              <div className="bg-slate-200 p-4 rounded-2xl text-center min-w-[100px]">
                <p className="text-[10px] font-bold text-slate-500 uppercase">Time Saved</p>
                <p className="text-2xl font-black text-emerald-500">+{Math.round((1 - student.density) * 100)}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
