'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LEGAL } from '@/lib/site';

/**
 * Barre d'action fixe, visible uniquement sur mobile après un premier défilement :
 * appel direct et accès au formulaire, sans avoir à remonter jusqu'au menu.
 */
export default function MobileCTA() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Inutile sur la page contact et sur les pages légales.
  const hidden = ['/contact', '/mentions-legales', '/cgv', '/politique-de-confidentialite'].includes(pathname);
  if (hidden) return null;

  const tel = LEGAL.phone ? `tel:${LEGAL.phone.replace(/\s/g, '')}` : null;

  return (
    <div className={`mobile-cta${visible ? ' is-visible' : ''}`} aria-hidden={!visible}>
      {tel && (
        <a href={tel} className="btn btn-secondary mobile-cta-btn" tabIndex={visible ? 0 : -1}>
          Appeler
        </a>
      )}
      <Link href="/contact" className="btn btn-primary mobile-cta-btn" tabIndex={visible ? 0 : -1}>
        Appel gratuit
      </Link>
    </div>
  );
}
