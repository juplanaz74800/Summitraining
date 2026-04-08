'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Workflow() {
  const steps = [
    { number: 1, title: 'Analyse & Échange initial', text: 'un premier contact téléphonique pour comprendre votre passé sportif, vos contraintes et vos ambitions.' },
    { number: 2, title: "Choix de l'accompagnement", text: "sélection de la formule la plus adaptée à votre niveau d'engagement." },
    { number: 3, title: 'Ouverture de votre espace Nolio', text: 'création de votre compte professionnel gratuit pour centraliser toutes vos données de performance.' },
    { number: 4, title: 'Profilage physiologique', text: <>réalisation de <Link href="/outils" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>tests terrain (VAM, Puissance Critique)</Link> pour déterminer scientifiquement vos zones d'entraînement réelles.</> },
    { number: 5, title: 'Programmation sur-mesure', text: 'début de votre préparation 100% individualisée, ajustée chaque semaine selon votre fatigue (VFC/RPE).' },
    { number: 6, title: 'Partenariat & Ajustement', text: 'communication continue avec votre coach pour comprendre le "pourquoi" de chaque séance.' },
    { number: 7, title: 'Masterclass Permanente', text: "accès exclusif d'une banque de données pointue (séances croisées natation, tutoriels vidéos, stratégies nutritionnelles de course)." },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="section bg-alt" 
      id="workflow"
    >
      <div className="container about-wrapper">
        <div className="about-content">
          <h2 className="section-title">Comment ça <span className="text-accent">fonctionne ?</span></h2>
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

          <div className="requirements-box" style={{ marginTop: '3rem', background: 'rgba(0, 136, 255, 0.05)', borderLeft: '4px solid var(--color-accent)', padding: '1.5rem', borderRadius: '0 8px 8px 0' }}>
            <h4 style={{ color: 'var(--color-accent)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Outils obligatoires pour commencer un suivi</h4>
            <ul style={{ listStyleType: 'none', paddingLeft: 0, marginBottom: 0, color: 'var(--color-text-main)' }}>
              <li><i className="icon-check">✓</i> Montre et/ou compteur connecté</li>
              <li><i className="icon-check">✓</i> Ceinture cardiaque</li>
              <li><i className="icon-check">✓</i> Capteur de puissance sur le vélo (pour les cyclistes)</li>
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
