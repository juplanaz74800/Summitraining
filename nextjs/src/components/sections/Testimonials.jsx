'use client';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      text: "Indiquez ici le témoignage de votre athlète. Par exemple : \"Julien m'a accompagné sur ma préparation UTMB. Sa précision sur le pacing et la nutrition a été la clé de ma réussite.\"",
      initial: "A1",
      name: "Prénom Nom",
      goal: "Objectif : Ultra-Trail"
    },
    {
      text: "Deuxième témoignage. Par exemple : \"La modélisation de ma Vitesse Critique m'a permis de passer sous les 3h au marathon sans jamais me sentir dans le rouge.\"",
      initial: "A2",
      name: "Prénom Nom",
      goal: "Objectif : Marathon"
    },
    {
      text: "Troisième témoignage. Par exemple : \"Grâce au suivi Spartan spécifique, j'ai pu intégrer le top 10 Elite sur ma dernière course.\"",
      initial: "A3",
      name: "Prénom Nom",
      goal: "Objectif : Spartan Elite"
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="section bg-alt" 
      id="testimonials"
    >
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Ils me font <span className="text-accent">Confiance</span></h2>
          <p className="section-subtitle">Retours d'expérience d'athlètes accompagnés vers leurs objectifs.</p>
        </div>

        <div className="methodology-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ fontSize: '2rem', color: 'var(--color-accent)', marginBottom: '1rem' }}>"</div>
              <p style={{ fontStyle: 'italic', flexGrow: 1, marginBottom: '1.5rem', color: 'var(--color-text-main)' }}>
                {t.text}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', background: 'var(--color-bg-dark)', borderRadius: '50%', border: '1px solid var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--color-accent)' }}>
                  {t.initial}
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1rem' }}>{t.name}</h4>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{t.goal}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
