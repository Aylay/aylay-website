<script lang="ts">
  import { m } from '$lib/paraglide/messages';
  import { getLocale, localizeHref } from '$lib/paraglide/runtime';
  import Button from '$lib/components/Button.svelte';
  import PageHero from '$lib/components/PageHero.svelte';
  import SectionHeader from '$lib/components/SectionHeader.svelte';
  import MetricCard from '$lib/components/MetricCard.svelte';

  const locale = getLocale();
  const ogImage = `https://lucas-attali.me/img/og-image-${locale}.png`;
</script>

<svelte:head>
  <title>{m.metaTitleWork()}</title>
  <meta name="description" content={m.metaDescriptionWork()} />
  <meta property="og:title" content={m.metaTitleWork()} />
  <meta property="og:description" content={m.metaDescriptionWork()} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:image:alt" content={m.metaTitleWork()} />
  <meta name="twitter:title" content={m.metaTitleWork()} />
  <meta name="twitter:description" content={m.metaDescriptionWork()} />
  <meta name="twitter:image" content={ogImage} />
</svelte:head>

<PageHero
  eyebrow={m.realEyebrow()}
  title={m.realH1()}
  lede={m.realLede()}
  titleClass="max-w-[13ch]"
  ledeClass="max-w-[54ch]"
/>

<!-- 01 Beavers : SEO + développement -->
<section class="py-[clamp(52px,9vw,92px)] wrap">
  <SectionHeader number="01" title="Beavers" class="mb-3.5" />
  <p class="text-(--muted) max-w-[60ch] mb-7.5 rv">{m.realBeaversIntro()}</p>

  <p class="font-mono text-[12px] tracking-[.08em] text-(--cobalt-ink) mt-7.5 mb-3.5 lowercase rv">seo</p>
  <div class="metrics rv">
    <MetricCard num="x8" label={m.mSeoKw1Lbl()} tag={m.mSeoKw1Tag()} />
    <MetricCard num="40x" label={m.mSeoTrafLbl()} tag="B2B / services" />
    <MetricCard num="x30" label="impressions" tag={m.mSeoImpTag()} />
    <MetricCard num="+100%" label={m.mSeoKwLbl()} tag={m.mSeoInsTag()} />
  </div>

  <p class="font-mono text-[12px] tracking-[.08em] text-(--cobalt-ink) mt-7.5 mb-3.5 lowercase rv">{m.realPillarDev()}</p>
  <div class="metrics rv">
    <MetricCard num="99%" label="Lighthouse" tag={m.mDevLighTag()} />
    <MetricCard num="+30" label="sites & landing pages" tag={m.mDevSitesTag()} />
    <MetricCard num="GTM" label={m.mDevGtmLbl()} tag={m.mDevGtmTag()} />
  </div>
  <p class="font-mono text-[11px] text-(--faint) mt-5.5 rv">{m.realBeaversNote()}</p>
</section>

<!-- Skalp : bande corail -->
<section class="bg-coral text-cloud">
  <div class="wrap py-[clamp(48px,8vw,88px)] rv">
    <p class="font-mono text-[11px] tracking-[.12em] text-white/82 mb-2">{m.realSkalpLabel()}</p>
    <h2 class="font-display font-semibold text-[clamp(26px,4.6vw,46px)] tracking-[-0.02em] mb-4.5 max-w-[18ch]">{m.realSkalpH2()}</h2>
    <p class="text-white/92 max-w-[62ch] mb-6.5">{m.realSkalpP()}</p>
    <div class="build">
      <div class="border border-white/38 rounded-[10px] py-3.25 px-3.75">
        <div class="font-mono text-[13px] font-bold text-white">SvelteKit</div>
        <div class="text-[13px] text-white/82 mt-0.5">{m.buildStorefront()}</div>
      </div>
      <div class="border border-white/38 rounded-[10px] py-3.25 px-3.75">
        <div class="font-mono text-[13px] font-bold text-white">Strapi</div>
        <div class="text-[13px] text-white/82 mt-0.5">{m.buildCatalogue()}</div>
      </div>
      <div class="border border-white/38 rounded-[10px] py-3.25 px-3.75">
        <div class="font-mono text-[13px] font-bold text-white">Stripe</div>
        <div class="text-[13px] text-white/82 mt-0.5">{m.buildPayment()}</div>
      </div>
      <div class="border border-white/38 rounded-[10px] py-3.25 px-3.75">
        <div class="font-mono text-[13px] font-bold text-white">Brevo</div>
        <div class="text-[13px] text-white/82 mt-0.5">{m.buildEmails()}</div>
      </div>
      <div class="border border-white/38 rounded-[10px] py-3.25 px-3.75">
        <div class="font-mono text-[13px] font-bold text-white">SendCloud</div>
        <div class="text-[13px] text-white/82 mt-0.5">{m.buildShipping()}</div>
      </div>
      <div class="border border-white/38 rounded-[10px] py-3.25 px-3.75">
        <div class="font-mono text-[13px] font-bold text-white">Vercel</div>
        <div class="text-[13px] text-white/82 mt-0.5">{m.buildHosting()}</div>
      </div>
    </div>
  </div>
</section>

<!-- Jeux-concours : bande sarcelle profond -->
<section class="bg-teal-deep text-cloud">
  <div class="wrap py-[clamp(48px,8vw,88px)] rv">
    <p class="font-mono text-[11px] tracking-[.12em] text-saffron mb-2">{m.realJcLabel()}</p>
    <h2 class="font-display font-semibold text-[clamp(26px,4.6vw,46px)] tracking-[-0.02em] mb-4.5 max-w-[16ch]">{m.realJcH2()}</h2>
    <p class="text-cloud/92 max-w-[62ch] mb-7.5">{m.realJcP()}</p>
    <div class="jc-stats">
      <div>
        <div class="font-display font-bold text-[clamp(40px,7vw,72px)] text-saffron leading-none tracking-[-0.02em]">14 000</div>
        <div class="font-mono text-[12px] text-cloud/82 mt-2 max-w-[22ch]">{m.jcStat1Lbl()}</div>
      </div>
      <div>
        <div class="font-display font-bold text-[clamp(40px,7vw,72px)] text-saffron leading-none tracking-[-0.02em]">~3 <span class="text-[.5em]">{m.jcStat2Unit()}</span></div>
        <div class="font-mono text-[12px] text-cloud/82 mt-2 max-w-[22ch]">{m.jcStat2Lbl()}</div>
      </div>
    </div>
  </div>
</section>

<!-- NetlinkPro : produit perso en préparation -->
<section class="py-[clamp(52px,9vw,92px)] wrap">
  <div class="border border-(--line) border-l-4 border-l-cobalt rounded-xl p-[clamp(24px,4vw,38px)] bg-(--card) rv">
    <p class="font-mono text-[11px] tracking-widest text-(--cobalt-ink) mb-2.5">{m.nlLabel()}</p>
    <h2 class="font-display font-semibold text-[clamp(24px,4vw,38px)] tracking-[-0.02em] mb-3 max-w-[20ch]">{m.nlH()}</h2>
    <p class="text-(--muted) max-w-[62ch]">{m.nlP()}</p>
  </div>
</section>

<!-- CTAs -->
<section class="py-[clamp(52px,9vw,92px)] wrap">
  <div class="flex flex-wrap gap-3 rv">
    <Button href="#contact">{m.ctaContact()}</Button>
    <Button href={localizeHref('/parcours')} variant="secondary">{m.ctaJourney()}</Button>
  </div>
</section>
