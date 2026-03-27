"use client"

import { Camera, Heart, Sparkles, Star, CheckCircle2, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  "ถ่ายรูปสไตล์เกาหลี 4 ช่อง",
  "Filter สวยๆ มากกว่า 50 แบบ",
  "พิมพ์รูปทันที รูปสวยคมชัด",
  "Frame น่ารักๆ อัพเดทใหม่ทุกเดือน",
  "รองรับงาน Event ทุกขนาด",
  "ทีมงานดูแลตลอดงาน",
]

export function PhotoboothSection() {
  return (
    <section id="photobooth" className="relative py-24 bg-[#40030b] overflow-hidden">
      {/* Top Beam */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ffde00]/50 to-transparent" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,222,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,222,0,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full opacity-20 blur-[100px] -translate-y-1/2 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #ffde00, transparent)' }} />
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] rounded-full opacity-10 blur-[80px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #ff9100, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-[#ffde00]/10 border border-[#ffde00]/30 rounded-full px-5 py-2.5 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffde00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffde00]"></span>
              </span>
              <Camera className="w-4 h-4 text-[#ffde00]" />
              <span className="text-sm font-bold text-[#ffde00] tracking-[0.15em] uppercase font-mono">Korean Style Photobooth</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              ให้เช่า <span className="text-[#ffde00]" style={{ textShadow: '0 0 30px rgba(255,222,0,0.4)' }}>Photobooth</span>
              <br />
              <span className="text-white/80">สไตล์เกาหลี</span>
            </h2>

            <p className="text-lg text-white/50 mb-10 leading-relaxed max-w-lg">
              บริการให้เช่าตู้ถ่ายรูปสไตล์เกาหลี พร้อมโปรแกรมที่พัฒนาเอง
              เหมาะสำหรับงาน Event, งานแต่งงาน, งานเปิดตัวสินค้า และอื่นๆ
            </p>

            {/* Features */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 group">
                  <div className="w-5 h-5 rounded-full bg-[#ffde00]/10 border border-[#ffde00]/30 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-[#ffde00]" />
                  </div>
                  <span className="text-white/70 text-sm font-medium group-hover:text-white transition-colors">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#ffde00] text-[#40030b] hover:bg-[#ffde00]/90 font-black h-14 px-8 text-lg rounded-xl transition-all duration-300 hover:scale-105"
                style={{ boxShadow: '0 0 30px rgba(255,222,0,0.3)' }}
                onClick={() => window.open('https://line.me/ti/p/@rubkiancode', '_blank')}
              >
                <Heart className="mr-2 w-5 h-5" />
                จองเช่า Photobooth
              </Button>
              <Button
                size="lg"
                className="h-14 px-8 text-lg rounded-xl bg-white/5 text-white border border-white/20 hover:border-[#ffde00]/40 hover:bg-white/10 transition-all duration-300 font-semibold backdrop-blur-sm"
              >
                <Sparkles className="mr-2 w-5 h-5 text-[#ffde00]" />
                ดูตัวอย่างรูป
              </Button>
            </div>
          </div>

          {/* Visual — Photobooth Mockup */}
          <div className="relative flex justify-center">
            {/* Outer Glow Ring */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 rounded-full opacity-20 blur-[60px]"
                style={{ background: 'radial-gradient(circle, #ffde00, transparent)' }} />
            </div>

            {/* Photobooth Frame */}
            <div className="relative w-72 rounded-3xl border-2 border-[#ffde00]/30 bg-black/40 backdrop-blur-sm overflow-hidden"
              style={{ boxShadow: '0 0 50px rgba(255,222,0,0.15), inset 0 0 30px rgba(0,0,0,0.3)' }}>

              {/* Header */}
              <div className="bg-[#ffde00]/10 border-b border-[#ffde00]/20 px-4 py-3 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                </div>
                <span className="text-[#ffde00]/60 text-xs font-mono">photobooth.exe</span>
              </div>

              {/* Photo Grid */}
              <div className="grid grid-cols-2 gap-2 p-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i}
                    className="aspect-square bg-white/5 rounded-xl border border-white/10 flex items-center justify-center hover:border-[#ffde00]/30 transition-all duration-300"
                  >
                    <Camera className="w-8 h-8 text-white/10" />
                  </div>
                ))}
              </div>

              {/* Bottom Strip */}
              <div className="border-t border-[#ffde00]/20 p-3 flex items-center justify-center gap-2 bg-[#ffde00]/5">
                <Star className="w-3 h-3 text-[#ffde00]/60" />
                <span className="text-xs font-mono text-[#ffde00]/60 tracking-wider">PHOTOBOOTH SYSTEM</span>
                <Star className="w-3 h-3 text-[#ffde00]/60" />
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-[#ffde00] flex items-center justify-center rotate-12 hover:rotate-0 transition-all duration-500"
              style={{ boxShadow: '0 0 25px rgba(255,222,0,0.5)' }}>
              <Zap className="w-8 h-8 text-[#40030b]" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Beam */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ffde00]/30 to-transparent" />
    </section>
  )
}
