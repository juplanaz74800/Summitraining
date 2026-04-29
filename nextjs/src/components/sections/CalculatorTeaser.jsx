'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CalculatorTeaser() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="section" 
      id="calculator"
    >
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Connaissez-vous vos vraies <span className="text-accent">zones d'entraînement ?</span></h2>
          <p className="section-subtitle">Beaucoup s'entraînent à la mauvaise intensité. Ce calculateur, basé sur vos chronos réels, vous révèle vos zones en 2 minutes.</p>
        </div>
        <div className="calculator-teaser card">
          <div className="calculator-content">
            <h3 className="font-technical">Calculateur de Puissance & Vitesse Critique</h3>
            <p>Cet outil estime vos zones d'entraînement réelles à partir de vos chronos récents. Pas d'estimation au doigt mouillé. Des données qui partent de vous, pour construire un entraînement qui a du sens.</p>
            <Link href="/outils" className="btn btn-primary btn-large" style={{ marginTop: '1.5rem' }}>Calculer mes zones gratuitement</Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
