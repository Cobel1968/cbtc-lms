"use client";

import React from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface TranscriptProps {
  studentName: string;
  density: number;
  hoursSaved: number;
  qrCodeData?: string; // The base64 image string from your QR component
}

export default function BrandedTranscript({ studentName, density, hoursSaved, qrCodeData }: TranscriptProps) {
  
  const downloadTranscript = () => {
    const doc = new jsPDF('p', 'mm', 'a4');
    
    // 1. BRANDING: Navy Header
    doc.setFillColor(0, 51, 102); 
    doc.rect(0, 0, 210, 45, 'F');
    
    // 2. LOGO: From /public/logo.png
    try {
      doc.addImage('/logo.png', 'PNG', 15, 10, 25, 25);
    } catch (e) {
      console.warn("Logo not found");
    }
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(18);
    doc.text("COBEL BUSINESS TRAINING CENTER", 45, 22);
    
    // 3. TITLE & STUDENT INFO
    doc.setTextColor(0, 51, 102);
    doc.setFontSize(24);
    doc.text("OFFICIAL TRANSCRIPT", 105, 65, { align: "center" });
    doc.setFontSize(11);
    doc.setTextColor(80);
    doc.text("STUDENT: " + studentName.toUpperCase(), 20, 85);

    // 4. BILINGUAL COMPETENCY TABLE
    autoTable(doc, {
      startY: 100,
      head: [['Module', 'Focus', 'Fluency', 'Status']],
      body: [
        ['Inverter Systems', 'Power Electronics', 'Bilingual', 'VALIDATED'],
        ['Solar Array Logic', 'PV Generation', 'English', 'VALIDATED'],
        ['Circuit Protection', 'Safety Standards', 'French', 'VALIDATED'],
      ],
      headStyles: { fillColor: [0, 51, 102] },
    });

    // 5. INNOVATION STATS (Temporal Optimization)
    const finalY = (doc as any).lastAutoTable.finalY + 15;
    doc.setDrawColor(212, 175, 55); 
    doc.line(20, finalY, 190, finalY);
    doc.setTextColor(0);
    doc.text("ADAPTIVE LEARNING ANALYTICS", 20, finalY + 10);
    doc.setFontSize(9);
    doc.text(" Curriculum Density: " + density + "x", 20, finalY + 18);
    doc.text(" Hours Reclaimed: " + hoursSaved, 20, finalY + 24);

    // 6. QR CODE: Injecting the dynamic component data
    if (qrCodeData) {
      doc.addImage(qrCodeData, 'PNG', 160, finalY + 5, 30, 30);
      doc.setFontSize(7);
      doc.text("SCAN TO VERIFY DIGITAL TWIN", 175, finalY + 38, { align: "center" });
    }

    doc.save("Cobel_Transcript_" + studentName + ".pdf");
  };

  return (
    <button 
      onClick={downloadTranscript}
      className="bg-[#003366] text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg mt-4"
    >
      Download Branded Transcript
    </button>
  );
}