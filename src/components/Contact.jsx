import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';
import { FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa';
import { useInView } from '../hooks/useInView';

const contactItems = [
  { icon: <HiPhone size={18}/>,         label:'Telepon', value:'+62 857-9780-5692',                     href:'tel:+6285797805692',               color:'#22c55e' },
  { icon: <HiMail size={18}/>,          label:'Email',   value:'duaputrabungsubyricky@gmail.com',               href:'mailto:duaputrabungsubyricky@gmail.com',    color:'#f97316' },
  { icon: <HiLocationMarker size={18}/>, label:'Alamat',  value:'Jl raya cirebon-bandung km.23, Ciwaringin Kabupaten Cirebon', href:'https://maps.app.goo.gl/JgBtLawHfp7ji3J67',        color:'#fb923c' },
];

const socials = [
  { icon: <FaWhatsapp size={16}/>,  label:'WhatsApp', href:'https://wa.me/6285797805692', hov:'#22c55e' },
  { icon: <FaInstagram size={16}/>, label:'Instagram', href:'https://www.instagram.com/duaputrabungsu_official?igsh=ZGQ4c3dtNDh0aHY0',                           hov:'#e1306c' },
  { icon: <FaTiktok size={16}/>,  label:'Tiktok',  href:'https://www.tiktok.com/@cvduaputrabungsu?_r=1&_t=ZS-95JVYlXsSLF',                           hov:'#4c2169ff' },
];

export default function Contact() {
  const [hRef, hVis] = useInView();
  const [lRef, lVis] = useInView();
  const [rRef, rVis] = useInView();

  return (
    <section id="contact" className="section" style={{ background: '#08080f', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', bottom: '-20%', left: '50%', transform: 'translateX(-50%)',
        width: 700, height: 400,
        background: 'radial-gradient(ellipse, rgba(249,115,22,0.09) 0%, transparent 65%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div ref={hRef} className={`reveal section-header ${hVis ? 'visible' : ''}`}
          style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="badge" style={{ marginBottom: 16 }}>Kontak</div>
          <h2 style={{ fontSize: 'clamp(26px,4vw,40px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: 12 }}>
            Let's <span className="gradient-text">Connect</span> With Us
          </h2>
          <p style={{ color: '#4b5563', fontSize: 15, maxWidth: 460, margin: '0 auto', lineHeight: 1.75 }}>
            Siap memulai proyek Anda? Hubungi kami sekarang dan dapatkan penawaran terbaik.
          </p>
        </div>

        {/* Two-col */}
        <div className="two-col">

          {/* Left */}
          <div ref={lRef} className={`reveal-left ${lVis ? 'visible' : ''}`}
            style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 8 }}>Hubungi Kami</h3>
              <p style={{ color: '#4b5563', fontSize: 14, lineHeight: 1.8 }}>
                Tim kami siap melayani Anda setiap hari, termasuk hari libur.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {contactItems.map((item, i) => (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                  className="glass card"
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: 14, padding: '14px 16px',
                    textDecoration: 'none', borderRadius: 12, border: `1px solid ${item.color}18`,
                    opacity: lVis ? 1 : 0,
                    transform: lVis ? 'none' : 'translateX(-14px)',
                    transition: `opacity 0.45s ease ${i * 90}ms, transform 0.45s ease ${i * 90}ms`,
                  }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 9, flexShrink: 0,
                    background: `${item.color}14`, color: item.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ color: '#374151', fontSize: 11, fontWeight: 500, marginBottom: 3 }}>{item.label}</div>
                    <div style={{ color: '#e5e7eb', fontSize: 13, fontWeight: 600 }}>{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div>
              <p style={{ color: '#374151', fontSize: 12, fontWeight: 600, marginBottom: 12,
                textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Ikuti Kami
              </p>
              <div style={{ display: 'flex', gap: 10 }}>
                {socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    style={{
                      width: 38, height: 38, borderRadius: 9, textDecoration: 'none',
                      background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#4b5563', transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = s.hov; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = '#4b5563'; e.currentTarget.style.transform = 'none'; }}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Google Maps */}
          <div ref={rRef} className={`reveal-right ${rVis ? 'visible' : ''}`}
            style={{ position: 'relative' }}>

            {/* Glow accent */}
            <div style={{
              position: 'absolute', inset: -2,
              borderRadius: 20,
              background: 'linear-gradient(145deg, rgba(249,115,22,0.5) 0%, rgba(234,88,12,0.2) 50%, rgba(249,115,22,0.05) 100%)',
              filter: 'blur(1px)',
              zIndex: 0,
            }} />

            {/* Map container */}
            <div style={{
              position: 'relative',
              borderRadius: 18,
              overflow: 'hidden',
              border: '1px solid rgba(249,115,22,0.2)',
              boxShadow: '0 20px 60px rgba(249,115,22,0.15), 0 4px 20px rgba(0,0,0,0.6)',
              zIndex: 1,
            }}>
              {/* Header bar */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '12px 16px',
                background: 'rgba(13,13,24,0.95)',
                borderBottom: '1px solid rgba(249,115,22,0.12)',
              }}>
                <HiLocationMarker size={16} color="#f97316" />
                <span style={{ color: '#e5e7eb', fontSize: 13, fontWeight: 600 }}>Lokasi Kami</span>
                <a
                  href="https://maps.app.goo.gl/KNzPtPtgPzZm5V237"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    marginLeft: 'auto',
                    color: '#f97316',
                    fontSize: 12,
                    fontWeight: 600,
                    textDecoration: 'none',
                    padding: '4px 10px',
                    borderRadius: 6,
                    background: 'rgba(249,115,22,0.1)',
                    border: '1px solid rgba(249,115,22,0.2)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(249,115,22,0.2)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(249,115,22,0.1)'; }}
                >
                  Buka Maps ↗
                </a>
              </div>

              {/* Iframe Google Maps */}
              <iframe
                src="https://www.google.com/maps?q=Jl+raya+cirebon-bandung+km.23,+Ciwaringin+Kabupaten+Cirebon&output=embed"
                title="Lokasi Dua Putra Bungsu"
                width="100%"
                height="360"
                style={{ display: 'block', border: 'none' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />

              {/* Footer bar */}
              <div style={{
                padding: '10px 16px',
                background: 'rgba(13,13,24,0.95)',
                borderTop: '1px solid rgba(249,115,22,0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e' }} />
                <span style={{ color: '#4b5563', fontSize: 12 }}>
                  Jl. Raya Cirebon-Bandung KM.23, Ciwaringin, Kab. Cirebon
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
