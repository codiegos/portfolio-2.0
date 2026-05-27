'use client'
import { useId } from 'react'
import { AiOutlineMenu, AiFillCloseCircle } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { links } from '@/lib/data'
import { useMenu } from '@/hooks/useMenu'
import Image from 'next/image'
import { useActiveSection } from '@/hooks/useActiveSection'
import Link from 'next/link'
import { useLanguage } from '@/contexts/language-context'

function LanguageToggle({ className = '' }: { className?: string }) {
  const { locale, toggle } = useLanguage()
  return (
    <button
      onClick={toggle}
      aria-label='Toggle language'
      className={`group relative inline-flex h-9 w-20 items-center rounded-full border border-slate-700/60 bg-slate-950/60 px-1 text-xs font-bold uppercase tracking-wider backdrop-blur-sm transition hover:border-sky-400/60 ${className}`}
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 32 }}
        className={`absolute top-1 h-7 w-9 rounded-full bg-linear-to-tr from-sky-500 to-indigo-500 shadow-lg shadow-sky-500/30 ${
          locale === 'en' ? 'left-1' : 'left-10'
        }`}
      />
      <span
        className={`relative z-10 w-9 text-center ${
          locale === 'en' ? 'text-white' : 'text-white/50'
        }`}
      >
        EN
      </span>
      <span
        className={`relative z-10 w-9 text-center ${
          locale === 'es' ? 'text-white' : 'text-white/50'
        }`}
      >
        ES
      </span>
    </button>
  )
}

function Navbar() {
  const menuId = useId()
  const { isOpen, setIsOpen } = useMenu()
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection()
  const { t } = useLanguage()

  return (
    <>
      <header
        className={
          'fixed left-0 right-0 z-50 m-auto text-lg font-semibold sm:mt-6 sm:w-fit'
        }
      >
        <motion.nav
          className='border-secondary/25 sm:rounded-full sm:border-2 sm:bg-primary/50 sm:p-2.5 sm:px-8 sm:backdrop-blur-sm'
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <label
            htmlFor={menuId}
            onClick={() => setIsOpen(!isOpen)}
            className='absolute right-4 top-4 z-10 h-6 w-6 cursor-pointer transition hover:text-sky-400 sm:hidden'
          >
            {isOpen ? (
              <AiFillCloseCircle className='h-6 w-6' />
            ) : (
              <AiOutlineMenu className='opacity h-6 w-6 rounded bg-primary/50' />
            )}
          </label>
          <picture>
            <Image
              src='/icon.png'
              width={36}
              height={36}
              alt='logo'
              className='absolute left-4 top-4 sm:hidden'
            />
          </picture>
          <input readOnly checked={isOpen} type='checkbox' id={menuId} hidden />
          <ul
            className={`flex flex-col items-center justify-center gap-8 bg-primary/95 transition-all duration-200 sm:flex sm:h-auto sm:flex-row sm:gap-6 sm:bg-transparent ${
              isOpen
                ? 'h-screen scale-100 opacity-100'
                : 'h-0 scale-0 opacity-0 sm:scale-100 sm:opacity-100'
            }`}
          >
            {links.map(({ name, hash, tKey }) => (
              <motion.li
                key={hash}
                className='cursor-pointer transition hover:text-sky-400'
                onClick={() => {
                  setIsOpen(false)
                  setActiveSection(name)
                  setTimeOfLastClick(Date.now())
                }}
              >
                <Link
                  href={hash}
                  className={`relative ${
                    name === activeSection
                      ? 'text-sky-400'
                      : 'text-white duration-200 hover:text-sky-300'
                  }`}
                >
                  {t.nav[tKey]}
                  {name === activeSection && (
                    <motion.span
                      layoutId='active-nav-underline'
                      className='absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-linear-to-r from-sky-400 to-indigo-400'
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </motion.li>
            ))}
            {isOpen && (
              <li className='mt-4 sm:hidden'>
                <LanguageToggle />
              </li>
            )}
          </ul>
        </motion.nav>
      </header>

      <motion.div
        className='fixed right-4 top-4 z-50 hidden sm:right-6 sm:top-6 sm:block'
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15 }}
      >
        <LanguageToggle />
      </motion.div>
    </>
  )
}
export default Navbar
