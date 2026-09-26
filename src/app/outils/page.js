import Link from 'next/link';

import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata = {
  title: "Calculateur VMA & Vitesse Critique",
  description: "Calculateur gratuit : estimez vos zones d'entraînement, votre VAM et votre Puissance Critique en trail et en course à pied. Outil de Julien Planaz.",
  alternates: {
    canonical: 'https://www.summitraining.fr/outils',
  },
};

export default function Outils() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Accueil', path: '/' }, { name: 'Outils', path: '/outils' }])} />
      <section className="section" id="calculator-intro" style={{ paddingTop: '100px' }}>
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">Outils & <span className="text-accent">Ressources</span></h1>
            <p className="section-subtitle">Calculateur de performance : déterminez vos zones d'entraînement</p>
            <div style={{ marginTop: '2rem' }}>
              <Link href="#calculator" className="btn btn-primary">Accéder au calculateur</Link>
            </div>
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

          <div id="calculator" style={{ width: '100%', borderRadius: '12px', overflow: 'hidden', background: 'rgba(0,0,0,0.2)', marginTop: '2rem', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)', scrollMarginTop: '100px' }}>
            <iframe src="https://summitraining-calculator.vercel.app" width="100%" height="1000px" frameBorder="0" style={{ display: 'block', width: '100%', minHeight: '1000px' }} title="Summitraining Calculator Pro"></iframe>
          </div>

          <div style={{ maxWidth: '820px', margin: '4rem auto 0', lineHeight: 1.75 }}>
            <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Comment utiliser le <span className="text-accent">calculateur</span> ?</h2>
            <p>
              Renseignez le résultat d&apos;un test récent (une course ou un effort maximal sur une durée connue). Le calculateur en déduit vos
              repères de performance et vos zones d&apos;entraînement. Refaites le calcul après chaque bloc d&apos;entraînement ou à chaque nouveau test :
              vos zones évoluent avec votre forme.
            </p>

            <h2 className="section-title" style={{ fontSize: '1.8rem', margin: '2.5rem 0 1rem' }}>VMA, VAM, Puissance Critique : les <span className="text-accent">définitions</span></h2>
            <ul style={{ paddingLeft: '1.25rem', listStyle: 'disc', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><strong>VMA (Vitesse Maximale Aérobie)</strong> : la vitesse de course la plus basse à laquelle vous sollicitez votre consommation maximale d&apos;oxygène. Utile pour les séances courtes et intenses.</li>
              <li><strong>VAM (Vitesse Ascensionnelle Moyenne)</strong> : la vitesse à laquelle vous montez, exprimée en mètres de dénivelé positif par heure. C&apos;est le repère clé en trail.</li>
              <li><strong>Puissance Critique / Vitesse Critique</strong> : la limite entre un effort tenable longtemps et un effort qui fait monter la fatigue rapidement. Elle sert à fixer vos allures de travail et de course. Pour comprendre pourquoi elle est plus parlante que la VMA, lisez l&apos;article{' '}
                <Link href="/blog/vma-vs-vitesse-critique" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>Vitesse Critique vs VMA</Link>.
              </li>
              <li><strong>Zones d&apos;entraînement</strong> : plages d&apos;allure ou de puissance associées à un objectif (endurance, seuil, intensité). Elles peuvent aussi se piloter au ressenti avec l&apos;{' '}
                <Link href="/blog/echelle-de-borg" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>échelle de Borg (RPE)</Link>.
              </li>
            </ul>

            <h2 className="section-title" style={{ fontSize: '1.8rem', margin: '2.5rem 0 1rem' }}>Questions <span className="text-accent">fréquentes</span></h2>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--color-accent)', marginBottom: '0.4rem' }}>Le calculateur est-il gratuit ?</h3>
            <p>Oui, il est gratuit et sans inscription. Les résultats sont des estimations : ils ne remplacent ni un test en laboratoire ni l&apos;analyse d&apos;un coach.</p>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--color-accent)', marginBottom: '0.4rem' }}>Est-il adapté au trail ?</h3>
            <p>Oui : il fournit la VAM et les zones utiles en montagne, ainsi que les repères de route. Pour un plan complet en trail, découvrez le{' '}
              <Link href="/trail" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>coaching trail</Link> ou le{' '}
              <Link href="/coach-trail-haute-savoie" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>coach trail en Haute-Savoie</Link>.
            </p>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--color-accent)', marginBottom: '0.4rem' }}>À quelle fréquence refaire le test ?</h3>
            <p>Idéalement toutes les 6 à 8 semaines, ou après une course importante, pour garder des zones à jour.</p>
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
            "name": "Calculateur de Performance Endurance",
            "applicationCategory": "HealthApplication",
            "operatingSystem": "All",
            "url": "https://www.summitraining.fr/outils",
            "inLanguage": "fr-FR",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "EUR"
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
