'use client'
import { useSectionInView } from '@/hooks/useSectionInView'
import { GradientText } from '@/components/GradientText'
import { TextAnimation } from '@/components/TextAnimation'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/language-context'

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5)
  const { t } = useLanguage()
  return (
    <section
      className='flex flex-col items-center justify-center pt-16 text-center text-2xl font-black tracking-widest sm:pt-32 sm:text-3xl lg:min-h-screen lg:bg-slate-950/20 lg:py-18 lg:pt-0 lg:text-5xl'
      id='home'
      ref={ref}
    >
      <motion.div
        className='flex flex-col gap-6'
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1>
          <GradientText
            text={t.intro.hello}
            className='bg-linear-to-b from-sky-300 via-sky-500 to-secondary/40'
          />{' '}
          {t.intro.im}
        </h1>
        <TextAnimation text='codiegos' />
        <h1>
          <span className='bg-linear-to-b from-sky-300 via-sky-500 to-secondary/40 bg-clip-text text-transparent'>
            {t.intro.role}
          </span>
        </h1>
      </motion.div>
    </section>
  )
}
