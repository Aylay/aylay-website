import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  // ...ta config existante si tu en avais (ex: turbopack.root)
};

const withNextIntl = createNextIntlPlugin(); // détecte src/i18n/request.ts tout seul
export default withNextIntl(nextConfig);