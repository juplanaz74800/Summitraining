'use client';
import { motion } from 'framer-motion';
import { 
  User, 
  Settings2, 
  Beaker, 
  Mountain, 
  ShieldCheck, 
  Globe 
} from 'lucide-react';

const pillars = [
  {
    icon: <User size={32} />,
    title: "Vous, pas votre profil Strava",
    text: "Un coaching qui part de qui vous êtes vraiment. Votre vie, vos contraintes, vos forces. L'écoute active et l'empathie ne sont pas des options : c'est la base de tout.",
    image: "/img/philosophy/human.png"
  },
  {
    icon: <Settings2 size={32} />,
    title: "Ajusté chaque semaine. Sans exception.",
    text: "Votre plan évolue avec vous. Fatigue, imprévus, pic de forme : rien n'est figé. Un suivi réactif qui s'adapte à votre réalité, pas l'inverse.",
    image: "/img/philosophy/tailored.png"
  },
  {
    icon: <Beaker size={32} />,
    title: "Vous comprenez pourquoi. Toujours.",
    text: "Chaque séance a une raison d'être. Je vous explique la logique derrière chaque intervalle, chaque bloc de récupération. Vous progressez mieux quand vous comprenez ce que vous faites.",
    image: "/img/philosophy/science.png"
  },
  {
    icon: <Mountain size={32} />,
    title: "Le terrain, je le connais.",
    text: "Pacing en dénivelé, gestion de l'effort sur 10h, stratégie de course et choix de matériel : des conseils issus d'années de pratique en conditions réelles.",
    image: "/img/philosophy/terrain.png"
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Un binôme. Pas un prestataire.",
    text: "Pas de questions sans réponse. Pas d'imprévus sans adaptation. Notre relation repose sur la confiance et la transparence : les deux seules choses qui font vraiment progresser.",
    image: "/img/philosophy/partnership.png"
  },
  {
    icon: <Globe size={32} />,
    title: "L'entraînement est la moitié du travail.",
    text: "Nutrition, sommeil, récupération, préparation physique : tout est intégré. Parce que la performance se construit aussi en dehors des séances.",
    image: "/img/philosophy/holistic.png"
  }
];

export default function Methodology() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="section bg-alt" 
      id="methodology"
    >
      <div className="container">
        <div className="section-header" style={{ textAlign: 'left', marginLeft: '0', maxWidth: '600px' }}>
          <h2 className="section-title">Ce qui fait <span className="text-accent">la différence</span></h2>
          <p className="section-subtitle">Pas une méthode. Un engagement.</p>
        </div>
        
        <div className="methodology-grid-interactive">
          {pillars.map((pillar, idx) => (
            <motion.div 
              key={idx}
              className="pillar-card"
              whileHover="hover"
              initial="initial"
              variants={{
                hover: { scale: 1.02, boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }
              }}
              style={{
                backgroundImage: `url('${pillar.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '16px',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '220px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                border: '1px solid rgba(255,255,255,0.05)'
              }}
            >
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.4))',
                  zIndex: 1
                }} 
              />
              
              <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '1.5rem' }}>
                <motion.div 
                  variants={{
                    initial: { y: 20 },
                    hover: { y: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div style={{ color: 'white', marginBottom: '0.5rem', display: 'flex', justifyContent: 'center' }}>
                    {pillar.icon}
                  </div>
                  <h3 style={{ 
                    fontSize: '1.1rem', 
                    fontWeight: 700, 
                    textTransform: 'uppercase', 
                    letterSpacing: '1px',
                    margin: 0,
                    color: 'white'
                  }}>
                    {pillar.title}
                  </h3>
                </motion.div>

                <motion.div
                  variants={{
                    initial: { opacity: 0, height: 0, marginTop: 0 },
                    hover: { opacity: 1, height: 'auto', marginTop: 15 }
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: 'hidden' }}
                >
                  <p style={{ 
                    fontSize: '0.9rem', 
                    color: 'rgba(255, 255, 255, 0.8)', 
                    lineHeight: 1.5,
                    margin: 0
                  }}>
                    {pillar.text}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .methodology-grid-interactive {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 992px) {
          .methodology-grid-interactive {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .methodology-grid-interactive {
            grid-template-columns: 1fr;
          }
          .pillar-card {
            min-height: 180px !important;
          }
        }
      `}</style>
    </motion.section>
  );
}
