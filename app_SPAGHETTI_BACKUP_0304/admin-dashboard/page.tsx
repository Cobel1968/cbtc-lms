"use client";
import React, { useEffect, useState } from 'react';
import Navigation from '@/components/navigation';
import StudentQR from '@/components/qr-generator';
import MilestoneForecast from '@/components/milestone-forecast';
// Use the Singleton to avoid "Multiple GoTrueClient instances" error
import { supabase } from '@/lib/supabaseDB'; 

export default function AdminDashboard() {
  const [students, setStudents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const handleIngestion = async (studentId: string, file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('studentId', studentId);

    try {
      const response = await fetch('/api/analyze-handwriting', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) alert(" Assessment ingested. AI Engine is recalculating milestones...");
    } catch (err) {
      console.error("AI Ingestion Failed:", err);
    }
  };

  useEffect(() => {
    async function fetchStudents() {
      try {
        // Fetching profile + technical metadata for the Cobel AI Engine
        const { data, error } = await supabase
          .from('profiles')
          .select('id, full_name, technical_domain')
          .order('full_name', { ascending: true });

        if (error) throw error;
        if (data) setStudents(data);
      } catch (err) {
        console.error("Error fetching vocational profiles:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchStudents();
  }, []); // supabase is a singleton, no need to include in dependency array

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navigation />
      
      <main className="max-w-7xl mx-auto py-12 px-6">
        <header className="mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter text-[#003366]">Command Center</h2>
            <p className="text-[#10B981] text-xs font-black uppercase tracking-[0.3em]">
              Adaptive Learning Algorithm Active
            </p>
          </div>
          <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-100">
             <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Cohort</span>
             <p className="text-xl font-black text-[#003366]">
               {loading ? "..." : `${students.length} Students`}
             </p>
          </div>
        </header>

        {loading ? (
          <div className="flex justify-center py-20 italic text-slate-400">Syncing with AI Engine...</div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {students.map((student) => (
              <div key={student.id} className="bg-white rounded-[3rem] shadow-xl border border-slate-100 overflow-hidden flex flex-col md:flex-row hover:shadow-2xl transition-shadow duration-300">
                
                {/* Left Side: Stats & Forecast */}
                <div className="flex-1 p-10">
                  <div className="mb-6">
                    <h3 className="text-2xl font-black uppercase tracking-tighter text-[#003366]">
                      {student.full_name || 'Vocational Student'}
                    </h3>
                    <p className="text-[#10B981] text-[10px] font-bold uppercase tracking-widest">
                      {student.technical_domain || 'General Technical'}
                    </p>
                  </div>
                  
                  {/* Phase 3: Automated Milestone Forecasting [cite: 2026-01-01] */}
                  <MilestoneForecast studentId={student.id} />
                <div className="mt-4 flex gap-2">
                  <button 
                    onClick={() => document.getElementById(`upload-${student.id}`).click()}
                    className="text-[9px] font-black uppercase bg-[#003366] text-white px-4 py-2 rounded-lg hover:bg-[#10B981] transition-colors"
                  >
                    Ingest Assessment
                  </button>
                  <input 
                    id={`upload-${student.id}`}
                    type="file" 
                    className="hidden" 
                    onChange={async (e) => {
                      const file = e.target.files[0];
                      if (file) {
                        handleIngestion(student.id, file);
                        // Trigger the Handwriting Analysis Module logic here
                      }
                    }}
                  />
                </div>
                </div>

                {/* Right Side: QR Access Badge (Analog-to-Digital Bridge) */}
                <div className="w-full md:w-64 bg-[#003366]/5 border-l border-slate-100 p-10 flex flex-col items-center justify-center">
                  <p className="text-[9px] font-black uppercase tracking-widest text-[#003366] mb-4 text-center">
                    Student Portal Sync
                  </p>
                  <StudentQR studentId={student.id} />
                  <p className="mt-4 text-[8px] text-slate-400 uppercase font-bold">Scan to Begin Assessment</p>
                </div>

              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}


