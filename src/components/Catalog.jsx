import { useState, useMemo, useRef } from 'react';
import { HiSearch, HiCamera } from 'react-icons/hi';
import { useInView } from '../hooks/useInView';


const items = [
  {
    id: 1, title: 'Self Loader',
    image: '/images/self-loader.png',
    cat: 'Transportasi', emoji: '🚛',
    spec: '20–30 ton',
    desc: 'Kendaraan pengangkut alat berat dengan sistem self-loading. Ideal untuk mobilisasi excavator ke lokasi proyek.',
  },
  {
    id: 2, title: 'Motor Grader',
    image: '/images/motor-grader.png',
    cat: 'Perataan', emoji: '🚜',
    spec: 'Blade 3.7–4.3 m',
    desc: 'Alat untuk meratakan dan menstabilkan permukaan tanah. Sempurna untuk pekerjaan jalan dan grading area.',
  },
  {
    id: 3, title: 'DT Index 24',
    image: '/images/DT Index 24.png',
    cat: 'Transportasi', emoji: '🚚',
    spec: '10–20 m³',
    desc: 'Truk pengangkut material berkapasitas besar untuk mengangkut tanah, pasir, batu, dan material konstruksi.',
  },
  {
    id: 4, title: 'Bulldozer D65',
    image: '/images/bulldozer-d65.png',
    cat: 'Pendorongan', emoji: '🏗️',
    spec: 'Engine 155 HP',
    desc: 'Bulldozer bertenaga tinggi untuk mendorong dan meratakan tanah dalam volume besar. Cocok untuk land clearing.',
  },
  {
    id: 5, title: 'Excavator Long Arm',
    image: '/images/excavator-long-arm.png',
    cat: 'Penggalian', emoji: '⚙️',
    spec: 'Boom 12–18 m',
    desc: 'Excavator dengan lengan panjang untuk penggalian di tempat sulit, parit dalam, dan pekerjaan sungai.',
  },
  {
    id: 6, title: 'Excavator SK 200',
    image: '/images/excavator-sk200.png',
    cat: 'Penggalian', emoji: '🔧',
    spec: '20 ton',
    desc: 'Excavator serbaguna kelas 20 ton dari Kobelco. Performa tinggi dengan konsumsi BBM efisien.',
  },
  {
    id: 7, title: 'Excavator Sany SY 75',
    image: '/images/excavator-sany-sy75.png',
    cat: 'Penggalian', emoji: '🦾',
    spec: '7.5 ton',
    desc: 'Mini excavator kompak namun bertenaga, ideal untuk proyek di area terbatas dan pekerjaan presisi tinggi.',
  },
  {
    id: 8, title: 'Excavator Breaker',
    image: '/images/excavator-breaker.png',
    cat: 'Penghancuran', emoji: '💥',
    spec: '300–500 hit/min',
    desc: 'Excavator dengan hydraulic breaker untuk memecah batu, beton, dan aspal. Efisien untuk demolition.',
  },
  {
    id: 9, title: 'Vibro Roller & Sheep Foot',
    image: '/images/vibro-roller.png',
    cat: 'Pemadatan', emoji: '🛞',
    spec: 'Lebar 1.5–2.1 m',
    desc: 'Mesin pemadat tanah dengan teknologi vibrasi. Tersedia smooth drum dan sheep foot untuk berbagai material.',
  },
];

const cats = ['Semua', ...new Set(items.map((i) => i.cat))];

const catStyle = {
  Transportasi: { color: '#22c55e',  bg: 'rgba(34,197,94,0.1)',   border: 'rgba(34,197,94,0.2)'   },
  Perataan:     { color: '#a78bfa',  bg: 'rgba(167,139,250,0.1)', border: 'rgba(167,139,250,0.2)' },
  Pendorongan:  { color: '#f97316',  bg: 'rgba(249,115,22,0.1)',  border: 'rgba(249,115,22,0.2)'  },
  Penggalian:   { color: '#fb923c',  bg: 'rgba(251,146,60,0.1)',  border: 'rgba(251,146,60,0.2)'  },
  Penghancuran: { color: '#f43f5e',  bg: 'rgba(244,63,94,0.1)',   border: 'rgba(244,63,94,0.2)'   },
  Pemadatan:    { color: '#fbbf24',  bg: 'rgba(251,191,36,0.1)',  border: 'rgba(251,191,36,0.2)'  },
};
const fallback = { color: '#9ca3af', bg: 'rgba(156,163,175,0.1)', border: 'rgba(156,163,175,0.2)' };

/* ─── Photo Frame Component ── */
function PhotoFrame({ item, cs }) {
  const [loaded, setLoaded] = useState(false);
  const [error,  setError]  = useState(false);

  return (
    <div className="photo-frame" style={{ height: 190 }}>
      {/* Placeholder — always rendered, covered by the image when loaded */}
      <div className="photo-placeholder" style={{ opacity: loaded && !error ? 0 : 1, transition: 'opacity 0.3s' }}>
        {/* Dashed border hint */}
        <div style={{
          position: 'absolute', inset: 12,
          border: `1.5px dashed ${error || !loaded ? cs.color + '40' : 'transparent'}`,
          borderRadius: 10, transition: 'border-color 0.3s',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>
          <span className="photo-placeholder-icon">{item.emoji}</span>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <div className="photo-placeholder-hint" style={{ borderColor: cs.color + '40', color: cs.color + '90' }}>
              <HiCamera style={{ display: 'inline', marginRight: 4, verticalAlign: 'middle' }} />
              Tambahkan Foto
            </div>
            <div className="photo-placeholder-label">
              📁 public/images/{item.image.replace('/images/', '')}
            </div>
          </div>
        </div>
      </div>

      {/* Actual image */}
      {!error && (
        <img
          src={item.image}
          alt={item.title}
          className={loaded ? 'loaded' : ''}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', display: 'block',
            opacity: loaded ? 1 : 0, transition: 'opacity 0.4s ease',
          }}
        />
      )}

      {/* Category badge - always on top */}
      <span style={{
        position: 'absolute', top: 10, right: 10, zIndex: 2,
        padding: '3px 10px', borderRadius: 99, fontSize: 11, fontWeight: 600,
        color: cs.color, background: cs.bg, border: `1px solid ${cs.border}`,
        backdropFilter: 'blur(8px)',
      }}>
        {item.cat}
      </span>
    </div>
  );
}

/* ─── Main Component ── */
export default function Catalog() {
  const [q,   setQ]   = useState('');
  const [cat, setCat] = useState('Semua');
  const [hRef, hVis]  = useInView();
  const [gRef, gVis]  = useInView();

  const filtered = useMemo(() =>
    items.filter((x) => {
      const m = x.title.toLowerCase().includes(q.toLowerCase()) || x.desc.toLowerCase().includes(q.toLowerCase());
      return m && (cat === 'Semua' || x.cat === cat);
    }), [q, cat]);

  const go = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="catalog" className="section" style={{ background: '#0d0d18', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 900, height: 300,
        background: 'radial-gradient(ellipse, rgba(249,115,22,0.07) 0%, transparent 65%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div ref={hRef} className={`reveal section-header ${hVis ? 'visible' : ''}`}
          style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="badge" style={{ marginBottom: 16 }}>Katalog</div>
          <h2 style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: 12 }}>
            Katalog Sewa <span className="gradient-text">Alat berat</span>
          </h2>
          <p style={{ color: '#4b5563', fontSize: 15, maxWidth: 560, margin: '0 auto', lineHeight: 1.75 }}>
            Temukan alat berat yang sesuai dengan kebutuhan proyek konstruksi Anda.
          </p>
        </div>

        {/* Search + filter */}
        <div className={`reveal ${hVis ? 'visible' : ''}`} style={{ transitionDelay: '80ms', marginBottom: 28 }}>
          <div style={{ position: 'relative', marginBottom: 14 }}>
            <HiSearch style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#374151', fontSize: 18 }} />
            <input
              className="input" style={{ paddingLeft: 44 }}
              type="text" placeholder="Cari alat berat..."
              value={q} onChange={(e) => setQ(e.target.value)}
            />
          </div>
          <div className="cat-pills" style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {cats.map((c) => (
              <button key={c} onClick={() => setCat(c)} style={{
                padding: '6px 16px', borderRadius: 99, fontSize: 13, fontWeight: 500,
                cursor: 'pointer', fontFamily: 'Poppins, sans-serif', transition: 'all 0.18s',
                background: cat === c ? 'linear-gradient(135deg,#f97316,#ea580c)' : 'rgba(255,255,255,0.04)',
                color: cat === c ? '#fff' : '#4b5563',
                border: cat === c ? '1px solid #f97316' : '1px solid rgba(255,255,255,0.07)',
                boxShadow: cat === c ? '0 4px 18px rgba(249,115,22,0.35)' : 'none',
              }}>
                {c}
              </button>
            ))}
          </div>
        </div>

        <p style={{ color: '#374151', fontSize: 13, marginBottom: 20, fontWeight: 500 }}>
          Menampilkan <span style={{ color: '#f97316' }}>{filtered.length}</span> alat
        </p>

        {/* Grid */}
        <div ref={gRef}>
          {filtered.length > 0 ? (
            <div className="catalog-grid">
              {filtered.map((item, i) => {
                const cs = catStyle[item.cat] ?? fallback;
                return (
                  <div key={item.id} className="glass card" style={{
                    borderRadius: 14, overflow: 'hidden', display: 'flex', flexDirection: 'column',
                    opacity: gVis ? 1 : 0,
                    transform: gVis ? 'none' : 'translateY(20px) scale(0.97)',
                    transition: `opacity 0.5s ease ${i * 55}ms, transform 0.5s ease ${i * 55}ms`,
                  }}>

                    {/* Photo Frame */}
                    <PhotoFrame item={item} cs={cs} />

                    {/* Card body */}
                    <div style={{ padding: '16px 18px 18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <h3 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{item.title}</h3>
                      <p style={{ color: cs.color, fontSize: 11, fontWeight: 600, marginBottom: 8, fontFamily: 'monospace' }}>
                        📐 {item.spec}
                      </p>
                      <p style={{ color: '#374151', fontSize: 13, lineHeight: 1.7, flex: 1, marginBottom: 14 }}>
                        {item.desc}
                      </p>
                      <button onClick={go} className="btn-primary"
                        style={{ width: '100%', justifyContent: 'center', padding: '10px', fontSize: 13 }}>
                        Sewa Sekarang
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '64px 0', color: '#374151' }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
              <p>Tidak ada alat untuk "<span style={{ color: '#f97316' }}>{q}</span>"</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
