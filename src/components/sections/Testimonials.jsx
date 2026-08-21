export default function Testimonials() {
  const testimonials = [
    {
      initial: "G.P.",
      name: "G.P.",
      goal: "Objectif : Premier Ultra-Trail",
      content: (
        <>
          Julien m&apos;a accompagné sur mon premier ultra. Un <strong>plan d&apos;entraînement personnalisé</strong> et adapté chaque semaine selon ma fatigue. Résultat : objectif bouclé avec le sourire et zéro blessure. Un super <strong>coach trail</strong> !
        </>
      )
    },
    {
      initial: "E.L.",
      name: "E.L.",
      goal: "Objectif : Progression Trail 40 km",
      content: (
        <>
          Je stagnais depuis deux ans. Grâce au travail sur la <strong>puissance critique</strong> et des séances ciblées, j&apos;ai gagné 15 minutes sur 40 km en 6 mois. L&apos;approche scientifique fait toute la différence.
        </>
      )
    },
    {
      initial: "T.J.",
      name: "T.J.",
      goal: "Objectif : Trail & Endurance",
      content: (
        <>
          Une réactivité au top et une vraie prise en compte de mes contraintes pro. Ici pas de programme générique : le <strong>suivi individualisé</strong> et les conseils en <strong>nutrition sportive</strong> sont ultra précieux.
        </>
      )
    },
    {
      initial: "M.G.",
      name: "M.G.",
      goal: "Objectif : Débuter en Trail",
      content: (
        <>
          Complètement débutante, j&apos;appréhendais de prendre un <strong>coach sportif</strong>. Julien a su me mettre en confiance avec une <strong>progression adaptée</strong>. Je prépare mon deuxième trail avec grand plaisir !
        </>
      )
    },
    {
      initial: "R.G.",
      name: "R.G.",
      goal: "Objectif : Route & Ultra-Trail",
      content: (
        <>
          3 ans de suivi avec Summitraining. Une vraie rigueur dans la gestion de la <strong>charge d&apos;entraînement</strong> et de la récupération. Un <strong>préparateur physique</strong> passionné et toujours à l&apos;écoute.
        </>
      )
    }
  ];

  return (
    <section className="section bg-alt" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Ils me font <span className="text-accent">Confiance</span></h2>
          <p className="section-subtitle">Retours d&apos;expérience d&apos;athlètes accompagnés vers leurs objectifs.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '2rem', color: 'var(--color-accent)', lineHeight: 1 }}>&quot;</span>
                <span style={{ color: '#f5a623', fontSize: '0.95rem', letterSpacing: '2px' }}>★★★★★</span>
              </div>
              <p style={{ fontStyle: 'italic', flexGrow: 1, marginBottom: '1.5rem', color: 'var(--color-text-main)', lineHeight: '1.6' }}>
                {t.content}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <div style={{ width: '48px', height: '48px', minWidth: '48px', background: 'var(--color-bg-dark)', borderRadius: '50%', border: '1px solid var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--color-accent)', fontSize: '0.9rem' }}>
                  {t.initial}
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1rem' }}>{t.name}</h4>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{t.goal}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
