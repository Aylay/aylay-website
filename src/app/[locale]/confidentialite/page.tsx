import { use } from "react";
import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const f = await getTranslations({ locale, namespace: "footer" });
  return {
    title: `${f("privacy")} · Lucas Attali`,
    robots: { index: false, follow: true },
  };
}

export default function Confidentialite({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const f = useTranslations("footer");

  return (
    <section className="py-[clamp(56px,10vw,104px)] pt-[clamp(80px,12vw,140px)] wrap [&_h3]:font-display [&_h3]:font-semibold [&_h3]:text-[20px] [&_h3]:mt-7 [&_h3]:mb-2 [&_p]:text-muted [&_p]:max-w-[64ch] [&_p]:mb-2">
      <div className="flex items-baseline gap-3.5 mb-11">
        <span className="font-mono text-xs text-coral font-bold">§</span>
        <h2 className="font-display font-semibold text-[clamp(30px,5.2vw,52px)] tracking-[-0.02em] leading-none">{f("privacy")}</h2>
      </div>

      {locale === "fr" ? (
        <>
          <p>
            Ce site ne dépose aucun cookie de traçage et n&apos;utilise aucun outil de mesure d&apos;audience. Les seules données traitées sont celles que vous transmettez volontairement via le formulaire de contact.
          </p>
          <h3>Responsable de traitement</h3>
          <p>Lucas Attali, Roquebrune-sur-Argens (83), France.</p>
          <h3>Données collectées et finalité</h3>
          <p>
            Via le formulaire : prénom, nom, adresse email, objet et message. Ces données servent uniquement à traiter et à répondre à votre demande.
          </p>
          <h3>Base légale</h3>
          <p>Votre consentement, matérialisé par l&apos;envoi du formulaire.</p>
          <h3>Destinataires et sous-traitant</h3>
          <p>
            Vos messages sont reçus par Lucas Attali. L&apos;acheminement de l&apos;email est assuré par Brevo (Sendinblue SAS), prestataire d&apos;envoi. Aucun message n&apos;est enregistré dans une base de données.
          </p>
          <h3>Durée de conservation</h3>
          <p>Le temps nécessaire au traitement de votre demande, puis suppression.</p>
          <h3>Vos droits</h3>
          <p>
            Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, d&apos;opposition, de limitation et de portabilité. Pour les exercer, écrivez via le formulaire de contact. Vous pouvez aussi introduire une réclamation auprès de la CNIL (cnil.fr).
          </p>
        </>
      ) : (
        <>
          <p>
            This site sets no tracking cookies and uses no analytics. The only data processed is what you voluntarily submit through the contact form.
          </p>
          <h3>Data controller</h3>
          <p>Lucas Attali, Roquebrune-sur-Argens (83), France.</p>
          <h3>Data collected and purpose</h3>
          <p>
            Via the form: first name, last name, email address, subject and message. Used solely to handle and answer your request.
          </p>
          <h3>Legal basis</h3>
          <p>Your consent, given by submitting the form.</p>
          <h3>Recipients and processor</h3>
          <p>
            Your messages are received by Lucas Attali. Email delivery is handled by Brevo (Sendinblue SAS). No message is stored in any database.
          </p>
          <h3>Retention</h3>
          <p>For as long as needed to handle your request, then deleted.</p>
          <h3>Your rights</h3>
          <p>
            You have the right to access, rectify, erase, object to, restrict and port your data. To exercise them, write via the contact form. You may also lodge a complaint with the French authority, the CNIL (cnil.fr).
          </p>
        </>
      )}
    </section>
  );
}