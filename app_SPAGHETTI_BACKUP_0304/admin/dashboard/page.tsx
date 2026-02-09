"use client";

import React from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export default function AdminDashboard() {
  const stats = {
    totalStudents: 124,
    avgDensity: 1.18,
    totalHoursSaved: 1420,
    topKeywords: [
      { term: "Inverter / Onduleur", category: "Power Electronics", hits: 85 },
      { term: "Photovoltaic", category: "Energy Generation", hits: 72 },
      { term: "Circuit Breaker", category: "Safety", hits: 64 }
    ]
  };

  const downloadReport = () => {
    const doc = new jsPDF();
    const date = new Date().toLocaleString();
    
    doc.setFontSize(20);
    doc.text("Cobel AI Engine: Innovation Report", 14, 22);
    
    doc.setFontSize(11);
    doc.setTextColor(100);
    doc.text("Center-wide Adaptive Learning Analytics Summary", 14, 30);
    
    doc.setFontSize(10);
    doc.text("Generated on: " + date, 14, 35);

    autoTable(doc, {
      startY: 40,
      head: [['Metric', 'Value']],
      body: [
        ['Total Students Optimized', stats.totalStudents],
        ['Average Curriculum Density', stats.avgDensity + 'x'],
        ['Total Man-Hours Reclaimed', stats.totalHoursSaved + 'h'],
      ],
    });

    const finalY = (doc as any).lastAutoTable.finalY;
    doc.text("Bilingual Technical Proficiency Heatmap", 14, finalY + 10);

    autoTable(doc, {
      startY: finalY + 15,
      head: [['Technical Term', 'Category', 'Fluency Hits']],
      body: stats.topKeywords.map(k => [k.term, k.category, k.hits]),
    });

    doc.save('Cobel_Center_Report.pdf');
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen font-sans">
      <header className="mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Cobel Control Center</h1>
          <p className="text-gray-500">Center-wide Adaptive Learning Analytics</p>
        </div>
        <button 
          onClick={downloadReport}
          className="bg-black text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-800 transition-all flex items-center gap-2"
        >
          <span>Download PDF Report</span>
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-xs font-bold text-blue-600 uppercase">Efficiency Gain</p>
          <p className="text-3xl font-mono font-bold">{stats.avgDensity}x</p>
        </div>
        <div className="bg-blue-600 p-6 rounded-xl shadow-lg text-white">
          <p className="text-xs font-bold uppercase opacity-80">Total Time Reclaimed</p>
          <p className="text-3xl font-mono font-bold">{stats.totalHoursSaved}h</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-xs font-bold text-gray-400 uppercase">Active Cohort</p>
          <p className="text-3xl font-mono font-bold">{stats.totalStudents}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <p className="text-xs font-bold text-green-600 uppercase">System Status</p>
          <p className="text-xl font-bold">ALGORITHM ACTIVE</p>
        </div>
      </div>
    </div>
  );
}
