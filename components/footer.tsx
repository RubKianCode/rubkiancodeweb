"use client"

import Link from "next/link"
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react"
import { useLanguage, useLangTypography } from "@/lib/language-context"
import { useTranslations } from "next-intl"

export function Footer() {
  const tNavbar = useTranslations("navbar")
  const tFooter = useTranslations("footer")

  const navLinks = [
    { href: "#services", label: tNavbar("nav_software") },
    { href: "#products", label: tNavbar("nav_rental") },
    { href: "#photobooth", label: tNavbar("nav_photobooth") },
    { href: "#contact", label: tNavbar("nav_contact") },
  ]

  const contactLinks = [
    { icon: Mail, label: "contact@rubkaincode.com", href: "mailto:contact@rubkaincode.com" },
    { icon: Phone, label: "02-XXX-XXXX", href: "tel:02-XXX-XXXX" },
    { icon: MessageCircle, label: "@rubkiancode", href: "https://line.me/ti/p/@rubkiancode" },
    { icon: MapPin, label: tFooter("bangkok"), href: "#" },
  ]

  return (
    <footer className="relative overflow-hidden" style={{ background: '#0f0800' }}>

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-[3px] z-[4]" style={{ background: '#f3f84a', boxShadow: '0 0 12px rgba(243,248,74,0.8)' }} />

      {/* Retro grid pattern */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(243,248,74,0.03) 1px, transparent 1px), linear-gradient(to right, rgba(243,248,74,0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* TV Noise */}
      

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] pointer-events-none z-[1]"
        style={{ background: 'radial-gradient(ellipse, rgba(243,248,74,0.08), transparent)' }} />

      <div className="relative z-[5] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-1 mb-5 group">
              <span className="font-mono text-xl font-black" style={{ color: '#f3f84a' }}>【</span>
              <span
                className="font-black text-lg uppercase"
                style={{
                  color: '#f3f84a',
                  textShadow: '3px 3px 0px #7a5010',
                  fontFamily: 'var(--font-prompt), Prompt, sans-serif',
                }}
              >
                {tFooter("brand")}
              </span>
              <span className="font-mono text-xl font-black" style={{ color: '#f3f84a' }}>】</span>
            </Link>
            <p className="font-medium text-sm leading-relaxed mb-5 max-w-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
              {tFooter("description")}
            </p>

            {/* Status badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2"
              style={{
                background: 'rgba(243,248,74,0.08)',
                border: '2px solid rgba(243,248,74,0.3)',
                boxShadow: '3px 3px 0 #7a5010',
                borderRadius: '999px',
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-xs font-mono font-bold" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {tFooter("online_status")}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-xs font-mono font-black uppercase tracking-[0.3em] mb-5"
              style={{ color: '#f3f84a' }}
            >
              // {tFooter("services_heading")}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-bold flex items-center gap-2 group transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.4)' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#f3f84a' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.4)' }}
                  >
                    <span className="font-mono font-black text-xs" style={{ color: 'rgba(243,248,74,0.4)' }}>▶</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs font-mono font-black uppercase tracking-[0.3em] mb-5"
              style={{ color: '#f3f84a' }}
            >
              // {tFooter("contact_heading")}
            </h4>
            <ul className="space-y-3">
              {contactLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 text-sm font-bold transition-colors duration-200 group"
                    style={{ color: 'rgba(255,255,255,0.4)' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#f3f84a' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.4)' }}
                  >
                    <item.icon className="w-4 h-4 flex-shrink-0" style={{ color: 'rgba(243,248,74,0.4)' }} />
                    <span className="font-mono">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '2px solid rgba(243,248,74,0.15)' }}
        >
          <p className="text-xs font-mono font-bold" style={{ color: 'rgba(255,255,255,0.25)' }}>
            © 2026 {tFooter("copyright_brand")} — {tFooter("copyright_rights")}.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs font-mono font-bold transition-colors" style={{ color: 'rgba(255,255,255,0.25)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#f3f84a' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.25)' }}
            >
              {tFooter("privacy_policy")}
            </Link>
            <Link href="#" className="text-xs font-mono font-bold transition-colors" style={{ color: 'rgba(255,255,255,0.25)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#f3f84a' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.25)' }}
            >
              {tFooter("terms_of_service")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
