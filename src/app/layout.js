import { Lexend, Space_Grotesk, Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Providers } from './providers';
import JsonLd from '@/components/seo/JsonLd';
import { globalGraph } from '@/lib/schema';

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
    default: 'Coach Trail Annecy & Haute-Savoie | Summitraining',
    template: '%s | Summitraining',
  },
  description: "Coach trail et running à Annecy et en Haute-Savoie : coaching 100 % personnalisé par Julien Planaz, à distance ou en présentiel. Appel découverte gratuit.",
  applicationName: 'Summitraining',
  authors: [{ name: 'Julien Planaz', url: 'https://www.summitraining.fr/a-propos' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Summitraining',
    images: [{ url: '/img/og-image.jpg', width: 1200, height: 630, alt: 'Julien Planaz — Coach Trail & Running Annecy' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@julien_planaz',
    creator: '@julien_planaz',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${lexend.variable} ${spaceGrotesk.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Z6PK74RVP9"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Z6PK74RVP9');
            `,
          }}
        />
      </head>
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>

        {/* Schéma global : LocalBusiness + Person + WebSite (une seule fois) */}
        <JsonLd data={globalGraph} />
      </body>
    </html>
  );
}
