'use client';
import React from 'react';
import Link from 'next/link';

export default function StudentVaultFolder({ params }: { params: { studentId: string } }) {
  const isTrainer = true; 

  return (
    <div className="p-10 bg-[#FBFBFF] min-h-screen font-sans">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-8">
        <Link href="/admin" className="hover:text-[#003366]">Dashboard</Link>
        <span>/</span>
        <Link href="/admin/vault" className="hover:text-[#003366]">Vault</Link>
        <span>/</span>
        <span className="text-[#E91E63]">{params.studentId}</span>
      </nav>

      <header className="flex justify-between items-center bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 mb-8">
        <div>
          <h2 className="text-3xl font-black text-[#003366] uppercase italic tracking-tighter">Student Artifacts</h2>
          <p className="text-xs font-bold text-slate-500 mt-1">Source: evidence-vault bucket</p>
        </div>
        <div className="text-right">
          <span className="bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-[10px] font-black uppercase">
            {isTrainer ? 'Admin Access' : 'Read-Only'}
          </span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Course Folders Representation */}
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 hover:border-[#003366] transition-all cursor-pointer">
          <div className="text-4xl mb-4"></div>
          <h3 className="font-black text-[#003366] uppercase text-sm">Industrial Electricity</h3>
          <p className="text-[10px] text-slate-400 font-bold uppercase mt-2">3 Artifacts Filed</p>
        </div>
      </div>
    </div>
  );
}
