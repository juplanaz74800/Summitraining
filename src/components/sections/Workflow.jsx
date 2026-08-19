'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle } from '@phosphor-icons/react/dist/ssr';

export default function Workflow() {
  const steps = [
    { number: 1, title: 'Appel découverte', text: "Un échange pour comprendre votre projet, votre niveau, vos objectifs. Et pour savoir si on est faits pour travailler ensemble." },
    { number: 2, title: "Choix de la formule", text: "Vous choisissez le niveau d'accompagnement qui correspond à vos besoins. On part de là, pas d'un catalogue." },
    { number: 3, title: 'Votre espace Nolio', text: "Création de votre espace centralisé. Vos données, vos séances, votre progression : tout au même endroit." },
    { number: 4, title: 'Profilage physiologique', text: <><Link href="/outils" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>Tests terrain (VMA, Puissance Critique)</Link> pour partir de données réelles. Pas d'estimations, pas de moyennes génériques.</> },
    { number: 5, title: 'Votre premier plan', text: 'Construit autour de vous. Ajusté dès la semaine suivante selon votre fatigue réelle (VFC/RPE).' },
    { number: 6, title: 'Communication continue', text: "Pas de questions sans réponse. Pas d'imprévus sans adaptation. Vous comprenez le pourquoi de chaque séance." },
    { number: 7, title: 'Ressources exclusives', text: "Séances croisées, tutoriels vidéo, stratégies nutritionnelles de course : tout ce qu'il faut pour progresser entre les séances." },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="section" 
      id="workflow"
    >
      <div className="container about-wrapper">
        <div className="about-content">
          <h2 className="section-title">De votre premier échange à <span className="text-accent">votre prochaine course</span></h2>
          <div className="workflow-steps" style={{ marginTop: '2rem' }}>
            {steps.map((step, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '1rem', marginBottom: idx !== steps.length - 1 ? '1.5rem' : 0 }}>
                <div style={{ background: 'var(--color-accent)', color: 'white', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 'bold' }}>
                  {step.number}
                </div>
                <p style={{ marginBottom: 0 }}>
                  <strong>{step.title}</strong> : {step.text}
                </p>
              </div>
            ))}
          </div>

          <div className="requirements-box" style={{ marginTop: '3rem', background: 'var(--color-surface-container)', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem', borderRadius: '0 8px 8px 0' }}>
            <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem', fontSize: '1.1rem' }} className="font-technical">3 outils indispensables pour démarrer</h4>
            <ul style={{ listStyleType: 'none', paddingLeft: 0, marginBottom: 0, color: 'var(--color-text-main)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><CheckCircle weight="thin" size={18} className="text-accent" /> Montre GPS connectée et/ou compteur</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><CheckCircle weight="thin" size={18} className="text-accent" /> Ceinture cardiaque</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><CheckCircle weight="thin" size={18} className="text-accent" /> Capteur de puissance (Stryd ou vélo) pour un suivi optimal</li>
            </ul>
          </div>
        </div>
        <div className="about-image">
          <Image 
            src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop" 
            alt="Planification et suivi sur Nolio" 
            className="coach-photo" 
            width={400} 
            height={500}
            style={{ objectPosition: 'center', objectFit: 'cover' }} 
            unoptimized
          />
        </div>
      </div>
    </motion.section>
  );
}
