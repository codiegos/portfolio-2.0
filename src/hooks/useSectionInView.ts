import { useActiveSection } from './useActiveSection'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import type { SectionName } from '@/lib/types'

export function useSectionInView(sectionName: SectionName, threshold = 0.6) {
  const { ref, inView } = useInView({
    threshold,
  })
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
