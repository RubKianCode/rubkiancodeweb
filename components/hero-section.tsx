"use client"

import Image from "next/image"
import { ArrowRight, Camera, Shield, Zap, Clock } from "lucide-react"
import { RetroNoise } from "@/components/retro-noise"
import { CodeBg } from "@/components/code-bg"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { t, lang } = useLanguage()

  const stats = [
    { number: "1500+", label: t("อีเวนต์ที่ไว้วางใจ", "Trusted Events"), icon: Camera },
    { number: "100%", label: t("การันตีความเสถียร", "Stability Guarantee"), icon: Shield },
    { number: "8+", label: t("ปีประสบการณ์", "Years Experience"), icon: Zap },
    { number: "24/7", label: t("ดูแลตลอดการใช้งาน", "Full Support"), icon: Clock },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden retro-scanlines retro-vignette crt-flicker">

      {/* Base Paper Background */}
      <Image
        src="/bg-paper.png"
        alt="paper background"
        fill
        className="object-cover"
        priority
        style={{ zIndex: 0 }}
      />

      {/* Warm amber tint layers — reduced to let code bg show */}
      <div className="absolute inset-0 z-[1]" style={{ background: 'rgba(200, 144, 10, 0.32)' }} />
      <div className="absolute inset-0 z-[1]" style={{ background: 'rgba(243, 248, 74, 0.08)' }} />

      {/* TV Noise Animation */}
      <RetroNoise opacity={0.04} className="z-[2]" blendMode="overlay" />

      {/* Bouncing Code Symbols */}
      <CodeBg opacity={0.9} particleCount={60} className="z-[3]" />

      {/* Vignette dark corners */}
      <div
        className="absolute inset-0 z-[4] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, rgba(20, 8, 0, 0.55) 100%)' }}
      />

      {/* Top & bottom thick yellow border lines */}
      <div className="absolute top-16 left-0 right-0 h-[3px] z-[5]" style={{ background: '#f3f84a', boxShadow: '0 0 12px rgba(243,248,74,0.8)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-[3px] z-[5]" style={{ background: '#f3f84a', boxShadow: '0 0 12px rgba(243,248,74,0.8)' }} />

      {/* Corner brackets */}
      <div className="absolute top-20 left-6 w-10 h-10 border-l-4 border-t-4 border-[#f3f84a] z-[5]" style={{ boxShadow: '-2px -2px 0 #7a5010' }} />
      <div className="absolute top-20 right-6 w-10 h-10 border-r-4 border-t-4 border-[#f3f84a] z-[5]" style={{ boxShadow: '2px -2px 0 #7a5010' }} />
      <div className="absolute bottom-4 left-6 w-10 h-10 border-l-4 border-b-4 border-[#f3f84a] z-[5]" style={{ boxShadow: '-2px 2px 0 #7a5010' }} />
      <div className="absolute bottom-4 right-6 w-10 h-10 border-r-4 border-b-4 border-[#f3f84a] z-[5]" style={{ boxShadow: '2px 2px 0 #7a5010' }} />

      {/* Main Content */}
      <div className="relative z-[6] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">

        {/* Channel badge */}
        <div className="inline-flex items-center gap-3 mb-6 px-6 py-2"
          style={{
            background: 'rgba(147, 200, 207, 0.9)',
            border: '3px solid #f3f84a',
            boxShadow: '4px 4px 0px #7a5010',
            borderRadius: '999px',
          }}>
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
          </span>
          <Camera className="w-4 h-4 text-[#1a0e00]" />
          <span
            className="text-sm font-black text-[#1a0e00] uppercase"
            style={{ letterSpacing: lang === 'th' ? '0.07em' : '0.025em' }}
          >
            {t("Professional Photobooth Solutions", "Professional Photobooth Solutions")}
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className="text-xl sm:text-xl md:text-7xl lg:text-9xl font-black uppercase leading-[1.15] mb-5"
          style={{
            color: '#ffffffff',
            textShadow: '5px 5px 0px #7a5010, 10px 10px 0px rgba(122, 80, 16, 0.4)',
            fontFamily: 'var(--font-prompt), Prompt, sans-serif',
            WebkitTextStroke: '2px #c8900a',
          }}
        >
          <span style={{ letterSpacing: lang === 'th' ? '0.05em' : '0' }}>
            {t("ระบบซอฟต์แวร์", "Software System")}
          </span>
          <br />
          <span style={{ letterSpacing: lang === 'th' ? '0.05em' : '0' }}>
            {t("โฟโต้บูธ", "Photobooth")}
          </span>
        </h1>

        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-5"
          style={{
            color: '#fcff5cff',
            textShadow: '3px 3px 0px #3d2000, 0 0 30px rgba(255,255,255,0.3)',
            fontFamily: 'var(--font-prompt), Prompt, sans-serif',
            letterSpacing: lang === 'th' ? '0.07em' : '0.025em',
          }}
        >
          <span className="text-6xl">
            {t("อันดับ", "Ranked")}&nbsp;
            <span style={{ color: '#93c8cf', textShadow: '3px 3px 0px #2a5a60, 0 0 20px rgba(147,200,207,0.5)' }}>1</span>
            &nbsp;{t("ในไทย", "In Thailand")}
          </span>
        </h2>

        {/* Subtitle */}
        <p
          className="text-sm sm:text-xl max-w-xl mx-auto mb-6 leading-relaxed font-medium"
          style={{
            color: 'rgba(255,255,255,0.85)',
            textShadow: '1px 1px 0px rgba(0,0,0,0.8)',
            letterSpacing: lang === 'th' ? '0.02em' : '0',
          }}
        >
          {t("ยกระดับธุรกิจของคุณด้วยซอฟต์แวร์ระดับสากล", "Elevate your business with world-class software")}
          <br className="hidden sm:block" />
          {t("เสถียร ใช้งานง่าย และรองรับทุกความต้องการ", "Stable, easy to use, and meets every need")}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <button
            className="group h-12 px-8 text-base font-black uppercase transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px]"
            style={{
              background: '#f3f84a',
              color: '#1a0e00',
              border: '3px solid #1a0e00',
              boxShadow: '5px 5px 0px #1a0e00',
              borderRadius: '999px',
              letterSpacing: lang === 'th' ? '0.05em' : '0.025em',
            }}
            onClick={() => window.open('https://line.me/ti/p/@rubkiancode', '_blank')}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '7px 7px 0px #1a0e00' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '5px 5px 0px #1a0e00' }}
          >
            {t("สอบถามข้อมูลเพิ่มเติม", "Get More Info")}
            <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            className="h-12 px-8 text-base font-black uppercase transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px]"
            style={{
              background: '#93c8cf',
              color: '#1a0e00',
              border: '3px solid #1a0e00',
              boxShadow: '5px 5px 0px #1a0e00',
              borderRadius: '999px',
              letterSpacing: lang === 'th' ? '0.05em' : '0.025em',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '7px 7px 0px #1a0e00' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '5px 5px 0px #1a0e00' }}
          >
            {t("ดูตัวอย่างระบบ", "View Demo")}
          </button>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-10">
          {stats.map((stat, i) => (
            <div key={i}
              className="text-center p-4 transition-all duration-150 hover:translate-x-[-1px] hover:translate-y-[-1px]"
              style={{
                background: 'rgba(26, 14, 0, 0.7)',
                border: '2px solid #f3f84a',
                boxShadow: '3px 3px 0px #7a5010',
                borderRadius: '16px',
              }}>
              <stat.icon className="w-5 h-5 mx-auto mb-1" style={{ color: '#f3f84a' }} />
              <div className="text-3xl font-black" style={{ color: '#f3f84a', textShadow: '2px 2px 0 #7a5010' }}>
                {stat.number}
              </div>
              <div className="text-xs font-bold uppercase text-white/70" style={{ letterSpacing: lang === 'th' ? '0.02em' : '0' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[6] animate-bounce">
        <div className="w-6 h-10 flex items-start justify-center p-2" style={{ border: '2px solid #f3f84a', boxShadow: '2px 2px 0 #7a5010' }}>
          <div className="w-1.5 h-1.5 animate-pulse" style={{ background: '#f3f84a' }} />
        </div>
      </div>
    </section>
  )
}
