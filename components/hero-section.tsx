"use client"

import Image from "next/image"
import { ArrowRight, Code2, Camera, Zap, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">

      {/* Base Background */}
      <div className="absolute inset-0 z-0" />
      <Image
        src="/bg-paper.png"
        alt="paper background"
        fill
        className="object-cover opacity-90"
        priority />

      <div className="absolute inset-0 bg-[#f3f84a]/20 backdrop-blur-[1px]" />

      {/* Noise Overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-[0.2]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' 
          xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence 
          type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-[100px]"
        style={{ background: 'radial-gradient(circle, #40030b, transparent)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-15 blur-[80px]"
        style={{ background: 'radial-gradient(circle, #40030b, transparent)' }} />

      {/* Top Beam */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ffde00]/40 to-transparent" />

      {/* Corner Accent Lines */}
      <div className="absolute top-24 left-8 w-16 h-16 border-l-2 border-t-2 border-[#ffde00]/40 rounded-tl-sm" />
      <div className="absolute top-24 right-8 w-16 h-16 border-r-2 border-t-2 border-[#ffde00]/40 rounded-tr-sm" />
      <div className="absolute bottom-16 left-8 w-16 h-16 border-l-2 border-b-2 border-[#ffde00]/40 rounded-bl-sm" />
      <div className="absolute bottom-16 right-8 w-16 h-16 border-r-2 border-b-2 border-[#ffde00]/40 rounded-br-sm" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">

        {/* Animated Badge */}
        <div className="inline-flex items-center gap-3 bg-[#40030b]/60 border border-[#ffde00]/30 rounded-full px-5 py-2.5 mb-10 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffde00] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffde00]"></span>
          </span>
          <Camera className="w-4 h-4 text-[#ffde00]" />
          <span className="text-sm font-bold text-[#ffde00] uppercase tracking-[0.15em]">Professional Photobooth Solutions</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.1] tracking-tight">
          ระบบซอฟต์แวร์โฟโต้บูธ
          <br />
          <span className="text-[#ffde00] italic" style={{ textShadow: '0 0 40px rgba(255,222,0,0.4)' }}>
            อันดับ 1 ในไทย
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-14 leading-relaxed font-medium">
          ยกระดับธุรกิจของคุณด้วยซอฟต์แวร์ระดับสากล
          <br className="hidden sm:block" />
          เสถียร ใช้งานง่าย และรองรับทุกความต้องการของงานคุณ
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20">
          <Button
            size="lg"
            className="bg-[#40030b] text-white hover:bg-[#5a0410] h-16 px-10 text-xl font-bold rounded-2xl group transition-all duration-300 hover:scale-105 active:scale-95 border border-[#ffde00]/20"
            style={{ boxShadow: '0 0 30px rgba(64,3,11,0.5), 0 0 60px rgba(64,3,11,0.2)' }}
            onClick={() => window.open('https://line.me/ti/p/@rubkiancode', '_blank')}
          >
            สอบถามข้อมูลเพิ่มเติม
            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
          </Button>

          <Button
            size="lg"
            className="h-16 px-10 text-xl font-bold rounded-2xl bg-black/40 text-white hover:bg-black/60 border border-white/20 hover:border-[#ffde00]/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            <Code2 className="mr-2 w-6 h-6 text-[#ffde00]" />
            ดูตัวอย่างระบบ
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { number: "500+", label: "อีเวนต์ที่ไว้วางใจ", icon: Camera },
            { number: "100%", label: "การันตีความเสถียร", icon: Shield },
            { number: "5+", label: "ปีประสบการณ์", icon: Zap },
            { number: "24/7", label: "ดูแลตลอดการใช้งาน", icon: Clock },
          ].map((stat, index) => (
            <div key={index}
              className="relative text-center p-4 rounded-xl border border-[#40030b]/40 bg-black/20 backdrop-blur-sm hover:border-[#ffde00]/30 transition-all duration-300 group"
            >
              <stat.icon className="w-5 h-5 text-[#ffde00]/40 mx-auto mb-2 group-hover:text-[#ffde00]/70 transition-colors" />
              <div className="text-3xl sm:text-4xl font-black text-[#ffde00] mb-1"
                style={{ textShadow: '0 0 20px rgba(255,222,0,0.3)' }}>
                {stat.number}
              </div>
              <div className="text-xs font-bold text-white/50 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#ffde00]/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-[#ffde00] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
