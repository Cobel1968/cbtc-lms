'use client';
import { useState } from 'react';
import { Smartphone, CheckCircle, Upload, ArrowLeft, Loader2 } from 'lucide-react';
import { createClient } from '@/utils/supabase/client'; // Fixed: Using your local modern client
import Link from 'next/link';

export default function CheckoutPage() {
  const [isUploaded, setIsUploaded] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // Initialize the modern Supabase client
  

  const handleVerifyEnrollment = async () => {
    setLoading(true);
    try {
      // Modern user retrieval for Next.js App Router
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      
      if (userError || !user) {
        throw new Error("User session not found. Please log in again.");
      }

      // Registers the intent for Abel C. to validate
      // This satisfies the Foreign Key constraint on the student_id
      const { error: insertError } = await supabase
        .from('payment_verifications')
        .insert({
          student_id: user.id,
          provider: 'wave',
          status: 'pending'
        });

      if (insertError) throw insertError;

      alert("Verification request sent! Abel C. will validate your access shortly.");
      
      // Redirect to dashboard
      window.location.href = '/admin-dashboard';
    } catch (err: any) {
      console.error("Payment sync failed:", err);
      alert(err.message || "Error syncing with the database.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-6 font-bold transition-colors">
          <ArrowLeft size={20} /> Back to Home
        </Link>
        
        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden">
          <div className="bg-[#1cb4ff] p-8 text-white">
            <h1 className="text-3xl font-black uppercase italic tracking-tighter">Wave Payment</h1>
            <p className="opacity-90 font-bold uppercase text-[10px] tracking-[0.3em]">
              Cobel AI Training Center (LMS)
            </p>
          </div>

          <div className="p-8 space-y-8">
            {/* WAVE INSTRUCTIONS */}
            <div className="p-6 border-2 border-[#1cb4ff] rounded-2xl bg-blue-50/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#1cb4ff] p-2 rounded-lg text-white">
                  <Smartphone size={24} />
                </div>
                <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight">Instructions</h2>
              </div>
              <div className="space-y-4">
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  Envoyez le montant total via l'application <strong>WAVE</strong> au :
                </p>
                <div className="bg-white p-4 rounded-xl border border-blue-200 text-center shadow-sm">
                  <span className="text-2xl font-black text-slate-900 tracking-wider">+225 05 55 00 78 84</span>
                  <p className="text-[10px] text-blue-500 font-bold uppercase mt-1 tracking-widest">Titulaire: ABEL C.</p>
                </div>
              </div>
            </div>

            {/* RECEIPT UPLOAD SIMULATION */}
            <div className="space-y-4">
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                Upload Transaction Screenshot / Capture d'Ã©cran
              </label>
              <div
                onClick={() => setIsUploaded(true)}
                className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all cursor-pointer group ${
                  isUploaded 
                  ? 'border-green-500 bg-green-50' 
                  : 'border-slate-200 bg-slate-50 hover:border-blue-400 hover:bg-white'
                }`}
              >
                {isUploaded ? (
                  <div className="flex flex-col items-center text-green-600 animate-in fade-in zoom-in duration-300">
                    <CheckCircle size={40} className="mb-2" />
                    <p className="font-bold uppercase text-xs tracking-tighter">Receipt Uploaded Successfully!</p>
                  </div>
                ) : (
                  <>
                    <Upload className="mx-auto text-slate-300 mb-2 group-hover:text-blue-400 transition-colors" size={32} />
                    <p className="text-xs text-slate-500 font-bold italic">Cliquez pour joindre le reÃ§u de paiement</p>
                  </>
                )}
              </div>
            </div>

            <button
              onClick={handleVerifyEnrollment}
              disabled={!isUploaded || loading}
              className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm transition-all shadow-xl active:scale-[0.98] ${
                isUploaded 
                ? 'bg-slate-900 text-white hover:bg-[#1cb4ff]' 
                : 'bg-slate-100 text-slate-300 cursor-not-allowed border border-slate-200'
              }`}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <Loader2 className="animate-spin" size={20} />
                  <span>Syncing Engine...</span>
                </div>
              ) : (
                'Verify Enrollment'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
