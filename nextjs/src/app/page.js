import Hero from '@/components/sections/Hero';
import Methodology from '@/components/sections/Methodology';
import Vision from '@/components/sections/Vision';
import AboutTeaser from '@/components/sections/AboutTeaser';
import Workflow from '@/components/sections/Workflow';
import Values from '@/components/sections/Values';
import CalculatorTeaser from '@/components/sections/CalculatorTeaser';
import Offers from '@/components/sections/Offers';
import Contact from '@/components/sections/Contact';

export const metadata = {
  title: 'Coach Sportif Trail & Running Annecy - Suisse Romande',
  description: 'Coaching expert et 100% personnalisé à distance en course à pied et trail par Julien Planaz. Intervient sur Annecy, le bassin Annécien et la Suisse romande.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <Methodology />
      <Vision />
      <AboutTeaser />
      <Workflow />
      <Values />
      <CalculatorTeaser />
      <Offers />
      <Contact />
      
      {/* Schema Markup JSON-LD for Home */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SportsActivityLocation",
            "name": "SUMMITRAINING - Julien Planaz",
            "url": "https://www.summitraining.fr/",
            "image": "https://www.summitraining.fr/img/photo%20coach.jpg",
            "description": "Coaching expert et 100% personnalisé à distance en course à pied et trail par Julien Planaz.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Annecy",
              "addressCountry": "FR"
            },
            "priceRange": "Sur Devis"
          })
        }}
      />
    </>
  );
}
