import { MdStar } from 'react-icons/md';
import { useInView } from '../hooks/useInView';

const REVIEWS = [
  {
    name: "Budi Santoso",
    company: "Proyek Jalan Tol",
    text: "Unit excavator dalam kondisi sangat prima. Operator yang dikirim juga sangat berpengalaman dan koperatif di lapangan. Sangat membantu percepatan proyek kami.",
  },
  {
    name: "Hendra Wijaya",
    company: "Kontraktor Independen",
    text: "Harga sewa kompetitif dan respons 24/7 benar-benar terbukti. Saat ada kendala hidrolik di malam hari, teknisi langsung datang ke lokasi. Luar biasa!",
  },
  {
    name: "Arif Rachman",
    company: "PT. Konstruksi Makmur",
    text: "Sudah berlangganan lebih dari 3 tahun. Proses administrasi sangat transparan dan unit selalu siap pakai tanpa ada hidden cost. Rekanan terbaik di Cirebon.",
  },
  {
    name: "Iwan Setiawan",
    company: "Proyek Perumahan",
    text: "Sewa bulldozer dan compactor di sini sangat memuaskan. Unit terawat, bersih, dan jarang sekali ada masalah downtime. Sangat direkomendasikan!",
  },
  {
    name: "Reza Fahlevi",
    company: "PT. Pembangunan Semesta",
    text: "Kualitas pelayanan bintang lima. Dari proses pemesanan hingga mobilisasi unit ke lapangan sangat cepat dan tepat waktu. Terima kasih Dua Putra Bungsu.",
  }
];

// Double the array for seamless infinite scrolling
const MARQUEE_ITEMS = [...REVIEWS, ...REVIEWS];

export default function Reviews() {
  const [hRef, hVis] = useInView();

  return (
    <section id="reviews" style={S.root}>
      
      {/* Background elements */}
      <div style={S.bgSpot} />
      
      {/* Header */}
      <div 
        ref={hRef} 
        style={{
          ...S.header,
          opacity: hVis ? 1 : 0,
          transform: hVis ? 'none' : 'translateY(20px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        <div className="badge" style={{ marginBottom: 16 }}>Testimoni</div>
        <h2 style={S.heading}>
          Kepercayaan <span className="gradient-text">Klien Kami</span>
        </h2>
        <p style={S.subheading}>
          Apa kata mereka yang telah mempercayakan proyeknya kepada layanan alat berat kami.
        </p>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div style={S.marqueeContainer}>
        {/* Left/Right Fade Overlays to smooth out edges */}
        <div style={S.fadeLeft} />
        <div style={S.fadeRight} />

        <div className="rev-marquee-track">
          {MARQUEE_ITEMS.map((rev, i) => (
            <div key={i} style={S.card}>
              <div style={S.stars}>
                {[1,2,3,4,5].map(s => (
                  <MdStar key={s} size={18} color="#fbbf24" />
                ))}
              </div>
              <p style={S.text}>"{rev.text}"</p>
              
              <div style={S.authorRow}>
                <div style={S.avatar}>
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <div style={S.name}>{rev.name}</div>
                  <div style={S.company}>{rev.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scrollHorizontal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .rev-marquee-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: scrollHorizontal 40s linear infinite;
          padding-left: 24px;
        }

        .rev-marquee-track:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .rev-marquee-track {
            animation: scrollHorizontal 30s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}

/* ── Styles ───────────────────────────────────────────────── */
const S = {
  root: {
    background: '#08080f',
    padding: '100px 0',
    position: 'relative',
    overflow: 'hidden',
  },

  bgSpot: {
    position: 'absolute',
    top: '20%', left: '-10%',
    width: 600, height: 600,
    background: 'radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 60%)',
    borderRadius: '50%',
    pointerEvents: 'none',
  },

  header: {
    textAlign: 'center',
    padding: '0 24px',
    marginBottom: 56,
    position: 'relative',
    zIndex: 2,
  },

  heading: {
    fontSize: 'clamp(28px, 4vw, 44px)',
    fontWeight: 800,
    color: '#fff',
    letterSpacing: '-0.02em',
    marginBottom: 12,
  },

  subheading: {
    color: '#9ca3af',
    fontSize: 15,
    maxWidth: 480,
    margin: '0 auto',
    lineHeight: 1.7,
  },

  marqueeContainer: {
    position: 'relative',
    maxWidth: 1400,
    margin: '0 auto',
    overflow: 'hidden',
    padding: '20px 0',
  },

  fadeLeft: {
    position: 'absolute',
    left: 0, top: 0, bottom: 0, width: 120,
    background: 'linear-gradient(to right, #08080f 0%, transparent 100%)',
    zIndex: 10, pointerEvents: 'none',
  },

  fadeRight: {
    position: 'absolute',
    right: 0, top: 0, bottom: 0, width: 120,
    background: 'linear-gradient(to left, #08080f 0%, transparent 100%)',
    zIndex: 10, pointerEvents: 'none',
  },

  card: {
    width: 360,
    background: 'rgba(255,255,255,0.03)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: 20,
    padding: 32,
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
    cursor: 'grab',
  },

  stars: {
    display: 'flex',
    gap: 4,
    marginBottom: 16,
  },

  text: {
    color: '#d1d5db',
    fontSize: 14,
    lineHeight: 1.8,
    fontStyle: 'italic',
    flexGrow: 1,
    marginBottom: 28,
  },

  authorRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    borderTop: '1px solid rgba(255,255,255,0.06)',
    paddingTop: 20,
  },

  avatar: {
    width: 44, height: 44,
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #f97316, #ea580c)',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    fontWeight: 800,
    flexShrink: 0,
    boxShadow: '0 4px 12px rgba(249,115,22,0.4)',
  },

  name: {
    color: '#f1f5f9',
    fontSize: 14,
    fontWeight: 700,
  },

  company: {
    color: '#9ca3af',
    fontSize: 12,
    marginTop: 2,
  },
};
