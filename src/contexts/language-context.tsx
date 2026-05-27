'use client'

import { translations, type Locale, type Translations } from '@/lib/translations'
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

interface LanguageContextValue {
  locale: Locale
  setLocale: Dispatch<SetStateAction<Locale>>
  toggle: () => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'portfolio-locale'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null
    const initial: Locale =
      stored === 'en' || stored === 'es'
        ? stored
        : window.navigator.language.toLowerCase().startsWith('es')
          ? 'es'
          : 'en'
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLocaleState(initial)
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
    window.localStorage.setItem(STORAGE_KEY, locale)
  }, [locale])

  const toggle = useCallback(() => {
    setLocaleState((prev) => (prev === 'en' ? 'es' : 'en'))
  }, [])

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale: setLocaleState,
        toggle,
        t: translations[locale],
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
