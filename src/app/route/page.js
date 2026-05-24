import Link from 'next/link';
import Image from 'next/image';
import CTASection from '@/components/sections/CTASection';
import { CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Coach Course sur Route Annecy — Marathon, Semi-Marathon, 10km | Summitraining',
  description: 'Atteignez votre record personnel sur 10km, Semi-Marathon ou Marathon grâce à un coaching individualisé basé sur votre Vitesse Critique et Puissance Critique. Expert en endurance à Annecy & Haute-Savoie. Premier appel découverte gratuit.',
  openGraph: {
    title: 'Coach Course sur Route Annecy | Marathon, Semi-Marathon, 10km | Summitraining',
    description: 'Coaching route 100% individualisé basé sur la Vitesse Critique et la Puissance Critique. Expert en endurance basé à Annecy & Haute-Savoie.',
    url: 'https://summitraining.fr/route',
    images: [
      {
        url: '/img/route-coaching.png',
        width: 800,
        height: 500,
        alt: 'Coureur sur route en Haute-Savoie, préparation marathon et semi-marathon',
      },
    ],
  },
};

export default function Route() {
  return (
    <>
      <div style={{ paddingTop: '80px' }}>
      </div>

      <section className="section" id="page-header">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">Coaching <span className="text-accent">Course sur Route</span> à Annecy</h1>
            <p className="section-subtitle">Chaque seconde compte. Voici comment les chercher au bon endroit.</p>
          </div>

          <div className="container about-wrapper" style={{ marginTop: '3rem' }}>
            <div className="about-image" style={{ order: 0, alignSelf: 'start', position: 'sticky', top: '100px' }}>
              <Image
                src="/img/route-coaching.png"
                alt="Coureur en pleine préparation marathon sur route de montagne en Haute-Savoie, coaché par Julien Planaz"
                width={400}
                height={500}
                className="coach-photo"
                style={{ objectPosition: 'center', objectFit: 'cover' }}
              />
            </div>
            <div className="about-content" style={{ order: 1 }}>
              <h2>La route exige de la précision</h2>
              <p>Beaucoup s'entraînent trop dur sur les séances faciles et pas assez sur les séances clés. C'est là que se cachent vos secondes perdues. Ma méthode repose sur le calibrage parfait de vos allures via l'analyse de votre <strong><Link href="/outils" style={{ color: 'var(--color-accent)', fontWeight: 500, textDecoration: 'underline' }}>Vitesse Critique</Link></strong> : une donnée bien plus fiable que la VMA pour construire un entraînement polarisé efficace.</p>

              <p>Grâce à mon expertise en Biochimie et Physiologie de l'effort, je modélise votre <strong>Puissance Critique</strong> et votre <strong>Endurance Index</strong> pour déterminer exactement les allures qui vous feront progresser, sans vous blesser. Vous pouvez en apprendre davantage sur la <Link href="/blog/vma-vs-vitesse-critique" style={{ color: 'var(--color-accent)', fontWeight: 500, textDecoration: 'underline' }}>différence entre VMA et Vitesse Critique</Link> dans notre guide dédié.</p>

              <h3 style={{ marginTop: '3rem', marginBottom: '2rem', fontSize: '1.5rem', fontWeight: 800 }}>La méthode spécifique <span className="text-accent">Route</span></h3>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                gap: '1.5rem',
                marginTop: '1.5rem'
              }}>
                {[
                  { title: 'Ciblage de l\'allure spécifique', desc: 'Travail au seuil et développement de l\'économie de course pour optimiser chaque foulée.' },
                  { title: 'Périodisation millimétrée', desc: 'Blocs d\'entraînement et phase d\'affûtage pour arriver au pic de forme le jour J.' },
                  { title: 'Prévention des blessures', desc: 'Intégration de renforcement (PPG) indispensable pour encaisser les chocs de la route.' },
                  { title: 'Gestion de la charge', desc: 'Suivi de la perception de l\'effort (RPE) et de la VFC pour piloter votre progression.' }
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
                      <CheckCircle2 size={20} className="text-accent" />
                      <strong style={{ fontSize: '1.05rem', color: 'var(--color-text-main)' }}>{pillar.title}</strong>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.5, margin: 0 }}>{pillar.desc}</p>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '3rem' }}>
                <Link href="/#contact" className="btn btn-primary btn-large">Battre mon record personnel</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-alt" id="faq-route" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Questions <span className="text-accent">Fréquentes</span></h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--color-surface-container-low)', borderRadius: '12px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>

            <div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>Comment bien se préparer pour un 10km ou un marathon sur route ?</h3>
              <p style={{ color: 'var(--color-text-main)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: 0 }}>La performance sur route exige une mécanique de précision, notamment par l'optimisation de l'économie de course et le calibrage de vos allures clés avec la Vitesse Critique, une donnée bien plus fiable que la VMA traditionnelle pour l'entraînement polarisé.</p>
            </div>

            <div style={{ borderTop: '1px solid var(--color-outline-variant)', paddingTop: '1.75rem' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>Quel est le prix moyen d'un coaching sportif à distance 100% individualisé ?</h3>
              <p style={{ color: 'var(--color-text-main)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: 0 }}>Bien que les tarifs varient fortement, un suivi distanciel premium et 100% individualisé (incluant analyse de données régulières, modélisation de la Puissance/Vitesse Critique et ajustements hebdomadaires de la charge d'entraînement) se situe généralement autour de 130 € par mois.</p>
            </div>

            <div style={{ borderTop: '1px solid var(--color-outline-variant)', paddingTop: '1.75rem' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>Combien de séances par semaine pour bien préparer un semi-marathon ?</h3>
              <p style={{ color: 'var(--color-text-main)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: 0 }}>La préparation optimale d'un semi-marathon repose généralement sur 3 à 5 séances hebdomadaires, selon votre niveau et vos disponibilités. L'essentiel est la qualité de chaque séance : deux à trois séances faciles à basse intensité et une à deux séances d'intensité ciblée (allure spécifique semi-marathon, interval-training). La récupération n'est pas optionnelle — elle fait partie du plan.</p>
            </div>

            <div style={{ borderTop: '1px solid var(--color-outline-variant)', paddingTop: '1.75rem' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>Qu'est-ce que l'entraînement polarisé et pourquoi est-il efficace sur route ?</h3>
              <p style={{ color: 'var(--color-text-main)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: 0 }}>L'entraînement polarisé consiste à concentrer 80% du volume en endurance fondamentale (basse intensité) et 20% en intensité élevée, en évitant la zone grise intermédiaire qui fatigue sans stimuler. Cette approche, validée par la recherche en science du sport, est particulièrement efficace pour les coureurs sur route car elle maximise les adaptations aérobies tout en limitant l'accumulation de fatigue chronique.</p>
            </div>

          </div>
        </div>
      </section>

      <section className="section" id="articles-lies" style={{ paddingTop: '3rem', paddingBottom: '0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Approfondir vos <span className="text-accent">connaissances</span></h2>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
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
            <Link href="/blog/echelle-de-borg" className="card" style={{ maxWidth: '400px', textAlign: 'left', overflow: 'hidden', textDecoration: 'none', color: 'inherit', display: 'block', padding: 0 }}>
              <div style={{ width: '100%', height: '200px', background: 'var(--color-surface-container-high)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '3rem' }}>🎯</span>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <span style={{ color: 'var(--color-accent)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }} className="font-technical">Entraînement</span>
                <h3 style={{ fontSize: '1.25rem', margin: '0.5rem 0', fontFamily: 'var(--font-heading)' }}>L'Échelle de Borg : Maîtrisez votre perception de l'effort</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: 0 }}>Comment utiliser la RPE pour réguler votre intensité d'entraînement en l'absence de capteurs.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Vous courez aussi sur les sentiers ?"
        subtitle="Trail, ultra, dénivelé — je vous accompagne pour préparer la montagne avec la même rigueur scientifique."
        primaryButtonText="Réserver mon coaching"
        secondaryButtonText="Découvrir le coaching Trail"
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
                "name": "Comment bien se préparer pour un 10km ou un marathon sur route ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "La performance sur route exige une mécanique de précision, notamment par l'optimisation de l'économie de course et le calibrage de vos allures clés avec la Vitesse Critique, une donnée bien plus fiable que la VMA traditionnelle pour l'entraînement polarisé."
                }
              },
              {
                "@type": "Question",
                "name": "Quel est le prix moyen d'un coaching sportif à distance 100% individualisé ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Un suivi distanciel premium et 100% individualisé (incluant analyse de données, modélisation de la Puissance/Vitesse Critique et ajustements hebdomadaires) se situe généralement autour de 130 € par mois."
                }
              },
              {
                "@type": "Question",
                "name": "Combien de séances par semaine pour bien préparer un semi-marathon ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "La préparation optimale d'un semi-marathon repose généralement sur 3 à 5 séances hebdomadaires. L'essentiel est la qualité de chaque séance : deux à trois séances faciles à basse intensité et une à deux séances d'intensité ciblée. La récupération fait partie intégrante du plan."
                }
              },
              {
                "@type": "Question",
                "name": "Qu'est-ce que l'entraînement polarisé et pourquoi est-il efficace sur route ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "L'entraînement polarisé consiste à concentrer 80% du volume en endurance fondamentale et 20% en intensité élevée, en évitant la zone grise intermédiaire. Cette approche validée par la recherche maximise les adaptations aérobies tout en limitant l'accumulation de fatigue chronique."
                }
              }
            ]
          })
        }}
      />
    </>
  );
}
