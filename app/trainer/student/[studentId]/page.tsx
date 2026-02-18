'use client';
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';

const VOCAB_MAP: Record<string, string[]> = {
  'MECH-101': ['piston', 'engine', 'moteur', 'soupape', 'valve', 'cylindre'],
  'HYD-202': ['pressure', 'pression', 'pump', 'pompe', 'fluid', 'fluide', 'hose'],
  'ELC-101': ['circuit', 'voltage', 'tension', 'ampere', 'wire', 'fil']
};

export default function StudentReview() {
  const { studentId } = useParams();
  const router = useRouter();
  const [assessment, setAssessment] = useState<any>(null);
  const [foundTerms, setFoundTerms] = useState<{module: string, term: string}[]>([]);
  const [feedback, setFeedback] = useState('');
  const [allocation, setAllocation] = useState('');

  useEffect(() => {
    async function loadWork() {
      const res = await fetch(`/api/trainer/get-student-work?id=${studentId}`);
      const data = await res.json();
      const work = data[0];
      setAssessment(work);

      // AUTOMATED MAPPING LOGIC
      if (work?.raw_ocr_text) {
        const text = work.raw_ocr_text.toLowerCase();
        const matches: any[] = [];
        Object.entries(VOCAB_MAP).forEach(([module, terms]) => {
          terms.forEach(term => {
            if (text.includes(term)) matches.push({ module, term });
          });
        });
        setFoundTerms(matches);
      }
    }
    loadWork();
  }, [studentId]);

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <header className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-black">Bilingual Technical Mapping</h2>
          <button onClick={() => router.back()} className="font-bold text-slate-400 hover:text-red-500">Exit Review</button>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {/* COLUMN 1: STUDENT SUBMISSIONS */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Ingested Content</h3>
              <div className="p-4 bg-slate-50 rounded-xl font-mono text-sm text-slate-700 border border-slate-100 leading-relaxed">
                {assessment?.raw_ocr_text || "Processing text..."}
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                <p className="text-[10px] font-bold text-blue-400 mb-2 uppercase">Audio Evidence</p>
                <audio src={assessment?.student_audio_url} controls className="w-full h-8" />
              </div>
            </div>

            {/* AI TERM HIGHLIGHTING */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Cobel AI: Identified Competencies</h3>
              <div className="flex flex-wrap gap-2">
                {foundTerms.length > 0 ? foundTerms.map((match, i) => (
                  <span key={i} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold border border-green-200">
                    {match.module}: {match.term}
                  </span>
                )) : <p className="text-slate-400 italic text-sm">No bilingual terms identified yet.</p>}
              </div>
            </div>
          </div>

          {/* COLUMN 2: TRAINER ACTIONS */}
          <div className="space-y-6">
            <div className="bg-slate-900 p-6 rounded-3xl text-white shadow-xl">
              <h3 className="text-xs font-bold text-blue-400 uppercase mb-4">Final Feedback</h3>
              <textarea 
                className="w-full bg-slate-800 border-none rounded-xl p-4 text-sm mb-4 focus:ring-2 focus:ring-blue-500"
                placeholder="Correct pronunciation or technical drawings..."
                rows={4}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
              <button className="w-full py-3 bg-blue-600 rounded-xl font-bold hover:bg-blue-500 transition shadow-lg">
                Sync & Allocate Module
              </button>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200">
              <h3 className="text-xs font-bold text-slate-400 uppercase mb-4">Strategic Allocation</h3>
              <select className="w-full p-3 bg-slate-100 rounded-xl font-bold text-slate-700" onChange={(e)=>setAllocation(e.target.value)}>
                <option value="">Select Path...</option>
                <option value="MECH-101">Confirm MECH-101 Completion</option>
                <option value="HYD-202">Advance to HYD-202</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
