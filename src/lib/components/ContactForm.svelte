<script lang="ts">
  import { m } from '$lib/paraglide/messages';

  let firstName = $state('');
  let lastName = $state('');
  let email = $state('');
  let subject = $state('');
  let message = $state('');
  let company = $state(''); // honeypot — must stay empty
  let status = $state<'idle' | 'sending' | 'ok' | 'error'>('idle');

  async function submit(e: SubmitEvent) {
    e.preventDefault();
    if (status === 'sending') return;
    if (!firstName || !lastName || !email || !subject || !message) {
      status = 'error';
      return;
    }
    status = 'sending';
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, subject, message, company })
      });
      const data = await res.json().catch(() => ({ ok: false }));
      if (res.ok && data.ok) {
        status = 'ok';
        firstName = lastName = email = subject = message = '';
      } else {
        status = 'error';
      }
    } catch {
      status = 'error';
    }
  }

  const inputClass = 'font-sans text-[15px] text-(--text) bg-(--card) border border-(--line) rounded-[9px] px-[13px] py-[11px] w-full transition-colors duration-140 focus:border-cobalt focus:outline-none';
  const labelClass = 'flex flex-col gap-1.5 text-[13px] font-medium text-(--muted)';
</script>

<form class="flex flex-col gap-3.5" onsubmit={submit} novalidate>
  <div class="grid grid-cols-2 max-[480px]:grid-cols-1 gap-3.5">
    <label class={labelClass} for="cf-firstName">
      <span>{m.formFirstName()}</span>
      <input id="cf-firstName" class={inputClass} bind:value={firstName} name="firstName" autocomplete="given-name" required />
    </label>
    <label class={labelClass} for="cf-lastName">
      <span>{m.formLastName()}</span>
      <input id="cf-lastName" class={inputClass} bind:value={lastName} name="lastName" autocomplete="family-name" required />
    </label>
  </div>
  <label class={labelClass} for="cf-email">
    <span>{m.formEmail()}</span>
    <input id="cf-email" class={inputClass} type="email" bind:value={email} name="email" autocomplete="email" required />
  </label>
  <label class={labelClass} for="cf-subject">
    <span>{m.formSubject()}</span>
    <input id="cf-subject" class={inputClass} bind:value={subject} name="subject" required />
  </label>
  <label class={labelClass} for="cf-message">
    <span>{m.formMessage()}</span>
    <textarea id="cf-message" class="{inputClass} resize-y min-h-24" bind:value={message} name="message" rows="4" required></textarea>
  </label>

  <!-- Bot trap: hidden field that must stay empty -->
  <div class="absolute left-[-9999px] w-px h-px overflow-hidden" aria-hidden="true">
    <label>Company<input bind:value={company} name="company" tabindex="-1" autocomplete="off" /></label>
  </div>

  <div class="flex flex-wrap items-center gap-4 mt-1">
    <button
      type="submit"
      class="font-sans text-[15px] font-semibold px-6 py-3.25 rounded-lg cursor-pointer border-2 border-transparent bg-saffron text-cobalt-deep transition-transform duration-140 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-default"
      disabled={status === 'sending'}
    >
      {status === 'sending' ? m.formSending() : m.formSend()}
    </button>
    <p
      class="text-[13px] font-mono {status === 'ok' ? 'text-teal' : status === 'error' ? 'text-coral' : ''}"
      role="status"
      aria-live="polite"
    >
      {#if status === 'ok'}{m.formSuccess()}{:else if status === 'error'}{m.formError()}{/if}
    </p>
  </div>
</form>
