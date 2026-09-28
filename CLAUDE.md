# CLAUDE.md

Instructions pour Claude Code sur ce repo.

## Déploiement

Le site www.summitraining.fr est hébergé sur Vercel/Netlify, branché sur ce
repo GitHub : tout push sur `main` redéploie automatiquement le site en
production. Il n'y a pas de CI séparée ni de fichier de config de
déploiement dans ce repo — le déploiement est entièrement piloté par les
push sur `main`.

## Mise en ligne automatique en fin de session

**À la fin d'une session où du code a été modifié**, merge la branche de
travail dans `main` et push, sans demander confirmation à chaque fois —
c'est le comportement voulu par défaut. Concrètement :

1. Vérifie que `npm run build` passe sans erreur.
2. Si le build échoue : ne merge pas, préviens l'utilisateur de ce qui
   bloque. Ne jamais poussé du code cassé en production.
3. Si le build passe : merge la branche courante dans `main` (merge simple,
   pas de rebase/force-push) et push sur `origin/main`.
4. Dis en une phrase ce qui a été mis en ligne.

Cette autorisation couvre uniquement le merge vers `main` + push. Les autres
opérations destructrices (force-push, reset --hard, suppression de
branche...) restent soumises à confirmation explicite comme d'habitude.

## Stack

Next.js (App Router) + React. Voir `package.json` pour les scripts
(`npm run dev`, `npm run build`).
