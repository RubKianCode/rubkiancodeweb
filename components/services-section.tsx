"use client"

import { Code, Cloud, MessageSquare, Smartphone, Globe, Database, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Code,
    title: "พัฒนาซอฟต์แวร์",
    description: "ออกแบบและพัฒนาซอฟต์แวร์ตามความต้องการ ทั้ง Web, Mobile และ Desktop Application",
    features: ["Web Application", "Mobile App", "Desktop Software"],
  },
  {
    icon: Cloud,
    title: "ให้เช่าซอฟต์แวร์",
    description: "บริการให้เช่าซอฟต์แวร์สำเร็จรูป พร้อมใช้งาน ราคาประหยัด เหมาะกับทุกธุรกิจ",
    features: ["ระบบ POS", "ระบบจัดการสต็อก", "ระบบ CRM"],
  },
  {
    icon: MessageSquare,
    title: "ให้คำปรึกษา",
    description: "ให้คำปรึกษาด้าน IT Solution วางแผนระบบ และแนะนำเทคโนโลยีที่เหมาะสม",
    features: ["วางแผนระบบ", "Digital Transform", "IT Consulting"],
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "พัฒนาแอปพลิเคชันมือถือ ทั้ง iOS และ Android ด้วยเทคโนโลยีล่าสุด",
    features: ["iOS App", "Android App", "Cross-platform"],
  },
  {
    icon: Globe,
    title: "เว็บไซต์",
    description: "ออกแบบและพัฒนาเว็บไซต์ทุกรูปแบบ ตั้งแต่ Landing Page ไปจนถึง E-commerce",
    features: ["Corporate Website", "E-commerce", "Landing Page"],
  },
  {
    icon: Database,
    title: "ระบบฐานข้อมูล",
    description: "ออกแบบและพัฒนาระบบฐานข้อมูล พร้อมดูแลรักษาและสำรองข้อมูล",
    features: ["Database Design", "Data Migration", "Backup System"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 bg-[#7a7a7a] overflow-hidden">
      {/* Top Beam */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ffde00]/30 to-transparent" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(64,3,11,0.06)_2px,transparent_1px),linear-gradient(to_bottom,rgba(64,3,11,0.06)_2px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Glow Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #40030b, transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#40030b]/50 border border-[#ffde00]/30 rounded-full px-5 py-2 mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ffde00] animate-pulse" />
            <span className="text-sm font-bold text-[#ffde00] tracking-[0.15em] uppercase font-mono">Our Services</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 tracking-tight" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 0 40px rgba(255,255,255,0.7), 0 0 80px rgba(255,222,0,0.5)' }}>
            บริการของเรา
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            เราให้บริการด้านซอฟต์แวร์อย่างครบวงจร ตั้งแต่การให้คำปรึกษา ออกแบบ พัฒนา จนถึงดูแลหลังการขาย
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group rounded-2xl border border-white/10 bg-black/50 backdrop-blur-sm p-6 hover:border-[#ffde00]/40 transition-all duration-300 overflow-hidden"
            >
              {/* Card Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 0%, rgba(64,3,11,0.4), transparent 70%)' }} />

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ffde00]/0 to-transparent group-hover:via-[#ffde00]/40 transition-all duration-500" />

              {/* Icon */}
              <div className="relative w-12 h-12 rounded-xl bg-[#40030b]/60 border border-[#ffde00]/20 flex items-center justify-center mb-5 group-hover:border-[#ffde00]/50 transition-all duration-300">
                <service.icon className="w-6 h-6 text-[#ffde00]" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#ffde00] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-white/40 mb-5 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-white/50">
                    <CheckCircle2 className="w-4 h-4 text-[#ffde00]/60 flex-shrink-0" />
                    <span className="font-mono">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom index number */}
              <div className="absolute bottom-4 right-5 text-5xl font-black text-white/10 group-hover:text-[#ffde00]/20 transition-colors select-none">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Beam */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ffde00]/20 to-transparent" />
    </section>
  )
}
