"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, MessageCircle, Languages } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { t, lang, toggleLang, isTranslating } = useLanguage()

  const navLinks = [
    { href: "#services", label: t("รับผลิตซอฟต์แวร์", "Software Development") },
    { href: "#products", label: t("เช่าซอฟต์แวร์", "Software Rental") },
    { href: "#photobooth", label: t("เช่า Photobooth", "Photobooth Rental") },
    { href: "#contact", label: t("ติดต่อเรา", "Contact Us") },
  ]

  const handleLineContact = () => {
    window.open('https://line.me/ti/p/@rubkiancode', '_blank')
    setIsOpen(false)
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: '#93c8cf',
        borderBottom: '3px solid #f3f84a',
        boxShadow: '0 3px 0px #7a5010',
      }}
    >
      {/* Top scanline accent */}
      <div className="absolute top-0 left-0 right-0 h-0.5 pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">

          {/* Brand Name */}
          <Link href="/" className="flex items-center gap-1 group -ml-70">
              <span className="font-mono text-lg font-black" style={{ color: '#f3f84a', textShadow: '2px 2px 0 #7a5010' }}>【</span>
              <span
                className="font-black text-base sm:text-2xl tracking-tight uppercase leading-tight"
                style={{
                  color: '#1a0e00',
                  textShadow: '1px 1px 0px rgba(255,255,255,0.3)',
                  fontFamily: 'var(--font-prompt), Prompt, sans-serif',
                }}
              >
                {t("ขายระบบซอฟแวร์โฟโต้บูธ ประเทศไทย", "Photobooth Software — Thailand")}
              </span>
              <span className="font-mono text-lg font-black" style={{ color: '#f3f84a', textShadow: '2px 2px 0 #7a5010' }}>】</span>
            </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-bold uppercase tracking-wider transition-all duration-150 px-3 py-1.5 hover:translate-x-[-1px] hover:translate-y-[-1px]"
                style={{
                  color: '#1a0e00',
                  border: '2px solid transparent',
                  borderRadius: '12px',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.border = '2px solid #1a0e00'
                  ;(e.currentTarget as HTMLElement).style.background = 'rgba(26,14,0,0.1)'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = '2px 2px 0 #1a0e00'
                  ;(e.currentTarget as HTMLElement).style.borderRadius = '12px'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.border = '2px solid transparent'
                  ;(e.currentTarget as HTMLElement).style.background = 'transparent'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop right side: Lang Toggle + CTA */}
          <div className="hidden md:flex items-center gap-3 -mr-60">
            {/* Language Toggle Button */}
            <button
              onClick={toggleLang}
              title={lang === "th" ? "Switch to English" : "เปลี่ยนเป็นภาษาไทย"}
              className="flex items-center gap-1.5 font-black uppercase tracking-wider px-3 py-2.5 transition-all duration-150 hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px]"
              style={{
                background: lang === "en" ? '#1a0e00' : 'rgba(26,14,0,0.12)',
                color: lang === "en" ? '#f3f84a' : '#1a0e00',
                border: '2px solid #1a0e00',
                fontSize: '0.75rem',
                borderRadius: '999px',
                boxShadow: '3px 3px 0px #1a0e00',
                minWidth: '72px',
                justifyContent: 'center',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '5px 5px 0px #1a0e00' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '3px 3px 0px #1a0e00' }}
            >
              <Languages className="w-3.5 h-3.5" />
              {isTranslating ? (
                <span className="animate-pulse">{lang === "th" ? "TH" : "EN"}</span>
              ) : (
                <span>{lang === "th" ? "TH" : "EN"}</span>
              )}
            </button>

            <button
              onClick={handleLineContact}
              className="font-black uppercase tracking-wider px-5 py-3 transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[1px] active:translate-y-[1px]"
              style={{
                background: '#f3f84a',
                color: '#1a0e00',
                border: '3px solid #1a0e00',
                boxShadow: '4px 4px 0px #1a0e00',
                fontSize: '0.85rem',
                borderRadius: '999px',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '6px 6px 0px #1a0e00' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '4px 4px 0px #1a0e00' }}
            >
              <MessageCircle className="inline mr-2 w-4 h-4" />
              {t("สอบถามเพิ่มเติม", "Inquire Now")}
            </button>
          </div>

          {/* Mobile right side: Lang Toggle + Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 font-black px-2.5 py-2 transition-all duration-150"
              style={{
                background: lang === "en" ? '#1a0e00' : 'transparent',
                color: lang === "en" ? '#f3f84a' : '#1a0e00',
                border: '2px solid #1a0e00',
                borderRadius: '999px',
                fontSize: '0.7rem',
              }}
            >
              <Languages className="w-3 h-3" />
              {lang === "th" ? "TH" : "EN"}
            </button>

            <button
              className="p-2 font-black transition-colors"
              style={{ color: '#1a0e00', border: '2px solid #1a0e00', background: 'transparent', borderRadius: '12px' }}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          className="md:hidden absolute top-[80px] left-0 right-0 z-50"
          style={{
            background: '#93c8cf',
            borderTop: '3px solid #f3f84a',
            borderBottom: '3px solid #f3f84a',
            boxShadow: '0 8px 0px #7a5010',
          }}
        >
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-lg font-black uppercase tracking-wide py-2 border-b-2 border-[#1a0e00]/20"
                style={{ color: '#1a0e00' }}
                onClick={() => setIsOpen(false)}
              >
                <span style={{ color: '#7a5010' }} className="font-mono mr-2">▶</span>
                {link.label}
              </Link>
            ))}
            <button
              onClick={handleLineContact}
              className="w-full h-14 text-lg font-black uppercase tracking-wider transition-all duration-150"
              style={{
                background: '#f3f84a',
                color: '#1a0e00',
                border: '3px solid #1a0e00',
                boxShadow: '4px 4px 0px #1a0e00',
                borderRadius: '999px',
              }}
            >
              <MessageCircle className="inline mr-2 w-5 h-5" />
              {t("สอบถามเพิ่มเติม", "Inquire Now")}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
