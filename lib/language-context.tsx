"use client"

import React, { createContext, useContext, useState, useCallback, useTransition } from "react"

export type Lang = "th" | "en"

interface LanguageContextValue {
  lang: Lang
  toggleLang: () => void
  t: (th: string, en: string) => string
  isTranslating: boolean
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "th",
  toggleLang: () => {},
  t: (th) => th,
  isTranslating: false,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("th")
  const [isPending, startTransition] = useTransition()

  const toggleLang = useCallback(() => {
    startTransition(() => {
      setLang((prev) => (prev === "th" ? "en" : "th"))
    })
  }, [])

  const t = useCallback(
    (th: string, en: string) => (lang === "th" ? th : en),
    [lang]
  )

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, isTranslating: isPending }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
