# Test Épargne & Investissement

## Setup

**Prérequis** : Node.js 24+ ou Docker

```bash
# Développement
pnpm i && pnpm dev

# Production
pnpm build && pnpm start

# Via Docker
docker compose up
```

L'application tourne sur [http://localhost:3000](http://localhost:3000).

---

## Décisions

### SSG + ISR (revalidate: 60s)

Les pages `/products` et `/products/[slug]` sont en SSG (et non SSR) car le contenu ne dépend pas de l'utilisateur — pas de prix personnalisés en fonction de son compte, ni de prix personnalisés en fonction de la zone géographique, etc.
Les pages sont identiques pour tous les visiteurs, ce qui permet de les servir depuis le CDN. L'ISR à 60s est un plus pour éviter le redéploiement.

---

## Limites

- Si les prix venaient à dépendre de l'utilisateur, il faudrait basculer en SSR.

## Pistes d'amélioration

- Dans un contexte avec un CMS, il faudrait peut-être une API spécifique côté backend pour récupérer tous les tags, afin d'éviter de les calculer côté frontend en fonction des produits (imaginons qu'il y en ait énormément des produits).
- Sur ce test, le filtre des tags se fait côté client. Si les filtres se complexifient et qu'une pagination s'ajoute, il serait peut-être préférable de le faire côté serveur à l'aide de l'url. Bon dans ce cas là on est pas sur un site e-commerce donc le nombre de produit ne risquent pas d'être énorme ^^
- Brancher une lib de tests (Vitest, React Testing Library)

### Temps passé : 2h10
