'use client';
import { motion } from 'framer-motion';
import { Envelope, Clock, Phone } from '@phosphor-icons/react/dist/ssr';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="section"
      id="contact"
    >
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            L&apos;aventure commence par <span className="text-accent">un échange.</span>
          </h2>
          <p className="section-subtitle">
            Parlez-moi de votre projet. Je vous réponds rapidement et on définit ensemble si on peut avancer.
          </p>
        </div>

        <div className="contact-wrapper">
          {/* Infos de contact à gauche */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{
              background: 'var(--color-surface-container)',
              borderRadius: '16px',
              padding: '2rem',
              border: '1px solid var(--color-outline-variant)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                Pourquoi me contacter ?
              </h3>
              {[
                { icon: '🎯', title: 'Un objectif précis', desc: 'Trail, ultra, marathon — tu as une course en tête et tu veux y arriver préparé.' },
                { icon: '📊', title: 'Progresser intelligemment', desc: 'Tu t\'entraînes déjà mais stagne. On analyse tes données et on construit mieux.' },
                { icon: '🏔️', title: 'Découvrir la montagne', desc: 'Tu veux te lancer dans le trail et partir sur de bonnes bases dès le début.' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <strong style={{ fontSize: '0.95rem', color: 'var(--color-text-main)' }}>{item.title}</strong>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.25rem', lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              background: 'var(--color-surface-container-low)',
              borderRadius: '12px',
              padding: '1.5rem',
              border: '1px solid var(--color-outline-variant)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Clock weight="thin" size={18} className="text-accent" />
                <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                  Réponse sous <strong style={{ color: 'var(--color-text-main)' }}>24h</strong>
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Phone weight="thin" size={18} className="text-accent" />
                <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                  Premier appel de <strong style={{ color: 'var(--color-text-main)' }}>30 min gratuit</strong>
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Envelope weight="thin" size={18} className="text-accent" />
                <a
                  href="mailto:contact@summitraining.fr"
                  style={{ fontSize: '0.9rem', color: 'var(--color-accent)', textDecoration: 'none' }}
                >
                  contact@summitraining.fr
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire à droite */}
          <ContactForm />
        </div>
      </div>
    </motion.section>
  );
}
