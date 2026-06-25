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
  const t = await getTranslations("nav");   // 👈 cette ligne manque probablement chez toi

  return (
    <html
      lang={locale}
      className={`${clash.variable} ${general.variable} ${spaceMono.variable}`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body>
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