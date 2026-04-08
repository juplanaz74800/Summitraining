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
      className="section bg-alt" 
      id="calculator"
    >
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Outils & <span className="text-accent">Ressources</span></h2>
          <p className="section-subtitle">Testez par vous-même : découvrez mon Calculateur de Puissance Critique.</p>
        </div>
        <div className="calculator-teaser">
          <div className="calculator-content">
            <h3>Calculateur de Puissance & Vitesse Critique</h3>
            <p>J'ai développé cet outil pour vous permettre d'estimer vos propres zones d'entraînement (Allures et Puissance) à partir de vos récents chronos. Une première étape vers une pratique plus scientifique et précise.</p>
            <Link href="/outils" className="btn btn-primary btn-large mt-4">Tester le Calculateur</Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
