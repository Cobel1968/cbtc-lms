"use client";

import React, { useState, useRef } from 'react';
import { Mic, Square, Play, RefreshCw, Volume2 } from 'lucide-react';

export default function AudioAssessment() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    setAudioUrl(null);
    audioChunksRef.current = [];
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      console.error("Mic access denied:", err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      // Stop all tracks to release the microphone
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
    }
  };

  const playAudio = () => {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play();
    }
  };

  return (
    <div className="p-6 bg-slate-50 border-2 border-dashed border-slate-300 rounded-3xl text-center shadow-inner">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Volume2 size={16} className="text-amber-500" />
        <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
          Technical Fluency Capture
        </h3>
      </div>
      
      {!audioUrl ? (
        <div className="flex flex-col items-center gap-4">
          <button 
            onClick={isRecording ? stopRecording : startRecording}
            className={`p-8 rounded-full transition-all transform active:scale-90 ${isRecording ? 'bg-red-500 animate-pulse shadow-lg shadow-red-200' : 'bg-slate-900 hover:bg-amber-500 text-white shadow-xl'}`}
          >
            {isRecording ? <Square size={28} fill="currentColor" /> : <Mic size={28} />}
          </button>
          <p className="text-xs font-black uppercase text-slate-400 tracking-widest">
            {isRecording ? "Recording Terminology..." : "Start Oral Assessment"}
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 animate-in zoom-in-95 duration-300">
          <div className="flex gap-3">
            <button 
              onClick={playAudio}
              className="flex items-center gap-3 px-8 py-3 bg-amber-500 text-slate-950 rounded-2xl font-black text-xs uppercase hover:bg-amber-400 transition-colors shadow-lg shadow-amber-100"
            >
              <Play size={16} fill="currentColor" /> Listen to Mapping
            </button>
            <button 
              onClick={() => setAudioUrl(null)}
              className="p-3 bg-slate-200 text-slate-600 rounded-2xl hover:bg-slate-300 transition-all"
              title="Reset"
            >
              <RefreshCw size={18} />
            </button>
          </div>
          <div className="px-4 py-1 bg-green-100 rounded-full">
            <p className="text-[9px] font-bold text-green-700 uppercase tracking-tighter">
              Bilingual Audio Logic Ready
            </p>
          </div>
        </div>
      )}
    </div>
  );
}