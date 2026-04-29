import Link from 'next/link';
import Image from 'next/image';
import CTASection from '@/components/sections/CTASection';

import { CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Coaching Course sur Route | SUMMITRAINING',
  description: 'Optimisez vos chronos sur 10km, Semi-Marathon et Marathon.',
};

export default function Route() {
  return (
    <>
      <div style={{ paddingTop: '80px' }}>
      </div>

      <section className="section" id="page-header">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">Coaching <span className="text-accent">Course sur Route</span></h1>
            <p className="section-subtitle">Chaque seconde compte. Voici comment les chercher au bon endroit.</p>
          </div>

          <div className="container about-wrapper" style={{ marginTop: '3rem' }}>
            <div className="about-image" style={{ order: 0 }}>
              <Image src="https://images.unsplash.com/photo-1541252874014-411a5416dd11?q=80&w=800&auto=format&fit=crop" alt="Athlète sur piste" width={400} height={500} className="coach-photo" style={{ objectPosition: 'center', objectFit: 'cover' }} unoptimized />
            </div>
            <div className="about-content" style={{ order: 1 }}>
              <h2>La route exige de la précision</h2>
              <p>Beaucoup s'entraînent trop dur sur les séances faciles et pas assez sur les séances clés. C'est là que se cachent vos secondes perdues. Ma méthode repose sur le calibrage parfait de vos allures via l'analyse de votre <strong><Link href="/outils" style={{ color: 'var(--color-accent)', fontWeight: 500, textDecoration: 'underline' }}>Vitesse Critique</Link></strong> : une donnée bien plus fiable que la VMA pour construire un entraînement polarisé efficace.</p>

              <p>Grâce à mon expertise en Biochimie et Physiologie de l'effort, je modélise votre <strong>Puissance Critique</strong> et votre <strong>Endurance Index</strong> pour déterminer exactement les allures qui vous feront progresser, sans vous blesser.</p>

              <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>La méthode spécifique Route :</h3>
              <ul style={{ listStyleType: 'none', paddingLeft: 0, color: 'var(--color-text-main)' }}>
                <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}><CheckCircle2 size={18} className="text-accent" /> <strong>Ciblage de l'allure spécifique :</strong> Travail au seuil et développement de l'économie de course.</li>
                <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}><CheckCircle2 size={18} className="text-accent" /> <strong>Périodisation millimétrée :</strong> Blocs d'entraînement et phase d'affûtage pour arriver au pic de forme le jour J.</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><CheckCircle2 size={18} className="text-accent" /> <strong>Prévention des blessures :</strong> Intégration de renforcement (PPG) indispensable pour encaisser les chocs de la route.</li>
              </ul>

              <Link href="/#contact" className="btn btn-primary btn-large mt-4">Battre mon record personnel</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-alt" id="faq-route" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Questions <span className="text-accent">Fréquentes</span></h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--color-surface-container-low)', borderRadius: '12px', padding: '2rem' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>Comment bien se préparer pour un 10km ou un marathon sur route ?</h3>
              <p style={{ color: 'var(--color-text-main)', fontSize: '0.95rem', lineHeight: 1.6 }}>La performance sur route exige une mécanique de précision, notamment par l'optimisation de l'économie de course et le calibrage de vos allures clés avec la Vitesse Critique, une donnée bien plus fiable que la VMA traditionnelle pour l'entraînement polarisé.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>Quel est le prix moyen d'un coaching sportif à distance 100% individualisé ?</h3>
              <p style={{ color: 'var(--color-text-main)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: 0 }}>Bien que les tarifs varient fortement, un suivi distanciel premium et 100% individualisé (incluant analyse de données régulières sur Nolio, modélisation de la Puissance/Vitesse Critique et ajustements hebdomadaires de la charge d'entraînement) se situe généralement autour de 120 € par mois.</p>
            </div>
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
                  "text": "La performance sur route exige une mécanique de précision, notamment par l'optimisation de l'économie de course et le calibrage de vos allures clés avec la Vitesse Critique."
                }
              },
              {
                "@type": "Question",
                "name": "Quel est le prix moyen d'un coaching sportif à distance 100% individualisé ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bien que les tarifs varient fortement, un suivi distanciel premium et 100% individualisé (incluant analyse de données, modélisation de la Puissance/Vitesse Critique et ajustements bimensuels) se situe généralement autour de 120 € par mois."
                }
              }
            ]
          })
        }}
      />
    </>
  );
}
