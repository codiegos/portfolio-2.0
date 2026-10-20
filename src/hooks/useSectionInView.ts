import { useActiveSection } from './useActiveSection'
import { useEffect, useRef } from 'react'
import { useInView } from 'motion/react'
import type { SectionName } from '@/lib/types'

// A section counts as active while it crosses the middle band of the
// viewport, so tall sections (About + Experience) also register.
const MIDDLE_BAND = '-45% 0px -45% 0px'

export function useSectionInView<T extends Element = HTMLElement>(
  sectionName: SectionName,
) {
  const ref = useRef<T>(null)
  const inView = useInView(ref, { margin: MIDDLE_BAND })
  const { setActiveSection, timeOfLastClick } = useActiveSection()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName)
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName])

  return {
    ref,
    inView,
  }
}
