'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function Footer() {
   const [year, setYear] = useState(new Date().getFullYear());
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="site-footer">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', textAlign: 'center' }}>
         <div>
          <Image 
            src={mounted && (theme === 'light' || resolvedTheme === 'light') ? "/img/logo-light.png" : "/img/logo.png"} 
            alt="Summitraining Logo" 
            width={130} 
            height={42} 
            style={{ height: '42px', width: 'auto', margin: '0 auto' }} 
          />
        </div>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
          Coaching Endurance &amp; Trail par Julien Planaz | Bassin Annécien &amp; Suisse Romande
        </p>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/mentions-legales" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', transition: 'color 0.2s' }} className="footer-link">
            Mentions Légales
          </Link>
          <Link href="/cgv" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', transition: 'color 0.2s' }} className="footer-link">
            CGV
          </Link>
        </div>
        <p style={{ color: 'var(--color-text-muted)', opacity: 0.5, fontSize: '0.8rem' }} className="font-technical">
          © {year} SUMMITRAINING
        </p>
      </div>
    </footer>
  );
}
