"use client"

import { NextIntlClientProvider } from 'next-intl'
import { useLanguage } from './language-context'
import thMessages from '@/messages/th.json'
import enMessages from '@/messages/en.json'

/**
 * DynamicIntlProvider — wraps NextIntlClientProvider and switches
 * message files instantly when the user toggles the language,
 * without any page reload or URL change (client-side only).
 */
export function DynamicIntlProvider({ children }: { children: React.ReactNode }) {
  const { lang } = useLanguage()
  const messages = lang === 'th' ? thMessages : enMessages

  return (
    <NextIntlClientProvider
      locale={lang}
      messages={messages}
      timeZone="Asia/Bangkok"
    >
      {children}
    </NextIntlClientProvider>
  )
}
