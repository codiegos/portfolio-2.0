import { ActiveSectionContext } from '@/contexts/active-section-context'
import { useContext } from 'react'

export function useActiveSection() {
  const context = useContext(ActiveSectionContext)

  if (context === null) {
    throw new Error(
      'useActiveSectionContext must be used within an ActiveSectionContextProvider',
    )
  }

  return context
}
