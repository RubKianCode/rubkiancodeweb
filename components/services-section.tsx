"use client"

import Image from "next/image"
import { Code, Cloud, MessageSquare, Smartphone, Globe, Database, CheckCircle2 } from "lucide-react"
import { RetroNoise } from "@/components/retro-noise"
import { CodeBg } from "@/components/code-bg"
import { useLanguage } from "@/lib/language-context"

export function ServicesSection() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Code,
      title: t("พัฒนาซอฟต์แวร์", "Software Development"),
      description: t("ออกแบบและพัฒนาซอฟต์แวร์ตามความต้องการ ทั้ง Web, Mobile และ Desktop Application", "Custom software design and development for Web, Mobile and Desktop Applications"),
      features: [t("เว็บแอปพลิเคชัน", "Web Application"), t("แอปมือถือ", "Mobile App"), t("ซอฟต์แวร์เดสก์ท็อป", "Desktop Software")],
      tag: "01",
    },
    {
      icon: Cloud,
      title: t("ให้เช่าซอฟต์แวร์", "Software Rental"),
      description: t("บริการให้เช่าซอฟต์แวร์สำเร็จรูป พร้อมใช้งาน ราคาประหยัด เหมาะกับทุกธุรกิจ", "Ready-to-use software rental service, affordable and suitable for all businesses"),
      features: [t("ระบบ POS", "POS System"), t("ระบบจัดการสต็อก", "Inventory System"), t("ระบบ CRM", "CRM System")],
      tag: "02",
    },
    {
      icon: MessageSquare,
      title: t("ให้คำปรึกษา", "IT Consulting"),
      description: t("ให้คำปรึกษาด้าน IT Solution วางแผนระบบ และแนะนำเทคโนโลยีที่เหมาะสม", "IT Solution consulting, system planning, and technology recommendation"),
      features: [t("วางแผนระบบ", "System Planning"), "Digital Transform", "IT Consulting"],
      tag: "03",
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: t("พัฒนาแอปพลิเคชันมือถือ ทั้ง iOS และ Android ด้วยเทคโนโลยีล่าสุด", "Mobile app development for both iOS and Android using the latest technology"),
      features: ["iOS App", "Android App", "Cross-platform"],
      tag: "04",
    },
    {
      icon: Globe,
      title: t("เว็บไซต์", "Website"),
      description: t("ออกแบบและพัฒนาเว็บไซต์ทุกรูปแบบ ตั้งแต่ Landing Page ไปจนถึง E-commerce", "Design and develop all types of websites, from Landing Pages to E-commerce"),
      features: ["Corporate Website", "E-commerce", "Landing Page"],
      tag: "05",
    },
    {
      icon: Database,
      title: t("ระบบฐานข้อมูล", "Database System"),
      description: t("ออกแบบและพัฒนาระบบฐานข้อมูล พร้อมดูแลรักษาและสำรองข้อมูล", "Database design, development, maintenance and backup solutions"),
      features: ["Database Design", "Data Migration", "Backup System"],
      tag: "06",
    },
  ]

  return (
    <section id="services" className="relative py-24 overflow-hidden retro-scanlines">

      {/* Base Paper Background */}
      <Image
        src="/bg-paper.png"
        alt="paper background"
        fill
        className="object-cover"
        priority
        style={{ zIndex: 0 }}
      />

      {/* Warm amber overlays — reduced for code BG visibility */}
      <div className="absolute inset-0 z-[1]" style={{ background: 'rgba(200, 144, 10, 0.38)' }} />
      <div className="absolute inset-0 z-[1]" style={{ background: 'rgba(243, 248, 74, 0.06)' }} />

      {/* TV Noise */}
      <RetroNoise opacity={0.03} className="z-[2]" blendMode="overlay" />

      {/* Bouncing Code Symbols */}
      <CodeBg opacity={0.85} particleCount={45} className="z-[3]" />

      {/* Vignette */}
      <div className="absolute inset-0 z-[4] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 90% 80% at 50% 50%, transparent 30%, rgba(20,8,0,0.45) 100%)' }} />

      {/* Section header border */}
      <div className="absolute top-0 left-0 right-0 h-[3px] z-[5]" style={{ background: '#f3f84a', boxShadow: '0 0 8px rgba(243,248,74,0.6)' }} />

      <div className="relative z-[6] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 mb-6 px-5 py-2"
            style={{ background: '#93c8cf', border: '3px solid #1a0e00', boxShadow: '4px 4px 0px #1a0e00', borderRadius: '999px' }}
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-sm font-black text-[#1a0e00] tracking-[0.2em] uppercase">
              {t("บริการของเรา", "Our Services")}
            </span>
          </div>

          <h2
            className="text-5xl sm:text-6xl font-black uppercase mb-6"
            style={{
              color: '#f3f84a',
              textShadow: '5px 5px 0px #7a5010, 10px 10px 0px rgba(122,80,16,0.3)',
              fontFamily: 'var(--font-prompt), Prompt, sans-serif',
              WebkitTextStroke: '1px #c8900a',
            }}
          >
            {t("บริการของเรา", "Our Services")}
          </h2>
          <p className="text-white font-bold text-lg max-w-2xl mx-auto"
            style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.8)' }}>
            {t("เราให้บริการด้านซอฟต์แวร์อย่างครบวงจร ตั้งแต่การให้คำปรึกษา ออกแบบ พัฒนา จนถึงดูแลหลังการขาย", "We provide comprehensive software services from consulting, design, development to after-sales support")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 transition-all duration-150 cursor-default hover:translate-x-[-2px] hover:translate-y-[-2px]"
              style={{
                background: 'rgba(26, 14, 0, 0.82)',
                border: '2px solid #f3f84a',
                boxShadow: '4px 4px 0px #7a5010',
                borderRadius: '20px',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '6px 6px 0px #7a5010' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '4px 4px 0px #7a5010' }}
            >
              {/* Tag number top-right */}
              <div className="absolute top-3 right-4 font-mono font-black text-xs"
                style={{ color: '#f3f84a', opacity: 0.5 }}>
                {service.tag}
              </div>

              {/* Icon box */}
              <div
                className="w-12 h-12 flex items-center justify-center mb-5"
                style={{
                  background: '#93c8cf',
                  border: '2px solid #f3f84a',
                  boxShadow: '3px 3px 0px #7a5010',
                  borderRadius: '14px',
                }}
              >
                <service.icon className="w-6 h-6" style={{ color: '#1a0e00' }} />
              </div>

              <h3
                className="text-xl font-black uppercase mb-2 group-hover:text-[#f3f84a] transition-colors"
                style={{ color: '#f3f84a', textShadow: '2px 2px 0px #7a5010' }}
              >
                {service.title}
              </h3>
              <p className="text-white/70 mb-5 text-sm leading-relaxed font-medium">
                {service.description}
              </p>
              <ul className="space-y-1.5">
                {service.features.map((feature, fi) => (
                  <li key={fi} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: '#93c8cf' }} />
                    <span className="font-mono font-bold text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] z-[5]" style={{ background: '#f3f84a', boxShadow: '0 0 8px rgba(243,248,74,0.6)' }} />
    </section>
  )
}
