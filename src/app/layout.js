import { Lexend, Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Providers } from './providers';

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://www.summitraining.fr'),
  title: {
    default: 'Coach Sportif Trail & Running Annecy — Haute-Savoie | SUMMITRAINING',
    template: '%s | SUMMITRAINING',
  },
  description: "Coaching trail et course à pied 100% personnalisé par Julien Planaz, coach certifié basé à Annecy (Haute-Savoie). Suivi à distance et en présentiel sur Annecy, Savoie, Haute-Savoie et Suisse romande.",
  keywords: [
    'coach trail Annecy',
    'coach running Annecy',
    'coach sportif Haute-Savoie',
    'entraîneur course à pied Annecy',
    'coaching trail personnalisé',
    'préparation ultra trail Savoie',
    'coach trail Haute-Savoie',
    'Julien Planaz',
    'summitraining',
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'SUMMITRAINING',
    images: [{ url: '/img/og-image.jpg', width: 1200, height: 630, alt: 'Julien Planaz — Coach Trail & Running Annecy' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@julien_planaz',
    creator: '@julien_planaz',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://www.summitraining.fr',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${lexend.variable} ${spaceGrotesk.variable} ${inter.variable}`} suppressHydrationWarning>
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>

        {/* Global SEO Schemas */}

        {/* Schema 1: LocalBusiness enrichi — coach sportif Annecy */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "SportsActivityLocation"],
              "@id": "https://www.summitraining.fr/#localbusiness",
              "name": "SUMMITRAINING — Julien Planaz",
              "url": "https://www.summitraining.fr",
              "logo": "https://www.summitraining.fr/img/logo.png",
              "image": "https://www.summitraining.fr/img/og-image.jpg",
              "description": "Coaching trail et course à pied 100% personnalisé par Julien Planaz, coach certifié basé à Annecy. Suivi à distance et en présentiel sur Annecy, Savoie, Haute-Savoie et Suisse romande.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Annecy",
                "addressRegion": "Haute-Savoie",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "45.8992",
                "longitude": "6.1294"
              },
              "areaServed": [
                { "@type": "City", "name": "Annecy" },
                { "@type": "AdministrativeArea", "name": "Haute-Savoie" },
                { "@type": "AdministrativeArea", "name": "Savoie" },
                { "@type": "AdministrativeArea", "name": "Suisse romande" }
              ],
              "serviceType": ["Coaching trail", "Coaching course à pied", "Préparation marathon", "Préparation ultra-trail"],
              "priceRange": "$$",
              "founder": {
                "@type": "Person",
                "@id": "https://www.summitraining.fr/#julien-planaz",
                "name": "Julien Planaz",
                "jobTitle": "Coach Sportif — Expert en Physiologie de l'Effort",
                "description": "Coach certifié (Carte Pro n° 07421ED0122), titulaire d'une Licence STAPS Entraînement & Altitude (Font-Romeu), Licence Biologie & Biochimie, et DU en Nutrition. Expert en trail, ultra-trail et course sur route.",
                "image": "https://www.summitraining.fr/img/og-image.jpg",
                "url": "https://www.summitraining.fr/a-propos",
                "sameAs": [
                  "https://www.instagram.com/julien_planaz/",
                  "https://www.linkedin.com/in/julien-planaz/",
                  "https://www.facebook.com/Julienplanazcoachsportif/",
                  "https://x.com/julien_planaz"
                ]
              },
              "sameAs": [
                "https://www.instagram.com/julien_planaz/",
                "https://www.linkedin.com/in/julien-planaz/",
                "https://www.facebook.com/Julienplanazcoachsportif/",
                "https://x.com/julien_planaz"
              ]
            })
          }}
        />

        {/* Schema 2: WebSite avec SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "SUMMITRAINING",
              "url": "https://www.summitraining.fr",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.summitraining.fr/blog?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
