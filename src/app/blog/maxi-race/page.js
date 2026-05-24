import ArticleLayout from '@/components/blog/ArticleLayout';

export const metadata = {
  title: 'Maxi-Race d\'Annecy 2026 : préparer et courir les 100 km intelligemment | Summitraining',
  description: "Comment préparer et gérer la Maxi-Race d'Annecy 2026 en 100 km ? Stratégie de course, plan de marche, nutrition et gestion du dénivelé expliqués par un coach trail à Annecy.",
  keywords: ['Maxi-Race Annecy 2026', 'préparer Maxi-Race', 'stratégie ultra-trail 100 km', 'nutrition Maxi-Race', 'plan de marche Maxi-Race', 'coaching trail Annecy', 'Maxi-Race dénivelé Semnoz'],
};

export default function MaxiRace() {
  return (
    <>
      <ArticleLayout
        title="Maxi-Race d'Annecy 2026 : comment préparer et courir les 100 km intelligemment"
        tag="Événement Local"
        author="Julien Planaz"
        date="7 Mars 2026"
        readTime="6 min de lecture"
        heroImage="https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?q=80&w=1200&auto=format&fit=crop"
        heroAlt="Coureur de trail dans les montagnes de Haute-Savoie lors d'un ultra-trail"
        relatedPost={{
          title: "Vitesse Critique vs VMA : quelle allure pour s'entraîner vraiment ?",
          href: "/blog/vma-vs-vitesse-critique",
          image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=400&auto=format&fit=crop",
          excerpt: "Pourquoi votre VMA ne suffit pas pour calibrer vos séances, et comment la Vitesse Critique change la donne pour les coureurs longue distance."
        }}
      >
        <p className="chapeau">100 km. 5 782 m de dénivelé. Une nuit à passer sur les sentiers du lac d'Annecy. La Maxi-Race n'est pas une course qui s'improvise. Elle se prépare, elle se modélise, et surtout : elle se court avec la tête autant qu'avec les jambes.</p>

        <p>Cet article s'adresse à l'athlète qui vise <strong>16h30</strong> environ (cote UTMB autour de 600). Il vous donnera les clés concrètes pour aborder cette course avec une stratégie solide : gestion du dénivelé, plan de marche, nutrition, et ce à quoi vous devez vraiment vous attendre après le km 80.</p>

        <h2 id="analyse-topographique">1. Comprendre le profil de course avant de partir</h2>
        <p>La Maxi-Race 2026 se distingue par un profil très haché (plus de 57 m de D+/km en moyenne). Autrement dit, vous ne courez jamais vraiment à plat. Ce sont des constantes montées-descentes qui fatiguent différemment des longues rampes régulières.</p>

        <ul>
          <li>
            <strong>Le sens 2026 change tout :</strong> Cette édition inverse le parcours habituel. Conséquence majeure : <strong>l'ascension du Semnoz arrive après 85 km d'effort</strong>. Vous n'affronterez donc pas le point le plus exigeant du tracé au début, mais à la fin, au moment où vous serez le plus épuisé. Planifiez en conséquence.
          </li>
          <li>
            <strong>Les descentes, vos pires ennemies :</strong> Le facteur limitant ne sera pas cardiovasculaire : il sera mécanique. La descente plongeante au km 42 (environ 3 km à -25%) et la descente finale vers les Marquisats (6 km à -13,5%) vont marteler vos quadriceps. Ces contractions "frénatrices" génèrent des micro-lésions musculaires qui provoquent raideurs et perte de force dans les dernières heures. Préparez vos descentes autant que vos montées à l'entraînement.
          </li>
          <li>
            <strong>Les bâtons : indispensables, mais à maîtriser :</strong> Bien utilisés, les bâtons vous font économiser 15 à 20% de charge sur les membres inférieurs en montée. Mais la réglementation 2026 impose des zones sans bâton (km 3,5 à km 13, plus deux segments de 500 m autour du km 61). Entraînez-vous à switcher rapidement entre les deux modes de locomotion.
          </li>
        </ul>

        <h2 id="modelisation-allure">2. Votre plan de marche réaliste pour 16h30</h2>
        <p>Sur un ultra de 100 km, l'objectif n'est pas de faire un "negative split" (aller plus vite en deuxième moitié). C'est une rareté statistique. La fatigue musculaire, la dérive cardiaque et les douleurs GI ralentissent naturellement tout le monde après le km 70.</p>

        <p>La bonne approche : <strong>planifier une dégradation contrôlée de l'allure</strong>, ancrée sur votre ressenti (RPE), plutôt que sur des vitesses théoriques que vous ne pourrez pas tenir en conditions réelles.</p>

        <div className="table-container">
          <h3>Tableau de marche prévisionnel (objectif 16h30)</h3>
          <table className="article-table">
            <thead>
              <tr>
                <th>Kilométrage</th>
                <th>Point de passage / Ravitaillement</th>
                <th>Temps du tronçon</th>
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

        <p><strong>À noter :</strong> Ce tableau est une base de travail. Ajustez les temps de passage selon vos reconnaissances du terrain et vos conditions de forme le jour J. Préférez arriver 10 minutes avant l'horaire prévu plutôt que de courir après un chrono serré.</p>

        <h2 id="strategie-nutritionnelle">3. Stratégie nutritionnelle : ce que vous mangez fait autant que comment vous courez</h2>
        <p>La littérature sportive est claire : sur un ultra, <strong>60 à 90 g de glucides par heure</strong> sont nécessaires pour préserver vos réserves de glycogène musculaire et hépatique. Couplé à une hydratation de 400 à 600 ml/h selon la chaleur et votre taux de sudation.</p>

        <p>La difficulté sur 16h d'effort : maintenir cet apport alors que les nausées, la fatigue et le dégoût du sucré s'installent progressivement. C'est pourquoi vous devez avoir <strong>trois stratégies prêtes</strong>, pas une seule.</p>

        <h3>Les 3 modules d'apport (cible : 65-70 g de glucides/heure)</h3>
        <ul>
          <li>
            <strong>Option A : Équilibre Standard (km 0 à 60 environ) :</strong><br />
            1 gel (33 g) + 500 ml d'isotonique (35 g). Simple, efficace, bien toléré en début de course quand l'estomac fonctionne encore normalement.
          </li>
          <li>
            <strong>Option B : Dissociation Énergie/Hydratation (km 60 à 90) :</strong><br />
            2 gels par heure + 500 ml d'eau pure. Permet de séparer l'apport calorique de l'hydratation pour s'adapter aux nausées ou aux conditions chaudes.
          </li>
          <li>
            <strong>Option C : Rinçage de bouche (dernier recours, km 90+) :</strong><br />
            En cas de nausées sévères où avaler est impossible, rincer la bouche avec une boisson sucrée (sans avaler) active les récepteurs buccaux et peut maintenir l'effort. Ce n'est pas une solution à long terme, mais elle peut vous sauver sur les derniers kilomètres.
          </li>
        </ul>

        <h2 id="mental">4. Ce que personne ne vous dit sur les km 80-100</h2>
        <p>Après 80 km, la course change de nature. Vous n'êtes plus dans une logique de performance : vous êtes dans une logique de gestion. La fatigue centrale (le cerveau qui "coupe le signal") s'ajoute à la fatigue périphérique (les muscles). Les montées vous sembleront interminables. Les descentes feront mal.</p>

        <p>Trois réflexes pour passer ce cap :</p>
        <ul>
          <li><strong>Découpez en morceaux de 15 minutes.</strong> Ne pensez pas à l'arrivée. Pensez au prochain point de passage, au prochain ravitaillement.</li>
          <li><strong>Mangez même sans faim.</strong> La fatigue coupe l'appétit. Forcez-vous à ingérer quelque chose à chaque ravitaillement, même un bouillon chaud ou quelques chips.</li>
          <li><strong>Gérez le RPE, pas la vitesse.</strong> Votre montre vous dira que vous êtes lent. Ignorez-la. Maintenez un effort soutenable au ressenti : c'est la seule métrique qui vaille dans cet état.</li>
        </ul>

        <h2 id="conclusion">Conclusion : la préparation prime sur l'improvisation</h2>
        <p>Ce guide est un cadre, pas une vérité absolue. Chaque coureur est différent : biologie, entraînement, expérience des ultras. Ce qui fait la différence sur une Maxi-Race, ce n'est pas le matériel ni même le talent brut. C'est la rigueur de votre préparation et la lucidité de votre gestion de course.</p>
        <p>Testez votre stratégie nutritionnelle à l'entraînement. Courez vos longues sorties la nuit si l'objectif inclut une nuit sur les sentiers. Et si vous avez un doute sur votre préparation : parlez à quelqu'un qui connaît le terrain.</p>

      </ArticleLayout>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Maxi-Race d'Annecy 2026 : comment préparer et courir les 100 km intelligemment",
            "image": "https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?q=80&w=1200&auto=format&fit=crop",
            "author": {
              "@type": "Person",
              "name": "Julien Planaz",
              "jobTitle": "Coach Sportif Trail & Course à pied"
            },
            "datePublished": "2026-03-07",
            "publisher": {
              "@type": "Organization",
              "name": "Summitraining"
            },
            "description": "Comment préparer et gérer la Maxi-Race d'Annecy 2026 : stratégie de course, plan de marche, nutrition et gestion du dénivelé par un coach trail à Annecy."
          })
        }}
      />
    </>
  );
}
