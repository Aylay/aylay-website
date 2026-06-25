import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { clash, general, spaceMono } from "../fonts";
import Reveal from "@/components/Reveal";
import { Providers } from "@/components/providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../globals.css";

import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://lucas-attali.me"),
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#1F3DE6",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale); // permet le rendu statique (sinon tout passe en dynamique)
  const t = await getTranslations("nav");

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Lucas Attali",
    alternateName: "Aylay",
    jobTitle: locale === "fr" ? "Développeur fullstack, cofondateur" : "Fullstack developer, co-founder",
    url: "https://lucas-attali.me",
    image: `https://lucas-attali.me/img/og-image-${locale}.png`,
    address: { "@type": "PostalAddress", addressLocality: "Roquebrune-sur-Argens", addressRegion: "PACA", addressCountry: "FR" },
    worksFor: [
      { "@type": "Organization", name: "Beavers", url: "https://beavers-agency.fr" },
      { "@type": "Organization", name: "Skalp", url: "https://www.skalp.shop" },
    ],
    knowsAbout: ["SvelteKit", "Next.js", "React", "TypeScript", "SEO", "E-commerce", "Netlinking"],
    sameAs: [
      "https://github.com/aylay",
      "https://www.linkedin.com/in/lucasattali/",
      "https://beavers-agency.fr/",
      "https://www.skalp.shop/",
      "https://www.instagram.com/aylllay/",
    ],
  };

  return (
    <html
      lang={locale}
      className={`${clash.variable} ${general.variable} ${spaceMono.variable}`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd).replace(/</g, "\\u003c") }}
        />
        <NextIntlClientProvider>
          <Providers>
            <a href="#main" className="skip">{t("skip")}</a>
            <Header />
            <main id="main">{children}</main>
            <Footer />
            <Reveal />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}