import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Maxi-Race d\'Annecy 2026 : Modélisation Stratégique',
};

export default function MaxiRace() {
  return (
    <section className="section" style={{ paddingTop: '100px' }}>
      <div className="container">
        <h1 className="section-title">Maxi-Race d'Annecy <span className="text-accent">2026</span></h1>
        <p>Cet article est en cours de migration...</p>
        <Link href="/blog" className="btn btn-primary mt-4">Retour au blog</Link>
      </div>
    </section>
  );
}
