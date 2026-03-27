"use client"

import { Mail, Phone, MapPin, Send, MessageCircle, ArrowRight } from "lucide-react"

const contactInfo = [
  {
    icon: MessageCircle,
    label: "LINE Official",
    value: "@rubkiancode",
    sub: "ตอบกลับภายใน 1 ชม.",
    href: "https://line.me/ti/p/@rubkiancode",
    highlight: true,
  },
  {
    icon: Phone,
    label: "โทรศัพท์",
    value: "02-XXX-XXXX",
    sub: "จันทร์–เสาร์ 9:00–18:00",
    href: "tel:02-XXX-XXXX",
    highlight: false,
  },
  {
    icon: Mail,
    label: "อีเมล",
    value: "contact@rubkaincode.com",
    sub: "ตอบกลับภายใน 24 ชม.",
    href: "mailto:contact@rubkaincode.com",
    highlight: false,
  },
  {
    icon: MapPin,
    label: "ที่อยู่",
    value: "กรุงเทพมหานคร",
    sub: "ให้บริการทั่วประเทศ",
    href: "#",
    highlight: false,
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="relative py-28 overflow-hidden" style={{ background: '#2a0108' }}>

      {/* Rich layered background */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(80,5,18,1) 0%, rgba(42,1,8,1) 60%, rgba(20,0,4,1) 100%)' }} />

      {/* Fine Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,222,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,222,0,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Top glow beam */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ffde00]/60 to-transparent" />

      {/* Left ambient glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(160,10,30,0.8) 0%, transparent 70%)' }} />

      {/* Right ambient glow */}
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(255,222,0,0.5) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2.5 rounded-full px-5 py-2 mb-7 border"
            style={{ background: 'rgba(255,222,0,0.06)', borderColor: 'rgba(255,222,0,0.2)' }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffde00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffde00]"></span>
            </span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase font-mono">Get In Touch</span>
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-5 leading-tight">
            พร้อมให้คุณ
            <br />
            <span>ติดต่อเราได้เลย</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto leading-relaxed">
            ทีมงานผู้เชี่ยวชาญพร้อมรับฟังและให้คำแนะนำอย่างตรงจุด
            ไม่ว่าจะเป็นการเช่า ซื้อ หรือสอบถามรายละเอียด
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* LEFT — Contact Cards */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((item, index) => (
              <a key={index} href={item.href}
                className="group flex items-center gap-5 p-5 rounded-2xl border transition-all duration-300"
                style={{
                  background: item.highlight ? 'rgba(255,222,0,0.08)' : 'rgba(255,255,255,0.03)',
                  borderColor: item.highlight ? 'rgba(255,222,0,0.35)' : 'rgba(255,255,255,0.08)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,222,0,0.4)'
                    ; (e.currentTarget as HTMLElement).style.background = 'rgba(255,222,0,0.08)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = item.highlight ? 'rgba(255,222,0,0.35)' : 'rgba(255,255,255,0.08)'
                    ; (e.currentTarget as HTMLElement).style.background = item.highlight ? 'rgba(255,222,0,0.08)' : 'rgba(255,255,255,0.03)'
                }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                  style={{ background: item.highlight ? 'rgba(255,222,0,0.15)' : 'rgba(255,255,255,0.05)', border: `1px solid ${item.highlight ? 'rgba(255,222,0,0.4)' : 'rgba(255,255,255,0.1)'}` }}>
                  <item.icon className="w-5 h-5" style={{ color: item.highlight ? '#ffde00' : 'rgba(255,255,255,0.5)' }} />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-mono mb-0.5">{item.label}</div>
                  <div className="text-sm font-bold truncate">{item.value}</div>
                  <div className="text-xs mt-0.5">{item.sub}</div>
                </div>

                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0" style={{ color: '#ffde00' }} />
              </a>
            ))}

            {/* CTA Banner */}
            <div
              className="mt-6 p-6 rounded-2xl cursor-pointer group transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, rgba(64,3,11,0.9) 0%, rgba(100,5,20,0.9) 100%)', border: '1px solid rgba(255,222,0,0.25)', boxShadow: '0 0 40px rgba(64,3,11,0.5)' }}
              onClick={() => window.open('https://line.me/ti/p/@rubkiancode', '_blank')}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono mb-1">// ช่องทางแนะนำ</div>
                  <div className="font-black text-lg">คุยผ่าน LINE เลย!</div>
                  <div className="text-sm mt-1">เร็ว ง่าย ได้คำตอบทันที</div>
                </div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: '#ffde00', boxShadow: '0 0 25px rgba(255,222,0,0.4)' }}>
                  <MessageCircle className="w-7 h-7" style={{ color: '#40030b' }} />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Modern Form */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 25px 80px rgba(0,0,0,0.4)' }}>

              {/* Form Header Bar */}
              <div className="px-8 py-5 flex items-center justify-between"
                style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full" style={{ background: 'rgba(255,100,100,0.6)' }} />
                    <div className="w-3 h-3 rounded-full" style={{ background: 'rgba(255,200,0,0.6)' }} />
                    <div className="w-3 h-3 rounded-full" style={{ background: 'rgba(100,255,100,0.6)' }} />
                  </div>
                  <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.25)' }}>contact_form.tsx</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.25)' }}>ready</span>
                </div>
              </div>

              {/* Form Body */}
              <div className="p-8">
                <h3 className="text-2xl font-black mb-2">ส่งข้อความถึงเรา</h3>
                <p className="text-sm mb-8">กรอกข้อมูลด้านล่าง ทีมงานจะติดต่อกลับโดยเร็วที่สุด</p>

                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      { label: "ชื่อ-นามสกุล", placeholder: "กรอกชื่อของคุณ", type: "text" },
                      { label: "อีเมล", placeholder: "email@example.com", type: "email" },
                    ].map((field, i) => (
                      <div key={i} className="space-y-2">
                        <label className="block text-xs font-bold tracking-wider uppercase">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          className="w-full rounded-xl px-4 py-3.5 text-sm outline-none transition-all duration-200"
                          style={{
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            caretColor: '#ffde00',
                          }}
                          onFocus={e => { e.currentTarget.style.borderColor = 'rgba(255,222,0,0.5)'; e.currentTarget.style.background = 'rgba(255,255,255,0.07)' }}
                          onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold tracking-wider uppercase">หัวข้อ</label>
                    <input
                      placeholder="เช่น สอบถามราคาเช่าระบบ Photobooth"
                      className="w-full rounded-xl px-4 py-3.5 text-sm outline-none transition-all duration-200"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', caretColor: '#ffde00' }}
                      onFocus={e => { e.currentTarget.style.borderColor = 'rgba(255,222,0,0.5)'; e.currentTarget.style.background = 'rgba(255,255,255,0.07)' }}
                      onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold tracking-wider uppercase">รายละเอียด</label>
                    <textarea
                      placeholder="อธิบายความต้องการของคุณ..."
                      rows={5}
                      className="w-full rounded-xl px-4 py-3.5 text-sm outline-none transition-all duration-200 resize-none"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', caretColor: '#ffde00' }}
                      onFocus={e => { e.currentTarget.style.borderColor = 'rgba(255,222,0,0.5)'; e.currentTarget.style.background = 'rgba(255,255,255,0.07)' }}
                      onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-14 rounded-xl font-black text-lg flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    style={{
                      background: 'linear-gradient(135deg, #ffde00 0%, #ff9100 100%)',
                      color: '#40030b',
                      boxShadow: '0 0 40px rgba(255,222,0,0.25), 0 4px 20px rgba(0,0,0,0.3)',
                    }}
                  >
                    <Send className="w-5 h-5" />
                    ส่งข้อความเลย
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Beam */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ffde00]/30 to-transparent" />
    </section>
  )
}
