import Link from 'next/link';
import LegalLayout from '@/components/layout/LegalLayout';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { CONTACT_EMAIL } from '@/lib/site';

export const metadata = {
  title: 'Politique de confidentialité',
  description: "Comment summitraining.fr collecte et protège vos données personnelles : formulaire de contact, mesure d'audience, vos droits RGPD.",
  alternates: { canonical: 'https://www.summitraining.fr/politique-de-confidentialite' },
};

const h2 = { fontFamily: 'var(--font-heading)', fontSize: '1.4rem', margin: '2.5rem 0 0.75rem' };
const a = { color: 'var(--color-accent)' };

export default function PolitiqueConfidentialite() {
  return (
    <LegalLayout title="Politique de confidentialité">
      <JsonLd data={breadcrumbSchema([{ name: 'Accueil', path: '/' }, { name: 'Politique de confidentialité', path: '/politique-de-confidentialite' }])} />

      <p>
        Cette page explique quelles données personnelles sont collectées sur <strong>www.summitraining.fr</strong>, pourquoi, et comment
        exercer vos droits. Le responsable du traitement est Julien Planaz (voir les <Link href="/mentions-legales" style={a}>mentions légales</Link>).
      </p>

      <h2 style={h2}>Données collectées via le formulaire de contact</h2>
      <p>
        Lorsque vous remplissez le formulaire de contact, nous collectons : nom, adresse e-mail, téléphone (facultatif), sport pratiqué,
        niveau d&apos;expérience, formule qui vous intéresse et message. Ces données servent uniquement à répondre à votre demande et à
        assurer le suivi commercial d&apos;un éventuel coaching. Base légale : votre consentement et l&apos;exécution de mesures
        précontractuelles.
      </p>
      <p>
        Pour traiter ces demandes, nous utilisons des sous-traitants : <strong>Formspree</strong> (réception des formulaires) et{' '}
        <strong>Make.com</strong> (automatisation du suivi). Vos données peuvent donc être traitées en dehors de l&apos;Union européenne,
        avec les garanties prévues par le RGPD (clauses contractuelles types).
      </p>
      <p>Durée de conservation : 3 ans à compter du dernier contact pour les prospects ; durée légale pour les clients.</p>

      <h2 style={h2}>Cookies et mesure d&apos;audience</h2>
      <p>
        Le site utilise <strong>Google Analytics 4</strong> pour mesurer la fréquentation (pages vues, provenance, appareil) et améliorer le
        contenu. Ce service dépose des cookies <strong>uniquement si vous les acceptez</strong> via le bandeau affiché lors de votre première
        visite. Sans votre accord, aucun cookie de mesure n&apos;est déposé et Google Analytics n&apos;est pas chargé.
      </p>
      <p>
        Votre choix est conservé dans votre navigateur (stockage local) et vous pouvez le modifier à tout moment avec le lien « Gérer les
        cookies » en bas de page. Vous pouvez aussi supprimer les cookies depuis les réglages de votre navigateur.
      </p>

      <h2 style={h2}>Hébergement et journaux techniques</h2>
      <p>
        Le site est hébergé par Vercel Inc. Des journaux techniques (adresse IP, date, pages consultées) sont conservés pour la sécurité
        et le bon fonctionnement du service.
      </p>

      <h2 style={h2}>Vos droits</h2>
      <p>
        Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de limitation, d&apos;opposition et de portabilité de
        vos données. Pour les exercer : <a href={`mailto:${CONTACT_EMAIL}`} style={a}>{CONTACT_EMAIL}</a>. En cas de désaccord, vous
        pouvez saisir la CNIL (<a href="https://www.cnil.fr" rel="noopener noreferrer" target="_blank" style={a}>cnil.fr</a>).
      </p>

      <h2 style={h2}>Données de santé et de performance</h2>
      <p>
        Dans le cadre d&apos;un coaching, vous pouvez transmettre des données d&apos;entraînement (fréquence cardiaque, puissance, allures).
        Elles ne sont utilisées que pour personnaliser votre programme et ne sont jamais revendues.
      </p>
    </LegalLayout>
  );
}
