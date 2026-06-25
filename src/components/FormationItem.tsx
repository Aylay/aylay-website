export default function FormationItem({
  title,
  subtitle,
  year,
}: {
  title: string;
  subtitle?: string;
  year?: string;
}) {
  return (
    <li className="border-t border-line pt-3">
      <div className="font-display font-semibold text-[18px]">{title}</div>
      {subtitle && <div className="text-[14px] text-muted">{subtitle}</div>}
      {year && <div className="font-mono text-[11px] text-faint">{year}</div>}
    </li>
  );
}