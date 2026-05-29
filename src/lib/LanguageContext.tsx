"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import t, { Lang } from "./translations";

interface LanguageContextValue {
  lang: Lang;
  toggle: () => void;
  T: (typeof t)[Lang];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = useCallback(
    () => setLang((l) => (l === "en" ? "pt" : "en")),
    []
  );
  return (
    <LanguageContext.Provider value={{ lang, toggle, T: t[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
