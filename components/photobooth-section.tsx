"use client"

import { Camera, Heart, Sparkles, Star, CheckCircle2, Zap } from "lucide-react"
import Image from "next/image"
import { CodeBg } from "@/components/code-bg"
import { useLanguage, useLangTypography } from "@/lib/language-context"
import { useTranslations } from "next-intl"

export function PhotoboothSection() {
  const { lang } = useLanguage()
  const typo = useLangTypography()
  const t = useTranslations("photobooth")

  const features = [
    t("feature0"),
    t("feature1"),
    t("feature2"),
    t("feature3"),
    t("feature4"),
    t("feature5"),
  ]

  return (
    <section id="photobooth" className="relative py-24 overflow-hidden retro-scanlines">

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
      <div className="absolute inset-0 z-[1]" style={{ background: 'rgba(147, 200, 207, 0.12)' }} />
      <div className="absolute inset-0 z-[1]" style={{ background: 'rgba(200, 144, 10, 0.30)' }} />

      {/* TV Noise */}
      

      {/* Bouncing Code Symbols */}
      <CodeBg opacity={0.8} particleCount={40} className="z-[3]" />

      {/* Vignette */}
      <div className="absolute inset-0 z-[4] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 90% 80% at 50% 50%, transparent 30%, rgba(20,8,0,0.45) 100%)' }} />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-[3px] z-[5]" style={{ background: '#f3f84a', boxShadow: '0 0 8px rgba(243,248,74,0.6)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-[6]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Content */}
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-3 mb-8 px-5 py-2.5"
              style={{ background: '#93c8cf', border: '3px solid #1a0e00', boxShadow: '4px 4px 0px #1a0e00', borderRadius: '999px' }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
              </span>
              <Camera className="w-4 h-4 text-[#1a0e00]" />
              <span
                className="font-black text-[#1a0e00] uppercase"
                style={{ letterSpacing: typo.trackingLabel, fontSize: typo.sectionBadge }}
              >
                {t("badge")}
              </span>
            </div>

            <h2
              className="font-black uppercase mb-6 leading-tight"
              style={{
                fontSize: typo.sectionH2,
                color: '#f3f84a',
                textShadow: '5px 5px 0px #7a5010, 10px 10px 0px rgba(122,80,16,0.3)',
                fontFamily: typo.fontFamily,
                WebkitTextStroke: '1px #c8900a',
                letterSpacing: typo.trackingSectionH2,
              }}
            >
              {t("heading_rent")}
              <br />
              <span style={{ color: '#93c8cf', textShadow: '5px 5px 0px #2a5a60', WebkitTextStroke: '1px #1a5a60' }}>Photobooth</span>
              <br />
              <span style={{ color: '#ffffff', textShadow: '4px 4px 0px #3d2000', WebkitTextStroke: '0px transparent' }}>
                {t("heading_style")}
              </span>
            </h2>

            <p
              className="text-white/80 mb-10 leading-relaxed max-w-lg font-medium"
              style={{ fontSize: typo.sectionDesc, lineHeight: typo.sectionLineHeight, textShadow: '1px 1px 0 rgba(0,0,0,0.8)', letterSpacing: typo.trackingBody }}
            >
              {t("description")}
            </p>

            {/* Features */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div
                    className="w-6 h-6 flex items-center justify-center flex-shrink-0"
                    style={{ background: '#93c8cf', border: '2px solid #1a0e00', boxShadow: '2px 2px 0 #1a0e00', borderRadius: '6px' }}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1a0e00]" />
                  </div>
                  <span
                    className="text-white font-bold text-sm"
                    style={{ textShadow: '1px 1px 0 rgba(0,0,0,0.8)', letterSpacing: typo.trackingBody }}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="font-black uppercase transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[1px] active:translate-y-[1px]"
                style={{
                  padding: typo.sectionBtnPadding,
                  background: '#f3f84a',
                  color: '#1a0e00',
                  border: '3px solid #1a0e00',
                  boxShadow: '5px 5px 0px #1a0e00',
                  borderRadius: '999px',
                  fontSize: typo.sectionBadge,
                  letterSpacing: typo.trackingButton,
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '7px 7px 0px #1a0e00' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '5px 5px 0px #1a0e00' }}
                onClick={() => window.open('https://line.me/ti/p/@rubkiancode', '_blank')}
              >
                <Heart className="inline mr-2 w-5 h-5" />
                {t("cta_book")}
              </button>
              <button
                className="font-black uppercase transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[1px] active:translate-y-[1px]"
                style={{
                  padding: typo.sectionBtnPadding,
                  background: '#93c8cf',
                  color: '#1a0e00',
                  border: '3px solid #1a0e00',
                  boxShadow: '5px 5px 0px #1a0e00',
                  borderRadius: '999px',
                  fontSize: typo.sectionBadge,
                  letterSpacing: typo.trackingButton,
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '7px 7px 0px #1a0e00' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '5px 5px 0px #1a0e00' }}
              >
                <Sparkles className="inline mr-2 w-5 h-5" />
                {t("cta_sample")}
              </button>
            </div>
          </div>

          {/* Visual — Retro Photobooth TV Mockup */}
          <div className="relative flex justify-center">

            {/* Outer glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <div className="w-[500px] h-[500px] rounded-full opacity-20 blur-[80px]"
                style={{ background: 'radial-gradient(circle, #f3f84a, transparent)' }} />
            </div>

            {/* Main TV frame */}
            <div
              className="relative w-[500px] z-10"
              style={{
                background: 'linear-gradient(145deg, #d4a840 0%, #b8860b 50%, #8b6508 100%)',
                border: '4px solid #1a0e00',
                boxShadow: '8px 8px 0px #1a0e00, 16px 16px 0px rgba(26,14,0,0.3)',
                borderRadius: '8px',
                padding: '12px',
              }}
            >
              {/* TV Screen bezel */}
              <div
                className="relative overflow-hidden"
                style={{
                  background: '#93c8cf',
                  border: '4px solid #1a0e00',
                  borderRadius: '4px',
                  boxShadow: 'inset 0 0 20px rgba(0,0,0,0.3)',
                }}
              >
                {/* Scanlines on screen */}
                <div className="absolute inset-0 z-20 pointer-events-none"
                  style={{
                    background: 'repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(0,0,0,0.07) 3px, rgba(0,0,0,0.07) 4px)',
                  }} />

                {/* Header bar */}
                <div
                  className="px-3 py-2 flex items-center justify-between border-b-2 border-[#1a0e00]"
                  style={{ background: 'rgba(26,14,0,0.15)' }}
                >
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" style={{ border: '1px solid #1a0e00' }} />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" style={{ border: '1px solid #1a0e00' }} />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" style={{ border: '1px solid #1a0e00' }} />
                  </div>
                  <span className="font-mono font-bold text-[10px] text-[#1a0e00]">photobooth.exe</span>
                </div>

                {/* Photo grid */}
                <div className="grid grid-cols-2 gap-2 p-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="aspect-square flex items-center justify-center"
                      style={{ background: 'rgba(26,14,0,0.2)', border: '2px solid rgba(26,14,0,0.3)' }}
                    >
                      <Camera className="w-8 h-8" style={{ color: 'rgba(26,14,0,0.25)' }} />
                    </div>
                  ))}
                </div>

                {/* Bottom strip */}
                <div
                  className="flex items-center justify-center gap-2 py-2 border-t-2 border-[#1a0e00]"
                  style={{ background: 'rgba(26,14,0,0.15)' }}
                >
                  <Star className="w-3 h-3 text-[#1a0e00]" />
                  <span className="text-[10px] font-mono font-black text-[#1a0e00] tracking-wider uppercase">Photobooth System</span>
                  <Star className="w-3 h-3 text-[#1a0e00]" />
                </div>
              </div>

              {/* TV base knobs */}
              <div className="flex justify-between mt-2 px-2">
                <div className="flex gap-1.5">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-3 h-3 rounded-full" style={{ background: '#1a0e00', opacity: 0.5 }} />
                  ))}
                </div>
                <div className="w-6 h-3 rounded" style={{ background: '#1a0e00', opacity: 0.4 }} />
              </div>
            </div>

            {/* Floating Zap badge */}
            <div
              className="absolute -top-5 -right-5 w-16 h-16 flex items-center justify-center z-20 rotate-12 hover:rotate-0 transition-all duration-500"
              style={{
                background: '#f3f84a',
                border: '3px solid #1a0e00',
                boxShadow: '4px 4px 0px #1a0e00',
                borderRadius: '999px',
              }}
            >
              <Zap className="w-8 h-8 text-[#1a0e00]" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] z-[5]" style={{ background: '#f3f84a', boxShadow: '0 0 8px rgba(243,248,74,0.6)' }} />
    </section>
  )
}
