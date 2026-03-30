"use client"

import { useEffect, useRef } from "react"

interface RetroNoiseProps {
  opacity?: number
  className?: string
  blendMode?: string
}

export function RetroNoise({ opacity = 0.07, className = "", blendMode = "screen" }: RetroNoiseProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number

    function resize() {
      if (!canvas) return
      canvas.width = canvas.offsetWidth || window.innerWidth
      canvas.height = canvas.offsetHeight || window.innerHeight
    }

    function draw() {
      if (!canvas || !ctx) return
      const w = canvas.width
      const h = canvas.height
      const imageData = ctx.createImageData(w, h)
      const buf = imageData.data

      for (let i = 0; i < buf.length; i += 4) {
        const v = (Math.random() * 255) | 0
        buf[i] = v
        buf[i + 1] = v
        buf[i + 2] = v
        buf[i + 3] = 255
      }
      ctx.putImageData(imageData, 0, 0)
      animationId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener("resize", resize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ opacity, mixBlendMode: blendMode as React.CSSProperties["mixBlendMode"] }}
    />
  )
}
