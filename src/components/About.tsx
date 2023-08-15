import Image from 'next/image'
import Experience from './Experience'
import { motion } from 'framer-motion'

function About() {
  return (
    <section className='container flex max-w-6xl flex-col gap-12 pt-12'>
      <motion.div
        className='flex flex-col-reverse justify-between lg:flex-row'
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className='flex h-full flex-col justify-between gap-6 lg:items-start'>
          <h2 className='text-3xl font-bold text-pink-400 sm:text-4xl'>
            About Me
          </h2>
          <p className='sm:text-md max-w-2xl 2xl:text-lg'>
            {
              "My name is Diego Sebastián Rivera, I'm 22 years old and I am a Programmer Analyst."
            }
            <br />I consider myself proficient in both individual and teamwork
            settings. In addition to my technical skills, I stand out as someone
            who is highly attentive to details and capable of adapting to
            changes.
          </p>
          <div className='flex items-center gap-6'>
            <a
              href='#_'
              className='to group relative inline-flex items-center justify-start overflow-hidden rounded-xl bg-sky-600 bg-gradient-to-tr from-sky-500 px-6 py-3 font-medium transition-all duration-200 active:scale-95'
            >
              <span className='absolute right-0 top-0 inline-block h-4 w-4 rounded bg-sky-800 transition-all duration-[375ms] ease-in-out group-hover:-mr-4 group-hover:-mt-4'>
                <span className='absolute right-0 top-0 h-5 w-5 -translate-y-1/2 translate-x-1/2 rotate-45 bg-white' />
              </span>
              <span className='absolute bottom-0 left-0 h-full w-full -translate-x-full translate-y-full rounded-2xl bg-gradient-to-tr from-sky-600 to-sky-400 transition-all duration-300 ease-in-out group-hover:mb-12 group-hover:translate-x-0' />
              <span className='relative w-full whitespace-nowrap text-left font-semibold tracking-widest transition-colors duration-150 ease-in-out'>
                See CV
              </span>
            </a>
            <a
              href='#_'
              className='to group relative inline-flex items-center justify-start overflow-hidden rounded-xl bg-pink-600 bg-gradient-to-tr from-pink-500 px-6 py-3 font-medium transition-all duration-200 active:scale-95'
            >
              <span className='absolute bottom-0 left-0 h-full w-full -translate-x-full translate-y-full rounded-2xl bg-gradient-to-tr from-pink-600 to-pink-400 transition-all duration-300 ease-in-out group-hover:mb-12 group-hover:translate-x-0' />
              <span className='relative w-full whitespace-nowrap text-left font-semibold tracking-widest transition-colors duration-150 ease-in-out'>
                Contact Me
              </span>
            </a>
          </div>
        </div>
        <picture className='mx-auto mb-12 lg:mx-0 lg:mb-0'>
          <Image
            src={'/images/diego-rivera.webp'}
            alt='Diego-Rivera-Profile-Pic'
            className=' h-auto w-48 brightness-90 lg:w-64'
            width={250}
            height={250}
          />
        </picture>
      </motion.div>
      <Experience />
    </section>
  )
}
export default About
