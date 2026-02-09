"use client";
import React from 'react';
import { BookOpen, Camera, Zap } from 'lucide-react';

export default function OnboardingGuide() {
  const steps = [
    { 
      title: "Interactive Study", 
      desc: "Read your vocational modules in the Dynamic Viewer.", 
      icon: <BookOpen className="text-blue-500" /> 
    },
    { 
      title: "Physical Task", 
      desc: "Complete your assessment on paper to build muscle memory.", 
      icon: <Zap className="text-amber-500" /> 
    },
    { 
      title: "AI Analysis", 
      desc: "Scan your work. Our engine updates your graduation timeline.", 
      icon: <Camera className="text-green-500" /> 
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-slate-900/50 rounded-3xl border border-slate-800">
      {steps.map((step, i) => (
        <div key={i} className="flex flex-col items-center text-center">
          <div className="mb-4 p-4 bg-slate-800 rounded-full">{step.icon}</div>
          <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-widest">{step.title}</h4>
          <p className="text-slate-400 text-sm">{step.desc}</p>
        </div>
      ))}
    </div>
  );
}