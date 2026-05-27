'use client'

import Image from 'next/image'
import Experience from './Experience'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/hooks/useSectionInView'
import { useActiveSection } from '@/hooks/useActiveSection'
import { MyButton } from '@/components/MyButton'
import { useLanguage } from '@/contexts/language-context'

function About() {
  const { ref } = useSectionInView('About me')
  const { setActiveSection, setTimeOfLastClick } = useActiveSection()
  const { t } = useLanguage()

  return (
    <motion.section
      className='container mt-12 flex max-w-6xl flex-col md:py-32'
      id='about'
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.article
        className='flex flex-col-reverse justify-between gap-12 lg:flex-row lg:items-center'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className='flex h-full flex-col justify-between gap-8 lg:items-start'>
          <h2 className='text-3xl font-bold text-sky-400 sm:text-4xl'>
            {t.about.title}
          </h2>
          <div className='sm:text-md flex max-w-3xl flex-col gap-4 text-slate-200/90 2xl:text-lg'>
            <p>{t.about.bio1}</p>
            <p>{t.about.bio2}</p>
          </div>

          <div className='flex flex-wrap items-center gap-6'>
            <MyButton
              text={t.about.cv}
              href='https://drive.google.com/file/d/1ac6jNh-z-vfoYi3JrIa-mGVwxzq3xJsu/view?usp=sharing'
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
        </div>
        <motion.picture
          className='relative mx-auto mb-4 block overflow-hidden rounded-full bg-linear-to-b from-slate-700 via-slate-800 to-slate-950 shadow-2xl shadow-sky-500/15 ring-2 ring-sky-400/30 lg:mx-0 lg:mb-0'
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
        >
          <Image
            src={'/images/codiegos.webp'}
            alt='Diego-Rivera-Profile-Pic'
            className='h-64 w-64 scale-x-[-1] object-contain object-bottom sm:h-72 sm:w-72'
            width={828}
            height={743}
          />
        </motion.picture>
      </motion.article>
      <Experience />
    </motion.section>
  )
}
export default About
