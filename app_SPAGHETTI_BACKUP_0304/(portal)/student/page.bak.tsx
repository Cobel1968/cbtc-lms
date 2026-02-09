"use client";

import React, { useState } from 'react';
import { supabase } from '../../../lib/supabase';
/* Path Logic: 
  From app/(portal)/student/page.tsx:
  - ../../../ gets us to the root.
  - Then into app/api/... or components/...
*/
import StudentHandwritingUpload from '@/components/StudentHandwritingUpload';
import AudioAssessment from '../../../components/student/AudioAssessment'; 
import { Zap } from 'lucide-react';

export default function StudentPage() {
  const [isSimulating, setIsSimulating] = useState(false);

  const simulateAssessment = async () => {
    setIsSimulating(true);
    const { error } = await supabase
      .from('physical_assessments')
      .insert([
        { 
          student_id: 'ABEL-C-001', 
          course_id: 'ELEC-101',
          extracted_terms_fr: ['disjoncteur', 'cÃƒÂ¢blage', 'tension'],
          curriculum_density_update: 0.85
        }
      ]);
    
    setTimeout(() => setIsSimulating(false), 1000);
    if (error) console.error("Sim Error:", error);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <header className="mb-12 flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-black italic tracking-tighter uppercase text-slate-900">
            Student <span className="text-amber-500">Dashboard</span>
          </h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mt-2 text-slate-400">
            Cobel AI Engine // Adaptive Learning Path
          </p>
        </div>
        
        <button 
          onClick={simulateAssessment}
          disabled={isSimulating}
          className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-amber-500 transition-all disabled:opacity-50 shadow-xl shadow-slate-200"
        >
          <Zap size={14} className={isSimulating ? "animate-bounce text-amber-500" : "text-amber-500"} />
          {isSimulating ? "Processing..." : "Simulate Ingestion"}
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
            <h2 className="text-xl font-black mb-6 flex items-center gap-2 uppercase italic">
              <span className="w-2 h-8 bg-amber-500 rounded-full" />
              Technical Fluency
            </h2>
            <AudioAssessment />
          </section>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
              Analog-to-Digital Bridge
            </h2>
            <StudentHandwritingUpload studentId="ABEL-C-001" courseId="elec-101" />
          </section>
        </div>
      </div>
    </div>
  );
}