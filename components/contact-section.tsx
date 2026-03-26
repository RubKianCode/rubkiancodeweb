"use client"

import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

const contactInfo = [
  {
    icon: Phone,
    label: "โทรศัพท์",
    value: "02-XXX-XXXX",
    href: "tel:02-XXX-XXXX",
  },
  {
    icon: Mail,
    label: "อีเมล",
    value: "contact@rubkaincode.com",
    href: "mailto:contact@rubkaincode.com",
  },
  {
    icon: MessageCircle,
    label: "Line",
    value: "@rubkiancode",
    href: "https://line.me/ti/p/@rubkiancode",
  },
  {
    icon: MapPin,
    label: "ที่อยู่",
    value: "กรุงเทพมหานคร",
    href: "#",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            ติดต่อเรา
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            พร้อมให้คำปรึกษาและรับทำโปรเจกต์ ติดต่อเราได้เลย
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                ส่งข้อความถึงเรา
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-foreground">ชื่อ</label>
                    <Input
                      placeholder="ชื่อของคุณ"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-foreground">อีเมล</label>
                    <Input
                      type="email"
                      placeholder="email@example.com"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-foreground">หัวข้อ</label>
                  <Input
                    placeholder="หัวข้อที่ต้องการติดต่อ"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-foreground">รายละเอียด</label>
                  <Textarea
                    placeholder="รายละเอียดโปรเจกต์หรือข้อความที่ต้องการสอบถาม"
                    rows={5}
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Send className="mr-2 w-4 h-4" />
                  ส่งข้อความ
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-sm text-muted-foreground mb-1">
                    {item.label}
                  </div>
                  <div className="text-foreground font-medium">
                    {item.value}
                  </div>
                </a>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video bg-card border border-border rounded-xl overflow-hidden relative">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground">แผนที่ตำแหน่งบริษัท</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
