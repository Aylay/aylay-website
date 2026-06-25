export default function TimelineItem({
  year,
  tag,
  name,
  role,
  description,
  colorClass,
}: {
  year: string;
  tag: string;
  name: string;
  role: string;
  description: string;
  colorClass: string;
}) {
  return (
    <li className={`tl-item ${colorClass}`}>
      <div className="flex flex-wrap gap-x-3.5 gap-y-2 items-center mb-1.75">
        <span className="font-mono text-[12px] font-bold text-(--c-ink)">{year}</span>
        <span className="font-mono text-[11px] text-faint lowercase">{tag}</span>
      </div>
      <h3 className="font-display font-semibold text-[23px] tracking-[-0.01em] inline">{name}</h3>
      <span className="block mt-0.5 mb-2 font-medium text-[15px] text-muted">{role}</span>
      <p className="text-[15px] leading-[1.6] text-muted max-w-[64ch]">{description}</p>
    </li>
  );
}