'use client';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <div className="hero-title" style={{ color: 'white' }}>
          <span className="hero-animation-container text-accent" aria-hidden="true">
            <span className="animated-words">
              <span>Précision</span>
              <span>Structure</span>
              <span>Progression</span>
              <span>Résultats</span>
              <span>Précision</span>
            </span>
          </span>
          <br />
          <h1 style={{ display: 'inline', font: 'inherit', margin: 0, padding: 0, color: 'inherit', letterSpacing: 'inherit', textTransform: 'inherit' }}>
            <span className="sr-only">Coach sportif trail et course à pied à Annecy et à distance. </span>
            Votre préparation, construite sur des données réelles.
          </h1>
        </div>
        <p className="hero-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>
          Un coaching 100% individualisé en trail et course sur route. Basé sur votre physiologie. Ajusté chaque semaine. Aucun template.
        </p>
        <div className="hero-cta">
          <Link href="/#contact" className="btn btn-primary btn-large">Réserver un appel gratuit</Link>
          <Link href="/#methodology" className="btn btn-secondary btn-large">Découvrir la méthode</Link>
        </div>
      </div>
      <div className="hero-background">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/img/hero-poster.jpg"
          className="hero-video"
        >
          <source src="/img/hero-video.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo.
        </video>
        <div className="hero-overlay"></div>
      </div>
      <Link href="/#methodology" className="scroll-indicator" aria-label="Défiler vers le bas">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </Link>
    </section>
  );
}
