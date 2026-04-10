import Link from 'next/link';
import ArticleLayout from '@/components/blog/ArticleLayout';

export const metadata = {
  title: 'Vitesse Critique vs VMA : Le Nouveau Standard | SUMMITRAINING',
  description: 'Découvrez pourquoi la Vitesse Critique (VC) remplace la VMA pour calculer vos zones d\'entraînement. Guide complet et protocole de test.',
};

export default function VmaVsVc() {
  return (
    <>
      <ArticleLayout
        title="Vitesse Critique vs VMA : Le Nouveau Standard pour vos Zones d'Entraînement"
        tag="Physiologie de l'Entraînement"
        author="Julien Planaz"
        date="Mars 2026"
        readTime="7 min de lecture"
        heroImage="/img/vma-vs-vc-header.png"
        heroAlt="Graphique illustrant le passage de la VMA à la Vitesse Critique"
      >
        <p className="chapeau">Pendant des décennies, les coureurs se sont appuyés sur une seule métrique pour structurer leur préparation : la Vitesse Maximale Aérobie (VMA). Pourtant, la physiologie moderne du sport est formelle : cette méthode est obsolète et imprécise. Aujourd'hui, le nouveau "Gold Standard" est la Vitesse Critique (VC).</p>

        <p>Pourquoi devez-vous abandonner la VMA au profit de la Vitesse Critique pour définir vos zones d'entraînement ? Comment la calculer facilement ? Voici tout ce que la science nous dit.</p>

        <h2 id="limites-vma">1. Les limites de la VMA : Pourquoi ce n'est plus la référence</h2>
        <p>Le modèle d'entraînement basé sur la VMA souffre de deux biais physiologiques majeurs :</p>
        
        <h3>Une évaluation souvent faussée</h3>
        <p>La VMA est censée correspondre à la vitesse à laquelle vous atteignez votre VO2max. Or, les tests de terrain populaires ont tendance à <strong>surestimer cette valeur</strong> car l'athlète puise dans ses réserves anaérobies pour "tenir" le palier final.</p>
        
        <h3>L'illusion des pourcentages</h3>
        <p>Prescrire une séance à "80 % de la VMA" ne produit pas le même impact chez deux sportifs. Là où un profil endurant sera à l'aise, un profil explosif basculera dans le rouge, provoquant un épuisement prématuré.</p>

        <h2 id="definition-vc">2. Qu'est-ce que la Vitesse Critique (VC) ?</h2>
        <p>La Vitesse Critique marque une <strong>véritable frontière physiologique</strong>. Elle se définit comme la plus haute intensité d'effort maintenable sans accumulation continue d'acide lactique. C'est la véritable ligne rouge de votre endurance.</p>

        <h2 id="zones-entrainement">3. Redéfinir ses zones d'entraînement avec précision</h2>
        <p>Calculer sa VC permet de diviser vos allures en trois domaines réels :</p>
        <ul>
          <li><strong>Domaine Modéré :</strong> Sous 80-85 % de votre VC. Idéal pour bâtir une base aérobie solide.</li>
          <li><strong>Domaine Lourd :</strong> Entre 85 % et 100 % de votre VC. Allure spécifique semi-marathon ou marathon.</li>
          <li><strong>Domaine Sévère :</strong> Toute vitesse supérieure à votre VC. L'épuisement y est mathématiquement certain.</li>
        </ul>

        <h2 id="reserve-anaerobie">4. HIIT et Fractionné : La Réserve Anaérobie (D')</h2>
        <p>La Vitesse Critique permet également de calculer la taille de votre "batterie" anaérobie (D'). Cette donnée est cruciale pour calibrer vos séances de fractionné de manière 100 % individualisée, en fonction de votre capacité à tolérer les efforts supra-critiques.</p>

        <h2 id="protocole-test">5. Comment calculer sa Vitesse Critique ?</h2>
        <p>Réalisez sur piste ou route plate (avec 48h de repos entre chaque) :</p>
        <ul>
          <li>Un test de 3 minutes à vitesse maximale.</li>
          <li>Un test de 12 minutes à vitesse maximale.</li>
        </ul>

        <div style={{ margin: '2rem 0', padding: '2rem', background: 'rgba(0, 136, 255, 0.05)', borderLeft: '4px solid var(--color-accent)', borderRadius: '0 12px 12px 0' }}>
          <h4 style={{ color: 'var(--color-accent)', marginBottom: '1rem', fontSize: '1.3rem' }}>Simplifiez-vous la vie</h4>
          <p>J'ai développé un outil complet pour calculer instantanément votre Vitesse Critique et vos zones d'entraînement.</p>
          <Link href="/outils" className="btn btn-secondary">Essayer le Calculateur Gratuitement</Link>
        </div>

        <h2 id="conclusion">Conclusion</h2>
        <p>Passer de la VMA à la Vitesse Critique est une évolution scientifique majeure. En respectant votre profil physiologique unique, vous maximisez vos chances de performance et évitez le surentraînement.</p>

        <div className="references" style={{ marginTop: '4rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
          <h3>Sources Scientifiques</h3>
          <p>• Poole et al. (2016). Critical power: an important fatigue threshold in exercise physiology. <em>MSSE</em>.</p>
          <p>• Jones et al. (2010). Critical power: implications for determination of VO2max. <em>MSSE</em>.</p>
          <p>• Hill (1993). The critical power concept. <em>Sports Medicine</em>.</p>
        </div>
      </ArticleLayout>

      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Vitesse Critique vs VMA : Le Nouveau Standard pour vos Zones d'Entraînement",
            "image": "https://www.summitraining.fr/img/vma-vs-vc-header.png",
            "author": {
              "@type": "Person",
              "name": "Julien Planaz"
            },
            "datePublished": "2026-03-09"
          })
        }}
      />
    </>
  );
}
