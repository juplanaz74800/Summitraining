'use client';
import { motion } from 'framer-motion';

export default function Values() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="section values-section" 
      id="values"
    >
      <div className="values-container">
        <div className="values-images">
          <div className="val-img val-img-1" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541252874014-411a5416dd11?q=80&w=800&auto=format&fit=crop')" }}></div>
          <div className="val-img val-img-2" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1627447432854-e67c870ff0df?q=80&w=800&auto=format&fit=crop')" }}></div>
          <div className="val-img val-img-3" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571008887538-b36bb32f4571?q=80&w=800&auto=format&fit=crop')" }}></div>
          <div className="val-img val-img-4" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605330364372-b5eef73544eb?q=80&w=800&auto=format&fit=crop')" }}></div>
        </div>
        <div className="values-center-text">
          <h2 className="values-words">
            <span className="v-word">PARTAGE.</span>
            <span className="v-word">PASSION.</span>
            <span className="v-word">PERSÉVÉRANCE.</span>
            <span className="v-word">DÉPASSEMENT DE SOI.</span>
            <span className="v-word">RESPECT.</span>
          </h2>
        </div>
      </div>
    </motion.section>
  );
}
