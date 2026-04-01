/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  lang-config.ts — ปรับ typography แต่ละภาษาที่นี่ที่เดียว  ║
 * ║  ทุกค่าในไฟล์นี้ถูก apply จริงในทุก section ของเว็บ        ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 * clamp(min, preferred, max)
 *   min       = ขนาดบน Mobile (375–430px)
 *   preferred = สเกลตาม viewport — ค่ากลาง Mac 1440 ↔ PC 1920
 *   max       = ขนาดสูงสุดที่ไม่หลุดจอ Desktop 16:9
 */

import type { Lang } from './language-context'

export interface LangTypographyConfig {

  // ════════════════════════════════════════════
  // FONT FAMILY
  // ════════════════════════════════════════════
  /** Font family สำหรับ heading (h1/h2) */
  fontFamily: string

  // ════════════════════════════════════════════
  // HERO SECTION
  // ════════════════════════════════════════════
  /** ขนาด h1 หลัก "ระบบซอฟต์แวร์ โฟโต้บูธ" */
  heroH1: string
  /** ขนาด h2 "อันดับ 1 ในไทย" */
  heroH2: string
  /** ขนาด subtitle paragraph */
  heroSubtitle: string
  /** Line-height ของ h1 (ภาษา script ต้องการมากกว่า) */
  heroLineHeight: string
  /** ขนาดตัวเลขใน stat card เช่น "1500+" */
  heroStatNumber: string
  /** ขนาด label ใน stat card เช่น "อีเวนต์ที่ไว้วางใจ" */
  heroStatLabel: string
  /** Padding ของกรอบ stat card */
  heroStatPadding: string
  /** Padding ปุ่ม CTA หน้า hero */
  heroBtnPadding: string

  // ════════════════════════════════════════════
  // SECTION HEADINGS
  // (ใช้ร่วมกันใน Services / Showcase / Photobooth / Contact)
  // ════════════════════════════════════════════
  /** ขนาด badge/label เล็กๆ บน section header */
  sectionBadge: string
  /** ขนาด h2 หัว section */
  sectionH2: string
  /** ขนาด description paragraph ใต้ h2 */
  sectionDesc: string
  /** Line-height paragraphs ใน section */
  sectionLineHeight: string
  /** ขนาด card/item title (h3) */
  sectionCardTitle: string
  /** ขนาด card/item body text */
  sectionCardBody: string
  /** Padding ปุ่ม CTA ใน section */
  sectionBtnPadding: string

  // ════════════════════════════════════════════
  // LETTER SPACING
  // ════════════════════════════════════════════
  /** Hero h1 */
  trackingHeroH1: string
  /** Section h2 */
  trackingSectionH2: string
  /** Body / description text */
  trackingBody: string
  /** Badge / label */
  trackingLabel: string
  /** ปุ่ม CTA */
  trackingButton: string
}

// ╔══════════════════════════════════════════════════════════════╗
// ║              แก้ไขค่าแต่ละภาษาด้านล่างนี้                   ║
// ╚══════════════════════════════════════════════════════════════╝

export const LANG_TYPOGRAPHY: Record<Lang, LangTypographyConfig> = {

  // ─────────────────────────────────────────────────────────────
  // 🇹🇭 ไทย
  //  h1 แบ่ง 2 บรรทัด → ใช้ขนาดใหญ่ได้มาก
  //  lineHeight 1.3 → สระไม่ชนกัน
  //  sectionH2 ใหญ่เต็มที่ใน max-w-7xl container
  // ─────────────────────────────────────────────────────────────
  th: {
    fontFamily: 'var(--font-prompt), Prompt, sans-serif',

    heroH1: 'clamp(1.75rem, 6vw, 7rem)',
    heroH2: 'clamp(1.1rem,  2.4vw, 2.75rem)',
    heroSubtitle: 'clamp(0.875rem,1.1vw, 1.125rem)',
    heroLineHeight: '1.25',
    heroStatNumber: 'clamp(1.25rem, 1.5vw, 1.75rem)',
    heroStatLabel: 'clamp(0.65rem, 0.75vw,0.8rem)',
    heroStatPadding: 'clamp(0.625rem,0.8vw, 0.9375rem)',
    heroBtnPadding: 'clamp(0.65rem, 0.8vw, 0.875rem) clamp(1.25rem, 1.75vw, 2rem)',

    sectionBadge: 'clamp(0.8rem,   0.9vw,  0.9375rem)',
    sectionH2: 'clamp(1.875rem, 4vw,    4.5rem)',
    sectionDesc: 'clamp(0.95rem,  1.15vw, 1.1875rem)',
    sectionLineHeight: '1.7',
    sectionCardTitle: 'clamp(1rem,     1.2vw,  1.3125rem)',
    sectionCardBody: 'clamp(0.875rem, 1vw,    1.0rem)',
    sectionBtnPadding: 'clamp(0.7rem, 0.875vw, 0.9375rem) clamp(1.375rem, 1.875vw, 2.125rem)',

    trackingHeroH1: '0.05em',
    trackingSectionH2: '0.05em',
    trackingBody: '0.02em',
    trackingLabel: '0.07em',
    trackingButton: '0.05em',
  },

  // ─────────────────────────────────────────────────────────────
  // 🇬🇧 English
  //  Latin ตัวแคบ → ใช้ขนาดใหญ่ได้มาก
  // ─────────────────────────────────────────────────────────────
  en: {
    fontFamily: 'var(--font-prompt), Prompt, sans-serif',

    heroH1: 'clamp(2rem,    5.5vw, 6.25rem)',
    heroH2: 'clamp(1.1rem,  2.2vw, 2.5rem)',
    heroSubtitle: 'clamp(0.875rem,1.1vw, 1.125rem)',
    heroLineHeight: '1.15',
    heroStatNumber: 'clamp(1.25rem, 1.5vw, 1.75rem)',
    heroStatLabel: 'clamp(0.65rem, 0.75vw,0.8rem)',
    heroStatPadding: 'clamp(0.625rem,0.8vw, 0.9375rem)',
    heroBtnPadding: 'clamp(0.65rem, 0.8vw, 0.875rem) clamp(1.25rem, 1.75vw, 2rem)',

    sectionBadge: 'clamp(0.8rem,   0.9vw,  0.9375rem)',
    sectionH2: 'clamp(2rem,     4.25vw, 4.75rem)',
    sectionDesc: 'clamp(0.95rem,  1.15vw, 1.1875rem)',
    sectionLineHeight: '1.6',
    sectionCardTitle: 'clamp(1.0625rem,1.2vw,  1.3125rem)',
    sectionCardBody: 'clamp(0.875rem, 1vw,    1.0rem)',
    sectionBtnPadding: 'clamp(0.7rem, 0.875vw, 0.9375rem) clamp(1.375rem, 1.875vw, 2.125rem)',

    trackingHeroH1: '0',
    trackingSectionH2: '0',
    trackingBody: '0',
    trackingLabel: '0.02em',
    trackingButton: '0.025em',
  },

  // ─────────────────────────────────────────────────────────────
  // 🇱🇦 ລາວ (ลาว)
  //  script ใกล้เคียงไทย ใช้ขนาดใหญ่ได้เกือบเท่าไทย
  //  lineHeight 1.5 → สระไม่ชน
  // ─────────────────────────────────────────────────────────────
  lo: {
    fontFamily: '"Noto Sans Lao", var(--font-prompt), sans-serif',

    heroH1:          'clamp(1.75rem, 6vw,   6.5rem)',
    heroH2:          'clamp(1.125rem,3vw,   3.5rem)',
    heroSubtitle:    'clamp(0.95rem, 1.35vw,1.3125rem)',
    heroLineHeight:  '1.5',
    heroStatNumber:  'clamp(1.25rem, 1.6vw, 1.875rem)',
    heroStatLabel:   'clamp(0.675rem,0.8vw, 0.875rem)',
    heroStatPadding: 'clamp(0.625rem,0.8vw, 0.9375rem)',
    heroBtnPadding:  'clamp(0.7rem, 0.875vw, 0.9375rem) clamp(1.375rem, 1.75vw, 2rem)',

    sectionBadge:      'clamp(0.875rem, 1.0vw,  1.0625rem)',
    sectionH2:         'clamp(2rem,     5.25vw, 6rem)',
    sectionDesc:       'clamp(1rem,     1.25vw, 1.3125rem)',
    sectionLineHeight: '1.8',
    sectionCardTitle:  'clamp(1.125rem, 1.35vw, 1.5625rem)',
    sectionCardBody:   'clamp(0.95rem,  1.1vw,  1.1875rem)',
    sectionBtnPadding: 'clamp(0.75rem, 0.95vw, 1.0625rem) clamp(1.5rem, 2vw, 2.25rem)',

    trackingHeroH1:    '0.04em',
    trackingSectionH2: '0.04em',
    trackingBody:      '0.02em',
    trackingLabel:     '0.06em',
    trackingButton:    '0.04em',
  },

  // ─────────────────────────────────────────────────────────────
  // 🇲🇲 မြန်မာ (พม่า)
  //  ตัวอักษรสูงมาก lineHeight ต้องสูงที่สุด
  //  ขนาดเล็กกว่าภาษาอื่นเพื่อป้องกัน overflow ในแนวตั้ง
  // ─────────────────────────────────────────────────────────────
  my: {
    fontFamily: '"Noto Sans Myanmar", Padauk, Myanmar Text, sans-serif',

    heroH1:          'clamp(1.25rem, 4.75vw, 5.5rem)',
    heroH2:          'clamp(1rem,    2.2vw,  2.75rem)',
    heroSubtitle:    'clamp(0.875rem,1.1vw,  1.125rem)',
    heroLineHeight:  '1.75',
    heroStatNumber:  'clamp(1.125rem,1.45vw, 1.6875rem)',
    heroStatLabel:   'clamp(0.625rem,0.725vw,0.775rem)',
    heroStatPadding: 'clamp(0.575rem,0.725vw,0.875rem)',
    heroBtnPadding:  'clamp(0.625rem,0.775vw,0.875rem) clamp(1.125rem, 1.45vw, 1.6875rem)',

    sectionBadge:      'clamp(0.8rem,   0.9vw,  0.9375rem)',
    sectionH2:         'clamp(1.625rem, 3.75vw, 4.25rem)',
    sectionDesc:       'clamp(0.9rem,   1.075vw,1.125rem)',
    sectionLineHeight: '1.9',
    sectionCardTitle:  'clamp(0.95rem,  1.1vw,  1.1875rem)',
    sectionCardBody:   'clamp(0.875rem, 0.975vw,1.0rem)',
    sectionBtnPadding: 'clamp(0.65rem, 0.825vw, 0.9375rem) clamp(1.25rem, 1.625vw, 1.875rem)',

    trackingHeroH1:    '0',
    trackingSectionH2: '0',
    trackingBody:      '0',
    trackingLabel:     '0.02em',
    trackingButton:    '0.02em',
  },

  // ─────────────────────────────────────────────────────────────
  // 🇻🇳 Tiếng Việt (เวียดนาม)
  //  Latin + diacritics → lineHeight 1.35 เพื่อรองรับตัวเครื่องหมาย
  // ─────────────────────────────────────────────────────────────
  vi: {
    fontFamily: 'var(--font-prompt), Prompt, sans-serif',

    heroH1: 'clamp(1.75rem, 4.75vw,5.5rem)',
    heroH2: 'clamp(1.05rem, 2.2vw, 2.5rem)',
    heroSubtitle: 'clamp(0.875rem,1.1vw, 1.125rem)',
    heroLineHeight: '1.35',
    heroStatNumber: 'clamp(1.25rem, 1.5vw, 1.75rem)',
    heroStatLabel: 'clamp(0.65rem, 0.75vw,0.8rem)',
    heroStatPadding: 'clamp(0.625rem,0.8vw, 0.9375rem)',
    heroBtnPadding: 'clamp(0.65rem, 0.8vw, 0.875rem) clamp(1.25rem, 1.75vw, 2rem)',

    sectionBadge: 'clamp(0.8rem,   0.9vw,  0.9375rem)',
    sectionH2: 'clamp(1.875rem, 4vw,    4.5rem)',
    sectionDesc: 'clamp(0.95rem,  1.15vw, 1.1875rem)',
    sectionLineHeight: '1.7',
    sectionCardTitle: 'clamp(1rem,     1.2vw,  1.3125rem)',
    sectionCardBody: 'clamp(0.875rem, 1vw,    1.0rem)',
    sectionBtnPadding: 'clamp(0.7rem, 0.875vw, 0.9375rem) clamp(1.375rem, 1.875vw, 2.125rem)',

    trackingHeroH1: '0',
    trackingSectionH2: '0',
    trackingBody: '0',
    trackingLabel: '0.025em',
    trackingButton: '0.025em',
  },

  // ─────────────────────────────────────────────────────────────
  // 🇰🇭 ខ្មែរ (เขมร)
  //  ตัวอักษรสูงที่สุด lineHeight สูงสุด
  //  ขนาดเล็กกว่าพม่าเล็กน้อย
  // ─────────────────────────────────────────────────────────────
  km: {
    fontFamily: '"Noto Sans Khmer", Khmer UI, sans-serif',

    heroH1:          'clamp(1.25rem, 5vw,   5.75rem)',
    heroH2:          'clamp(1rem,    2.5vw, 2.875rem)',
    heroSubtitle:    'clamp(0.9rem,  1.2vw, 1.25rem)',
    heroLineHeight:  '1.75',
    heroStatNumber:  'clamp(1.125rem,1.5vw, 1.75rem)',
    heroStatLabel:   'clamp(0.65rem, 0.75vw,0.8rem)',
    heroStatPadding: 'clamp(0.6rem,  0.8vw, 0.9375rem)',
    heroBtnPadding:  'clamp(0.65rem, 0.8vw, 0.875rem) clamp(1.25rem, 1.625vw, 1.875rem)',

    sectionBadge:      'clamp(0.85rem,  0.975vw,1.0625rem)',
    sectionH2:         'clamp(1.875rem, 4.25vw, 5rem)',
    sectionDesc:       'clamp(0.95rem,  1.15vw, 1.25rem)',
    sectionLineHeight: '1.95',
    sectionCardTitle:  'clamp(1.0rem,   1.2vw,  1.375rem)',
    sectionCardBody:   'clamp(0.9rem,   1.05vw, 1.0625rem)',
    sectionBtnPadding: 'clamp(0.7rem, 0.875vw, 0.9375rem) clamp(1.375rem, 1.875vw, 2.125rem)',

    trackingHeroH1:    '0.02em',
    trackingSectionH2: '0.02em',
    trackingBody:      '0.01em',
    trackingLabel:     '0.04em',
    trackingButton:    '0.02em',
  },

  // ─────────────────────────────────────────────────────────────
  // 🇲🇾 Bahasa Malaysia
  //  Latin ขนาดใหญ่ได้เต็มที่ใกล้เคียง English
  // ─────────────────────────────────────────────────────────────
  ms: {
    fontFamily: 'var(--font-prompt), Prompt, sans-serif',

    heroH1: 'clamp(1.875rem,5.25vw,6rem)',
    heroH2: 'clamp(1.1rem,  2.25vw,2.625rem)',
    heroSubtitle: 'clamp(0.875rem,1.1vw, 1.125rem)',
    heroLineHeight: '1.2',
    heroStatNumber: 'clamp(1.25rem, 1.5vw, 1.75rem)',
    heroStatLabel: 'clamp(0.65rem, 0.75vw,0.8rem)',
    heroStatPadding: 'clamp(0.625rem,0.8vw, 0.9375rem)',
    heroBtnPadding: 'clamp(0.65rem, 0.8vw, 0.875rem) clamp(1.25rem, 1.75vw, 2rem)',

    sectionBadge: 'clamp(0.8rem,   0.9vw,  0.9375rem)',
    sectionH2: 'clamp(2rem,     4.25vw, 4.75rem)',
    sectionDesc: 'clamp(0.95rem,  1.15vw, 1.1875rem)',
    sectionLineHeight: '1.6',
    sectionCardTitle: 'clamp(1.0625rem,1.2vw,  1.3125rem)',
    sectionCardBody: 'clamp(0.875rem, 1vw,    1.0rem)',
    sectionBtnPadding: 'clamp(0.7rem, 0.875vw, 0.9375rem) clamp(1.375rem, 1.875vw, 2.125rem)',

    trackingHeroH1: '0',
    trackingSectionH2: '0',
    trackingBody: '0',
    trackingLabel: '0.025em',
    trackingButton: '0.025em',
  },

  // ─────────────────────────────────────────────────────────────
  // 🇮🇩 Bahasa Indonesia
  //  คำยาวกว่า Malay → max เล็กกว่าเล็กน้อยเพื่อป้องกัน wrap
  // ─────────────────────────────────────────────────────────────
  id: {
    fontFamily: 'var(--font-prompt), Prompt, sans-serif',

    heroH1: 'clamp(1.625rem,4.75vw,5.5rem)',
    heroH2: 'clamp(1.05rem, 2.1vw, 2.375rem)',
    heroSubtitle: 'clamp(0.875rem,1.1vw, 1.125rem)',
    heroLineHeight: '1.2',
    heroStatNumber: 'clamp(1.25rem, 1.5vw, 1.75rem)',
    heroStatLabel: 'clamp(0.65rem, 0.75vw,0.8rem)',
    heroStatPadding: 'clamp(0.625rem,0.8vw, 0.9375rem)',
    heroBtnPadding: 'clamp(0.65rem, 0.8vw, 0.875rem) clamp(1.25rem, 1.75vw, 2rem)',

    sectionBadge: 'clamp(0.8rem,   0.9vw,  0.9375rem)',
    sectionH2: 'clamp(1.875rem, 4vw,    4.5rem)',
    sectionDesc: 'clamp(0.95rem,  1.15vw, 1.1875rem)',
    sectionLineHeight: '1.6',
    sectionCardTitle: 'clamp(1.0rem,   1.2vw,  1.3125rem)',
    sectionCardBody: 'clamp(0.875rem, 1vw,    1.0rem)',
    sectionBtnPadding: 'clamp(0.7rem, 0.875vw, 0.9375rem) clamp(1.375rem, 1.875vw, 2.125rem)',

    trackingHeroH1: '0',
    trackingSectionH2: '0',
    trackingBody: '0',
    trackingLabel: '0.025em',
    trackingButton: '0.025em',
  },

  // ─────────────────────────────────────────────────────────────
  // 🇵🇭 Filipino
  //  คำยาวมาก → heroH1 max เล็กกว่า English เล็กน้อย
  // ─────────────────────────────────────────────────────────────
  fil: {
    fontFamily: 'var(--font-prompt), Prompt, sans-serif',

    heroH1: 'clamp(1.75rem, 5vw,   5.75rem)',
    heroH2: 'clamp(1.1rem,  2.2vw, 2.5rem)',
    heroSubtitle: 'clamp(0.875rem,1.1vw, 1.125rem)',
    heroLineHeight: '1.2',
    heroStatNumber: 'clamp(1.25rem, 1.5vw, 1.75rem)',
    heroStatLabel: 'clamp(0.65rem, 0.75vw,0.8rem)',
    heroStatPadding: 'clamp(0.625rem,0.8vw, 0.9375rem)',
    heroBtnPadding: 'clamp(0.65rem, 0.8vw, 0.875rem) clamp(1.25rem, 1.75vw, 2rem)',

    sectionBadge: 'clamp(0.8rem,   0.9vw,  0.9375rem)',
    sectionH2: 'clamp(2rem,     4.25vw, 4.75rem)',
    sectionDesc: 'clamp(0.95rem,  1.15vw, 1.1875rem)',
    sectionLineHeight: '1.6',
    sectionCardTitle: 'clamp(1.0rem,   1.2vw,  1.3125rem)',
    sectionCardBody: 'clamp(0.875rem, 1vw,    1.0rem)',
    sectionBtnPadding: 'clamp(0.7rem, 0.875vw, 0.9375rem) clamp(1.375rem, 1.875vw, 2.125rem)',

    trackingHeroH1: '0',
    trackingSectionH2: '0',
    trackingBody: '0',
    trackingLabel: '0.025em',
    trackingButton: '0.025em',
  },

  // ─────────────────────────────────────────────────────────────
  // 🇸🇬 Singapore English
  //  เหมือน English — ใช้ค่าเท่ากันทุกอย่าง
  // ─────────────────────────────────────────────────────────────
  sg: {
    fontFamily: 'var(--font-prompt), Prompt, sans-serif',

    heroH1: 'clamp(2rem,    5.5vw, 6.25rem)',
    heroH2: 'clamp(1.1rem,  2.2vw, 2.5rem)',
    heroSubtitle: 'clamp(0.875rem,1.1vw, 1.125rem)',
    heroLineHeight: '1.15',
    heroStatNumber: 'clamp(1.25rem, 1.5vw, 1.75rem)',
    heroStatLabel: 'clamp(0.65rem, 0.75vw,0.8rem)',
    heroStatPadding: 'clamp(0.625rem,0.8vw, 0.9375rem)',
    heroBtnPadding: 'clamp(0.65rem, 0.8vw, 0.875rem) clamp(1.25rem, 1.75vw, 2rem)',

    sectionBadge: 'clamp(0.8rem,   0.9vw,  0.9375rem)',
    sectionH2: 'clamp(2rem,     4.25vw, 4.75rem)',
    sectionDesc: 'clamp(0.95rem,  1.15vw, 1.1875rem)',
    sectionLineHeight: '1.6',
    sectionCardTitle: 'clamp(1.0625rem,1.2vw,  1.3125rem)',
    sectionCardBody: 'clamp(0.875rem, 1vw,    1.0rem)',
    sectionBtnPadding: 'clamp(0.7rem, 0.875vw, 0.9375rem) clamp(1.375rem, 1.875vw, 2.125rem)',

    trackingHeroH1: '0',
    trackingSectionH2: '0',
    trackingBody: '0',
    trackingLabel: '0.02em',
    trackingButton: '0.025em',
  },

  // ─────────────────────────────────────────────────────────────
  // 🇧🇳 Brunei Malay
  //  ใกล้เคียง Malaysia — ใช้ค่าเดียวกัน
  // ─────────────────────────────────────────────────────────────
  bn: {
    fontFamily: 'var(--font-prompt), Prompt, sans-serif',

    heroH1: 'clamp(1.875rem,5.25vw,6rem)',
    heroH2: 'clamp(1.1rem,  2.25vw,2.625rem)',
    heroSubtitle: 'clamp(0.875rem,1.1vw, 1.125rem)',
    heroLineHeight: '1.2',
    heroStatNumber: 'clamp(1.25rem, 1.5vw, 1.75rem)',
    heroStatLabel: 'clamp(0.65rem, 0.75vw,0.8rem)',
    heroStatPadding: 'clamp(0.625rem,0.8vw, 0.9375rem)',
    heroBtnPadding: 'clamp(0.65rem, 0.8vw, 0.875rem) clamp(1.25rem, 1.75vw, 2rem)',

    sectionBadge: 'clamp(0.8rem,   0.9vw,  0.9375rem)',
    sectionH2: 'clamp(2rem,     4.25vw, 4.75rem)',
    sectionDesc: 'clamp(0.95rem,  1.15vw, 1.1875rem)',
    sectionLineHeight: '1.6',
    sectionCardTitle: 'clamp(1.0625rem,1.2vw,  1.3125rem)',
    sectionCardBody: 'clamp(0.875rem, 1vw,    1.0rem)',
    sectionBtnPadding: 'clamp(0.7rem, 0.875vw, 0.9375rem) clamp(1.375rem, 1.875vw, 2.125rem)',

    trackingHeroH1: '0',
    trackingSectionH2: '0',
    trackingBody: '0',
    trackingLabel: '0.025em',
    trackingButton: '0.025em',
  },
}
