'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function BlogContent() {
  return (
    <section className="section" id="page-header" style={{ paddingTop: '100px' }}>
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Le Blog <span className="text-accent">Summitraining</span></h1>
          <p className="section-subtitle" style={{ color: 'var(--color-text-muted)' }}>Conseils d'experts, méthodes d'entraînement et décryptage scientifique des sports d'endurance.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>

          {/* Article 0 - New: Borg Scale */}
          <motion.article 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="blog-card" 
            style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
          >
            <Link href="/blog/echelle-de-borg" style={{ display: 'block' }}>
              <Image src="/img/blog/borg_hero_holographic_7_1776028139870.png" alt="Guide Échelle de Borg RPE" width={400} height={200} style={{ width: '100%', height: '200px', objectFit: 'cover', borderBottom: '2px solid var(--color-accent)' }} unoptimized />
            </Link>
            <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: 'var(--color-accent)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600, marginBottom: '0.5rem' }}>Méthodologie</span>
              <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', lineHeight: 1.4 }}>
                <Link href="/blog/echelle-de-borg" style={{ color: 'inherit', textDecoration: 'none' }}>Guide Complet de l'Échelle de Borg : Mesurer la Perception de l'Effort (RPE)</Link>
              </h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>Le cerveau est l'outil de biofeedback le plus puissant. Apprenez à utiliser l'échelle de Borg pour calibrer vos entraînements avec une précision chirurgicale.</p>
              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '1rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Temps de lecture : 8 min</span>
                <Link href="/blog/echelle-de-borg" style={{ color: 'var(--color-text-main)', textDecoration: 'none', fontWeight: 600 }}>Lire l'article <span>→</span></Link>
              </div>
            </div>
          </motion.article>

          {/* Article 1 */}
          <motion.article 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="blog-card" 
            style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
          >
            <Link href="/blog/maxi-race" style={{ display: 'block' }}>
              <Image src="https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?q=80&w=800&auto=format&fit=crop" alt="Coureur en montagne lors de la Maxi-Race" width={400} height={200} style={{ width: '100%', height: '200px', objectFit: 'cover', borderBottom: '2px solid var(--color-accent)' }} unoptimized />
            </Link>
            <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: 'var(--color-accent)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600, marginBottom: '0.5rem' }}>Événement Local</span>
              <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', lineHeight: 1.4 }}>
                <Link href="/blog/maxi-race" style={{ color: 'inherit', textDecoration: 'none' }}>Maxi-Race d'Annecy 2026 : Modélisation Stratégique</Link>
              </h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>S'engager sur un ultra-trail de 100 km et 5782 m de D+ requiert une gestion systémique. Découvrez l'approche biomécanique et la stratégie idéale pour un objectif de 16h30.</p>
              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '1rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Temps de lecture : 6 min</span>
                <Link href="/blog/maxi-race" style={{ color: 'var(--color-text-main)', textDecoration: 'none', fontWeight: 600 }}>Lire l'article <span>→</span></Link>
              </div>
            </div>
          </motion.article>

          {/* Article 2 */}
          <motion.article 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="blog-card" 
            style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
          >
            <Link href="/blog/vma-vs-vitesse-critique" style={{ display: 'block' }}>
              <Image src="/img/vma-vs-vc-header.png" alt="Concept de Vitesse Critique" width={400} height={200} style={{ width: '100%', height: '200px', objectFit: 'cover', borderBottom: '2px solid var(--color-accent)' }} />
            </Link>
            <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: 'var(--color-accent)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600, marginBottom: '0.5rem' }}>Physiologie de l'Entraînement</span>
              <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', lineHeight: 1.4 }}>
                <Link href="/blog/vma-vs-vitesse-critique" style={{ color: 'inherit', textDecoration: 'none' }}>Vitesse Critique vs VMA : Le Nouveau Standard pour vos Zones d'Entraînement</Link>
              </h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>La VMA est une métrique historique, mais dépassée pour déterminer vos vraies zones d'endurance. Découvrez le paradigme de la Vitesse Critique, le nouveau Standard universel.</p>
              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '1rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Temps de lecture : 7 min</span>
                <Link href="/blog/vma-vs-vitesse-critique" style={{ color: 'var(--color-text-main)', textDecoration: 'none', fontWeight: 600 }}>Lire l'article <span>→</span></Link>
              </div>
            </div>
          </motion.article>

          {/* Article 3 */}
          <motion.article 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="blog-card" 
            style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
          >
            <Image src="https://images.unsplash.com/photo-1502904550040-7534597429ae?q=80&w=800&auto=format&fit=crop" alt="Outils Trail" width={400} height={200} style={{ width: '100%', height: '200px', objectFit: 'cover', borderBottom: '2px solid var(--color-accent)' }} unoptimized />
            <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: 'var(--color-accent)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600, marginBottom: '0.5rem' }}>Outils & Données</span>
              <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', lineHeight: 1.4 }}>Estimer ses allures : Le guide complet de notre calculateur</h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>Apprenez à utiliser gratuitement notre outil d'estimation de VAM et de Puissance pour définir vos propres zones d'entraînement dès votre prochaine sortie.</p>
              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '1rem' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Temps de lecture : 4 min</span>
                <Link href="/outils" style={{ color: 'var(--color-text-main)', textDecoration: 'none', fontWeight: 600 }}>Lire l'article <span>→</span></Link>
              </div>
            </div>
          </motion.article>

        </div>
      </div>
    </section>
  );
}
