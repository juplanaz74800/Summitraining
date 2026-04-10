import BlogList from '@/components/blog/BlogList';

export const metadata = {
  title: 'Blog Entraînement Endurance & Trail | Conseils d\'experts - SUMMITRAINING',
  description: 'Découvrez les conseils de Julien Planaz en trail, physiologie de l\'effort, tests VAM, et préparation pour vos courses en Haute-Savoie.',
};

export default function Blog() {
  return (
    <>
      <BlogList />
    </>
  );
}
