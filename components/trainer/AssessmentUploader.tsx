'use client';
import { useState } from 'react';
import { Upload, FileSearch, CheckCircle, AlertTriangle, RefreshCcw } from 'lucide-react';
import { supabase } from '@/lib/supabaseDB'; 

interface AssessmentUploaderProps {
  studentId: string;
  courseId: string; // Linked to Feature 2: Dynamic Path Mapping
  currentModule: number;
}

export default function AssessmentUploader({ studentId, courseId, currentModule }: AssessmentUploaderProps) {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'uploading' | 'analyzing' | 'success' | 'error'>('idle');
  const [result, setResult] = useState<any>(null);

  const handleUpload = async () => {
    if (!file) return;
    setStatus('uploading');

    try {
      // 1. REAL UPLOAD: Ingest into Supabase Storage
      const fileExt = file.name.split('.').pop();
      const fileName = `${studentId}/${Date.now()}.${fileExt}`;
      const filePath = `assessments/${fileName}`;

      const { error: uploadError, data: uploadData } = await supabase.storage
        .from('pedagogical_assets')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // 2. GET PUBLIC URL for the Handwriting Analysis Module
      const { data: { publicUrl } } = supabase.storage
        .from('pedagogical_assets')
        .getPublicUrl(filePath);

      setStatus('analyzing');

      // 3. ANALOG-TO-DIGITAL BRIDGE: Trigger Ingestion API
      const response = await fetch('/api/analyze-handwriting', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          imageUrl: publicUrl,
          userId: studentId,
          courseId: courseId,
          moduleIndex: currentModule
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Ingestion failed');

      setResult(data.data);
      setStatus('success');
    } catch (err: any) {
      console.error('Bridge Error:', err);
      setStatus('error');
    }
  };

  return (
    <div className="bg-white border-2 border-dashed border-slate-200 rounded-[32px] p-8 transition-all hover:border-indigo-300">
      {status === 'idle' && (
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600">
            <Upload size={32} />
          </div>
          <div className="text-center">
            <h3 className="font-bold text-slate-900">Upload Assessment</h3>
            <p className="text-sm text-slate-500">Module {currentModule} Evaluation</p>
          </div>
          <input 
            type="file" 
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-700"
          />
          {file && (
            <button onClick={handleUpload} className="mt-2 px-8 py-3 bg-slate-900 text-white rounded-2xl font-bold hover:bg-indigo-600 transition-all shadow-lg">
              Start Bilingual Analysis
            </button>
          )}
        </div>
      )}

      {(status === 'uploading' || status === 'analyzing') && (
        <div className="flex flex-col items-center gap-4 py-8 text-center">
          <RefreshCcw className="animate-spin text-indigo-600" size={40} />
          <div>
            <p className="font-bold text-slate-900 uppercase tracking-widest text-xs">
              {status === 'uploading' ? 'Storage Ingestion...' : 'Bilingual Term Mapping...'}
            </p>
            <p className="text-[10px] text-slate-400 mt-1">Updating Temporal Optimization Path</p>
          </div>
        </div>
      )}

      {status === 'success' && result && (
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-emerald-600 bg-emerald-50 p-4 rounded-2xl">
            <CheckCircle size={24} />
            <div>
              <p className="font-bold text-sm">Mapping Complete</p>
              <p className="text-xs opacity-80">Time Saved: {result.minutes_saved || 0} mins</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-[10px] font-black uppercase text-slate-400 mb-2">Technical (EN)</p>
              <ul className="text-xs font-bold text-slate-700">
                {result.extracted_terms_en?.map((term: string) => <li key={term}>• {term}</li>) || <li>None found</li>}
              </ul>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-[10px] font-black uppercase text-slate-400 mb-2">Technique (FR)</p>
              <ul className="text-xs font-bold text-slate-700">
                {result.extracted_terms_fr?.map((term: string) => <li key={term}>• {term}</li>) || <li>Aucun terme</li>}
              </ul>
            </div>
          </div>

          <button onClick={() => setStatus('idle')} className="w-full py-3 text-slate-400 font-bold text-[10px] uppercase tracking-widest hover:text-indigo-600 transition-colors">
            Upload Next Assessment
          </button>
        </div>
      )}

      {status === 'error' && (
        <div className="flex flex-col items-center gap-4 py-8">
          <AlertTriangle className="text-rose-500" size={40} />
          <p className="text-sm font-bold text-slate-900">Analysis Failed</p>
          <button onClick={() => setStatus('idle')} className="text-xs text-indigo-600 underline font-bold">Try Again</button>
        </div>
      )}
    </div>
  );
}