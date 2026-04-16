import Link from 'next/link';
import Image from 'next/image';
import CTASection from '@/components/sections/CTASection';

export const metadata = {
  title: 'Coach Trail Annecy & Haute-Savoie | SUMMITRAINING',
  description: 'Entraînement 100% individualisé pour le trail et l\'ultra-trail en Haute-Savoie.',
};

export default function Trail() {
  return (
    <>
      <div style={{ paddingTop: '80px' }}>
      </div>

      <section className="section" id="page-header">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">Coaching <span className="text-accent">Trail</span> & Ultra-Trail</h1>
            <p className="section-subtitle">Votre préparation millimétrée pour conquérir les dénivelés de Haute-Savoie et d'ailleurs.</p>
          </div>

          <div className="container about-wrapper" style={{ marginTop: '3rem' }}>
            <div className="about-content">
              <h2>Une approche scientifique de la montagne</h2>
              <p>Le trail est une discipline aux variables multiples où la performance ne se résume plus à une simple allure ou une VMA. La performance en Trail est une équation complexe : elle demande une maîtrise de la verticalité, une protection face à la casse de fibres en descente et une haute efficience métabolique.</p>

              <p>Mon expertise s'est forgée au cœur de l'altitude, à Font-Romeu. Durant mon cursus universitaire (Licence STAPS Entraînement & Altitude), j'ai eu l'opportunité de côtoyer l'élite sportive au CREPS et de me spécialiser en physiologie de l'exercice sous l'enseignement de <strong>Grégory Doucende</strong>. Grâce à cette rigueur scientifique, je calibre votre <strong><Link href="/outils" style={{ color: 'var(--color-accent)', fontWeight: 500, textDecoration: 'underline' }}>Test de Puissance Critique</Link></strong> pour qu'il devienne votre boussole de performance face aux exigences réelles de la montagne.</p>

              <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Les piliers du suivi Trail :</h3>
              <ul style={{ listStyleType: 'none', paddingLeft: 0, color: 'var(--color-text-main)' }}>
                <li style={{ marginBottom: '0.5rem' }}><i className="icon-check">✓</i> <strong>Apprentissage technique :</strong> Maîtrise de la foulée en dénivelé, biomécanique et aisance dans les descentes techniques.</li>
                <li style={{ marginBottom: '0.5rem' }}><i className="icon-check">✓</i> <strong>Stratégie de course & Pacing :</strong> Régulation de l'allure via la VAM et la puissance pour lisser votre effort sur ultra-trail.</li>
                <li style={{ marginBottom: '0.5rem' }}><i className="icon-check">✓</i> <strong>Alimentation & Hydratation :</strong> Planification nutritionnelle sur-mesure pour éviter les défaillances métaboliques en ultra-endurance.</li>
                <li style={{ marginBottom: '0.5rem' }}><i className="icon-check">✓</i> <strong>Renforcement musculaire :</strong> Programmation spécifique de force, PPG et prévention des blessures musculaires et articulaires.</li>
                <li><i className="icon-check">✓</i> <strong>Gestion de l'effort & Modélisation :</strong> Analyse de la charge d'entraînement et de la fatigue (VFC) pour progresser sans surentraînement.</li>
              </ul>

              <Link href="/#contact" className="btn btn-primary btn-large mt-4">Je veux préparer mon prochain Trail</Link>
            </div>
            <div className="about-image">
              <Image src="/img/thib.jpeg" alt="Entraînement Trail" width={400} height={533} className="coach-photo" style={{ objectPosition: 'center', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-alt" id="faq-trail" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Questions <span className="text-accent">Fréquentes</span></h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--color-surface-container-low)', borderRadius: '12px', padding: '2rem' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>Quelle est la différence entre la VMA et la Vitesse Critique pour un trail ?</h3>
              <p style={{ color: 'var(--color-text-main)', fontSize: '0.95rem', lineHeight: 1.6 }}>Contrairement à la VMA qui surestime l'endurance, la Vitesse Critique (VC) détermine la véritable frontière métabolique avant l'accumulation de lactates. Sur des trails longs, calibrer ses intensités via la VC permet d'éviter l'épuisement prématuré de ses réserves.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>Faut-il utiliser la fréquence cardiaque ou la Puissance en Ultra-Trail ?</h3>
              <p style={{ color: 'var(--color-text-main)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: 0 }}>La fréquence cardiaque subit une forte dérive en ultra (chaleur, fatigue, dénivelé). La Puissance (Critique) offre une donnée mécanique instantanée et fiable pour lisser son effort en montée sans attaquer ses réserves anaérobies.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="articles-lies" style={{ paddingTop: '3rem', paddingBottom: '0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Pour aller plus <span className="text-accent">loin</span></h2>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/blog/maxi-race" className="card" style={{ maxWidth: '400px', textAlign: 'left', overflow: 'hidden', textDecoration: 'none', color: 'inherit', display: 'block', padding: 0 }}>
              <Image src="https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?q=80&w=800&auto=format&fit=crop" width={400} height={200} style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="Coureur en montagne Maxi-Race" unoptimized />
              <div style={{ padding: '1.5rem' }}>
                <span style={{ color: 'var(--color-accent)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }} className="font-technical">Guide & Stratégie</span>
                <h3 style={{ fontSize: '1.25rem', margin: '0.5rem 0', fontFamily: 'var(--font-heading)' }}>Maxi-Race d'Annecy 2026 : Modélisation Stratégique</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: 0 }}>L'approche biomécanique et la stratégie idéale pour préparer un tel ultra-trail.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <CTASection 
        title="Envie de vitesse sur le bitume ?"
        subtitle="Je vous accompagne également dans votre préparation sur route pour vos objectifs chronométriques (10km, Semi, Marathon)."
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
              }
            ]
          })
        }}
      />
    </>
  );
}
