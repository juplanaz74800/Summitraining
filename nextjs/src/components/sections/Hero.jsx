'use client';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <h1 className="hero-title">
          <span className="sr-only">Coach Sportif Trail et Course à pied Annecy</span>
          <span className="hero-animation-container text-accent">
            <span className="animated-words">
              <span>Engagement.</span>
              <span>Régularité.</span>
              <span>Adaptation.</span>
              <span>Optimisation.</span>
              <span aria-hidden="true">Engagement.</span>
            </span>
          </span>
          <br />
          Pour atteindre vos sommets.
        </h1>
        <p className="hero-subtitle">
          Un entraînement scientifique, 100% personnalisé et collaboratif pour le trail et la course à pied.
        </p>
        <div className="hero-cta">
          <Link href="/#contact" className="btn btn-primary btn-large">Réserver un échange gratuit</Link>
          <Link href="/#methodology" className="btn btn-secondary btn-large">Découvrir l'approche</Link>
        </div>
      </div>
      <div className="hero-background">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="/img/lv_0_20260226105119.mp4" type="video/mp4" />
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
