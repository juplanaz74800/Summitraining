import Link from 'next/link';
import Image from 'next/image';
import CTASection from '@/components/sections/CTASection';
import { CheckCircle } from '@phosphor-icons/react/dist/ssr';

export const metadata = {
  title: 'Coach Trail & Ultra-Trail Annecy — Haute-Savoie | Préparation Scientifique | Summitraining',
  description: 'Préparez vos objectifs trail et ultra-trail avec un coaching 100% individualisé basé sur votre physiologie réelle (VMA, Puissance Critique, VFC). Coach certifié basé à Annecy & Haute-Savoie. Réservez un appel découverte gratuit.',
  keywords: ['coach trail Annecy', 'préparation ultra trail Haute-Savoie', 'coaching trail montagne', 'préparation UTMB', 'coach ultra trail Savoie', 'entraîneur trail Annecy'],
  alternates: {
    canonical: 'https://www.summitraining.fr/trail',
  },
  openGraph: {
    title: 'Coach Trail & Ultra-Trail Annecy — Haute-Savoie | Summitraining',
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
            <h1 className="section-title">Coaching <span className="text-accent">Trail</span> & Ultra-Trail en Haute-Savoie</h1>
            <p className="section-subtitle">Le trail exige plus qu'un bon cardio. Voici comment le préparer sérieusement.</p>
          </div>

          <div className="container about-wrapper" style={{ marginTop: '3rem' }}>
            <div className="about-content">
              <h2>Une approche scientifique de la montagne</h2>
              <p>En trail, courir vite en montée ne suffit pas. La casse musculaire en descente, la gestion métabolique sur 10h d'effort, le pacing au dénivelé : ce sont des compétences qui s'apprennent. Et qui s'entraînent.</p>
              <p>Mon expertise s'est forgée à Font-Romeu, au cœur de l'altitude. Licence STAPS Entraînement & Altitude, spécialisation en physiologie de l'exercice sous <strong>Grégory Doucende</strong>. Depuis, je calibre votre <strong><Link href="/outils" style={{ color: 'var(--color-accent)', fontWeight: 500, textDecoration: 'underline' }}>profil physiologique complet</Link></strong> — <Link href="/blog/vma-vs-vitesse-critique" style={{ color: 'var(--color-accent)', fontWeight: 500, textDecoration: 'underline' }}>VMA vs Vitesse Critique</Link>, puissance réelle, VFC — pour qu'il devienne votre boussole de performance en conditions réelles.</p>

              <h3 style={{ marginTop: '3rem', marginBottom: '2rem', fontSize: '1.5rem', fontWeight: 800 }}>Les piliers du suivi <span className="text-accent">Trail</span></h3>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                gap: '1.5rem',
                marginTop: '1.5rem'
              }}>
                {[
                  { title: 'Apprentissage technique', desc: 'Maîtrise de la foulée en dénivelé, biomécanique et aisance dans les descentes techniques.' },
                  { title: 'Stratégie de course & Pacing', desc: 'Régulation de l\'allure via la VAM et la puissance pour lisser votre effort sur ultra-trail.' },
                  { title: 'Alimentation & Hydratation', desc: 'Planification nutritionnelle sur-mesure pour éviter les défaillances métaboliques.' },
                  { title: 'Renforcement musculaire', desc: 'Programmation spécifique de force, PPG et prévention des blessures musculaires.' },
                  { title: 'Gestion de l\'effort', desc: 'Analyse de la charge et de la fatigue (VFC) pour progresser sans surentraînement.' }
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
                <Link href="/#contact" className="btn btn-primary btn-large">Préparer mon prochain trail</Link>
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
              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>Quelle est la différence entre la VMA et la Vitesse Critique pour un trail ?</h3>
              <p style={{ color: 'var(--color-text-main)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: 0 }}>Contrairement à la VMA qui surestime l'endurance, la Vitesse Critique (VC) détermine la véritable frontière métabolique avant l'accumulation de lactates. Sur des trails longs, calibrer ses intensités via la VC permet d'éviter l'épuisement prématuré de ses réserves.</p>
            </div>

            <div style={{ borderTop: '1px solid var(--color-outline-variant)', paddingTop: '1.75rem' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>Faut-il utiliser la fréquence cardiaque ou la Puissance en Ultra-Trail ?</h3>
              <p style={{ color: 'var(--color-text-main)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: 0 }}>La fréquence cardiaque subit une forte dérive en ultra (chaleur, fatigue, dénivelé). La Puissance (Critique) offre une donnée mécanique instantanée et fiable pour lisser son effort en montée sans attaquer ses réserves anaérobies.</p>
            </div>

            <div style={{ borderTop: '1px solid var(--color-outline-variant)', paddingTop: '1.75rem' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>Comment structurer son plan d'entraînement pour un ultra-trail de 50 km ?</h3>
              <p style={{ color: 'var(--color-text-main)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: 0 }}>Un plan pour un ultra-trail de 50 km s'articule généralement autour de 16 à 20 semaines. Les phases clés incluent la construction de la base aérobie, le développement de la force spécifique en dénivelé, la simulation des conditions de course, et une phase d'affûtage progressive. L'individualisation via vos données physiologiques (VMA, Puissance Critique) est indispensable pour respecter votre niveau de récupération.</p>
            </div>

            <div style={{ borderTop: '1px solid var(--color-outline-variant)', paddingTop: '1.75rem' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>Pourquoi le renforcement musculaire est-il indispensable pour le trail ?</h3>
              <p style={{ color: 'var(--color-text-main)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: 0 }}>La course en montagne génère des contraintes mécaniques (chocs en descente, instabilité du terrain) bien supérieures à la route. Un programme de renforcement ciblé (ischios, quadriceps, stabilisateurs de cheville et de hanche) réduit significativement le risque de blessure, améliore l'économie de course et préserve la fraîcheur musculaire en fin d'effort.</p>
            </div>

            <div style={{ borderTop: '1px solid var(--color-outline-variant)', paddingTop: '1.75rem' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>Comment éviter le surentraînement lors d'une préparation trail intense ?</h3>
              <p style={{ color: 'var(--color-text-main)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: 0 }}>Le surentraînement survient lorsque la charge d'entraînement dépasse durablement les capacités de récupération. Le suivi de la Variabilité de la Fréquence Cardiaque (VFC) chaque matin permet de quantifier objectivement votre état de récupération et d'adapter la charge de la semaine en conséquence. C'est l'outil central de notre méthode de gestion de la fatigue.</p>
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
        subtitle="Un coaching spécifique pour vos objectifs sur route : 10km, Semi-Marathon, Marathon. Chaque seconde compte, on les cherche ensemble."
        primaryButtonText="Réserver mon coaching"
        secondaryButtonText="Découvrir le coaching Route"
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
                "name": "Quelle est la différence entre la VMA et la Vitesse Critique pour un trail ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Contrairement à la VMA qui surestime l'endurance, la Vitesse Critique (VC) détermine la véritable frontière métabolique avant l'accumulation de lactates. Sur des trails longs, calibrer ses intensités via la VC permet d'éviter l'épuisement prématuré de ses réserves."
                }
              },
              {
                "@type": "Question",
                "name": "Faut-il utiliser la fréquence cardiaque ou la Puissance en Ultra-Trail ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "La fréquence cardiaque subit une forte dérive en ultra (chaleur, fatigue, dénivelé). La Puissance (Critique) offre une donnée mécanique instantanée et fiable pour lisser son effort en montée sans attaquer ses réserves anaérobies."
                }
              },
              {
                "@type": "Question",
                "name": "Comment structurer son plan d'entraînement pour un ultra-trail de 50 km ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Un plan pour un ultra-trail de 50 km s'articule généralement autour de 16 à 20 semaines. Les phases clés incluent la construction de la base aérobie, le développement de la force spécifique en dénivelé, la simulation des conditions de course, et une phase d'affûtage progressive. L'individualisation via vos données physiologiques est indispensable."
                }
              },
              {
                "@type": "Question",
                "name": "Pourquoi le renforcement musculaire est-il indispensable pour le trail ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "La course en montagne génère des contraintes mécaniques bien supérieures à la route. Un programme de renforcement ciblé réduit significativement le risque de blessure, améliore l'économie de course et préserve la fraîcheur musculaire en fin d'effort."
                }
              },
              {
                "@type": "Question",
                "name": "Comment éviter le surentraînement lors d'une préparation trail intense ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Le suivi de la Variabilité de la Fréquence Cardiaque (VFC) chaque matin permet de quantifier objectivement votre état de récupération et d'adapter la charge de la semaine en conséquence. C'est l'outil central de notre méthode de gestion de la fatigue."
                }
              }
            ]
          })
        }}
      />
    </>
  );
}
