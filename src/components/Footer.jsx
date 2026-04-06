
import { FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa';
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';

const navLinks = [
  { label: 'Home',    href: '#home' },
  { label: 'About',   href: '#about' },
  { label: 'Service', href: '#services' },
  { label: 'Catalog', href: '#catalog' },
  { label: 'Contact', href: '#contact' },
];
const socials = [
  { icon: <FaWhatsapp size={15}/>,  label: 'WhatsApp', href: 'https://wa.me/6285797805692' },
  { icon: <FaInstagram size={15}/>, label: 'Instagram', href: 'https://www.instagram.com/duaputrabungsu_official?igsh=ZGQ4c3dtNDh0aHY0' },
  { icon: <FaTiktok size={15}/>,  label: 'Tiktok',  href: 'https://www.tiktok.com/@cvduaputrabungsu?_r=1&_t=ZS-95JVYlXsSLF' },
];
const contactList = [
  { icon: <HiPhone size={13}/>,          text: '+62 857-9780-5692',                     href: 'tel:+6285797805692' },
  { icon: <HiMail size={13}/>,           text: 'duaputrabungsubyricky@gmail.com',               href: 'mailto:duaputrabungsubyricky@gmail.com' },
  { icon: <HiLocationMarker size={13}/>, text: 'Jl raya cirebon-bandung km.23, Ciwaringin Kabupaten Cirebon', href: 'https://maps.app.goo.gl/JgBtLawHfp7ji3J67' },
];

export default function Footer() {
  const go = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#050508', borderTop: '1px solid rgba(249,115,22,0.1)', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 200,
        background: 'radial-gradient(ellipse, rgba(249,115,22,0.06) 0%, transparent 70%)',
        filter: 'blur(40px)', pointerEvents: 'none',
      }} />

      <div className="container" style={{ padding: 'clamp(40px,5vw,52px) 24px 0', position: 'relative', zIndex: 1 }}>

        {/* Responsive footer grid: 2fr 1fr 1fr → stacks on mobile via .footer-grid */}
        <div className="footer-grid">

          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 9, flexShrink: 0,
                overflow: 'hidden',
              }}>
                <img
                  src="/images/logoutama.png"
                  alt="Logo Dua Putra Bungsu"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>Dua Putra Bungsu</div>
                <div style={{ color: '#f97316', fontSize: 11, fontWeight: 500 }}>Sewa Alat Konstruksi</div>
              </div>
            </div>
            <p style={{ color: '#1f2937', fontSize: 13, lineHeight: 1.8 }}>
              Penyedia jasa sewa alat berat konstruksi profesional. Anggota resmi GAPENSI dengan komitmen mutu dan pelayanan terbaik.
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{
                    width: 34, height: 34, borderRadius: 8,
                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#374151', textDecoration: 'none', transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#f97316'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#f97316'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = '#374151'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigasi */}
          <div>
            <div style={{ color: '#f97316', fontWeight: 700, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 18 }}>
              Navigasi
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={(e) => go(e, link.href)}
                    style={{ color: '#1f2937', fontSize: 13, textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.target.style.color = '#fb923c')}
                    onMouseLeave={(e) => (e.target.style.color = '#1f2937')}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <div style={{ color: '#f97316', fontWeight: 700, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 18 }}>
              Kontak
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {contactList.map((c) => (
                <li key={c.text} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <span style={{ color: '#f97316', marginTop: 2, flexShrink: 0 }}>{c.icon}</span>
                  <a href={c.href} style={{ color: '#1f2937', fontSize: 12, textDecoration: 'none', lineHeight: 1.5, fontWeight: 500, transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.target.style.color = '#9ca3af')}
                    onMouseLeave={(e) => (e.target.style.color = '#1f2937')}>
                    {c.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.04)', padding: '18px 0',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 12,
        }}>
          <p style={{ color: '#111827', fontSize: 12 }}>
            © {new Date().getFullYear()} Dua Putra Bungsu. All rights reserved.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            <span style={{ color: '#111827', fontSize: 12, fontWeight: 500 }}>Anggota Resmi GAPENSI</span>
          </div>
        </div>
      </div>

      {/* Mobile Footer override */}
      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
