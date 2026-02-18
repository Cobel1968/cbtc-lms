import { createClient } from '@/lib/supabase-server';
import Link from 'next/link';

export default async function AdminDashboard() {
  const supabase = createClient();
  
  // Fetch students with their current profile status
  const { data: students } = await supabase
    .from('profiles')
    .select('id, first_name, last_name, email, diagnostic_status, time_saved')
    .eq('role', 'student');

  return (
    <div className="min-h-screen bg-slate-100 p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-10 bg-white p-6 rounded-3xl shadow-sm">
          <div>
            <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Admin Authority</h1>
            <p className="text-slate-500 font-medium">Profile Management & Institutional Oversight</p>
          </div>
          <Link href="/menu">
            <button className="bg-red-600 text-white px-8 py-3 rounded-2xl font-black hover:bg-red-700 transition shadow-lg">EXIT TO HUB</button>
          </Link>
        </header>

        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xl">
          <table className="w-full text-left">
            <thead className="bg-slate-900 text-white">
              <tr>
                <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest">Trainee</th>
                <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest">Current Status</th>
                <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest">Time Saved</th>
                <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-right">Administrative Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {students?.map((s) => (
                <tr key={s.id} className="hover:bg-slate-50 transition">
                  <td className="px-8 py-6">
                    <p className="font-bold text-slate-800">{s.first_name} {s.last_name}</p>
                    <p className="text-xs text-slate-400 font-mono">{s.email}</p>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                      s.diagnostic_status === 'Advanced' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {s.diagnostic_status || 'Unassigned'}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-sm font-bold text-slate-600">{s.time_saved || 0} Minutes</p>
                  </td>
                  <td className="px-8 py-6 text-right space-x-2">
                    <button className="bg-slate-100 text-slate-600 px-4 py-2 rounded-xl text-xs font-bold hover:bg-slate-200 transition">View History</button>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-blue-700 transition shadow-md">Change Level</button>
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
