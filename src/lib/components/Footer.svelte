<script lang="ts">
  import { onMount } from 'svelte';
  import { m } from '$lib/paraglide/messages';
  import { localizeHref } from '$lib/paraglide/runtime';
  import ContactForm from './ContactForm.svelte';

  let year = $state(new Date().getFullYear());
  onMount(() => { year = new Date().getFullYear(); });
</script>

<footer id="contact" class="bg-(--paper) border-t border-(--line) py-[clamp(48px,7vw,80px)]">
  <div class="wrap grid grid-cols-2 max-[820px]:grid-cols-1 gap-[clamp(32px,6vw,80px)] items-start">

    <div class="flex flex-col gap-4">
      <a
        class="font-mono font-bold text-[16px] text-(--text)"
        href={localizeHref('/')}
        aria-label={m.ariaHome()}
        title={m.linkTitleHome()}
      >LA<span class="text-saffron">.</span></a>

      <nav class="flex flex-wrap gap-5 text-sm font-medium" aria-label={m.ariaExternalLinks()}>
        <a class="text-(--muted) hover:text-coral transition-colors duration-140" href="https://github.com/aylay" rel="me noopener noreferrer" target="_blank" title={m.linkTitleGithub()}>GitHub</a>
        <a class="text-(--muted) hover:text-coral transition-colors duration-140" href="https://www.linkedin.com/in/lucasattali/" rel="me noopener noreferrer" target="_blank" title={m.linkTitleLinkedin()}>LinkedIn</a>
        <a class="text-(--muted) hover:text-coral transition-colors duration-140" href="https://www.instagram.com/aylllay/" rel="me noopener noreferrer" target="_blank" title={m.linkTitleInstagram()}>Instagram</a>
        <a class="text-(--muted) hover:text-coral transition-colors duration-140" href="https://beavers-agency.fr/" rel="noopener noreferrer" target="_blank" title={m.linkTitleBeavers()}>Beavers</a>
        <a class="text-(--muted) hover:text-coral transition-colors duration-140" href="https://www.skalp.shop/" rel="noopener noreferrer" target="_blank" title={m.linkTitleSkalp()}>Skalp</a>
      </nav>

      <nav class="flex gap-[10px] font-mono text-xs text-(--faint)" aria-label={m.ariaLegalLinks()}>
        <a class="hover:text-cobalt transition-colors duration-140" href={localizeHref('/mentions-legales')} title={m.navLegal()}>{m.navLegal()}</a>
        <span aria-hidden="true">·</span>
        <a class="hover:text-cobalt transition-colors duration-140" href={localizeHref('/confidentialite')} title={m.navPrivacy()}>{m.navPrivacy()}</a>
      </nav>

      <p class="font-mono text-[11px] text-(--faint) leading-[1.9]">
        <span class="align-[-0.1em]">©</span> {year} Lucas Attali<br />
        {m.footerLocation()}
      </p>
    </div>

    <div class="max-[820px]:order-first">
      <h2 class="font-display font-semibold text-[clamp(22px,3vw,30px)] tracking-[-0.01em] mb-2">{m.contactHeading()}</h2>
      <p class="text-(--muted) text-[15px] max-w-[42ch] mb-4.5">{m.contactIntro()}</p>
      <ContactForm />
    </div>

  </div>
</footer>
