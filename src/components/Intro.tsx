'use client'
import { BackgroundAnimation } from './BackgroundAnimation'
import { GradientText } from './GradientText'
import { TextAnimation } from './TextAnimation'
import { motion } from 'framer-motion'

export default function Intro() {
  return (
    <section className='flex flex-col items-center justify-center pt-16 text-center text-2xl font-black tracking-widest sm:pt-32 sm:text-3xl lg:min-h-screen lg:py-[4.5rem] lg:pt-0 lg:text-5xl'>
      <BackgroundAnimation />
      <motion.div
        className='flex flex-col gap-6'
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1>
          <GradientText
            text='HELLO,'
            className='bg-gradient-to-b from-purple-400 via-purple-500 to-secondary/40'
          />{' '}
          {"I'M"}
        </h1>
        <TextAnimation text='codiegos' />
        <h1>
          <span className='bg-gradient-to-b from-purple-400 via-purple-500 to-secondary/40 bg-clip-text text-transparent'>
            SOFTWARE DEVELOPER
          </span>
        </h1>
      </motion.div>
    </section>
  )
}
