import { use } from "react";
import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { buildMetadata } from "@/lib/seo";

const DEMO_URL = "https://rally.lucas-attali.me/";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return buildMetadata(locale, {
    title: t("rallyTitle"),
    description: t("rallyDescription"),
    path: "/projets/rally",
    ogAlt: t("rallyTitle"),
  });
}

export default function RallyProject({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("rally");

  const features = [
    [t("f1Label"), t("f1Desc")],
    [t("f2Label"), t("f2Desc")],
    [t("f3Label"), t("f3Desc")],
    [t("f4Label"), t("f4Desc")],
    [t("f5Label"), t("f5Desc")],
  ] as const;

  // Libellés tech en dur (noms de produits), descriptions traduites
  const stack = [
    ["Lambda", t("awsLambda")],
    ["API Gateway WebSocket", t("awsWs")],
    ["DynamoDB", t("awsDdb")],
    ["EventBridge Scheduler", t("awsEb")],
    ["IAM + CloudWatch", t("awsOps")],
    ["Vercel + Next.js", t("awsFront")],
  ] as const;

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title="Rally"
        lede={t("lede")}
        titleClass="max-w-[8ch]"
        ledeClass="max-w-[60ch]"
      />

      {/* CTA démo (haut) */}
      <section className="py-[clamp(36px,6vw,56px)] wrap">
        <div className="flex flex-wrap gap-3 rv">
          <Button href={DEMO_URL}>{t("ctaDemo")}</Button>
          <Button href="/realisations" variant="secondary">{t("ctaBack")}</Button>
        </div>
      </section>

      {/* 01 Le produit */}
      <section className="pb-[clamp(52px,9vw,92px)] wrap">
        <SectionHeader number="01" title={t("prodTitle")} className="mb-3.5" />
        <p className="text-muted max-w-[62ch] mb-7.5 rv">{t("prodIntro")}</p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-3 rv">
          {features.map(([label, desc]) => (
            <div key={label} className="border border-line rounded-[10px] py-3.5 px-4 bg-card">
              <div className="font-mono text-[12px] font-bold text-cobalt-ink">{label}</div>
              <div className="text-[13px] text-muted mt-1">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture : bande sarcelle profond */}
      <section className="bg-teal-deep text-cloud">
        <div className="wrap py-[clamp(48px,8vw,88px)] rv">
          <p className="font-mono text-[11px] tracking-[.12em] text-saffron mb-2">{t("archLabel")}</p>
          <h2 className="font-display font-semibold text-[clamp(26px,4.6vw,46px)] tracking-[-0.02em] mb-4.5 max-w-[18ch]">
            {t("archTitle")}
          </h2>
          <p className="text-cloud/92 max-w-[64ch] mb-7.5">{t("archIntro")}</p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-3">
            {stack.map(([label, desc]) => (
              <div key={label} className="border border-cloud/30 rounded-[10px] py-3.25 px-3.75">
                <div className="font-mono text-[13px] font-bold text-white">{label}</div>
                <div className="text-[13px] text-cloud/82 mt-0.5">{desc}</div>
              </div>
            ))}
          </div>
          <p className="font-mono text-[11px] text-cloud/70 mt-5.5 max-w-[70ch]">{t("engineNote")}</p>
        </div>
      </section>

      {/* 02 Statut */}
      <section className="py-[clamp(52px,9vw,92px)] wrap">
        <SectionHeader number="02" title={t("statusTitle")} className="mb-3.5" />
        <p className="text-muted max-w-[62ch] rv">{t("statusBody")}</p>
      </section>

      {/* CTA final */}
      <section className="pb-[clamp(56px,10vw,104px)] wrap">
        <div className="flex flex-wrap gap-3 rv">
          <Button href={DEMO_URL}>{t("ctaDemo")}</Button>
          <Button href="/realisations" variant="secondary">{t("ctaBack")}</Button>
        </div>
      </section>
    </>
  );
}