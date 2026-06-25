import { use } from "react";
import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import MetricCard from "@/components/MetricCard";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return buildMetadata(locale, {
    title: t("workTitle"),
    description: t("workDescription"),
    path: "/realisations",
    ogAlt: t("workTitle"),
  });
}

export default function Realisations({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("work");
  const tHome = useTranslations("home");

  const build = [
    ["SvelteKit", t("buildStorefront")],
    ["Strapi", t("buildCatalogue")],
    ["Stripe", t("buildPayment")],
    ["Brevo", t("buildEmails")],
    ["SendCloud", t("buildShipping")],
    ["Vercel", t("buildHosting")],
  ] as const;

  return (
    <>
      <PageHero
        eyebrow={t("realEyebrow")}
        title={t("realH1")}
        lede={t("realLede")}
        titleClass="max-w-[13ch]"
        ledeClass="max-w-[54ch]"
      />

      {/* 01 Beavers : SEO + développement */}
      <section className="py-[clamp(52px,9vw,92px)] wrap">
        <SectionHeader number="01" title="Beavers" className="mb-3.5" />
        <p className="text-muted max-w-[60ch] mb-7.5 rv">{t("realBeaversIntro")}</p>

        <p className="font-mono text-[12px] tracking-[.08em] text-cobalt-ink mt-7.5 mb-3.5 lowercase rv">seo</p>
        <div className="metrics rv">
          <MetricCard num="x8" label={t("mSeoKw1Lbl")} tag={t("mSeoKw1Tag")} />
          <MetricCard num="40x" label={t("mSeoTrafLbl")} tag="B2B / services" />
          <MetricCard num="x30" label="impressions" tag={t("mSeoImpTag")} />
          <MetricCard num="+100%" label={t("mSeoKwLbl")} tag={t("mSeoInsTag")} />
        </div>

        <p className="font-mono text-[12px] tracking-[.08em] text-cobalt-ink mt-7.5 mb-3.5 lowercase rv">{t("realPillarDev")}</p>
        <div className="metrics rv">
          <MetricCard num="99%" label="Lighthouse" tag={t("mDevLighTag")} />
          <MetricCard num="+30" label="sites & landing pages" tag={t("mDevSitesTag")} />
          <MetricCard num="GTM" label={t("mDevGtmLbl")} tag={t("mDevGtmTag")} />
        </div>
        <p className="font-mono text-[11px] text-faint mt-5.5 rv">{t("realBeaversNote")}</p>
      </section>

      {/* Skalp : bande corail */}
      <section className="bg-coral text-cloud">
        <div className="wrap py-[clamp(48px,8vw,88px)] rv">
          <p className="font-mono text-[11px] tracking-[.12em] text-white/82 mb-2">{t("realSkalpLabel")}</p>
          <h2 className="font-display font-semibold text-[clamp(26px,4.6vw,46px)] tracking-[-0.02em] mb-4.5 max-w-[18ch]">{t("realSkalpH2")}</h2>
          <p className="text-white/92 max-w-[62ch] mb-6.5">{t("realSkalpP")}</p>
          <div className="build">
            {build.map(([name, desc]) => (
              <div key={name} className="border border-white/38 rounded-[10px] py-3.25 px-3.75">
                <div className="font-mono text-[13px] font-bold text-white">{name}</div>
                <div className="text-[13px] text-white/82 mt-0.5">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jeux-concours : bande sarcelle profond */}
      <section className="bg-teal-deep text-cloud">
        <div className="wrap py-[clamp(48px,8vw,88px)] rv">
          <p className="font-mono text-[11px] tracking-[.12em] text-saffron mb-2">{t("realJcLabel")}</p>
          <h2 className="font-display font-semibold text-[clamp(26px,4.6vw,46px)] tracking-[-0.02em] mb-4.5 max-w-[16ch]">{t("realJcH2")}</h2>
          <p className="text-cloud/92 max-w-[62ch] mb-7.5">{t("realJcP")}</p>
          <div className="jc-stats">
            <div>
              <div className="font-display font-bold text-[clamp(40px,7vw,72px)] text-saffron leading-none tracking-[-0.02em]">14 000</div>
              <div className="font-mono text-[12px] text-cloud/82 mt-2 max-w-[22ch]">{t("jcStat1Lbl")}</div>
            </div>
            <div>
              <div className="font-display font-bold text-[clamp(40px,7vw,72px)] text-saffron leading-none tracking-[-0.02em]">~3 <span className="text-[.5em]">{t("jcStat2Unit")}</span></div>
              <div className="font-mono text-[12px] text-cloud/82 mt-2 max-w-[22ch]">{t("jcStat2Lbl")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* SaaS netlinking : produit perso en préparation */}
      <section className="py-[clamp(52px,9vw,92px)] wrap">
        <div className="border border-line border-l-4 border-l-cobalt rounded-xl p-[clamp(24px,4vw,38px)] bg-card rv">
          <p className="font-mono text-[11px] tracking-widest text-cobalt-ink mb-2.5">{t("nlLabel")}</p>
          <h2 className="font-display font-semibold text-[clamp(24px,4vw,38px)] tracking-[-0.02em] mb-3 max-w-[20ch]">{t("nlH")}</h2>
          <p className="text-muted max-w-[62ch]">{t("nlP")}</p>
        </div>
      </section>

      {/* CTAs */}
      <section className="py-[clamp(52px,9vw,92px)] wrap">
        <div className="flex flex-wrap gap-3 rv">
          <Button href="#contact">{tHome("ctaContact")}</Button>
          <Button href="/parcours" variant="secondary">{tHome("ctaJourney")}</Button>
        </div>
      </section>
    </>
  );
}