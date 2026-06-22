import { json, type RequestHandler } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

// Endpoint serverless (fonction Vercel) : envoie un email via Brevo, sans stockage.
export const prerender = false;

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const isEmail = (s: string) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s);

export const POST: RequestHandler = async ({ request }) => {
  const data = await request.json().catch(() => null);
  if (!data) return json({ ok: false, error: 'bad_request' }, { status: 400 });

  const { firstName, lastName, email, subject, message, company } = data as Record<string, string>;

  // Honeypot rempli => bot. On répond "ok" sans rien envoyer.
  if (company) return json({ ok: true });

  if (!firstName || !lastName || !email || !subject || !message) {
    return json({ ok: false, error: 'missing' }, { status: 422 });
  }
  if (!isEmail(email)) return json({ ok: false, error: 'email' }, { status: 422 });

  const apiKey = env.BREVO_API_KEY;
  if (!apiKey) return json({ ok: false, error: 'config' }, { status: 500 });

  const to = env.CONTACT_TO || 'lucas.attali@gmail.com';
  // Expéditeur : doit être un domaine validé dans Brevo (voir README).
  const sender = env.CONTACT_FROM || 'no-reply@lucas-attali.me';

  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: { 'api-key': apiKey, 'content-type': 'application/json', accept: 'application/json' },
    body: JSON.stringify({
      sender: { name: 'Site lucas-attali.me', email: sender },
      to: [{ email: to, name: 'Lucas Attali' }],
      replyTo: { email, name: `${firstName} ${lastName}` },
      subject: `[Site] ${subject}`,
      htmlContent:
        `<p><strong>De :</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)} ` +
        `(${escapeHtml(email)})</p>` +
        `<p><strong>Objet :</strong> ${escapeHtml(subject)}</p>` +
        `<p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>`
    })
  });

  if (!res.ok) return json({ ok: false, error: 'send' }, { status: 502 });
  return json({ ok: true });
};
