import { Link } from "@/i18n/navigation";

type Variant = "primary" | "secondary-cobalt" | "secondary";

const styles: Record<Variant, string> = {
  primary: "border-transparent bg-saffron text-cobalt-deep transition-transform",
  "secondary-cobalt":
    "border-cloud/45 bg-transparent text-cloud transition-[transform,border-color] hover:border-cloud",
  secondary: "border-(--line-2) bg-transparent text-(--text) transition-transform",
};

export default function Button({
  href,
  variant = "primary",
  children,
}: {
  href: string;
  variant?: Variant;
  children: React.ReactNode;
}) {
  const cls = `font-sans text-[15px] font-semibold px-6 py-3.25 rounded-lg border-2 duration-140 hover:-translate-y-0.5 inline-block ${styles[variant]}`;
  return href.startsWith("/") ? (
    <Link href={href} className={cls}>{children}</Link>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>
  );
}