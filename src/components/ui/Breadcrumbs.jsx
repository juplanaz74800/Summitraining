'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  if (pathname === '/') return null;

  const pathSegments = pathname.split('/').filter((segment) => segment !== '');
  
  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
    const label = segment
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (l) => l.toUpperCase());

    return { label, href };
  });

  return (
    <nav aria-label="Breadcrumb" className="container" style={{ margin: '1rem auto', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-technical)' }}>
      <Link href="/" style={{ display: 'flex', alignItems: 'center', color: 'inherit', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-accent)'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>
        <Home size={14} style={{ marginRight: '4px' }} />
        Accueil
      </Link>
      
      {breadcrumbs.map((crumb, index) => (
        <div key={crumb.href} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ChevronRight size={12} style={{ opacity: 0.5 }} />
          {index === breadcrumbs.length - 1 ? (
            <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>{crumb.label}</span>
          ) : (
            <Link 
              href={crumb.href} 
              style={{ color: 'inherit', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.target.style.color = 'var(--color-accent)'}
              onMouseLeave={(e) => e.target.style.color = 'inherit'}
            >
              {crumb.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
