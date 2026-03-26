"use client"

import { ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    title: "ระบบจัดการหลังบ้าน",
    category: "POS System",
    description: "ระบบจัดการหลังบ้าน และรายงานยอดที่ได้",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "แอปจองคิว",
    category: "Mobile App",
    description: "แอปพลิเคชันจองคิวสำหรับคลินิกและร้านค้า",
    tech: ["Flutter", "Firebase", "Google Maps"],
  },
  {
    title: "E-commerce Platform",
    category: "Web Application",
    description: "แพลตฟอร์มขายสินค้าออนไลน์ครบวงจร",
    tech: ["Next.js", "Stripe", "AWS"],
  },
  {
    title: "HR Management System",
    category: "Enterprise",
    description: "ระบบบริหารทรัพยากรบุคคลสำหรับองค์กร",
    tech: ["Vue.js", "Laravel", "MySQL"],
  },
]

export function ShowcaseSection() {
  return (
    <section id="products" className="relative py-24 bg-[#8c8b8b] overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(64,3,11,0.08)_2px,transparent_1px),linear-gradient(to_bottom,rgba(64,3,11,0.08)_2px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="h-16 px-5 text-2xl font-bold rounded-2xl bg-[#ffbf00] 
          text-[#40030b] font-medium tracking-wider uppercase">
            Software Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            ผลงานของเรา
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            ตัวอย่างโปรเจกต์ที่เราได้พัฒนาให้กับลูกค้า
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-[#40030b] border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Project Preview */}
                <div className="aspect-video bg-secondary relative overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 bg-background/50 rounded-lg border border-border backdrop-blur-sm flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">&lt;/&gt;</span>
                    </div>
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#ffbf00]/60 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs text-white bg-primary/20 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
