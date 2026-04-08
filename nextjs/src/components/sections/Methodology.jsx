'use client';
import { motion } from 'framer-motion';

export default function Methodology() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="section" 
      id="methodology"
    >
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Ma philosophie d'<span className="text-accent">entraînement</span></h2>
          <p className="section-subtitle">L'alliance parfaite entre la rigueur physique et l'écoute de votre corps.</p>
        </div>
        <div className="methodology-grid">
          
          <div className="card methodology-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop')" }}>
            <div className="card-content">
              <div className="card-header">
                <div className="card-icon">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3>Basé sur l'humain</h3>
              </div>
              <div className="card-body">
                <p>Chaque athlète est unique, avec ses propres objectifs, aspirations et défis, c'est pourquoi je mets un point d'honneur à placer l'humain au cœur de mon approche.</p>
              </div>
            </div>
          </div>

          <div className="card methodology-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop')" }}>
            <div className="card-content">
              <div className="card-header">
                <div className="card-icon">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3>100% individualisé</h3>
              </div>
              <div className="card-body">
                <p>Le suivi est 100% individualisé pour s'adapter aux objectifs, au niveau, à l'expérience et aux contraintes personnelles, familiales et professionnelles de chaque athlète.</p>
              </div>
            </div>
          </div>

          <div className="card methodology-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop')" }}>
            <div className="card-content">
              <div className="card-header">
                <div className="card-icon">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18.8 5.2c-2.4-2.4-6.3-2.4-8.7 0L8 7c-2.4 2.4-2.4 6.3 0 8.7l2.1 2.1c2.4 2.4 6.3 2.4 8.7 0s2.4-6.3 0-8.7L16.7 7C14.3 4.6 10.4 4.6 8 7" />
                  </svg>
                </div>
                <h3>Conseils</h3>
              </div>
              <div className="card-body">
                <p>Vous bénéficiez de conseils à chaque étape de votre préparation : choix des objectifs, stratégie de course, nutrition à l'entraînement, en course et au quotidien, matériel, aéro...</p>
              </div>
            </div>
          </div>

          <div className="card methodology-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop')" }}>
            <div className="card-content">
              <div className="card-header">
                <div className="card-icon">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 3 4 7l4 4" />
                    <path d="M4 7h16" />
                    <path d="m16 21 4-4-4-4" />
                    <path d="M20 17H4" />
                  </svg>
                </div>
                <h3>Interaction & écoute</h3>
              </div>
              <div className="card-body">
                <p>Nous construirons une relation de confiance et d'échange pour vous faire bénéficier d'un accompagnement personnalisé qui va bien au-delà d'un simple plan d'entraînement.</p>
              </div>
            </div>
          </div>

          <div className="card methodology-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=800&auto=format&fit=crop')" }}>
            <div className="card-content">
              <div className="card-header">
                <div className="card-icon">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
                  </svg>
                </div>
                <h3>Communication</h3>
              </div>
              <div className="card-body">
                <p>La communication avec l'athlète est continue afin d'individualiser et d'adapter au maximum sa préparation en fonction des imprévus et répondre à toutes ses questions.</p>
              </div>
            </div>
          </div>

          <div className="card methodology-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop')" }}>
            <div className="card-content">
              <div className="card-header">
                <div className="card-icon">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                  </svg>
                </div>
                <h3>Réactivité</h3>
              </div>
              <div className="card-body">
                <p>Je m'engage à répondre à vos questions aussi rapidement que possible. Ma réactivité et ma flexibilité font partie de mon ADN pour vous garantir le meilleur suivi.</p>
              </div>
            </div>
          </div>

          <div className="card methodology-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507676184212-d0330a151f8b?q=80&w=800&auto=format&fit=crop')" }}>
            <div className="card-content">
              <div className="card-header">
                <div className="card-icon">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m5 12 7-7 7 7" />
                    <path d="M12 19V5" />
                  </svg>
                </div>
                <h3>Empathie</h3>
              </div>
              <div className="card-body">
                <p>Mon empathie me permet de construire une véritable relation coach-athlète pour répondre de manière adéquate aux besoins de chaque athlète.</p>
              </div>
            </div>
          </div>

          <div className="card methodology-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop')" }}>
            <div className="card-content">
              <div className="card-header">
                <div className="card-icon">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <h3>Confiance & adhésion</h3>
              </div>
              <div className="card-body">
                <p>La confiance envers votre coach est essentielle et primordiale pour adhérer pleinement à votre projet sportif et maximiser votre potentiel de performance.</p>
              </div>
            </div>
          </div>

          <div className="card methodology-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=800&auto=format&fit=crop')" }}>
            <div className="card-content">
              <div className="card-header">
                <div className="card-icon">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                  </svg>
                </div>
                <h3>Pédagogie</h3>
              </div>
              <div className="card-body">
                <p>J'explique en détail chaque étape de la préparation afin que les athlètes comprennent ce qu'ils réalisent et adhèrent au projet, piliers de la progression.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
