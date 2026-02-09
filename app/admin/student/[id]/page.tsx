"use client";
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { ChevronLeft, Plus, Settings, UserPlus, ShieldCheck, GraduationCap } from 'lucide-react';
import Sidebar from '@/components/Sidebar';

export default function AdminStudentControl() {
  const { id } = useParams();
  const [isAllocating, setIsAllocating] = useState(false);

  const availableCourses = [
    "Advanced Hydraulic Logic (EN/FR)",
    "Thermal Sensor Mapping",
    "Analog Bridge: Level 2",
    "Corporate Technical Safety"
  ];

  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <nav className="bg-white border-b p-4 flex justify-between items-center px-8 shadow-sm">
           <button onClick={() => window.history.back()} className="text-xs font-black text-slate-400 uppercase flex items-center gap-1">
            <ChevronLeft size={16} /> Back
          </button>
          <div className="flex items-center gap-2">
            <ShieldCheck size={20} className="text-[#00629B]" />
            <span className="font-black text-xs uppercase tracking-tighter">Admin Override Mode</span>
          </div>
        </nav>

        <main className="p-8 max-w-5xl mx-auto w-full">
          <div className="bg-white rounded-[3rem] shadow-2xl p-10 mb-8 border-t-8 border-[#00629B]">
            <h1 className="text-4xl font-black text-slate-900 mb-2">ALLOCATION CENTER</h1>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-10">Assigning Classes for Student ID: {id}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* CURRENT ENROLLMENT */}
              <div>
                <h3 className="font-black text-lg mb-4 text-slate-700">Currently Active</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 flex justify-between items-center">
                    <span className="text-sm font-bold text-[#00629B]">Hydraulic Systems</span>
                    <span className="text-[10px] font-black bg-white px-2 py-1 rounded-lg">92% Progress</span>
                  </div>
                </div>
              </div>

              {/* COURSE ALLOCATION TOOL */}
              <div className="bg-slate-900 text-white p-8 rounded-[2rem]">
                <h3 className="font-black text-lg mb-6 flex items-center gap-2">
                  <Plus className="text-[#10B981]" /> Assign New Module
                </h3>
                <select className="w-full bg-slate-800 border-none rounded-xl p-3 mb-6 text-sm font-bold">
                  {availableCourses.map((c, i) => <option key={i}>{c}</option>)}
                </select>
                <button 
                  onClick={() => { setIsAllocating(true); setTimeout(() => setIsAllocating(false), 2000); }}
                  className="w-full bg-[#10B981] p-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-emerald-400 transition-all"
                >
                  {isAllocating ? "Updating Path Mapping..." : "Inject Course into Engine"}
                </button>
              </div>
            </div>
          </div>

          {/* TRAINER ASSIGNMENT */}
          <div className="bg-white rounded-[3rem] shadow-xl p-10 border border-slate-100">
             <h3 className="font-black text-xl mb-6 flex items-center gap-2">
                <UserPlus className="text-purple-500" /> Assign Primary Trainer
             </h3>
             <div className="flex gap-4">
                {['Trainer Alpha', 'Trainer Beta', 'Trainer Gamma'].map((t, i) => (
                  <button key={i} className="flex-1 py-4 bg-slate-50 hover:bg-purple-50 hover:border-purple-200 border border-transparent rounded-2xl transition-all font-bold text-slate-600 text-sm">
                    {t}
                  </button>
                ))}
             </div>
          </div>
        </main>
      </div>
    </div>
  );
}