"use client"

import Image from "next/image"
import { Code, Cloud, MessageSquare, Smartphone, Globe, Database, CheckCircle2 } from "lucide-react"
import { RetroNoise } from "@/components/retro-noise"

const services = [
  {
    icon: Code,
    title: "พัฒนาซอฟต์แวร์",
    description: "ออกแบบและพัฒนาซอฟต์แวร์ตามความต้องการ ทั้ง Web, Mobile และ Desktop Application",
    features: ["Web Application", "Mobile App", "Desktop Software"],
    tag: "01",
  },
  {
    icon: Cloud,
    title: "ให้เช่าซอฟต์แวร์",
    description: "บริการให้เช่าซอฟต์แวร์สำเร็จรูป พร้อมใช้งาน ราคาประหยัด เหมาะกับทุกธุรกิจ",
    features: ["ระบบ POS", "ระบบจัดการสต็อก", "ระบบ CRM"],
    tag: "02",
  },
  {
    icon: MessageSquare,
    title: "ให้คำปรึกษา",
    description: "ให้คำปรึกษาด้าน IT Solution วางแผนระบบ และแนะนำเทคโนโลยีที่เหมาะสม",
    features: ["วางแผนระบบ", "Digital Transform", "IT Consulting"],
    tag: "03",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "พัฒนาแอปพลิเคชันมือถือ ทั้ง iOS และ Android ด้วยเทคโนโลยีล่าสุด",
    features: ["iOS App", "Android App", "Cross-platform"],
    tag: "04",
  },
  {
    icon: Globe,
    title: "เว็บไซต์",
    description: "ออกแบบและพัฒนาเว็บไซต์ทุกรูปแบบ ตั้งแต่ Landing Page ไปจนถึง E-commerce",
    features: ["Corporate Website", "E-commerce", "Landing Page"],
    tag: "05",
  },
  {
    icon: Database,
    title: "ระบบฐานข้อมูล",
    description: "ออกแบบและพัฒนาระบบฐานข้อมูล พร้อมดูแลรักษาและสำรองข้อมูล",
    features: ["Database Design", "Data Migration", "Backup System"],
    tag: "06",
  },
]

export function ServicesSection() {
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

      {/* Warm amber overlays */}
      <div className="absolute inset-0 z-[1]" style={{ background: 'rgba(200, 144, 10, 0.60)' }} />
      <div className="absolute inset-0 z-[1]" style={{ background: 'rgba(243, 248, 74, 0.12)' }} />

      {/* TV Noise */}
      <RetroNoise opacity={0.045} className="z-[2]" blendMode="overlay" />

      {/* Vignette */}
      <div className="absolute inset-0 z-[3] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 90% 80% at 50% 50%, transparent 30%, rgba(20,8,0,0.45) 100%)' }} />

      {/* Section header border */}
      <div className="absolute top-0 left-0 right-0 h-[3px] z-[4]" style={{ background: '#f3f84a', boxShadow: '0 0 8px rgba(243,248,74,0.6)' }} />

      <div className="relative z-[5] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 mb-6 px-5 py-2"
            style={{ background: '#93c8cf', border: '3px solid #1a0e00', boxShadow: '4px 4px 0px #1a0e00' }}
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-sm font-black text-[#1a0e00] tracking-[0.2em] uppercase">Our Services</span>
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
            บริการของเรา
          </h2>
          <p className="text-white font-bold text-lg max-w-2xl mx-auto"
            style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.8)' }}>
            เราให้บริการด้านซอฟต์แวร์อย่างครบวงจร ตั้งแต่การให้คำปรึกษา ออกแบบ พัฒนา จนถึงดูแลหลังการขาย
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
      <div className="absolute bottom-0 left-0 right-0 h-[3px] z-[4]" style={{ background: '#f3f84a', boxShadow: '0 0 8px rgba(243,248,74,0.6)' }} />
    </section>
  )
}
