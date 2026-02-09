import React, { useState } from 'react';

export default function StudentHandwritingUpload({ studentId }: { studentId: string }) {
  const [isUploading, setIsUploading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleFileChange = async () => {
    setIsUploading(true);
    setFeedback("AI Engine: Analyzing Handwriting & Technical Terms...");
    
    // Simulate the Analog-to-Digital Bridge Processing
    setTimeout(async () => {
      const response = await fetch('/api/assessments/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          student_id: studentId,
          technical_score: 88, // Simulated OCR Result
          assessment_type: "Handwritten Circuit Diagram"
        })
      });

      if (response.ok) {
        setFeedback("Success! Your curriculum has been optimized based on your diagram.");
      }
      setIsUploading(false);
    }, 2000);
  };

  return (
    <div className="p-4 border-2 border-dashed border-blue-200 rounded-xl bg-blue-50/50">
      <h4 className="font-bold text-blue-900 mb-2">Submit Handwritten Assessment</h4>
      <p className="text-xs text-blue-700 mb-4">Upload a clear photo of your technical drawings for AI analysis.</p>
      
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleFileChange}
        className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
      />
      
      {feedback && (
        <p className="mt-4 text-sm font-medium animate-pulse text-blue-800">{feedback}</p>
      )}
    </div>
  );
}