"use client"
import React from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { MasterReport } from './MasterReport'
import { Download, FileCheck } from 'lucide-react'

export default function DownloadReportButton({ student, assessments }) {
  // Logic Gate: Only allow download if all 8 modules are present
  const isComplete = assessments.length >= 8;

  if (!isComplete) {
    return (
      <div className="p-4 bg-slate-50 rounded-2xl border border-dashed border-slate-300 text-center">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          Certification Pending: {assessments.length}/8 Modules
        </p>
      </div>
    );
  }

  return (
    <div className="group relative">
      <PDFDownloadLink
        document={<MasterReport student={student} assessments={assessments} />}
        fileName={CBTC_Certification_.pdf}
        className="flex items-center gap-3 px-8 py-4 bg-[#002D62] text-white rounded-2xl font-black text-xs uppercase tracking-tighter hover:bg-[#E11D48] transition-all duration-300 shadow-lg shadow-blue-900/20"
      >
        {({ loading }) => (
          <>
            {loading ? 'Preparing Document...' : 'Download Official Transcript'}
            <Download size={16} className="group-hover:translate-y-1 transition-transform" />
          </>
        )}
      </PDFDownloadLink>
      <div className="absolute -top-3 -right-3">
         <div className="bg-[#E11D48] p-1.5 rounded-full text-white shadow-md">
            <FileCheck size={12} />
         </div>
      </div>
    </div>
  )
}
