import BlogList from '@/components/blog/BlogList';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import CTASection from '@/components/sections/CTASection';

export const metadata = {
  title: 'Blog Entraînement Endurance & Trail | Conseils d\'experts - SUMMITRAINING',
  description: 'Découvrez les conseils de Julien Planaz en trail, physiologie de l\'effort, tests VAM, et préparation pour vos courses en Haute-Savoie.',
};

export default function Blog() {
  return (
    <>
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
