'use client';
import React from 'react';
import CobelIngestionEngine from '@/components/CobelIngestionEngine';
import OptimizationTracker from '@/components/OptimizationTracker';

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <header className="border-b border-gray-800 pb-6">
          <h1 className="text-3xl font-black text-blue-500">COBEL STUDENT PORTAL</h1>
          <p className="text-gray-400">Adaptive Learning Engine | Phase: Multi-Dimensional Diagnostic</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
             {/* Feature 4: The Analog-to-Digital Bridge */}
             <section className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
                <h2 className="text-xl font-bold mb-4">Vocational Assessment Upload</h2>
                <CobelIngestionEngine />
             </section>
          </div>

          <div className="space-y-8">
             {/* Temporal Optimization Tracker */}
             <section className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
                <h2 className="text-xl font-bold mb-4">Your Progress Density</h2>
                <OptimizationTracker density={0.85} />
             </section>
          </div>
        </div>
      </div>
    </div>
  );
}
