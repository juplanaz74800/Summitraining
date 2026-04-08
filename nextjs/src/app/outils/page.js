import Link from 'next/link';

export const metadata = {
  title: 'Calculateur de Puissance et Vitesse Critique Trail',
  description: 'Estimez vos zones d\'entraînement, votre VAM et votre puissance critique grâce à notre calculateur gratuit spécial Trail et course à pied.',
};

export default function Outils() {
  return (
    <>
      <section className="section" id="calculator-intro" style={{ paddingTop: '100px' }}>
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">Outils & <span className="text-accent">Ressources</span></h1>
            <p className="section-subtitle">Calculateur gratuit de Puissance et Vitesse Critique Trail</p>
          </div>

          <div className="calculator-teaser" style={{ marginBottom: 'var(--space-xl)' }}>
            <div className="calculator-content">
              <h3>Pourquoi utiliser ce calculateur ?</h3>
              <p style={{ textAlign: 'left', marginBottom: '1rem' }}>
                La définition précise de vos zones d'entraînement est la première étape pour progresser sans vous épuiser. Que vous visiez un marathon ou un ultra-trail, connaître vos seuils (VAM, Puissance Critique) vous permet de :
              </p>
              <ul style={{ textAlign: 'left', marginBottom: '1.5rem', paddingLeft: '1.5rem', color: 'var(--color-text-muted)' }}>
                <li><strong>Cibler l'endurance fondamentale</strong> pour bâtir une base aérobie solide sans accumuler de fatigue inutile.</li>
                <li><strong>Optimiser vos séances d'intensité</strong> (seuil, VMA/PMA) pour repousser vos limites efficacement.</li>
                <li><strong>Définir une allure de course</strong> réaliste et sécurisée pour le jour J.</li>
              </ul>
              <p style={{ textAlign: 'left', fontWeight: 500 }}>
                Entrez vos données de test récents ci-dessous pour générer vos profils 100% sur-mesure.
              </p>
            </div>

            <div style={{ marginTop: '3rem', background: 'rgba(0, 136, 255, 0.05)', border: '1px solid rgba(0, 136, 255, 0.1)', borderRadius: '12px', padding: '2rem', textAlign: 'center' }}>
              <h4 style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-heading)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                Vous connaissez vos zones. Et maintenant ?
              </h4>
              <p style={{ color: 'var(--color-text-main)', marginBottom: '1.5rem' }}>
                Laissez-moi construire le plan d'entraînement scientifique et individualisé qui va avec vos résultats.
              </p>
              <Link href="/#offers" className="btn btn-primary">Découvrir mes formules de coaching</Link>
            </div>
          </div>

          <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden', background: 'rgba(0,0,0,0.2)', marginTop: '2rem', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)' }}>
            <iframe src="https://summitraining-calculator.vercel.app" width="100%" height="1000px" frameBorder="0" style={{ display: 'block', width: '100%', minHeight: '1000px' }} title="Summitraining Calculator Pro"></iframe>
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Besoin d'aide pour exploiter ces données ?</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
              Un algorithme donne des chiffres, un coach donne du sens. Discutons de vos objectifs.
            </p>
            <Link href="/#contact" className="btn btn-secondary btn-large">Réserver un échange gratuit</Link>
          </div>
        </div>
      </section>

      {/* Schema Markup JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Calculateur d'Allures Trail",
            "applicationCategory": "HealthApplication",
            "operatingSystem": "All",
            "offers": {
              "@type": "Offer",
              "price": "0"
            },
            "author": {
              "@type": "Person",
              "name": "Julien Planaz"
            }
          })
        }}
      />
    </>
  );
}
