import Hero from '@/components/sections/Hero';
import ProblemStatement from '@/components/sections/ProblemStatement';
import Methodology from '@/components/sections/Methodology';
import AboutTeaser from '@/components/sections/AboutTeaser';
import Testimonials from '@/components/sections/Testimonials';
import CalculatorTeaser from '@/components/sections/CalculatorTeaser';
import Offers from '@/components/sections/Offers';
import Contact from '@/components/sections/Contact';
import RelatedPosts from '@/components/seo/RelatedPosts';

export const metadata = {
  title: { absolute: 'Coach Trail Annecy & Haute-Savoie | Summitraining' },
  description: 'Coach trail et running à Annecy et en Haute-Savoie : coaching 100 % personnalisé à distance ou en présentiel, tous niveaux. Appel découverte gratuit.',
  alternates: {
    canonical: 'https://www.summitraining.fr',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemStatement />
      <Methodology />
      <AboutTeaser />
      <Testimonials />
      <CalculatorTeaser />
      <Offers variant="teaser" />
      <RelatedPosts title="Conseils & articles du coach" />
      <Contact />
    </>
  );
}
