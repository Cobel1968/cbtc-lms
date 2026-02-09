"use client";
import React from 'react';
import { useAssessments } from '../../../hooks/useAssessments';
import { FileText, Mic, BarChart, Download } from 'lucide-react';
import CobelLogo from '../../../components/shared/CobelLogo';

export default function TrainerDashboard() {
  const { data: assessments, loading } = useAssessments();

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <header className="mb-12 flex justify-between items-center">
        <CobelLogo subtext="Trainer Audit Hub // Integrated Stream" />
      </header>

      <div className="grid gap-4">
        {assessments.map((item: any) => (
          <div key={item.id} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div className="flex gap-6 items-center">
               <div className="text-left">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Student ID</p>
                  <p className="font-bold text-slate-900">{item.student_id}</p>
               </div>
               
               {/* Visual & Audio Artifact Indicators */}
               <div className="flex gap-2">
                 <button className="p-2 bg-slate-100 rounded-lg hover:bg-amber-100 text-slate-400 hover:text-amber-600 transition-all">
                   <FileText size={18} />
                 </button>
                 <button className="p-2 bg-slate-100 rounded-lg hover:bg-blue-100 text-slate-400 hover:text-blue-600 transition-all">
                   <Mic size={18} />
                 </button>
               </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="text-right">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Density Impact</p>
                <p className="font-black text-amber-500 italic">{(item.curriculum_density_update * 100).toFixed(0)}%</p>
              </div>
              <button className="px-6 py-2 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest">
                Review & Adjust
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}