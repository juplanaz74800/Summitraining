'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';

const navLinks = [
  { href: '/#methodology', label: 'Méthode' },
  { href: '/offres', label: 'Tarifs' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/trail', label: 'Trail' },
  { href: '/route', label: 'Route' },
  { href: '/outils', label: 'Outils' },
  { href: '/blog', label: 'Blog' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
   const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header
      id="site-header"
      className={scrolled ? 'scrolled' : ''}
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: scrolled ? 'var(--color-surface-container-low)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-outline-variant)' : 'none'
      }}
    >
      <div className="container" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: scrolled ? '0.4rem 2rem' : '0.6rem 2rem',
        transition: 'padding 0.3s ease'
      }}>
        {/* Logo */}
         <Link href="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <Image
            src={mounted && (theme === 'light' || resolvedTheme === 'light') ? "/img/logo-light.png" : "/img/logo.png"}
            alt="Summitraining Logo"
            width={120}
            height={38}
            style={{ height: scrolled ? '28px' : '32px', width: 'auto', objectFit: 'contain', transition: 'height 0.3s ease' }}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }} className="hidden-mobile">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href || (href !== '/' && pathname.startsWith(href.split('#')[0]) && href.split('#')[0] !== '/');
            return (
              <Link
                key={href}
                href={href}
                style={{
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: isActive ? 'var(--color-accent)' : 'var(--color-text-main)',
                  transition: 'color 0.2s ease',
                  position: 'relative',
                  paddingBottom: '2px',
                }}
                className="nav-link font-technical"
              >
                {label}
                {isActive && (
                  <span style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'var(--color-accent)',
                    borderRadius: '2px',
                  }} />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Actions (Toggle + CTA + Hamburger) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <ThemeToggle />

          <Link href="/contact" className="btn btn-primary hidden-mobile" style={{ padding: '0.4rem 1.2rem', fontSize: '0.75rem' }}>
            Contact
          </Link>

          {/* Hamburger Button - mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            className="show-mobile"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-text-main)',
              padding: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              transition: 'background 0.2s ease',
            }}
          >
            <div style={{ width: '22px', height: '16px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <span style={{
                display: 'block', height: '2px', width: '100%', background: 'currentColor', borderRadius: '2px',
                transformOrigin: 'center',
                transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
                transition: 'transform 0.3s ease',
              }} />
              <span style={{
                display: 'block', height: '2px', width: menuOpen ? '0%' : '100%', background: 'currentColor', borderRadius: '2px',
                transition: 'width 0.3s ease',
                opacity: menuOpen ? 0 : 1,
              }} />
              <span style={{
                display: 'block', height: '2px', width: '100%', background: 'currentColor', borderRadius: '2px',
                transformOrigin: 'center',
                transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
                transition: 'transform 0.3s ease',
              }} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                top: '64px',
                background: 'rgba(0,0,0,0.5)',
                backdropFilter: 'blur(4px)',
                zIndex: 990,
              }}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                background: 'var(--color-surface-container)',
                backdropFilter: 'blur(24px)',
                borderTop: '1px solid var(--color-outline-variant)',
                borderBottom: '1px solid var(--color-outline-variant)',
                zIndex: 999,
                overflow: 'hidden',
              }}
            >
              <nav style={{ padding: '1.5rem 2rem 2rem', display: 'flex', flexDirection: 'column', gap: '0' }}>
                {navLinks.map(({ href, label }, i) => {
                  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href.split('#')[0]) && href.split('#')[0] !== '/');
                  return (
                    <motion.div
                      key={href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.04, duration: 0.3 }}
                    >
                      <Link
                        href={href}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '1rem 0',
                          fontWeight: 600,
                          fontSize: '1rem',
                          color: isActive ? 'var(--color-accent)' : 'var(--color-text-main)',
                          borderBottom: '1px solid var(--color-outline-variant)',
                          textDecoration: 'none',
                          transition: 'color 0.2s ease',
                          fontFamily: 'var(--font-heading)',
                        }}
                      >
                        <span>{label}</span>
                        <ArrowRight weight="thin" size={16} style={{ opacity: 0.3 }} />
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.3 }}
                  style={{ paddingTop: '1.5rem' }}
                >
                  <Link
                    href="/contact"
                    className="btn btn-primary"
                    style={{ width: '100%', textAlign: 'center', padding: '1rem' }}
                  >
                    Déposer une candidature
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
