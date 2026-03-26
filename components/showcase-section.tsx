"use client"

import { ExternalLink, Code2 } from "lucide-react"

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
      {/* Top Beam */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ffde00]/30 to-transparent" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(64,3,11,0.08)_2px,transparent_1px),linear-gradient(to_bottom,rgba(64,3,11,0.08)_2px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Glow Orb */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #40030b, transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#40030b]/50 border border-[#ffde00]/30 rounded-full px-5 py-2 mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ffde00] animate-pulse" />
            <span className="text-sm font-bold text-[#ffde00] tracking-[0.15em] uppercase font-mono">Software Showcase</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 tracking-tight" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 0 40px rgba(255,255,255,0.7), 0 0 80px rgba(255,222,0,0.5)' }}>
            ผลงานของเรา
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            ตัวอย่างโปรเจกต์ที่เราได้พัฒนาให้กับลูกค้า
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-white/10 bg-[#40030b]/60 backdrop-blur-sm overflow-hidden hover:border-[#ffde00]/30 transition-all duration-500"
              style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.2)' }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ffde00]/0 to-transparent group-hover:via-[#ffde00]/50 transition-all duration-500" />

              {/* Project Preview Area */}
              <div className="aspect-video relative overflow-hidden bg-black/40">
                {/* Scanline Effect */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.05)_2px,rgba(0,0,0,0.05)_4px)] pointer-events-none z-10" />

                {/* Grid inside preview */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />

                {/* Center "screen" */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-black/30 rounded-lg border border-[#ffde00]/10 backdrop-blur-sm flex items-center justify-center group-hover:border-[#ffde00]/30 transition-all duration-300">
                    <Code2 className="w-10 h-10 text-[#ffde00]/30 group-hover:text-[#ffde00]/60 transition-colors duration-300" />
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#40030b]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 text-[#ffde00] font-bold">
                    <ExternalLink className="w-6 h-6" />
                    <span>ดูรายละเอียด</span>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#ffde00]/80 bg-[#ffde00]/10 border border-[#ffde00]/20 px-3 py-1 rounded-full tracking-wider uppercase">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-white/30">#{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#ffde00] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/40 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs font-mono text-white/50 bg-white/5 border border-white/10 px-2.5 py-1 rounded hover:border-[#ffde00]/30 hover:text-[#ffde00]/70 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
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
