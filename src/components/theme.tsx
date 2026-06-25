"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { usePathname } from "next/navigation";

type Theme = "light" | "dark";
type ThemeContext = { theme: Theme; toggle: () => void; setTheme: (t: Theme) => void };

const Ctx = createContext<ThemeContext | null>(null);

const FOUC_SCRIPT = `try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=t||'dark'}catch(e){document.documentElement.dataset.theme='dark'}`;

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const pathname = usePathname();

  useServerInsertedHTML(() => (
    <script dangerouslySetInnerHTML={{ __html: FOUC_SCRIPT }} />
  ));

  // À chaque navigation (y compris changement de langue), on relit le thème
  // stocké et on le réapplique sur <html> + sur l'état React.
  useEffect(() => {
    let stored: Theme = "dark";
    try {
      stored = (localStorage.getItem("theme") as Theme) || "dark";
    } catch {}
    document.documentElement.dataset.theme = stored;
    setThemeState(stored);
  }, [pathname]);

  const apply = useCallback((t: Theme) => {
    document.documentElement.dataset.theme = t;
    try { localStorage.setItem("theme", t); } catch {}
    setThemeState(t);
  }, []);

  const toggle = useCallback(() => {
    apply((document.documentElement.dataset.theme as Theme) === "dark" ? "light" : "dark");
  }, [apply]);

  return <Ctx.Provider value={{ theme, toggle, setTheme: apply }}>{children}</Ctx.Provider>;
}

export function useTheme() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}