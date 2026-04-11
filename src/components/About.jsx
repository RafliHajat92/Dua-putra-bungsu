import { MdVerified, MdGroups, MdSupportAgent, MdCheckCircle } from 'react-icons/md';
import { useInView } from '../hooks/useInView';

const bullets = [
  'Alat berat berstandar internasional',
  'Operator berpengalaman & bersertifikat',
  'Anggota resmi GAPENSI',
  'Layanan 24/7 selama proyek berlangsung',
];

const stats = [
  { icon: <MdVerified size={22} />,     value: '4+',      label: 'Jenis Layanan',    color: '#f97316' },
  { icon: <MdGroups size={22} />,       value: '100%',    label: 'Standar Mutu',     color: '#fbbf24' },
  { icon: <MdSupportAgent size={22} />, value: '24/7',    label: 'Dukungan Penuh',   color: '#fb923c' },
  { icon: '🏆',                         value: 'GAPENSI', label: 'Anggota Resmi',    color: '#f59e0b' },
];

export default function About() {
  const [hRef, hVis] = useInView();
  const [lRef, lVis] = useInView();
  const [rRef, rVis] = useInView();

  return (
    <section id="about" className="section" style={{ background: '#0d0d18', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: '-20%', right: '-10%', width: 500, height: 500,
        background: 'radial-gradient(ellipse, rgba(249,115,22,0.08) 0%, transparent 65%)',
        borderRadius: '50%', filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div ref={hRef} className={`reveal section-header ${hVis ? 'visible' : ''}`}
          style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="badge" style={{ marginBottom: 16 }}>Tentang Kami</div>
          <h2 style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: 12 }}>
            Kenapa Harus <span className="gradient-text">Kami?</span>
          </h2>
          <p style={{ color: '#4b5563', fontSize: 15, maxWidth: 500, margin: '0 auto', lineHeight: 1.75 }}>
            Bergabunglah dengan ratusan berat yang telah mempercayakan kebutuhan alat berat mereka kepada kami.
          </p>
        </div>

        {/* Two-col */}
        <div className="two-col">

          {/* Left */}
          <div ref={lRef} className={`reveal-left ${lVis ? 'visible' : ''}`}
            style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div>
              <h3 style={{ fontSize: 'clamp(18px,2.2vw,22px)', fontWeight: 700, color: '#fff', marginBottom: 14, lineHeight: 1.35 }}>
                Profesionalisme & Kualitas yang Tak Tertandingi
              </h3>
              <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: 14, marginBottom: 12 }}>
                Sebagai anggota resmi <strong style={{ color: '#fb923c' }}>GAPENSI</strong>, kami berkomitmen memberikan layanan terbaik dengan standar industri yang tinggi.
              </p>
              <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: 14 }}>
                Setiap alat berat yang kami sewakan telah melalui pemeriksaan menyeluruh dan dirawat berkala oleh teknisi berpengalaman.
              </p>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {bullets.map((b, i) => (
                <li key={b} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  opacity: lVis ? 1 : 0,
                  transform: lVis ? 'none' : 'translateX(-14px)',
                  transition: `opacity 0.45s ease ${160 + i * 70}ms, transform 0.45s ease ${160 + i * 70}ms`,
                }}>
                  <MdCheckCircle style={{ color: '#f97316', flexShrink: 0, fontSize: 18 }} />
                  <span style={{ color: '#d1d5db', fontSize: 14, fontWeight: 500 }}>{b}</span>
                </li>
              ))}
            </ul>

            <div className="glass" style={{
              display: 'inline-flex', alignItems: 'center', gap: 14,
              padding: '14px 18px', borderRadius: 12,
              border: '1px solid rgba(249,115,22,0.15)',
            }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, flexShrink: 0, background: 'rgba(249,115,22,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MdVerified style={{ color: '#f97316', fontSize: 22 }} />
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: 600, fontSize: 13 }}>Anggota GAPENSI</div>
                <div style={{ color: '#4b5563', fontSize: 11, marginTop: 2 }}>Gabungan Pelaksana Konstruksi Nasional Indonesia</div>
              </div>
            </div>
          </div>

          {/* Right — bento stats */}
          <div ref={rRef} className="bento-2">
            {stats.map((s, i) => {
              const isEmoji = typeof s.icon === 'string';
              return (
                <div key={s.label} className="glass card" style={{
                  padding: 'clamp(16px,2vw,22px)', borderRadius: 14, cursor: 'default',
                  border: `1px solid ${s.color}20`,
                  opacity: rVis ? 1 : 0,
                  transform: rVis ? 'none' : 'translateY(18px) scale(0.96)',
                  transition: `opacity 0.5s ease ${i * 90}ms, transform 0.5s ease ${i * 90}ms`,
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10, marginBottom: 14,
                    background: `${s.color}15`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: isEmoji ? 22 : undefined, color: s.color,
                  }}>
                    {s.icon}
                  </div>
                  <div style={{ fontSize: 'clamp(20px,2.5vw,26px)', fontWeight: 800, color: s.color, letterSpacing: '-0.02em' }}>{s.value}</div>
                  <div style={{ color: '#4b5563', fontSize: 12, fontWeight: 500, marginTop: 4 }}>{s.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
