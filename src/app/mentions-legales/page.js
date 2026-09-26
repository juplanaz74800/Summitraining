import Link from 'next/link';
import LegalLayout, { Field } from '@/components/layout/LegalLayout';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { LEGAL, CONTACT_EMAIL } from '@/lib/site';

export const metadata = {
  title: 'Mentions légales',
  description: "Mentions légales du site summitraining.fr : éditeur, hébergeur, propriété intellectuelle et contact.",
  alternates: { canonical: 'https://www.summitraining.fr/mentions-legales' },
};

const h2 = { fontFamily: 'var(--font-heading)', fontSize: '1.4rem', margin: '2.5rem 0 0.75rem' };

export default function MentionsLegales() {
  return (
    <LegalLayout title="Mentions légales">
      <JsonLd data={breadcrumbSchema([{ name: 'Accueil', path: '/' }, { name: 'Mentions légales', path: '/mentions-legales' }])} />

      <h2 style={h2}>Éditeur du site</h2>
      <p>
        Le site <strong>www.summitraining.fr</strong> est édité par <strong>{LEGAL.ownerName}</strong>, coach sportif
        (enseigne « Summitraining »).
      </p>
      <ul style={{ paddingLeft: '1.25rem', listStyle: 'disc' }}>
        <li>Statut juridique : <Field value={LEGAL.legalForm} label="forme juridique" /></li>
        <li>SIRET : <Field value={LEGAL.siret} label="n° SIRET" /></li>
        <li>TVA : <Field value={LEGAL.vatNumber} label="n° TVA ou mention d'exonération" /></li>
        <li>Adresse professionnelle : <Field value={LEGAL.address} label="adresse" /></li>
        <li>Téléphone : <Field value={LEGAL.phone} label="téléphone" /></li>
        <li>E-mail : <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: 'var(--color-accent)' }}>{CONTACT_EMAIL}</a></li>
        <li>Carte professionnelle d&apos;éducateur sportif : n° {LEGAL.cardPro}</li>
      </ul>

      <h2 style={h2}>Directeur de la publication</h2>
      <p>{LEGAL.publicationDirector}.</p>

      <h2 style={h2}>Hébergeur</h2>
      <p>
        Le site est hébergé par <strong>{LEGAL.host.name}</strong>, {LEGAL.host.address} —{' '}
        <a href={LEGAL.host.website} rel="noopener noreferrer" target="_blank" style={{ color: 'var(--color-accent)' }}>{LEGAL.host.website}</a>.
      </p>

      <h2 style={h2}>Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des contenus du site (textes, images, vidéos, logos, méthodes, outils de calcul) est protégé par le droit
        d&apos;auteur. Toute reproduction, représentation ou adaptation, totale ou partielle, sans autorisation écrite préalable de
        l&apos;éditeur est interdite.
      </p>

      <h2 style={h2}>Responsabilité</h2>
      <p>
        Les contenus du site (articles, calculateurs, conseils d&apos;entraînement) ont une vocation informative et ne remplacent pas
        un avis médical. Avant toute reprise ou intensification d&apos;une activité physique, consultez un médecin. L&apos;éditeur ne
        saurait être tenu responsable d&apos;une utilisation inadaptée de ces informations.
      </p>

      <h2 style={h2}>Données personnelles et cookies</h2>
      <p>
        Le traitement des données personnelles est décrit dans la <Link href="/politique-de-confidentialite" style={{ color: 'var(--color-accent)' }}>politique de confidentialité</Link>.
      </p>

      <h2 style={h2}>Conditions de vente</h2>
      <p>
        Les prestations de coaching sont soumises aux <Link href="/cgv" style={{ color: 'var(--color-accent)' }}>conditions générales de vente</Link>.
      </p>
    </LegalLayout>
  );
}
