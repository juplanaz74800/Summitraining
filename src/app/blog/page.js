import BlogList from '@/components/blog/BlogList';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import CTASection from '@/components/sections/CTASection';

import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata = {
  title: "Blog Trail & Entraînement Endurance",
  description: "Conseils de coach en trail et course à pied : physiologie de l'effort, Vitesse Critique, RPE, préparation de courses en Haute-Savoie.",
  alternates: {
    canonical: 'https://www.summitraining.fr/blog',
  },
};

export default function Blog() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Accueil', path: '/' }, { name: 'Blog', path: '/blog' }])} />
      <div style={{ paddingTop: '80px' }}>
        <Breadcrumbs />
      </div>
      
      <BlogList />

      <CTASection 
        title="Besoin d'un plan d'entraînement ?"
        subtitle="Ne suivez pas un plan générique. Obtenez une programmation basée sur vos propres données physiologiques."
        primaryButtonText="Démarrer mon coaching"
        secondaryButtonText="Voir les tarifs"
      />
    </>
  );
}
