"use client"

import { NextIntlClientProvider } from 'next-intl'
import { useLanguage } from './language-context'
import type { Lang } from './language-context'
import thMessages from '@/messages/th.json'
import enMessages from '@/messages/en.json'
import loMessages from '@/messages/lo.json'
import myMessages from '@/messages/my.json'
import viMessages from '@/messages/vi.json'
import kmMessages from '@/messages/km.json'
import msMessages from '@/messages/ms.json'
import idMessages from '@/messages/id.json'
import filMessages from '@/messages/fil.json'
import sgMessages from '@/messages/sg.json'
import bnMessages from '@/messages/bn.json'

const MESSAGES: Record<Lang, typeof thMessages> = {
  th:  thMessages,
  en:  enMessages,
  lo:  loMessages,
  my:  myMessages,
  vi:  viMessages,
  km:  kmMessages,
  ms:  msMessages,
  id:  idMessages,
  fil: filMessages,
  sg:  sgMessages,
  bn:  bnMessages,
}

export function DynamicIntlProvider({ children }: { children: React.ReactNode }) {
  const { lang } = useLanguage()
  const messages = MESSAGES[lang] ?? thMessages

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
