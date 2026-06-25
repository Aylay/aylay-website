export default function MetricCard({
  num,
  label,
  tag,
}: {
  num: string;
  label: string;
  tag?: string;
}) {
  return (
    <div className="border border-line rounded-xl py-4.5 px-5 bg-card">
      <div className="font-display font-bold text-[clamp(30px,4vw,42px)] tracking-[-0.02em] text-cobalt-ink leading-none">{num}</div>
      <div className="text-[14px] text-ink mt-2 font-semibold">{label}</div>
      {tag && <div className="font-mono text-[11px] text-faint mt-0.75">{tag}</div>}
    </div>
  );
}