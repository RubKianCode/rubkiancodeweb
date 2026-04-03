"use client"

import { ExternalLink, Monitor } from "lucide-react"
import Image from "next/image"
import { CodeBg } from "@/components/code-bg"
import { useLanguage, useLangTypography } from "@/lib/language-context"
import { useTranslations } from "next-intl"

export function ShowcaseSection() {
  const { lang } = useLanguage()
  const typo = useLangTypography()
  const t = useTranslations("showcase")

  const projects = [
    {
      title: t("project0_title"),
      category: t("project0_category"),
      description: t("project0_desc"),
      tech: t("project0_tech").split(",").map(tag => tag.trim()),
      ch: "CH.1",
    },
    {
      title: t("project1_title"),
      category: t("project1_category"),
      description: t("project1_desc"),
      tech: t("project1_tech").split(",").map(tag => tag.trim()),
      ch: "CH.2",
    },
    {
      title: t("project2_title"),
      category: t("project2_category"),
      description: t("project2_desc"),
      tech: t("project2_tech").split(",").map(tag => tag.trim()),
      ch: "CH.3",
    },
    {
      title: t("project3_title"),
      category: t("project3_category"),
      description: t("project3_desc"),
      tech: t("project3_tech").split(",").map(tag => tag.trim()),
      ch: "CH.4",
    },
  ]

  return (
    <section id="products" className="relative py-24 overflow-hidden retro-scanlines">

      {/* Base Paper Background */}
      <Image
        src="/bg-paper.png"
        alt="paper background"
        fill
        className="object-cover"
        priority
        style={{ zIndex: 0 }}
      />

      {/* Overlays — reduced for code BG */}
      <div className="absolute inset-0 z-[1]" style={{ background: 'rgba(147, 200, 207, 0.15)' }} />
      <div className="absolute inset-0 z-[1]" style={{ background: 'rgba(200, 144, 10, 0.28)' }} />

      {/* TV Noise */}


      {/* Bouncing Code Symbols */}
      <CodeBg opacity={0.85} particleCount={40} className="z-[3]" />

      {/* Vignette */}
      <div className="absolute inset-0 z-[4] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 90% 80% at 50% 50%, transparent 30%, rgba(20,8,0,0.45) 100%)' }} />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-[3px] z-[5]" style={{ background: '#f3f84a', boxShadow: '0 0 8px rgba(243,248,74,0.6)' }} />

      <div className="relative z-[6] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 mb-6 px-5 py-2"
            style={{ background: '#f3f84a', border: '3px solid #1a0e00', boxShadow: '4px 4px 0px #1a0e00', borderRadius: '999px' }}
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span
              className="font-black text-[#1a0e00] uppercase"
              style={{ letterSpacing: typo.trackingLabel, fontSize: typo.sectionBadge }}
            >
              {t("badge")}
            </span>
          </div>

          <h2
            className="font-black uppercase mb-6"
            style={{
              fontSize: typo.sectionH2,
              color: '#f3f84a',
              textShadow: '5px 5px 0px #7a5010, 10px 10px 0px rgba(122,80,16,0.3)',
              fontFamily: typo.fontFamily,
              letterSpacing: typo.trackingSectionH2,
            }}
          >
            {t("heading")}
          </h2>
          <p
            className="font-bold max-w-2xl mx-auto"
            style={{ fontSize: typo.sectionDesc, lineHeight: typo.sectionLineHeight, letterSpacing: typo.trackingBody }}
          >
            {t("description")}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] cursor-default"
              style={{
                background: 'rgba(26,14,0,0.88)',
                border: '3px solid #f3f84a',
                boxShadow: '5px 5px 0px #7a5010',
                borderRadius: '20px',
                overflow: 'hidden',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '8px 8px 0px #7a5010' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '5px 5px 0px #7a5010' }}
            >
              {/* TV screen preview area */}
              <div
                className="relative overflow-hidden"
                style={{
                  aspectRatio: '16/9',
                  background: '#93c8cf',
                  borderBottom: '3px solid #f3f84a',
                }}
              >
                {/* CRT scanlines */}
                <div className="absolute inset-0 z-10 pointer-events-none"
                  style={{
                    background: 'repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(0,0,0,0.08) 3px, rgba(0,0,0,0.08) 4px)',
                  }} />

                {/* Channel label */}
                <div className="absolute top-3 left-3 z-20 px-2 py-0.5 font-mono font-black text-xs"
                  style={{ background: '#f3f84a', color: '#1a0e00', border: '2px solid #1a0e00' }}>
                  {project.ch}
                </div>

                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div
                    className="w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ background: 'rgba(26,14,0,0.3)', border: '3px solid rgba(26,14,0,0.5)' }}
                  >
                    <Monitor className="w-10 h-10" style={{ color: '#1a0e00', opacity: 0.5 }} />
                  </div>
                </div>

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(243,248,74,0.85)' }}
                >
                  <div
                    className="flex items-center gap-2 font-black uppercase text-[#1a0e00]"
                    style={{ letterSpacing: typo.trackingButton }}
                  >
                    <ExternalLink className="w-6 h-6" />
                    <span>{t("view_details")}</span>
                  </div>
                </div>
              </div>

              {/* Project info */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-xs font-black uppercase px-3 py-1"
                    style={{
                      background: '#93c8cf',
                      color: '#1a0e00',
                      border: '2px solid #1a0e00',
                      boxShadow: '2px 2px 0 #1a0e00',
                      borderRadius: '999px',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {project.category}
                  </span>
                  <span className="font-mono font-bold text-xs" style={{ color: 'rgba(243,248,74,0.5)' }}>
                    #{String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3
                  className="font-black uppercase mb-2 group-hover:text-[#f3f84a] transition-colors"
                  style={{ fontSize: typo.sectionCardTitle, color: '#ffffff', textShadow: '1px 1px 0 rgba(0,0,0,0.5)', letterSpacing: typo.trackingSectionH2 }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-white/60 mb-4 leading-relaxed font-medium"
                  style={{ fontSize: typo.sectionCardBody, lineHeight: typo.sectionLineHeight, letterSpacing: typo.trackingBody }}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, ti) => (
                    <span
                      key={ti}
                      className="text-xs font-mono font-bold px-2.5 py-1"
                      style={{
                        border: '2px solid #f3f84a',
                        color: '#f3f84a',
                        background: 'rgba(243,248,74,0.08)',
                        borderRadius: '999px',
                      }}
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

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] z-[5]" style={{ background: '#f3f84a', boxShadow: '0 0 8px rgba(243,248,74,0.6)' }} />
    </section>
  )
}
