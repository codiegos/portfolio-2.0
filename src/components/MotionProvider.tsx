'use client'

import { MotionConfig } from 'motion/react'
import { ReactNode } from 'react'

// Respects the OS "reduce motion" setting: transforms are skipped,
// opacity fades stay.
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion='user'>{children}</MotionConfig>
}
