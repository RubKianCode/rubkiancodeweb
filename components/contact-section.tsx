"use client"

import { Mail, Phone, MapPin, Send, MessageCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import { RetroNoise } from "@/components/retro-noise"
import { CodeBg } from "@/components/code-bg"
import { useLanguage } from "@/lib/language-context"

export function ContactSection() {
  const { t } = useLanguage()

  const contactInfo = [
    {
      icon: MessageCircle,
      label: "LINE Official",
      value: "@rubkiancode",
      sub: t("ตอบกลับภายใน 1 ชม.", "Reply within 1 hour"),
      href: "https://line.me/ti/p/@rubkiancode",
      highlight: true,
    },
    {
      icon: Phone,
      label: t("โทรศัพท์", "Phone"),
      value: "02-XXX-XXXX",
      sub: t("จันทร์–เสาร์ 9:00–18:00", "Mon–Sat 9:00–18:00"),
      href: "tel:02-XXX-XXXX",
      highlight: false,
    },
    {
      icon: Mail,
      label: t("อีเมล", "Email"),
      value: "contact@rubkaincode.com",
      sub: t("ตอบกลับภายใน 24 ชม.", "Reply within 24 hours"),
      href: "mailto:contact@rubkaincode.com",
      highlight: false,
    },
    {
      icon: MapPin,
      label: t("ที่อยู่", "Address"),
      value: t("กรุงเทพมหานคร", "Bangkok"),
      sub: t("ให้บริการทั่วประเทศ", "Nationwide service"),
      href: "#",
      highlight: false,
    },
  ]

  return (
    <section id="contact" className="relative py-28 overflow-hidden retro-scanlines">

      {/* Dark warm retro background */}
      <div className="absolute inset-0 z-0" style={{ background: '#1a0e00' }} />

      {/* Subtle warm grid pattern */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(243,248,74,0.04) 1px, transparent 1px), linear-gradient(to right, rgba(243,248,74,0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* TV Noise */}
      <RetroNoise opacity={0.02} className="z-[2]" blendMode="screen" />

      {/* Bouncing Code Symbols */}
      <CodeBg opacity={0.75} particleCount={35} className="z-[3]" />

      {/* Corner glow accents */}
      <div className="absolute top-0 left-0 w-64 h-64 pointer-events-none z-[1]"
        style={{ background: 'radial-gradient(circle, rgba(243,248,74,0.08), transparent)' }} />
      <div className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none z-[1]"
        style={{ background: 'radial-gradient(circle, rgba(147,200,207,0.08), transparent)' }} />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-[3px] z-[4]" style={{ background: '#f3f84a', boxShadow: '0 0 12px rgba(243,248,74,0.8)' }} />

      <div className="relative z-[5] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <div
            className="inline-flex items-center gap-2.5 mb-7 px-5 py-2"
            style={{ background: '#f3f84a', border: '3px solid #1a0e00', boxShadow: '4px 4px 0px #7a5010', borderRadius: '999px' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            <span className="text-xs font-black tracking-[0.2em] uppercase text-[#1a0e00]">
              {t("ติดต่อเรา", "Get In Touch")}
            </span>
          </div>

          <h2
            className="text-5xl sm:text-6xl md:text-7xl font-black uppercase mb-5 leading-tight"
            style={{
              color: '#f3f84a',
              textShadow: '5px 5px 0px #7a5010, 10px 10px 0px rgba(122,80,16,0.3)',
              fontFamily: 'var(--font-prompt), Prompt, sans-serif',
              WebkitTextStroke: '1px #c8900a',
            }}
          >
            {t("พร้อมให้คุณ", "Ready For")}
            <br />
            <span style={{ color: '#93c8cf', textShadow: '5px 5px 0px #2a5a60', WebkitTextStroke: '1px #1a5a60' }}>
              {t("ติดต่อเราได้เลย", "You To Reach Us")}
            </span>
          </h2>
          <p className="text-lg max-w-xl mx-auto leading-relaxed font-medium" style={{ color: 'rgba(255,255,255,0.6)' }}>
            {t("ทีมงานผู้เชี่ยวชาญพร้อมรับฟังและให้คำแนะนำอย่างตรงจุด", "Our team of experts is ready to listen and provide targeted advice")}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* LEFT — Contact Cards */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="group flex items-center gap-5 p-5 transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px]"
                style={{
                  background: item.highlight ? 'rgba(243,248,74,0.12)' : 'rgba(255,255,255,0.04)',
                  border: item.highlight ? '2px solid #f3f84a' : '2px solid rgba(255,255,255,0.12)',
                  boxShadow: item.highlight ? '4px 4px 0px #7a5010' : '4px 4px 0px rgba(255,255,255,0.05)',
                  borderRadius: '16px',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.border = '2px solid #f3f84a'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = '6px 6px 0px #7a5010'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.border = item.highlight ? '2px solid #f3f84a' : '2px solid rgba(255,255,255,0.12)'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = item.highlight ? '4px 4px 0px #7a5010' : '4px 4px 0px rgba(255,255,255,0.05)'
                }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                  style={{
                    background: item.highlight ? '#f3f84a' : 'rgba(255,255,255,0.08)',
                    border: `2px solid ${item.highlight ? '#1a0e00' : 'rgba(255,255,255,0.2)'}`,
                    boxShadow: item.highlight ? '3px 3px 0 #7a5010' : 'none',
                    borderRadius: '12px',
                  }}
                >
                  <item.icon className="w-5 h-5" style={{ color: item.highlight ? '#1a0e00' : 'rgba(255,255,255,0.5)' }} />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-mono font-bold mb-0.5 uppercase tracking-wider" style={{ color: 'rgba(243,248,74,0.6)' }}>
                    {item.label}
                  </div>
                  <div className="text-sm font-black text-white truncate">{item.value}</div>
                  <div className="text-xs mt-0.5 font-medium" style={{ color: 'rgba(255,255,255,0.35)' }}>{item.sub}</div>
                </div>

                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0" style={{ color: '#f3f84a' }} />
              </a>
            ))}

            {/* CTA Banner */}
            <div
              className="mt-6 p-6 cursor-pointer group transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px]"
              style={{
                background: '#f3f84a',
                border: '3px solid #1a0e00',
                boxShadow: '5px 5px 0px #7a5010',
                borderRadius: '20px',
              }}
              onClick={() => window.open('https://line.me/ti/p/@rubkiancode', '_blank')}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '8px 8px 0px #7a5010' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '5px 5px 0px #7a5010' }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono font-bold mb-1 uppercase tracking-wider text-[#7a5010]">// {t("ช่องทางแนะนำ", "Recommended Channel")}</div>
                  <div className="text-[#1a0e00] font-black text-xl uppercase">{t("คุยผ่าน LINE เลย!", "Chat via LINE Now!")}</div>
                  <div className="text-sm mt-1 font-bold text-[#3d2000]">{t("เร็ว ง่าย ได้คำตอบทันที", "Fast, Easy, Instant Reply")}</div>
                </div>
                <div
                  className="w-14 h-14 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: '#1a0e00', border: '2px solid #1a0e00', borderRadius: '14px' }}
                >
                  <MessageCircle className="w-7 h-7 text-[#f3f84a]" />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Retro Form */}
          <div className="lg:col-span-3">
            <div
              className="overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '3px solid #f3f84a',
                boxShadow: '6px 6px 0px #7a5010',
                borderRadius: '24px',
              }}
            >
              {/* Form Header Bar */}
              <div
                className="px-6 py-4 flex items-center justify-between"
                style={{ background: '#93c8cf', borderBottom: '3px solid #f3f84a' }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" style={{ border: '1px solid #1a0e00' }} />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" style={{ border: '1px solid #1a0e00' }} />
                    <div className="w-3 h-3 rounded-full bg-green-400" style={{ border: '1px solid #1a0e00' }} />
                  </div>
                  <span className="text-xs font-mono font-black text-[#1a0e00]">contact_form.exe</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-[#1a0e00]">ONLINE</span>
                </div>
              </div>

              {/* Form Body */}
              <div className="p-8">
                <h3
                  className="text-2xl font-black uppercase mb-2"
                  style={{ color: '#f3f84a', textShadow: '3px 3px 0px #7a5010' }}
                >
                  {t("ส่งข้อความถึงเรา", "Send Us a Message")}
                </h3>
                <p className="text-sm mb-8 font-medium" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  {t("กรอกข้อมูลด้านล่าง ทีมงานจะติดต่อกลับโดยเร็วที่สุด", "Fill in the details below and our team will get back to you shortly")}
                </p>

                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      { label: t("ชื่อ-นามสกุล", "Full Name"), placeholder: t("กรอกชื่อของคุณ", "Enter your name"), type: "text" },
                      { label: t("อีเมล", "Email"), placeholder: "email@example.com", type: "email" },
                    ].map((field, i) => (
                      <div key={i} className="space-y-2">
                        <label
                          className="block text-xs font-black tracking-[0.2em] uppercase"
                          style={{ color: '#f3f84a' }}
                        >
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          className="w-full px-4 py-3.5 text-sm text-white font-medium outline-none transition-all duration-200"
                          style={{
                            background: 'rgba(255,255,255,0.05)',
                            border: '2px solid rgba(243,248,74,0.3)',
                            caretColor: '#f3f84a',
                            borderRadius: '12px',
                          }}
                          onFocus={e => {
                            e.currentTarget.style.borderColor = '#f3f84a'
                            e.currentTarget.style.background = 'rgba(243,248,74,0.08)'
                            e.currentTarget.style.boxShadow = '3px 3px 0 #7a5010'
                          }}
                          onBlur={e => {
                            e.currentTarget.style.borderColor = 'rgba(243,248,74,0.3)'
                            e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                            e.currentTarget.style.boxShadow = 'none'
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-black tracking-[0.2em] uppercase" style={{ color: '#f3f84a' }}>
                      {t("หัวข้อ", "Subject")}
                    </label>
                    <input
                      placeholder={t("เช่น สอบถามราคาเช่าระบบ Photobooth", "e.g. Photobooth System Rental Inquiry")}
                      className="w-full px-4 py-3.5 text-sm text-white font-medium outline-none transition-all duration-200"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '2px solid rgba(243,248,74,0.3)', caretColor: '#f3f84a', borderRadius: '12px' }}
                      onFocus={e => { e.currentTarget.style.borderColor = '#f3f84a'; e.currentTarget.style.background = 'rgba(243,248,74,0.08)'; e.currentTarget.style.boxShadow = '3px 3px 0 #7a5010' }}
                      onBlur={e => { e.currentTarget.style.borderColor = 'rgba(243,248,74,0.3)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.boxShadow = 'none' }}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-black tracking-[0.2em] uppercase" style={{ color: '#f3f84a' }}>
                      {t("รายละเอียด", "Details")}
                    </label>
                    <textarea
                      placeholder={t("อธิบายความต้องการของคุณ...", "Describe your requirements...")}
                      rows={5}
                      className="w-full px-4 py-3.5 text-sm text-white font-medium outline-none transition-all duration-200 resize-none"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '2px solid rgba(243,248,74,0.3)', caretColor: '#f3f84a', borderRadius: '12px' }}
                      onFocus={e => { e.currentTarget.style.borderColor = '#f3f84a'; e.currentTarget.style.background = 'rgba(243,248,74,0.08)'; e.currentTarget.style.boxShadow = '3px 3px 0 #7a5010' }}
                      onBlur={e => { e.currentTarget.style.borderColor = 'rgba(243,248,74,0.3)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.boxShadow = 'none' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-14 font-black text-lg flex items-center justify-center gap-3 uppercase tracking-wider transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[1px] active:translate-y-[1px]"
                    style={{
                      background: '#f3f84a',
                      color: '#1a0e00',
                      border: '3px solid #1a0e00',
                      boxShadow: '5px 5px 0px #7a5010',
                      borderRadius: '999px',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '7px 7px 0px #7a5010' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '5px 5px 0px #7a5010' }}
                  >
                    <Send className="w-5 h-5" />
                    {t("ส่งข้อความเลย", "Send Message")}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] z-[4]" style={{ background: '#f3f84a', boxShadow: '0 0 12px rgba(243,248,74,0.8)' }} />
    </section>
  )
}
