"use client"

import { Camera, Heart, Sparkles, Star, CheckCircle2 } from "lucide-react"
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
    <section id="photobooth" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Camera className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Korean Style Photobooth</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              ให้เช่า <span className="text-primary">Photobooth</span>
              <br />
              สไตล์เกาหลี
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              บริการให้เช่าตู้ถ่ายรูปสไตล์เกาหลี พร้อมโปรแกรมที่พัฒนาเอง 
              เหมาะสำหรับงาน Event, งานแต่งงาน, งานเปิดตัวสินค้า และอื่นๆ
            </p>

            {/* Features List */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Heart className="mr-2 w-5 h-5" />
                จองเช่า Photobooth
              </Button>
              <Button size="lg" variant="outline" className="border-border">
                ดูตัวอย่างรูป
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-[4/5] bg-secondary rounded-2xl overflow-hidden relative">
              {/* Photobooth Frame Mockup */}
              <div className="absolute inset-4 bg-background rounded-xl border-4 border-primary/20 flex flex-col">
                {/* Photo Grid */}
                <div className="flex-1 grid grid-cols-2 gap-2 p-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="bg-secondary rounded-lg flex items-center justify-center"
                    >
                      <Camera className="w-8 h-8 text-muted-foreground/30" />
                    </div>
                  ))}
                </div>
                {/* Bottom Strip */}
                <div className="bg-primary/10 p-4 flex items-center justify-center gap-2">
                  <Star className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">RubKianCode Photobooth</span>
                  <Star className="w-4 h-4 text-primary" />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center animate-bounce">
                <Sparkles className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
