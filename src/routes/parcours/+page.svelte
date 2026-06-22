<script lang="ts">
  import { m } from '$lib/paraglide/messages';
  import { getLocale, localizeHref } from '$lib/paraglide/runtime';
  import Button from '$lib/components/Button.svelte';
  import PageHero from '$lib/components/PageHero.svelte';
  import SectionHeader from '$lib/components/SectionHeader.svelte';
  import TimelineItem from '$lib/components/TimelineItem.svelte';
  import FormationItem from '$lib/components/FormationItem.svelte';

  const locale = getLocale();
  const ogImage = `https://lucas-attali.me/img/og-image-${locale}.png`;
</script>

<svelte:head>
  <title>{m.metaTitleExperience()}</title>
  <meta name="description" content={m.metaDescriptionExperience()} />
  <meta property="og:title" content={m.metaTitleExperience()} />
  <meta property="og:description" content={m.metaDescriptionExperience()} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:image:alt" content={m.metaTitleExperience()} />
  <meta name="twitter:title" content={m.metaTitleExperience()} />
  <meta name="twitter:description" content={m.metaDescriptionExperience()} />
  <meta name="twitter:image" content={ogImage} />
</svelte:head>

<PageHero
  eyebrow={m.expEyebrow()}
  title={m.expH1()}
  lede={m.expLede()}
/>

<!-- 01 Parcours : timeline -->
<section class="py-[clamp(52px,9vw,92px)] wrap">
  <SectionHeader number="01" title={m.expSec1()} />

  <ol class="tl rv">
    <TimelineItem
      year={m.tlSkalpYear()}
      tag="e-commerce"
      name="Skalp"
      role={m.tlSkalpRole()}
      description={m.tlSkalpDesc()}
      colorClass="c-coral"
    />
    <TimelineItem
      year={m.tlBeaversYear()}
      tag={m.tlBeaversTag()}
      name="Beavers"
      role={m.tlBeaversRole()}
      description={m.tlBeaversDesc()}
      colorClass="c-cobalt"
    />
    <TimelineItem
      year="2019 → 2022"
      tag={m.tlIndepTag()}
      name={m.tlIndepName()}
      role={m.tlIndepRole()}
      description={m.tlIndepDesc()}
      colorClass="c-teal"
    />
    <TimelineItem
      year="2017 → 2019"
      tag={m.tlLiiiTag()}
      name="Liiiiife"
      role={m.tlLiiiRole()}
      description={m.tlLiiiDesc()}
      colorClass="c-teal"
    />
    <TimelineItem
      year="2017"
      tag={m.tlIimTag()}
      name="IIM"
      role={m.tlIimRole()}
      description={m.tlIimDesc()}
      colorClass="c-saffron"
    />
    <TimelineItem
      year="2014 → 2017"
      tag="production"
      name="Extreme Sensio"
      role={m.tlSensioRole()}
      description={m.tlSensioDesc()}
      colorClass="c-teal"
    />
    <TimelineItem
      year="2014 → 2017"
      tag="side project"
      name="Connect Object"
      role={m.tlConnectRole()}
      description={m.tlConnectDesc()}
      colorClass="c-coral"
    />
  </ol>
</section>

<!-- Stack & méthodes : bande sarcelle profond -->
<section class="bg-teal-deep text-cloud">
  <div class="wrap py-[clamp(48px,8vw,88px)] rv">
    <p class="font-mono text-[11px] tracking-[.12em] text-saffron mb-2">{m.stackLabel()}</p>
    <h2 class="font-display font-semibold text-[clamp(26px,4.4vw,42px)] tracking-[-0.02em] mb-6">{m.stackH2()}</h2>
    <div class="chips">
      <span>SvelteKit</span>
      <span>Svelte 5</span>
      <span>TypeScript</span>
      <span>Tailwind</span>
      <span>Strapi</span>
      <span>Stripe</span>
      <span>Brevo</span>
      <span>Vercel</span>
    </div>
    <p class="font-mono text-[12px] text-cloud/60 mb-7.5">{m.stackAlso()}</p>
    <ol class="principles">
      <li>{m.stackP1()}</li>
      <li>{m.stackP2()}</li>
      <li>{m.stackP3()}</li>
      <li>{m.stackP4()}</li>
    </ol>
  </div>
</section>

<!-- 02 Formation & certifications -->
<section class="py-[clamp(52px,9vw,92px)] wrap">
  <SectionHeader number="02" title={m.expSec2()} />

  <div class="fc-grid rv">
    <div>
      <h3 class="font-mono text-[12px] tracking-wider text-(--coral-ink) mb-4 lowercase">{m.fcEdLabel()}</h3>
      <ul class="list-none grid gap-4">
        <FormationItem title="IIM" subtitle={m.fcIimDesc()} year="2009 → 2014" />
        <FormationItem title="ESILV" subtitle={m.fcEsilvDesc()} year="2007 → 2009" />
        <FormationItem title={m.fcBacName()} subtitle={m.fcBacDesc()} year="2007" />
      </ul>
    </div>
    <div>
      <h3 class="font-mono text-[12px] tracking-wider text-(--coral-ink) mb-4 lowercase">{m.fcCertLabel()}</h3>
      <ul class="list-none grid gap-4">
        <FormationItem title={m.fcRgpdName()} subtitle="score 100%" year="2019" />
        <FormationItem title="Google Tag Manager" subtitle={m.fcGtmDesc()} year="2019" />
        <FormationItem title="Google Analytics" subtitle={m.fcGaDesc()} year="2019" />
      </ul>
    </div>
  </div>
</section>

<!-- CTAs -->
<section class="py-[clamp(52px,9vw,92px)] wrap">
  <div class="flex flex-wrap gap-3 rv">
    <Button href={localizeHref('/realisations')}>{m.ctaWork()}</Button>
    <Button href="#contact" variant="secondary">{m.ctaContact()}</Button>
  </div>
</section>
