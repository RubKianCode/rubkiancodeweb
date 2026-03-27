import Link from "next/link"
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react"

const navLinks = [
  { href: "#services", label: "รับผลิตซอฟต์แวร์" },
  { href: "#products", label: "เช่าซอฟต์แวร์" },
  { href: "#photobooth", label: "เช่า Photobooth" },
  { href: "#contact", label: "ติดต่อเรา" },
]

const contactLinks = [
  { icon: Mail, label: "contact@rubkaincode.com", href: "mailto:contact@rubkaincode.com" },
  { icon: Phone, label: "02-XXX-XXXX", href: "tel:02-XXX-XXXX" },
  { icon: MessageCircle, label: "@rubkiancode", href: "https://line.me/ti/p/@rubkiancode" },
  { icon: MapPin, label: "กรุงเทพมหานคร", href: "#" },
]

export function Footer() {
  return (
    <footer className="relative bg-[#40030b] overflow-hidden">
      {/* Top Beam */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ffde00]/50 to-transparent" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,222,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,222,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full opacity-20 blur-[80px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #ffde00, transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4 group">
              <span className="text-[#ffde00]/60 font-mono text-lg group-hover:text-[#ffde00] transition-colors">[</span>
              <span className="font-black text-lg text-white group-hover:text-[#ffde00] transition-colors">โฟโต้บูธ ประเทศไทย</span>
              <span className="text-[#ffde00]/60 font-mono text-lg group-hover:text-[#ffde00] transition-colors">]</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-5 max-w-xs">
              ผู้เชี่ยวชาญด้านระบบซอฟต์แวร์โฟโต้บูธ ให้บริการครบวงจร ทั้งผลิต ให้เช่า และให้คำปรึกษา
            </p>
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-[#ffde00]/5 border border-[#ffde00]/20 rounded-full px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
              </span>
              <span className="text-xs font-mono text-white/50">System Online — 24/7</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-mono text-[#ffde00]/50 uppercase tracking-[0.2em] mb-5">// บริการ</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-[#ffde00] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="text-[#ffde00]/0 group-hover:text-[#ffde00]/50 font-mono transition-all duration-200">&gt;</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-mono text-[#ffde00]/50 uppercase tracking-[0.2em] mb-5">// ติดต่อ</h4>
            <ul className="space-y-3">
              {contactLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 text-sm text-white/40 hover:text-[#ffde00] transition-colors duration-200 group"
                  >
                    <item.icon className="w-4 h-4 text-[#ffde00]/30 group-hover:text-[#ffde00]/70 flex-shrink-0 transition-colors" />
                    <span className="font-mono">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-white/25">
            © 2026 ขายระบบซอฟแวร์โฟโต้บูธ ประเทศไทย — All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs font-mono text-white/25 hover:text-[#ffde00]/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs font-mono text-white/25 hover:text-[#ffde00]/60 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
