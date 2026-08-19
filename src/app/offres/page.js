import Offers from '@/components/sections/Offers';
import CTASection from '@/components/sections/CTASection';

export const metadata = {
  title: 'Tarifs Coaching Trail & Running Annecy | Formules Personnalisées | Summitraining',
  description: 'Découvrez les 3 formules de coaching à distance de Julien Planaz : Plan Starter 150€, Suivi Intermédiaire 99€/mois, All Inclusive 140€/mois. Basé à Annecy, coaching partout en France.',
  keywords: ['tarif coach trail Annecy', 'prix coaching running', 'formule coaching endurance personnalisé', 'coach trail distance'],
  alternates: {
    canonical: 'https://www.summitraining.fr/offres',
  },
  openGraph: {
    title: 'Tarifs Coaching Trail & Running | Summitraining',
    description: '3 formules à distance claires : Plan 150€, Suivi 99€/mois, All Inclusive 140€/mois. Premier appel gratuit.',
    url: 'https://www.summitraining.fr/offres',
  },
};

// FAQ SEO
const FAQ = [
  {
    question: "Comment ça commence ?",
    answer: "On commence par un appel de 30 minutes pour comprendre votre projet, votre niveau et vos objectifs. C'est gratuit, sans engagement, et c'est aussi l'occasion de voir si on est faits pour travailler ensemble."
  },
  {
    question: "Puis-je changer de formule en cours d'année ?",
    answer: "Oui. La flexibilité est au cœur de l'accompagnement. Vous pouvez ajuster votre niveau de suivi à tout moment selon vos besoins, votre agenda ou vos objectifs de saison."
  },
  {
    question: "Quels capteurs sont nécessaires pour le suivi ?",
    answer: "Une montre GPS avec cardio est le minimum. Pour un suivi précis et des zones réelles (Puissance Critique, Signature Physiologique), un capteur de puissance (Stryd en course ou sur le vélo) est fortement recommandé."
  },
  {
    question: "Quelle est la durée d'engagement minimum ?",
    answer: "Le Plan Starter est un achat unique sans engagement. Pour le Suivi Intermédiaire et l'All Inclusive, il n'y a pas d'engagement minimum — vous pouvez arrêter à tout moment avec un préavis de 15 jours."
  },
];

export default function OffresPage() {
  return (
    <>
      <Offers variant="full" />

      {/* FAQ SEO */}
      <section className="section" style={{ background: 'var(--color-surface-container-low)', paddingBottom: '8rem' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title" style={{ fontSize: '1.8rem' }}>
              Questions <span className="text-accent">Fréquentes</span>
            </h2>
          </div>
          <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {FAQ.map((item, idx) => (
              <div key={idx} style={{
                padding: '1.75rem 2rem',
                background: 'var(--color-surface-container)',
                borderRadius: '12px',
                border: '1px solid var(--color-outline-variant)'
              }}>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem', color: 'var(--color-accent)', fontWeight: 700 }}>
                  {item.question}
                </h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, margin: 0 }}>
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Un doute sur la formule qui vous convient ?"
        subtitle="30 minutes d'appel gratuit pour définir ensemble la bonne structure. Pas de pression, juste une conversation."
        primaryButtonText="Réserver mon appel gratuit"
        secondaryButtonText="Voir les outils gratuits"
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": FAQ.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })
        }}
      />

      {/* Pricing Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Coaching Trail & Running à distance — Summitraining",
            "provider": {
              "@type": "Person",
              "@id": "https://www.summitraining.fr/#julien-planaz",
              "name": "Julien Planaz"
            },
            "offers": [
              {
                "@type": "Offer",
                "name": "Plan Starter",
                "description": "Bilan athlète, fixation des zones d'entraînement et plan structuré 8 à 20 semaines. Paiement unique.",
                "price": "150",
                "priceCurrency": "EUR",
                "priceSpecification": { "@type": "UnitPriceSpecification", "price": "150", "priceCurrency": "EUR", "unitText": "ONE_TIME" }
              },
              {
                "@type": "Offer",
                "name": "Suivi Intermédiaire",
                "description": "Plan adaptatif mensuel + messagerie + ajustements hebdomadaires.",
                "price": "99",
                "priceCurrency": "EUR",
                "priceSpecification": { "@type": "UnitPriceSpecification", "price": "99", "priceCurrency": "EUR", "unitText": "MON" }
              },
              {
                "@type": "Offer",
                "name": "All Inclusive",
                "description": "Prise en charge complète : plan, données GPS/Stryd, visio mensuelle, nutrition, disponibilité maximale.",
                "price": "140",
                "priceCurrency": "EUR",
                "priceSpecification": { "@type": "UnitPriceSpecification", "price": "140", "priceCurrency": "EUR", "unitText": "MON" }
              }
            ]
          })
        }}
      />
    </>
  );
}
