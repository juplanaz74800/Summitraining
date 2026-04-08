import { Outfit, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '600', '800'],
  variable: '--font-outfit',
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
    <html lang="fr" className={`${outfit.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
