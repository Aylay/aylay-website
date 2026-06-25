import { use } from "react";
import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import TimelineItem from "@/components/TimelineItem";
import FormationItem from "@/components/FormationItem";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return buildMetadata(locale, {
    title: t("experienceTitle"),
    description: t("experienceDescription"),
    path: "/parcours",
    ogAlt: t("experienceTitle"),
  });
}

export default function Parcours({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("experience");
  const tHome = useTranslations("home");

  return (
    <>
      <PageHero eyebrow={t("expEyebrow")} title={t("expH1")} lede={t("expLede")} />

      {/* 01 Parcours : timeline */}
      <section className="py-[clamp(52px,9vw,92px)] wrap">
        <SectionHeader number="01" title={t("expSec1")} />
        <ol className="tl rv">
          <TimelineItem year={t("tlSkalpYear")} tag="e-commerce" name="Skalp" role={t("tlSkalpRole")} description={t("tlSkalpDesc")} colorClass="c-coral" />
          <TimelineItem year={t("tlBeaversYear")} tag={t("tlBeaversTag")} name="Beavers" role={t("tlBeaversRole")} description={t("tlBeaversDesc")} colorClass="c-cobalt" />
          <TimelineItem year="2019 → 2022" tag={t("tlIndepTag")} name={t("tlIndepName")} role={t("tlIndepRole")} description={t("tlIndepDesc")} colorClass="c-teal" />
          <TimelineItem year="2017 → 2019" tag={t("tlLiiiTag")} name="Liiiiife" role={t("tlLiiiRole")} description={t("tlLiiiDesc")} colorClass="c-teal" />
          <TimelineItem year="2017" tag={t("tlIimTag")} name="IIM" role={t("tlIimRole")} description={t("tlIimDesc")} colorClass="c-saffron" />
          <TimelineItem year="2014 → 2017" tag="production" name="Extreme Sensio" role={t("tlSensioRole")} description={t("tlSensioDesc")} colorClass="c-teal" />
          <TimelineItem year="2014 → 2017" tag="side project" name="Connect Object" role={t("tlConnectRole")} description={t("tlConnectDesc")} colorClass="c-coral" />
        </ol>
      </section>

      {/* Stack & méthodes : bande sarcelle profond */}
      <section className="bg-teal-deep text-cloud">
        <div className="wrap py-[clamp(48px,8vw,88px)] rv">
          <p className="font-mono text-[11px] tracking-[.12em] text-saffron mb-2">{t("stackLabel")}</p>
          <h2 className="font-display font-semibold text-[clamp(26px,4.4vw,42px)] tracking-[-0.02em] mb-6">{t("stackH2")}</h2>
          <div className="chips">
            <span>Svelte 5</span>
            <span>React</span>
            <span>TypeScript</span>
            <span>Tailwind</span>
            <span>Strapi</span>
            <span>Stripe</span>
            <span>Brevo</span>
            <span>Vercel</span>
          </div>
          <p className="font-mono text-[12px] text-cloud/60 mb-7.5">{t("stackAlso")}</p>
          <ol className="principles">
            <li>{t("stackP1")}</li>
            <li>{t("stackP2")}</li>
            <li>{t("stackP3")}</li>
            <li>{t("stackP4")}</li>
          </ol>
        </div>
      </section>

      {/* 02 Formation & certifications */}
      <section className="py-[clamp(52px,9vw,92px)] wrap">
        <SectionHeader number="02" title={t("expSec2")} />
        <div className="fc-grid rv">
          <div>
            <h3 className="font-mono text-[12px] tracking-wider text-(--coral-ink) mb-4 lowercase">{t("fcEdLabel")}</h3>
            <ul className="list-none grid gap-4">
              <FormationItem title="IIM" subtitle={t("fcIimDesc")} year="2009 → 2014" />
              <FormationItem title="ESILV" subtitle={t("fcEsilvDesc")} year="2007 → 2009" />
              <FormationItem title={t("fcBacName")} subtitle={t("fcBacDesc")} year="2007" />
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-[12px] tracking-wider text-(--coral-ink) mb-4 lowercase">{t("fcCertLabel")}</h3>
            <ul className="list-none grid gap-4">
              <FormationItem title={t("fcRgpdName")} subtitle="score 100%" year="2019" />
              <FormationItem title="Google Tag Manager" subtitle={t("fcGtmDesc")} year="2019" />
              <FormationItem title="Google Analytics" subtitle={t("fcGaDesc")} year="2019" />
            </ul>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="py-[clamp(52px,9vw,92px)] wrap">
        <div className="flex flex-wrap gap-3 rv">
          <Button href="/realisations">{t("ctaWork")}</Button>
          <Button href="#contact" variant="secondary">{tHome("ctaContact")}</Button>
        </div>
      </section>
    </>
  );
}