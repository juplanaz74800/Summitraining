'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ArticleLayout({ children, title, date, tag, author, readTime, heroImage, heroAlt }) {
  return (
    <article className="section" style={{ paddingTop: '100px', maxWidth: '900px', margin: '0 auto', paddingBottom: '5rem' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
            <span style={{ color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px' }}>{tag}</span>
            <h1 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '1rem', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>{title}</h1>
            <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
              Par {author} • {date} • {readTime}
            </div>
          </div>

          {heroImage && (
            <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '3rem', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <Image src={heroImage} alt={heroAlt || title} width={1200} height={600} style={{ width: '100%', height: 'auto', display: 'block' }} priority unoptimized={heroImage.startsWith('http')} />
            </div>
          )}

          <div className="article-content" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-main)' }}>
            {children}
          </div>

          <div style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--color-text-muted)', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-accent)'} onMouseLeave={(e) => e.target.style.color = 'var(--color-text-muted)'}>
              ← Retour au blog
            </Link>
          </div>
        </motion.div>
      </div>
    </article>
  );
}
