import type { Metadata } from 'next'
import { Inter, Prompt } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const prompt = Prompt({ 
  weight: ['300', '400', '500', '600', '700'], 
  subsets: ['thai', 'latin'], 
  variable: '--font-prompt' 
});

export const metadata: Metadata = {
  title: 'RubKianCode - รับผลิตซอฟต์แวร์ ราคาพิเศษ',
  description: 'บริษัท Rub Kian Code Co.,Ltd. รับผลิต ให้เช่า และปรึกษาการทำซอฟต์แวร์ทุกรูปแบบ รวมทั้งให้เช่าโปรแกรม Photobooth สไตล์เกาหลี',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="th">
      <body className={`${inter.variable} ${prompt.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
