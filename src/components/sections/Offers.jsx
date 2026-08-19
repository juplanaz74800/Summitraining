'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, X, ArrowRight, Lightning, Stack, MapTrifold, User, Users, UserPlus, Phone, MapPin } from '@phosphor-icons/react/dist/ssr';

// ─────────────────────────────────────────────
// DATA — Formules Distance
// ─────────────────────────────────────────────

const distancePlans = [
  {
    id: 'starter',
    icon: <MapTrifold weight="thin" size={22} />,
    badge: null,
    name: 'Plan Starter',
    tagline: 'Plan sur mesure, autonomie totale',
    description: 'Idéal si tu sais te gérer seul et as besoin d\'une feuille de route précise basée sur ta physiologie réelle.',
    price: '150',
    unit: 'paiement unique',
    cta: 'Commander mon plan',
    highlight: false,
    features: [
      { label: 'Évaluation du profil', included: true },
      { label: 'Zones d\'entraînements (VMA, VC)', included: true },
      { label: 'Planification sur Intervals.icu', included: true },
      { label: 'Échanges plateforme sous 24h', included: false },
      { label: 'Ajustement du plan', included: false },
      { label: 'Analyse post-entraînement', included: false },
      { label: 'Communication WhatsApp (8h-19h)', included: false },
      { label: 'Point en visio mensuel', included: false },
      { label: 'Optimisation nutrition', included: false },
      { label: 'Optimisation pacing de course', included: false },
      { label: 'Suivi HRV quotidien', included: false },
    ],
  },
  {
    id: 'intermediaire',
    icon: <Stack weight="thin" size={22} />,
    badge: 'Populaire',
    name: 'Suivi Intermédiaire',
    tagline: 'Un plan + un regard expert chaque semaine',
    description: 'La formule idéale pour progresser avec un filet de sécurité : ton plan évolue avec toi, tes questions trouvent une réponse.',
    price: '99',
    unit: '/mois',
    cta: 'Démarrer le suivi',
    highlight: true,
    features: [
      { label: 'Évaluation du profil', included: true },
      { label: 'Zones d\'entraînements (VMA, VC)', included: true },
      { label: 'Planification sur Intervals.icu', included: true },
      { label: 'Échanges plateforme sous 24h', included: true },
      { label: 'Ajustement du plan', included: true },
      { label: 'Analyse post-entraînement', included: true },
      { label: 'Communication WhatsApp (8h-19h)', included: false },
      { label: 'Point en visio mensuel', included: false },
      { label: 'Optimisation nutrition', included: false },
      { label: 'Optimisation pacing de course', included: false },
      { label: 'Suivi HRV quotidien', included: false },
    ],
  },
  {
    id: 'all-inclusive',
    icon: <Lightning weight="thin" size={22} />,
    badge: 'Prise en charge complète',
    name: 'All Inclusive',
    tagline: 'Délègue tout. Concentre-toi sur courir.',
    description: 'Analyse quotidienne, visio mensuelle, nutrition, données Stryd/GPS — tu n\'as qu\'à suivre le plan. Je m\'occupe du reste.',
    price: '140',
    unit: '/mois',
    cta: 'Réserver ma place',
    highlight: false,
    features: [
      { label: 'Évaluation du profil', included: true },
      { label: 'Zones d\'entraînements (VMA, VC)', included: true },
      { label: 'Planification sur Intervals.icu', included: true },
      { label: 'Échanges plateforme sous 24h', included: true },
      { label: 'Ajustement du plan', included: true },
      { label: 'Analyse post-entraînement', included: true },
      { label: 'Communication WhatsApp (8h-19h)', included: true },
      { label: 'Point en visio mensuel', included: true },
      { label: 'Optimisation nutrition', included: true },
      { label: 'Optimisation pacing de course', included: true },
      { label: 'Suivi HRV quotidien', included: true },
    ],
  },
];

// ─────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────

function PricingCard({ plan, index }) {
  const cardStyle = {
    position: 'relative',
    borderRadius: '16px',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    border: plan.highlight
      ? '2px solid var(--color-accent)'
      : '1px solid var(--color-outline-variant)',
    background: plan.highlight
      ? 'var(--color-surface-container-high)'
      : 'var(--color-surface-container)',
    boxShadow: plan.highlight
      ? '0 8px 32px rgba(0,136,255,0.12)'
      : 'none',
    flex: 1,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={cardStyle}
    >
      {/* Badge */}
      {plan.badge && (
        <div style={{
          position: 'absolute',
          top: '-14px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: plan.highlight ? 'var(--color-accent)' : 'var(--color-surface-container-highest)',
          color: plan.highlight ? 'white' : 'var(--color-text-main)',
          padding: '4px 16px',
          borderRadius: '50px',
          fontSize: '0.7rem',
          fontWeight: 800,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          whiteSpace: 'nowrap',
          border: plan.highlight ? 'none' : '1px solid var(--color-outline-variant)',
        }}>
          {plan.badge}
        </div>
      )}

      {/* Header */}
      <div>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '44px',
          height: '44px',
          borderRadius: '10px',
          background: plan.highlight ? 'var(--color-accent)' : 'var(--color-surface-container-high)',
          color: plan.highlight ? 'white' : 'var(--color-accent)',
          marginBottom: '1rem',
        }}>
          {plan.icon}
        </div>
        <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.25rem' }}>
          {plan.name}
        </h3>
        <p style={{ fontSize: '0.8rem', color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {plan.tagline}
        </p>
      </div>

      {/* Prix */}
      <div style={{ paddingBottom: '1.5rem', borderBottom: '1px solid var(--color-outline-variant)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
          <span style={{ fontSize: '3rem', fontWeight: 900, letterSpacing: '-0.04em', color: 'var(--color-text-main)' }}>
            {plan.price}€
          </span>
          <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>
            {plan.unit}
          </span>
        </div>
        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.5rem', lineHeight: 1.5 }}>
          {plan.description}
        </p>
      </div>

      {/* Features */}
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', flexGrow: 1 }}>
        {plan.features.map((feature, i) => (
          <li key={i} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontSize: '0.875rem',
            color: feature.included ? 'var(--color-text-main)' : 'var(--color-text-muted)',
            opacity: feature.included ? 1 : 0.5,
          }}>
            {feature.included ? (
              <Check weight="thin" size={16} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
            ) : (
              <X weight="thin" size={16} style={{ color: 'var(--color-outline)', flexShrink: 0 }} />
            )}
            {feature.label}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href="/contact"
        className={plan.highlight ? 'btn btn-primary' : 'btn btn-secondary'}
        style={{ textAlign: 'center', marginTop: 'auto' }}
      >
        {plan.cta}
      </Link>
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────

export default function Offers({ variant = 'full' }) {

  // ── TEASER — Homepage (inchangé structurellement) ──
  if (variant === 'teaser') {
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

          {/* ── Édito ── */}
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
                S&apos;entraîner dur ne suffit pas.{' '}
                <span style={{ color: 'var(--color-primary)', fontStyle: 'italic' }}>S&apos;entraîner juste, si.</span>
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
                La volonté ne manque jamais. C&apos;est la structure qui fait défaut.
              </p>
              <Link href="/offres" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                Voir les formules <ArrowRight weight="thin" size={18} />
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                "Beaucoup d'athlètes s'entraînent trop fort sur les séances faciles et pas assez sur les séances clés. Résultat : fatigue chronique, stagnation et blessures à répétition.",
                "On accumule des kilomètres sans savoir pourquoi. On suit des plans génériques qui ne tiennent pas compte de votre biologie, votre emploi du temps ou vos objectifs réels.",
                "Ce n'est pas une question de talent. C'est une question d'architecture. Un plan calibré sur vos vraies données change tout.",
              ].map((text, i) => (
                <p key={i} style={{ color: 'var(--color-text-muted)', lineHeight: 1.75, fontSize: '0.95rem' }}>
                  {text}
                </p>
              ))}
            </div>
          </motion.div>

          {/* ── Aperçu 3 formules ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 900, letterSpacing: '-0.03em' }}>
                3 formules à distance. 1 seul niveau d&apos;exigence.
              </h2>
              <p style={{ color: 'var(--color-text-muted)', marginTop: '1rem' }}>Du plan autonome au suivi intégral — selon ton profil et ton objectif.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {distancePlans.map((plan, i) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  style={{
                    background: plan.highlight ? 'var(--color-accent)' : 'var(--color-surface-container)',
                    borderRadius: '16px',
                    padding: '2rem',
                    border: plan.highlight ? 'none' : '1px solid var(--color-outline-variant)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  <div style={{ color: plan.highlight ? 'white' : 'var(--color-accent)' }}>{plan.icon}</div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: plan.highlight ? 'white' : 'var(--color-text-main)' }}>{plan.name}</h3>
                    <p style={{ fontSize: '1.5rem', fontWeight: 900, color: plan.highlight ? 'white' : 'var(--color-text-main)', marginTop: '0.25rem' }}>
                      {plan.price}€ <span style={{ fontSize: '0.8rem', fontWeight: 400, opacity: 0.7 }}>{plan.unit}</span>
                    </p>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: plan.highlight ? 'rgba(255,255,255,0.8)' : 'var(--color-text-muted)', lineHeight: 1.5, flexGrow: 1 }}>
                    {plan.description}
                  </p>
                  <Link
                    href="/offres"
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: plan.highlight ? 'white' : 'var(--color-accent)',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}
                  >
                    Voir les détails <ArrowRight weight="thin" size={14} />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <Link href="/offres" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                Comparer toutes les formules <ArrowRight weight="thin" size={18} />
              </Link>
            </div>
          </motion.div>

        </div>
      </motion.section>
    );
  }

  // ── FULL — Page /offres ──
  return (
    <section className="section" id="offers" style={{ paddingTop: '100px' }}>
      <div className="container">

        {/* ── En-tête ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="font-technical text-accent" style={{
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
            display: 'block',
            fontSize: '0.8rem'
          }}>
            Coaching à distance
          </span>
          <h1 className="section-title">
            Choisissez votre <span className="text-accent">formule</span>
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
            3 niveaux d&apos;accompagnement, calibrés sur votre physiologie réelle. Toutes les formules démarrent par un bilan complet de l&apos;athlète.
          </p>
        </motion.div>

        {/* ── Bandeau "Premier appel gratuit" ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            padding: '0.875rem 1.5rem',
            background: 'rgba(0,136,255,0.07)',
            border: '1px solid rgba(0,136,255,0.2)',
            borderRadius: '50px',
            maxWidth: '480px',
            margin: '0 auto 4rem',
            fontSize: '0.9rem',
            fontWeight: 600,
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Phone weight="thin" size={24} /></span>
          <span style={{ color: 'var(--color-text-main)' }}>
            Premier appel découverte <strong style={{ color: 'var(--color-accent)' }}>100% gratuit</strong> et sans engagement
          </span>
        </motion.div>

        {/* ── 3 Cartes formules ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          alignItems: 'stretch',
          marginBottom: '5rem',
        }}>
          {distancePlans.map((plan, i) => (
            <PricingCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>

        {/* ── Tableau de comparaison ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '5rem' }}
        >
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2.5rem', fontSize: '1.8rem' }}>
            Comparer les <span className="text-accent">formules</span>
          </h2>

          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              minWidth: '600px',
            }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--color-outline-variant)' }}>
                  <th style={{ textAlign: 'left', padding: '1rem 1.25rem', fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 600, width: '40%' }}>
                    Ce qui est inclus
                  </th>
                  {distancePlans.map(plan => (
                    <th key={plan.id} style={{
                      textAlign: 'center',
                      padding: '1rem 1.25rem',
                      fontSize: '0.9rem',
                      fontWeight: 800,
                      color: plan.highlight ? 'var(--color-accent)' : 'var(--color-text-main)',
                    }}>
                      {plan.name}
                      <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-muted)', marginTop: '0.2rem' }}>
                        {plan.price}€ {plan.unit}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {distancePlans[0].features.map((feature, rowIdx) => (
                  <tr
                    key={rowIdx}
                    style={{
                      borderBottom: '1px solid var(--color-outline-variant)',
                      background: rowIdx % 2 === 0 ? 'transparent' : 'var(--color-surface-container)',
                    }}
                  >
                    <td style={{ padding: '0.875rem 1.25rem', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                      {feature.label}
                    </td>
                    {distancePlans.map(plan => (
                      <td key={plan.id} style={{ textAlign: 'center', padding: '0.875rem 1.25rem' }}>
                        {plan.features[rowIdx].included ? (
                          <Check weight="thin" size={18} style={{ color: 'var(--color-accent)', display: 'inline-block' }} />
                        ) : (
                          <X weight="thin" size={16} style={{ color: 'var(--color-outline-variant)', display: 'inline-block', opacity: 0.4 }} />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                {/* Ligne prix */}
                <tr style={{ borderTop: '2px solid var(--color-outline-variant)', background: 'var(--color-surface-container-high)' }}>
                  <td style={{ padding: '1.25rem', fontWeight: 700, fontSize: '0.9rem' }}>Tarif</td>
                  {distancePlans.map(plan => (
                    <td key={plan.id} style={{ textAlign: 'center', padding: '1.25rem' }}>
                      <span style={{ fontSize: '1.4rem', fontWeight: 900, color: plan.highlight ? 'var(--color-accent)' : 'var(--color-text-main)' }}>
                        {plan.price}€
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', display: 'block' }}>{plan.unit}</span>
                    </td>
                  ))}
                </tr>
                {/* Ligne CTA */}
                <tr>
                  <td style={{ padding: '1.25rem' }} />
                  {distancePlans.map(plan => (
                    <td key={plan.id} style={{ textAlign: 'center', padding: '1rem 1.25rem' }}>
                      <Link
                        href="/contact"
                        className={plan.highlight ? 'btn btn-primary' : 'btn btn-secondary'}
                        style={{ fontSize: '0.8rem', padding: '0.6rem 1.25rem' }}
                      >
                        {plan.cta}
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* ── Bloc "Comment ça se passe" ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            background: 'var(--color-surface-container)',
            borderRadius: '20px',
            padding: '3rem',
            border: '1px solid var(--color-outline-variant)',
            marginBottom: '5rem',
          }}
        >
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '2.5rem', textAlign: 'center' }}>
            Comment ça se passe ?
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
          }}>
            {[
              { step: '01', title: 'Appel découverte', desc: '30 min gratuits pour comprendre votre projet, votre niveau, vos contraintes.' },
              { step: '02', title: 'Bilan athlète', desc: 'Définition de vos zones réelles (VMA, Vitesse Critique) via des tests terrain calibrés.' },
              { step: '03', title: 'Plan sur mesure', desc: 'Votre programme est construit sur vos données. Pas un template, une architecture.' },
              { step: '04', title: 'Suivi & ajustements', desc: 'Fatigue, blessure, imprévu — le plan s\'adapte à vous, pas l\'inverse.' },
            ].map((item) => (
              <div key={item.step} style={{
                padding: '1.5rem',
                background: 'var(--color-surface-container-low)',
                borderRadius: '12px',
                border: '1px solid var(--color-outline-variant)',
              }}>
                <span style={{
                  fontFamily: 'var(--font-technical)',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  color: 'var(--color-accent)',
                  opacity: 0.7,
                  display: 'block',
                  marginBottom: '0.75rem',
                }}>
                  {item.step}
                </span>
                <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '0.5rem' }}>{item.title}</strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{item.desc}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── BLOC PRÉSENTIEL ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginTop: '2rem' }}
        >
          {/* En-tête section présentiel */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{
              display: 'inline-block',
              background: 'rgba(0,136,255,0.07)',
              border: '1px solid rgba(0,136,255,0.2)',
              borderRadius: '50px',
              padding: '4px 16px',
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--color-accent)',
              marginBottom: '1.25rem',
            }}>
              Coaching en présentiel
            </span>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', marginBottom: '1rem' }}>
              Sur le <span className="text-accent">terrain</span>, autour d&apos;Annecy
            </h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
              Séances techniques en extérieur — sentiers, piste, route — dans le bassin annécien.
              Idéal pour travailler la biomécanique, la descente ou l&apos;intensité encadrée.
            </p>
          </div>

          {/* Grille 4 cartes */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem',
            marginBottom: '2.5rem',
          }}>

            {/* Carte Solo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              style={{
                borderRadius: '16px',
                padding: '2rem',
                background: 'var(--color-surface-container)',
                border: '2px solid var(--color-accent)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                position: 'relative',
              }}
            >
              <div style={{
                position: 'absolute', top: '-13px', left: '1.5rem',
                background: 'var(--color-accent)', color: 'white',
                padding: '2px 14px', borderRadius: '50px',
                fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em',
              }}>
                Recommandé
              </div>
              <div style={{
                width: '44px', height: '44px', borderRadius: '10px',
                background: 'var(--color-accent)', color: 'white',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <User weight="thin" size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.25rem' }}>Séance Solo</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  1-to-1 · Coaching individuel
                </p>
              </div>
              <div style={{ borderTop: '1px solid var(--color-outline-variant)', paddingTop: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-0.04em' }}>70€</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>/séance</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {[
                    'Séance ~1h30 en extérieur',
                    'Biomécanique & technique',
                    'Travail côtes, descente, allures',
                    'Feedback immédiat détaillé',
                    'Bilan de séance écrit',
                  ].map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                      <Check weight="thin" size={14} style={{ color: 'var(--color-accent)', flexShrink: 0 }} /> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/contact" className="btn btn-primary" style={{ textAlign: 'center', marginTop: 'auto' }}>
                Réserver ma séance
              </Link>
            </motion.div>

            {/* Carte Duo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                borderRadius: '16px',
                padding: '2rem',
                background: 'var(--color-surface-container)',
                border: '1px solid var(--color-outline-variant)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              <div style={{
                width: '44px', height: '44px', borderRadius: '10px',
                background: 'var(--color-surface-container-high)', color: 'var(--color-accent)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <UserPlus weight="thin" size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.25rem' }}>Séance Duo</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  2 athlètes · Objectif commun
                </p>
              </div>
              <div style={{ borderTop: '1px solid var(--color-outline-variant)', paddingTop: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-0.04em' }}>45€</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>/pers · /séance</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {[
                    'Niveaux proches ou objectif commun',
                    'Correction technique pour les deux',
                    'Émulation et motivation',
                    'Feedback individuel inclus',
                    'Tarif réduit vs séance solo',
                  ].map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                      <Check weight="thin" size={14} style={{ color: 'var(--color-accent)', flexShrink: 0 }} /> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/contact" className="btn btn-secondary" style={{ textAlign: 'center', marginTop: 'auto' }}>
                Réserver à deux
              </Link>
            </motion.div>

            {/* Carte Small Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                borderRadius: '16px',
                padding: '2rem',
                background: 'var(--color-surface-container)',
                border: '1px solid var(--color-outline-variant)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              <div style={{
                width: '44px', height: '44px', borderRadius: '10px',
                background: 'var(--color-surface-container-high)', color: 'var(--color-accent)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Users weight="thin" size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.25rem' }}>Small Group</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  9-12 personnes · Entraînement collectif
                </p>
              </div>
              <div style={{ borderTop: '1px solid var(--color-outline-variant)', paddingTop: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-0.04em' }}>30€</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>/pers · /séance</span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {[
                    '9 à 12 athlètes max',
                    'Séances intensité clés (fractionné, seuil)',
                    'Dynamique de groupe & émulation',
                    'Bassin annécien & alentours',
                    'Idéal pour progresser en commun',
                  ].map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                      <Check weight="thin" size={14} style={{ color: 'var(--color-accent)', flexShrink: 0 }} /> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/contact" className="btn btn-secondary" style={{ textAlign: 'center', marginTop: 'auto' }}>
                Rejoindre un groupe
              </Link>
            </motion.div>

            {/* Carte Stage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{
                borderRadius: '16px',
                padding: '2rem',
                background: 'linear-gradient(135deg, var(--color-surface-container-high) 0%, var(--color-surface-container) 100%)',
                border: '1px solid var(--color-outline-variant)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              <div style={{
                width: '44px', height: '44px', borderRadius: '10px',
                background: 'var(--color-surface-container-highest)', color: 'var(--color-accent)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <MapTrifold weight="thin" size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.25rem' }}>Stage Trail</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Format immersif · Sur mesure
                </p>
              </div>
              <div style={{ borderTop: '1px solid var(--color-outline-variant)', paddingTop: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '1.8rem', fontWeight: 900, letterSpacing: '-0.02em' }}>Sur devis</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '1rem', lineHeight: 1.5, fontStyle: 'italic' }}>
                  Durée et format définis selon votre groupe et vos objectifs.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {[
                    'Demi-journée, journée ou week-end',
                    'Terrains emblématiques Haute-Savoie',
                    'Technique, endurance ou préparation course',
                    'Association / club : tarif groupe',
                    'Programme 100% sur mesure',
                  ].map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                      <Check weight="thin" size={14} style={{ color: 'var(--color-accent)', flexShrink: 0 }} /> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/contact" className="btn btn-secondary" style={{ textAlign: 'center', marginTop: 'auto' }}>
                Demander un devis
              </Link>
            </motion.div>

          </div>

          {/* Bandeau localisation */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            padding: '1rem 2rem',
            background: 'var(--color-surface-container)',
            border: '1px solid var(--color-outline-variant)',
            borderRadius: '12px',
            fontSize: '0.875rem',
            color: 'var(--color-text-muted)',
            flexWrap: 'wrap',
            textAlign: 'center',
          }}>
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><MapPin weight="thin" size={24} className="text-accent" /></span>
            <span>
              <strong style={{ color: 'var(--color-text-main)' }}>Annecy & bassin annécien</strong>
              {' '}— Cran-Gevrier, Seynod, Meythet, Pringy, Saint-Jorioz, Duingt, Talloires, Menthon-Saint-Bernard, Veyrier-du-Lac
            </span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
