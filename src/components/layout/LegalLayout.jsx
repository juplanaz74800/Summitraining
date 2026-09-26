import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { LEGAL } from '@/lib/site';

/** Affiche la valeur, ou un repère visible tant que l'information légale n'est pas renseignée. */
export function Field({ value, label }) {
  if (value) return <>{value}</>;
  return <mark style={{ background: '#fde68a', color: '#111', padding: '0 4px' }}>[{label} — à compléter]</mark>;
}

export default function LegalLayout({ title, children }) {
  return (
    <>
      <div style={{ paddingTop: '80px' }}>
        <Breadcrumbs />
      </div>
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '6rem' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <h1 className="section-title" style={{ marginBottom: '0.5rem' }}>{title}</h1>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '2.5rem', fontSize: '0.9rem' }}>
            Dernière mise à jour : {LEGAL.lastUpdate}
          </p>
          <div className="legal-content" style={{ lineHeight: 1.75, color: 'var(--color-text-main)' }}>
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
