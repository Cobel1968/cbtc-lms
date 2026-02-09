'use client';
import { useEffect, useState } from 'react';

export default function StudentListPage() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('/api/admin/export-friction').then(res => res.json()).then(data => setStudents(data));
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-black italic mb-6 uppercase text-slate-800">Student Roster</h1>
      <div className="bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-[#1e1b4b] text-white uppercase text-[10px] tracking-widest">
            <tr>
              <th className="p-5">Candidate Name</th>
              <th className="p-5">Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s, i) => (
              <tr key={i} className="border-b">
                <td className="p-5 font-bold text-slate-900">{s.full_name || "Mr. Soro"}</td>
                <td className="p-5">
                  <button 
                    onClick={() => window.location.href='/admin/assessment/soro'}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-bold uppercase hover:bg-blue-700"
                  >
                    View Analysis
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
