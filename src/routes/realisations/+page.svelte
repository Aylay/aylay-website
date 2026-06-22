<script lang="ts">
  import { m } from '$lib/paraglide/messages';
  import { getLocale, localizeHref } from '$lib/paraglide/runtime';

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

<!-- Hero : bande cobalt -->
<section class="bg-cobalt text-cloud py-[clamp(48px,8vw,84px)]">
  <div class="wrap rv">
    <span class="block font-mono text-[12px] text-saffron mb-4">{m.realEyebrow()}</span>
    <h1 class="font-display font-bold text-[clamp(38px,7vw,82px)] leading-[.95] tracking-tight mb-4.5 max-w-[13ch]">{m.realH1()}</h1>
    <p class="text-[clamp(16px,2.1vw,19px)] text-cloud/90 max-w-[54ch]">{m.realLede()}</p>
  </div>
</section>

<!-- 01 Beavers : SEO + développement -->
<section class="py-[clamp(52px,9vw,92px)] wrap">
  <div class="flex items-baseline gap-3.5 mb-3.5 rv">
    <span class="font-mono text-[12px] text-coral font-bold" aria-hidden="true">01</span>
    <h2 class="font-display font-semibold text-[clamp(28px,5vw,48px)] tracking-[-0.02em] leading-none">Beavers</h2>
  </div>
  <p class="text-(--muted) max-w-[60ch] mb-7.5 rv">{m.realBeaversIntro()}</p>

  <p class="pillar rv">seo</p>
  <div class="metrics rv">
    <div class="metric">
      <div class="m-num">x8</div>
      <div class="m-lbl">{m.mSeoKw1Lbl()}</div>
      <div class="m-tag">{m.mSeoKw1Tag()}</div>
    </div>
    <div class="metric">
      <div class="m-num">40x</div>
      <div class="m-lbl">{m.mSeoTrafLbl()}</div>
      <div class="m-tag">B2B / services</div>
    </div>
    <div class="metric">
      <div class="m-num">x30</div>
      <div class="m-lbl">impressions</div>
      <div class="m-tag">{m.mSeoImpTag()}</div>
    </div>
    <div class="metric">
      <div class="m-num">+100%</div>
      <div class="m-lbl">{m.mSeoKwLbl()}</div>
      <div class="m-tag">{m.mSeoInsTag()}</div>
    </div>
  </div>

  <p class="pillar rv">{m.realPillarDev()}</p>
  <div class="metrics rv">
    <div class="metric">
      <div class="m-num">99%</div>
      <div class="m-lbl">Lighthouse</div>
      <div class="m-tag">{m.mDevLighTag()}</div>
    </div>
    <div class="metric">
      <div class="m-num">+30</div>
      <div class="m-lbl">sites & landing pages</div>
      <div class="m-tag">{m.mDevSitesTag()}</div>
    </div>
    <div class="metric">
      <div class="m-num">GTM</div>
      <div class="m-lbl">{m.mDevGtmLbl()}</div>
      <div class="m-tag">{m.mDevGtmTag()}</div>
    </div>
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
      <div><div class="b-t">SvelteKit</div><div class="b-s">{m.buildStorefront()}</div></div>
      <div><div class="b-t">Strapi</div><div class="b-s">{m.buildCatalogue()}</div></div>
      <div><div class="b-t">Stripe</div><div class="b-s">{m.buildPayment()}</div></div>
      <div><div class="b-t">Brevo</div><div class="b-s">{m.buildEmails()}</div></div>
      <div><div class="b-t">SendCloud</div><div class="b-s">{m.buildShipping()}</div></div>
      <div><div class="b-t">Vercel</div><div class="b-s">{m.buildHosting()}</div></div>
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
        <div class="s-num">14 000</div>
        <div class="s-lbl">{m.jcStat1Lbl()}</div>
      </div>
      <div>
        <div class="s-num">~3 <span class="text-[.5em]">{m.jcStat2Unit()}</span></div>
        <div class="s-lbl">{m.jcStat2Lbl()}</div>
      </div>
    </div>
  </div>
</section>

<!-- NetlinkPro : produit perso en préparation -->
<section class="py-[clamp(52px,9vw,92px)] wrap">
  <div class="nl-card rv">
    <p class="nl-label">{m.nlLabel()}</p>
    <h2 class="nl-h">{m.nlH()}</h2>
    <p class="nl-p">{m.nlP()}</p>
  </div>
</section>

<!-- CTAs -->
<section class="py-[clamp(52px,9vw,92px)] wrap">
  <div class="flex flex-wrap gap-3 rv">
    <a
      class="font-sans text-[15px] font-semibold px-6 py-3.25 rounded-lg border-2 border-transparent bg-saffron text-cobalt-deep transition-transform duration-140 hover:-translate-y-0.5 inline-block"
      href="#contact"
    >{m.ctaContact()}</a>
    <a
      class="font-sans text-[15px] font-semibold px-6 py-3.25 rounded-lg border-2 border-(--line-2) bg-transparent text-(--text) transition-transform duration-140 hover:-translate-y-0.5 inline-block"
      href={localizeHref('/parcours')}
    >{m.ctaJourney()}</a>
  </div>
</section>
