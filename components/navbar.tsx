"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#services", label: "รับผลิตซอฟต์แวร์" },
  { href: "#products", label: "เช่าซอฟต์แวร์" },
  { href: "#photobooth", label: "เช่า Photobooth" },
  { href: "#contact", label: "ติดต่อเรา" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleLineContact = () => {
    window.open('https://line.me/ti/p/@rubkiancode', '_blank');
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#40030b]/95 backdrop-blur-xl border-b border-[#ffde00]/10" style={{ boxShadow: '0 1px 30px rgba(255,222,0,0.08)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Name */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-[#ffde00] font-mono text-lg font-bold opacity-70 group-hover:opacity-100 transition-opacity">[</span>
            <span className="font-bold text-xl tracking-tight text-white sm:block group-hover:text-[#ffde00] transition-colors duration-300">
              ขายระบบซอฟแวร์โฟโต้บูธ ประเทศไทย
            </span>
            <span className="text-[#ffde00] font-mono text-lg font-bold opacity-70 group-hover:opacity-100 transition-opacity">]</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 hover:text-[#ffde00] transition-all relative group py-1"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-[#ffde00] to-transparent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              onClick={handleLineContact}
              className="bg-[#ff9100] hover:bg-[#ffde00] text-[#40030b] font-bold px-6 py-5 rounded-xl transition-all duration-300 hover:scale-105"
              style={{ boxShadow: '0 0 20px rgba(255,145,0,0.3)' }}
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              สอบถามเพิ่มเติม
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-3 hover:bg-white/10 rounded-xl transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-[#40030b]/98 backdrop-blur-2xl border-b border-[#ffde00]/10 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <div className="px-6 py-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-xl font-semibold text-white/80 hover:text-[#ffde00] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-[#ffde00]/50 font-mono mr-2">&gt;</span>
                {link.label}
              </Link>
            ))}
            <Button
              onClick={handleLineContact}
              className="w-full h-14 text-lg font-bold bg-[#ff9100] hover:bg-[#ffde00] text-[#40030b] rounded-2xl"
            >
              <MessageCircle className="mr-2 w-6 h-6" />
              สอบถามเพิ่มเติม
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
