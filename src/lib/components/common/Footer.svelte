<script lang="ts">
	import Facebook from "$lib/assets/svg/facebook.svelte";
	import Github from "$lib/assets/svg/github.svelte";
  import Instagram from "$lib/assets/svg/instagram.svelte";
  import Linkedin from "$lib/assets/svg/linkedin.svelte";
	import Hoverable from "../utilities/Hoverable.svelte";

  let currentDate = new Date();

</script>

<footer class="bg-seance2 max-lg:px-8 py-32">
  <div class="w-11/12 mx-auto flex flex-col gap-16">

    <div class="flex justify-center">
      <p class="text-white font-bold text-[2.2rem] border-r-amber border-t-amber border-t-2 border-r-2 py-4 px-8 leading-none">
        Aylay
      </p>
    </div>

    <p class="text-center text-lilac text-[2.2rem] italic">
      « Le détail fait la qualité et la qualité n’est pas un détail. »
    </p>

    <div class="flex justify-center items-center gap-16">
      <Hoverable let:hovering={active}>
        <a href="https://www.linkedin.com/in/lucasattali" title="Profil Linkedin Lucas Attali" target="_blank" rel="external noreferrer">
          <Linkedin newClass="h-12 transition-colors {active ? 'fill-amber' : 'fill-lilac'} w-auto" />
        </a>
      </Hoverable>

      <Hoverable let:hovering={active}>
        <a href="https://www.instagram.com/aylllay" title="Profil Instagram Lucas Attali" target="_blank" rel="external noreferrer">
          <Instagram newClass="h-12 transition-colors {active ? 'fill-amber' : 'fill-lilac'} w-auto" />
        </a>
      </Hoverable>

      <Hoverable let:hovering={active}>
        <a href="https://www.facebook.com/lucas.attali" title="Profil Facebook Lucas Attali" target="_blank" rel="external noreferrer">
          <Facebook newClass="h-10 transition-colors {active ? 'fill-amber' : 'fill-lilac'} w-auto" />
        </a>
      </Hoverable>

      <Hoverable let:hovering={active}>
        <a href="https://github.com/Aylay" title="Profil Github Lucas Attali" target="_blank" rel="external noreferrer">
          <Github newClass="h-12 transition-colors {active ? 'fill-amber' : 'fill-lilac'} w-auto" />
        </a>
      </Hoverable>
    </div>

    <p class="text-center text-lilac text-[1.4rem] leading-normal">
      © {currentDate.getFullYear()} Tous droits réservés par Lucas ATTALI<br />
      Made with <a href="https://svelte.dev/" rel="external noreferrer noopener" class="underline hover:no-underline" target="_blank">Svelte</a>, <a href="https://tailwindcss.com/" rel="external noreferrer noopener" class="underline hover:no-underline" target="_blank">Tailwind CSS</a> & <a href="https://vercel.com/" rel="external noreferrer noopener" class="underline hover:no-underline" target="_blank">Vercel</a>
    </p>
  </div>

  

</footer>