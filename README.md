# lucas-attali.me

Site personnel bilingue (FR par défaut, EN sous `/en`). Direction artistique « Deux Rivages ».

## Stack
- **SvelteKit 5** + **Svelte 5** (runes), **TypeScript**
- **Tailwind 4** (`@tailwindcss/vite`), tokens dans `src/app.css` (`@theme`)
- **Paraglide-JS** (i18n compile-time, tree-shaké) : messages dans `messages/{fr,en}.json`
- **adapter-vercel**, sortie 100% statique (toutes les pages `prerender`)
- Aucun CMS, aucun tracking, aucun cookie tiers

## Démarrer
```bash
npm install
npm run dev      # http://localhost:5173
```

> Les traductions Paraglide sont compilées au build via le plugin local
> `@inlang/plugin-message-format` (dépendance npm), donc **aucun accès CDN
> requis** : installation déterministe et hors-ligne. Le dossier généré
> `src/lib/paraglide/` est gitignoré (recréé à chaque build).

## Scripts
- `npm run dev` — serveur de dev
- `npm run build` — build de production (statique)
- `npm run preview` — prévisualiser le build
- `npm run check` — typecheck Svelte + TS

## Arborescence
```
messages/            fr.json, en.json  (source des traductions)
project.inlang/      config i18n (baseLocale fr, locales fr+en)
src/
  app.html           %lang% + anti-FOUC thème
  app.css            tokens Deux Rivages + design
  hooks.ts           reroute (retire le préfixe de langue)
  hooks.server.ts    paraglideMiddleware (locale par requête)
  lib/components/    Header.svelte, Footer.svelte
  routes/
    +layout.*        shell (skip link, header, footer) + prerender
    +page.svelte     Accueil (la page validée)
    a-propos/ parcours/ realisations/ contact/   stubs à remplir
    sitemap.xml/     sitemap prerendé
static/              robots.txt, favicon.svg
```

## Formulaire de contact (Brevo)
L'endpoint `src/routes/api/contact/+server.ts` envoie un email via l'API Brevo,
sans aucun stockage. Variables d'environnement (Vercel > Settings > Environment Variables) :
```
BREVO_API_KEY=...        # obligatoire (clé API transactionnelle Brevo)
CONTACT_TO=lucas.attali@gmail.com   # destinataire (défaut: ce mail)
CONTACT_FROM=no-reply@lucas-attali.me  # expéditeur, domaine à valider dans Brevo
```
> L'expéditeur doit être un domaine/sendeur authentifié dans Brevo, sinon l'envoi est refusé.

## À faire ensuite (notes)
- **Self-héberger les polices** (Clash Display, General Sans via Fontshare ;
  Space Mono via Google) pour viser Lighthouse 100 et la conformité RGPD.
  Pour l'instant elles sont chargées via `<link>` dans `app.html`.
- Remplir les 4 pages (À propos, Parcours, Réalisations, Contact).
- Formulaire de contact via Brevo (API).
- Image Open Graph (cobalt + safran).
- URLs traduites optionnelles (ex. `/en/about` au lieu de `/en/a-propos`).
