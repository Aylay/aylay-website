<script lang="ts">
  import { m } from '$lib/paraglide/messages';
  import { getLocale, localizeHref } from '$lib/paraglide/runtime';

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

<!-- Hero : bande cobalt -->
<section class="bg-cobalt text-cloud py-[clamp(48px,8vw,84px)]">
  <div class="wrap rv">
    <span class="block font-mono text-[12px] text-saffron mb-4">{m.expEyebrow()}</span>
    <h1 class="font-display font-bold text-[clamp(38px,7vw,82px)] leading-[.95] tracking-[-0.025em] mb-[18px] max-w-[14ch]">{m.expH1()}</h1>
    <p class="text-[clamp(16px,2.1vw,19px)] text-cloud/90 max-w-[52ch]">{m.expLede()}</p>
  </div>
</section>

<!-- 01 Parcours : timeline -->
<section class="py-[clamp(52px,9vw,92px)] wrap">
  <div class="flex items-baseline gap-[14px] mb-10 rv">
    <span class="font-mono text-[12px] text-coral font-bold" aria-hidden="true">01</span>
    <h2 class="font-display font-semibold text-[clamp(28px,5vw,48px)] tracking-[-0.02em] leading-none">{m.expSec1()}</h2>
  </div>

  <ol class="tl rv">

    <!-- Skalp – coral -->
    <li class="tl-item c-coral">
      <div class="flex flex-wrap gap-x-[14px] gap-y-2 items-center mb-[7px]">
        <span class="font-mono text-[12px] font-bold text-(--c)">{m.tlSkalpYear()}</span>
        <span class="font-mono text-[11px] text-(--faint) lowercase">e-commerce</span>
      </div>
      <h3 class="font-display font-semibold text-[23px] tracking-[-0.01em] inline">Skalp</h3>
      <span class="block mt-[2px] mb-[8px] font-medium text-[15px] text-(--muted)">{m.tlSkalpRole()}</span>
      <p class="text-[15px] leading-[1.6] text-(--muted) max-w-[64ch]">{m.tlSkalpDesc()}</p>
    </li>

    <!-- Beavers – cobalt -->
    <li class="tl-item c-cobalt">
      <div class="flex flex-wrap gap-x-[14px] gap-y-2 items-center mb-[7px]">
        <span class="font-mono text-[12px] font-bold text-(--c)">{m.tlBeaversYear()}</span>
        <span class="font-mono text-[11px] text-(--faint) lowercase">{m.tlBeaversTag()}</span>
      </div>
      <h3 class="font-display font-semibold text-[23px] tracking-[-0.01em] inline">Beavers</h3>
      <span class="block mt-[2px] mb-[8px] font-medium text-[15px] text-(--muted)">{m.tlBeaversRole()}</span>
      <p class="text-[15px] leading-[1.6] text-(--muted) max-w-[64ch]">{m.tlBeaversDesc()}</p>
    </li>

    <!-- Indépendant – teal -->
    <li class="tl-item c-teal">
      <div class="flex flex-wrap gap-x-[14px] gap-y-2 items-center mb-[7px]">
        <span class="font-mono text-[12px] font-bold text-(--c)">2019 → 2022</span>
        <span class="font-mono text-[11px] text-(--faint) lowercase">{m.tlIndepTag()}</span>
      </div>
      <h3 class="font-display font-semibold text-[23px] tracking-[-0.01em] inline">{m.tlIndepName()}</h3>
      <span class="block mt-[2px] mb-[8px] font-medium text-[15px] text-(--muted)">{m.tlIndepRole()}</span>
      <p class="text-[15px] leading-[1.6] text-(--muted) max-w-[64ch]">{m.tlIndepDesc()}</p>
    </li>

    <!-- Liiiiife – teal -->
    <li class="tl-item c-teal">
      <div class="flex flex-wrap gap-x-[14px] gap-y-2 items-center mb-[7px]">
        <span class="font-mono text-[12px] font-bold text-(--c)">2017 → 2019</span>
        <span class="font-mono text-[11px] text-(--faint) lowercase">{m.tlLiiiTag()}</span>
      </div>
      <h3 class="font-display font-semibold text-[23px] tracking-[-0.01em] inline">Liiiiife</h3>
      <span class="block mt-[2px] mb-[8px] font-medium text-[15px] text-(--muted)">{m.tlLiiiRole()}</span>
      <p class="text-[15px] leading-[1.6] text-(--muted) max-w-[64ch]">{m.tlLiiiDesc()}</p>
    </li>

    <!-- IIM – saffron -->
    <li class="tl-item c-saffron">
      <div class="flex flex-wrap gap-x-[14px] gap-y-2 items-center mb-[7px]">
        <span class="font-mono text-[12px] font-bold text-(--c)">2017</span>
        <span class="font-mono text-[11px] text-(--faint) lowercase">{m.tlIimTag()}</span>
      </div>
      <h3 class="font-display font-semibold text-[23px] tracking-[-0.01em] inline">IIM</h3>
      <span class="block mt-[2px] mb-[8px] font-medium text-[15px] text-(--muted)">{m.tlIimRole()}</span>
      <p class="text-[15px] leading-[1.6] text-(--muted) max-w-[64ch]">{m.tlIimDesc()}</p>
    </li>

    <!-- Extreme Sensio – teal -->
    <li class="tl-item c-teal">
      <div class="flex flex-wrap gap-x-[14px] gap-y-2 items-center mb-[7px]">
        <span class="font-mono text-[12px] font-bold text-(--c)">2014 → 2017</span>
        <span class="font-mono text-[11px] text-(--faint) lowercase">production</span>
      </div>
      <h3 class="font-display font-semibold text-[23px] tracking-[-0.01em] inline">Extreme Sensio</h3>
      <span class="block mt-[2px] mb-[8px] font-medium text-[15px] text-(--muted)">{m.tlSensioRole()}</span>
      <p class="text-[15px] leading-[1.6] text-(--muted) max-w-[64ch]">{m.tlSensioDesc()}</p>
    </li>

    <!-- Connect Object – coral -->
    <li class="tl-item c-coral">
      <div class="flex flex-wrap gap-x-[14px] gap-y-2 items-center mb-[7px]">
        <span class="font-mono text-[12px] font-bold text-(--c)">2014 → 2017</span>
        <span class="font-mono text-[11px] text-(--faint) lowercase">side project</span>
      </div>
      <h3 class="font-display font-semibold text-[23px] tracking-[-0.01em] inline">Connect Object</h3>
      <span class="block mt-[2px] mb-[8px] font-medium text-[15px] text-(--muted)">{m.tlConnectRole()}</span>
      <p class="text-[15px] leading-[1.6] text-(--muted) max-w-[64ch]">{m.tlConnectDesc()}</p>
    </li>

  </ol>
</section>

<!-- Stack & méthodes : bande sarcelle profond -->
<section class="bg-teal-deep text-cloud">
  <div class="wrap py-[clamp(48px,8vw,88px)] rv">
    <p class="font-mono text-[11px] tracking-[.12em] text-saffron mb-[8px]">{m.stackLabel()}</p>
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
    <p class="font-mono text-[12px] text-cloud/60 mb-[30px]">{m.stackAlso()}</p>
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
  <div class="flex items-baseline gap-[14px] mb-10 rv">
    <span class="font-mono text-[12px] text-coral font-bold" aria-hidden="true">02</span>
    <h2 class="font-display font-semibold text-[clamp(28px,5vw,48px)] tracking-[-0.02em] leading-none">{m.expSec2()}</h2>
  </div>

  <div class="fc-grid rv">
    <div class="fc">
      <h4>{m.fcEdLabel()}</h4>
      <ul>
        <li>
          <div class="fc-t">IIM</div>
          <div class="fc-s">{m.fcIimDesc()}</div>
          <div class="fc-y">2009 → 2014</div>
        </li>
        <li>
          <div class="fc-t">ESILV</div>
          <div class="fc-s">{m.fcEsilvDesc()}</div>
          <div class="fc-y">2007 → 2009</div>
        </li>
        <li>
          <div class="fc-t">{m.fcBacName()}</div>
          <div class="fc-s">{m.fcBacDesc()}</div>
          <div class="fc-y">2007</div>
        </li>
      </ul>
    </div>
    <div class="fc">
      <h4>{m.fcCertLabel()}</h4>
      <ul>
        <li>
          <div class="fc-t">{m.fcRgpdName()}</div>
          <div class="fc-s">score 100%</div>
          <div class="fc-y">2019</div>
        </li>
        <li>
          <div class="fc-t">Google Tag Manager</div>
          <div class="fc-s">{m.fcGtmDesc()}</div>
          <div class="fc-y">2019</div>
        </li>
        <li>
          <div class="fc-t">Google Analytics</div>
          <div class="fc-s">{m.fcGaDesc()}</div>
          <div class="fc-y">2019</div>
        </li>
      </ul>
    </div>
  </div>
</section>

<!-- CTAs -->
<section class="py-[clamp(52px,9vw,92px)] wrap">
  <div class="flex flex-wrap gap-3 rv">
    <a
      class="font-sans text-[15px] font-semibold px-6 py-3.25 rounded-lg border-2 border-transparent bg-saffron text-cobalt-deep transition-transform duration-140 hover:-translate-y-0.5 inline-block"
      href={localizeHref('/realisations')}
    >{m.ctaWork()}</a>
    <a
      class="font-sans text-[15px] font-semibold px-6 py-3.25 rounded-lg border-2 border-(--line-2) bg-transparent text-(--text) transition-transform duration-140 hover:-translate-y-0.5 inline-block"
      href="#contact"
    >{m.ctaContact()}</a>
  </div>
</section>
