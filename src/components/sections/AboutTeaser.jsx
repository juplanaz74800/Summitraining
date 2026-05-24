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
      className="section bg-alt" 
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
            Coach Sportif | Expert en Physiologie de l'Effort | Annecy & International
          </p>
          <p>La montagne m'a appris à lire l'effort. Font-Romeu et la Licence STAPS m'ont appris à le mesurer. Depuis, je traduis la science en plans que vous pouvez réellement suivre, et que vous comprenez.</p>
          <p>Ma vision : un partenariat actif. Je ne vous donne pas un plan de 10 semaines et j'attends le résultat. Je suis là chaque semaine, à chaque doute, à chaque imprévu.</p>
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
