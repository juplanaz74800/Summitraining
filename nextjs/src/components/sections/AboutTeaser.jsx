'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutTeaser() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="section" 
      id="about" 
      style={{ padding: 'var(--space-xl) 0' }}
    >
      <div className="container about-wrapper" style={{ maxWidth: '900px', gap: 'var(--space-xl)' }}>
        <div className="about-image" style={{ flex: '0 0 250px' }}>
          <Image 
            src="/img/photo coach.jpg" 
            alt="Julien Planaz, Coach Sportif Endurance" 
            className="coach-photo" 
            width={350} 
            height={466}
            style={{ maxHeight: '350px', width: 'auto' }} 
          />
        </div>
        <div className="about-content">
          <h2 className="section-title">Le <span className="text-accent">Coach</span></h2>
          <h3>Julien Planaz</h3>
          <p className="subtitle text-accent" style={{ fontWeight: 600, fontSize: '1.1rem', marginTop: '-0.5rem', marginBottom: '1.5rem' }}>
            Coach Sportif Endurance | Expertise Scientifique & Terrain
          </p>
          <p>Originaire des Alpes, j'allie mon expertise du terrain à un double cursus universitaire en STAPS (Font-Romeu) et en Nutrition pour vous offrir un accompagnement d'exception.</p>
          <p>Mon approche ? Une vision globale où la gestion de la verticalité, du métabolisme et de la nutrition compte autant que la simple allure.</p>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/a-propos" className="btn btn-primary" style={{ textDecoration: 'none' }}>
              Découvrir mon parcours complet
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
