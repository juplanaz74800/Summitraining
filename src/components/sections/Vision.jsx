'use client';
import { motion } from 'framer-motion';

export default function Vision() {
  return (
    <section className="section vision-section" id="vision">
      <div className="container vision-wrapper">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="vision-left"
        >
          <h2 className="vision-heading">
            <span className="highlight">UN COACHING QUI</span><br />
            <span className="highlight">PART DE VOUS.</span><br />
            <span className="highlight indent">PAS D'UN TEMPLATE.</span>
          </h2>
        </motion.div>
        
        <div className="vision-divider"></div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="vision-right"
        >
          <p>
            Chaque athlète est unique. Biologie, disponibilités, objectifs, contraintes : tout est pris en compte dès le premier échange. Pas de plan générique. Pas de promesses vagues. Une préparation calibrée à votre réalité, où que vous soyez.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
