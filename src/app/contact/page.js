import ContactForm from '@/components/sections/ContactForm';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { Envelope, Clock, MapPin, Phone, Target, ChartLineUp, Mountains, Lightning } from '@phosphor-icons/react/dist/ssr';

export const metadata = {
  title: 'Contact — Coaching Trail & Running Annecy | Summitraining',
  description: 'Contactez Julien Planaz, coach trail et running basé à Annecy (Haute-Savoie). Premier échange gratuit de 30 minutes. Réponse sous 24h.',
  keywords: ['contact coach trail Annecy', 'coaching running Haute-Savoie', 'appel découverte gratuit', 'Julien Planaz contact'],
  alternates: {
    canonical: 'https://www.summitraining.fr/contact',
  },
  openGraph: {
    title: 'Contact — Coach Trail & Running Annecy | Summitraining',
    description: 'Prenez contact avec Julien Planaz pour un premier échange gratuit de 30 min sur votre projet trail ou running.',
    url: 'https://www.summitraining.fr/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <div style={{ paddingTop: '80px' }}>
        <Breadcrumbs />
      </div>

      <section className="section" id="contact-hero" style={{ paddingBottom: '3rem' }}>
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">
              Parlons de votre <span className="text-accent">projet</span>
            </h1>
            <p className="section-subtitle">
              Un premier échange de 30 minutes, gratuit et sans engagement, pour comprendre où vous en êtes et voir comment on peut travailler ensemble.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0, paddingBottom: '6rem' }}>
        <div className="container">
          <div className="contact-wrapper">

            {/* Colonne infos */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

              {/* Pourquoi me contacter */}
              <div style={{
                background: 'var(--color-surface-container)',
                borderRadius: '16px',
                padding: '2rem',
                border: '1px solid var(--color-outline-variant)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}>
                <h2 style={{ fontSize: '1.2rem', fontWeight: 700 }}>
                  Pour qui est ce coaching ?
                </h2>
                {[
                  { icon: <Target weight="thin" size={24} className="text-accent" />, title: 'Vous avez un objectif précis', desc: 'Trail, ultra, marathon — une course en tête et l\'envie d\'y arriver préparé.' },
                  { icon: <ChartLineUp weight="thin" size={24} className="text-accent" />, title: 'Vous stagez malgré vos efforts', desc: 'Vous vous entraînez déjà mais n\'avancez plus. On analyse vos données et on reconstruit mieux.' },
                  { icon: <Mountains weight="thin" size={24} className="text-accent" />, title: 'Vous débutez en trail', desc: 'Vous voulez partir sur de bonnes bases, sans vous blesser dès la première saison.' },
                  { icon: <Lightning weight="thin" size={24} className="text-accent" />, title: 'Vous voulez aller plus vite', desc: 'Record personnel sur 10k, semi ou marathon — chaque seconde compte.' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <span style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', background: 'var(--color-surface-container-high)', borderRadius: '8px' }}>{item.icon}</span>
                    <div>
                      <strong style={{ fontSize: '0.95rem', color: 'var(--color-text-main)' }}>{item.title}</strong>
                      <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.25rem', lineHeight: 1.5 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Infos pratiques */}
              <div style={{
                background: 'var(--color-surface-container-low)',
                borderRadius: '12px',
                padding: '1.75rem',
                border: '1px solid var(--color-outline-variant)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.25rem' }}>Infos pratiques</h3>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Clock weight="thin" size={18} className="text-accent" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                    Réponse sous <strong style={{ color: 'var(--color-text-main)' }}>24h</strong> en semaine
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Phone weight="thin" size={18} className="text-accent" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                    Premier appel de <strong style={{ color: 'var(--color-text-main)' }}>30 min offert</strong>
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <MapPin weight="thin" size={18} className="text-accent" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                    Basé à <strong style={{ color: 'var(--color-text-main)' }}>Annecy</strong>, coaching à distance disponible partout
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Envelope weight="thin" size={18} className="text-accent" style={{ flexShrink: 0 }} />
                  <a
                    href="mailto:contact@summitraining.fr"
                    style={{ fontSize: '0.9rem', color: 'var(--color-accent)', textDecoration: 'none' }}
                  >
                    contact@summitraining.fr
                  </a>
                </div>
              </div>
            </div>

            {/* Formulaire */}
            <div>
              <div style={{
                background: 'var(--color-surface-container)',
                borderRadius: '16px',
                padding: '2.5rem',
                border: '1px solid var(--color-outline-variant)',
              }}>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  Envoyez-moi un message
                </h2>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>
                  Décrivez votre projet et votre niveau actuel — plus c&apos;est précis, mieux je peux vous répondre.
                </p>
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Schema LocalBusiness + ContactPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact — Summitraining",
            "url": "https://www.summitraining.fr/contact",
            "description": "Prenez contact avec Julien Planaz, coach trail et running à Annecy.",
            "mainEntity": {
              "@type": "Person",
              "@id": "https://www.summitraining.fr/#julien-planaz",
              "name": "Julien Planaz",
              "jobTitle": "Coach Sportif Trail & Running",
              "email": "contact@summitraining.fr",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Annecy",
                "addressRegion": "Haute-Savoie",
                "addressCountry": "FR"
              }
            }
          })
        }}
      />
    </>
  );
}
