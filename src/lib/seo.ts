import type { Metadata } from "next";

const BASE = "https://lucas-attali.me";

export function buildMetadata(
  locale: string,
  opts: { title: string; description: string; path: string; ogAlt: string }
): Metadata {
  const fr = opts.path ? `${BASE}${opts.path}` : `${BASE}/`;
  const en = opts.path ? `${BASE}/en${opts.path}` : `${BASE}/en`;
  const canonical = locale === "en" ? en : fr;
  const og = `/og-image-${locale}.png`;

  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical, languages: { fr, en, "x-default": fr } },
    openGraph: {
      type: "profile",
      siteName: "Lucas Attali",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      alternateLocale: locale === "fr" ? "en_US" : "fr_FR",
      title: opts.title,
      description: opts.description,
      url: canonical,
      images: [{ url: og, width: 1200, height: 630, alt: opts.ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [og],
    },
  };
}