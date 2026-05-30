import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Catalog from './components/Catalog';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Sequence: 
    // 1. Show logo and wait 1.8s
    // 2. Trigger fade out state (fade = true)
    // 3. Unmount preloader after fade transition finishes (0.8s later)
    const t1 = setTimeout(() => setFade(true), 1800);
    const t2 = setTimeout(() => setLoading(false), 2600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900" style={{ position: 'relative' }}>
      
      {/* ── PRELOADER ────────────────────────────────────────── */}
      {loading && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 99999,
          background: '#08080f',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: fade ? 0 : 1,
          transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          pointerEvents: fade ? 'none' : 'auto',
        }}>
          {/* Logo with subtle zoom & fade out */}
          <img 
            src="/images/logoutama.png" 
            alt="Dua Putra Bungsu Logo"
            style={{
              width: 220,
              objectFit: 'contain',
              opacity: fade ? 0 : 1,
              transform: fade ? 'scale(1.15)' : 'scale(1)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
              filter: 'drop-shadow(0 0 40px rgba(249,115,22,0.15))'
            }}
          />
        </div>
      )}

      {/* ── MAIN CONTENT ─────────────────────────────────────── */}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Catalog />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
