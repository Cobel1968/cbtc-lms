'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CurriculumEditor() {
  const [data, setData] = useState(null);
  const [newModule, setNewModule] = useState({ courseId: '', name: '', keywords: '' });

  useEffect(() => {
    import('../../../data/curriculum.json').then(m => setData(m.default));
  }, []);

  const addModule = () => {
    if (!data) return;
    const updatedData = { ...data };
    const course = updatedData.programs.find(p => p.id === newModule.courseId);
    if (course) {
      course.modules.push({
        id: `MOD-${Date.now()}`,
        name: newModule.name,
        keywords: newModule.keywords.split(',').map(k => k.trim())
      });
      setData(updatedData);
      alert("Module Staged in Engine!");
    }
  };

  if (!data) return <div className="p-20 text-white font-mono">INITIALIZING ARCHITECT...</div>;

  return (
    <div className="p-10 bg-[#020617] min-h-screen text-white font-sans">
      {/* FIXED NAVIGATION BREADCRUMB */}
      <nav className="mb-10">
        <Link href="/admin" className="text-[10px] font-black uppercase text-slate-500 hover:text-emerald-500 transition-all flex items-center gap-2">
          ← Back to Command Center
        </Link>
      </nav>

      <h1 className="text-4xl font-black italic mb-10 text-emerald-500 uppercase tracking-tighter">Curriculum Architect</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="bg-slate-900 p-8 rounded-[2.5rem] border border-white/10 shadow-xl">
          <h2 className="text-xl font-bold mb-6 text-white/80 uppercase tracking-tighter">Add New Module</h2>
          <div className="space-y-4">
            <select 
              className="w-full bg-black border border-white/10 p-4 rounded-xl text-white outline-none focus:border-emerald-500"
              onChange={(e) => setNewModule({...newModule, courseId: e.target.value})}
            >
              <option value="">Select Course...</option>
              {data.programs.map(p => <option key={p.id} value={p.id}>{p.title}</option>)}
            </select>
            <input 
              type="text" placeholder="Module Name" 
              className="w-full bg-black border border-white/10 p-4 rounded-xl text-white outline-none focus:border-emerald-500"
              onChange={(e) => setNewModule({...newModule, name: e.target.value})}
            />
            <input 
              type="text" placeholder="Keywords (comma separated)" 
              className="w-full bg-black border border-white/10 p-4 rounded-xl text-white outline-none focus:border-emerald-500"
              onChange={(e) => setNewModule({...newModule, keywords: e.target.value})}
            />
            <button 
              onClick={addModule}
              className="w-full bg-emerald-500 text-black font-black p-4 rounded-xl hover:bg-white transition-all uppercase text-xs"
            >
              Inject Into Engine
            </button>
          </div>
        </div>

        <div className="bg-slate-900/50 p-8 rounded-[2.5rem] border border-dashed border-white/10 overflow-hidden">
          <h2 className="text-xl font-bold mb-6 text-slate-500 uppercase tracking-tighter">Live Path Preview</h2>
          <pre className="text-[10px] font-mono text-emerald-500/80 overflow-auto max-h-[300px]">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
