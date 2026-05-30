import { HiArrowRight, HiPhone } from 'react-icons/hi';
import { useEffect, useState, useCallback } from 'react';

/* ── Slideshow images (from public/images) ──────────────────── */
const SLIDES = [
  { src: '/images/excavator-sk200.png',      title: 'Excavator SK200',        tag: 'Excavator'  },
  { src: '/images/excavator-sany-sy75.png',  title: 'Excavator SANY SY75',    tag: 'Excavator'  },
  { src: '/images/bulldozer-d65.png',        title: 'Bulldozer D65',           tag: 'Bulldozer'  },
  { src: '/images/motor-grader.png',         title: 'Motor Grader',            tag: 'Grader'     },
  { src: '/images/excavator-long-arm.png',   title: 'Excavator Long Arm',      tag: 'Excavator'  },
  { src: '/images/vibro-roller.png',         title: 'Vibro Roller',            tag: 'Compactor'  },
  { src: '/images/self-loader.png',          title: 'Self Loader',             tag: 'Hauling'    },
];

const INTERVAL = 5000;

export default function Hero() {
  const go = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  /* ── Content reveal ── */
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVis(true), 120);
    return () => clearTimeout(t);
  }, []);

  /* ── Slideshow state ── */
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((idx) => {
    setCurrent(idx);
  }, []);

  /* Auto-advance */
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent(c => (c + 1) % SLIDES.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" style={S.root}>

      {/* ── SLIDESHOW BACKGROUND (FULL BLEED) ───────────────────────────── */}

      {/* Background base color for transparent images */}
      <div style={S.bgBase} />

      {/* Smooth Crossfade Slides */}
      {SLIDES.map((slide, idx) => (
        <div
          key={idx}
          style={{
            ...S.slide,
            backgroundImage: `url(${slide.src})`,
            opacity: current === idx ? 1 : 0,
            transition: 'opacity 1.2s ease-in-out',
            zIndex: current === idx ? 1 : 0,
          }}
        />
      ))}

      {/* ── OVERLAY LAYERS (CINEMATIC) ── */}
      {/* Grain */}
      <div style={S.grain} />

      {/* Cinematic gradient — heavy bottom like idlixku */}
      <div style={S.overlayBottom} />
      <div style={S.overlayLeft} />
      <div style={S.overlayTop} />

      {/* Grid pattern overlay */}
      <div style={S.grid} />

      {/* ── CONTENT ─────────────────────────────────────────── */}
      <div style={S.content} className="nf-hero-content">

        {/* Eyebrow pill */}
        <div style={{
          ...S.eyebrow,
          opacity:   vis ? 1 : 0,
          transform: vis ? 'none' : 'translateY(20px)',
          transition: 'opacity .6s ease .08s, transform .6s ease .08s',
        }}>
          <span style={S.dot} />
          <span style={S.eyebrowText}>Anggota Resmi GAPENSI · Cirebon</span>
        </div>

        {/* Headline */}
        <h1 style={{
          ...S.headline,
          opacity:   vis ? 1 : 0,
          transform: vis ? 'none' : 'translateY(30px)',
          transition: 'opacity .75s ease .18s, transform .75s ease .18s',
        }}>
          Sewa Alat Berat
          <br />
          <span style={S.headlineAccent}>Terpercaya</span>
          <span style={S.headlineMute}> di Cirebon</span>
        </h1>

        {/* Sub */}
        <p style={{
          ...S.sub,
          opacity:   vis ? 1 : 0,
          transform: vis ? 'none' : 'translateY(20px)',
          transition: 'opacity .7s ease .28s, transform .7s ease .28s',
        }}>
          Excavator, dump truck, bulldozer, dan lebih kondisi prima,
          operator bersertifikat, siap mendukung proyek Anda.
        </p>

        {/* CTA row */}
        <div style={{
          ...S.ctas,
          opacity:   vis ? 1 : 0,
          transform: vis ? 'none' : 'translateY(16px)',
          transition: 'opacity .65s ease .38s, transform .65s ease .38s',
        }}>
          <button onClick={() => go('#catalog')} className="nf-btn-primary">
            Sewa Sekarang <HiArrowRight />
          </button>
          <button onClick={() => go('#contact')} className="nf-btn-glass">
            <HiPhone /> Hubungi Kami
          </button>
        </div>

        {/* Slide indicators */}
        <div style={{
          ...S.indicators,
          opacity:   vis ? 1 : 0,
          transition: 'opacity .65s ease .48s',
        }}>
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                ...S.indicator,
                ...(i === current ? S.indicatorActive : {}),
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── Progress bar ── */}
      <div style={S.progressTrack}>
        <div
          key={current}
          style={{
            ...S.progressBar,
            animation: `progressFill ${INTERVAL}ms linear forwards`,
          }}
        />
      </div>

      {/* ── Seamless fade to About ── */}
      <div style={S.fadeBottom} />

      <style>{`
        @keyframes progressFill {
          from { width: 0%; }
          to   { width: 100%; }
        }
        @keyframes pulse-dot {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,.8); }
          50%       { box-shadow: 0 0 0 6px rgba(34,197,94,0); }
        }

        .nf-btn-primary {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 32px;
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: #fff; font-family: 'Poppins', sans-serif;
          font-weight: 700; font-size: 14px; border-radius: 10px;
          border: none; cursor: pointer; letter-spacing: .02em;
          box-shadow: 0 0 36px rgba(249,115,22,.5), 0 4px 16px rgba(0,0,0,.5);
          transition: transform .2s ease, box-shadow .2s ease;
          white-space: nowrap;
        }
        .nf-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 56px rgba(249,115,22,.7), 0 8px 28px rgba(0,0,0,.6);
        }
        .nf-btn-glass {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 28px;
          background: rgba(255,255,255,.07);
          backdrop-filter: blur(20px) saturate(160%);
          -webkit-backdrop-filter: blur(20px) saturate(160%);
          color: #e2e8f0; font-family: 'Poppins', sans-serif;
          font-weight: 600; font-size: 14px; border-radius: 10px;
          border: 1px solid rgba(255,255,255,.14); cursor: pointer;
          letter-spacing: .02em; white-space: nowrap;
          transition: background .25s, border-color .25s, transform .2s;
        }
        .nf-btn-glass:hover {
          background: rgba(255,255,255,.12);
          border-color: rgba(249,115,22,.45);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .nf-hero-content { padding: 0 20px !important; }
          #home h1 { font-size: clamp(32px, 8vw, 44px) !important; line-height: 1.1 !important; }
          .nf-btn-primary, .nf-btn-glass { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  );
}

/* ── Styles ─────────────────────────────────────────────────── */
const S = {
  root: {
    position: 'relative',
    height: '100vh',
    minHeight: 600,
    overflow: 'hidden',
    background: '#08080f',
  },
  
  bgBase: {
    position: 'absolute', inset: 0,
    background: '#08080f',
    zIndex: 0,
  },

  /* Full-bleed slides */
  slide: {
    position: 'absolute', inset: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    willChange: 'transform, opacity',
    zIndex: 1,
  },

  /* Overlay layers */
  grain: {
    position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E")`,
    backgroundSize: '200px 200px',
  },

  overlayBottom: {
    position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none',
    background: 'linear-gradient(to top, #08080f 0%, #08080f 5%, rgba(8,8,15,0.92) 20%, rgba(8,8,15,0.6) 45%, rgba(8,8,15,0.1) 75%, transparent 100%)',
  },

  overlayLeft: {
    position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none',
    background: 'linear-gradient(to right, rgba(8,8,15,0.95) 0%, rgba(8,8,15,0.7) 35%, rgba(8,8,15,0.1) 65%, transparent 100%)',
  },

  overlayTop: {
    position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none',
    background: 'linear-gradient(to bottom, rgba(8,8,15,0.7) 0%, transparent 25%)',
  },

  grid: {
    position: 'absolute', inset: 0, zIndex: 4, pointerEvents: 'none',
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)
    `,
    backgroundSize: '64px 64px',
    maskImage: 'linear-gradient(to right, black 30%, transparent 80%)',
    WebkitMaskImage: 'linear-gradient(to right, black 30%, transparent 80%)',
  },

  /* Content */
  content: {
    position: 'absolute',
    bottom: '25%', left: 0, right: 0,
    zIndex: 10,
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 56px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 20,
  },

  /* Eyebrow */
  eyebrow: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    padding: '5px 16px',
    background: 'rgba(249,115,22,0.08)',
    backdropFilter: 'blur(16px) saturate(160%)',
    WebkitBackdropFilter: 'blur(16px) saturate(160%)',
    border: '1px solid rgba(249,115,22,0.25)',
    borderRadius: 99,
  },

  dot: {
    width: 7, height: 7,
    borderRadius: '50%',
    background: '#22c55e',
    boxShadow: '0 0 10px rgba(34,197,94,1)',
    flexShrink: 0,
    animation: 'pulse-dot 2s ease-in-out infinite',
  },

  eyebrowText: {
    fontSize: 11,
    fontWeight: 600,
    color: '#fb923c',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
  },

  /* Headline */
  headline: {
    fontSize: 'clamp(36px, 5vw, 64px)',
    fontWeight: 900,
    color: '#fff',
    lineHeight: 1.0,
    letterSpacing: '-0.03em',
    maxWidth: 740,
    textShadow: '0 4px 40px rgba(0,0,0,0.6)',
  },

  headlineAccent: {
    background: 'linear-gradient(120deg, #fb923c 0%, #f97316 45%, #fbbf24 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },

  headlineMuted: {
    color: '#4b5563',
  },

  sub: {
    fontSize: 'clamp(14px, 1.5vw, 16px)',
    color: '#9ca3af',
    lineHeight: 1.75,
    maxWidth: 480,
    fontWeight: 400,
    textShadow: '0 2px 12px rgba(0,0,0,0.5)',
  },

  ctas: {
    display: 'flex',
    gap: 14,
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingTop: 4,
  },

  /* Slide indicators (dots) */
  indicators: {
    display: 'flex',
    gap: 8,
    alignItems: 'center',
    paddingTop: 8,
  },

  indicator: {
    width: 28, height: 3,
    borderRadius: 99,
    background: 'rgba(255,255,255,0.25)',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    transition: 'background .3s ease, width .3s ease',
  },

  indicatorActive: {
    width: 48,
    background: '#f97316',
    boxShadow: '0 0 10px rgba(249,115,22,0.8)',
  },

  /* Progress bar */
  progressTrack: {
    position: 'absolute',
    bottom: 0, left: 0, right: 0,
    height: 2,
    background: 'rgba(255,255,255,0.08)',
    zIndex: 20,
  },

  progressBar: {
    height: '100%',
    background: 'linear-gradient(90deg, #f97316, #fbbf24)',
    width: 0,
    boxShadow: '0 0 8px rgba(249,115,22,0.6)',
  },

  /* Seamless fade to About */
  fadeBottom: {
    position: 'absolute', bottom: -2, left: 0, right: 0,
    height: 160,
    background: 'linear-gradient(to bottom, transparent 0%, #08080f 100%)',
    pointerEvents: 'none',
    zIndex: 15,
  },
};