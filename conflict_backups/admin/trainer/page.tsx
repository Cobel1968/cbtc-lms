'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function TrainerQueue() {
  const [pendingStudents] = useState([
    { id: 'STU-001', name: 'Jean Dupont', course: 'Industrial Electricity', timeEnrolled: '10m ago' },
    { id: 'STU-002', name: 'Marie Curie', course: 'Mechanical Logic', timeEnrolled: '1h ago' }
  ]);

  return (
    <div className="p-10 bg-slate-50 min-h-screen font-sans text-[#003366]">
      <header className="mb-10">
        <h1 className="text-4xl font-black uppercase italic tracking-tighter">Diagnostic Queue</h1>
        <p className="text-xs font-bold text-slate-400 uppercase">Awaiting Physical Document Ingestion</p>
      </header>

      <div className="grid grid-cols-1 gap-4">
        {pendingStudents.map(student => (
          <div key={student.id} className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-200 flex justify-between items-center">
            <div>
              <h3 className="font-black uppercase text-lg">{student.name}</h3>
              <p className="text-[10px] font-bold text-slate-400 uppercase">{student.course} • Enrolled {student.timeEnrolled}</p>
            </div>
            
            <Link 
              href={`/admin/handwriting-bridge?studentId=${student.id}&course=${student.course}&isDiagnostic=true`}
              className="bg-[#003366] text-white px-8 py-3 rounded-full font-black text-[10px] uppercase hover:bg-[#E91E63] transition-all"
            >
              Start Proctored Scan
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
