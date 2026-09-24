'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, WarningCircle, CircleNotch, PaperPlaneRight } from '@phosphor-icons/react/dist/ssr';

// ⚙️ CONFIGURATION — Remplace par ton ID Formspree après création du compte sur formspree.io
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xwlewgel';

// ⚙️ CONFIGURATION — Phase 2 (automatisation CRM) : colle ici l'URL du webhook
// "Custom webhook" créé dans Make.com (voir guide de mise en place). Tant que
// cette valeur n'est pas remplacée, l'appel est simplement ignoré.
const AUTOMATION_WEBHOOK_URL = 'REMPLACER_PAR_URL_WEBHOOK_MAKE';

// Services proposés — labels alignés sur les formules présentées dans Offers.jsx
const SERVICE_OPTIONS = [
  { value: 'starter', label: 'Plan Starter (150€, paiement unique)' },
  { value: 'intermediaire', label: 'Suivi Intermédiaire (99€/mois)' },
  { value: 'all-inclusive', label: 'All Inclusive (140€/mois)' },
  { value: 'seance-solo', label: 'Séance présentiel Solo (70€/séance)' },
  { value: 'seance-duo', label: 'Séance présentiel Duo (45€/pers)' },
  { value: 'small-group', label: 'Small Group (30€/pers)' },
  { value: 'stage-trail', label: 'Stage Trail (sur devis)' },
  { value: 'not-sure', label: 'Je ne sais pas encore' },
];

const AVAILABILITY_OPTIONS = [
  { value: 'semaine-matin', label: 'Semaine — matin' },
  { value: 'semaine-apres-midi', label: 'Semaine — après-midi' },
  { value: 'semaine-soir', label: 'Semaine — soir' },
  { value: 'weekend-matin', label: 'Week-end — matin' },
  { value: 'weekend-apres-midi', label: 'Week-end — après-midi' },
  { value: 'weekend-soir', label: 'Week-end — soir' },
];

export default function ContactForm({ compact = false }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sport: '',
    experience: '',
    serviceInterest: '',
    availability: [],
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAvailabilityChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      availability: prev.availability.includes(value)
        ? prev.availability.filter((v) => v !== value)
        : [...prev.availability, value],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const availabilityLabels = formData.availability
        .map((value) => AVAILABILITY_OPTIONS.find((opt) => opt.value === value)?.label)
        .filter(Boolean);
      const serviceLabel = SERVICE_OPTIONS.find((opt) => opt.value === formData.serviceInterest)?.label || '';

      const enrichedPayload = {
        ...formData,
        serviceInterest: serviceLabel,
        availability: availabilityLabels.join(', '),
        submittedAt: new Date().toISOString(),
      };

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(enrichedPayload),
      });

      // Automatisation CRM (Phase 2) : envoi en parallèle vers Zapier/Make,
      // sans jamais bloquer ni faire échouer la soumission du formulaire.
      if (!AUTOMATION_WEBHOOK_URL.startsWith('REMPLACER_')) {
        fetch(AUTOMATION_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(enrichedPayload),
        }).catch(() => {});
      }

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          sport: '',
          experience: '',
          serviceInterest: '',
          availability: [],
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
          padding: '4rem 2rem',
          textAlign: 'center',
          background: 'var(--color-surface-container)',
          borderRadius: '16px',
          border: '1px solid rgba(43, 108, 242, 0.3)',
        }}
      >
        <CheckCircle weight="thin" size={56} style={{ color: '#22c55e' }} />
        <div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            Message envoyé !
          </h3>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '400px', lineHeight: 1.6 }}>
            Merci pour votre message. Je vous réponds sous 24h pour fixer notre premier échange.
          </p>
        </div>
        <button
          onClick={() => setStatus('idle')}
          className="btn btn-secondary"
          style={{ marginTop: '1rem' }}
        >
          Envoyer un autre message
        </button>
      </motion.div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {/* Nom */}
      <div className="form-group">
        <label htmlFor="name">Nom / Prénom</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Votre nom complet"
          value={formData.name}
          onChange={handleChange}
          disabled={status === 'loading'}
        />
      </div>

      {/* Email */}
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="votre@email.com"
          value={formData.email}
          onChange={handleChange}
          disabled={status === 'loading'}
        />
      </div>

      {/* Téléphone */}
      <div className="form-group">
        <label htmlFor="phone">Téléphone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          placeholder="06 12 34 56 78"
          value={formData.phone}
          onChange={handleChange}
          disabled={status === 'loading'}
        />
      </div>

      {/* Discipline */}
      <div className="form-group">
        <label htmlFor="sport">Discipline principale</label>
        <select
          id="sport"
          name="sport"
          required
          value={formData.sport}
          onChange={handleChange}
          disabled={status === 'loading'}
        >
          <option value="" disabled>Choisissez votre sport</option>
          <option value="trail">Trail Running / Ultra-Trail</option>
          <option value="running">Course sur route (10k, Semi, Marathon)</option>
          <option value="other">Autre / Multisport</option>
        </select>
      </div>

      {/* Expérience */}
      <div className="form-group">
        <label>Années de pratique</label>
        <div className="radio-group" style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
          {[
            { value: '<2', label: 'Moins de 2 ans' },
            { value: '2-5', label: '2 à 5 ans' },
            { value: '5+', label: '5 ans et plus' },
          ].map(({ value, label }) => (
            <label
              key={value}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontWeight: 500,
                fontSize: '0.95rem',
                cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                opacity: status === 'loading' ? 0.6 : 1,
              }}
            >
              <input
                type="radio"
                name="experience"
                value={value}
                required
                checked={formData.experience === value}
                onChange={handleChange}
                disabled={status === 'loading'}
              />
              {label}
            </label>
          ))}
        </div>
      </div>

      {/* Service souhaité */}
      <div className="form-group">
        <label htmlFor="serviceInterest">Formule qui vous intéresse</label>
        <select
          id="serviceInterest"
          name="serviceInterest"
          value={formData.serviceInterest}
          onChange={handleChange}
          disabled={status === 'loading'}
        >
          <option value="">Sélectionnez une formule (optionnel)</option>
          {SERVICE_OPTIONS.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>

      {/* Disponibilités */}
      <div className="form-group">
        <label>Vos disponibilités pour un premier échange</label>
        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
          {AVAILABILITY_OPTIONS.map(({ value, label }) => (
            <label
              key={value}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontWeight: 500,
                fontSize: '0.9rem',
                cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                opacity: status === 'loading' ? 0.6 : 1,
              }}
            >
              <input
                type="checkbox"
                checked={formData.availability.includes(value)}
                onChange={() => handleAvailabilityChange(value)}
                disabled={status === 'loading'}
              />
              {label}
            </label>
          ))}
        </div>
      </div>

      {/* Message */}
      <div className="form-group">
        <label htmlFor="message">Votre projet</label>
        <textarea
          id="message"
          name="message"
          rows={compact ? 4 : 5}
          required
          placeholder="Mon prochain objectif est... Voici où j'en suis..."
          value={formData.message}
          onChange={handleChange}
          disabled={status === 'loading'}
        />
      </div>

      {/* Feedback erreur */}
      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '1rem 1.25rem',
            background: 'rgba(255, 80, 80, 0.08)',
            border: '1px solid rgba(255, 80, 80, 0.25)',
            borderRadius: '10px',
            color: '#ff6b6b',
            fontSize: '0.9rem',
            marginBottom: '0.5rem',
          }}
        >
          <WarningCircle weight="thin" size={18} style={{ flexShrink: 0 }} />
          Une erreur s&apos;est produite. Réessayez ou contactez-moi directement par email.
        </motion.div>
      )}

      {/* Bouton */}
      <button
        type="submit"
        className="btn btn-primary btn-large"
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.75rem',
          opacity: status === 'loading' ? 0.8 : 1,
          cursor: status === 'loading' ? 'not-allowed' : 'pointer',
        }}
        disabled={status === 'loading'}
      >
        {status === 'loading' ? (
          <>
            <CircleNotch weight="thin" size={18} style={{ animation: 'spin 1s linear infinite' }} />
            Envoi en cours...
          </>
        ) : (
          <>
            <PaperPlaneRight weight="thin" size={18} />
            Envoyer ma candidature
          </>
        )}
      </button>

      <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', textAlign: 'center', marginTop: '1rem' }}>
        Je réponds sous 24h. Aucune liste de diffusion, aucun spam.
      </p>
    </form>
  );
}
