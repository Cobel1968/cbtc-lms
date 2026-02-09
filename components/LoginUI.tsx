"use client";
import Logo from '@/components/logo';
import { createClientComponentClient } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginUI() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      alert(error.message);
      setLoading(false);
    } else {
      router.push('/admin'); // Unified Actor routing
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen bg-[#00629B] flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-[3rem] p-12 shadow-2xl">
        <Logo className="h-12 mx-auto mb-8" />
        <h2 className="text-2xl font-black text-center text-[#00629B] mb-8 uppercase">Initialize Engine</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input type="email" placeholder="ACCESS EMAIL" className="w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-2xl" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="SECURITY KEY" className="w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-2xl" onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" disabled={loading} className="w-full py-6 bg-[#10B981] text-white rounded-2xl font-black tracking-widest hover:bg-[#E91E63] transition-all">
            {loading ? 'AUTHENTICATING...' : 'LOGIN'}
          </button>
        </form>
      </div>
    </div>
  );
}