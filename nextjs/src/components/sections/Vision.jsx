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
            <span className="highlight">PRÊT(E) POUR PLONGER DANS</span><br />
            <span className="highlight">L'UNIVERS COMPLET DU</span><br />
            <span className="highlight indent">TRAIL RUNNING ?</span>
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
            Je vous offre une vision holistique de l'entraînement pour vous aider à atteindre vos objectifs, quels que soient votre niveau et votre expérience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
