'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';

export default function ProblemStatement() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="section bg-alt"
      id="constat"
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          <div>
            <span
              style={{
                display: 'inline-block',
                color: 'var(--color-primary)',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontSize: '0.75rem',
                marginBottom: '1.5rem',
                fontFamily: 'var(--font-technical)',
              }}
            >
              Le constat
            </span>
            <h2
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                lineHeight: 1.1,
                marginBottom: '1.5rem',
              }}
            >
              S&apos;entraîner dur ne suffit pas.{' '}
              <span style={{ color: 'var(--color-primary)', fontStyle: 'italic' }}>S&apos;entraîner juste, si.</span>
            </h2>
            <p
              style={{
                fontSize: '1.1rem',
                fontWeight: 600,
                color: 'var(--color-text-main)',
                lineHeight: 1.5,
                marginBottom: '2rem',
                borderLeft: '3px solid var(--color-primary)',
                paddingLeft: '1.25rem',
              }}
            >
              La volonté ne manque jamais. C&apos;est la structure qui fait défaut.
            </p>
            <Link href="/#methodology" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Découvrir la méthode <ArrowRight weight="thin" size={18} />
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
        </div>
      </div>
    </motion.section>
  );
}
