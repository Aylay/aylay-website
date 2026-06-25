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
    title: `${f("legal")} · Lucas Attali`,
    robots: { index: false, follow: true },
  };
}

export default function MentionsLegales({
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
        <h2 className="font-display font-semibold text-[clamp(30px,5.2vw,52px)] tracking-[-0.02em] leading-none">{f("legal")}</h2>
      </div>

      {locale === "fr" ? (
        <>
          <h3>Éditeur</h3>
          <p>
            Le présent site est édité par Lucas Attali, domicilié à Roquebrune-sur-Argens (83), France.<br />
            Contact : via le formulaire de contact du site.
          </p>
          <h3>Directeur de la publication</h3>
          <p>Lucas Attali.</p>
          <h3>Hébergeur</h3>
          <p>Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis. Site : vercel.com.</p>
          <h3>Propriété intellectuelle</h3>
          <p>
            L&apos;ensemble des contenus de ce site (textes, code, identité visuelle) est la propriété de Lucas Attali, sauf mention contraire. Toute reproduction sans autorisation est interdite.
          </p>
        </>
      ) : (
        <>
          <h3>Publisher</h3>
          <p>
            This website is published by Lucas Attali, based in Roquebrune-sur-Argens (83), France.<br />
            Contact: via the site&apos;s contact form.
          </p>
          <h3>Publication director</h3>
          <p>Lucas Attali.</p>
          <h3>Hosting</h3>
          <p>Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. Website: vercel.com.</p>
          <h3>Intellectual property</h3>
          <p>
            All content on this site (text, code, visual identity) is the property of Lucas Attali unless stated otherwise. Reproduction without permission is prohibited.
          </p>
        </>
      )}
    </section>
  );
}