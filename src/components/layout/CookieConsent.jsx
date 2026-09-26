'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';

const GA_ID = 'G-Z6PK74RVP9';
const STORAGE_KEY = 'summitraining-cookie-consent';
export const OPEN_EVENT = 'open-cookie-settings';

function readConsent() {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function writeConsent(value) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    /* stockage indisponible : le choix vaut pour la session uniquement */
  }
}

/**
 * Bandeau de consentement : Google Analytics n'est chargé qu'après acceptation.
 * « Refuser » est aussi simple que « Accepter » ; le choix se modifie via le lien
 * « Gérer les cookies » du pied de page.
 */
export default function CookieConsent() {
  const [consent, setConsent] = useState(null); // 'granted' | 'denied' | null
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = readConsent();
    if (stored === 'granted' || stored === 'denied') {
      setConsent(stored);
    } else {
      setOpen(true);
    }
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, reopen);
    return () => window.removeEventListener(OPEN_EVENT, reopen);
  }, []);

  const choose = (value) => {
    writeConsent(value);
    setConsent(value);
    setOpen(false);
    if (value === 'denied') {
      // Désactive toute mesure en cours pour cette session.
      window[`ga-disable-${GA_ID}`] = true;
    } else {
      window[`ga-disable-${GA_ID}`] = false;
    }
  };

  return (
    <>
      {consent === 'granted' && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}

      {open && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Gestion des cookies"
          style={{
            position: 'fixed',
            left: '1rem',
            right: '1rem',
            bottom: '1rem',
            zIndex: 1000,
            maxWidth: '640px',
            margin: '0 auto',
            padding: '1.25rem 1.5rem',
            background: 'var(--color-surface-container)',
            color: 'var(--color-text-main)',
            border: '1px solid var(--color-outline-variant)',
            borderRadius: '16px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.35)',
          }}
        >
          <p style={{ margin: '0 0 1rem', fontSize: '0.92rem', lineHeight: 1.6 }}>
            Ce site utilise <strong>Google Analytics</strong> pour mesurer sa fréquentation. Aucun cookie de mesure n&apos;est déposé sans
            votre accord.{' '}
            <Link href="/politique-de-confidentialite" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>
              En savoir plus
            </Link>
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button type="button" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem' }} onClick={() => choose('granted')}>
              Accepter
            </button>
            <button type="button" className="btn btn-secondary" style={{ padding: '0.5rem 1.25rem' }} onClick={() => choose('denied')}>
              Refuser
            </button>
          </div>
        </div>
      )}
    </>
  );
}
