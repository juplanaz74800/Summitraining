'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Radio, Mountain, Flame, Zap, User, Users, UserPlus, Map, Activity, Layers } from 'lucide-react';

export default function Offers({ variant = 'full' }) {
  const [presentialType, setPresentialType] = useState('solo');

  const coachingOffers = [
    {
      id: 'online-plus',
      title: 'Online +',
      subtitle: 'Suivi Premium à distance',
      hook: 'La science des données au service de votre progression. Analyse quotidienne et ajustements.',
      price: '130€',
      unit: '/mois',
      icon: <Zap size={24} />,
      accent: 'var(--color-primary)',
      features: ['Analyse quotidienne (VFC, charge)', 'Planification adaptative 7j/7', 'Contact illimité (WhatsApp)', 'Audit physiologique initial'],
      priority: 1
    },
    {
      id: 'hybride',
      title: 'Hybride',
      subtitle: "L'Expérience Sommet",
      hook: 'Le mix parfait : Expertise terrain (1 séance/mois) et programmation digitale pilotée par vos données.',
      price: '180€',
      unit: '/mois',
      icon: <Layers size={24} />,
      accent: 'var(--color-accent)',
      features: ['Suivi Online + inclus', '1 Séance terrain mensuelle', 'Correction technique vidéo', 'Optimisation matériel'],
      priority: 2
    },
    {
      id: 'solo-terrain',
      title: '1-to-1',
      subtitle: 'Séance Technique Individuelle',
      hook: 'Maîtrisez le geste juste. Séance terrain personnalisée pour l\'autonomie et la performance.',
      price: '70€',
      unit: '/séance',
      icon: <User size={24} />,
      features: ['Analyse biomécanique', 'Travail spécifique (côtes, descente)', 'Feedback immédiat'],
      priority: 3
    },
    {
      id: 'duo',
      title: 'Duo',
      subtitle: 'Coaching Présentiel Duo',
      hook: 'Progressez à deux. Correction technique et motivation partagée à tarif réduit.',
      price: '45€',
      unit: '/pers',
      icon: <UserPlus size={24} />,
      features: ['Objectif commun ou proche', 'Correction double', 'Motivation boostée'],
      priority: 3
    },
    {
      id: 'small-group',
      title: 'Small Group',
      subtitle: 'Entraînement Collectif',
      hook: 'L’émulation du groupe, l’expertise du coach. Préparez vos objectifs ensemble.',
      price: '25€',
      unit: '/pers',
      icon: <Users size={24} />,
      features: ['Dynamique de peloton', 'Séances intensité clés', 'Annecy & Genève'],
      priority: 3
    },
    {
      id: 'online-solo',
      title: 'Online Solo',
      subtitle: 'Plans d\'Entraînement',
      hook: 'Votre feuille de route vers le sommet. Programmes structurés pour objectifs spécifiques.',
      price: '45€',
      unit: '/plan',
      icon: <Map size={24} />,
      features: ['Plan structuré 8-12 semaines', 'Fiches techniques incluses', 'Autonomie totale'],
      priority: 4
    }
  ];

  const presentialOptions = {
    solo: coachingOffers.find(o => o.id === 'solo-terrain'),
    group: coachingOffers.find(o => o.id === 'small-group')
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
                coachingOffers.find(o => o.id === 'online-plus'),
                coachingOffers.find(o => o.id === 'solo-terrain'),
                coachingOffers.find(o => o.id === 'hybride')
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
                  }}>{service.subtitle}</span>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: i === 0 ? 'white' : 'var(--color-text-main)' }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: i === 0 ? 'rgba(255,255,255,0.7)' : 'var(--color-text-muted)', lineHeight: 1.6, flexGrow: 1 }}>
                    {service.hook}
                  </p>
                  <Link href="/offres" style={{
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
            De l'autonomie à la haute performance, trouvez votre structure.
          </p>
        </div>

        {/* Bento Grid Pricing */}
        <div className="pricing-grid-bento">

          {/* 1. MAIN CARD: ONLINE + (Large) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bento-card-large"
            style={{
              background: 'var(--color-surface-container-low)',
              borderRadius: 'var(--border-radius-lg)',
              padding: 'var(--space-xl)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '2px solid var(--color-primary)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ display: 'inline-block', background: 'rgba(0, 83, 208, 0.1)', color: 'var(--color-primary)', padding: '4px 12px', borderRadius: '50px', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1.5rem' }}>
                Suivi Premium & Expertise Scientifique
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <div style={{ color: 'var(--color-primary)' }}><Zap size={32} /></div>
                <h3 style={{ fontSize: '2.5rem', fontWeight: 900 }}>{coachingOffers[0].title}</h3>
              </div>
              <p style={{ color: 'var(--color-primary)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem' }}>
                {coachingOffers[0].subtitle}
              </p>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '2.5rem', maxWidth: '480px', fontSize: '1rem', fontStyle: 'italic', lineHeight: 1.6 }}>
                "{coachingOffers[0].hook}"
              </p>

              <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                {coachingOffers[0].features.map((feature, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', fontSize: '0.9rem' }}>
                    <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>✓</span>
                    <span style={{ color: 'var(--color-text-main)' }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--color-outline-variant)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div>
                <span style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--color-text-main)', letterSpacing: '-0.05em', fontFamily: 'var(--font-technical)' }}>130€</span>
                <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>/mois</span>
              </div>
              <Link href="/#contact" className="btn btn-primary" style={{ padding: '1.25rem 3.5rem' }}>
                Postuler au Lab
              </Link>
            </div>
          </motion.div>

          {/* 2. HYBRIDE (Medium) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bento-card-medium"
            style={{
              background: 'var(--color-surface-container-high)',
              borderRadius: 'var(--border-radius-lg)',
              padding: '2rem',
              border: '1px solid var(--color-outline-variant)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}><Layers size={28} /></div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{coachingOffers[1].title}</h3>
              <p style={{ color: 'var(--color-accent)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1rem' }}>{coachingOffers[1].subtitle}</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>{coachingOffers[1].hook}</p>
            </div>
            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 800 }}>{coachingOffers[1].price}<span style={{ fontSize: '0.8rem', opacity: 0.6 }}>{coachingOffers[1].unit}</span></span>
              <Link href="/#contact" style={{ color: 'var(--color-accent)', fontWeight: 700, fontSize: '0.8rem' }}>Détails →</Link>
            </div>
          </motion.div>

          {/* 3. LAB CAPACITY (Status) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bento-card-medium"
            style={{
              background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-container) 100%)',
              color: 'white',
              borderRadius: 'var(--border-radius-lg)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              boxShadow: '0 20px 40px rgba(0, 83, 208, 0.2)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h4 style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>Disponibilité Lab</h4>
              <span style={{ background: 'rgba(255,255,255,0.2)', padding: '2px 8px', borderRadius: '50px', fontSize: '0.6rem', fontWeight: 800 }}>LIMITÉ</span>
            </div>
            <div>
              <p style={{ fontSize: '2.5rem', fontWeight: 900, fontStyle: 'italic', lineHeight: 1 }}>80%</p>
              <p style={{ fontSize: '0.8rem', opacity: 0.9, marginTop: '0.4rem', fontWeight: 700 }}>Plus que 3 places</p>
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

          {/* 4. 1-to-1 (Small) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bento-card-small"
            style={{
              background: 'var(--color-surface-container-low)',
              borderRadius: 'var(--border-radius-lg)',
              padding: '1.5rem',
              border: '1px solid var(--color-outline-variant)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            <div style={{ color: 'var(--color-primary)' }}><User size={24} /></div>
            <h4 style={{ fontWeight: 800 }}>{coachingOffers[2].title}</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>{coachingOffers[2].hook}</p>
            <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 800 }}>{coachingOffers[2].price}<span style={{ fontSize: '0.7rem', opacity: 0.6 }}>{coachingOffers[2].unit}</span></span>
              <Link href="/#contact" className="text-accent" style={{ fontSize: '0.75rem', fontWeight: 700 }}>Réserver</Link>
            </div>
          </motion.div>

          {/* 5. DUO (Small) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bento-card-small"
            style={{
              background: 'var(--color-surface-container-low)',
              borderRadius: 'var(--border-radius-lg)',
              padding: '1.5rem',
              border: '1px solid var(--color-outline-variant)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            <div style={{ color: 'var(--color-primary)' }}><UserPlus size={24} /></div>
            <h4 style={{ fontWeight: 800 }}>{coachingOffers[3].title}</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>{coachingOffers[3].hook}</p>
            <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 800 }}>{coachingOffers[3].price}<span style={{ fontSize: '0.7rem', opacity: 0.6 }}>{coachingOffers[3].unit}</span></span>
              <Link href="/#contact" className="text-accent" style={{ fontSize: '0.75rem', fontWeight: 700 }}>Réserver</Link>
            </div>
          </motion.div>

          {/* 6. SMALL GROUP (Small) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bento-card-small"
            style={{
              background: 'var(--color-surface-container-low)',
              borderRadius: 'var(--border-radius-lg)',
              padding: '1.5rem',
              border: '1px solid var(--color-outline-variant)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            <div style={{ color: 'var(--color-primary)' }}><Users size={24} /></div>
            <h4 style={{ fontWeight: 800 }}>{coachingOffers[4].title}</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>{coachingOffers[4].hook}</p>
            <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 800 }}>{coachingOffers[4].price}<span style={{ fontSize: '0.7rem', opacity: 0.6 }}>{coachingOffers[4].unit}</span></span>
              <Link href="/#contact" className="text-accent" style={{ fontSize: '0.75rem', fontWeight: 700 }}>S'inscrire</Link>
            </div>
          </motion.div>

          {/* 7. ONLINE SOLO (Horizontal/Wide) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bento-card-wide"
            style={{
              background: 'var(--color-surface-container)',
              borderRadius: 'var(--border-radius-lg)',
              padding: '2rem 3rem',
              border: '1px solid var(--color-outline-variant)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '2rem',
              flexWrap: 'wrap'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ color: 'var(--color-primary)' }}><Map size={32} /></div>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{coachingOffers[5].title}</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>{coachingOffers[5].hook}</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 800 }}>{coachingOffers[5].price}</span>
                <span style={{ fontSize: '0.8rem', opacity: 0.6 }}> / plan</span>
              </div>
              <Link href="/#contact" className="btn btn-secondary">Explorer les plans</Link>
            </div>
          </motion.div>

        </div>


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
