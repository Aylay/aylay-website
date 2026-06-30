import { useTranslations } from "next-intl";
import Button from "@/components/Button";

export default function NotFound() {
  const t = useTranslations("notFound");
  const th = useTranslations("home");

  return (
    <section className="bg-cobalt text-cloud min-h-[70vh] flex items-center overflow-hidden">
      <div className="wrap py-[clamp(56px,11vw,120px)]">
        <p className="font-mono text-[12px] tracking-[.12em] text-saffron mb-5">{t("code")}</p>
        <h1 className="font-display font-bold text-[clamp(40px,9vw,104px)] leading-[.92] tracking-tight max-w-[16ch] mb-6">
          {t("title")}
        </h1>
        <p className="text-[clamp(16px,2.2vw,20px)] text-cloud/90 max-w-[46ch] mb-9">{t("lede")}</p>
        <div className="flex flex-wrap gap-3">
          <Button href="/">{t("home")}</Button>
          <Button href="/realisations" variant="secondary-cobalt">{t("work")}</Button>
        </div>
        <div className="border-t border-cloud/28 mt-[clamp(40px,7vw,72px)] pt-4 flex justify-between items-center relative font-mono text-[11px] text-cloud/90">
          <span className="sail-dot" aria-hidden="true"></span>
          <span>Roquebrune-sur-Argens, France · 43.5, 6.63</span>
          <span>{th("pinSydney")} · -33.87, 151.21</span>
        </div>
      </div>
    </section>
  );
}