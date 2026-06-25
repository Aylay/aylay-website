export default function SectionHeader({
  number,
  title,
  className = "mb-10",
}: {
  number: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={`flex items-baseline gap-3.5 rv ${className}`}>
      <span className="font-mono text-[12px] text-coral-ink font-bold" aria-hidden="true">{number}</span>
      <h2 className="font-display font-semibold text-[clamp(28px,5vw,48px)] tracking-[-0.02em] leading-none">{title}</h2>
    </div>
  );
}