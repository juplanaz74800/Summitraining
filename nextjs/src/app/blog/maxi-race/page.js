import ArticleLayout from '@/components/blog/ArticleLayout';

export const metadata = {
  title: 'Maxi-Race d\'Annecy 2026 : Modélisation Stratégique | SUMMITRAINING',
  description: 'Guide complet: Modélisation globale, stratégie de course, gestion biomécanique et plan nutritionnel pour la Maxi-Race 2026.',
};

export default function MaxiRace() {
  return (
    <>
      <ArticleLayout
        title="Maxi-Race d'Annecy 2026 : Modélisation Stratégique, Biomécanique et Nutritionnelle"
        tag="Événement Local"
        author="Julien Planaz"
        date="Objectif 16h30"
        readTime="6 min de lecture"
        heroImage="https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?q=80&w=1200&auto=format&fit=crop"
        heroAlt="Coureur de trail dans les montagnes de Haute-Savoie"
        relatedPost={{
          title: "Vitesse Critique vs VMA : Quelle intensité pour le trail ?",
          href: "/blog/vma-vs-vitesse-critique",
          image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=400&auto=format&fit=crop",
          excerpt: "Pourquoi la VMA est souvent un mauvais indicateur pour les coureurs de longue distance et comment la Vitesse Critique révolutionne votre entraînement."
        }}
      >
        <p className="chapeau">S'engager sur un ultra-trail de 100 km et 5782 m de dénivelé positif (D+) requiert bien plus qu'une simple accumulation kilométrique à l'entraînement. C'est une épreuve de gestion systémique : il faut préserver l'intégrité de ses fibres musculaires, optimiser l'oxydation des substrats énergétiques et retarder la fatigue neuromusculaire.</p>
        
        <p>Pour un athlète ciblant 16h30 (correspondant environ à une cote UTMB de 600), l'approche doit être à la fois scientifiquement structurée dans ses grandes lignes et hautement flexible dans son exécution.</p>

        <h2 id="analyse-topographique">1. Analyse Topographique et Biomécanique</h2>
        <p>La <strong>Maxi-Race</strong> se distingue par un profil haché (ratio &gt; 57 m D+/km) qui impose de constantes variations cinétiques.</p>
        <ul>
          <li><strong>Le coût de la pente et le sens 2026 :</strong> Le parcours inversé modifie radicalement la charge neuromusculaire. L'ascension du Semnoz interviendra après 85 km d'effort, moment où l'épuisement glycogénique et la fatigue centrale (cerveau/système nerveux) seront à leur paroxysme.</li>
          <li><strong>La destruction excentrique :</strong> Le véritable facteur limitant ne sera pas cardiovasculaire, mais mécanique. La descente plongeante du kilomètre 42 (près de 3 km à -25,1 %) et la vertigineuse descente finale vers les Marquisats (6 km à -13,5 %) vont imposer un stress excentrique majeur aux quadriceps. Ces contractions (où le muscle s'allonge tout en freinant la charge) génèrent des micro-lésions (dommages musculaires induits par l'exercice), entraînant raideurs et perte de force.</li>
          <li><strong>L'économie de course via les bâtons :</strong> L'utilisation des bâtons permet de délester les membres inférieurs d'environ 15 à 20 % de la charge mécanique. Toutefois, la réglementation impose une grande agilité cognitive et motrice : interdiction totale entre le km 3,5 et le km 13, ainsi que sur deux segments de 500 m au col du km 60,9. Il faudra savoir "switcher" de biomécanique instantanément.</li>
        </ul>

        <h2 id="modelisation-allure">2. Modélisation de l'Allure et Dérive de la Fatigue</h2>
        <p>En physiologie de l'ultra-endurance, le negative split (accélérer en seconde moitié d'épreuve) est une anomalie statistique. La dérive cardiaque, l'inflammation systémique et la fatigue périphérique imposeront naturellement une dégradation de l'allure. Le plan de marche doit donc intégrer cette dégradation de manière contrôlée, en se basant sur l'échelle de perception de l'effort (RPE de 1 à 10).</p>

        <div className="table-container">
          <h3>Tableau de marche prévisionnel (16h30)</h3>
          <table className="article-table">
            <thead>
              <tr>
                <th>Kilométrage</th>
                <th>Point de passage / Ravitaillement</th>
                <th>Temps estimé du tronçon</th>
                <th>Temps cumulé</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Km 0</td><td>Départ : Annecy</td><td>-</td><td>0h00</td></tr>
              <tr><td>Km 17,3</td><td>Ravito Light 1</td><td>2h15</td><td>2h15</td></tr>
              <tr><td>Km 28,1</td><td>Ravito Light 2</td><td>2h00</td><td>4h15</td></tr>
              <tr><td>Km 36,9</td><td>Point d'eau</td><td>1h40</td><td>5h55</td></tr>
              <tr><td>Km 46,6</td><td>Base Vie Doussard</td><td>1h15</td><td>7h10</td></tr>
              <tr><td>Km 66,9</td><td>Ravito Light 3</td><td>3h45</td><td>10h55</td></tr>
              <tr><td>Km 85,5</td><td>Base Vie Semnoz</td><td>3h30</td><td>14h25</td></tr>
              <tr><td>Km 100</td><td>Arrivée : Annecy</td><td>2h05</td><td>16h30</td></tr>
            </tbody>
          </table>
        </div>

        <h2 id="strategie-nutritionnelle">3. Stratégie Nutritionnelle Modulaire</h2>
        <p>La littérature scientifique recommande un apport de 60 à 90 grammes de glucides exogènes par heure pour épargner le glycogène hépatique et musculaire, couplé à une hydratation de 400 à 600 ml/h selon le taux de sudation.</p>
        
        <h3>Les 3 modules d'apports (Cible : ~65-70 g glucides/heure)</h3>
        <ul>
          <li><strong>Option A : Équilibre Standard</strong><br />1 Gel (33 g) + 1 Flasque de 500 ml d'isotonique (35 g). Idéal en début de course.</li>
          <li><strong>Option B : Dominance Solide/Gels</strong><br />2 Gels (66 g) par heure + 500 ml d'eau pure. Permet de dissocier l'énergie de l'hydratation.</li>
          <li><strong>Option C : Rinçage de Bouche (Dernier recours)</strong><br />En cas de nausées, rincer la bouche avec une boisson glucidique stimule les récepteurs buccaux et maintient l'effort via les centres de récompense du cerveau.</li>
        </ul>

        <h2 id="conclusion">Conclusion : La méthode prime sur le dogme</h2>
        <p>Ce guide n'est pas une vérité absolue, mais un exemple de réflexion. En ultra-endurance, rien n'est figé. C'est la rigueur de votre entraînement et vos tests grandeur nature qui forgeront votre adaptation et votre confiance le jour J.</p>
      </ArticleLayout>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Maxi-Race d'Annecy 2026 : Modélisation Stratégique, Biomécanique et Nutritionnelle",
            "image": "https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?q=80&w=1200&auto=format&fit=crop",
            "author": {
              "@type": "Person",
              "name": "Julien Planaz"
            },
            "datePublished": "2026-03-07",
            "publisher": {
              "@type": "Organization",
              "name": "SUMMITRAINING"
            }
          })
        }}
      />
    </>
  );
}
