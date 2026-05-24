'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ArticleLayout({ 
  children, 
  title, 
  date, 
  tag, 
  author, 
  readTime, 
  heroImage, 
  heroAlt,
  relatedPost // Object with { title, href, image, excerpt }
}) {
  return (
    <div style={{ paddingTop: '80px' }}>
      
      <article className="section" style={{ maxWidth: '900px', margin: '0 auto', paddingBottom: '3rem' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
              <span className="font-technical" style={{ color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>{tag}</span>
              <h1 className="section-title" style={{ marginTop: '0.5rem', marginBottom: '1rem', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>{title}</h1>
              <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                Par {author} • {date} • {readTime}
              </div>
            </div>

            {heroImage && (
              <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '3rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', border: '1px solid var(--color-outline)' }}>
                <Image src={heroImage} alt={heroAlt || title} width={1200} height={600} style={{ width: '100%', height: 'auto', display: 'block' }} priority unoptimized={heroImage.startsWith('http')} />
              </div>
            )}

            <div className="article-content" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-main)' }}>
              {children}
            </div>

            {/* Premium CTA Logic to avoid dead ends */}
            <div style={{ marginTop: '5rem', padding: '3rem', background: 'var(--color-surface-container-low)', borderRadius: '16px', textAlign: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '1rem' }}>Besoin d'un accompagnement sur-mesure ?</h3>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                Ne laissez rien au hasard dans votre préparation. Ensemble, optimisons votre potentiel avec une approche scientifique.
              </p>
              <Link href="/#contact" className="btn btn-primary">Parler de mon projet</Link>
            </div>

            {/* Related Article */}
            {relatedPost && (
              <div style={{ marginTop: '4rem' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', marginBottom: '1.5rem', fontSize: '1.2rem' }}>Continuer la lecture</h4>
                <Link href={relatedPost.href} style={{ 
                  display: 'flex', 
                  gap: '1.5rem', 
                  background: 'var(--color-surface-container)', 
                  padding: '1.25rem', 
                  borderRadius: '12px', 
                  textDecoration: 'none', 
                  color: 'inherit',
                  transition: 'transform 0.2s ease',
                  border: '1px solid transparent'
                }} className="hover:scale-[1.01] hover:border-accent">
                  {relatedPost.image && (
                    <div style={{ width: '120px', height: '80px', flexShrink: 0, borderRadius: '8px', overflow: 'hidden' }}>
                      <Image src={relatedPost.image} alt={relatedPost.title} width={120} height={80} style={{ width: '100%', height: '100%', objectFit: 'cover' }} unoptimized={relatedPost.image.startsWith('http')} />
                    </div>
                  )}
                  <div>
                    <h5 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>{relatedPost.title}</h5>
                    <p style={{ margin: '0.25rem 0 0', fontSize: '0.9rem', color: 'var(--color-text-muted)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              </div>
            )}

            <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--color-outline)' }}>
              <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: 'var(--color-text-muted)', transition: 'color 0.2s ease' }} className="hover:text-accent">
                ← Retour au blog
              </Link>
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  );
}
