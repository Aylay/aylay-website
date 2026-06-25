export default function PageHero({
  eyebrow,
  title,
  lede,
  titleClass = "max-w-[14ch]",
  ledeClass = "max-w-[52ch]",
}: {
  eyebrow: string;
  title: string;
  lede: string;
  titleClass?: string;
  ledeClass?: string;
}) {
  return (
    <section className="bg-cobalt text-cloud py-[clamp(48px,8vw,84px)]">
      <div className="wrap rv">
        <span className="block font-mono text-[12px] text-cloud/90 mb-4">{eyebrow}</span>
        <h1 className={`font-display font-bold text-[clamp(38px,7vw,82px)] leading-[.95] tracking-tight mb-4.5 ${titleClass}`}>{title}</h1>
        <p className={`text-[clamp(16px,2.1vw,19px)] text-cloud/90 ${ledeClass}`}>{lede}</p>
      </div>
    </section>
  );
}