import Offers from '@/components/sections/Offers';
import Contact from '@/components/sections/Contact';

export const metadata = {
  title: 'Tarifs et Offres de Coaching Trail & Running | Summitraining',
  description: 'Découvrez nos formules de coaching haute performance : suivi à distance personnalisé, sessions en présentiel à Annecy et Genève, et expertise biomécanique.',
};

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
  }
];

export default function OffresPage() {
  return (
    <>
      <Offers variant="full" />

      {/* SEO FAQ Section */}
      <section className="section" style={{ background: 'var(--color-surface-container-low)', paddingBottom: '8rem' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title">Questions Fréquentes</h2>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {FAQ.map((item, idx) => (
              <div key={idx} style={{
                padding: '2rem',
                background: 'var(--color-surface-container)',
                borderRadius: '12px',
                border: '1px solid var(--color-outline-variant)'
              }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>{item.question}</h3>
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />

      {/* FAQ Schema for SEO */}
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
    </>
  );
}
