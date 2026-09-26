import Link from 'next/link';
import { POSTS, getPost } from '@/lib/pages';

/**
 * Bloc de maillage interne vers les articles du blog.
 * `slugs` : liste ordonnée d'articles à afficher (tous par défaut).
 */
export default function RelatedPosts({ slugs, title = 'Pour aller plus loin' }) {
  const posts = slugs ? slugs.map(getPost).filter(Boolean) : POSTS;
  return (
    <section className="section" style={{ paddingTop: '3rem', paddingBottom: '1rem' }}>
      <div className="container">
        <h2 className="section-title" style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '2rem' }}>{title}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card" style={{ textDecoration: 'none', color: 'inherit', display: 'block', padding: '1.5rem' }}>
              <span className="font-technical" style={{ color: 'var(--color-accent)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }}>{post.tag}</span>
              <h3 style={{ fontSize: '1.15rem', margin: '0.5rem 0', fontFamily: 'var(--font-heading)' }}>{post.shortTitle}</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.5, margin: 0 }}>{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
