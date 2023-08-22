<script lang="ts">
	import ArrowDownSolid from "$lib/assets/svg/arrow-down-solid.svelte";
	import LogoBeavers from "$lib/assets/svg/logo-beavers.svelte";
	import LogoFramesdealer from "$lib/assets/svg/logo-framesdealer.svelte";
	import LogoSensiogrey from "$lib/assets/svg/logo-sensiogrey.svelte";
	import LogoTigerJune from "$lib/assets/svg/logo-tiger-june.svelte";
	import Cv from "$lib/components/CV.svelte";

  import Hoverable from '$lib/components/utilities/Hoverable.svelte';
	import LdTag from "$lib/components/utilities/LDTag.svelte";

  const qualities = [
    {
      title: 'Méticuleux',
      text: "Toujours à la recherche du moindre détail pour améliorer sans cesse un projet ou un produit, je sais aussi faire la part des choses. Ma principale devise lors de la production d'un projet est : « Done is better than perfect ». De toute façon, rien ni personne est parfait. Il y a toujours moyen d'améliorer un produit et de s'améliorer soi-même."
    },
    {
      title: 'Organisé',
      text: "Seul ou en tant que manager, il est toujours très important de bien se préparer avant de démarrer. Savoir où chacun doit aller pendant toutes les étapes du projet. Ne rien oublier afin que le produit terminé soit le produit attendu à l'initiative du projet. Créer un planning, le tenir et être lucide sont les clés de la réussite d'un projet."
    },
    {
      title: "Ouvert d'esprit",
      text: "Sans cesse réfléchir à comment améliorer un produit, il est important de faire une veille sur les technologies, les outils de gestion ou de management, les services à utiliser pour simplifier l'utilisation d'un produit. Les problèmes soulevés et possibles solutions viennent aussi des principaux utilisateurs du produit que ce soit la cible ou les administrateurs potentiels."
    }
  ]

  const schema = {
    "@context": "http://schema.org",
    "@type": "Person",
    "name": "Lucas Attali",
    "alternateName": "Aylay",
    "url": "https://www.lucas-attali.me",
    "sameAs": [
      "https://www.facebook.com/lucas.attali",
      "https://twitter.com/LucasAttali",
      "https://www.instagram.com/aylllay",
      "https://www.linkedin.com/in/lucasattali",
      "https://angel.co/aylay",
      "https://github.com/Aylay",
      "https://www.youtube.com/user/WebLucasAttali"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Roquebrune sur Argens, France",
      "postalCode": "F-83520",
      "streetAddress": "28 rue de la font des anguilles"
    },
    "email": "mailto:lucas.attali@gmail.com",
    "image": [
      {
        "@type": "ImageObject",
        "contentUrl": "https://www.lucas-attali.me/lucas-attali.jpeg"
      },
      {
        "@type": "ImageObject",
        "contentUrl": "https://www.lucas-attali.me/og-image.jpg"
      }
    ],
    "jobTitle": "Product Owner & Front-end Developer",
    "telephone": "(33 6) 79 80 11 06",
    "gender":"Male",
    "birthDate": "1988-09-20",
    "birthPlace": "Paris, France",
    "nationality": "France",
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "Institut de l'Internet et du Multimédia",
        "sameAs": "https://www.iim.fr/"
      }
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.lucas-attali.me"
    },
    "owns": {
      "@type": "Organization",
      "logo": {
        "@type": "ImageObject",
        "url": 'https://beavers-agency.fr/logo-beavers.png'
      },
      "@id": 'https://beavers-agency.fr',
      "name": "Beavers",
      "url": 'https://beavers-agency.fr',
      "legalName": "Beavers SAS",
      "slogan": "Beavers, le digital à pleines dents !",
      "description": "L'agence Beavers, spécialisée dans le marketing digital, vous propose des solutions adaptées pour répondre à vos objectifs : de notoriété, de trafic et d'acquisition.",
      "email" : "les-castors@beavers-agency.fr",

    },
    "worksFor": {
      "@id": 'https://beavers-agency.fr',
    }
	}
</script>

<svelte:head>
  <title>Lucas ATTALI - Cofondateur de l'agence média Beavers</title>
  <meta name="title" content="Lucas ATTALI - Cofondateur de l'agence média Beavers" />
  <meta property="og:title" content="Lucas ATTALI - Cofondateur de l'agence média Beavers" />
  <meta property="twitter:title" content="Lucas ATTALI - Cofondateur de l'agence média Beavers" />
  <meta name="description" content="Site internet contenant le CV de Lucas ATTALI" />
  <meta property="og:description" content="Site internet contenant le CV de Lucas ATTALI" />
  <meta property="twitter:description" content="Site internet contenant le CV de Lucas ATTALI" />
	<meta property="og:type" content="website" />
  <meta
    property="twitter:card"
    content="summary_large_image"
  />
  <meta
    property="og:image"
    content="https://lucas-attali.me/og-image.jpg"
  />
  <meta
    property="twitter:image"
    content="https://lucas-attali.me/og-image.jpg"
  />
  <meta
    property="og:image:width"
    content="1500"
  />
  <meta
    property="og:image:height"
    content="788"
  />
</svelte:head>

<LdTag {schema} />

<section class="h-screen relative flex lg:justify-center items-center">
  <img src="/img/lucas-attali.jpg" alt="Lucas ATTALI" class="absolute object-cover w-full h-full max-lg:object-left lg:object-top z-0 max-lg:opacity-75" />
  <div class="w-11/12 flex lg:justify-end relative z-10 max-lg:px-8">
    <div class="lg:w-1/2">
      <h1 class="text-seance font-bold text-[3.2rem] lg:text-[4.8rem] border-aylay mb-8">
        Bonjour, je suis Lucas ATTALI
      </h1>
      <h2 class="text-[2.4rem] lg:text-[2.8rem] leading-normal mb-16">
        Du développement Front-end à Product Owner en passant par Chef de Projet et Responsable de Production, j'aime toucher à tout et avancer en équipe pendant chaque étape d'un projet.
      </h2>
      <div class="mb-16 flex max-lg:flex-col gap-16 lg:gap-8">
        <div>
          <a class="py-4 px-8 border rounded-lg border-amber text-amber text-[1.6rem] hover:bg-amber hover:text-white transitions-colors duration-300" href="/cv-Lucas_ATTALI.pdf" title="Voir le CV de Lucas ATTALI" target="_blank">
            Voir mon CV
          </a>
        </div>
        <div>
          <a class="py-4 px-8 border rounded-lg border-seance text-seance text-[1.6rem] hover:bg-seance hover:text-white transitions-colors duration-300" href="/cv-Lucas_ATTALI.pdf" title="Télécharger le CV de Lucas ATTALI" target="_blank" download>
            Télécharger mon CV
          </a>
        </div>
      </div>
      <ArrowDownSolid newClass="h-10 w-auto fill-seance animate-bounce" />
    </div>
  </div>
</section>

<section class="bg-seance2 max-lg:px-8 py-32">
  <div class="w-11/12 mx-auto flex max-lg:flex-col gap-8 lg:gap-32">
    {#each qualities as quality, i}
      <div class="flex-1">
        <h3 class="border-aylay font-bold text-[2.4rem] lg:text-[3.2rem] mb-8 {i === 1 ? 'text-lilac' : 'text-white'}">
          { quality.title }
        </h3>
        <p class="text-[1.8rem] leading-normal {i === 1 ? 'text-lilac' : 'text-white'}">
          {quality.text}
        </p>
      </div>
    {/each}
  </div>
</section>

<Cv />

<section class="py-32 lg:py-80 w-11/12 mx-auto">
  <p class="border-aylay font-bold text-[2.4rem] lg:text-[3.2rem] text-seance mb-4">
    Mes collaborations
  </p>
  <p class="text-[1.8rem] leading-normal">
    De très belles entreprises avec lesquelles j'ai collaboré à différents postes, en freelance ou en CDI.
  </p>
  <Hoverable let:hovering={active}>
    <div class="max-lg:grid max-lg:grid-cols-2 lg:flex mt-16 gap-16 lg:gap-32 flex-wrap items-center">
      <a href="https://beavers-agency.fr" title="Beavers, agence média des castors" target="_blank" rel="external" class="transition-opacity max-lg:flex max-lg:justify-center {active ? 'opacity-50 hover:opacity-100' : 'opacity-100'}">
        <LogoBeavers fill1="#8013BD" fill2="#00FFDA" newClass="lg:h-32 w-auto" />
      </a>
      
      <a href="https://tigerandjune.com" title="Lucas ATTALI a collaboré avec Tiger & June" target="_blank" rel="external" class="transition-opacity max-lg:flex max-lg:justify-center {active ? 'opacity-50 hover:opacity-100' : 'opacity-100'}">
        <LogoTigerJune newClass="lg:h-32 w-auto" />
      </a>
      
      <a href="https://baltazare.fr" title="Lucas ATTALI a collaboré avec Baltazare" target="_blank" rel="external" class="transition-opacity max-lg:flex max-lg:justify-center {active ? 'opacity-50 hover:opacity-100' : 'opacity-100'}">
        <img src="/img/logo-baltazare.webp" alt="Logo Baltazare" class="lg:h-32 w-auto">
      </a>
      
      <a href="https://framesdealer.com" title="Lucas ATTALI a collaboré avec Frames Dealer" target="_blank" rel="external" class="transition-opacity max-lg:flex max-lg:justify-center {active ? 'opacity-50 hover:opacity-100' : 'opacity-100'}">
        <LogoFramesdealer newClass="h-auto lg:w-80" />
      </a>
      
      <a href="https://sensiogrey.com" title="Lucas ATTALI a collaboré avec SensioGrey" target="_blank" rel="external" class="transition-opacity max-lg:flex max-lg:justify-center {active ? 'opacity-50 hover:opacity-100' : 'opacity-100'}">
        <LogoSensiogrey newClass="lg:w-64 h-auto" />
      </a>
      
      <a href="https://iim.fr" title="Lucas ATTALI a collaboré avec l'IIM" target="_blank" rel="external" class="transition-opacity max-lg:flex max-lg:justify-center {active ? 'opacity-50 hover:opacity-100' : 'opacity-100'}">
        <img src="/img/logo-iim.webp" alt="Logo IIM" class="lg:h-32 w-auto">
      </a>
    </div>
  </Hoverable>
</section>