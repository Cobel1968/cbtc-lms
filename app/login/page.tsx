import dynamic from 'next/dynamic';

const LoginUI = dynamic(() => import('@/components/LoginUI'), { 
  ssr: false,
  loading: () => <div className="min-h-screen bg-[#00629B] flex items-center justify-center text-white font-bold">LOADING COBEL ENGINE...</div>
});

export default function LoginPage() {
  return <LoginUI />;
}