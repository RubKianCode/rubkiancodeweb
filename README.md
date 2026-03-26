# Rubkiancode (บริษัท รับเขียนโค้ด จำกัด)

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![Next.js](https://img.shields.io/badge/Next.js-16.2.0-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.2-blue?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)

เว็บไซต์อย่างเป็นทางการของ **บริษัท รับเขียนโค้ด จำกัด (Rub Kian Code Co.,Ltd.)** ซึ่งเป็นผู้ให้บริการทางด้าน:
- รับผลิตและพัฒนาซอฟต์แวร์แบบครบวงจร ทุุกรูปแบบ
- ให้คำปรึกษาการทำซอฟต์แวร์
- ให้บริการเช่าโปรแกรมตู้ถ่ายรูป (Photobooth) สไตล์เกาหลี

---

## 🚀 เทคโนโลยีที่ใช้ (Tech Stack)

โปรเจกต์นี้ถูกพัฒนาด้วยเทคโนโลยีสมัยใหม่ เพื่อประสิทธิภาพและความเร็วที่สูงสุด:

- **Framework:** [Next.js (App Router)](https://nextjs.org/) (เวอร์ชัน 16.2.0)
- **UI Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Component Library:** [shadcn/ui](https://ui.shadcn.com/) (สร้างมาจาก Radix UI)
- **Forms & Validation:** `react-hook-form` & `zod`
- **Analytics:** `@vercel/analytics`
- **Charts/Data Vis:** `recharts`
- **Fonts:** Inter & Space Grotesk (Google Fonts)

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

- `app/`: พื้นที่ส่วนของ Next.js App Router (หน้าหลัก `page.tsx`, การตั้งค่าโครงสร้างเว็บ `layout.tsx`)
- `components/`: เก็บ React Components ต่างๆ ที่นำมาใช้ซ้ำ (เช่น Navbar, Footer, Hero Section, Services Section, Photobooth Section ฯลฯ) รวมไปถึง components พื้นฐานจาก shadcn/ui
- `hooks/`: เก็บ Custom React Hooks 
- `lib/`: เก็บฟังก์ชัน Utilities ต่างๆ 
- `styles/` / `app/globals.css`: จัดการ Global Styles
- `public/`: เก็บไฟล์ Assets และรูปภาพต่างๆ 

---

## 🛠️ วิธีการติดตั้งและรันโปรเจกต์ (Getting Started)

1. **โคลนโปรเจกต์ (ถ้ามี Repository):**
   ```bash
   git clone <repository-url>
   cd rubkiancode
   ```

2. **ติดตั้ง Dependencies:**
   ```bash
   npm install
   # หรือ yarn install / pnpm install
   ```

3. **รัน Development Server:**
   ```bash
   npm run dev
   # หรือ yarn dev / pnpm dev
   ```

4. **เปิดดูเว็บไซต์ผ่านเบราว์เซอร์:**
   ไปที่ [http://localhost:3000](http://localhost:3000) เพื่อดูผลลัพธ์

---

## 📦 การ Build สำหรับ Production

```bash
npm run build
npm run start
```

---

## 📝 Scripts เพิ่มเติมที่มีในโปรเจกต์

- `npm run lint`: ใช้สำหรับการตรวจสอบ Code Quality เบื้องต้นด้วย ESLint

---
*Created and Maintained by Rub Kian Code Co.,Ltd.*
