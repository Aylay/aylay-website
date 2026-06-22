<script lang="ts">
  import { m } from '$lib/paraglide/messages';
  import { getLocale } from '$lib/paraglide/runtime';
  const locale = getLocale();
</script>

<svelte:head>
  <title>{m.privacyTitle()} · Lucas Attali</title>
  <meta name="robots" content="noindex, follow" />
</svelte:head>

<section
  class="py-[clamp(56px,10vw,104px)] pt-[clamp(80px,12vw,140px)] wrap
    [&_h3]:font-display [&_h3]:font-semibold [&_h3]:text-[20px] [&_h3]:mt-7 [&_h3]:mb-2
    [&_p]:text-(--muted) [&_p]:max-w-[64ch] [&_p]:mb-2"
>
  <div class="flex items-baseline gap-3.5 mb-11">
    <span class="font-mono text-xs text-coral font-bold">§</span>
    <h2 class="font-display font-semibold text-[clamp(30px,5.2vw,52px)] tracking-[-0.02em] leading-none">{m.privacyTitle()}</h2>
  </div>

  {#if locale === 'fr'}
    <p>
      Ce site ne dépose aucun cookie de traçage et n'utilise aucun outil de mesure d'audience.
      Les seules données traitées sont celles que vous transmettez volontairement via le
      formulaire de contact.
    </p>
    <h3>Responsable de traitement</h3>
    <p>Lucas Attali, Roquebrune-sur-Argens (83), France.</p>
    <h3>Données collectées et finalité</h3>
    <p>
      Via le formulaire : prénom, nom, adresse email, objet et message. Ces données servent
      uniquement à traiter et à répondre à votre demande.
    </p>
    <h3>Base légale</h3>
    <p>Votre consentement, matérialisé par l'envoi du formulaire.</p>
    <h3>Destinataires et sous-traitant</h3>
    <p>
      Vos messages sont reçus par Lucas Attali. L'acheminement de l'email est assuré par Brevo
      (Sendinblue SAS), prestataire d'envoi. Aucun message n'est enregistré dans une base de
      données.
    </p>
    <h3>Durée de conservation</h3>
    <p>Le temps nécessaire au traitement de votre demande, puis suppression.</p>
    <h3>Vos droits</h3>
    <p>
      Vous disposez d'un droit d'accès, de rectification, d'effacement, d'opposition, de
      limitation et de portabilité. Pour les exercer, écrivez via le formulaire de contact.
      Vous pouvez aussi introduire une réclamation auprès de la CNIL (cnil.fr).
    </p>
  {:else}
    <p>
      This site sets no tracking cookies and uses no analytics. The only data processed is what
      you voluntarily submit through the contact form.
    </p>
    <h3>Data controller</h3>
    <p>Lucas Attali, Roquebrune-sur-Argens (83), France.</p>
    <h3>Data collected and purpose</h3>
    <p>
      Via the form: first name, last name, email address, subject and message. Used solely to
      handle and answer your request.
    </p>
    <h3>Legal basis</h3>
    <p>Your consent, given by submitting the form.</p>
    <h3>Recipients and processor</h3>
    <p>
      Your messages are received by Lucas Attali. Email delivery is handled by Brevo (Sendinblue
      SAS). No message is stored in any database.
    </p>
    <h3>Retention</h3>
    <p>For as long as needed to handle your request, then deleted.</p>
    <h3>Your rights</h3>
    <p>
      You have the right to access, rectify, erase, object to, restrict and port your data. To
      exercise them, write via the contact form. You may also lodge a complaint with the French
      authority, the CNIL (cnil.fr).
    </p>
  {/if}
</section>
