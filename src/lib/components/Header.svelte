<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/state';
  import { afterNavigate } from '$app/navigation';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref, deLocalizeHref, locales, getLocale } from '$lib/paraglide/runtime';

  let theme = $state<'light' | 'dark'>('light');
  let menuOpen = $state(false);

  onMount(() => { theme = (document.documentElement.dataset.theme as 'light' | 'dark') || 'light'; });

  function toggleTheme() {
    theme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('theme', theme); } catch (e) {}
  }

  const current = $derived(getLocale());
  const basePath = $derived(deLocalizeHref(page.url.pathname));

  afterNavigate(() => { menuOpen = false; });
</script>

<svelte:window onkeydown={(e) => { if (e.key === 'Escape') menuOpen = false; }} />

<header class="sticky top-0 z-40 bg-cobalt text-cloud">
  <div class="wrap flex items-center gap-2 h-15">

    <a
      class="font-mono font-bold text-[15px] tracking-[.02em] text-cloud"
      href={localizeHref('/')}
      aria-label={m.ariaHome()}
      title={m.linkTitleHome()}
    >LA<span class="text-saffron">.</span></a>

    <nav
      class="flex gap-6 ml-auto text-sm font-medium max-[720px]:hidden"
      aria-label={m.ariaNavMain()}
    >
      <a
        class="nav-link text-cloud/90 hover:text-cloud transition-colors duration-140"
        href={localizeHref('/a-propos')}
        aria-current={basePath === '/a-propos' ? 'page' : undefined}
        title={m.navAbout()}
      >{m.navAbout()}</a>
      <a
        class="nav-link text-cloud/90 hover:text-cloud transition-colors duration-140"
        href={localizeHref('/parcours')}
        aria-current={basePath === '/parcours' ? 'page' : undefined}
        title={m.navExperience()}
      >{m.navExperience()}</a>
      <a
        class="nav-link text-cloud/90 hover:text-cloud transition-colors duration-140"
        href={localizeHref('/realisations')}
        aria-current={basePath === '/realisations' ? 'page' : undefined}
        title={m.navWork()}
      >{m.navWork()}</a>
      <a
        class="nav-link text-cloud/90 hover:text-cloud transition-colors duration-140"
        href="#contact"
        title={m.navContact()}
      >{m.navContact()}</a>
    </nav>

    <div class="flex items-center gap-3.5 ml-6 pl-4.5 border-l border-cloud/20 max-[720px]:ml-auto max-[720px]:pl-0 max-[720px]:border-l-0">
      <div class="flex items-center gap-2 font-mono text-xs">
        {#each locales as l, i (l)}
          {#if i > 0}<span class="text-cloud/45" aria-hidden="true">·</span>{/if}
          <a
            href={localizeHref(basePath, { locale: l })}
            hreflang={l}
            lang={l}
            data-sveltekit-reload
            class="{l === current ? 'text-saffron font-bold' : 'text-cloud/85'} hover:text-cloud transition-colors duration-140"
            aria-label={l === 'fr' ? 'Français' : 'English'}
            title={l === 'fr' ? 'Français' : 'English'}
            aria-current={l === current ? 'true' : undefined}
          >{l}</a>
        {/each}
      </div>
      <button
        class="bg-transparent border border-cloud/30 text-cloud w-7.5 h-7.5 rounded-[7px] cursor-pointer text-sm grid place-items-center transition-colors duration-140 hover:bg-cloud/10"
        onclick={toggleTheme}
        aria-label={m.ariaThemeToggle()}
        title={m.ariaThemeToggle()}
      >{theme === 'light' ? '☾' : '☀'}</button>

      <!-- Burger: mobile uniquement, géré entièrement avec Tailwind -->
      <button
        class="hidden max-[720px]:inline-flex items-center justify-center bg-transparent border border-cloud/30 text-cloud w-[34px] h-[30px] rounded-[7px] cursor-pointer text-base transition-colors duration-140 hover:bg-cloud/10"
        onclick={() => { menuOpen = !menuOpen; }}
        aria-label={m.ariaNavMain()}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
      >{menuOpen ? '✕' : '☰'}</button>
    </div>

  </div>
</header>

<!-- Menu mobile : hors du <header> pour ne pas perturber le sticky, positionné en fixed via CSS -->
<nav
  class="mobile-menu"
  class:open={menuOpen}
  id="mobile-menu"
  aria-label={m.ariaNavMain()}
  inert={!menuOpen}
>
  <a
    class="font-display font-semibold text-[23px] text-cloud py-[15px] border-b border-cloud/10 last:border-b-0"
    href={localizeHref('/a-propos')}
    onclick={() => { menuOpen = false; }}
    title={m.navAbout()}
  >{m.navAbout()}</a>
  <a
    class="font-display font-semibold text-[23px] text-cloud py-[15px] border-b border-cloud/10 last:border-b-0"
    href={localizeHref('/parcours')}
    onclick={() => { menuOpen = false; }}
    title={m.navExperience()}
  >{m.navExperience()}</a>
  <a
    class="font-display font-semibold text-[23px] text-cloud py-[15px] border-b border-cloud/10 last:border-b-0"
    href={localizeHref('/realisations')}
    onclick={() => { menuOpen = false; }}
    title={m.navWork()}
  >{m.navWork()}</a>
  <a
    class="font-display font-semibold text-[23px] text-cloud py-[15px] border-b border-cloud/10 last:border-b-0"
    href="#contact"
    onclick={() => { menuOpen = false; }}
    title={m.navContact()}
  >{m.navContact()}</a>
</nav>
