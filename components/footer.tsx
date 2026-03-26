import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="RubKianCode Logo"
                width={48}
                height={48}
                className="rounded"
              />
              <span className="font-bold text-xl text-primary">RUBKIANCODE</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4 max-w-sm">
              Rub Kian Code Co.,Ltd. - ผู้เชี่ยวชาญด้านการพัฒนาซอฟต์แวร์ ให้บริการครบวงจร ทั้งผลิต ให้เช่า และให้คำปรึกษา
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">บริการ</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  รับผลิตซอฟต์แวร์
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  เช่าซอฟต์แวร์
                </Link>
              </li>
              <li>
                <Link href="#photobooth" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  เช่า Photobooth
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  ให้คำปรึกษา
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">ติดต่อ</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                <span className="text-foreground">อีเมล:</span> contact@rubkaincode.com
              </li>
              <li className="text-sm text-muted-foreground">
                <span className="text-foreground">โทร:</span> 02-XXX-XXXX
              </li>
              <li className="text-sm text-muted-foreground">
                <span className="text-foreground">Line:</span> @rubkiancode
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Rub Kian Code Co.,Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
