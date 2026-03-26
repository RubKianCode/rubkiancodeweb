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
    <section id="services" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            บริการของเรา
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            เราให้บริการด้านซอฟต์แวร์อย่างครบวงจร ตั้งแต่การให้คำปรึกษา ออกแบบ พัฒนา จนถึงดูแลหลังการขาย
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-background border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
