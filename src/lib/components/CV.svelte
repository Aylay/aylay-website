<script lang="ts">
	import France from "$lib/assets/svg/france.svelte";
	import Futbol from "$lib/assets/svg/futbol.svelte";
	import Japan from "$lib/assets/svg/japan.svelte";
	import Raquet from "$lib/assets/svg/raquet.svelte";
	import Spain from "$lib/assets/svg/spain.svelte";
	import Uk from "$lib/assets/svg/uk.svelte";
	import Volleyball from "$lib/assets/svg/volleyball.svelte";

  const xps = [
    {
      title: 'Co-fondateur & Directeur de Production',
      date: "Juil 2019 - Aujourd'hui",
      where: {
        name: 'Beavers',
        website: 'https://beavers-agency.fr'
      },
      text: "<p>> <strong>Production digitale</strong> | Création et développement de site internet / Audit SEO et référencement naturel / Création et développement de newsletters<p>> <strong>Marketing digital</strong> | Google Ads / Social Ads / Affiliation / Emailing / Display / Influence (périmètre non exhaustif)"
    },
    {
      title: "Accompagnement digital et conception d'applicatif",
      date: 'Fév 2019 - Août 2022',
      where: {
        name: 'Freelance',
      },
      text: "<p>> <strong>Développeur Front-End</strong> | Accompagnement sur des projets WordPress avec <a class=cl-accent href=https://baltazare.fr rel=external target=_blank title=\"Accompagnement sur des projets WordPress avec Baltazare\">Baltazare</a> | Développement de newsletters en MJML et d'une interface commerciale en Nuxt (VueJS) avec <a class=cl-accent href=https://www.framesdealer.com rel=external target=_blank title=\"Développement de newsletters en MJML et d'une interface commerciale en Nuxt (VueJS) avec Frames Dealer\">Frames Dealer</a> | Intégration HTML / CSS / JS pour une agence digitale de Nice <a class=cl-accent href=https://tigerandjune.com/ rel=external target=_blank title=\"Intégration HTML / CSS / JS pour une agence digitale de Nice Tiger & June\">Tiger & June</a><p>> <strong>Product Owner</strong> | Réflexion et création d'une interface commerciale / Réflexion et préparation de nouvelles fonctionnalités du site / Audit et améliorations SEO avec <a class=cl-accent href=http://www.framesdealer.com rel=external target=_blank title=\"Réflexion et création d'une interface commerciale avec Frames Dealer\">Frames Dealer</a>"
    },
    {
      title: 'Product Owner & Lead Développeur Front-End',
      date: 'Oct 2017 - Fev 2019',
      where: {
        name: 'Liiiiife'
      },
      text: "<p>> <strong>Product Owner</strong> | Optimisation du produit Incontinence Protection et Liiiiife | Gestion des priorités des besoins de chaque service | Formalisation au Chef de Projet<p>> <strong>Chef de Projet</strong> | Management de l’équipe technique | Transformation des besoins en tâche de développement | Sprint Planning<p>> <strong>Lead développeur Front-End</strong> | Refonte du site IP en Twig avec Sylius lié à un Pimcore via des APIs | Design avec Sketch et Développement en VueJs lié à un Pimcore via des APIs d’une V2 de IP et d’une V1 de Liiiiife."
    },
    {
      title: 'Jury & Intervenant',
      date: 'Janv 2017 - Juillet 2017',
      where: {
        name: "Institut de l'Internet et du Multimédia",
        website: 'https://www.iim.fr'
      },
      text: "<p>> <strong>Jury</strong> | Soutenance d’orientation des années 3 à l’IIM | Mastère 2 Option Développement Web de l’ECV Digital.<p>> <strong>Intervenant Web & E-business</strong> | Animations avec du CSS / SVG / JS pour des 2èmes années (60 étudiants) | Coaching des 4èmes années (36 étudiants) ayant pour but de créer un MOOC en 2 semaines."
    },
    {
      title: 'Responsable de Production',
      date: 'Mars 2016 - Oct 2017',
      where: {
        name: "Extreme Sensio"
      },
      text: "<p>> <strong>Traffic Manager</strong> | Gestion du planning des ressources (internes et externes) productives : UX / Créa / Tech (30 personnes environ)<p>> <strong>Responsable Qualité & Process</strong> | Mise en place de processus de production et amélioration du delivery<p>> <strong>Manager du pôle Technique</strong> | Management de l’équipe technique | Mise en place de nouvelles pratiques de développement | Veille et formation de l’équipe sur de nouvelles technologies | Estimations budgétaires<p>> <strong>eS Studio</strong> | Direction de la BU dédiée aux budgets de moins de 30K€ | Gestion de la clientèle / Design / Développement front et back / Déploiement sur serveur / Maintenance | <b>Samsung Club des Chefs, Bières Amsterdam, GDF-Suez Dolce Vita, Häagen-Dazs, MAM Baby France, La Fédération Française de la randonnée, Shiseido, Air Liquide</b>."
    },
    {
      title: 'Chef de Projet Technique',
      date: 'Août 2014 - Mars 2016',
      where: {
        name: "Extreme Sensio"
      },
      text: "<p>> Pilotage de projets | Briefs (UX, créa, technique) | Reporting | Suivi | Développement de minis sites internet<p>> Réponse aux appels d’offre (<b>Decathlon Creation</b>) | Suivi de la relation client | Veille technique & marketing<p>> Pilotage de différents projets : <b>Decathlon Creation, Samsung, Olympia, Acadomia, Schmidt, Outscale, GDF-Suez Dolce Vita, Domaine de Chantilly, Shiseido, FIAWEC</b>"
    },
    {
      title: 'Co-fondateur',
      date: 'Avril 2014 - Juillet 2017',
      where: {
        name: "Connect Object"
      },
      text: "<p>> Lancement de la communication | Intégration / Développement du site internet<p>> Auteur d'articles | Gestion des réseaux sociaux (Facebook / Twitter / Google Plus / Linkedin / YouTube)"
    }
  ]

  const certifs = [
    {
      date: '20 Mai 2019',
      title: 'Attestation de suivi Google Tag Manager',
      text: "<p>Cours et évaluations faits sur le site de la Google Academy afin d'obtenir la certifications pour Google Tag Manager</p>",
      doc: {
        link: 'https://analytics.google.com/analytics/academy/certificate/1zCHVU35TkuHLPQpJcCoRw',
        name: 'Google Tag Manager',
        title: "Voir l'attestation de suivi"
      }
    },
    {
      date: '03 Mai 2019',
      title: 'Attestation de suivi Google Analytics avancé',
      text: "<p>Cours et évaluations faits sur le site de la Google Academy afin d'obtenir la certifications pour Google Analytics avancé",
      doc: {
        link: 'https://analytics.google.com/analytics/academy/certificate/DuXgwF2LT4GH7gHitJtHeQ',
        name: 'Google Analytics avancé',
        title: "Voir le certificat de réussite"
      }
    },
    {
      date: '21 Mars 2019',
      title: 'Attestation de suivi RGPD par la CNIL',
      text: "<p>Cours et évaluations faits sur le MOOC L'Atelier RGPD avec le score de 100%",
      doc: {
        link: '/attestation_atelier_rgpd-Lucas_ATTALI.pdf',
        name: "RGPD de la Commission Nationale de l'Informatique et des Libertés (CNIL)",
        title: "Voir l'attestation"
      }
    },
    {
      date: '09 Janvier 2019',
      title: 'Attestation de suivi Google Analytics pour débutants',
      text: "<p>Cours et évaluations faits sur le site de la Google Academy pour passer la certification pour les débutants",
      doc: {
        link: 'https://analytics.google.com/analytics/academy/certificate/yw0DjNyDQBya8vf9EMdhOQ',
        name: "Google Analytics pour débutants",
        title: "Voir le certificat de réussite"
      }
    }
  ]

  const studies = [
    {
      date: 'Paris La Défense — 2009 - 2014',
      name: 'Manager de la Communication Numérique',
      where: {
        website: 'https://www.iim.fr',
        name: "Institut de l'Internet et du Multimédia"
      },
      text: '<p>Option Web / E-business en 5 ans</p>'
    },
    {
      date: 'Paris La Défense — 2007 - 2009',
      where: {
        website: 'https://www.esilv.fr',
        name: "École Supérieure d'Ingénieurs Léonard de Vinci"
      }
    },
    {
      date: 'Boulogne Billancourt — 2007',
      name: 'Bac Scientifique',
      where: {
        website: 'http://www.lyc-prevert-boulogne.ac-versailles.fr/',
        name: "Lycée Jacques Prévert"
      },
      text: '<p>Option Mathématiques</p>'
    }
  ]

</script>

<section class="py-32 w-11/12 mx-auto flex max-lg:flex-col gap-32">
  <div class="flex-1">
    <p class="border-aylay font-bold text-[2.4rem] lg:text-[3.2rem] text-seance mb-8">Expériences professionnelles</p>
    <div class="border-l-[2px] border-seance pl-8 flex flex-col gap-32 py-8">
      {#each xps as xp}
        <div class="flex flex-col gap-4">
          <p class="relative before:absolute before:w-5 before:h-5 before:rounded-full before:border-[2px] before:border-amber before:bg-white before:-left-8 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:top-1/2 font-bold text-[1.6rem]">
            {xp.date}
          </p>
          <h2 class="text-[2.4rem] text-seance font-bold leading-normal">
            {xp.title}
          </h2>
          {#if xp.where}
            <h3 class="text-amber font-bold text-[1.8rem] leading-normal">
              {#if xp.where.website}
                <a class="underline hover:no-underline" href={xp.where.website} title={xp.title + ' chez ' + xp.where.name} target="_blank" rel="external">
                  {xp.where.name}
                </a>
              {:else}
                {xp.where.name}
              {/if}
            </h3>
          {/if}
          <div class="content flex flex-col gap-2 lg:w-4/5">
            {@html xp.text}
          </div>
        </div>
      {/each}
    </div>
  </div>

  <div class="flex-1 flex flex-col lg:items-end">
    <div>
      <p class="border-aylay font-bold text-[2.4rem] lg:text-[3.2rem] text-seance mb-8">Certifications</p>
    </div>
    <div class="max-lg:border-l-[2px] lg:border-r-[2px] border-seance max-lg:pl-8 lg:pr-8 flex flex-col gap-32 py-8">
      {#each certifs as certif}
        <div class="flex flex-col lg:items-end gap-4">
          <p class="relative before:absolute before:w-5 before:h-5 before:rounded-full before:border-[2px] before:border-amber before:bg-white max-lg:before:-left-8 lg:before:-right-8 before:transform max-lg:before:-translate-x-1/2 lg:before:translate-x-1/2 before:-translate-y-1/2 before:top-1/2 font-bold text-[1.6rem]">
            {certif.date}
          </p>
          <h2 class="text-[2.4rem] text-seance font-bold leading-normal">
            {certif.title}
          </h2>
          <div class="content flex flex-col gap-2 lg:w-4/5 lg:text-right">
            {@html certif.text}
          </div>
          <a class="text-amber font-bold text-[1.6rem] leading-normal underline hover:no-underline" href={certif.doc.link} target="_blank" title={certif.doc.title + ' ' + certif.doc.name}>
            {certif.doc.title}
          </a>
        </div>
      {/each}
    </div>

    <div>
      <p class="border-aylay font-bold text-[2.4rem] lg:text-[3.2rem] text-seance mt-32 mb-8">Etudes</p>
    </div>
    <div class="max-lg:border-l-[2px] lg:border-r-[2px] border-seance max-lg:pl-8 lg:pr-8 flex flex-col gap-32 py-8">
      {#each studies as study}
        <div class="flex flex-col lg:items-end gap-4">
          <p class="relative before:absolute before:w-5 before:h-5 before:rounded-full before:border-[2px] before:border-amber before:bg-white max-lg:before:-left-8 lg:before:-right-8 before:transform max-lg:before:-translate-x-1/2 lg:before:translate-x-1/2 before:-translate-y-1/2 before:top-1/2 font-bold text-[1.6rem]">
            {study.date}
          </p>
          {#if study.name}
            <h2 class="text-[2.4rem] text-seance font-bold leading-normal">
              {study.name}
            </h2>
          {/if}
          {#if study.where}
            <h3 class="text-amber font-bold text-[1.8rem] leading-normal">
              {#if study.where.website}
                <a class="underline hover:no-underline" href={study.where.website} title={study.where.name} target="_blank" rel="external">
                  {study.where.name}
                </a>
              {:else}
                {study.where.name}
              {/if}
            </h3>
          {/if}
          {#if study.text}
            <div class="content flex flex-col gap-2 lg:w-4/5 lg:text-right">
              {@html study.text}
            </div>
          {/if}
        </div>
      {/each}
    </div>

    <div>
      <p class="border-aylay font-bold text-[2.4rem] lg:text-[3.2rem] text-seance mt-32 mb-8">Langues parlées</p>
    </div>
    <div class="flex gap-16 max-lg:flex-wrap lg:justify-end">
      <div class="flex max-lg:flex-1 flex-col items-center gap-2">
        <div class="flex items-center gap-4">
          <France newClass="w-auto h-6" />
          <p class="text-seance font-bold text-[1.8rem] leading-normal">
            Français
          </p>
        </div>
        <p class="text-[1.6rem] leading-normal">
          Langue maternelle
        </p>
      </div>
      <div class="flex max-lg:flex-1 flex-col items-center gap-2">
        <div class="flex items-center gap-4">
          <Uk newClass="w-auto h-6" />
          <p class="text-seance font-bold text-[1.8rem] leading-normal">
            Anglais
          </p>
        </div>
        <p class="text-[1.6rem] leading-normal">
          Intermédiaire
        </p>
      </div>
      <div class="flex max-lg:flex-1 flex-col items-center gap-2">
        <div class="flex items-center gap-4">
          <Spain newClass="w-auto h-6" />
          <p class="text-seance font-bold text-[1.8rem] leading-normal">
            Espagnol
          </p>
        </div>
        <p class="text-[1.6rem] leading-normal">
          Intermédiaire
        </p>
      </div>
      <div class="flex max-lg:flex-1 flex-col items-center gap-2">
        <div class="flex items-center gap-4">
          <Japan newClass="w-auto h-6 border border-sance" />
          <p class="text-seance font-bold text-[1.8rem] leading-normal">
            Japonais
          </p>
        </div>
        <p class="text-[1.6rem] leading-normal">
          Débutant
        </p>
      </div>
    </div>

    <div>
      <p class="border-aylay font-bold text-[2.4rem] lg:text-[3.2rem] text-seance mt-32 mb-8">Sports</p>
    </div>
    <div class="grid grid-cols-2 gap-16 justify-end">
      <div class="flex flex-col items-center gap-2">
        <div class="flex items-center gap-4">
          <Raquet newClass="w-auto h-16 fill-seance" />
        </div>
        <div class="flex flex-col gap-2 mt-4">
          <p class="text-[1.6rem] leading-normal text-center">
            Padel - Top 20 000 (2023)
          </p>
        </div>
      </div>

      <div class="flex flex-col items-center gap-2">
        <div class="flex items-center gap-4">
          <Volleyball newClass="w-auto h-16 fill-seance" />
        </div>
        <div class="flex flex-col gap-2 mt-4">
          <p class="text-[1.6rem] leading-normal text-center">
            Compétition universitaire
          </p>
          <p class="text-[1.6rem] leading-normal text-center">
            UFOLEP (2021 - 2022)
          </p>
        </div>
      </div>

    <div class="flex flex-col items-center gap-2">
      <div class="flex items-center gap-4">
        <Futbol newClass="w-auto h-16 fill-seance" />
      </div>
      <div class="flex flex-col gap-2 mt-4">
        <p class="text-[1.6rem] leading-normal text-center">
          Création d'une équipe de football à 7 (2012)
        </p>
        <p class="text-[1.6rem] leading-normal text-center">
          FSGT (2012 - 2017)
        </p>
        <p class="text-[1.6rem] leading-normal text-center">
          Compétition futsal (2019 - 2021)
        </p>
      </div>
    </div>

    <div class="flex flex-col items-center gap-2">
      <div class="flex items-center gap-4">
        <Raquet newClass="w-auto h-16 fill-seance" />
      </div>
      <div class="flex flex-col gap-2 mt-4">
        <p class="text-[1.6rem] leading-normal text-center">
          Tennis - Professeur (2004 - 2006)
        </p>
        <p class="text-[1.6rem] leading-normal text-center">
          Tennis - (30/2 en 2004)
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  .content {
    @apply text-[1.6rem] leading-normal;
  }
</style>