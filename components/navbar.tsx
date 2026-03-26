"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#40030b] backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Name (No Logo) */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="font-bold text-xl tracking-tight text-foreground sm:block">
              ขายระบบซอฟแวร์โฟโต้บูธ ประเทศไทย
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-foreground/80 hover:text-[#FFFFFF] transition-all relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFFFFF] transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              onClick={handleLineContact}
              className="bg-[#FFFFFF] hover:bg-[#D8D8D8] text-[#000000] font-semibold px-6 py-5 rounded-xl transition-all hover:scale-105"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              สอบถามเพิ่มเติม
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-3 hover:bg-secondary rounded-xl transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-2xl border-b border-border/50 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <div className="px-6 py-8 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-xl font-semibold text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              onClick={handleLineContact}
              className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl"
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
