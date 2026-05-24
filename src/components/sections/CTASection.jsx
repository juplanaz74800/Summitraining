import Link from 'next/link';

export default function CTASection({ title, subtitle, primaryButtonText, secondaryButtonText }) {
  return (
    <section className="section" style={{ paddingTop: '2rem', paddingBottom: '6rem' }}>
      <div className="container">
        <div style={{ 
          background: 'var(--color-surface-container)', 
          borderRadius: '24px', 
          padding: '4rem 2rem', 
          textAlign: 'center',
          boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Background Decorative Element */}
          <div style={{ 
            position: 'absolute', 
            top: '-20%', 
            right: '-10%', 
            width: '300px', 
            height: '300px', 
            background: 'var(--color-primary)', 
            filter: 'blur(100px)', 
            opacity: 0.1,
            zIndex: 0
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ 
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', 
              marginBottom: '1.5rem', 
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-text-main)'
            }}>
              {title || "Prêt à atteindre vos sommets ?"}
            </h2>
            <p style={{ 
              color: 'var(--color-text-muted)', 
              fontSize: '1.15rem', 
              maxWidth: '700px', 
              margin: '0 auto 3rem' 
            }}>
              {subtitle || "Que vous prépariez un trail technique ou un marathon sur route, une planification millimétrée est la clé de votre succès."}
            </p>
            <div style={{ 
              display: 'flex', 
              gap: '1.5rem', 
              flexWrap: 'wrap', 
              justifyContent: 'center' 
            }}>
              <Link href="/#contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>
                {primaryButtonText || "Réserver un échange gratuit"}
              </Link>
              <Link href="/blog" className="btn btn-secondary" style={{ padding: '1rem 2.5rem' }}>
                {secondaryButtonText || "Lire les derniers conseils"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
