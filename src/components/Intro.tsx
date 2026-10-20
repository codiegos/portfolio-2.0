'use client'
import { useSectionInView } from '@/hooks/useSectionInView'
import { GradientText } from '@/components/GradientText'
import { TextAnimation } from '@/components/TextAnimation'
import { motion, type Variants } from 'motion/react'
import { useLanguage } from '@/contexts/language-context'
import { HiArrowDown } from 'react-icons/hi'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 120, damping: 18 },
  },
}

export default function Intro() {
  const { ref } = useSectionInView<HTMLElement>('Home')
  const { t } = useLanguage()

  return (
    <section
      className='relative flex flex-col items-center justify-center px-4 pt-28 pb-16 text-center sm:pt-36 lg:min-h-svh lg:bg-slate-950/20 lg:py-24'
      id='home'
      ref={ref}
    >
      <motion.div
        className='flex flex-col items-center gap-6 text-2xl font-black tracking-widest sm:text-3xl lg:text-5xl'
        variants={container}
        initial='hidden'
        animate='show'
      >
        <motion.h1 variants={item}>
          <GradientText
            text={t.intro.hello}
            className='to-secondary/40 bg-linear-to-b from-sky-300 via-sky-500'
          />{' '}
          {t.intro.im}
          <span className='sr-only'> Diego Sebastián Rivera (codiegos)</span>
        </motion.h1>
        <motion.div variants={item} className='w-full max-w-3xl'>
          <TextAnimation text='codiegos' />
        </motion.div>
        <motion.p variants={item}>
          <span className='to-secondary/40 bg-linear-to-b from-sky-300 via-sky-500 bg-clip-text text-transparent'>
            {t.intro.role}
          </span>
        </motion.p>
      </motion.div>

      <motion.a
        href='#about'
        aria-label={t.nav.about}
        className='absolute bottom-8 hidden text-slate-500 transition-colors hover:text-sky-300 lg:block'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.2 },
          y: { delay: 1.2, duration: 2, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <HiArrowDown className='h-6 w-6' />
      </motion.a>
    </section>
  )
}
