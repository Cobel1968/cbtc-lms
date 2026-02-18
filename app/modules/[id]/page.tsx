'use client';
import { useState, useRef } from 'react';
import { useParams } from 'next/navigation';

export default function AnalyserPage() {
  const { id } = useParams();
  const [isAnalysing, setIsAnalysing] = useState(false);
  const [result, setResult] = useState<any>(null);
  
  // States for Previews
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  //  SCAN & PREVIEW LOGIC
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Create local preview
    setImagePreview(URL.createObjectURL(file));
    
    setIsAnalysing(true);
    // Simulate OCR delay
    setTimeout(async () => {
      const response = await fetch('/api/analyze-handwriting', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ moduleId: id, rawText: "OCR Results for " + file.name })
      });
      const data = await response.json();
      setResult(data);
      setIsAnalysing(false);
    }, 1500);
  };

  //  RECORD & PLAYBACK LOGIC
  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    mediaRecorderRef.current = recorder;
    const chunks: Blob[] = [];

    recorder.ondataavailable = (e) => chunks.push(e.data);
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' });
      setAudioUrl(URL.createObjectURL(blob));
    };

    recorder.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        
        {/* LEFT: INPUTS */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2"> Technical Scan</h2>
            <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
            
            {imagePreview ? (
              <div className="relative aspect-video rounded-lg overflow-hidden border">
                <img src={imagePreview} className="object-cover w-full h-full" alt="Scan Preview" />
                <button onClick={() => setImagePreview(null)} className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full text-xs">Change</button>
              </div>
            ) : (
              <div onClick={() => fileInputRef.current?.click()} className="aspect-video bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50 transition">
                <p className="text-slate-500 text-sm">Click to Scan Assessment</p>
              </div>
            )}
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2"> Voice Verification</h2>
            <div className="flex gap-4 items-center">
              {!isRecording ? (
                <button onClick={startRecording} className="bg-red-500 text-white px-6 py-2 rounded-full font-bold">Start Recording</button>
              ) : (
                <button onClick={stopRecording} className="bg-slate-900 text-white px-6 py-2 rounded-full font-bold animate-pulse">Stop Recording</button>
              )}
              {audioUrl && <audio src={audioUrl} controls className="flex-1" />}
            </div>
          </div>
        </div>

        {/* RIGHT: AI ANALYSIS PANEL */}
        <div className="space-y-6">
          <div className="bg-blue-600 p-6 rounded-2xl text-white shadow-lg">
            <h3 className="font-bold text-lg uppercase tracking-wider">AI Engine Status</h3>
            <div className="mt-4">
              <p className="text-sm opacity-80">Module Code</p>
              <p className="text-xl font-mono">{id}</p>
            </div>
            {result && (
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-sm opacity-80">Bilingual Technical Fluency</p>
                <p className="text-5xl font-black">{result.score}%</p>
                <div className="mt-4 bg-white/20 p-3 rounded-lg text-sm">
                   Optimization: Graduation date moved up by 2 days.
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
