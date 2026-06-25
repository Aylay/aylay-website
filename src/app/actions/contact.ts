"use server";

export type ContactState = { status: "idle" | "ok" | "error"; error?: string };

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const isEmail = (s: string) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s);

export async function sendContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const firstName = String(formData.get("firstName") || "").trim();
  const lastName = String(formData.get("lastName") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const subject = String(formData.get("subject") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const company = String(formData.get("company") || ""); // honeypot

  // Honeypot rempli => bot. On répond "ok" sans rien envoyer.
  if (company) return { status: "ok" };

  if (!firstName || !lastName || !email || !subject || !message) {
    return { status: "error", error: "missing" };
  }
  if (!isEmail(email)) return { status: "error", error: "email" };

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) return { status: "error", error: "config" };

  const to = process.env.CONTACT_TO || "lucas.attali@gmail.com";
  const sender = process.env.CONTACT_FROM || "no-reply@lucas-attali.me";

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: { "api-key": apiKey, "content-type": "application/json", accept: "application/json" },
    body: JSON.stringify({
      sender: { name: "Site lucas-attali.me", email: sender },
      to: [{ email: to, name: "Lucas Attali" }],
      replyTo: { email, name: `${firstName} ${lastName}` },
      subject: `[Site] ${subject}`,
      htmlContent:
        `<p><strong>De :</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)} (${escapeHtml(email)})</p>` +
        `<p><strong>Objet :</strong> ${escapeHtml(subject)}</p>` +
        `<p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>`,
    }),
  });

  if (!res.ok) return { status: "error", error: "send" };
  return { status: "ok" };
}