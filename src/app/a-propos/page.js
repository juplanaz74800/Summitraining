import Image from 'next/image';
import Link from 'next/link';
import Testimonials from '@/components/sections/Testimonials';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import CTASection from '@/components/sections/CTASection';
import { Student, Mountains, Heartbeat, ShieldCheck, ChartBar } from '@phosphor-icons/react/dist/ssr';

export const metadata = {
  title: "Julien Planaz — Coach Trail & Running Annecy | STAPS, Physiologie de l'Effort",
  description: "Coach sportif basé à Annecy, spécialisé en physiologie de l'effort. Interventions en Haute-Savoie et Suisse Romande. Diplômé STAPS (Font-Romeu), Biologie et Nutrition.",
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
              Coach sportif basé à Annecy | Spécialisé en physiologie de l&apos;effort | Interventions en Haute-Savoie et Suisse Romande
            </p>
            <p style={{ fontWeight: 600, marginBottom: '1.5rem', color: 'var(--color-text-main)' }}>
              Éducateur Sportif Diplômé — Carte Professionnelle n° 07421ED0122
            </p>
            <p>Ma formation s&apos;est construite à Font-Romeu, en Licence STAPS Entraînement & Altitude, au contact des structures du CREPS et sous l&apos;enseignement de <strong>Grégory Doucende</strong> en physiologie de l&apos;exercice. C&apos;est là que j&apos;ai appris à mesurer l&apos;effort plutôt qu&apos;à simplement l&apos;estimer.</p>
            <p>Depuis, basé dans le Bassin Annécien, j&apos;accompagne des coureurs de trail et de route — débutants comme confirmés — en présentiel sur les sentiers de Haute-Savoie ou à distance pour les athlètes de Suisse Romande et d&apos;ailleurs.</p>
          </div>
        </div>
      </section>

      <section className="section bg-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Formation et <span className="text-accent">expertise</span></h2>
          </div>
          <div className="methodology-grid">
            <div className="card">
              <div className="card-icon"><Student weight="thin" size={44} className="text-accent" strokeWidth={1.5} /></div>
              <h3>Formation académique</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '1rem' }}><strong>Licence STAPS</strong> (Entraînement & Altitude) — Faculté de Sport de Font-Romeu, au contact des structures du CREPS et des enseignements de Grégory Doucende en physiologie de l&apos;exercice.</li>
                <li style={{ marginBottom: '1rem' }}><strong>Licence de Biologie & Biochimie</strong> — pour comprendre les mécanismes métaboliques et physiologiques qui sous-tendent la performance.</li>
                <li style={{ marginBottom: '1rem' }}><strong>Diplôme Universitaire (DU) en Nutrition</strong> — l&apos;alimentation reste un facteur de performance trop souvent négligé en endurance.</li>
              </ul>
            </div>
            
            <div className="card">
              <div className="card-icon"><Mountains weight="thin" size={44} className="text-accent" strokeWidth={1.5} /></div>
              <h3>Expérience terrain</h3>
              <p>Plus de 10 ans de pratique en trail et ultra-trail, sur les sentiers de Haute-Savoie et au-delà. Cette expérience de terrain permet de traduire les données physiologiques en séances concrètes, adaptées à un dénivelé réel et pas seulement à un tableur.</p>
              <div style={{ marginTop: '1.5rem', padding: '1.5rem', borderLeft: '3px solid var(--color-accent)', background: 'var(--color-surface-container-high)', borderRadius: '0 8px 8px 0' }}>
                 <p><strong>Domaines d&apos;intervention :</strong></p>
                 <ul style={{ listStyle: 'none', marginTop: '0.5rem', color: 'var(--color-text-main)' }}>
                      <li><Heartbeat weight="thin" size={16} className="text-accent" style={{ display: 'inline', marginRight: '8px' }} /> Accompagnement d&apos;athlètes de haut niveau en trail.</li>
                      <li><ShieldCheck weight="thin" size={16} className="text-accent" style={{ display: 'inline', marginRight: '8px' }} /> Préparation physique spécifique Spartan Race (catégorie Elite).</li>
                      <li><ChartBar weight="thin" size={16} className="text-accent" style={{ display: 'inline', marginRight: '8px' }} /> Analyse et modélisation de la charge d&apos;entraînement.</li>
                 </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Ma méthode de <span className="text-accent">coaching</span></h2>
            <p className="section-subtitle">Un accompagnement actif, pas une prestation figée.</p>
          </div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: 1.8, color: 'var(--color-text-muted)' }}>
            <p style={{ marginBottom: '1.5rem' }}>Je ne me contente pas de fournir un plan sur 10 semaines et d&apos;attendre les résultats. L&apos;objectif est que vous compreniez ce que vous faites et pourquoi, pour progresser durablement — pas seulement le temps d&apos;une saison.</p>
            <p style={{ marginBottom: '1.5rem' }}>Cette approche s&apos;appuie sur une <strong>veille scientifique continue</strong>, nourrie par les travaux de <strong>Guillaume Millet</strong> (physiologie de la fatigue), <strong>Rémi Rivet / KS Training</strong> (préparation physique) et <strong>Upside Strength</strong> (modélisation métabolique).</p>
            <p style={{ marginBottom: '1.5rem' }}>Les outils de modélisation utilisés (Puissance Critique, Vitesse Critique, VFC) permettent de calibrer chaque séance à votre état de forme réel, sans plan type ni copier-coller.</p>
          </div>
        </div>
      </section>

      <Testimonials />

      <CTASection 
        title="Basé à Annecy, disponible en Haute-Savoie et en Suisse Romande"
        subtitle="Que vous prépariez un trail sur les sentiers du Semnoz, un objectif route dans le Bassin Annécien, ou que vous soyez basé de l'autre côté de la frontière suisse, le suivi s'adapte à votre lieu d'entraînement — en présentiel ou à distance. Un appel de 30 minutes pour faire le point sur votre niveau actuel et construire ensemble une stratégie de progression."
        primaryButtonText="Réserver un appel gratuit"
        primaryButtonLink="/contact"
        secondaryButtonText="Voir mes services"
        secondaryButtonLink="/offres"
      />
    </>
  );
}
