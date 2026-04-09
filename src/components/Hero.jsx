import { HiArrowRight, HiPhone } from 'react-icons/hi';
import { useEffect, useState } from 'react';

const stats = [
  { value: '50+', label: 'Proyek Selesai' },
  { value: '4+', label: 'Jenis Layanan' },
  { value: '100%', label: 'Standar Mutu' },
  { value: '24/7', label: 'Dukungan Tim' },
];

export default function Hero() {
  const go = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  // 🔥 Detect screen
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: '#08080f',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: 50,
    }}>
      {/* Aurora */}
      <div className="aurora-bg">
        <div className="aurora-blob aurora-blob-1" />
        <div className="aurora-blob aurora-blob-2" />
        <div className="aurora-blob aurora-blob-3" />
        <div className="aurora-blob aurora-blob-4" />
      </div>

      <div className="grid-bg" />

      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(8,8,15,0.7) 100%)',
      }} />

      {/* Content */}
      <div className="container" style={{
        position: 'relative',
        zIndex: 1,
        width: '100%',
        maxWidth: isMobile ? '100%' : 1100, // 🔥 responsive width
        margin: '0 auto',
        padding: isMobile ? '0 16px' : '0 24px',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: isMobile ? '60px 16px' : '80px 24px',
          maxWidth: isMobile ? '100%' : 900,
          margin: '0 auto',
          width: '100%',
        }}>

          {/* Badge */}
          <div className="badge" style={{ marginBottom: 20 }}>
            <span style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#22c55e',
              display: 'inline-block'
            }} />
            Anggota Resmi GAPENSI
          </div>

          {/* Heading */}
          <h1 style={{
            fontSize: isMobile ? '32px' : 'clamp(38px, 6vw, 72px)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.1,
            marginBottom: 20,
          }}>
            Sewa Alat <span className="gradient-text">Kontraktor Cirebon</span> Terpercaya
          </h1>

          {/* Subtext */}
          <p style={{
            color: '#6b7280',
            fontSize: isMobile ? '13px' : 'clamp(13px, 1.6vw, 15px)',
            lineHeight: 1.7,
            marginBottom: 32,
            marginTop: 10,
            maxWidth: 820,
          }}>
            Dua Putra Bungsu merupakan penyedia layanan sewa alat kontraktor di Cirebon yang siap membantu berbagai kebutuhan proyek konstruksi Anda. 
            Kami menyediakan berbagai alat berat seperti excavator, dump truck, bulldozer, dan alat lainnya dengan kondisi prima dan siap digunakan.
          </p>

          {/* CTA */}
          <div style={{
            display: 'flex',
            gap: 12,
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: 48,
          }}>
            <button
              onClick={() => go('#catalog')}
              className="btn-primary"
              style={{ padding: isMobile ? '12px 20px' : '14px 32px', fontSize: 14 }}
            >
              Sewa Sekarang <HiArrowRight />
            </button>

            <button
              onClick={() => go('#contact')}
              className="btn-ghost"
              style={{ padding: isMobile ? '12px 20px' : '14px 32px', fontSize: 14 }}
            >
              <HiPhone /> Hubungi Kami
            </button>
          </div>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', // 🔥 responsive grid
            gap: isMobile ? 16 : '8px 32px',
            borderTop: '1px solid rgba(249,115,22,0.15)',
            paddingTop: 24,
            width: '100%',
            maxWidth: 520,
          }}>
            {stats.map((s) => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: isMobile ? 18 : 'clamp(20px, 2.2vw, 26px)',
                  fontWeight: 700,
                  color: '#fb923c'
                }}>
                  {s.value}
                </div>
                <div style={{
                  fontSize: 11,
                  color: '#4b5563',
                  marginTop: 4,
                  fontWeight: 500
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}