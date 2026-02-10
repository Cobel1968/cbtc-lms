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
      backgroundColor: '#ffffff',
      color: '#003366',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '3rem', fontWeight: '900', margin: '0', letterSpacing: '-0.05em' }}>COBEL AI ENGINE</h1>
      <p style={{ color: '#64748b', fontWeight: 'bold', fontSize: '14px', marginTop: '10px' }}>VOCATIONAL TRAINING CENTER</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', width: '100%', maxWidth: '800px', marginTop: '50px' }}>
        <Link href="/employer/dashboard" style={{ textDecoration: 'none' }}>
          <div style={{ padding: '40px', backgroundColor: '#f8fafc', borderRadius: '32px', border: '1px solid #e2e8f0', cursor: 'pointer' }}>
            <h2 style={{ margin: '0', fontSize: '24px' }}>Partner Portal</h2>
            <p style={{ color: '#64748b', fontSize: '14px' }}>Management & Temporal Optimization</p>
          </div>
        </Link>

        <Link href="/curriculum" style={{ textDecoration: 'none' }}>
          <div style={{ padding: '40px', backgroundColor: '#003366', borderRadius: '32px', color: '#ffffff', cursor: 'pointer' }}>
            <h2 style={{ margin: '0', fontSize: '24px' }}>Student Bridge</h2>
            <p style={{ color: '#94a3b8', fontSize: '14px' }}>Handwriting Analysis & Learning</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
