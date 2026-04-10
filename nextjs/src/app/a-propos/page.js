import Image from 'next/image';
import Link from 'next/link';
import Testimonials from '../../components/sections/Testimonials';

export const metadata = {
  title: 'À Propos de Julien Planaz',
  description: 'Découvrez le parcours de Julien Planaz, coach expert en trail et running sur Annecy. Diplômé STAPS et nutrition, passionné par la physiologie de l\'effort.',
};

export default function About() {
  return (
    <>
      <section className="section" style={{ paddingTop: '100px' }}>
        <div className="container about-wrapper">
          <div className="about-image">
            <Image src="/img/photo coach.jpg" alt="Julien Planaz, Coach Sportif Endurance" width={400} height={533} className="coach-photo" />
          </div>
          <div className="about-content">
            <h1 className="section-title">Le <span className="text-accent">Coach</span></h1>
            <h2>Julien Planaz</h2>
            <p className="subtitle text-accent" style={{ fontWeight: 600, fontSize: '1.2rem', marginTop: '-0.5rem', marginBottom: '2rem' }}>
              Expert en Physiologie de l'Effort | +10 ans d'expérience
            </p>
            <p>Mon expertise s'est forgée au cœur de l'altitude, à Font-Romeu. Durant mon cursus universitaire en STAPS « Entraînement & Altitude », j'ai eu l'opportunité d'étudier et de côtoyer les athlètes de haut niveau du CREPS, tout en me spécialisant en physiologie de l'exercice sous l'enseignement de <strong>Grégory Doucende</strong>.</p>
            <p>Cette immersion dans l'un des plus hauts lieux de la performance française a changé ma vision de l'effort, transformant l'intuition du terrain en une méthodologie scientifique rigoureuse appliquée au Trail Running.</p>
          </div>
        </div>
      </section>

      <section className="section bg-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Ma double expertise : <span className="text-accent">Science & Terrain</span></h2>
            <p className="section-subtitle">Un cursus universitaire conçu pour comprendre chaque rouage de la performance.</p>
          </div>
          <div className="methodology-grid">
            <div className="card">
              <div className="card-icon">🎓</div>
              <h3>Formation Académique</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '1rem' }}><strong>Licence STAPS</strong> (Entraînement & Altitude) - Faculté de Sport de Font-Romeu. Formation d'élite au contact des structures du CREPS et des enseignements de Grégory Doucende en physiologie de l'exercice.</li>
                <li style={{ marginBottom: '1rem' }}><strong>Licence de Biologie & Biochimie</strong> - Pour une compréhension profonde des mécanismes métaboliques et physiologiques.</li>
                <li style={{ marginBottom: '1rem' }}><strong>Diplôme Universitaire (DU) en Nutrition</strong> - Car l'énergie est le carburant de l'endurance.</li>
              </ul>
            </div>
            
            <div className="card">
              <div className="card-icon">🏔️</div>
              <h3>Expérience Coaching & Terrain</h3>
              <p>Plus de 10 ans de pratique passionnée en trail et ultra-trail. Mon expérience me permet de traduire les données scientifiques en conseils exploitables sur les sentiers.</p>
              <div style={{ marginTop: '1.5rem', padding: '1.5rem', borderLeft: '3px solid var(--color-accent)', background: 'rgba(0,136,255,0.05)', borderRadius: '0 8px 8px 0' }}>
                 <p><strong>Expertise spécifique :</strong></p>
                 <ul style={{ listStyle: 'none', marginTop: '0.5rem', color: 'var(--color-text-main)' }}>
                     <li>🏃 Accompagnement d'athlètes de haut niveau en Trail.</li>
                     <li>⚔️ Préparation physique spécifique Spartan Race (Elite).</li>
                     <li>📊 Analyse et modélisation de la charge d'entraînement.</li>
                 </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Une Vision <span className="text-accent">Holistique</span></h2>
            <p className="section-subtitle">Mieux comprendre pour mieux s'entraîner.</p>
          </div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: 1.8, color: 'var(--color-text-muted)' }}>
            <p style={{ marginBottom: '1.5rem' }}>Ma philosophie repose sur un <strong>partenariat actif</strong>. Je ne suis pas là pour vous donner un plan de 10 semaines et attendre le résultat. Mon rôle est de vous donner les clés de compréhension de l'entraînement.</p>
            <p style={{ marginBottom: '1.5rem' }}>Pour vous offrir le meilleur de la science du sport, je réalise une <strong>veille scientifique constante</strong> sur les derniers travaux publiés. Mon approche est nourrie par les recherches d'experts de référence tels que <strong>Guillaume Millet</strong> (physiologie de la fatigue), <strong>Rémi Rivet / KS Training</strong> (préparation physique moderne) et <strong>Upside Strength</strong> (modélisation métabolique).</p>
            <p style={{ marginBottom: '1.5rem' }}>En utilisant des outils de modélisation (Puissance Critique, Vitesse Critique, VFC), je m'assure que chaque séance est parfaitement calibrée à votre état de forme du jour, tout en respectant votre intégrité physique et votre équilibre personnel.</p>
            <div className="text-center" style={{ marginTop: '3rem' }}>
                <Link href="/#contact" className="btn btn-primary btn-large">Réserver un échange gratuit</Link>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
    </>
  );
}
