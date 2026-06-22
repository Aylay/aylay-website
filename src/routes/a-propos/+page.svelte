<script lang="ts">
  import { m } from '$lib/paraglide/messages';
  import { getLocale, localizeHref } from '$lib/paraglide/runtime';
  import Button from '$lib/components/Button.svelte';

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
      <span class="block font-mono text-[11px] tracking-[.02em] text-cloud/90 mb-4.5">{m.aboutEyebrow()}</span>
      <h1 class="font-display font-bold text-[clamp(42px,7.5vw,90px)] leading-[.92] tracking-tight mb-5.5">{m.aboutH1()}</h1>
      <p class="text-[clamp(16px,2.1vw,20px)] leading-[1.55] text-cloud/90 max-w-[46ch]">{m.aboutLede()}</p>
    </div>
    <figure class="ab-hero-fig relative rounded-2xl overflow-hidden bg-teal-deep aspect-square max-[820px]:max-w-85 max-[820px]:mx-auto rv">
      <enhanced:img
        src="$lib/assets/lucas-padel-skalp.webp"
        alt={padelAlt}
        sizes="(min-width: 820px) 50vw, 340px"
        loading="eager"
      />
      <figcaption class="absolute left-3.5 bottom-3 z-2 font-mono text-[11px] text-cloud/85">{m.aboutPadelCaption()}</figcaption>
    </figure>
  </div>
</section>

<!-- Bio : texte gauche, portrait droite -->
<section class="py-[clamp(52px,9vw,96px)] wrap">
  <div class="grid grid-cols-[1.4fr_0.85fr] max-[820px]:grid-cols-1 gap-[clamp(28px,5vw,60px)] items-start rv">
    <div class="[&>p]:text-[17px] [&>p]:leading-[1.72] [&>p]:mb-4.5 [&>p]:max-w-[60ch] [&>p:last-child]:mb-0">
      <p>{m.aboutP1()}</p>
      <p>{m.aboutPSkalp()}</p>
      <p>{m.aboutP2()}</p>
      <p>{m.aboutP3()}</p>
    </div>
    <figure class="ab-portrait relative border border-(--line) rounded-[14px] overflow-hidden bg-(--card) max-[820px]:max-w-85">
      <enhanced:img
        src="$lib/assets/lucas-portrait.jpg"
        alt="Lucas Attali"
        sizes="(min-width: 820px) 35vw, 340px"
        loading="lazy"
      />
      <figcaption class="font-mono text-[11px] text-(--faint) px-3.5 py-2.5">Lucas Attali</figcaption>
    </figure>
  </div>
</section>

<!-- En bref : bande sarcelle profond -->
<section class="bg-teal-deep text-cloud">
  <div class="wrap py-[clamp(48px,8vw,88px)] rv">
    <p class="font-mono text-[11px] tracking-[.12em] text-saffron mb-5.5">{m.aboutInShort()}</p>
    <dl class="facts-dl">
      <div class="border-t border-cloud/22 pt-2.5">
        <dt class="font-mono text-[11px] tracking-wider text-saffron mb-1.25">{m.factBaseL()}</dt>
        <dd class="text-[15px] text-cloud">{m.factBaseV()}</dd>
      </div>
      <div class="border-t border-cloud/22 pt-2.5">
        <dt class="font-mono text-[11px] tracking-wider text-saffron mb-1.25">{m.factLangsL()}</dt>
        <dd class="text-[15px] text-cloud">{m.factLangsV()}</dd>
      </div>
      <div class="border-t border-cloud/22 pt-2.5">
        <dt class="font-mono text-[11px] tracking-wider text-saffron mb-1.25">{m.factCourtL()}</dt>
        <dd class="text-[15px] text-cloud">{m.factCourtV()}</dd>
      </div>
      <div class="border-t border-cloud/22 pt-2.5">
        <dt class="font-mono text-[11px] tracking-wider text-saffron mb-1.25">{m.factCompanionL()}</dt>
        <dd class="text-[15px] text-cloud">{m.factCompanionV()}</dd>
      </div>
      <div class="border-t border-cloud/22 pt-2.5">
        <dt class="font-mono text-[11px] tracking-wider text-saffron mb-1.25">{m.factHeadingL()}</dt>
        <dd class="text-[15px] text-cloud">{m.factHeadingV()}</dd>
      </div>
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
    <Button href={localizeHref('/parcours')}>{m.ctaJourney()}</Button>
    <Button href="#contact" variant="secondary">{m.ctaContact()}</Button>
  </div>
</section>
