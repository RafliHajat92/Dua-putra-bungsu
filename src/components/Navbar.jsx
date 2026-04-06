import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';


const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Service', href: '#services' },
  { label: 'Catalog', href: '#catalog' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      transition: 'background 0.35s, border-color 0.35s, box-shadow 0.35s',
      background: scrolled ? 'rgba(8,8,15,0.88)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(249,115,22,0.12)' : '1px solid transparent',
      boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.5)' : 'none',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>

        {/* Logo */}
        <a href="#home" onClick={(e) => go(e, '#home')}
          style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            width: 42, height: 42, borderRadius: 10,
            overflow: 'hidden',
            flexShrink: 0,
          }}>
            <img
              src="/images/logoutama.png"
              alt="Logo Dua Putra Bungsu"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 15, lineHeight: 1.2 }}>Dua Putra Bungsu</div>
            <div style={{ color: '#fb923c', fontSize: 11, fontWeight: 500 }}>Sewa Alat Konstruksi</div>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: 4 }}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={(e) => go(e, link.href)}
              style={{
                padding: '8px 16px', color: '#9ca3af', fontWeight: 500, fontSize: 14,
                textDecoration: 'none', borderRadius: 8,
                transition: 'color 0.2s, background 0.2s',
              }}
              onMouseEnter={(e) => { e.target.style.color = '#fb923c'; e.target.style.background = 'rgba(249,115,22,0.08)'; }}
              onMouseLeave={(e) => { e.target.style.color = '#9ca3af'; e.target.style.background = 'transparent'; }}>
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={(e) => go(e, '#contact')}
            className="btn-primary" style={{ marginLeft: 12, padding: '9px 22px', fontSize: 13 }}>
            Get Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden"
          style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer', padding: 6 }}>
          {isOpen ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div style={{
        overflow: 'hidden', transition: 'max-height 0.3s ease, opacity 0.3s ease',
        maxHeight: isOpen ? 360 : 0, opacity: isOpen ? 1 : 0,
      }} className="md:hidden">
        <div style={{
          background: 'rgba(8,8,15,0.98)', backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(249,115,22,0.12)', padding: '12px 16px 16px',
        }}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={(e) => go(e, link.href)}
              style={{
                display: 'block', padding: '11px 16px', color: '#9ca3af',
                fontWeight: 500, fontSize: 14, textDecoration: 'none', borderRadius: 8,
              }}>
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={(e) => go(e, '#contact')}
            className="btn-primary" style={{ display: 'block', textAlign: 'center', marginTop: 8 }}>
            Get Quote
          </a>
        </div>
      </div>
    </nav>
  );
}
