<script lang="ts">
  import { m } from '$lib/paraglide/messages';
  import { getLocale, localizeHref } from '$lib/paraglide/runtime';

  const locale = getLocale();
  const ogImage = `https://lucas-attali.me/img/og-image-${locale}.png`;
  const padelAlt = locale === 'fr'
    ? 'Lucas Attali sur un terrain de padel, bonnet Skalp'
    : 'Lucas Attali on a padel court, Skalp beanie';
</script>

<svelte:head>
  <title>{m.aboutTitle()} · Lucas Attali</title>
  <meta name="description" content={m.aboutMetaDescription()} />
  <meta property="og:title" content="{m.aboutTitle()} · Lucas Attali" />
  <meta property="og:description" content={m.aboutMetaDescription()} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:image:alt" content="{m.aboutTitle()} · Lucas Attali" />
  <meta name="twitter:title" content="{m.aboutTitle()} · Lucas Attali" />
  <meta name="twitter:description" content={m.aboutMetaDescription()} />
  <meta name="twitter:image" content={ogImage} />
</svelte:head>

<!-- Hero : bande cobalt, grille texte / photo padel -->
<section class="bg-cobalt text-cloud py-[clamp(48px,9vw,92px)]">
  <div class="wrap grid grid-cols-[1.05fr_0.95fr] max-[820px]:grid-cols-1 gap-[clamp(28px,5vw,60px)] items-center">
    <div class="rv">
      <span class="block font-mono text-[11px] tracking-[.02em] text-saffron mb-[18px]">{m.aboutEyebrow()}</span>
      <h1 class="font-display font-bold text-[clamp(42px,7.5vw,90px)] leading-[.92] tracking-[-0.025em] mb-[22px]">{m.aboutH1()}</h1>
      <p class="text-[clamp(16px,2.1vw,20px)] leading-[1.55] text-cloud/90 max-w-[46ch]">{m.aboutLede()}</p>
    </div>
    <figure class="ab-hero-fig relative rounded-2xl overflow-hidden bg-teal-deep aspect-square max-[820px]:max-w-[340px] max-[820px]:mx-auto rv">
      <enhanced:img
        src="$lib/assets/lucas-padel-skalp.webp"
        alt={padelAlt}
        sizes="(min-width: 820px) 50vw, 340px"
        loading="eager"
      />
      <figcaption class="absolute left-[14px] bottom-[12px] z-[2] font-mono text-[11px] text-cloud/85">{m.aboutPadelCaption()}</figcaption>
    </figure>
  </div>
</section>

<!-- Bio : texte gauche, portrait droite -->
<section class="py-[clamp(52px,9vw,96px)] wrap">
  <div class="grid grid-cols-[1.4fr_0.85fr] max-[820px]:grid-cols-1 gap-[clamp(28px,5vw,60px)] items-start rv">
    <div class="ab-bio-text">
      <p>{m.aboutP1()}</p>
      <p>{m.aboutPSkalp()}</p>
      <p>{m.aboutP2()}</p>
      <p>{m.aboutP3()}</p>
    </div>
    <figure class="ab-portrait relative border border-(--line) rounded-[14px] overflow-hidden bg-(--card) max-[820px]:max-w-[340px]">
      <enhanced:img
        src="$lib/assets/lucas-portrait.jpg"
        alt="Lucas Attali"
        sizes="(min-width: 820px) 35vw, 340px"
        loading="lazy"
      />
      <figcaption class="font-mono text-[11px] text-(--faint) px-[14px] py-[10px]">Lucas Attali</figcaption>
    </figure>
  </div>
</section>

<!-- En bref : bande sarcelle profond -->
<section class="bg-teal-deep text-cloud">
  <div class="wrap py-[clamp(48px,8vw,88px)] rv">
    <p class="font-mono text-[11px] tracking-[.12em] text-saffron mb-[22px]">{m.aboutInShort()}</p>
    <dl class="facts-dl">
      <div><dt>{m.factBaseL()}</dt><dd>{m.factBaseV()}</dd></div>
      <div><dt>{m.factLangsL()}</dt><dd>{m.factLangsV()}</dd></div>
      <div><dt>{m.factCourtL()}</dt><dd>{m.factCourtV()}</dd></div>
      <div><dt>{m.factCompanionL()}</dt><dd>{m.factCompanionV()}</dd></div>
      <div><dt>{m.factHeadingL()}</dt><dd>{m.factHeadingV()}</dd></div>
    </dl>
    <div class="border-t border-cloud/28 pt-4 flex justify-between font-mono text-[11px] text-cloud/62">
      <span>Roquebrune · 43.5, 6.63</span>
      <span>Sydney · -33.87, 151.21</span>
    </div>
  </div>
</section>

<!-- CTAs -->
<section class="py-[clamp(52px,9vw,96px)] wrap">
  <div class="flex flex-wrap gap-3 rv">
    <a
      class="font-sans text-[15px] font-semibold px-6 py-3.25 rounded-lg border-2 border-transparent bg-saffron text-cobalt-deep transition-transform duration-140 hover:-translate-y-0.5 inline-block"
      href={localizeHref('/parcours')}
    >{m.ctaJourney()}</a>
    <a
      class="font-sans text-[15px] font-semibold px-6 py-3.25 rounded-lg border-2 border-(--line-2) bg-transparent text-(--text) transition-transform duration-140 hover:-translate-y-0.5 inline-block"
      href="#contact"
    >{m.ctaContact()}</a>
  </div>
</section>
