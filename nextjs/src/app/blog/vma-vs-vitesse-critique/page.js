import ArticleLayout from '@/components/blog/ArticleLayout';
import Image from 'next/image';
import TableOfContents from '@/components/blog/TableOfContents';

export const metadata = {
  title: 'Vitesse Critique : Le Guide Ultime pour Maîtriser votre Intensité | SUMMITRAINING',
  description: 'Découvrez comment la Vitesse Critique (VC) et le D\' révolutionnent l\'entraînement en course à pied. Un guide scientifique complet par Julien Planaz.',
};

export default function VmaVsVc() {
  const tocItems = [
    { id: 'origine', title: 'L\'origine de la Vitesse Critique', level: 2 },
    { id: 'definition', title: '1. Qu\'est-ce que la vitesse critique (VC) ?', level: 2 },
    { id: 'vc-vs-mlss', title: '2. Vitesse Critique vs Seuil Lactique 2', level: 2 },
    { id: 'determination', title: '3. Comment déterminer sa vitesse critique sur le terrain ?', level: 2 },
    { id: 'vc-vs-vma', title: '4. Pourquoi la VC est-elle meilleure que la VMA ?', level: 2 },
    { id: 'entrainement', title: '5. Comment s\'entraîner avec la Vitesse Critique ?', level: 2 },
    { id: 'avantages-limites', title: '6. Avantages et Limites', level: 2 }
  ];

  return (
    <>
      <ArticleLayout
        title="Vitesse Critique : Le Guide Ultime pour Maîtriser votre Intensité"
        tag="Physiologie"
        author="Julien Planaz"
        date="10 Avril 2026"
        readTime="10 min de lecture"
        heroImage="/img/blog/vitesse_critique_hero_scientific_1775941924351.png"
        heroAlt="Athlète de haut niveau sur piste avec visualisation de données physiologiques en surimpression (Vitesse Critique, FC, Watts)."
        relatedPost={{
          title: "Guide Complet de l'Échelle de Borg : Perception de l'Effort (RPE)",
          href: "/blog/echelle-de-borg",
          image: "/img/blog/borg_hero_holographic_7_1776028139870.png",
          excerpt: "Apprenez à utiliser l'échelle de Borg pour calibrer vos entraînements avec une précision chirurgicale via le biofeedback."
        }}
      >
        <p className="chapeau">La <strong>vitesse critique (VC)</strong> est sans doute l'outil le plus puissant, mais aussi le plus sous-estimé de la physiologie de l'exercice moderne. Plus qu'une simple allure, elle définit la frontière exacte de votre potentiel d'endurance.</p>

        <TableOfContents items={tocItems} />

        <h2 id="origine">De la pédale à la foulée : L'origine de la Vitesse Critique</h2>
        <p>L'histoire de la vitesse critique ne commence pas sur une piste d'athlétisme, mais dans un laboratoire de physiologie du travail en 1965. Les chercheurs français <strong>Monod et Scherrer</strong> découvrent alors que la relation entre la puissance produite et le temps avant épuisement suit une courbe hyperbolique.</p>

        <p>Ils nomment l'asymptote de cette courbe la <strong>Puissance Critique (PC)</strong>. Longtemps réservée au cyclisme car la puissance y est facile à mesurer, cette notion a été transposée à la course à pied dans les années 80. La puissance est devenue la <strong>vitesse</strong>, et la capacité de travail anaérobie est devenue la <strong>distance de réserve (D')</strong>.</p>

        <div style={{ margin: '3rem 0', textAlign: 'center' }}>
          <Image 
            src="/img/blog/critical_power_graph_illustration_1775941971704.png" 
            alt="Graphique de la relation Vitesse-Temps montrant l'asymptote de la Vitesse Critique (VC) et la réserve anaérobie (D')." 
            width={800} 
            height={450} 
            className="article-image"
            unoptimized
          />
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}><em>Illustration de la courbe hyperbolique : plus la vitesse augmente au-dessus de la VC, plus le temps de maintien diminue drastiquement.</em></p>
        </div>

        <h2 id="definition">1. Qu'est-ce que la vitesse critique (VC) ?</h2>
        <p>La vitesse critique représente l'intensité la plus élevée que l'on peut maintenir sans atteindre un épuisement métabolique rapide. Mathématiquement, c'est la vitesse que vous pourriez maintenir "indéfiniment" si la fatigue neuromusculaire et thermique n'existait pas.</p>

        <h3>Pourquoi est-ce une bascule physiologique ?</h3>
        <p>En physiologie, on divise l'intensité en domaines. La VC est la frontière entre le <strong>domaine élevé</strong> (heavy) et le <strong>domaine sévère</strong> (severe) :</p>
        <ul>
          <li><strong>Sous la VC :</strong> Votre corps est à l'équilibre. La consommation d'oxygène (VO2), le lactate et le pH sanguin se stabilisent.</li>
          <li><strong>Au-dessus de la VC :</strong> L'état stable est impossible. On observe une dérive du VO2 vers son maximum, une chute du pH et un épuisement rapide de vos réserves d'énergie (phosphocréatine).</li>
        </ul>

        <h3>Combien de temps peut-on courir à la VC ?</h3>
        <p>Malgré la théorie, la réalité du terrain limite ce temps à cause de la déplétion du glycogène et de la fatigue centrale. En général, un athlète peut maintenir sa VC entre <strong>30 et 60 minutes</strong>.</p>

        <h2 id="vc-vs-mlss">2. Vitesse Critique vs Seuil Lactique 2 : Ne faites plus la confusion</h2>
        <p>On confond souvent la VC avec le <strong>Maximum Lactate Steady State (MLSS)</strong> ou "Seuil Anaérobie". Bien que proches, la VC est souvent légèrement supérieure (2 à 5 %) au seuil lactique. Là où le seuil lactique se concentre sur la concentration de lactate dans le sang, la VC est une modélisation mathématique de votre performance globale. C'est la limite supérieure réelle de votre zone de confort métabolique.</p>

        <h2 id="determination">3. Comment déterminer sa vitesse critique sur le terrain ?</h2>
        <p>L'un des grands avantages de la VC est qu'elle ne nécessite pas de test de laboratoire coûteux.</p>

        <h3>Le protocole : Deux tests "à bloc"</h3>
        <p>Pour modéliser votre profil, vous avez besoin de deux points de données issus d'efforts maximaux :</p>
        <ol>
          <li><strong>Un test court :</strong> (ex: 3 minutes ou 800m) pour solliciter la réserve anaérobie.</li>
          <li><strong>Un test long :</strong> (ex: 12 minutes ou 3000m) pour ancrer la composante aérobie.</li>
        </ol>

        <h3>Le calcul mathématique</h3>
        <p>On utilise la relation linéaire entre la distance parcourue (D) et le temps (t) :</p>
        <div style={{ background: 'var(--color-surface-container-low)', padding: '1.5rem', borderRadius: '8px', textAlign: 'center', margin: '1.5rem 0', fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: '1.2rem' }}>
          D = (VC × t) + D'
        </div>
        <ul>
          <li><strong>VC :</strong> C'est la pente de la droite (votre endurance fondamentale de haut niveau).</li>
          <li><strong>D' (D-prime) :</strong> C'est votre <strong>réserve anaérobie</strong>. Elle représente la distance que vous pouvez parcourir "au-dessus" de votre vitesse critique avant de devoir vous arrêter.</li>
        </ul>

        <h3>Le profil de coureur : Vitesse ou Endurance ?</h3>
        <ul>
          <li><strong>D' élevé / VC faible :</strong> Profil "Sprinteur/Vitesse". Très fort sur les efforts courts, mais s'écroule sur la durée.</li>
          <li><strong>D' faible / VC élevée :</strong> Profil "Diesel/Endurance". Très proche de sa VMA, capable de maintenir un train élevé longtemps, mais manque de punch final.</li>
        </ul>

        <h2 id="vc-vs-vma">4. Pourquoi la VC est-elle meilleure que la VMA ?</h2>
        <p>La VMA (Vitesse Maximale Aérobie) est un plafond théorique, mais elle ne dit rien sur votre capacité à tenir une fraction de cette vitesse. Deux coureurs avec une VMA de 18 km/h peuvent avoir des vitesses critiques totalement différentes.</p>
        <p>La VC est bien plus prédictive pour vos compétitions (5km, 10km, Semi) car elle définit votre vitesse de croisière maximale réelle, et non une vitesse de laboratoire tenue seulement 6 minutes.</p>

        <h2 id="entrainement">5. Comment s'entraîner avec la Vitesse Critique ?</h2>
        <p>Une fois votre VC déterminée, voici comment l'utiliser pour calibrer vos séances :</p>

        <div className="table-container">
          <table className="article-table">
            <thead>
              <tr>
                <th>Type de séance</th>
                <th>Intensité (% de VC)</th>
                <th>Objectif</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Endurance Fondamentale</strong></td>
                <td>&lt; 80%</td>
                <td>Récupération / Capillarisation</td>
              </tr>
              <tr>
                <td><strong>Tempo / Seuil</strong></td>
                <td>90% - 95%</td>
                <td>Capacité aérobie</td>
              </tr>
              <tr>
                <td><strong>Intervalles VC</strong></td>
                <td>100% - 102%</td>
                <td>Augmenter le seuil de rupture</td>
              </tr>
              <tr>
                <td><strong>VMA / Intervalles courts</strong></td>
                <td>&gt; 105%</td>
                <td>Puissance aérobie et D'</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Séances clés pour améliorer la VC</h3>
        <ul>
          <li><strong>Le Steady State :</strong> 3 x 10 min à 98% de la VC, récup 3 min.</li>
          <li><strong>Les Over-Under :</strong> Alterner 3 min à 105% VC et 2 min à 90% VC (apprendre au corps à recycler les déchets à haute intensité).</li>
        </ul>

        <h2 id="avantages-limites">6. Avantages et Limites</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1.5rem' }}>
          <div style={{ background: 'rgba(0, 255, 0, 0.05)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #4CAF50' }}>
            <h4 style={{ color: '#4CAF50', marginTop: 0 }}>Les plus</h4>
            <ul style={{ paddingLeft: '1.2rem', marginBottom: 0 }}>
              <li>Précision chirurgicale pour les allures.</li>
              <li>Gratuité (pas de capteur).</li>
              <li>Évolutivité simple (test/re-test).</li>
            </ul>
          </div>
          <div style={{ background: 'rgba(255, 0, 0, 0.05)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #f44336' }}>
            <h4 style={{ color: '#f44336', marginTop: 0 }}>Les moins</h4>
            <ul style={{ paddingLeft: '1.2rem', marginBottom: 0 }}>
              <li>Exigence mentale (efforts à 100%).</li>
              <li>Spécificité (flat vs trail D+).</li>
            </ul>
          </div>
        </div>

        <h2 style={{ marginTop: '3rem' }}>Bibliographie : Pour aller plus loin</h2>
        <ul className="references-list">
          <li><strong>Monod, H., & Scherrer, J. (1965).</strong> <em>The work capacity of a synergic muscular group.</em> Nature.</li>
          <li><strong>Poole, D. C., et al. (2016).</strong> <em>Critical Power: An Important Fatigue Threshold in Exercise Physiology.</em> Medicine and Science in Sports and Exercise.</li>
          <li><strong>Jones, A. M., & Vanhatalo, A. (2017).</strong> <em>The ‘Critical’ Power Concept: Applications to Sports Performance.</em> Sports Medicine.</li>
          <li><strong>Hughson, R. L., et al. (1984).</strong> <em>A high velocity threshold of variable duration in running.</em></li>
        </ul>

        <hr style={{ border: 'none', borderTop: '1px solid var(--color-surface-container-high)', margin: '3rem 0' }} />
        <p style={{ textAlign: 'center', fontStyle: 'italic', color: 'var(--color-text-muted)' }}>Julien Planaz – Coach Performance & Sciences du Sport</p>

      </ArticleLayout>
    </>
  );
}
