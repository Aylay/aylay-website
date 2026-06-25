"use client";

import { Fragment, useEffect, useState } from "react";
import { useTheme } from "./theme";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname(); // sans préfixe de locale, ex "/a-propos"
  const locale = useLocale();
  const { theme, toggle } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { href: "/a-propos", label: t("about") },
    { href: "/parcours", label: t("experience") },
    { href: "/realisations", label: t("work") },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-cobalt text-cloud">
        <div className="wrap flex items-center gap-2 h-15">
          <Link
            href="/"
            className="font-mono font-bold text-[15px] tracking-[.02em] text-cloud"
            aria-label={t("ariaHome")}
            title={t("titleHome")}
          >
            LA<span className="text-saffron">.</span>
          </Link>

          <nav className="flex gap-6 ml-auto text-sm font-medium max-[720px]:hidden" aria-label={t("ariaNav")}>
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="nav-link text-cloud/90 hover:text-cloud transition-colors duration-140"
                aria-current={pathname === l.href ? "page" : undefined}
                title={l.label}
              >
                {l.label}
              </Link>
            ))}
            
            <a
              href="#contact"
              className="nav-link text-cloud/90 hover:text-cloud transition-colors duration-140"
              title={t("contact")}
            >
              {t("contact")}
            </a>
          </nav>

          <div className="flex items-center gap-3.5 ml-6 pl-4.5 border-l border-cloud/20 max-[720px]:ml-auto max-[720px]:pl-0 max-[720px]:border-l-0">
            <div className="flex items-center gap-2 font-mono text-xs">
              {routing.locales.map((l, i) => (
                <Fragment key={l}>
                  {i > 0 && <span className="text-cloud/45" aria-hidden="true">·</span>}
                  <Link
                    href={pathname}
                    locale={l}
                    hrefLang={l}
                    lang={l}
                    className={`${
                      l === locale
                        ? "text-cloud font-bold underline decoration-2 underline-offset-4 decoration-saffron"
                        : "text-cloud/85"
                    } hover:text-cloud transition-colors duration-140`}
                    aria-label={l === "fr" ? "Français" : "English"}
                    title={l === "fr" ? "Français" : "English"}
                    aria-current={l === locale ? "true" : undefined}
                  >
                    {l}
                  </Link>
                </Fragment>
              ))}
            </div>

            <button
              type="button"
              onClick={toggle}
              aria-label={t("ariaTheme")}
              title={t("ariaTheme")}
              className="bg-transparent border border-cloud/30 text-cloud w-7.5 h-7.5 rounded-[7px] cursor-pointer text-sm grid place-items-center transition-colors duration-140 hover:bg-cloud/10"
            >
              {mounted ? (theme === "light" ? "☾" : "☀") : ""}
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={t("ariaNav")}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="hidden max-[720px]:inline-flex items-center justify-center bg-transparent border border-cloud/30 text-cloud w-8.5 h-7.5 rounded-[7px] cursor-pointer text-base transition-colors duration-140 hover:bg-cloud/10"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile : hors du <header>, positionné en fixed via .mobile-menu */}
      <nav
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        id="mobile-menu"
        aria-label={t("ariaNav")}
        inert={!menuOpen}
      >
        {navLinks.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="font-display font-semibold text-[23px] text-cloud py-3.75 border-b border-cloud/10 last:border-b-0"
            onClick={() => setMenuOpen(false)}
            title={l.label}
          >
            {l.label}
          </Link>
        ))}
        
        <a
          href="#contact"
          className="font-display font-semibold text-[23px] text-cloud py-3.75 border-b border-cloud/10 last:border-b-0"
          onClick={() => setMenuOpen(false)}
          title={t("contact")}
        >
          {t("contact")}
        </a>
      </nav>
    </>
  );
}