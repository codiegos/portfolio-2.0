'use client'

import { useLanguage } from '@/contexts/language-context'

function Footer() {
  const { t } = useLanguage()
  return (
    <footer className='px-4 py-10 text-center text-xs text-sky-300/80'>
      <span className='mb-2 block text-xs'>{t.footer.designed}</span>
      <p>{t.footer.stack}</p>
    </footer>
  )
}
export default Footer
