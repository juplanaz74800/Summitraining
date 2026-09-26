import { SITE_URL, SITE_NAME, CONTACT_EMAIL, SOCIALS } from './site';

const PERSON_ID = `${SITE_URL}/#julien-planaz`;
const BUSINESS_ID = `${SITE_URL}/#localbusiness`;

export const personSchema = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Julien Planaz',
  jobTitle: "Coach sportif — expert en physiologie de l'effort",
  description:
    "Coach certifié (Carte Pro n° 07421ED0122), Licence STAPS Entraînement & Altitude (Font-Romeu), Licence Biologie & Biochimie, DU Nutrition. Spécialiste trail, ultra-trail et course sur route.",
  image: `${SITE_URL}/img/photo%20coach.jpg`,
  url: `${SITE_URL}/a-propos`,
  email: CONTACT_EMAIL,
  worksFor: { '@id': BUSINESS_ID },
  sameAs: SOCIALS,
};

export const localBusinessSchema = {
  '@type': ['LocalBusiness', 'SportsActivityLocation'],
  '@id': BUSINESS_ID,
  name: 'Summitraining — Julien Planaz',
  alternateName: ['Summit Training', 'SUMMITRAINING'],
  url: SITE_URL,
  logo: `${SITE_URL}/img/logo.png`,
  image: `${SITE_URL}/img/og-image.jpg`,
  description:
    'Coaching trail et course à pied 100 % personnalisé par Julien Planaz, coach certifié basé à Annecy. Suivi à distance et en présentiel en Haute-Savoie, Savoie et Suisse romande.',
  email: CONTACT_EMAIL,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Annecy',
    addressRegion: 'Haute-Savoie',
    addressCountry: 'FR',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 45.8992, longitude: 6.1294 },
  areaServed: [
    { '@type': 'City', name: 'Annecy' },
    { '@type': 'AdministrativeArea', name: 'Haute-Savoie' },
    { '@type': 'AdministrativeArea', name: 'Savoie' },
    { '@type': 'AdministrativeArea', name: 'Suisse romande' },
  ],
  serviceType: ['Coaching trail', 'Coaching course à pied', 'Préparation marathon', 'Préparation ultra-trail'],
  priceRange: '€€',
  founder: { '@id': PERSON_ID },
  sameAs: SOCIALS,
};

export const websiteSchema = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE_NAME,
  alternateName: 'Summit Training',
  url: SITE_URL,
  inLanguage: 'fr-FR',
  publisher: { '@id': BUSINESS_ID },
};

/** Graphe global injecté une seule fois dans le layout racine. */
export const globalGraph = {
  '@context': 'https://schema.org',
  '@graph': [localBusinessSchema, personSchema, websiteSchema],
};

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === '/' ? '' : item.path}`,
    })),
  };
}

export function articleSchema({ slug, title, description, image, published, modified }) {
  const imageUrl = image?.startsWith('http') ? image : `${SITE_URL}${image}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${SITE_URL}/blog/${slug}#article`,
    mainEntityOfPage: `${SITE_URL}/blog/${slug}`,
    headline: title,
    description,
    image: imageUrl,
    datePublished: published,
    dateModified: modified || published,
    inLanguage: 'fr-FR',
    author: { '@id': PERSON_ID },
    publisher: { '@id': BUSINESS_ID },
  };
}
