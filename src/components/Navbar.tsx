import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="glass" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000, height: 'var(--header-height)', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} onClick={() => setIsOpen(false)}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="logo"
            style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            <img src={`${import.meta.env.BASE_URL}logo.jpg`} alt="Digital Joy Logo" style={{ height: '45px', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.05)' }} />
            <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'Outfit' }}>
              (주)디지털조이
            </span>
          </motion.div>
        </a>

        {/* Mobile Menu Toggle */}
        <div style={{ display: 'none' }} className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        {/* Desktop Menu */}
        <div className={`desktop-menu ${isOpen ? 'active' : ''}`} style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#about" onClick={() => setIsOpen(false)} style={{ fontWeight: 500 }}>회사소개</a>
          <a href="#services" onClick={() => setIsOpen(false)} style={{ fontWeight: 500 }}>사업분야</a>
          <a href="#products" onClick={() => setIsOpen(false)} style={{ fontWeight: 500 }}>제품소개</a>
          <a href="#si-dev" onClick={() => setIsOpen(false)} style={{ fontWeight: 500 }}>SI개발/서비스</a>
          <a href="#saas" onClick={() => setIsOpen(false)} style={{ fontWeight: 500 }}>SaaS 솔루션</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="btn-primary">문의하기</a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: ${isOpen ? 'flex' : 'none'} !important;
            flex-direction: column;
            position: absolute;
            top: var(--header-height);
            left: 0;
            width: 100%;
            background: white;
            padding: 2rem;
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          }
          .mobile-toggle {
            display: flex !important;
            cursor: pointer;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
