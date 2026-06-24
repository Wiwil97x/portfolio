# Portfolio — Willem Marchety-Concy

Site portfolio personnel. Application **Next.js (App Router)** exportée en statique, déployée sur GitHub Pages.

## Stack
- Next.js 14.2.29 (App Router) + React 18.3 + TypeScript
- Tailwind CSS 3.4
- Export statique : `output: 'export'` → dossier `out/`
- Déploiement : GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)

## Configuration (`next.config.mjs`)
- `output: 'export'` (génération 100% statique, pas de serveur Node)
- `basePath: '/portfolio'` en production (sous-chemin GitHub Pages), vide en dev
- `trailingSlash: true`
- `images.unoptimized: true` (obligatoire pour l'export statique)
- `NEXT_PUBLIC_BASE_PATH` exposé pour préfixer les liens/assets en prod

## Structure
```
src/
  app/
    layout.tsx              # layout racine
    page.tsx                # page d'accueil (sections)
    globals.css             # styles globaux Tailwind
    projects/[slug]/page.tsx# pages de détail projet (route dynamique)
  components/
    Navbar.tsx
    CustomCursor.tsx
    sections/               # Hero, About, Skills, Method, Projects, Contact
  lib/
    projects.ts             # données des projets (slug, title, prev/next)
public/                     # assets statiques
out/                        # build statique généré (ne pas éditer à la main)
```

Projets actuels (dans `src/lib/projects.ts`) : roven, swifo, aren, bns-transport, pizza-italia, … (navigation prev/next chaînée).

## Commandes
- `npm run dev` — dev local (http://localhost:3000, basePath vide)
- `npm run build` — build + export statique vers `out/`
- `npm run lint`

## Déploiement
- Remote : `git@github-wiwil:Wiwil97x/portfolio.git` (origin), branche `main`
- Push sur `main` → workflow `deploy.yml` : `npm ci` → `npm run build` → `touch out/.nojekyll` → upload-pages-artifact → GitHub Pages
- Ne pas committer `out/` manuellement ; le workflow le régénère

## Règles
- Tout le contenu est en **français**
- `target="_blank" rel="noopener"` sur tous les liens externes
- Préfixer les chemins d'assets/liens internes avec le basePath en prod (`NEXT_PUBLIC_BASE_PATH`) sinon 404 sur GitHub Pages
- Ajouter un projet = entrée dans `src/lib/projects.ts` (avec chaînage prev/next) + assets dans `public/`
- Ne pas confondre avec `/mnt/e/Dev/01_projects/portfolio-next/` (vieille copie séparée, pas la prod)
