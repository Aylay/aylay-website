import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import ArticleCard from "@/components/ArticleCard";

export default function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("home");

  // Compte à rebours Sydney (fenêtre 2031-2033), calculé au build
  const year = new Date().getFullYear();
  const low = Math.max(1, 2031 - year);
  const high = Math.max(low + 1, 2033 - year);

  return (
    <>
      {/* Hero */}
      <section className="bg-cobalt text-cloud pt-[clamp(56px,11vw,116px)] overflow-hidden">
        <div className="wrap">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2.5 mb-7 text-cloud/90 font-mono text-xs tracking-[.02em] rv">
            <span>{t("heroEyebrow")}</span>
            <span className="inline-flex items-center gap-1.75">
              <span className="w-1.5 h-1.5 rounded-full bg-saffron" aria-hidden="true"></span>
              {t("heroLocation")}
            </span>
          </div>
          <h1 className="font-display font-bold text-[clamp(56px,15vw,150px)] leading-[.9] tracking-tight mb-7.5 rv">
            Lucas Attali
          </h1>
          <p className="font-display font-semibold text-[clamp(22px,4.6vw,40px)] leading-[1.12] tracking-[-0.015em] max-w-[18ch] mb-9 rv">
            {t.rich("heroLede", { mark: (c) => <span className="mark">{c}</span> })}
          </p>
          <blockquote className="border-l-[3px] border-saffron pl-4.5 max-w-[46ch] mb-10 rv">
            <p className="text-[clamp(15px,2.1vw,18px)] leading-normal text-cloud/86">{t("quoteText")}</p>
            <cite className="block not-italic font-mono text-[11px] text-cloud/80 mt-2">{t("quoteAuthor")}</cite>
          </blockquote>
          <div className="flex flex-wrap gap-3 mb-[clamp(48px,7vw,72px)] rv">
            <Button href="#contact">{t("ctaContact")}</Button>
            <Button href="/parcours" variant="secondary-cobalt">{t("ctaJourney")}</Button>
          </div>
          <div className="border-t border-cloud/28 py-4 flex justify-between items-center relative font-mono text-[11px] text-cloud/90 tracking-[.02em]">
            <span className="sail-dot" aria-hidden="true"></span>
            <span>Roquebrune-sur-Argens, France · 43.5, 6.63</span>
            <span>{t("pinSydney")} · -33.87, 151.21</span>
          </div>
        </div>
      </section>

      {/* Rail */}
      <div className="border-b border-line">
        <div className="wrap flex flex-wrap items-center gap-x-6.5 gap-y-3.5 py-4.5 font-mono text-xs text-faint">
          <span><b className="text-muted font-normal">Beavers</b> · 2019</span>
          <span><b className="text-muted font-normal">Skalp</b> · 2025</span>
          <span><b className="text-muted font-normal">{t("railDeveloper")}</b></span>
          <span className="ml-auto" aria-hidden="true">svelte · react · ts · tailwind · strapi · stripe · brevo</span>
        </div>
      </div>

      {/* Ce que je fais */}
      <section className="py-[clamp(56px,10vw,104px)] wrap">
        <SectionHeader number="01" title={t("whatTitle")} className="mb-11" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,270px),1fr))] gap-4">
          <ArticleCard tag={t("beaversTag")} year="2019" title="Beavers" color="cobalt">
            {t("beaversBody")}
          </ArticleCard>
          <ArticleCard tag={t("skalpTag")} year="2025" title="Skalp" color="coral">
            {t("skalpBody")}
          </ArticleCard>
          <ArticleCard tag={t("codeTag")} year={t("codeTag2")} title={t("codeTitle")} color="teal">
            {t("codeBody")}
          </ArticleCard>
        </div>
      </section>

      {/* Et demain : Sydney */}
      <section className="bg-teal-deep text-cloud relative overflow-hidden">
        <div className="wrap py-[clamp(48px,8vw,96px)] relative rv">
          <div
            className="static text-left mb-4.5 min-[721px]:absolute min-[721px]:top-[clamp(28px,5vw,44px)] min-[721px]:right-0 min-[721px]:text-right min-[721px]:mb-0 font-mono text-[11px] text-cloud/60 leading-[1.9]"
            aria-hidden="true"
          >
            <b className="text-saffron font-normal">↗ -33.87, 151.21</b>
            <br />
            {t("pinSydney")}
          </div>
          <p className="font-mono text-[11px] tracking-[.12em] text-saffron mb-5">{t("nextLabel")}</p>
          <h2 className="font-display font-semibold text-[clamp(30px,5.4vw,56px)] leading-[1.02] tracking-[-0.02em] max-w-[16ch] mb-5.5">
            {t("nextTitle", { low, high })}
          </h2>
          <p className="max-w-[54ch] text-cloud/82 text-[16px]">{t("nextBody")}</p>
        </div>
      </section>
    </>
  );
}