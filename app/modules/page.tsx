import { createClient } from '@/lib/supabase-server';
import Link from 'next/link';

export default async function ModulesPage() {
  const supabase = createClient();
  const { data: modules } = await supabase.from('modules').select('*');

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-slate-900">Vocational Training Modules</h1>
        <p className="text-slate-600 mb-8">Select a module to begin Bilingual Technical Analysis.</p>
        
        <div className="grid gap-4">
          {modules?.map((m: any) => (
            <div key={m.id} className="p-6 border rounded-xl shadow-sm bg-white flex justify-between items-center border-slate-200 hover:border-blue-300 transition-colors">
              <div>
                <h3 className="text-xl font-semibold text-blue-700">{m.titre_anglais}</h3>
                <p className="text-slate-500 italic">{m.titre_francais}</p>
                <div className="flex gap-2 mt-3">
                  <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded font-mono uppercase">{m.code_module}</span>
                  <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded font-medium">{m.duree_heures} Hours</span>
                </div>
              </div>
              <Link href={`/modules/${m.code_module}`}>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium shadow-sm">
                  Open Analyser
                </button>
              </Link>
            </div>
          ))}
          {(!modules || modules.length === 0) && (
             <div className="p-12 text-center border-2 border-dashed rounded-xl border-slate-200">
               <p className="text-slate-500">No modules found in the database.</p>
             </div>
          )}
        </div>
      </div>
    </div>
  );
}
