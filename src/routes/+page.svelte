<script lang="ts">
  import { onMount } from 'svelte';
  import { m } from '$lib/paraglide/messages';
  import { getLocale, localizeHref } from '$lib/paraglide/runtime';

  const locale = getLocale();
  const ogDescription = m.heroLedeA() + m.heroLedeMark() + m.heroLedeB();
  const ogImage = `https://lucas-attali.me/img/og-image-${locale}.png`;

  // Auto-countdown to Sydney: target window 2031-2033.
  const TARGET_LOW = 2031;
  const TARGET_HIGH = 2033;
  let year = $state(new Date().getFullYear());
  onMount(() => { year = new Date().getFullYear(); });
  const low = $derived(Math.max(1, TARGET_LOW - year));
  const high = $derived(Math.max(low + 1, TARGET_HIGH - year));

  const personLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Lucas Attali',
    alternateName: 'Aylay',
    jobTitle: locale === 'fr' ? 'Développeur fullstack, cofondateur' : 'Fullstack developer, co-founder',
    url: 'https://lucas-attali.me',
    "image": "https://lucas-attali.me/og-image-fr.png",
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Roquebrune-sur-Argens',
      addressRegion: 'PACA',
      addressCountry: 'FR'
    },
    worksFor: [
      { '@type': "Organization", name: "Beavers", url: "https://beavers-agency.fr" },
      { '@type': "Organization", name: "Skalp", url: "https://www.skalp.shop" }
    ],
    knowsAbout: ["SvelteKit", "TypeScript", "SEO", "Développement web", "E-commerce", "Netlinking"],
    sameAs: [
      'https://github.com/aylay',
      'https://www.linkedin.com/in/lucasattali/',
      'https://beavers-agency.fr/',
      'https://www.skalp.shop/'
    ]
  };
</script>

<svelte:head>
  <title>{m.metaTitle()}</title>
  <meta name="description" content={m.metaDescription()} />
  <meta property="og:title" content={m.metaTitle()} />
  <meta property="og:description" content={ogDescription} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:image:alt" content={m.metaTitle()} />
  <meta name="twitter:title" content={m.metaTitle()} />
  <meta name="twitter:description" content={m.metaDescription()} />
  <meta name="twitter:image" content={ogImage} />
  {@html `<script type="application/ld+json">${JSON.stringify(personLd)}<\/script>`}
</svelte:head>

<!-- Hero -->
<section class="bg-cobalt text-cloud pt-[clamp(56px,11vw,116px)] overflow-hidden">
  <div class="wrap">
    <div class="flex flex-wrap items-center gap-x-4 gap-y-2.5 mb-7 text-saffron font-mono text-xs tracking-[.02em] rv">
      <span>{m.heroEyebrow()}</span>
      <span class="inline-flex items-center gap-[7px] text-cloud/90">
        <span class="w-1.5 h-1.5 rounded-full bg-saffron" aria-hidden="true"></span>
        {m.heroLocation()}
      </span>
    </div>
    <h1 class="font-display font-bold text-[clamp(56px,15vw,150px)] leading-[.9] tracking-[-0.025em] mb-[30px] rv">Lucas Attali</h1>
    <p class="font-display font-semibold text-[clamp(22px,4.6vw,40px)] leading-[1.12] tracking-[-0.015em] max-w-[18ch] mb-9 rv">
      {m.heroLedeA()}<span class="mark">{m.heroLedeMark()}</span>{m.heroLedeB()}
    </p>
    <blockquote class="border-l-[3px] border-saffron pl-[18px] max-w-[46ch] mb-10 rv">
      <p class="text-[clamp(15px,2.1vw,18px)] leading-[1.5] text-cloud/86">{m.quoteText()}</p>
      <cite class="block not-italic font-mono text-[11px] text-cloud/80 mt-2">{m.quoteAuthor()}</cite>
    </blockquote>
    <div class="flex flex-wrap gap-3 mb-[clamp(48px,7vw,72px)] rv">
      <a
        class="font-sans text-[15px] font-semibold px-6 py-3.25 rounded-lg border-2 border-transparent bg-saffron text-cobalt-deep transition-transform duration-140 hover:-translate-y-0.5 inline-block"
        href="#contact"
        title={m.ctaContact()}
      >{m.ctaContact()}</a>
      <a
        class="font-sans text-[15px] font-semibold px-6 py-3.25 rounded-lg border-2 border-cloud/45 bg-transparent text-cloud transition-[transform,border-color] duration-140 hover:border-cloud hover:-translate-y-0.5 inline-block"
        href={localizeHref('/parcours')}
        title={m.ctaJourney()}
      >{m.ctaJourney()}</a>
    </div>
    <div class="border-t border-cloud/28 py-4 flex justify-between items-center relative font-mono text-[11px] text-cloud/90 tracking-[.02em]">
      <span class="sail-dot" aria-hidden="true"></span>
      <span>Roquebrune-sur-Argens, France · 43.5, 6.63</span>
      <span>{m.pinSydney()} · -33.87, 151.21</span>
    </div>
  </div>
</section>

<!-- Rail -->
<div class="border-b border-(--line)">
  <div class="wrap flex flex-wrap items-center gap-x-[26px] gap-y-3.5 py-[18px] font-mono text-xs text-(--faint)">
    <span><b class="text-(--muted) font-normal">Beavers</b> · 2019</span>
    <span><b class="text-(--muted) font-normal">Skalp</b> · 2025</span>
    <span><b class="text-(--muted) font-normal">{m.railDeveloper()}</b></span>
    <span class="ml-auto" aria-hidden="true">sveltekit · ts · tailwind · strapi · stripe · brevo</span>
  </div>
</div>

<!-- What I do -->
<section class="py-[clamp(56px,10vw,104px)] wrap">
  <div class="flex items-baseline gap-3.5 mb-11">
    <span class="font-mono text-xs text-coral font-bold">01</span>
    <h2 class="font-display font-semibold text-[clamp(30px,5.2vw,52px)] tracking-[-0.02em] leading-none">{m.whatTitle()}</h2>
  </div>
  <div class="grid grid-cols-[repeat(auto-fit,minmax(min(100%,270px),1fr))] gap-4">
    <article
      class="card-accent bg-(--card) border border-(--line) rounded-[14px] p-[clamp(24px,3vw,32px)] relative overflow-hidden transition-[transform,border-color] duration-[240ms] hover:-translate-y-1 hover:border-(--line-2) rv [--c:var(--cobalt-label)]"
    >
      <div class="font-mono text-[11px] font-bold tracking-[.04em] text-(--c) flex justify-between mb-4.5">
        <span>{m.beaversTag()}</span><span>2019</span>
      </div>
      <h3 class="font-display font-semibold text-[26px] tracking-[-0.01em] mb-2.5">Beavers</h3>
      <p class="text-[15px] leading-[1.6] text-(--muted)">{m.beaversBody()}</p>
    </article>
    <article
      class="card-accent bg-(--card) border border-(--line) rounded-[14px] p-[clamp(24px,3vw,32px)] relative overflow-hidden transition-[transform,border-color] duration-[240ms] hover:-translate-y-1 hover:border-(--line-2) rv [--c:var(--color-coral)]"
    >
      <div class="font-mono text-[11px] font-bold tracking-[.04em] text-(--c) flex justify-between mb-4.5">
        <span>{m.skalpTag()}</span><span>2025</span>
      </div>
      <h3 class="font-display font-semibold text-[26px] tracking-[-0.01em] mb-2.5">Skalp</h3>
      <p class="text-[15px] leading-[1.6] text-(--muted)">{m.skalpBody()}</p>
    </article>
    <article
      class="card-accent bg-(--card) border border-(--line) rounded-[14px] p-[clamp(24px,3vw,32px)] relative overflow-hidden transition-[transform,border-color] duration-[240ms] hover:-translate-y-1 hover:border-(--line-2) rv [--c:var(--color-teal)]"
    >
      <div class="font-mono text-[11px] font-bold tracking-[.04em] text-(--c) flex justify-between mb-4.5">
        <span>{m.codeTag()}</span><span>{m.codeTag2()}</span>
      </div>
      <h3 class="font-display font-semibold text-[26px] tracking-[-0.01em] mb-2.5">{m.codeTitle()}</h3>
      <p class="text-[15px] leading-[1.6] text-(--muted)">{m.codeBody()}</p>
    </article>
  </div>
</section>

<!-- Next: Sydney -->
<section class="bg-teal-deep text-cloud relative overflow-hidden">
  <div class="wrap py-[clamp(48px,8vw,96px)] relative rv">
    <div
      class="static text-left mb-4.5 min-[721px]:absolute min-[721px]:top-[clamp(28px,5vw,44px)] min-[721px]:right-0 min-[721px]:text-right min-[721px]:mb-0 font-mono text-[11px] text-cloud/60 leading-[1.9]"
      aria-hidden="true"
    ><b class="text-saffron font-normal">↗ -33.87, 151.21</b><br />{m.pinSydney()}</div>
    <p class="font-mono text-[11px] tracking-[.12em] text-saffron mb-5">{m.nextLabel()}</p>
    <h2 class="font-display font-semibold text-[clamp(30px,5.4vw,56px)] leading-[1.02] tracking-[-0.02em] max-w-[16ch] mb-[22px]">{m.nextTitle({ low, high })}</h2>
    <p class="max-w-[54ch] text-cloud/82 text-[16px]">{m.nextBody()}</p>
  </div>
</section>
