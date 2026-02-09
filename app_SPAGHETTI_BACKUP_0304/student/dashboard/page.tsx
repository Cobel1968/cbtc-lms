import BrandedTranscript from '@/components/BrandedTranscript';
import { AdaptiveInjection } from '@/components/adaptive/FragmentRegistry';
import CobelIngestionEngine from '@/components/CobelIngestionEngine';
import OptimizationTracker from '@/components/OptimizationTracker';

export default function StudentDashboard() {
  // FIXED: Using the UUID format to prevent PostgreSQL 500 errors
  const jeanMarcId = "00000000-0000-0000-0000-000000000000";

  return (
    <div className="max-w-4xl mx-auto p-8 font-sans bg-white min-h-screen">
      <header className="mb-8 border-b-2 border-blue-600 pb-4 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Jean Marc           <div className="mt-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
            <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest">Milestone Verified by Trainer</span>
          </div>'s Workspace</h1>
          <p className="text-blue-600 font-medium text-sm">Cobel AI Engine: Active Optimization</p>
        </div>
        <div className="bg-blue-50 p-2 rounded border border-blue-200 text-right">
          <p className="text-[10px] uppercase font-bold text-blue-800 tracking-widest">Velocity</p>
          <p className="text-xl font-mono leading-none">1.25x</p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <AdaptiveInjection fluency={92}>
            <div className="p-6 bg-slate-50 border-l-4 border-blue-600 rounded shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-blue-900">Advanced Solar Simulation</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Your technical fluency has unlocked the **Complex Inverter Phase** module. 
              </p>
            </div>
          </AdaptiveInjection>
        </div>

        <div className="md:col-span-1 space-y-6">
          {/* This component points to /api/assessments/submit and uses the UUID */}
          <CobelIngestionEngine studentId={jeanMarcId} />
          
          <OptimizationTracker density={1.25} />
        </div>
      </div>
    </div>
  );
}




