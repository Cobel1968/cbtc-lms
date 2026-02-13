'use client';
import { useState, useEffect } from 'react';

export default function StudentRegister() {
  const [mounted, setMounted] = useState(false);

  // This ensures the component only renders once the client is ready
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div style={{ backgroundColor: '#0f172a', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
      <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '8px', color: 'black', textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '2rem', fontWeight: '900' }}>COBEL AI</h1>
        <p style={{ color: '#2563eb', fontWeight: 'bold' }}>VOCATIONAL ENGINE ONLINE</p>
        <div style={{ marginTop: '20px' }}>
           <input type="text" placeholder="Trainee Name" style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc' }} />
           <button style={{ backgroundColor: '#2563eb', color: 'white', border: 'none', padding: '15px 30px', fontWeight: 'bold', width: '100%', cursor: 'pointer' }}>
             INITIALIZE DIAGNOSTIC
           </button>
        </div>
      </div>
    </div>
  );
}
