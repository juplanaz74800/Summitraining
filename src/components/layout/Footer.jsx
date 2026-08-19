'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { InstagramLogo, LinkedinLogo, FacebookLogo } from '@phosphor-icons/react/dist/ssr';
import { StravaLogo } from '@/components/icons/StravaLogo';

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
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', borderRight: '1px solid var(--color-outline-variant)', paddingRight: '2rem' }}>
            <a href="https://www.instagram.com/julien_planaz/" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="Instagram">
              <InstagramLogo weight="thin" size={24} />
            </a>
            <a href="https://www.strava.com/athletes/4270306" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="Strava">
              <StravaLogo weight="thin" size={24} />
            </a>
            <a href="https://www.linkedin.com/in/julien-planaz-53407b112/" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="LinkedIn">
              <LinkedinLogo weight="thin" size={24} />
            </a>
            <a href="https://www.facebook.com/Julienplanazcoachsportif" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="Facebook">
              <FacebookLogo weight="thin" size={24} />
            </a>
          </div>
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
