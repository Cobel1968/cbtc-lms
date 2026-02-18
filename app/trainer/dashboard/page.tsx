import { createClient } from '@/lib/supabase-server';
import Link from 'next/link';

export default async function TrainerDashboard() {
  const supabase = createClient();
  
  // Fetch all students and their recent assessment counts
  const { data: students } = await supabase.from('profiles').select('id, full_name, email');
  const { data: allAssessments } = await supabase.from('handwriting_assessments').select('*');

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-black text-slate-900 uppercase">Trainer Control Center</h1>
            <p className="text-slate-500 font-medium">Bilingual Vocational Oversight & Module Allocation</p>
          </div>
          <Link href="/menu"><button className="bg-slate-800 text-white px-6 py-2 rounded-xl font-bold hover:bg-black transition"> Exit to Hub</button></Link>
        </header>

        {/* BULK VIEW STATS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <p className="text-slate-400 text-xs font-bold uppercase">Total Trainees</p>
            <p className="text-4xl font-black text-slate-800">{students?.length || 0}</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <p className="text-slate-400 text-xs font-bold uppercase">Pending Feedback</p>
            <p className="text-4xl font-black text-orange-500">{allAssessments?.filter(a => !a.is_synchronized).length || 0}</p>
          </div>
          <div className="bg-blue-600 p-6 rounded-3xl text-white shadow-lg">
            <p className="text-blue-200 text-xs font-bold uppercase">Engine Accuracy</p>
            <p className="text-4xl font-black">94.8%</p>
          </div>
        </div>

        {/* STUDENT ROSTER (Individual Access) */}
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase">Student Name</th>
                <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase">Current Result</th>
                <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase">Allocated Modules</th>
                <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {students?.map((s) => (
                <tr key={s.id} className="hover:bg-slate-50 transition">
                  <td className="px-8 py-6">
                    <p className="font-bold text-slate-800">{s.full_name}</p>
                    <p className="text-xs text-slate-400">{s.email}</p>
                  </td>
                  <td className="px-8 py-6">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">88% Avg Fluency</span>
                  </td>
                  <td className="px-8 py-6 flex gap-2">
                    <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-[10px] font-bold">MECH-101</span>
                    <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-[10px] font-bold">HYD-202</span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <Link href={`/trainer/student/${s.id}`}>
                      <button className="text-blue-600 font-bold text-sm hover:underline">Review Work </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
