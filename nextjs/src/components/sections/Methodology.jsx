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
          {/* Pillar 1: L'Humain au Centre */}
          <div className="card methodology-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop')" }}>
            <div className="card-content">
              <div className="card-header">
                <div className="card-icon">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m5 12 7-7 7 7" /><path d="M12 19V5" />
                  </svg>
                </div>
                <h3>L'Humain au Centre</h3>
              </div>
              <div className="card-body">
                <p>Chaque athlète est unique. L'empathie et l'écoute active sont les fondements de ma relation avec vous pour comprendre vos défis d'athlète et personnels.</p>
              </div>
            </div>
          </div>

          {/* Pillar 2: Individualisation Totale */}
          <div className="card methodology-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop')" }}>
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
                <h3>Individualisation Totale</h3>
              </div>
              <div className="card-body">
                <p>Un suivi 100% sur-mesure et réactif, ajusté chaque semaine pour s'adapter à votre évolution, votre forme du moment et vos imprévus quotidiens.</p>
              </div>
            </div>
          </div>

          {/* Pillar 3: Rigueur & Science */}
          <div className="card methodology-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571019615326-fa41db61eec6?q=80&w=800&auto=format&fit=crop')" }}>
            <div className="card-content">
              <div className="card-header">
                <div className="card-icon">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12h4l3-9 5 18 3-9h5" />
                  </svg>
                </div>
                <h3>Rigueur & Science</h3>
              </div>
              <div className="card-body">
                <p>Une pédagogie explicative basée sur l'analyse de données (biofeedback, puissance). Vous comprenez pourquoi vous réalisez chaque intervalle pour y adhérer pleinement.</p>
              </div>
            </div>
          </div>

          {/* Pillar 4: Expertise Terrain */}
          <div className="card methodology-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?q=80&w=800&auto=format&fit=crop')" }}>
            <div className="card-content">
              <div className="card-header">
                <div className="card-icon">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <h3>Expertise Terrain</h3>
              </div>
              <div className="card-body">
                <p>Des conseils pratiques éprouvés sur la stratégie de course (pacing), le choix du matériel spécifique et la gestion logistique de vos efforts.</p>
              </div>
            </div>
          </div>

          {/* Pillar 5: Relation de Confiance */}
          <div className="card methodology-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop')" }}>
            <div className="card-content">
              <div className="card-header">
                <div className="card-icon">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3>Relation de Confiance</h3>
              </div>
              <div className="card-body">
                <p>Une communication transparente et continue. Nous construisons une relation de binôme solide, essentielle pour maximiser votre potentiel lors des moments critiques.</p>
              </div>
            </div>
          </div>

          {/* Pillar 6: Performance 360° */}
          <div className="card methodology-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=800&auto=format&fit=crop')" }}>
            <div className="card-content">
              <div className="card-header">
                <div className="card-icon">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h3>Performance 360°</h3>
              </div>
              <div className="card-body">
                <p>Au-delà du plan, une approche globale intégrant des stratégies de nutrition, l'optimisation de la récupération et la prévention des blessures (PPG).</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
