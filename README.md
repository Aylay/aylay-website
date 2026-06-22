# lucas-attali.me

Site personnel bilingue de Lucas Attali (FR par défaut, EN sous `/en`). Direction artistique « Deux Rivages ».

## Stack

- **SvelteKit 5** + **Svelte 5** (runes), **TypeScript**
- **Tailwind 4** (`@tailwindcss/vite`), tokens dans `src/app.css` (`@theme`)
- **Paraglide-JS** (i18n compile-time, tree-shaké) : messages dans `messages/{fr,en}.json`
- **adapter-vercel**, sortie 100% statique (toutes les pages `prerender`)
- Polices auto-hébergées dans `static/fonts/` (Clash Display, General Sans, Space Mono)
- Aucun CMS, aucun tracking, aucun cookie tiers

## Démarrer

```bash
pnpm install
pnpm dev      # http://localhost:5173
pnpm build
pnpm check
```

Node >= 22.13 requis (`nvm use 22`). Gestionnaire de paquets : **pnpm**.

## Variables d'environnement (Vercel)

```
BREVO_API_KEY=...
CONTACT_TO=lucas.attali@gmail.com
CONTACT_FROM=no-reply@lucas-attali.me
```

L'endpoint `src/routes/api/contact/+server.ts` envoie via Brevo, sans stockage. `prerender = false` sur cette route uniquement.

## Arborescence

```
messages/            fr.json, en.json  (source des traductions)
project.inlang/      config i18n (baseLocale fr, locales fr+en)
static/
  fonts/             polices woff/woff2 auto-hébergées
  robots.txt
  sitemap.xsl
src/
  app.html           %lang% + anti-FOUC thème (dark par défaut)
  app.css            tokens Deux Rivages + design system
  hooks.ts           reroute (retire le préfixe de langue)
  hooks.server.ts    paraglideMiddleware (locale par requête)
  lib/
    components/
      Header.svelte, Footer.svelte, ContactForm.svelte
      Button.svelte, SectionHeader.svelte, ArticleCard.svelte
      PageHero.svelte, TimelineItem.svelte
      MetricCard.svelte, FormationItem.svelte
  routes/
    +layout.*        shell + prerender global
    +page.svelte     Accueil
    a-propos/        À propos
    parcours/        Parcours & Stack
    realisations/    Réalisations
    confidentialite/ noindex
    mentions-legales/ noindex
    sitemap.xml/     sitemap prerendé avec hreflang
    api/contact/     endpoint Brevo (prerender false)
```
