import Link from 'next/link';

export const metadata = {
  title: 'Vitesse Critique vs VMA',
};

export default function VmaVsVc() {
  return (
    <section className="section" style={{ paddingTop: '100px' }}>
      <div className="container">
        <h1 className="section-title">Vitesse Critique vs <span className="text-accent">VMA</span></h1>
        <p>Cet article est en cours de migration...</p>
        <Link href="/blog" className="btn btn-primary mt-4">Retour au blog</Link>
      </div>
    </section>
  );
}
