import Link from 'next/link'

export default function LandingPage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      fontFamily: 'sans-serif',
      backgroundColor: '#f8fafc',
      color: '#003366',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '3.5rem', fontWeight: '900', margin: '0', letterSpacing: '-0.05em' }}>COBEL AI ENGINE</h1>
      <p style={{ color: '#3b82f6', fontWeight: 'bold', fontSize: '12px', marginTop: '10px', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
        Vocational Training & Temporal Optimization
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', width: '100%', maxWidth: '900px', marginTop: '60px' }}>
        
        {/* EMPLOYER PATH */}
        <Link href="/employer/dashboard" style={{ textDecoration: 'none' }}>
          <div style={{ padding: '50px 40px', backgroundColor: '#ffffff', borderRadius: '40px', border: '1px solid #e2e8f0', cursor: 'pointer', transition: 'transform 0.2s' }}>
            <h2 style={{ margin: '0', fontSize: '28px', fontWeight: '900' }}>Partner Portal</h2>
            <p style={{ color: '#64748b', fontSize: '15px', marginTop: '10px' }}>B2B Management & Workforce Analytics</p>
          </div>
        </Link>

        {/* STUDENT PATH - FIXED LINK */}
        <Link href="/curriculum" style={{ textDecoration: 'none' }}>
          <div style={{ padding: '50px 40px', backgroundColor: '#003366', borderRadius: '40px', color: '#ffffff', cursor: 'pointer', transition: 'transform 0.2s', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}>
            <h2 style={{ margin: '0', fontSize: '28px', fontWeight: '900' }}>Student Bridge</h2>
            <p style={{ color: '#94a3b8', fontSize: '15px', marginTop: '10px' }}>Access Curriculum & Handwriting Module</p>
          </div>
        </Link>

      </div>
      
      <p style={{ marginTop: '40px', fontSize: '10px', color: '#94a3b8', fontWeight: 'bold', textTransform: 'uppercase' }}>
        Powered by Computer-Implemented Pedagogical Logic
      </p>
    </div>
  )
}
