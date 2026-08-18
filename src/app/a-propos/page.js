import Image from 'next/image';
import Link from 'next/link';
import Testimonials from '@/components/sections/Testimonials';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import CTASection from '@/components/sections/CTASection';
import { GraduationCap, Mountain, Activity, ShieldCheck, BarChart3 } from 'lucide-react';

export const metadata = {
  title: 'Julien Planaz — Coach Trail & Running Annecy | STAPS, Physiologie de l\'Effort',
  description: 'Découvrez le parcours de Julien Planaz, coach certifié expert en trail et running basé à Annecy (Haute-Savoie). Diplômé STAPS, Biochimie et Nutrition, passionné par la physiologie de l\'effort depuis 10 ans.',
  alternates: {
    canonical: 'https://www.summitraining.fr/a-propos',
  },
};

export default function About() {
  return (
    <>
      <div style={{ paddingTop: '80px' }}>
        <Breadcrumbs />
      </div>

      <section className="section" id="about-hero">
        <div className="container about-wrapper">
          <div className="about-image">
            <Image src="/img/photo coach.jpg" alt="Julien Planaz, Coach Sportif Endurance" width={400} height={533} className="coach-photo" />
          </div>
          <div className="about-content">
            <h1 className="section-title">Le <span className="text-accent">Coach</span></h1>
            <h2>Julien Planaz</h2>
            <p className="subtitle text-accent font-technical" style={{ fontWeight: 600, fontSize: '1.2rem', marginTop: '-0.5rem', marginBottom: '2rem' }}>
              Coach Sportif | Expert en Physiologie de l'Effort | Annecy & International
            </p>
            <p>La montagne m'a appris à lire l'effort. Font-Romeu et la Licence STAPS m'ont appris à le mesurer. Pendant ces années à côtoyer l'élite au CREPS, sous l'enseignement de <strong>Grégory Doucende</strong>, j'ai transformé l'intuition du terrain en méthodologie scientifique rigoureuse.</p>
            <p>Depuis, je traduis la science en plans que vous pouvez réellement suivre, et que vous comprenez.</p>
          </div>
        </div>
      </section>

      <section className="section bg-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Ce que la science a <span className="text-accent">changé dans ma pratique</span></h2>
            <p className="section-subtitle">Trois formations, une conviction : comprendre l'effort pour mieux le développer.</p>
          </div>
          <div className="methodology-grid">
            <div className="card">
              <div className="card-icon"><GraduationCap size={44} className="text-accent" strokeWidth={1.5} /></div>
              <h3>Formation Académique</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '1rem' }}><strong>Licence STAPS</strong> (Entraînement & Altitude) - Faculté de Sport de Font-Romeu. Formation d'élite au contact des structures du CREPS et des enseignements de Grégory Doucende en physiologie de l'exercice.</li>
                <li style={{ marginBottom: '1rem' }}><strong>Licence de Biologie & Biochimie</strong> - Pour une compréhension profonde des mécanismes métaboliques et physiologiques.</li>
                <li style={{ marginBottom: '1rem' }}><strong>Diplôme Universitaire (DU) en Nutrition</strong> - Car l'énergie est le carburant de l'endurance.</li>
              </ul>
            </div>
            
            <div className="card">
              <div className="card-icon"><Mountain size={44} className="text-accent" strokeWidth={1.5} /></div>
              <h3>Expérience Coaching & Terrain</h3>
              <p>Plus de 10 ans de pratique passionnée en trail et ultra-trail. Mon expérience me permet de traduire les données scientifiques en conseils exploitables sur les sentiers.</p>
              <div style={{ marginTop: '1.5rem', padding: '1.5rem', borderLeft: '3px solid var(--color-accent)', background: 'var(--color-surface-container-high)', borderRadius: '0 8px 8px 0' }}>
                 <p><strong>Expertise spécifique :</strong></p>
                 <ul style={{ listStyle: 'none', marginTop: '0.5rem', color: 'var(--color-text-main)' }}>
                      <li><Activity size={16} className="text-accent" style={{ display: 'inline', marginRight: '8px' }} /> Accompagnement d'athlètes de haut niveau en Trail.</li>
                      <li><ShieldCheck size={16} className="text-accent" style={{ display: 'inline', marginRight: '8px' }} /> Préparation physique spécifique Spartan Race (Elite).</li>
                      <li><BarChart3 size={16} className="text-accent" style={{ display: 'inline', marginRight: '8px' }} /> Analyse et modélisation de la charge d'entraînement.</li>
                 </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Ma vision du <span className="text-accent">coaching</span></h2>
            <p className="section-subtitle">Un partenariat actif. Pas une prestation.</p>
          </div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: 1.8, color: 'var(--color-text-muted)' }}>
            <p style={{ marginBottom: '1.5rem' }}>Je ne suis pas là pour vous donner un plan de 10 semaines et attendre le résultat. Je suis là pour que vous compreniez ce que vous faites, pourquoi vous le faites, et comment progresser durablement.</p>
            <p style={{ marginBottom: '1.5rem' }}>Pour vous offrir le meilleur de la science du sport, je réalise une <strong>veille scientifique constante</strong>. Mon approche est nourrie par les travaux de <strong>Guillaume Millet</strong> (physiologie de la fatigue), <strong>Rémi Rivet / KS Training</strong> (préparation physique moderne) et <strong>Upside Strength</strong> (modélisation métabolique).</p>
            <p style={{ marginBottom: '1.5rem' }}>En utilisant des outils de modélisation (Puissance Critique, Vitesse Critique, VFC), je m'assure que chaque séance est parfaitement calibrée à votre état de forme du jour. Pas de copier-coller. Pas de template.</p>
          </div>
        </div>
      </section>

      <Testimonials />

      <CTASection 
        title="Votre profil mérite mieux qu'un plan générique."
        subtitle="Un appel de 30 minutes pour comprendre où vous en êtes et définir ensemble votre stratégie de progression."
        primaryButtonText="Réserver un appel gratuit"
        secondaryButtonText="Voir mes services"
      />
    </>
  );
}
