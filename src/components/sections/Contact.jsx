'use client';
import { motion } from 'framer-motion';

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
          <h2 className="section-title">L'aventure commence par <span className="text-accent">un échange.</span></h2>
          <p className="section-subtitle">Parlez-moi de votre projet. Je vous réponds rapidement et on définit ensemble si on peut avancer.</p>
        </div>
        <div className="contact-wrapper">
          <form className="contact-form" action="https://formspree.io/f/mqaevepy" method="POST">
            <div className="form-group">
              <label htmlFor="name">Nom / Prénom</label>
              <input type="text" id="name" name="name" required placeholder="Votre nom complet" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required placeholder="votre@email.com" />
            </div>
            <div className="form-group">
              <label htmlFor="sport">Discipline principale</label>
              <select id="sport" name="sport" required defaultValue="">
                <option value="" disabled>Choisissez votre sport</option>
                <option value="trail">Trail Running / Ultra-Trail</option>
                <option value="running">Course sur route (10k, Semi, Marathon)</option>
                <option value="other">Autre / Multisport</option>
              </select>
            </div>
            <div className="form-group">
              <label>Années de pratique</label>
              <div className="radio-group" style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500, fontSize: '0.95rem', cursor: 'pointer' }}>
                  <input type="radio" name="experience" value="<2" required /> Moins de 2 ans
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500, fontSize: '0.95rem', cursor: 'pointer' }}>
                  <input type="radio" name="experience" value="2-5" required /> 2 à 5 ans
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500, fontSize: '0.95rem', cursor: 'pointer' }}>
                  <input type="radio" name="experience" value="5+" required /> 5 ans et plus
                </label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Votre projet</label>
              <textarea id="message" name="message" rows="5" required placeholder="Mon prochain objectif est... Voici où j'en suis..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-large" style={{ width: '100%' }}>Envoyer ma candidature</button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
