import Link from 'next/link';
import LegalLayout, { Field } from '@/components/layout/LegalLayout';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { LEGAL, CONTACT_EMAIL } from '@/lib/site';

export const metadata = {
  title: 'Conditions générales de vente',
  description: "Conditions générales de vente des prestations de coaching trail et running Summitraining : formules, tarifs, paiement, résiliation, rétractation.",
  alternates: { canonical: 'https://www.summitraining.fr/cgv' },
};

const h2 = { fontFamily: 'var(--font-heading)', fontSize: '1.4rem', margin: '2.5rem 0 0.75rem' };
const a = { color: 'var(--color-accent)' };

export default function CGV() {
  return (
    <LegalLayout title="Conditions générales de vente">
      <JsonLd data={breadcrumbSchema([{ name: 'Accueil', path: '/' }, { name: 'CGV', path: '/cgv' }])} />

      <h2 style={h2}>1. Objet</h2>
      <p>
        Les présentes conditions régissent les prestations de coaching sportif en trail et course à pied proposées par{' '}
        <strong>{LEGAL.ownerName}</strong> (« Summitraining »), SIRET <Field value={LEGAL.siret} label="n° SIRET" />, à toute personne
        physique ou morale (« le Client »). Toute commande implique l&apos;acceptation sans réserve des présentes.
      </p>

      <h2 style={h2}>2. Prestations et formules</h2>
      <ul style={{ paddingLeft: '1.25rem', listStyle: 'disc' }}>
        <li><strong>Plan Starter</strong> : bilan athlète, définition des zones d&apos;entraînement et plan structuré de 8 à 20 semaines. Paiement unique : 150 €.</li>
        <li><strong>Suivi Intermédiaire</strong> : plan adaptatif mensuel, messagerie et ajustements hebdomadaires. 99 € par mois.</li>
        <li><strong>All Inclusive</strong> : prise en charge complète (plan, analyse des données, visio mensuelle, conseils nutrition, disponibilité étendue). 140 € par mois.</li>
      </ul>
      <p>
        Le contenu détaillé de chaque formule est décrit sur la page <Link href="/offres" style={a}>Tarifs</Link>. Les prestations sont
        réalisées à distance (ou en présentiel sur accord préalable) ; elles constituent une obligation de moyens et non de résultat.
      </p>

      <h2 style={h2}>3. Prix et paiement</h2>
      <p>
        Les prix sont indiqués en euros. TVA : <Field value={LEGAL.vatNumber} label="régime de TVA" />. Modalités de paiement :{' '}
        <Field value="" label="moyens de paiement acceptés" />. Les formules mensuelles sont payables d&apos;avance, chaque mois.
      </p>

      <h2 style={h2}>4. Durée et résiliation</h2>
      <p>
        Le Plan Starter est un achat unique, sans engagement. Le Suivi Intermédiaire et l&apos;All Inclusive sont sans durée minimale : le
        Client peut y mettre fin à tout moment, avec un préavis de 15 jours, par e-mail à{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} style={a}>{CONTACT_EMAIL}</a>. Le Client peut changer de formule en cours de suivi.
      </p>

      <h2 style={h2}>5. Droit de rétractation</h2>
      <p>
        Le Client consommateur dispose d&apos;un délai de 14 jours à compter de la conclusion du contrat pour se rétracter, sans motif.
        S&apos;il demande expressément que la prestation commence avant la fin de ce délai, il devra payer la part de service déjà fournie ;
        lorsque la prestation est pleinement exécutée avant la fin du délai avec son accord exprès, le droit de rétractation est perdu.
      </p>

      <h2 style={h2}>6. Santé et responsabilité</h2>
      <p>
        Le Client déclare être apte à la pratique sportive et s&apos;engage à fournir une information exacte sur son état de santé. Un
        certificat ou avis médical peut être demandé. Le Client reste seul juge de sa capacité à réaliser les séances et s&apos;engage à
        interrompre l&apos;effort en cas de douleur ou de malaise. La responsabilité de l&apos;éditeur est limitée aux dommages directs
        causés par un manquement à ses obligations.
      </p>

      <h2 style={h2}>7. Propriété intellectuelle</h2>
      <p>
        Les plans, méthodes et documents remis restent la propriété de l&apos;éditeur et sont destinés à l&apos;usage personnel du Client.
        Toute diffusion ou revente est interdite.
      </p>

      <h2 style={h2}>8. Données personnelles</h2>
      <p>
        Les données collectées sont traitées conformément à la <Link href="/politique-de-confidentialite" style={a}>politique de confidentialité</Link>.
      </p>

      <h2 style={h2}>9. Médiation et droit applicable</h2>
      <p>
        En cas de litige, le Client peut recourir gratuitement à un médiateur de la consommation :{' '}
        <Field value={LEGAL.mediator} label="coordonnées du médiateur" />. Les présentes CGV sont soumises au droit français.
      </p>
    </LegalLayout>
  );
}
