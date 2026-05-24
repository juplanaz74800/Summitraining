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
    default: 'Coach Sportif Trail & Running Annecy - Suisse Romande | SUMMITRAINING',
    template: '%s | SUMMITRAINING',
  },
  description: "Coaching expert et 100% personnalisé à distance en course à pied et trail par Julien Planaz. Intervient sur Annecy, le bassin Annécien et la Suisse romande.",
  keywords: ['coach sportif annecy', 'entraîneur course à pied', 'coach trail annecy', 'suisse romande', 'Julien Planaz', 'summitraining'],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'SUMMITRAINING',
    images: [{ url: '/img/photo coach.jpg' }],
  },
  robots: { index: true, follow: true },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SUMMITRAINING",
              "url": "https://www.summitraining.fr",
              "logo": "https://www.summitraining.fr/img/logo.png",
              "founder": {
                "@type": "Person",
                "name": "Julien Planaz"
              },
              "sameAs": [
                "https://www.instagram.com/julien_planaz/",
                "https://www.linkedin.com/in/julien-planaz/"
              ]
            })
          }}
        />
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
