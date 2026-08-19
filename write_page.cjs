const fs = require('fs');

const content = `import Link from 'next/link';
import Image from 'next/image';
import CTASection from '@/components/sections/CTASection';
import { CheckCircle } from '@phosphor-icons/react/dist/ssr';

export const metadata = {
  title: 'Coach Trail & Ultra-Trail à Annecy et Haute-Savoie | Préparation Scientifique | Summitraining',
  description: 'Coach trail à Annecy, Haute-Savoie et Suisse Romande. Préparation 100% individualisée pour débutants et confirmés, basée sur votre physiologie réelle (VMA, Puissance Critique, VFC). Coaching en présentiel ou à distance. Réservez un appel découverte gratuit.',
  keywords: ['coach trail Annecy', 'préparation ultra trail Haute-Savoie', 'coaching trail montagne', 'préparation UTMB', 'coach ultra trail Savoie', 'entraîneur trail Annecy'],
  alternates: {
    canonical: 'https://www.summitraining.fr/trail',
  },
  openGraph: {
    title: 'Coach Trail & Ultra-Trail à Annecy et Haute-Savoie | Summitraining',
    description: 'Coaching trail 100% individualisé basé sur votre physiologie réelle. Coach certifié basé à Annecy & Haute-Savoie.',
    url: 'https://www.summitraining.fr/trail',
    images: [
      {
        url: '/img/thib.jpeg',
        width: 400,
        height: 533,
        alt: 'Athlète en entraînement trail sur sentier de montagne en Haute-Savoie',
      },
    ],
  },
};

export default function Trail() {
  return (
    <>
      <div style={{ paddingTop: '80px' }}>
      </div>

      <section className="section" id="page-header">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">Coaching <span className="text-accent">Trail</span> & Ultra-Trail à Annecy et en Haute-Savoie</h1>
            <p className="section-subtitle">Le trail exige plus qu'un bon cardio. Voici comment le préparer sérieusement — que vous débutiez sur les sentiers du Semnoz ou que vous visiez votre premier ultra.</p>
          </div>

          <div className="container about-wrapper" style={{ marginTop: '3rem' }}>
            <div className="about-content">
              <h2>Une approche scientifique de la montagne</h2>
              <p>Courir vite en montée ne suffit pas. La casse musculaire en descente, la gestion métabolique sur 10h d'effort, le pacing au dénivelé : ce sont des compétences qui s'apprennent, pas des dons.</p>
              <p>Ma formation s'est construite à Font-Romeu, en Licence STAPS Entraînement & Altitude, avec une spécialisation en physiologie de l'exercice sous <strong>Grégory Doucende</strong>. Aujourd'hui, en tant que coach trail basé à Annecy, j'utilise ce cadre pour établir votre <strong><Link href="/outils" style={{ color: 'var(--color-accent)', fontWeight: 500, textDecoration: 'underline' }}>profil physiologique complet</Link></strong> — <Link href="/blog/vma-vs-vitesse-critique" style={{ color: 'var(--color-accent)', fontWeight: 500, textDecoration: 'underline' }}>VMA vs Vitesse Critique</Link>, puissance réelle, VFC — et m'en servir comme repère concret pour construire votre entraînement, pas comme argument marketing.</p>
              <p>Le coaching se fait en présentiel sur les sentiers de Haute-Savoie et de Suisse Romande, ou à distance si vous préparez votre trail depuis ailleurs.</p>

              <h3 style={{ marginTop: '3rem', marginBottom: '2rem', fontSize: '1.5rem', fontWeight: 800 }}>Les piliers du suivi <span className="text-accent">Trail</span></h3>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                gap: '1.5rem',
                marginTop: '1.5rem'
              }}>
                {[
                  { title: 'Apprentissage technique', desc: "Travail de la foulée en dénivelé, biomécanique et aisance dans les descentes techniques — sur des terrains variés, du Semnoz aux crêtes de la Tournette." },
                  { title: 'Stratégie de course & Pacing', desc: "Régulation de l'allure via la VAM et la puissance pour tenir la distance sans s'effondrer en fin de course." },
                  { title: 'Alimentation & Hydratation', desc: "Plan nutritionnel adapté à votre profil, pensé pour éviter les défaillances métaboliques en course." },
                  { title: 'Renforcement musculaire', desc: "Travail de force ciblé, PPG et prévention des blessures liées à l'impact répété." },
                  { title: 'Gestion de l\'effort', desc: "Suivi de la charge et de la fatigue via la VFC, pour progresser sans tomber dans le surentraînement." }
                ].map((pillar, idx) => (
                  <div key={idx} style={{
                    background: 'var(--color-surface-container-low)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid var(--color-outline-variant)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <CheckCircle weight="thin" size={20} className="text-accent" />
                      <strong style={{ fontSize: '1.05rem', color: 'var(--color-text-main)' }}>{pillar.title}</strong>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.5, margin: 0 }}>{pillar.desc}</p>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '3rem' }}>
                <Link href="/contact" className="btn btn-primary btn-large">Préparer mon prochain trail</Link>
              </div>
            </div>
            <div className="about-image" style={{ alignSelf: 'start', position: 'sticky', top: '100px' }}>
              <Image
                src="/img/thib.jpeg"
                alt="Athlète en entraînement trail sur sentier de montagne en Haute-Savoie, coaché par Julien Planaz"
                width={400}
                height={533}
                className="coach-photo"
                style={{ objectPosition: 'center', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-alt" id="faq-trail" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Questions <span className="text-accent">Fréquentes</span></h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--color-surface-container-low)', borderRadius: '12px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>

            <div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>Peut-on être coaché en trail si on débute ?</h3>
              <p style={{ color: 'var(--color-text-main)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: 0 }}>Oui. Le coaching trail n'est pas réservé aux coureurs confirmés. Pour un débutant, l'accompagnement porte d'abord sur les bases : gestion de l'effort en montée et en descente, choix du matériel, structuration progressive du volume d'entraînement pour éviter la blessure. La méthode reste individualisée, qu'il s'agisse de préparer votre premier trail de 15 km ou un objectif plus ambitieux.</p>
            </div>

            <div style={{ borderTop: '1px solid var(--color-outline-variant)', paddingTop: '1.75rem' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>Quelle est la différence entre la VMA et la Vitesse Critique pour le trail ?</h3>
              <p style={{ color: 'var(--color-text-main)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: 0 }}>La VMA mesure un effort maximal de quelques minutes — elle ne dit rien de votre capacité à tenir un effort long. La Vitesse Critique, elle, identifie le seuil métabolique réel : le point à partir duquel la fatigue s'accélère nettement. En trail, c'est cette donnée qui permet de calibrer ses allures pour ne pas cramer ses réserves trop tôt.</p>
            </div>

            <div style={{ borderTop: '1px solid var(--color-outline-variant)', paddingTop: '1.75rem' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>Faut-il utiliser la fréquence cardiaque ou la puissance en ultra-trail ?</h3>
              <p style={{ color: 'var(--color-text-main)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: 0 }}>La fréquence cardiaque dérive avec la fatigue, l'altitude, le stress ou la chaleur — elle devient peu fiable sur la durée. Le capteur de puissance (en Watts) donne une mesure mécanique instantanée et objective. Il permet de garder un effort constant en montée, indépendamment de la pente ou de l'état de fatigue, et de préserver les muscles pour la suite.</p>
            </div>

            <div style={{ borderTop: '1px solid var(--color-outline-variant)', paddingTop: '1.75rem' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>Comment structurer son plan d'entraînement pour un trail de 50 km ?</h3>
              <p style={{ color: 'var(--color-text-main)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: 0 }}>Une préparation pour 50 km ou plus se construit généralement sur 16 à 20 semaines. Les axes essentiels : développement de la force spécifique (dénivelé positif, résistance à la casse musculaire en descente), séances de rando-course pour travailler le pacing, et une stratégie nutritionnelle testée à l'entraînement — jamais improvisée le jour J. L'individualisation de la charge reste la clé pour progresser sans se blesser.</p>
            </div>

            <div style={{ borderTop: '1px solid var(--color-outline-variant)', paddingTop: '1.75rem' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>Pourquoi le renforcement musculaire est-il indispensable pour le trail ?</h3>
              <p style={{ color: 'var(--color-text-main)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: 0 }}>La course en montagne impose des contraintes mécaniques importantes, en particulier lors des descentes techniques. Un renforcement ciblé — travail excentrique des cuisses, gainage, proprioception chevilles/genoux — protège les articulations, retarde les crampes et améliore l'économie de course sur sentier.</p>
            </div>

            <div style={{ borderTop: '1px solid var(--color-outline-variant)', paddingTop: '1.75rem' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>Comment éviter le surentraînement lors d'une préparation trail intense ?</h3>
              <p style={{ color: 'var(--color-text-main)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: 0 }}>Le surentraînement s'installe quand la fatigue chronique dépasse la capacité de récupération. Mon suivi repose sur deux indicateurs simples et objectifs : la Variabilité de la Fréquence Cardiaque (VFC) le matin, et la perception de l'effort (échelle RPE). Ils permettent d'ajuster la charge avant que la blessure ou le coup de fatigue prolongé ne s'installe.</p>
            </div>

            <div style={{ borderTop: '1px solid var(--color-outline-variant)', paddingTop: '1.75rem' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>Peut-on suivre un coaching trail à distance depuis l'étranger ou la Suisse Romande ?</h3>
              <p style={{ color: 'var(--color-text-main)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: 0 }}>Oui. Le suivi individualisé fonctionne aussi bien à distance qu'en présentiel. Les données physiologiques (VMA, Vitesse Critique, VFC) sont collectées via votre montre ou capteur de puissance et analysées à distance, avec des points réguliers pour ajuster le plan. Plusieurs athlètes suivis depuis la Suisse Romande utilisent cette formule.</p>
            </div>

          </div>
        </div>
      </section>

      <section className="section" id="articles-lies" style={{ paddingTop: '3rem', paddingBottom: '0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Pour aller plus <span className="text-accent">loin</span></h2>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/blog/maxi-race" className="card" style={{ maxWidth: '400px', textAlign: 'left', overflow: 'hidden', textDecoration: 'none', color: 'inherit', display: 'block', padding: 0 }}>
              <Image src="https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?q=80&w=800&auto=format&fit=crop" width={400} height={200} style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="Coureur en montagne lors d'un ultra-trail en Haute-Savoie" unoptimized />
              <div style={{ padding: '1.5rem' }}>
                <span style={{ color: 'var(--color-accent)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }} className="font-technical">Guide & Stratégie</span>
                <h3 style={{ fontSize: '1.25rem', margin: '0.5rem 0', fontFamily: 'var(--font-heading)' }}>Maxi-Race d'Annecy 2026 : Modélisation Stratégique</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: 0 }}>L'approche biomécanique et la stratégie idéale pour préparer un tel ultra-trail.</p>
              </div>
            </Link>
            <Link href="/blog/vma-vs-vitesse-critique" className="card" style={{ maxWidth: '400px', textAlign: 'left', overflow: 'hidden', textDecoration: 'none', color: 'inherit', display: 'block', padding: 0 }}>
              <div style={{ width: '100%', height: '200px', background: 'var(--color-surface-container-high)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '3rem' }}>📊</span>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <span style={{ color: 'var(--color-accent)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }} className="font-technical">Physiologie</span>
                <h3 style={{ fontSize: '1.25rem', margin: '0.5rem 0', fontFamily: 'var(--font-heading)' }}>VMA vs Vitesse Critique : Quelle métrique choisir ?</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: 0 }}>Comprendre les deux indicateurs fondamentaux pour calibrer vos zones d'entraînement avec précision.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="La route vous attend aussi ?"
        subtitle="Vous préparez un objectif sur route — 10 km, semi, marathon ? La méthode reste la même : un cadre physiologique précis, adapté à votre profil, pas à une moyenne statistique."
        primaryButtonText="Réserver mon coaching"
        primaryButtonLink="/contact"
        secondaryButtonText="Découvrir le coaching Route"
        secondaryButtonLink="/route"
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Peut-on être coaché en trail si on débute ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui. Le coaching trail n'est pas réservé aux coureurs confirmés. Pour un débutant, l'accompagnement porte d'abord sur les bases : gestion de l'effort en montée et en descente, choix du matériel, structuration progressive du volume d'entraînement pour éviter la blessure. La méthode reste individualisée, qu'il s'agisse de préparer votre premier trail de 15 km ou un objectif plus ambitieux."
                }
              },
              {
                "@type": "Question",
                "name": "Quelle est la différence entre la VMA et la Vitesse Critique pour le trail ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "La VMA mesure un effort maximal de quelques minutes — elle ne dit rien de votre capacité à tenir un effort long. La Vitesse Critique, elle, identifie le seuil métabolique réel : le point à partir duquel la fatigue s'accélère nettement. En trail, c'est cette donnée qui permet de calibrer ses allures pour ne pas cramer ses réserves trop tôt."
                }
              },
              {
                "@type": "Question",
                "name": "Faut-il utiliser la fréquence cardiaque ou la puissance en ultra-trail ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "La fréquence cardiaque dérive avec la fatigue, l'altitude, le stress ou la chaleur — elle devient peu fiable sur la durée. Le capteur de puissance (en Watts) donne une mesure mécanique instantanée et objective. Il permet de garder un effort constant en montée, indépendamment de la pente ou de l'état de fatigue, et de préserver les muscles pour la suite."
                }
              },
              {
                "@type": "Question",
                "name": "Comment structurer son plan d'entraînement pour un trail de 50 km ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Une préparation pour 50 km ou plus se construit généralement sur 16 à 20 semaines. Les axes essentiels : développement de la force spécifique (dénivelé positif, résistance à la casse musculaire en descente), séances de rando-course pour travailler le pacing, et une stratégie nutritionnelle testée à l'entraînement — jamais improvisée le jour J. L'individualisation de la charge reste la clé pour progresser sans se blesser."
                }
              },
              {
                "@type": "Question",
                "name": "Pourquoi le renforcement musculaire est-il indispensable pour le trail ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "La course en montagne impose des contraintes mécaniques importantes, en particulier lors des descentes techniques. Un renforcement ciblé — travail excentrique des cuisses, gainage, proprioception chevilles/genoux — protège les articulations, retarde les crampes et améliore l'économie de course sur sentier."
                }
              },
              {
                "@type": "Question",
                "name": "Comment éviter le surentraînement lors d'une préparation trail intense ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Le surentraînement s'installe quand la fatigue chronique dépasse la capacité de récupération. Mon suivi repose sur deux indicateurs simples et objectifs : la Variabilité de la Fréquence Cardiaque (VFC) le matin, et la perception de l'effort (échelle RPE). Ils permettent d'ajuster la charge avant que la blessure ou le coup de fatigue prolongé ne s'installe."
                }
              },
              {
                "@type": "Question",
                "name": "Peut-on suivre un coaching trail à distance depuis l'étranger ou la Suisse Romande ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui. Le suivi individualisé fonctionne aussi bien à distance qu'en présentiel. Les données physiologiques (VMA, Vitesse Critique, VFC) sont collectées via votre montre ou capteur de puissance et analysées à distance, avec des points réguliers pour ajuster le plan. Plusieurs athlètes suivis depuis la Suisse Romande utilisent cette formule."
                }
              }
            ]
          })
        }}
      />
    </>
  );
}
`;

fs.writeFileSync('src/app/trail/page.js', content, 'utf8');
