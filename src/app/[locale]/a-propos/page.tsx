import { use } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations, useLocale } from "next-intl";
import Button from "@/components/Button";
import { buildMetadata } from "@/lib/seo";
import padel from "@/assets/lucas-padel-skalp.webp";
import portrait from "@/assets/lucas-portrait.jpg";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return buildMetadata(locale, {
    title: t("aboutTitle"),
    description: t("aboutDescription"),
    path: "/a-propos",
    ogAlt: t("aboutTitle"),
  });
}

export default function About({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("about");
  const lang = useLocale();
  const padelAlt =
    lang === "fr"
      ? "Lucas Attali sur un terrain de padel, bonnet Skalp"
      : "Lucas Attali on a padel court, Skalp beanie";
  const tHome = useTranslations("home");

  return (
    <>
      {/* Hero : bande cobalt, grille texte / photo padel */}
      <section className="bg-cobalt text-cloud py-[clamp(48px,9vw,92px)]">
        <div className="wrap grid grid-cols-[1.05fr_0.95fr] max-[820px]:grid-cols-1 gap-[clamp(28px,5vw,60px)] items-center">
          <div className="rv">
            <span className="block font-mono text-[11px] tracking-[.02em] text-cloud/90 mb-4.5">{t("aboutEyebrow")}</span>
            <h1 className="font-display font-bold text-[clamp(42px,7.5vw,90px)] leading-[.92] tracking-tight mb-5.5">{t("aboutH1")}</h1>
            <p className="text-[clamp(16px,2.1vw,20px)] leading-[1.55] text-cloud/90 max-w-[46ch]">{t("aboutLede")}</p>
          </div>
          <figure className="ab-hero-fig relative rounded-2xl overflow-hidden bg-teal-deep aspect-square max-[820px]:max-w-85 max-[820px]:mx-auto rv">
            <Image
              src={padel}
              alt={padelAlt}
              fill
              sizes="(min-width: 820px) 50vw, 340px"
              priority
              className="object-cover mix-blend-luminosity opacity-95"
            />
            <figcaption className="absolute left-3.5 bottom-3 z-2 font-mono text-[11px] text-cloud/85">{t("aboutPadelCaption")}</figcaption>
          </figure>
        </div>
      </section>

      {/* Bio : texte gauche, portrait droite */}
      <section className="py-[clamp(52px,9vw,96px)] wrap">
        <div className="grid grid-cols-[1.4fr_0.85fr] max-[820px]:grid-cols-1 gap-[clamp(28px,5vw,60px)] items-start rv">
          <div className="[&>p]:text-[17px] [&>p]:leading-[1.72] [&>p]:mb-4.5 [&>p]:max-w-[60ch] [&>p:last-child]:mb-0">
            <p>{t("aboutP1")}</p>
            <p>{t("aboutPSkalp")}</p>
            <p>{t("aboutP2")}</p>
            <p>{t("aboutP3")}</p>
          </div>
          <figure className="ab-portrait relative border border-line rounded-[14px] overflow-hidden bg-card max-[820px]:max-w-85">
            <div className="relative aspect-4/5">
              <Image
                src={portrait}
                alt="Lucas Attali"
                fill
                sizes="(min-width: 820px) 35vw, 340px"
                className="object-cover"
              />
            </div>
            <figcaption className="font-mono text-[11px] text-faint px-3.5 py-2.5">Lucas Attali</figcaption>
          </figure>
        </div>
      </section>

      {/* En bref : bande sarcelle profond */}
      <section className="bg-teal-deep text-cloud">
        <div className="wrap py-[clamp(48px,8vw,88px)] rv">
          <p className="font-mono text-[11px] tracking-[.12em] text-saffron mb-5.5">{t("aboutInShort")}</p>
          <dl className="facts-dl">
            {([
              ["factBaseL", "factBaseV"],
              ["factLangsL", "factLangsV"],
              ["factCourtL", "factCourtV"],
              ["factCompanionL", "factCompanionV"],
              ["factHeadingL", "factHeadingV"],
            ] as const).map(([l, v]) => (
              <div key={l} className="border-t border-cloud/22 pt-2.5">
                <dt className="font-mono text-[11px] tracking-wider text-saffron mb-1.25">{t(l)}</dt>
                <dd className="text-[15px] text-cloud">{t(v)}</dd>
              </div>
            ))}
          </dl>
          <div className="border-t border-cloud/28 pt-4 flex justify-between font-mono text-[11px] text-cloud/62">
            <span>Roquebrune-sur-Argens, France · 43.5, 6.63</span>
            <span>{tHome("pinSydney")} · -33.87, 151.21</span>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="py-[clamp(52px,9vw,96px)] wrap">
        <div className="flex flex-wrap gap-3 rv">
          <Button href="/parcours">{tHome("ctaJourney")}</Button>
          <Button href="#contact" variant="secondary">{tHome("ctaContact")}</Button>
        </div>
      </section>
    </>
  );
}