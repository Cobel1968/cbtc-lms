import { supabase } from '@/lib/supabase'
import { ShieldCheck, Award, CheckCircle2, Globe } from 'lucide-react'

export default async function PublicVerification({ params }: { params: { id: string } }) {
  const { data: student } = await supabase
    .from('profiles')
    .select('full_name, time_saved, curriculum_density, language_preference')
    .eq('id', params.id)
    .single()

  if (!student) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center p-8 bg-white rounded-2xl shadow-xl border border-red-100">
          <p className="text-red-500 font-bold">Invalid Certificate ID</p>
          <p className="text-slate-500 text-sm">This credential could not be verified by Cobel Systems.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
        <div className="bg-blue-600 p-8 text-center text-white">
          <div className="inline-flex p-3 bg-white/20 rounded-full mb-4">
            <ShieldCheck size={48} />
          </div>
          <h1 className="text-2xl font-bold">Credential Verified</h1>
          <p className="text-blue-100 text-sm opacity-80">Official Cobel AI Engine Record</p>
        </div>

        <div className="p-8 space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-black text-slate-800">{student.full_name}</h2>
            <p className="text-sm text-blue-600 font-bold uppercase tracking-widest mt-1">
              {student.language_preference === 'fr' ? 'Bilingual Technical Specialist' : 'Technical Specialist'}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-[10px] text-slate-400 font-bold uppercase">AI Validation</p>
              <p className="text-xl font-bold text-slate-700">-{student.time_saved}h</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-[10px] text-slate-400 font-bold uppercase">Integrity Status</p>
              <p className="text-xl font-bold text-green-600 uppercase">Verified</p>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 text-center">
             <p className="text-[10px] text-slate-400 font-mono">Certificate ID: {params.id}</p>
          </div>
        </div>
      </div>
    </div>
  )
}