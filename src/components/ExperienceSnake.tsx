'use client'

import { RefObject, useEffect, useId, useRef, useState } from 'react'
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from 'motion/react'

interface ExperienceSnakeProps {
  /** Timeline wrapper: the snake measures it and its `[data-exp-dot]` nodes. */
  targetRef: RefObject<HTMLElement | null>
}

type Point = [number, number]

const WIDTH = 200
const TAIL = 90

// Catmull-Rom through the points, written as cubic Béziers, so the curve is
// smooth and passes exactly through every node.
function smoothPath(points: Point[]) {
  if (points.length < 2) return ''
  let d = `M ${points[0][0]} ${points[0][1]}`
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i]
    const p1 = points[i]
    const p2 = points[i + 1]
    const p3 = points[i + 2] ?? p2
    const c1: Point = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6]
    const c2: Point = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6]
    d += ` C ${c1[0]} ${c1[1]} ${c2[0]} ${c2[1]} ${p2[0]} ${p2[1]}`
  }
  return d
}

// The snake touches the center at each experience and swings right, then
// left, in the space between two of them.
function buildPoints(stops: number[], height: number): Point[] {
  const center = WIDTH / 2
  const ys = [...stops, height + TAIL]
  const points: Point[] = [[center, ys[0]]]
  for (let i = 1; i < ys.length; i++) {
    const from = ys[i - 1]
    const gap = ys[i] - from
    const swing = Math.min(WIDTH * 0.38, 30 + gap * 0.12)
    const isTail = i === ys.length - 1
    const amp = isTail ? swing * 0.5 : swing
    points.push([center + amp, from + gap * 0.25])
    points.push([center - amp, from + gap * 0.75])
    points.push([center, ys[i]])
  }
  return points
}

export function ExperienceSnake({ targetRef }: ExperienceSnakeProps) {
  const gradientId = useId()
  const glowId = useId()
  const pathRef = useRef<SVGPathElement>(null)
  const [shape, setShape] = useState<{ d: string; stops: number[]; h: number }>(
    { d: '', stops: [], h: 0 },
  )
  const [reached, setReached] = useState(0)

  // Re-measure whenever the timeline changes size ("Read more" included).
  useEffect(() => {
    const el = targetRef.current
    if (!el) return
    const measure = () => {
      const top = el.getBoundingClientRect().top
      const stops = [...el.querySelectorAll<HTMLElement>('[data-exp-dot]')].map(
        (dot) => {
          const r = dot.getBoundingClientRect()
          return r.top - top + r.height / 2
        },
      )
      const h = el.offsetHeight
      setShape({ d: smoothPath(buildPoints(stops, h)), stops, h })
    }
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(el)
    return () => observer.disconnect()
  }, [targetRef])

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start 75%', 'end 60%'],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })
  const headX = useMotionValue(WIDTH / 2)
  const headY = useMotionValue(0)

  const placeHead = (value: number) => {
    const path = pathRef.current
    if (!path || !shape.d) return
    const point = path.getPointAtLength(value * path.getTotalLength())
    headX.set(point.x)
    headY.set(point.y)
    setReached(shape.stops.filter((y) => y <= point.y + 1).length)
  }

  useMotionValueEvent(progress, 'change', placeHead)
  // Keep the head on the curve when the curve itself changes.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => placeHead(progress.get()), [shape])

  if (!shape.d) return null
  const total = shape.h + TAIL

  return (
    <svg
      aria-hidden='true'
      width={WIDTH}
      height={total}
      viewBox={`0 0 ${WIDTH} ${total}`}
      className='pointer-events-none absolute top-0 right-0 hidden overflow-visible xl:block'
      style={{
        maskImage: `linear-gradient(to bottom, #000 calc(100% - ${TAIL}px), transparent)`,
        WebkitMaskImage: `linear-gradient(to bottom, #000 calc(100% - ${TAIL}px), transparent)`,
      }}
    >
      <defs>
        <linearGradient id={gradientId} x1='0' y1='0' x2='0' y2='1'>
          <stop offset='0' stopColor='hsl(199, 89%, 55%)' />
          <stop offset='1' stopColor='hsl(234, 89%, 62%)' />
        </linearGradient>
        <filter id={glowId} x='-50%' y='-50%' width='200%' height='200%'>
          <feGaussianBlur stdDeviation='5' result='blur' />
          <feMerge>
            <feMergeNode in='blur' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
      </defs>

      {/* The road ahead: faint, dashed. Also used to measure the curve. */}
      <path
        ref={pathRef}
        d={shape.d}
        fill='none'
        stroke='rgb(100 116 139 / 0.25)'
        strokeWidth='2'
        strokeDasharray='6 10'
        strokeLinecap='round'
      />
      {/* The snake: drawn as you scroll. */}
      <motion.path
        d={shape.d}
        fill='none'
        stroke={`url(#${gradientId})`}
        strokeWidth='6'
        strokeLinecap='round'
        filter={`url(#${glowId})`}
        style={{ pathLength: progress }}
      />
      {shape.stops.map((y, i) => (
        <motion.circle
          key={i}
          cx={WIDTH / 2}
          cy={y}
          r={7}
          fill='#050810'
          strokeWidth='3'
          animate={{
            stroke: i < reached ? 'hsl(199, 89%, 60%)' : 'rgb(71 85 105)',
            scale: i < reached ? 1.15 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
      ))}
      <motion.circle
        cx={headX}
        cy={headY}
        r={9}
        fill='hsl(199, 89%, 70%)'
        filter={`url(#${glowId})`}
      />
    </svg>
  )
}
