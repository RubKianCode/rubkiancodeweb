"use client"

import { ArrowRight, Code2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Professional Photobooth Solutions</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-foreground mb-8 leading-[1.1] tracking-tight">
          ระบบซอฟต์แวร์โฟโต้บูธ
          <br />
          <span className="text-primary italic">อันดับ 1 ในไทย</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-foreground/70 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
          ยกระดับธุรกิจของคุณด้วยซอฟต์แวร์ระดับสากล 
          <br className="hidden sm:block" />
          เสถียร ใช้งานง่าย และรองรับทุกความต้องการของงานอีเวนต์
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 h-16 px-10 text-xl font-bold rounded-2xl shadow-xl shadow-primary/30 group transition-all hover:scale-105 active:scale-95"
            onClick={() => window.open('https://line.me/ti/p/@rubkiancode', '_blank')}
          >
            สอบถามข้อมูลเพิ่มเติม
            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="h-16 px-10 text-xl font-semibold rounded-2xl border-2 border-primary/20 text-foreground hover:bg-primary/5 transition-all"
          >
            <Code2 className="mr-2 w-6 h-6 text-primary" />
            ดูตัวอย่างระบบ
          </Button>
        </div>

        {/* Stats Section with updated look */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto py-10 border-t border-primary/10">
          {[
            { number: "500+", label: "อีเวนต์ที่ไว้วางใจ" },
            { number: "100%", label: "การันตีความเสถียร" },
            { number: "5+", label: "ปีประสบการณ์" },
            { number: "24/7", label: "ดูแลตลอดการใช้งาน" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-primary mb-1">
                {stat.number}
              </div>
              <div className="text-xs font-bold text-foreground/50 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
