'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="site-footer">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', textAlign: 'center' }}>
        <div>
          <Image src="/img/logo.png" alt="Summitraining Logo" width={130} height={42} style={{ height: '42px', width: 'auto', margin: '0 auto' }} />
        </div>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
          Coaching Endurance &amp; Trail par Julien Planaz — Bassin Annécien &amp; Suisse Romande
        </p>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/mentions-legales" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', transition: 'color 0.2s' }} className="footer-link">
            Mentions Légales
          </Link>
          <Link href="/cgv" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', transition: 'color 0.2s' }} className="footer-link">
            CGV
          </Link>
        </div>
        <p style={{ color: 'rgba(156, 163, 175, 0.4)', fontSize: '0.8rem' }}>
          © {year} SUMMITRAINING
        </p>
      </div>
    </footer>
  );
}
