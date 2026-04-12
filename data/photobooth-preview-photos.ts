// ============================================================
//  Photobooth Preview Photos — กรอบ TV Mockup (4 ช่อง)
//  ============================================================
//  วิธีใช้:
//    - ใส่ path รูปภาพที่ src (เริ่มต้นจาก /  = public folder)
//    - ถ้าต้องการรูปจาก public/ ให้วางไฟล์ไว้ที่ public/photos/...
//      แล้วใส่ src ว่า "/photos/ชื่อไฟล์.jpg"
//    - ถ้าใส่ src เป็น "" (ว่าง) จะแสดง placeholder icon กล้อง
//    - alt คือคำอธิบายรูป (ใส่ไว้เพื่อ accessibility / SEO)
// ============================================================

export type PhotoSlot = {
  /** path รูปภาพ เช่น "/photos/sample1.jpg"
   *  ถ้าเว้นว่างไว้จะแสดง placeholder กล้อง */
  src: string
  /** คำอธิบายรูป */
  alt: string
}

// ─── แก้ไขรูปภาพทั้ง 4 ช่องได้ที่นี่ ───────────────────────────
export const PHOTOBOOTH_PREVIEW_PHOTOS: [PhotoSlot, PhotoSlot, PhotoSlot, PhotoSlot] = [
  // ช่องที่ 1 — บนซ้าย
  {
    src: "images/photobooth/photo1.jpg",
    alt: "ตัวอย่างรูปถ่าย 1",
  },
  // ช่องที่ 2 — บนขวา
  {
    src: "images/photobooth/photo2.jpg",
    alt: "ตัวอย่างรูปถ่าย 2",
  },
  // ช่องที่ 3 — ล่างซ้าย
  {
    src: "images/photobooth/photo3.jpg",
    alt: "ตัวอย่างรูปถ่าย 3",
  },
  // ช่องที่ 4 — ล่างขวา
  {
    src: "images/photobooth/photo4.jpg",
    alt: "ตัวอย่างรูปถ่าย 4",
  },
]
