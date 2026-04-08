'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Offers() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="section bg-alt" 
      id="offers"
    >
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Mes <span className="text-accent">Formules</span></h2>
          <p className="section-subtitle">Choisissez l'accompagnement qui correspond à votre niveau d'engagement.</p>
        </div>
        <div className="pricing-grid">
          
          <div className="offer-card">
            <div className="offer-header">
              <h3>Coaching Présentiel</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginTop: '5px' }}>Entraînement en mini-groupe</p>
              <div className="offer-price" style={{ marginBottom: '2rem' }}>Sur devis</div>
            </div>
            <div className="offer-action" style={{ marginTop: 'auto', paddingTop: '2rem' }}>
              <Link href="/#contact" className="btn btn-secondary btn-large" style={{ width: '100%', borderColor: 'rgba(255,255,255,0.2)' }}>
                Réserver ma place
              </Link>
            </div>
          </div>

          <div className="offer-card highlight" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', background: 'var(--color-accent)', color: 'white', padding: '4px 15px', borderRadius: '0 0 8px 8px', fontWeight: 'bold', fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Le plus demandé
            </div>
            <div className="offer-header" style={{ marginTop: '1rem' }}>
              <h3>Coaching Distanciel Premium</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginTop: '5px' }}>Suivi 100% individualisé 1to1</p>
              <div className="offer-price" style={{ marginBottom: '2rem' }}>120 €<span>/mois</span></div>
            </div>
            <div className="offer-action" style={{ marginTop: 'auto', paddingTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Link href="/#contact" className="btn btn-primary btn-large" style={{ width: '100%' }}>Prendre RDV téléphonique</Link>
              <Link href="/#contact" className="btn btn-secondary btn-large" style={{ width: '100%', borderColor: 'rgba(255,255,255,0.2)' }}>Contact par email</Link>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
