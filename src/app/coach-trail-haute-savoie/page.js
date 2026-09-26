import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import CTASection from '@/components/sections/CTASection';
import RelatedPosts from '@/components/seo/RelatedPosts';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { CheckCircle } from '@phosphor-icons/react/dist/ssr';

export const metadata = {
  title: 'Coach Trail Haute-Savoie et Annecy',
  description: 'Coach trail en Haute-Savoie : suivi personnalisé à distance ou en présentiel à Annecy, dans le Faucigny, le Genevois et en Suisse romande. Appel gratuit.',
  alternates: { canonical: 'https://www.summitraining.fr/coach-trail-haute-savoie' },
  openGraph: {
    title: 'Coach Trail Haute-Savoie et Annecy | Summitraining',
    description: 'Coaching trail personnalisé en Haute-Savoie, à distance ou en présentiel, par Julien Planaz.',
    url: 'https://www.summitraining.fr/coach-trail-haute-savoie',
  },
};

const FAQ = [
  {
    question: 'Où intervenez-vous en Haute-Savoie ?',
    answer: "Le coaching est basé à Annecy. Il se fait en présentiel sur les sentiers du bassin annécien (Semnoz, Tournette, Parmelan) et de Haute-Savoie, et à distance pour les coureurs du Faucigny, du Genevois, du Chablais, de la vallée de l'Arve ou de Suisse romande. Le suivi à distance repose sur vos données d'entraînement (montre, capteur de puissance) et des points réguliers.",
  },
  {
    question: 'Faut-il habiter en Haute-Savoie pour être coaché ?',
    answer: "Non. Le plan, l'analyse de vos données et les ajustements hebdomadaires se font en ligne. La Haute-Savoie est mon terrain de référence, mais je prépare aussi des coureurs qui visent des courses alpines depuis d'autres régions ou depuis la Suisse.",
  },
  {
    question: 'Quel est le tarif d’un coach trail en Haute-Savoie ?',
    answer: "Les formules à distance démarrent à 99 €/mois (Suivi Intermédiaire). Le Plan Starter est un paiement unique de 150 € et l'All Inclusive est à 140 €/mois. Le détail est sur la page Tarifs et le premier appel de 30 minutes est gratuit.",
  },
  {
    question: 'Je prépare un ultra en montagne : par où commencer ?',
    answer: "Par un bilan : niveau actuel, disponibilité, historique de blessures et objectif de course. On fixe ensuite vos zones (VMA, Vitesse Critique, Puissance Critique), puis on construit un plan par blocs avec du dénivelé spécifique, de la force et une stratégie nutritionnelle testée à l'entraînement.",
  },
];

const AREAS = [
  { title: 'Annecy et bassin annécien', desc: "Semnoz, Tournette, Parmelan, tour du lac : un terrain idéal pour travailler dénivelé, technique en descente et sorties longues." },
  { title: 'Faucigny, La Roche-sur-Foron', desc: "Coureurs de la vallée de l'Arve, des Bornes et du Faucigny : préparation à distance, avec des sorties adaptées à votre terrain." },
  { title: 'Genevois et Chablais', desc: "Salève, Voirons, Môle : suivi des coureurs qui travaillent en Suisse ou autour de Genève." },
  { title: 'Aravis, Mont-Blanc, Suisse romande', desc: "Préparation d'objectifs alpins (UTMB, courses en Suisse romande) avec une stratégie de course et de dénivelé sur mesure." },
];

export default function CoachTrailHauteSavoie() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Accueil', path: '/' }, { name: 'Coach trail Haute-Savoie', path: '/coach-trail-haute-savoie' }])} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
        }}
      />

      <div style={{ paddingTop: '80px' }}>
        <Breadcrumbs />
      </div>

      <section className="section" id="page-header">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">Coach <span className="text-accent">trail</span> en Haute-Savoie</h1>
            <p className="section-subtitle">
              Un coaching trail 100 % personnalisé, basé sur votre physiologie, pour les coureurs d&apos;Annecy, de Haute-Savoie et de Suisse romande.
            </p>
          </div>

          <div className="container about-wrapper" style={{ marginTop: '3rem' }}>
            <div className="about-content">
              <h2>Pourquoi se faire coacher en trail en Haute-Savoie ?</h2>
              <p>
                Les courses de montagne autour d&apos;Annecy, des Aravis et du Mont-Blanc demandent bien plus qu&apos;un bon cardio : gestion du
                dénivelé, résistance musculaire en descente, stratégie de course sur 6 à 20 heures d&apos;effort. Ces compétences se travaillent
                avec un cadre précis, pas avec un plan générique téléchargé.
              </p>
              <p>
                Coach trail basé à Annecy, je construis votre plan à partir de vos données réelles :{' '}
                <Link href="/blog/vma-vs-vitesse-critique" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>VMA et Vitesse Critique</Link>,
                puissance, variabilité cardiaque et ressenti (<Link href="/blog/echelle-de-borg" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>échelle de Borg</Link>).
                Votre plan est ajusté chaque semaine selon votre fatigue, votre agenda et votre progression.
              </p>
              <p>
                Vous préparez plutôt une course sur route ? Voir le <Link href="/route" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>coaching course sur route</Link>.
                Pour le détail de la méthode trail, rendez-vous sur la page <Link href="/trail" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>coaching trail et ultra-trail</Link>.
              </p>

              <h2 style={{ marginTop: '3rem' }}>Zones d&apos;intervention</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginTop: '1.5rem' }}>
                {AREAS.map((area) => (
                  <div key={area.title} style={{ background: 'var(--color-surface-container-low)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--color-outline-variant)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                      <CheckCircle weight="thin" size={20} className="text-accent" />
                      <strong>{area.title}</strong>
                    </div>
                    <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.5, margin: 0 }}>{area.desc}</p>
                  </div>
                ))}
              </div>

              <h2 style={{ marginTop: '3rem' }}>Comment se passe le coaching ?</h2>
              <ol style={{ paddingLeft: '1.25rem', listStyle: 'decimal', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li><strong>Appel découverte gratuit (30 min)</strong> : votre objectif de course, votre niveau, vos contraintes.</li>
                <li><strong>Bilan physiologique</strong> : détermination de vos zones avec l&apos;<Link href="/outils" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>outil de calcul</Link> et vos dernières sorties.</li>
                <li><strong>Plan par blocs</strong> : dénivelé spécifique, renforcement, nutrition et stratégie de course.</li>
                <li><strong>Suivi et ajustements</strong> chaque semaine, à distance ou en présentiel sur les sentiers.</li>
              </ol>

              <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-primary btn-large">Réserver un appel gratuit</Link>
                <Link href="/offres" className="btn btn-secondary btn-large">Voir les tarifs</Link>
              </div>
            </div>

            <div className="about-image" style={{ alignSelf: 'start', position: 'sticky', top: '100px' }}>
              <Image
                src="/img/thib.jpeg"
                alt="Athlète en préparation trail en Haute-Savoie, coaché par Julien Planaz"
                width={400}
                height={533}
                className="coach-photo"
                style={{ objectPosition: 'center', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-alt" id="faq-haute-savoie" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Questions <span className="text-accent">fréquentes</span></h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--color-surface-container-low)', borderRadius: '12px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {FAQ.map((f, i) => (
              <div key={f.question} style={i ? { borderTop: '1px solid var(--color-outline-variant)', paddingTop: '1.75rem' } : undefined}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>{f.question}</h3>
                <p style={{ color: 'var(--color-text-main)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: 0 }}>{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedPosts slugs={['maxi-race', 'vma-vs-vitesse-critique', 'echelle-de-borg']} />

      <CTASection
        title="Un objectif en Haute-Savoie ?"
        subtitle="Parlons de votre course : 30 minutes d'appel gratuit pour définir la bonne préparation."
        primaryButtonText="Réserver mon appel"
        primaryButtonLink="/contact"
        secondaryButtonText="Voir le coaching trail"
        secondaryButtonLink="/trail"
      />
    </>
  );
}
