# lucas-attali.me

Personal portfolio and online CV of **Lucas Attali** (alias *Aylay*), fullstack developer and entrepreneur based in the south of France. Bilingual (FR / EN), built as a craft piece: the quality of execution is the message.

> "Details make perfection, and perfection is not a detail." — Leonardo da Vinci

**Live:** https://lucas-attali.me

---

## Stack

| Concern | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, React 19, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (CSS-first `@theme`, design tokens) |
| i18n | next-intl (FR default, no prefix; EN under `/en`) |
| Fonts | next/font/local, self-hosted (Clash Display, General Sans, Space Mono) |
| Theme | Custom light/dark provider (no dependency), no-flash via `useServerInsertedHTML` |
| Contact form | React Server Action calling the Brevo transactional email API |
| SEO | Metadata API (canonical, hreflang, Open Graph, Twitter), JSON-LD `Person`, sitemap, robots |
| Hosting | Vercel |
| Package manager | pnpm |
| Analytics / cookies | None. Zero tracking, zero non-essential cookies. |

---

## Features

- **Bilingual FR / EN** with a language switcher and reciprocal `hreflang`, French served without a URL prefix.
- **Light / dark theme** persisted in `localStorage`, applied before first paint (no flash), resynced on every navigation.
- **Server-first rendering**: nearly the whole site is React Server Components (almost zero client JS); only the header, theme toggle, mobile menu and contact form are client components.
- **Accessibility**: semantic HTML, keyboard navigation, visible focus, correct heading order, `inert` mobile menu, scroll-lock when the menu is open. Target: Lighthouse 100 across the board.
- **Scroll reveal** via `IntersectionObserver`, disabled under `prefers-reduced-motion`.
- **Contact form** through a Server Action with honeypot, server-side validation and Brevo delivery (no database, no message storage).
- **SEO** with per-page metadata, a styled XSL sitemap, `robots.txt`, and `Person` structured data.

---

## Project structure

```
src/
  app/
    [locale]/
      layout.tsx          # root layout (html/body, fonts, providers, header/footer)
      page.tsx            # home
      a-propos/page.tsx   # about
      parcours/page.tsx   # experience
      realisations/page.tsx # work
      mentions-legales/page.tsx
      confidentialite/page.tsx
    actions/contact.ts    # Server Action -> Brevo
    robots.ts             # robots.txt (generated)
    sitemap.xml/route.ts  # sitemap with XSL stylesheet
    fonts.ts              # next/font/local declarations
    globals.css           # design tokens + base styles
  components/             # Header, Footer, ContactForm, Button, Reveal, theme, ...
  i18n/                   # routing, request, navigation (next-intl)
  lib/seo.ts              # metadata builder (canonical, hreflang, OG)
  assets/                 # portrait + padel images (next/image)
  proxy.ts                # next-intl middleware (Next 16 name)
messages/
  fr.json                 # French messages
  en.json                 # English messages
public/                   # og images, favicon, sitemap.xsl
```

---

## Getting started

### Prerequisites

- Node.js 20.9+ (Node 22 recommended)
- pnpm 11+

### Install

```bash
pnpm install
```

### Environment variables

Create a `.env.local` at the project root (git-ignored). Required only for the contact form:

```bash
BREVO_API_KEY=your_brevo_api_key   # server-only, never exposed to the client
CONTACT_TO=you@example.com         # recipient address
CONTACT_FROM=no-reply@your-domain  # verified Brevo sender
```

### Develop

```bash
pnpm dev
```

Open http://localhost:3000 (FR) and http://localhost:3000/en (EN).

### Build and run

```bash
pnpm build
pnpm start
```

---

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the dev server (Turbopack) |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run ESLint |

---

## Internationalisation

Routing is handled by next-intl with `localePrefix: 'as-needed'`: French is the default and served at the root (`/a-propos`), English lives under `/en` (`/en/a-propos`). Messages are plain JSON files under `messages/`, namespaced per page (`home`, `about`, `experience`, `work`, `nav`, `footer`, `form`, `meta`). Language detection and prefixing run in `src/proxy.ts` (the Next 16 rename of `middleware.ts`).

## Theming

A small custom provider (`src/components/theme.tsx`) toggles `data-theme` on `<html>` and persists the choice in `localStorage`. The no-flash script is injected server-side through `useServerInsertedHTML`, so it runs before hydration without triggering React warnings. Colour tokens flip via CSS variables scoped to `:root` and `[data-theme="dark"]`.

## Deployment

Deployed on Vercel with the Next.js preset. Every branch gets an automatic preview deployment; `main` is the production branch. Pages are statically rendered; the contact Server Action runs as a serverless function. Environment variables are configured per environment in the Vercel dashboard.

---

## Credits

Design, code and content by Lucas Attali. Built between the Mediterranean and Sydney.