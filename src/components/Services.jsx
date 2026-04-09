import { MdSpeed, MdConstruction, MdSupportAgent } from 'react-icons/md';
import { HiCheck } from 'react-icons/hi';
import { useInView } from '../hooks/useInView';

const services = [
  {
    icon: <MdSpeed size={24} />,
    color: '#fb923c',
    title: 'Proses Cepat & Mudah',
    desc: 'Pemesanan alat berat dalam beberapa langkah. Proses administrasi simpel, transparan, tanpa birokrasi rumit.',
    features: ['Booking online 24/7', 'Konfirmasi cepat', 'Dokumen digital'],
  },
  {
    icon: <MdConstruction size={24} />,
    color: '#fff',
    title: 'Penyewaan Alat Berkualitas',
    desc: 'Armada alat berat terawat baik dan selalu dalam kondisi prima. Setiap unit diperiksa sebelum dikirim ke lokasi.',
    features: ['Perawatan berkala', 'Garansi performa', 'Unit terkini'],
    featured: true,
  },
  {
    icon: <MdSupportAgent size={24} />,
    color: '#fbbf24',
    title: 'Dukungan Profesional',
    desc: 'Tim kami siap membantu Anda 24/7 selama masa sewa. Operator & teknisi siap mendampingi proyek Anda.',
    features: ['Tim berpengalaman', 'Respons 24/7', 'Konsultasi gratis'],
  },
];

export default function Services() {
  const [hRef, hVis] = useInView();
  const [gRef, gVis] = useInView();

  return (
    <section id="services" className="section" style={{ background: '#08080f', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', bottom: '-15%', left: '-10%', width: 600, height: 600,
        background: 'radial-gradient(ellipse, rgba(249,115,22,0.07) 0%, transparent 65%)',
        borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div ref={hRef} className={`reveal section-header ${hVis ? 'visible' : ''}`}
          style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="badge" style={{ marginBottom: 16 }}>Layanan</div>
          <h2 style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: 12 }}>
            Pelayanan <span className="gradient-text">Kami</span>
          </h2>
          <p style={{ color: '#4b5563', fontSize: 15, maxWidth: 400, margin: '0 auto', lineHeight: 1.75 }}>
            Rangkaian layanan lengkap untuk memenuhi kebutuhan proyek konstruksi Anda.
          </p>
        </div>

        {/* Cards */}
        <div ref={gRef} className="three-col">
          {services.map((s, i) => (
            <div key={s.title} className="card" style={{
              borderRadius: 16, padding: '28px 24px', display: 'flex', flexDirection: 'column',
              background: s.featured
                ? 'linear-gradient(145deg, rgba(249,115,22,0.18), rgba(234,88,12,0.08))'
                : 'rgba(255,255,255,0.03)',
              border: s.featured
                ? '1px solid rgba(249,115,22,0.45)'
                : '1px solid rgba(255,255,255,0.06)',
              boxShadow: s.featured ? '0 8px 48px rgba(249,115,22,0.18)' : 'none',
              opacity: gVis ? 1 : 0,
              transform: gVis ? 'none' : 'translateY(22px)',
              transition: `opacity 0.55s ease ${i * 110}ms, transform 0.55s ease ${i * 110}ms`,
              position: 'relative', overflow: 'hidden',
            }}>
              {s.featured && (
                <div style={{
                  position: 'absolute', top: 14, right: 14,
                  padding: '3px 10px', background: '#f97316', color: '#fff',
                  fontSize: 11, fontWeight: 700, borderRadius: 99,
                }}>
                  Paling Populer
                </div>
              )}
              <div style={{
                width: 48, height: 48, borderRadius: 12, marginBottom: 20,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: `${s.featured ? '#f97316' : s.color}18`,
                color: s.featured ? '#f97316' : s.color,
              }}>
                {s.icon}
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 10 }}>{s.title}</h3>
              <p style={{
                fontSize: 13, lineHeight: 1.75, flex: 1, marginBottom: 20,
                color: s.featured ? 'rgba(253,186,116,0.8)' : '#4b5563',
              }}>
                {s.desc}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {s.features.map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <HiCheck style={{ color: s.featured ? '#fb923c' : s.color, flexShrink: 0, fontSize: 14 }} />
                    <span style={{ fontSize: 13, fontWeight: 500, color: s.featured ? '#fde68a' : '#6b7280' }}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className={`service-cta-strip reveal ${hVis ? 'visible' : ''}`} style={{
          marginTop: 40, padding: 'clamp(20px,3vw,28px) clamp(20px,3vw,32px)',
          background: 'rgba(249,115,22,0.06)', border: '1px solid rgba(249,115,22,0.15)', borderRadius: 16,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 16, transitionDelay: '200ms',
        }}>
          <div>
            <div style={{ fontWeight: 700, color: '#fff', fontSize: 16 }}>Tertarik dengan layanan kami?</div>
            <div style={{ color: '#4b5563', fontSize: 13, marginTop: 4 }}>Konsultasikan kebutuhan proyek Anda secara gratis.</div>
          </div>
          <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
            Hubungi Kami →
          </button>
        </div>
      </div>
    </section>
  );
}
