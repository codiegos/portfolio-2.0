'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import Experience from './Experience'
import { useSectionInView } from '@/hooks/useSectionInView'
import { useActiveSection } from '@/hooks/useActiveSection'
import { MyButton } from '@/components/MyButton'
import { useLanguage } from '@/contexts/language-context'
import { CV_URL } from '@/lib/data'

function Portrait({ alt }: { alt: string }) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  // Slow drift inside the frame while the page scrolls past it.
  const y = useTransform(scrollYProgress, [0, 1], ['-4%', '4%'])

  return (
    <motion.figure
      ref={ref}
      className='relative mx-auto aspect-4/5 w-64 shrink-0 overflow-hidden rounded-4xl shadow-2xl ring-1 shadow-sky-500/20 ring-sky-300/30 sm:w-72 lg:mx-0 lg:w-80'
      initial={{ opacity: 0, y: 40, rotate: -2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ type: 'spring', stiffness: 90, damping: 16 }}
      whileHover={{ rotate: 1.5, scale: 1.02 }}
    >
      <motion.div className='absolute -inset-[5%]' style={{ y }}>
        <Image
          src='/images/diego-rivera.webp'
          alt={alt}
          fill
          sizes='(min-width: 1024px) 22rem, 20rem'
          className='object-cover'
          priority
        />
      </motion.div>
      <div className='pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/50 via-transparent to-transparent' />
    </motion.figure>
  )
}

function About() {
  const { ref } = useSectionInView<HTMLElement>('About me')
  const { setActiveSection, setTimeOfLastClick } = useActiveSection()
  const { t } = useLanguage()

  return (
    <section
      className='container flex max-w-6xl scroll-mt-16 flex-col pt-16 md:py-32'
      id='about'
      ref={ref}
    >
      <article className='flex flex-col-reverse justify-between gap-12 lg:flex-row lg:items-center'>
        <motion.div
          className='flex flex-col gap-8 lg:items-start'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className='text-3xl font-bold text-sky-400 sm:text-4xl'>
            {t.about.title}
          </h2>
          <div className='flex max-w-2xl flex-col gap-4 text-base leading-relaxed text-pretty text-slate-200/90 sm:text-lg'>
            <p>{t.about.bio1}</p>
            <p>{t.about.bio2}</p>
          </div>

          <div className='flex flex-wrap items-center gap-6'>
            <MyButton
              text={t.about.cv}
              href={CV_URL}
              className='bg-sky-700 bg-linear-to-tr from-sky-500'
              target='_blank'
              rel='noopener noreferrer'
            />
            <MyButton
              href='#contact'
              text={t.about.contact}
              className='bg-slate-800 bg-linear-to-tr from-indigo-500'
              onClick={() => {
                setActiveSection('Contact')
                setTimeOfLastClick(Date.now())
              }}
            />
          </div>
        </motion.div>
        <Portrait alt={t.about.photoAlt} />
      </article>
      <Experience />
    </section>
  )
}
export default About
