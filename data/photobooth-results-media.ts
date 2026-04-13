// ─────────────────────────────────────────────────────────────────────────────
//  photobooth-results-media.ts
//
//  THIS IS THE ONLY FILE YOU NEED TO EDIT when adding / removing photobooth result media.
//
//  HOW TO ADD MEDIA (2 steps):
//  1. Drop your file in:
//       public/videos/photobooth-results/yourfile.mp4   ← for videos
//       public/images/photobooth-results/yourfile.jpg   ← for images
//  2. Add an entry in PHOTOBOOTH_RESULTS array below.
//  3. Save & refresh the browser — done!
//
//  MediaItem types:
//    { type: "video"; src: string; label?: string; caption?: string }
//      → plays until the video ends, then auto-advances to the next item
//    { type: "image"; src: string; duration?: number; label?: string; caption?: string }
//      → shown for `duration` ms (default 5000 ms), then auto-advances
//
//  CAROUSEL BEHAVIOUR:
//    - กลาง (active)  → เล่นปกติ, opacity 100%, มี photobooth frame ครบ
//    - ซ้าย / ขวา     → จาง (opacity ~35%), ไม่เล่น, preview เท่านั้น
//    - เมื่อคลิปกลางจบ → เลื่อนขวาอัตโนมัติ (loop)
// ─────────────────────────────────────────────────────────────────────────────

export type PhotoboothResultItem =
  | {
    type: "video"
    src: string
    /** ชื่อที่แสดงบนการ์ด (optional) */
    label?: string
    /** คำบรรยายสั้น (optional) */
    caption?: string
  }
  | {
    type: "image"
    src: string
    /** ระยะเวลาแสดงรูป (ms) ก่อนเลื่อนไปอันถัดไป — default 5000 */
    duration?: number
    /** ชื่อที่แสดงบนการ์ด (optional) */
    label?: string
    /** คำบรรยายสั้น (optional) */
    caption?: string
  }

/**
 * ─── เพิ่ม / ลบ สื่อผลงานได้ที่นี่ ─────────────────────────────────────────
 * ลำดับใน array = ลำดับที่แสดงใน Carousel (วนซ้ำ)
 */
export const PHOTOBOOTH_RESULTS: PhotoboothResultItem[] = [
  // ── ตัวอย่าง video ──────────────────────────────────────────────────────
  // { type: "video", src: "/videos/photobooth-results/wedding1.mp4", label: "Shane & Michell", caption: "Bangkok Post Frame" },
  // { type: "video", src: "/videos/photobooth-results/gala1.mp4",   label: "Annual Gala",   caption: "Elegant Gold Frame" },

  // ── ตัวอย่าง image ──────────────────────────────────────────────────────
  // { type: "image", src: "/images/photobooth-results/event1.jpg", duration: 6000, label: "Corporate Event", caption: "Custom Frame" },

  // ── Placeholder (ลบออกเมื่อใส่สื่อจริงแล้ว) ──────────────────────────
  { type: "video", src: "/videos/project0/liveview1.mp4" },
  { type: "video", src: "/videos/project0/liveview2.mp4" },
  { type: "video", src: "/videos/liveview/live3.mp4" },
  { type: "video", src: "/videos/liveview/live4.mp4" },
  { type: "video", src: "/videos/liveview/live1.mp4" },
  { type: "video", src: "/videos/liveview/live5.mp4" },
  { type: "video", src: "/videos/liveview/live2.mp4" },
  { type: "video", src: "/videos/liveview/live6.mp4" },
  { type: "video", src: "/videos/liveview/live8.mp4" },
  { type: "video", src: "/videos/liveview/live9.mp4" },
  { type: "video", src: "/videos/liveview/live7.mp4" },
  { type: "video", src: "/videos/liveview/live10.mp4" },
  { type: "video", src: "/videos/liveview/live11.mp4" },
]
