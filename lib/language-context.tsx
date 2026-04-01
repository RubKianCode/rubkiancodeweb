"use client"

import { LANG_TYPOGRAPHY, type LangTypographyConfig } from './lang-config'
export type { LangTypographyConfig }

import React, { createContext, useContext, useState, useTransition } from "react"

export type Lang = "th" | "en" | "lo" | "my" | "vi" | "km" | "ms" | "id" | "fil" | "sg" | "bn"

export interface LangOption {
  code: Lang
  flag: string
  label: string
  short: string
  isNonLatin: boolean
}

export const LANG_OPTIONS: LangOption[] = [
  { code: "th",  flag: "🇹🇭", label: "ไทย",       short: "TH", isNonLatin: true  },
  { code: "en",  flag: "🇬🇧", label: "English",    short: "EN", isNonLatin: false },
  { code: "lo",  flag: "🇱🇦", label: "ລາວ",        short: "LA", isNonLatin: true  },
  { code: "my",  flag: "🇲🇲", label: "မြန်မာ",     short: "MM", isNonLatin: true  },
  { code: "vi",  flag: "🇻🇳", label: "Việt",       short: "VN", isNonLatin: false },
  { code: "km",  flag: "🇰🇭", label: "ខ្មែរ",       short: "KH", isNonLatin: true  },
  { code: "ms",  flag: "🇲🇾", label: "Malaysia",   short: "MY", isNonLatin: false },
  { code: "id",  flag: "🇮🇩", label: "Indonesia",  short: "ID", isNonLatin: false },
  { code: "fil", flag: "🇵🇭", label: "Filipino",   short: "PH", isNonLatin: false },
  { code: "sg",  flag: "🇸🇬", label: "Singapore",  short: "SG", isNonLatin: false },
  { code: "bn",  flag: "🇧🇳", label: "Brunei",     short: "BN", isNonLatin: false },
]

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  isTranslating: boolean
  currentLangOption: LangOption
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "th",
  setLang: () => {},
  isTranslating: false,
  currentLangOption: LANG_OPTIONS[0],
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("th")
  const [isPending, startTransition] = useTransition()

  const setLang = (newLang: Lang) => {
    startTransition(() => {
      setLangState(newLang)
    })
  }

  const currentLangOption = LANG_OPTIONS.find(o => o.code === lang) ?? LANG_OPTIONS[0]

  return (
    <LanguageContext.Provider value={{ lang, setLang, isTranslating: isPending, currentLangOption }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}

/** Hook สำหรับดึงค่า typography ตามภาษาปัจจุบัน */
export function useLangTypography(): LangTypographyConfig {
  const { lang } = useLanguage()
  return LANG_TYPOGRAPHY[lang] ?? LANG_TYPOGRAPHY['th']
}
