"use client"

import React, { createContext, useContext, useState, useCallback, useRef, useEffect } from "react"

export type Lang = "th" | "en"

interface LanguageContextValue {
  lang: Lang
  toggleLang: () => void
  /** t(thaiText, englishText?) — if englishText omitted, auto-translates via API */
  t: (thai: string, english?: string) => string
  isTranslating: boolean
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "th",
  toggleLang: () => {},
  t: (thai) => thai,
  isTranslating: false,
})

// ─── MyMemory free translate API (no key needed, 1000 req/day) ────────────────
async function autoTranslate(text: string): Promise<string> {
  try {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=th|en`
    const res = await fetch(url)
    const data = await res.json()
    if (data.responseStatus === 200 && data.responseData?.translatedText) {
      return data.responseData.translatedText as string
    }
    return text
  } catch {
    return text
  }
}

const CACHE_KEY = "rk_translations_cache"

function loadCache(): Record<string, string> {
  if (typeof window === "undefined") return {}
  try {
    return JSON.parse(localStorage.getItem(CACHE_KEY) || "{}")
  } catch {
    return {}
  }
}

function saveCache(cache: Record<string, string>) {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache))
  } catch {}
}

// ─── Provider ─────────────────────────────────────────────────────────────────
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("th")
  const [isTranslating, setIsTranslating] = useState(false)
  // runtime cache: thai → english
  const cacheRef = useRef<Record<string, string>>(loadCache())
  // pending promises to avoid duplicate API calls
  const pendingRef = useRef<Record<string, Promise<string>>>({})

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "th" ? "en" : "th"))
  }, [])

  /**
   * t(thai, english?)
   * - If lang=th  → return thai
   * - If lang=en  → return english (if provided), else look up cache, else auto-translate
   */
  const t = useCallback(
    (thai: string, english?: string): string => {
      if (lang === "th") return thai
      // English provided manually → use it
      if (english) return english
      // Check cache
      if (cacheRef.current[thai]) return cacheRef.current[thai]
      // Not cached → trigger async fetch, return thai in the meantime
      if (!pendingRef.current[thai]) {
        setIsTranslating(true)
        pendingRef.current[thai] = autoTranslate(thai).then((result) => {
          cacheRef.current[thai] = result
          saveCache(cacheRef.current)
          delete pendingRef.current[thai]
          // Force React to re-render so translated text appears
          setLang((prev) => prev) // triggers re-render without changing state
          setIsTranslating(false)
          return result
        })
      }
      return thai // show Thai while fetching
    },
    [lang]
  )

  // When switching to English, trigger a re-render after a tick so pending
  // translations that just landed in cache get picked up
  useEffect(() => {
    if (lang === "en") {
      const timer = setTimeout(() => setLang("en"), 50)
      return () => clearTimeout(timer)
    }
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, isTranslating }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
