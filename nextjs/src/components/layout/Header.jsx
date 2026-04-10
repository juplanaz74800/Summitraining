'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { href: '/#methodology', label: 'Méthode' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/trail', label: 'Trail' },
  { href: '/route', label: 'Route' },
  { href: '/outils', label: 'Outils' },
  { href: '/blog', label: 'Blog' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`} style={{ transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem' }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Image src="/img/logo.png" alt="Summitraining Logo" width={140} height={45} style={{ height: '45px', width: 'auto', objectFit: 'contain' }} priority />
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '2rem' }} className="hidden-mobile">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontWeight: 600,
                fontSize: '0.9rem',
                letterSpacing: '0.01em',
                textTransform: 'uppercase',
                color: (pathname === href || (href === '/a-propos' && pathname === '/a-propos')) ? 'var(--color-accent)' : 'var(--color-text-main)',
                transition: 'color 0.2s ease',
              }}
              className="nav-link font-technical"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Actions (Toggle + CTA) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <ThemeToggle />
          
          <Link href="/#contact" className="btn btn-primary hidden-mobile">Contact</Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            className="show-mobile"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-main)', padding: '0.5rem' }}
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: 'var(--color-bg)',
          opacity: 0.98,
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid var(--color-outline)',
          padding: '1.5rem 2rem 2rem',
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          zIndex: 1000
        }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{ fontWeight: 600, fontSize: '1.1rem', color: pathname === href ? 'var(--color-accent)' : 'var(--color-text-main)' }}
              >
                {label}
              </Link>
            ))}
            <Link href="/#contact" className="btn btn-primary" style={{ width: 'fit-content', marginTop: '0.5rem' }}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
