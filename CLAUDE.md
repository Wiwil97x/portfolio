# Portfolio — Willem Marchety-Concy

Site portfolio personnel, entièrement statique (HTML/CSS/JS vanilla, zéro dépendance).

## Stack
- HTML5, CSS3, JavaScript vanilla — aucun framework, aucun bundler
- Déployé sur GitHub Pages via `git@github-wiwil:Wiwil97x/portfolio.git`

## Structure
- `index.html` — page d'accueil
- `projects/*.html` — pages de détail des projets (bns-transport, pizza-italia, roven, nova-strategie, flowly)
- `pages/*.html` — copies locales des sites clients (pizza_italia_update, nova, flowly)
- `css/style.css` — feuille de style unique
- `js/main.js` — JS minimal (nav mobile)
- `assets/img/photo.jpg` — photo hero
- `assets/projects/<slug>/` — images de chaque projet (cover.png, cover-mobile.png)
- `assets/favicon.png` — favicon 32×32px

## Règles
- **NEVER** modifier les fichiers dans `/home/wilwi/portfolio/` — le vrai repo est `/mnt/d/Dev/Projet/site/portfolio/`
- Toujours pousser vers `git@github-wiwil:Wiwil97x/portfolio.git` (remote `origin`)
- Tout le contenu est en **français**
- `target="_blank" rel="noopener"` sur tous les liens externes
