<script lang="ts">
  import { m } from '$lib/paraglide/messages';
  import { getLocale } from '$lib/paraglide/runtime';
  const locale = getLocale();
</script>

<svelte:head>
  <title>{m.legalTitle()} · Lucas Attali</title>
  <meta name="robots" content="noindex, follow" />
</svelte:head>

<section
  class="py-[clamp(56px,10vw,104px)] pt-[clamp(80px,12vw,140px)] wrap
    [&_h3]:font-display [&_h3]:font-semibold [&_h3]:text-[20px] [&_h3]:mt-7 [&_h3]:mb-2
    [&_p]:text-(--muted) [&_p]:max-w-[64ch] [&_p]:mb-2"
>
  <div class="flex items-baseline gap-3.5 mb-11">
    <span class="font-mono text-xs text-coral font-bold">§</span>
    <h2 class="font-display font-semibold text-[clamp(30px,5.2vw,52px)] tracking-[-0.02em] leading-none">{m.legalTitle()}</h2>
  </div>

  {#if locale === 'fr'}
    <h3>Éditeur</h3>
    <p>
      Le présent site est édité par Lucas Attali, domicilié à Roquebrune-sur-Argens (83), France.<br />
      Contact : via le formulaire de contact du site.
    </p>
    <h3>Directeur de la publication</h3>
    <p>Lucas Attali.</p>
    <h3>Hébergeur</h3>
    <p>
      Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
      Site : vercel.com.
    </p>
    <h3>Propriété intellectuelle</h3>
    <p>
      L'ensemble des contenus de ce site (textes, code, identité visuelle) est la propriété de Lucas Attali, sauf mention contraire. Toute reproduction sans autorisation est interdite.
    </p>
  {:else}
    <h3>Publisher</h3>
    <p>
      This website is published by Lucas Attali, based in Roquebrune-sur-Argens (83), France.<br />
      Contact: via the site's contact form.
    </p>
    <h3>Publication director</h3>
    <p>Lucas Attali.</p>
    <h3>Hosting</h3>
    <p>Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. Website: vercel.com.</p>
    <h3>Intellectual property</h3>
    <p>
      All content on this site (text, code, visual identity) is the property of Lucas Attali
      unless stated otherwise. Reproduction without permission is prohibited.
    </p>
  {/if}
</section>
