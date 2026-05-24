import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ 
      minHeight: '80vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 className="section-title" style={{ fontSize: '8rem', marginBottom: 0, opacity: 0.1 }}>404</h1>
      <h2 style={{ fontSize: '2rem', marginTop: '-2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Sommet non trouvé</h2>
      
      <p style={{ color: 'var(--color-text-muted)', maxWidth: '500px', marginBottom: '3rem', fontSize: '1.1rem' }}>
        Il semble que vous ayez quitté le sentier. Ne vous inquiétez pas, il y a toujours un chemin pour revenir à votre objectif.
      </p>

      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/" className="btn btn-primary" style={{ padding: '0.8rem 2rem' }}>
          Retour à l'accueil
        </Link>
        <Link href="/blog" className="btn btn-secondary" style={{ padding: '0.8rem 2rem' }}>
          Explorer le blog
        </Link>
        <Link href="/a-propos" className="btn btn-secondary" style={{ padding: '0.8rem 2rem' }}>
          À propos du coaching
        </Link>
      </div>

      <div style={{ marginTop: '5rem', borderTop: '1px solid var(--color-outline)', paddingTop: '2rem', width: '100%', maxWidth: '600px' }}>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
          Besoin d'aide ? <Link href="/#contact" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>Contactez-moi directement</Link>
        </p>
      </div>
    </div>
  );
}
