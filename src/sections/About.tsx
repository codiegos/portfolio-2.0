'use client'

import Image from 'next/image'
import Experience from './Experience'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useSectionInView } from '@/hooks/useSectionInView'
import { useRef } from 'react'
import { useActiveSection } from '@/hooks/useActiveSection'
import { MyButton } from '../components/MyButton'

function About() {
  const { ref } = useSectionInView('About me')
  const { setActiveSection, setTimeOfLastClick } = useActiveSection()

  const refScroll = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: refScroll,
    offset: ['0 1', '1 1'],
  })
  const opacityProgessAbout = useTransform(scrollYProgress, [0, 1], [0.9, 1])
  const opacityProgessExp = useTransform(scrollYProgress, [0, 1], [0, 1.5])

  return (
    <motion.section
      className='container mt-12 flex max-w-6xl flex-col md:py-32'
      id='about'
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className='flex flex-col-reverse justify-between lg:flex-row'
        ref={refScroll}
        style={{
          opacity: opacityProgessAbout,
        }}
      >
        <div className='flex h-full flex-col justify-between gap-10 lg:items-start'>
          <h2 className='text-3xl font-bold text-pink-400 sm:text-4xl'>
            About Me
          </h2>
          <div className='sm:text-md max-w-3xl text-justify 2xl:text-lg'>
            <p>
              My name is Diego Sebastián Rivera, I'm 22 years old and I am a
              Programmer Analyst.
            </p>
            <p>
              I consider myself proficient in both individual and teamwork
              settings. In addition to my technical skills, I stand out as
              someone who is highly attentive to details and capable of adapting
              to changes.
            </p>
          </div>

          <div className='flex items-center gap-6'>
            <MyButton
              href='#about'
              text='See CV'
              className='bg-sky-600 bg-gradient-to-tr from-sky-400'
            />
            <MyButton
              href='#contact'
              text='Contact Me'
              className='bg-pink-600 bg-gradient-to-tr from-pink-400'
              onClick={() => {
                setActiveSection('Contact')
                setTimeOfLastClick(Date.now())
              }}
            />
          </div>
        </div>
        <picture className='mx-auto mb-12 overflow-hidden rounded-full bg-gradient-to-b from-pink-500 to-black/50 lg:mx-0 lg:mb-0'>
          <Image
            src={'/images/codiegos.webp'}
            alt='Diego-Rivera-Profile-Pic'
            className='h-72 w-72 scale-x-[-1] object-contain object-bottom'
            width={828}
            height={743}
          />
        </picture>
      </motion.div>
      <motion.div
        ref={refScroll}
        style={{
          opacity: opacityProgessExp,
        }}
      >
        <Experience />
      </motion.div>
    </motion.section>
  )
}
export default About
