import { useState } from 'react';
import { MdVerified, MdCheckCircle } from 'react-icons/md';
import { useInView } from '../hooks/useInView';

/* ── Data ─────────────────────────────────────────────────── */
const METRICS = [
  { value: '10+', label: 'Tahun Beroperasi' },
  { value: '200+', label: 'Proyek Selesai' },
  { value: '50+', label: 'Klien Aktif' },
  { value: '24/7', label: 'Dukungan Penuh' },
];

const PILLARS = [
  {
    num: '01',
    title: 'Armada Prima',
    desc: 'Setiap unit diinspeksi dan dirawat berkala oleh teknisi bersertifikat — zero downtime selama proyek berlangsung.',
    tag: 'Maintenance',
  },
  {
    num: '02',
    title: 'Operator Ahli',
    desc: 'Tim operator kami mengantongi sertifikasi resmi dengan ratusan jam pengalaman nyata di lapangan.',
    tag: 'Certified',
  },
  {
    num: '03',
    title: 'Respons 24 / 7',
    desc: 'Butuh alat mendadak? Kami siap merespons kapan saja tanpa biaya darurat tambahan.',
    tag: 'Always On',
  },
];

const TRUST = [
  'Standar K3 terpenuhi',
  'Asuransi unit & operator',
  'Kontrak transparan',
  'Laporan harian proyek',
  'Anggota resmi GAPENSI',
];

/* ── Component ────────────────────────────────────────────── */
export default function About() {
  const [active, setActive] = useState(null);
  const [mRef, mVis] = useInView();
  const [hRef, hVis] = useInView();
  const [cRef, cVis] = useInView();
  const [tRef, tVis] = useInView();

  return (
    <section id="about" style={S.root}>

      {/* ── Subtle background continuity ── */}
      <div style={S.bgSpot1} />
      <div style={S.bgSpot2} />
      <div style={S.bgGrain} />

      {/* ── 1 · METRICS BAR — glassmorphic ────────────────────── */}
      <div
        ref={mRef}
        className="ab-glass-bar"
        style={{
          ...S.glassBar,
          opacity: mVis ? 1 : 0,
          transform: mVis ? 'none' : 'translateY(-20px)',
          transition: 'opacity .7s ease, transform .7s ease',
        }}
      >
        <div className="ab-metrics-inner" style={S.glassBarInner}>
          {METRICS.map((m, i) => (
            <div key={m.label} className="ab-metric-cell" style={S.metricCell}>
              <span style={{
                ...S.metricNum,
                opacity: mVis ? 1 : 0,
                transform: mVis ? 'none' : 'translateY(10px)',
                transition: `opacity .5s ease ${i * 90 + 150}ms, transform .5s ease ${i * 90 + 150}ms`,
              }}>
                {m.value}
              </span>
              <span style={S.metricLabel}>{m.label}</span>
              {i < METRICS.length - 1 && <div className="ab-metric-sep" style={S.metricSep} />}
            </div>
          ))}
        </div>
      </div>

      {/* ── 2 · SECTION HEADER ────────────────────────────────── */}
      <div
        ref={hRef}
        className="ab-header"
        style={{
          ...S.header,
          opacity: hVis ? 1 : 0,
          transform: hVis ? 'none' : 'translateY(24px)',
          transition: 'opacity .7s ease, transform .7s ease',
        }}
      >
        <span style={S.eyebrowPill}>
          <span style={S.eyebrowDot} />
          Tentang Kami
        </span>
        <h2 className="ab-heading" style={S.heading}>
          Kenapa Harus Kami?
          <br />
          <span className="gradient-text">Ini Alasannya.</span>
        </h2>
        <p style={S.subheading}>
          Dengan armada prima dan tim berpengalaman, kami hadir memastikan
          setiap proyek berjalan tepat waktu dan tanpa hambatan.
        </p>
      </div>

      {/* ── 3 · PILLAR CARDS — glass morphism ─────────────────── */}
      <div ref={cRef} className="ab-pillars-row" style={S.pillarsRow}>
        {PILLARS.map((p, i) => (
          <div
            key={p.num}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            style={{
              ...S.glassCard,
              ...(active === i ? S.glassCardHover : {}),
              opacity: cVis ? 1 : 0,
              transform: cVis
                ? active === i ? 'translateY(-8px)' : 'none'
                : 'translateY(32px)',
              transition: `opacity .6s ease ${i * 120}ms,
                           transform .4s cubic-bezier(.22,1,.36,1) ${i * 120}ms,
                           border-color .25s ease, box-shadow .25s ease,
                           background .25s ease`,
            }}
          >
            {/* faded number watermark */}
            <span style={S.cardWatermark}>{p.num}</span>

            {/* tag */}
            <span style={S.cardTag}>{p.tag}</span>

            <h3 style={S.cardTitle}>{p.title}</h3>
            <p style={S.cardDesc}>{p.desc}</p>

            {/* animated bottom line */}
            <div style={{
              ...S.cardLine,
              transform: active === i ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'transform .35s ease',
            }} />
          </div>
        ))}
      </div>

      {/* ── 4 · TRUST BLOCK — glass morphism ──────────────────── */}
      <div
        ref={tRef}
        className="ab-trust-block"
        style={{
          ...S.trustBlock,
          opacity: tVis ? 1 : 0,
          transform: tVis ? 'none' : 'translateY(24px)',
          transition: 'opacity .75s ease, transform .75s ease',
        }}
      >
        {/* Left: GAPENSI */}
        <div className="ab-gapensi-side" style={S.gapensiSide}>
          <div style={S.gapensiIconRing}>
            <div style={S.gapensiGlow} />
            <MdVerified size={36} style={{ color: '#f97316', position: 'relative', zIndex: 1 }} />
          </div>
          <div>
            <div style={S.gapensiEye}>Anggota Resmi</div>
            <div className="ab-gapensi-name" style={S.gapensiName}>GAPENSI</div>
            <div style={S.gapensiSub}>
              Gabungan Pelaksana Konstruksi<br />Nasional Indonesia
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="ab-trust-divider" style={S.trustDivider} />

        {/* Right: checklist */}
        <ul className="ab-trust-list" style={S.trustList}>
          {TRUST.map((t, i) => (
            <li
              key={t}
              className="ab-trust-item"
              style={{
                ...S.trustItem,
                opacity: tVis ? 1 : 0,
                transform: tVis ? 'none' : 'translateX(16px)',
                transition: `opacity .5s ease ${i * 75 + 200}ms,
                             transform .5s ease ${i * 75 + 200}ms`,
              }}
            >
              <MdCheckCircle size={15} style={{ color: '#f97316', flexShrink: 0 }} />
              <span style={S.trustText}>{t}</span>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        /* RESPONSIVE OVERRIDES */
        @media (max-width: 1024px) {
          .ab-pillars-row { grid-template-columns: repeat(2, 1fr) !important; }
        }
        
        @media (max-width: 768px) {
          /* Containers */
          .ab-header, .ab-pillars-row { padding: 0 20px !important; }
          .ab-header { margin-top: 56px !important; }
          .ab-pillars-row { grid-template-columns: 1fr !important; margin-top: 40px !important; gap: 16px !important; }
          
          /* Metrics - Hidden on Mobile */
          .ab-glass-bar { display: none !important; }
          
          /* Trust block (GAPENSI) */
          .ab-trust-block {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 28px !important;
            padding: 32px 24px !important;
            margin-left: 20px !important;
            margin-right: 20px !important;
            border-radius: 20px !important;
          }
          .ab-gapensi-side { align-items: flex-start !important; }
          .ab-gapensi-name { font-size: 26px !important; }
          
          .ab-trust-divider {
            width: 100% !important;
            height: 1px !important;
          }
          
          .ab-trust-list { flex-direction: column !important; gap: 12px !important; }
          .ab-trust-item { width: 100% !important; }
        }
        
        @media (max-width: 480px) {
          /* Stack metrics to 1 column on tiny screens */
          .ab-metric-cell { flex: 0 0 100% !important; border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.06) !important; }
          .ab-metric-cell:last-child { border-bottom: none !important; }
        }
      `}</style>
    </section>
  );
}

/* ── Styles ───────────────────────────────────────────────── */
const GLASS = {
  background: 'rgba(255,255,255,0.04)',
  backdropFilter: 'blur(24px) saturate(160%)',
  WebkitBackdropFilter: 'blur(24px) saturate(160%)',
  border: '1px solid rgba(255,255,255,0.09)',
};

const GLASS_ORANGE = {
  background: 'rgba(249,115,22,0.05)',
  backdropFilter: 'blur(24px) saturate(180%)',
  WebkitBackdropFilter: 'blur(24px) saturate(180%)',
  border: '1px solid rgba(249,115,22,0.18)',
};

const S = {
  root: {
    background: '#08080f',
    position: 'relative',
    overflow: 'hidden',
    paddingBottom: 100,
  },

  bgSpot1: {
    position: 'absolute',
    top: '10%', right: '-5%',
    width: 600, height: 600,
    borderRadius: '50%',
    background: 'radial-gradient(ellipse, rgba(249,115,22,0.08) 0%, transparent 65%)',
    filter: 'blur(80px)',
    pointerEvents: 'none',
  },

  bgSpot2: {
    position: 'absolute',
    bottom: '5%', left: '-8%',
    width: 500, height: 500,
    borderRadius: '50%',
    background: 'radial-gradient(ellipse, rgba(234,88,12,0.05) 0%, transparent 65%)',
    filter: 'blur(70px)',
    pointerEvents: 'none',
  },

  bgGrain: {
    position: 'absolute', inset: 0, pointerEvents: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E")`,
    backgroundSize: '256px 256px',
    opacity: 0.6,
  },

  /* ── Glass metrics bar ── */
  glassBar: {
    position: 'relative', zIndex: 2,
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 48px',
  },

  glassBarInner: {
    ...GLASS,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 18,
    overflow: 'hidden',
    position: 'relative',
  },

  metricCell: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 5,
    padding: '28px 16px',
    position: 'relative',
  },

  metricNum: {
    fontSize: 'clamp(26px, 3.5vw, 40px)',
    fontWeight: 900,
    background: 'linear-gradient(135deg, #fb923c 0%, #fbbf24 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    letterSpacing: '-0.03em',
    lineHeight: 1,
  },

  metricLabel: {
    fontSize: 11.5,
    color: '#6b7280',
    fontWeight: 500,
    textAlign: 'center',
    letterSpacing: '0.02em',
  },

  metricSep: {
    position: 'absolute',
    right: 0, top: '20%',
    height: '60%', width: 1,
    background: 'rgba(255,255,255,0.07)',
  },

  /* ── Section header ── */
  header: {
    position: 'relative', zIndex: 2,
    maxWidth: 1200,
    margin: '72px auto 0',
    padding: '0 48px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: 18,
  },

  eyebrowPill: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '5px 16px',
    ...GLASS,
    background: 'rgba(249,115,22,0.08)',
    border: '1px solid rgba(249,115,22,0.22)',
    borderRadius: 99,
    fontSize: 11,
    fontWeight: 700,
    color: '#fb923c',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  },

  eyebrowDot: {
    width: 6, height: 6,
    borderRadius: '50%',
    background: '#f97316',
    boxShadow: '0 0 8px rgba(249,115,22,0.8)',
    flexShrink: 0,
  },

  heading: {
    fontSize: 'clamp(28px, 4.5vw, 48px)',
    fontWeight: 900,
    color: '#fff',
    lineHeight: 1.1,
    letterSpacing: '-0.025em',
  },

  subheading: {
    color: '#6b7280',
    fontSize: 15,
    lineHeight: 1.8,
    maxWidth: 500,
    fontWeight: 400,
  },

  /* ── Pillar cards ── */
  pillarsRow: {
    position: 'relative', zIndex: 2,
    maxWidth: 1200,
    margin: '52px auto 0',
    padding: '0 48px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 20,
  },

  glassCard: {
    ...GLASS,
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 18,
    padding: '36px 30px 32px',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    cursor: 'default',
  },

  glassCardHover: {
    background: 'rgba(249,115,22,0.06)',
    backdropFilter: 'blur(28px) saturate(180%)',
    WebkitBackdropFilter: 'blur(28px) saturate(180%)',
    borderColor: 'rgba(249,115,22,0.3)',
    boxShadow: '0 24px 60px rgba(0,0,0,.55), 0 0 0 1px rgba(249,115,22,0.08), inset 0 1px 0 rgba(249,115,22,0.1)',
  },

  cardWatermark: {
    position: 'absolute',
    top: 12, right: 20,
    fontSize: 64,
    fontWeight: 900,
    color: 'rgba(255,255,255,0.035)',
    lineHeight: 1,
    letterSpacing: '-0.05em',
    fontFamily: 'monospace',
    userSelect: 'none',
  },

  cardTag: {
    display: 'inline-flex',
    alignSelf: 'flex-start',
    padding: '3px 11px',
    ...GLASS,
    background: 'rgba(249,115,22,0.08)',
    border: '1px solid rgba(249,115,22,0.18)',
    borderRadius: 99,
    fontSize: 10,
    fontWeight: 700,
    color: '#fb923c',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
  },

  cardTitle: {
    fontSize: 19,
    fontWeight: 800,
    color: '#f1f5f9',
    letterSpacing: '-0.02em',
    lineHeight: 1.3,
  },

  cardDesc: {
    fontSize: 13.5,
    color: '#6b7280',
    lineHeight: 1.85,
    flexGrow: 1,
  },

  cardLine: {
    position: 'absolute',
    bottom: 0, left: 0, right: 0,
    height: 2,
    background: 'linear-gradient(90deg, #f97316, #fbbf24)',
    transformOrigin: 'left',
    borderRadius: '0 0 18px 18px',
  },

  /* ── Trust block ── */
  trustBlock: {
    ...GLASS,
    position: 'relative', zIndex: 2,
    maxWidth: 1200,
    margin: '24px auto 0',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '40px 52px',
    borderRadius: 22,
    display: 'flex',
    alignItems: 'center',
    gap: 60,
    overflow: 'hidden',
  },

  gapensiSide: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
    flexShrink: 0,
  },

  gapensiIconRing: {
    position: 'relative',
    width: 76, height: 76,
    borderRadius: 20,
    ...GLASS_ORANGE,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },

  gapensiGlow: {
    position: 'absolute',
    inset: -10,
    borderRadius: 28,
    background: 'radial-gradient(ellipse, rgba(249,115,22,0.2) 0%, transparent 70%)',
    filter: 'blur(14px)',
    pointerEvents: 'none',
  },

  gapensiEye: {
    fontSize: 10,
    fontWeight: 700,
    color: '#f97316',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    marginBottom: 3,
  },

  gapensiName: {
    fontSize: 30,
    fontWeight: 900,
    color: '#fff',
    letterSpacing: '-0.025em',
    lineHeight: 1,
    marginBottom: 5,
  },

  gapensiSub: {
    fontSize: 11,
    color: '#6b7280',
    lineHeight: 1.55,
  },

  trustDivider: {
    width: 1,
    alignSelf: 'stretch',
    background: 'rgba(255,255,255,0.08)',
    flexShrink: 0,
  },

  trustList: {
    listStyle: 'none',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px 36px',
    flex: 1,
  },

  trustItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 9,
    width: 'calc(50% - 18px)',
  },

  trustText: {
    fontSize: 13.5,
    color: '#d1d5db',
    fontWeight: 500,
  },
};
