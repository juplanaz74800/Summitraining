'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Radio, Mountain, Flame, Zap } from 'lucide-react';

export default function Offers({ variant = 'full' }) {
  const [presentialType, setPresentialType] = useState('solo');

  const presentialOptions = {
    solo: {
      title: 'Solo Performance',
      price: '70€',
      unit: '/séance',
      features: [
        'Analyse technique millimétrée (foulée/posture)',
        'Individualisation adaptative en direct',
        'Échange privilégié (stratégie, nutrition, psychologie)',
        'Sécurité maximale et identification fatigue'
      ],
      description: "Coaching 1-to-1 : L'expertise haute couture pour briser vos barrières."
    },
    group: {
      title: 'Mini-Groupe',
      price: '25€',
      unit: '/pers',
      features: [
        'Émulation et dépassement collectif (VMA, seuil, côtes)',
        "Dynamique sociale et communauté d'athlètes",
        "Ratio Qualité/Prix optimal pour l'accès à l'expertise",
        "Gestion de l'adversité et de l'allure en peloton"
      ],
      description: "L'énergie du groupe au service de votre progression individuelle."
    }
  };

  const comparisonData = [
    { feature: 'Programmation Dynamique', remote: true, inPerson: true },
    { feature: 'Feedback Biomécanique', remote: false, inPerson: true },
    { feature: 'Intégration Capteurs/Data', remote: true, inPerson: true },
    { feature: 'Audit Stratégique Initial', remote: true, inPerson: true },
    { feature: "Gestion de l'adversité (Peloton)", remote: false, inPerson: true },
  ];

  const isTeaser = variant === 'teaser';

  // ─────────────────────────────────────────────
  // TEASER VARIANT — Nouvelle structure éditoriale
  // ─────────────────────────────────────────────
  if (isTeaser) {
    return (
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="section"
        id="offers"
        style={{ overflow: 'hidden' }}
      >
        <div className="container">

          {/* ── PARTIE 1 : Ce qui freine l'athlète ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '4rem',
              alignItems: 'center',
              marginBottom: 'var(--space-xl)',
              paddingBottom: 'var(--space-xl)',
              borderBottom: '1px solid var(--color-outline-variant)'
            }}
          >
            {/* Label + Titre */}
            <div>
              <span style={{
                display: 'inline-block',
                color: 'var(--color-primary)',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontSize: '0.75rem',
                marginBottom: '1.5rem',
                fontFamily: 'var(--font-technical)'
              }}>
                Le constat
              </span>
              <h2 style={{
                fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                lineHeight: 1.1,
                marginBottom: '1.5rem'
              }}>
                S'entraîner dur ne suffit pas.{' '}
                <span style={{ color: 'var(--color-primary)', fontStyle: 'italic' }}>S'entraîner juste, si.</span>
              </h2>
              <p style={{
                fontSize: '1.1rem',
                fontWeight: 600,
                color: 'var(--color-text-main)',
                lineHeight: 1.5,
                marginBottom: '2rem',
                borderLeft: '3px solid var(--color-primary)',
                paddingLeft: '1.25rem'
              }}>
                La volonté ne manque jamais. C'est la structure qui fait défaut.
              </p>
              <Link href="/offres" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                Voir les formules <ArrowRight size={18} />
              </Link>
            </div>

            {/* Texte éditorial */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                "Beaucoup d'athlètes s'entraînent trop fort sur les séances faciles et pas assez sur les séances clés. Résultat : fatigue chronique, stagnation et blessures à répétition. Pas par manque de motivation. Par manque de direction.",
                "On accumule des kilomètres sans savoir pourquoi. On suit des plans génériques qui ne tiennent pas compte de votre biologie, votre emploi du temps ou vos objectifs réels.",
                "Ce n'est pas une question de talent. C'est une question d'architecture. Un plan calibré sur vos vraies données change tout.",
                "C'est exactement ce que Summitraining propose : une structure cohérente, une vision experte, et un suivi qui s'adapte à vous : pas l'inverse."
              ].map((text, i) => (
                <p key={i} style={{ color: 'var(--color-text-muted)', lineHeight: 1.75, fontSize: '0.95rem' }}>
                  {text}
                </p>
              ))}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                marginTop: '0.5rem',
                padding: '1.5rem',
                background: 'var(--color-surface-container)',
                borderRadius: 'var(--border-radius-lg)',
                border: '1px solid var(--color-outline-variant)'
              }}>
                <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-text-main)' }}>
                  <ArrowRight size={16} className="text-accent" /> Vous voulez progresser ? On construit la structure pour que ça arrive.
                </p>
                <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-text-main)' }}>
                  Vous manquez de temps ? On l'optimise. Chaque séance compte.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── PARTIE 2 : Les 3 services ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ marginBottom: 'var(--space-xl)', paddingBottom: 'var(--space-xl)', borderBottom: '1px solid var(--color-outline-variant)' }}
          >
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span style={{
                display: 'inline-block',
                color: 'var(--color-primary)',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontSize: '0.75rem',
                marginBottom: '1rem',
                fontFamily: 'var(--font-technical)'
              }}>Les services</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900, letterSpacing: '-0.03em' }}>
                Trois façons de travailler. Une seule exigence.
              </h2>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                {
                  icon: <Radio size={32} />,
                  tag: 'Suivi 100% Individualisé',
                  title: 'À Distance',
                  tagline: 'Partout en France et dans le monde.',
                  desc: "Plan sur mesure basé sur vos données réelles (Stryd, FC). Ajusté chaque semaine selon votre fatigue. Aucun template.",
                  link: '/offres'
                },
                {
                  icon: <Mountain size={32} />,
                  tag: 'Coaching Terrain',
                  title: 'Présentiel Solo',
                  tagline: "Annecy, Haute-Savoie & Genève.",
                  desc: "Analyse biomécanique en direct. Feedback immédiat sur foulée, posture et technique. Le coaching le plus précis.",
                  link: '/offres'
                },
                {
                  icon: <Flame size={32} />,
                  tag: 'Séances Collectives',
                  title: 'Mini-Groupe',
                  tagline: "L'énergie du groupe, l'exigence individuelle.",
                  desc: "VMA, seuil, côtes en petit groupe. La dynamique collective pour repousser vos limites. Annecy & Genève.",
                  link: '/offres'
                }
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                  style={{
                    background: i === 0 ? 'var(--color-primary)' : 'var(--color-surface-container-low)',
                    color: i === 0 ? 'white' : 'var(--color-text-main)',
                    borderRadius: 'var(--border-radius-lg)',
                    padding: '2rem',
                    border: '1px solid var(--color-outline-variant)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                  whileHover={{ y: -4, boxShadow: '0 12px 30px rgba(0,0,0,0.15)' }}
                >
                  <div style={{ color: i === 0 ? 'white' : 'var(--color-primary)' }}>{service.icon}</div>
                  <span style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    color: i === 0 ? 'rgba(255,255,255,0.6)' : 'var(--color-primary)',
                    fontFamily: 'var(--font-technical)'
                  }}>{service.tag}</span>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: i === 0 ? 'white' : 'var(--color-text-main)' }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: i === 0 ? 'rgba(255,255,255,0.7)' : 'var(--color-primary)', fontWeight: 600 }}>
                    {service.tagline}
                  </p>
                  <p style={{ fontSize: '0.9rem', color: i === 0 ? 'rgba(255,255,255,0.7)' : 'var(--color-text-muted)', lineHeight: 1.6, flexGrow: 1 }}>
                    {service.desc}
                  </p>
                  <Link href={service.link} style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: i === 0 ? 'white' : 'var(--color-primary)',
                    textDecoration: 'none',
                    marginTop: 'auto'
                  }}>
                    Voir les détails <span>→</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── PARTIE 3 : L'approche scientifique ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
              background: 'var(--color-surface-container)',
              borderRadius: 'var(--border-radius-lg)',
              padding: '3rem',
              border: '1px solid var(--color-outline-variant)'
            }}>
              <div>
                <span style={{
                  display: 'inline-block',
                  color: 'var(--color-primary)',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  fontSize: '0.75rem',
                  marginBottom: '1.5rem',
                  fontFamily: 'var(--font-technical)'
                }}>La méthode</span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                  Votre <span style={{ color: 'var(--color-primary)', fontStyle: 'italic' }}>profil réel</span>, pas une estimation
                </h2>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.75, marginBottom: '2rem' }}>
                  Chaque athlète a une biologie unique. On identifie votre VMA, votre Puissance Critique et vos zones réelles via des tests terrain calibrés. Pas de moyennes génériques. Votre plan part de vous.
                </p>
                <Link href="/offres" className="btn btn-primary">
                  Voir l'offre complète
                </Link>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { step: '01', label: 'Appel découverte', desc: "On comprend votre projet, vos objectifs, vos contraintes. Gratuit, sans engagement." },
                  { step: '02', label: 'Tests terrain', desc: "VMA, Puissance Critique : vos vraies zones, pas des estimations." },
                  { step: '03', label: 'Plan ajusté chaque semaine', desc: "Fatigue, imprévus, progression : rien n'est figé. On s'adapte." },
                ].map((item) => (
                  <div key={item.step} style={{
                    display: 'flex',
                    gap: '1.5rem',
                    alignItems: 'flex-start',
                    padding: '1.25rem',
                    background: 'var(--color-surface-container-low)',
                    borderRadius: 'var(--border-radius)',
                    border: '1px solid var(--color-outline-variant)'
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-technical)',
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      color: 'var(--color-primary)',
                      opacity: 0.6,
                      minWidth: '28px',
                      paddingTop: '2px'
                    }}>{item.step}</span>
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.95rem', marginBottom: '0.3rem' }}>{item.label}</strong>
                      <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </motion.section>
    );
  }

  // ─────────────────────────────────────────────
  // FULL VARIANT — Page dédiée /offres
  // ─────────────────────────────────────────────
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="section"
      id="offers"
      style={{ overflow: 'hidden' }}
    >
      <div className="container">
        <div className="section-header" style={{ marginBottom: 'var(--space-xl)' }}>
          <span className="font-technical text-accent" style={{ fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem', display: 'block', fontSize: '0.85rem' }}>
            Accompagnement & Performance
          </span>
          <h2 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, letterSpacing: '-0.04em' }}>
            Summit <span className="text-accent" style={{ fontStyle: 'italic' }}>Lab</span>
          </h2>
          <p className="section-subtitle" style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
            Un suivi haute précision pour ceux qui veulent arrêter de s'entraîner au hasard.
          </p>
        </div>

        {/* Bento Grid Pricing */}
        <div className="pricing-grid-bento">

          {/* Main Focus Card: Distance Lab */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="offer-card-bento main-card"
            style={{
              background: 'var(--color-surface-container-low)',
              borderRadius: 'var(--border-radius-lg)',
              padding: 'var(--space-xl)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid var(--color-outline-variant)',
              minHeight: '750px'
            }}
          >
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ display: 'inline-block', background: 'rgba(0, 83, 208, 0.1)', color: 'var(--color-primary)', padding: '4px 12px', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1.5rem' }}>
                Suivi Expert 100% Individualisé
              </div>
              <h3 style={{ fontSize: '2.25rem', marginBottom: '0.5rem' }}>Le Lab à Distance</h3>
              <p style={{ color: 'var(--color-primary)', fontSize: '0.9rem', fontWeight: 700, marginBottom: '1rem' }}>
                "La science du sport au service de votre autonomie."
              </p>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2.5rem', maxWidth: '480px', fontSize: '0.95rem', fontStyle: 'italic', lineHeight: 1.6 }}>
                Pas de template. Pas de plan figé. Un coaching où l'analyse de vos données rencontre une planification adaptative chaque semaine.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                {[
                  { title: 'Analyse & Architecture initiale', desc: 'Audit complet de votre historique, vos contraintes et vos objectifs pour construire une base solide.' },
                  { title: 'Votre profil physiologique réel', desc: 'Détermination de vos zones (VMA, Puissance Critique) via tests terrain. Pas d\'estimations théoriques.' },
                  { title: 'Suivi & Ajustement Hebdomadaire', desc: 'Votre plan évolue chaque semaine selon votre fatigue réelle (VFC), votre agenda et vos ressentis.' },
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <span className="text-accent" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>○</span>
                    <div>
                      <strong style={{ display: 'block', fontSize: '1rem', color: 'var(--color-text-main)' }}>{item.title}</strong>
                      <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.5, display: 'block', marginTop: '4px' }}>{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid var(--color-outline-variant)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <span style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--color-text-main)', letterSpacing: '-0.05em', fontFamily: 'var(--font-technical)' }}>130€</span>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>/mois</span>
              </div>
              <Link href="/#contact" className="btn btn-primary" style={{ padding: '1.25rem 3rem' }}>
                Rejoindre le Lab
              </Link>
            </div>
          </motion.div>

          {/* Side Cards */}
          <div className="side-cards" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>

            {/* Présentiel Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                background: 'var(--color-surface-container-high)',
                color: 'var(--color-text-main)',
                borderRadius: 'var(--border-radius-lg)',
                padding: 'var(--space-lg)',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid var(--color-outline-variant)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text-main)' }}>Présentiel</h3>
                  <div style={{ display: 'flex', background: 'rgba(255,255,255,0.1)', padding: '2px', borderRadius: '50px' }}>
                    {['solo', 'group'].map((type) => (
                      <button
                        key={type}
                        onClick={() => setPresentialType(type)}
                        style={{
                          padding: '6px 14px',
                          borderRadius: '50px',
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          background: presentialType === type ? 'var(--color-primary)' : 'transparent',
                          color: 'white',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.3s'
                        }}
                      >{type === 'solo' ? 'SOLO' : 'GROUPE'}</button>
                    ))}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={presentialType}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 style={{ color: 'var(--color-primary)', fontSize: '1rem', marginBottom: '0.75rem', fontWeight: 700 }}>
                      {presentialOptions[presentialType].title}
                    </h4>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                      {presentialOptions[presentialType].description}
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                      {presentialOptions[presentialType].features.map((feature, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                          <span style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: '2px' }}>●</span>
                          <span style={{ color: 'var(--color-text-main)' }}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  <span style={{ fontSize: '2rem', fontWeight: 800, color: 'white', fontStyle: 'italic' }}>
                    {presentialOptions[presentialType].price}
                  </span>
                  <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
                    {presentialOptions[presentialType].unit}
                  </span>
                </div>
                <Link href="/#contact" className="btn" style={{ width: '100%', background: 'white', color: 'var(--color-text-main)', fontSize: '0.85rem', fontWeight: 700 }}>
                  Réserver ma session
                </Link>
              </div>
            </motion.div>

            {/* Lab Capacity Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{
                background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-container) 100%)',
                color: 'white',
                borderRadius: 'var(--border-radius-lg)',
                padding: 'var(--space-lg)',
                position: 'relative',
                boxShadow: '0 20px 40px rgba(0, 83, 208, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h4 style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px', opacity: 0.9 }}>Disponibilité Lab</h4>
                <span style={{ background: 'rgba(255,255,255,0.2)', padding: '2px 8px', borderRadius: '50px', fontSize: '0.6rem', fontWeight: 800 }}>LIMITÉ</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p style={{ fontSize: '2.5rem', fontWeight: 900, fontStyle: 'italic', lineHeight: 1 }}>80%</p>
                  <p style={{ fontSize: '0.75rem', opacity: 0.9, marginTop: '0.4rem', fontWeight: 700 }}>Plus que 3 places</p>
                </div>
                <div style={{ opacity: 0.2, color: 'white' }}><Zap size={40} strokeWidth={1.5} /></div>
              </div>
              <div style={{ marginTop: '1rem', height: '6px', width: '100%', background: 'rgba(255,255,255,0.2)', borderRadius: '50px', overflow: 'hidden' }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '80%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  style={{ height: '100%', background: 'white', borderRadius: '50px' }}
                />
              </div>
            </motion.div>

          </div>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ marginTop: 'var(--space-xl)', background: 'var(--color-surface-container-low)', borderRadius: 'var(--border-radius-lg)', padding: 'var(--space-xl)' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem', fontFamily: 'var(--font-technical)' }}>Au cœur de l'Écosystème</h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Comparaison technique des différentes méthodes d'accompagnement.</p>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 120px 120px', padding: '1rem 1.25rem', marginBottom: '0.5rem' }}>
              <div />
              <div style={{ textAlign: 'center', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', opacity: 0.6 }}>À distance</div>
              <div style={{ textAlign: 'center', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', opacity: 0.6 }}>Présentiel</div>
            </div>
            {comparisonData.map((item, idx) => (
              <div key={idx} style={{
                display: 'grid',
                gridTemplateColumns: '1fr 120px 120px',
                padding: '1.25rem',
                borderBottom: idx === comparisonData.length - 1 ? 'none' : '1px solid var(--color-outline-variant)',
                alignItems: 'center',
                background: idx % 2 === 0 ? 'rgba(0,0,0,0.02)' : 'transparent',
                borderRadius: '8px'
              }}>
                <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{item.feature}</span>
                <div style={{ textAlign: 'center', color: item.remote ? 'var(--color-primary)' : 'var(--color-text-muted)', opacity: item.remote ? 1 : 0.2 }}>
                  {item.remote ? '✓' : '✕'}
                </div>
                <div style={{ textAlign: 'center', color: item.inPerson ? 'var(--color-primary)' : 'var(--color-text-muted)', opacity: item.inPerson ? 1 : 0.2 }}>
                  {item.inPerson ? '✓' : '✕'}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          style={{
            marginTop: 'var(--space-xl)',
            padding: '4rem 2rem',
            borderRadius: 'var(--border-radius-lg)',
            background: 'var(--color-surface-container-high)',
            color: 'var(--color-text-main)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h3 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, marginBottom: '1.5rem', letterSpacing: '-0.02em', color: 'white' }}>L'aventure commence ici.</h3>
            <p style={{ fontSize: '1.1rem', opacity: 0.8, marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
              Le nombre de places est limité pour garantir la qualité du suivi et la réactivité du binôme.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/#contact" className="btn btn-primary" style={{ padding: '1.25rem 3rem' }}>Réserver un appel découverte</Link>
              <Link href="/#contact" className="btn" style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '1.25rem 3rem' }}>Poser une question</Link>
            </div>
          </div>
          <div style={{ position: 'absolute', top: '-50%', right: '-10%', width: '500px', height: '500px', background: 'var(--color-primary)', opacity: 0.1, filter: 'blur(100px)', borderRadius: '50%' }} />
        </motion.div>

      </div>
    </motion.section>
  );
}
