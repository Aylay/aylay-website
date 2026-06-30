type Color = "cobalt" | "coral" | "teal";

const colorStyle: Record<Color, React.CSSProperties> = {
  cobalt: { "--c": "var(--color-cobalt)", "--c-ink": "var(--cobalt-ink)" } as React.CSSProperties,
  coral: { "--c": "var(--color-coral)", "--c-ink": "var(--coral-ink)" } as React.CSSProperties,
  teal: { "--c": "var(--color-teal)", "--c-ink": "var(--teal-ink)" } as React.CSSProperties,
};

export default function ArticleCard({
  tag,
  year,
  title,
  color,
  children,
  cta,
}: {
  tag: string;
  year: string;
  title: string;
  color: Color;
  children: React.ReactNode;
  cta?: string;
}) {
  return (
    <article
      className="card-accent bg-card border border-line rounded-[14px] p-[clamp(24px,3vw,32px)] relative overflow-hidden transition-[transform,border-color] duration-240 hover:-translate-y-1 hover:border-line-2 rv"
      style={colorStyle[color]}
    >
      <div className="font-mono text-[11px] font-bold tracking-[.04em] text-(--c-ink) flex justify-between mb-4.5">
        <span>{tag}</span>
        <span>{year}</span>
      </div>
      <h3 className="font-display font-semibold text-[26px] tracking-[-0.01em] mb-2.5">{title}</h3>
      <p className="text-[15px] leading-[1.6] text-muted">{children}</p>
      {cta && (
        <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-[12px] font-bold text-(--c-ink)">
          {cta} <span aria-hidden="true">→</span>
        </span>
      )}
    </article>
  );
}