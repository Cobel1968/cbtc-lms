import { createClient } from '@/lib/supabase-server';
import Link from 'next/link';

export default async function StudentDashboard() {
  const supabase = createClient();
  const { data: assessments } = await supabase
    .from('handwriting_assessments')
    .select('*')
    .order('processed_at', { ascending: false });

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-black text-slate-900">Learning Portal</h1>
          <Link href="/menu"><button className="bg-white border px-4 py-2 rounded-lg font-bold"> Menu</button></Link>
        </header>

        {/* FEEDBACK & ALLOCATION SECTION */}
        <div className="grid gap-6 mb-10">
          {assessments?.filter(a => a.trainer_feedback_text || a.allocated_module_code).map(a => (
            <div key={a.id} className="bg-white border-l-8 border-blue-600 p-6 rounded-2xl shadow-sm animate-in fade-in slide-in-from-left">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-blue-600 text-sm uppercase">Trainer Instruction for {a.module_id}</h3>
                  <p className="text-slate-800 mt-2 italic">"{a.trainer_feedback_text || 'No written feedback yet.'}"</p>
                  {a.allocated_module_code && (
                    <div className="mt-4 flex items-center gap-2">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">New Module Unlocked: {a.allocated_module_code}</span>
                      <Link href={`/modules/${a.allocated_module_code}`} className="text-blue-600 text-xs font-bold underline">Go to Module </Link>
                    </div>
                  )}
                </div>
                {a.trainer_feedback_audio_url && (
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-slate-400 mb-1">AUDIO FEEDBACK</p>
                    <audio src={a.trainer_feedback_audio_url} controls className="h-8 w-40" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold text-slate-800 mb-4">Your Assessment Record</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {assessments?.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-xl border border-slate-200">
              <div className="flex justify-between border-b pb-2 mb-2">
                <span className="font-mono text-xs font-bold text-blue-500">{item.module_id}</span>
                <span className="font-bold text-green-600">{item.bilingual_fluency_score}%</span>
              </div>
              <p className="text-sm text-slate-600 truncate">{item.raw_ocr_text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
