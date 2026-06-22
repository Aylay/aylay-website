<script lang="ts">
  import '../app.css';
  import { onMount } from 'svelte';
  import { afterNavigate } from '$app/navigation';
  import { page } from '$app/state';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { m } from '$lib/paraglide/messages';
  import { deLocalizeHref, localizeHref, getLocale } from '$lib/paraglide/runtime';
  let { children } = $props();

  const BASE_URL = 'https://lucas-attali.me';
  const basePath = $derived(deLocalizeHref(page.url.pathname));
  const canonicalUrl = $derived(`${BASE_URL}${page.url.pathname}`);
  const frUrl = $derived(`${BASE_URL}${localizeHref(basePath, { locale: 'fr' })}`);
  const enUrl = $derived(`${BASE_URL}${localizeHref(basePath, { locale: 'en' })}`);
  const locale = getLocale();
  const ogLocale = locale === 'fr' ? 'fr_FR' : 'en_US';
  const ogLocaleAlt = locale === 'fr' ? 'en_US' : 'fr_FR';

  let observer: IntersectionObserver | undefined;

  function observeReveals() {
    if (!observer) return;
    for (const el of document.querySelectorAll('.rv:not(.in)')) observer.observe(el);
  }

  onMount(() => {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('in');
          observer!.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );
    observeReveals();
    return () => observer?.disconnect();
  });

  afterNavigate(() => observeReveals());
</script>

<svelte:head>
  <link rel="canonical" href={canonicalUrl} />
  <link rel="alternate" hreflang="fr" href={frUrl} />
  <link rel="alternate" hreflang="en" href={enUrl} />
  <link rel="alternate" hreflang="x-default" href={frUrl} />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:site_name" content="Lucas Attali" />
  <meta property="og:locale" content={ogLocale} />
  <meta property="og:locale:alternate" content={ogLocaleAlt} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="og:type" content="profile" />
</svelte:head>

<a class="skip" href="#main">{m.skipToContent()}</a>
<Header />
<main id="main">
  {@render children()}
</main>
<Footer />
