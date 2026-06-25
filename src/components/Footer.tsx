import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import ContactForm from "./ContactForm";

export default function Footer() {
  const f = useTranslations("footer");
  const year = new Date().getFullYear();
  const ext = "text-(--muted) hover:text-coral transition-colors duration-140";

  return (
    <footer id="contact" className="bg-paper border-t border-line py-[clamp(48px,7vw,80px)]">
      <div className="wrap grid grid-cols-2 max-[820px]:grid-cols-1 gap-[clamp(32px,6vw,80px)] items-start">
        <div className="flex flex-col gap-4">
          <Link
            href="/"
            className="font-mono font-bold text-[16px] text-ink"
            aria-label={f("ariaHome")}
            title={f("titleHome")}
          >
            LA<span className="text-saffron">.</span>
          </Link>

          <nav className="flex flex-wrap gap-5 text-sm font-medium" aria-label={f("ariaExternal")}>
            <a className={ext} href="https://github.com/aylay" rel="me noopener noreferrer" target="_blank" title={f("github")}>GitHub</a>
            <a className={ext} href="https://www.linkedin.com/in/lucasattali/" rel="me noopener noreferrer" target="_blank" title={f("linkedin")}>LinkedIn</a>
            <a className={ext} href="https://www.instagram.com/aylllay/" rel="me noopener noreferrer" target="_blank" title={f("instagram")}>Instagram</a>
            <a className={ext} href="https://beavers-agency.fr/" rel="noopener noreferrer" target="_blank" title={f("beavers")}>Beavers</a>
            <a className={ext} href="https://www.skalp.shop/" rel="noopener noreferrer" target="_blank" title={f("skalp")}>Skalp</a>
          </nav>

          <nav className="flex gap-2.5 font-mono text-xs text-faint" aria-label={f("ariaLegal")}>
            <Link href="/mentions-legales" className="hover:text-cobalt transition-colors duration-140" title={f("legal")}>{f("legal")}</Link>
            <span aria-hidden="true">·</span>
            <Link href="/confidentialite" className="hover:text-cobalt transition-colors duration-140" title={f("privacy")}>{f("privacy")}</Link>
          </nav>

          <p className="font-mono text-[11px] text-faint leading-[1.9]">
            <span className="align-[-0.1em]">©</span> {year} Lucas Attali<br />
            {f("location")}
          </p>
        </div>

        <div className="max-[820px]:order-first">
          <h2 className="font-display font-semibold text-[clamp(22px,3vw,30px)] tracking-[-0.01em] mb-2">{f("heading")}</h2>
          <p className="text-muted text-[15px] max-w-[42ch] mb-4.5">{f("intro")}</p>
          <ContactForm />
        </div>
      </div>
    </footer>
  );
}