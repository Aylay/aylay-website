# CLAUDE.md — lucas-attali.me

Mémoire de projet pour Claude Code. Lis-moi à chaque session avant d'agir.

## Le projet
Site personnel bilingue de **Lucas Attali** (alias **Aylay**, GitHub `Aylay`),
développeur fullstack à Roquebrune-sur-Argens (83, PACA). C'est un **CV en ligne
haut de gamme**, pas un outil de génération de leads : la qualité d'exécution est
le message. Fil rouge : « Les détails font la perfection, et la perfection n'est
pas un détail. » (Léonard de Vinci).

Méthode de collaboration attendue : **tranché et opinionné** (faire des choix, les
justifier en une ligne), direct, chiffré quand pertinent, scope strict.

## Règles de rédaction NON NÉGOCIABLES
1. **Jamais le tiret cadratin « — »** dans un texte visible (titres, meta, title,
   og:title, attributions, corps), FR comme EN. Remplacer par virgule,
   parenthèses ou vrai tiret « - » selon le contexte.
2. **Le mot « freelance » n'apparaît pas** comme positionnement actuel. Lucas
   n'est PAS freelance : il est TNS, cofondateur de Beavers. Pour la période
   historique 2019-2022 (où il l'était factuellement), écrire **« Indépendant »**
   sur la page Parcours (sauf si Lucas autorise explicitement le terme exact pour
   cette seule ligne).
3. Famille : **ambiance uniquement**, jamais de prénoms ni de photos d'enfants
   (site public indexé).
4. Cas client jeux-concours : **anonymisé**, sans nom de client/agence ni visuel.

## Identité & positionnement
- Lucas Attali en pro ; « Aylay » = clin d'œil discret.
- Cofondateur de **Beavers** (agence paid media, Google Ads/Meta, cofondée avec
  son épouse, 2019) et de **Skalp** (e-commerce mono-produit, bonnets, 2025).
- Pôle dev = métier d'opérateur (apps jeux-concours, outils netlinking pour
  clients/agences), pas une posture de prestataire.
- Vision : **relocalisation familiale à Sydney** (horizon 2031-2033). C'est la
  raison de la location-independence et du bilinguisme.
- Perso (pour À propos, dosé) : padel (côté gauche), shiba inu, sud de la France,
  maison récemment achetée (bricolage), tennis/basket/volley en fond. Japonais
  débutant (lien Sydney).

## Direction artistique : « Deux Rivages » (Méditerranée ↔ Pacifique)
La couleur **encode du sens**, jamais décorative. Aplats pleine largeur.
- cobalt `#1F3DE6` (interaction / Beavers / Méditerranée), cobalt-deep `#16267A`
- sarcelle `#0E9D87` + profond `#06403A` (Pacifique / Sydney / dev)
- corail `#FF5A4D` (énergie / Skalp), safran `#FFB200` (soleil / CTA)
- neutres clair : papier `#F4F2EC`, carte `#FBFAF6`, encre `#10131A`
- neutres sombre : papier `#0D0F13`, carte `#16191F`, texte `#F4F2EC`
- Typo : **Clash Display** (titres), **General Sans** (corps), **Space Mono**
  (labels). ⚠ Fontshare (pas Google Fonts) : **à self-héberger** avant prod
  (Lighthouse + RGPD). Space Mono via Google pour l'instant.
- Signature : ligne d'horizon reliant Roquebrune (43.5, 6.63) et Sydney
  (-33.87, 151.21), point safran qui « navigue ». Header cobalt persistant qui
  fusionne avec le hero. Cartes projet colorées par catégorie.
- Motion sobre, `prefers-reduced-motion` respecté.

## Architecture (4 pages + contact global)
- `/` · `/en` — Accueil (faite)
- `/a-propos` · `/en/a-propos` — À propos (à écrire)
- `/parcours` · `/en/parcours` — Parcours, **inclut « Stack & méthodes »** (à écrire)
- `/realisations` · `/en/realisations` — Réalisations (à écrire)
- Mentions légales `/mentions-legales`, Confidentialité `/confidentialite` (noindex)
- **Pas de page /contact** : le formulaire est dans le footer de chaque page,
  ancre `#contact`. Le menu « Contact » et le CTA pointent vers `#contact`.
- FR par défaut sans préfixe, EN sous `/en`. hreflang réciproques (à finaliser).

## Stack & conventions
- SvelteKit 5 + Svelte 5 (runes), TypeScript, Tailwind 4 (`@tailwindcss/vite`,
  tokens dans `src/app.css` via `@theme`).
- i18n : **Paraglide-JS**, messages `messages/{fr,en}.json`. Plugin inlang chargé
  en **local depuis npm** (`@inlang/plugin-message-format`), pas de CDN.
  `src/lib/paraglide/` est généré au build et gitignoré.
- `adapter-vercel`, sortie 100% statique (tout en `prerender`), sauf l'endpoint
  contact (`prerender = false`).
- Contact : `src/routes/api/contact/+server.ts` → email via **Brevo**, aucun
  stockage. Honeypot anti-spam, reply-to visiteur.
- Pas de CMS, aucun tracking, aucun cookie tiers.
- Préférences d'archi : **routes API plutôt que couches de service**, séparation
  claire des responsabilités, permissions de tokens API restreintes, typé,
  commenté là où ça compte.
- Prose : pas de longue énumération à puces ; textes longs (légal) branchés par
  locale dans le composant, pas dans les JSON de messages.
- TailwindCss : respecter ce pour quoi cela a été créé. N'ajouter pas de classes inutilises dans app.css si celles-ci sont possiblement utilisables via plusieurs classes tailwindcss pré-créées

## Barre de qualité (cible, non négociable)
Lighthouse 100 sur les 4 axes. HTML sémantique, a11y réelle (clavier, contrastes,
focus visibles, ARIA juste). SEO : meta, Open Graph/Twitter, sitemap, robots,
schema.org `Person`, URLs propres FR/EN. Responsive irréprochable, images en
formats modernes.

## Variables d'environnement (Vercel)
```
BREVO_API_KEY=...                       # obligatoire
CONTACT_TO=lucas.attali@gmail.com       # destinataire
CONTACT_FROM=no-reply@lucas-attali.me   # expéditeur (domaine à valider dans Brevo, SPF/DKIM)
```

## Commandes
Gestionnaire de paquets : **pnpm** (lockfile `pnpm-lock.yaml`). Node >= 22.13.
```
pnpm install
pnpm dev         # http://localhost:5173
pnpm build
pnpm check
```

## Roadmap & contenu
- [x] Accueil
- [ ] À propos (perso ci-dessus, ambiance famille, Sydney, valeurs)
- [ ] Parcours (données ci-dessous, fusionner Stack & méthodes)
- [ ] Réalisations : besoin des **métriques autorisées** (Beavers, Skalp) + le
      **cas jeux-concours anonymisé** (problème, archi, résultat)
- [ ] Self-héberger les polices
- [ ] Image Open Graph (cobalt + safran)
- [ ] Compléter `[statut juridique]` et `[SIRET]` dans les pages légales
- [ ] NetlinkPro : statut + pitch (SaaS B2B netlinking pour agences/SEO FR)
- [ ] hreflang + URLs traduites optionnelles

## Parcours (source : ancien site lucas-attali.me, à mettre en forme)
- **2019-aujourd'hui — Cofondateur & Directeur de Production, Beavers**
  (production digitale + marketing digital : Google Ads, Social Ads, SEO, emailing).
- **2019-2022 — Indépendant** : Dév Front-End (Baltazare/WordPress ; Frames Dealer
  newsletters MJML + interface Nuxt/VueJS ; Tiger & June intégration HTML/CSS/JS) ;
  Product Owner (Frames Dealer).
- **2017-2019 — Product Owner & Lead Dév Front-End, Liiiiife** (VueJS, Pimcore,
  Sylius/Twig, produit Incontinence Protection).
- **2017 — Jury & Intervenant, IIM** (Web & E-business).
- **2016-2017 — Responsable de Production, Extreme Sensio** (Traffic Manager,
  Qualité & Process, manager pôle technique, eS Studio ; Samsung, Häagen-Dazs,
  Shiseido, Air Liquide...).
- **2014-2016 — Chef de Projet Technique, Extreme Sensio** (Decathlon, Samsung,
  Olympia, Acadomia...).
- **2014-2017 — Cofondateur, Connect Object** (projet parallèle).
- Études : IIM, Master 2 « Manager de la Communication Numérique » Web/E-business
  (2009-2014) ; ESILV (2007-2009) ; Bac S option Maths, Lycée Jacques Prévert (2007).
- Certifs (2019) : Google Tag Manager, Google Analytics avancé, **RGPD par la CNIL
  (100%)**, Google Analytics débutant.
- Langues : FR natif, EN intermédiaire, ES intermédiaire, JP débutant.
- Liens : github.com/aylay, linkedin.com/in/lucasattali, beavers-agency.fr, skalp.shop.
