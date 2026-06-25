import type { Metadata } from "next";
import { clash, general, spaceMono } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lucas Attali",
  description: "Développeur fullstack et entrepreneur",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${clash.variable} ${general.variable} ${spaceMono.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}