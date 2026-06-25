import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // ignore api, internes Next, et les fichiers (avec un point)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};