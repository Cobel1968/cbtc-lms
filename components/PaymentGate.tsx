"use client";
import { useState } from 'react';
import { CreditCard, Smartphone, CheckCircle } from 'lucide-react';

export default function PaymentGate({ amount }: { amount: string }) {
  const [method, setMethod] = useState<'card' | 'mobile' | null>(null);

  return (
    <div className="bg-gradient-to-br from-[#00629B] to-[#002845] p-10 rounded-[3rem] text-white shadow-2xl max-w-2xl mx-auto">
      <h2 className="text-3xl font-black mb-2 italic">COMPLETE ENROLLMENT</h2>
      <p className="text-blue-200 mb-8 font-medium">Unlock your Bilingual Vocational Path for {amount}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <button 
          onClick={() => setMethod('card')}
          className={p-6 rounded-3xl border-2 transition-all flex flex-col items-center }
        >
          <CreditCard className="mb-2" size={32} />
          <span className="font-bold">Card / PayPal</span>
        </button>

        <button 
          onClick={() => setMethod('mobile')}
          className={p-6 rounded-3xl border-2 transition-all flex flex-col items-center }
        >
          <Smartphone className="mb-2" size={32} />
          <span className="font-bold">Mobile Money</span>
        </button>
      </div>

      {method === 'mobile' && (
        <div className="bg-white/5 p-6 rounded-2xl mb-6 animate-in fade-in duration-500">
          <label className="block text-xs font-bold uppercase mb-2 text-blue-300">Enter Mobile Number</label>
          <input 
            type="tel" 
            placeholder="+225 00 00 00 00" 
            className="w-full bg-white/10 border border-white/20 p-4 rounded-xl text-white placeholder:text-white/30 outline-none focus:border-[#10B981]"
          />
          <p className="text-[10px] mt-2 opacity-60 italic">A push notification will be sent to your phone to confirm the transaction.</p>
        </div>
      )}

      <button 
        disabled={!method}
        className="w-full bg-[#10B981] disabled:bg-slate-500 text-white py-6 rounded-2xl font-black text-lg tracking-widest hover:scale-105 transition-all shadow-lg"
        onClick={() => alert(Initiating  payment...)}
      >
        PROCEED TO PAY {amount}
      </button>
    </div>
  );
}