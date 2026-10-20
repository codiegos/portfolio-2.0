'use client'

import { useEffect, useRef } from 'react'
import { canvasImages } from '@/lib/data'

const clampSize = (width: number) =>
  Math.min(50, Math.max(30, Math.round(width / 20)))

export function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const images = canvasImages.map((source) => {
      const image = new window.Image()
      image.src = source
      return image
    })

    type Particle = {
      x: number
      y: number
      dx: number
      dy: number
      angle: number
      image: HTMLImageElement
    }

    let size = clampSize(innerWidth)
    let particles: Particle[] = []
    let frame = 0

    const draw = (p: Particle) => {
      if (!p.image.complete || p.image.naturalWidth === 0) return
      ctx.save()
      ctx.translate(p.x, p.y)
      ctx.rotate(p.angle * (Math.PI / 180))
      ctx.drawImage(p.image, -size / 2, -size / 2, size, size)
      ctx.restore()
    }

    const step = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const p of particles) {
        if (p.x < size / 2 || p.x > innerWidth - size / 2) p.dx = -p.dx
        if (p.y < size / 2 || p.y > innerHeight - size / 2) p.dy = -p.dy
        p.x += p.dx
        p.y += p.dy
        p.angle += 1
        draw(p)
      }
      frame = requestAnimationFrame(step)
    }

    const drawStill = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(draw)
    }

    const setup = () => {
      size = clampSize(innerWidth)
      canvas.width = innerWidth
      canvas.height = innerHeight
      particles = images.map((image) => ({
        x: size + Math.random() * (innerWidth - size * 2),
        y: size + Math.random() * (innerHeight - size * 2),
        dx: (Math.random() - 0.5) * 1.5,
        dy: (Math.random() - 0.5) * 1.5,
        angle: Math.random() * 360,
        image,
      }))
      if (reduceMotion.matches) drawStill()
    }

    const start = () => {
      cancelAnimationFrame(frame)
      if (!reduceMotion.matches && !document.hidden) step()
    }

    // Stop drawing while the tab is hidden or the user asks for less motion.
    const onVisibility = () =>
      document.hidden ? cancelAnimationFrame(frame) : start()
    const onMotionChange = () => {
      cancelAnimationFrame(frame)
      if (reduceMotion.matches) drawStill()
      else start()
    }

    images.forEach((image) =>
      image.addEventListener('load', () => reduceMotion.matches && drawStill()),
    )
    setup()
    start()
    window.addEventListener('resize', setup)
    document.addEventListener('visibilitychange', onVisibility)
    reduceMotion.addEventListener('change', onMotionChange)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', setup)
      document.removeEventListener('visibilitychange', onVisibility)
      reduceMotion.removeEventListener('change', onMotionChange)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden='true'
      className='bg-tertiary pointer-events-none absolute inset-x-0 top-0 -z-10 h-svh w-full opacity-20'
    />
  )
}
