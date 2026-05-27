'use client'

import { motion } from 'framer-motion'
import Form from '@/components/Form'
import { socialMedias } from '@/lib/data'
import { BiCopy } from 'react-icons/bi'
import { Toaster, toast } from 'sonner'
import { useSectionInView } from '@/hooks/useSectionInView'
import { useLanguage } from '@/contexts/language-context'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * index,
      duration: 0.4,
    },
  }),
}

function Contact() {
  const { ref } = useSectionInView('Contact')
  const { t } = useLanguage()

  const handleClipboardCopy = (name: string, text: string) => {
    toast.success(`${name} ${t.contact.copied}`)
    navigator.clipboard.writeText(text)
  }

  return (
    <section
      className='container max-w-6xl py-24 sm:py-32'
      id='contact'
      ref={ref}
    >
      <motion.div
        className='flex flex-col'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className='flex flex-col gap-3'>
          <h2 className='text-3xl font-bold text-sky-400 sm:text-4xl'>
            {t.contact.title}
          </h2>
          <p className='max-w-2xl text-sm text-slate-300/80 sm:text-base'>
            {t.contact.subtitle}
          </p>
        </div>
        <div className='grid grid-cols-1 items-center gap-12 pt-10 sm:pt-12 lg:grid-cols-2 lg:gap-24'>
          <Form />
          <ul className='flex flex-col gap-6 sm:text-lg'>
            {socialMedias.map(
              ({ name, link, icon: Icon, color, clipboardCopy }, index) => (
                <motion.li
                  key={name}
                  className='flex items-center justify-between gap-8 sm:gap-12'
                  variants={fadeInAnimationVariants}
                  initial='initial'
                  whileInView='animate'
                  viewport={{
                    once: true,
                  }}
                  custom={index}
                >
                  <a
                    href={link}
                    target='_blank'
                    rel='noreferrer'
                    aria-label='Social media link'
                    className='flex flex-1 items-center gap-3 brightness-110 duration-200 hover:text-sky-300'
                  >
                    <Icon className='h-10 w-10 sm:h-12 sm:w-12' color={color} />
                    <span>{name}</span>
                  </a>
                  <button
                    className='rounded-lg bg-indigo-700 p-2 ring-2 ring-indigo-600 duration-200 hover:scale-105 hover:text-sky-300'
                    aria-label='Copy to clipboard'
                    onClick={() => handleClipboardCopy(name, clipboardCopy)}
                  >
                    <BiCopy className='h-5 w-5 sm:h-6 sm:w-6' />
                  </button>
                </motion.li>
              ),
            )}
          </ul>
        </div>
      </motion.div>
      <Toaster richColors theme='dark' />
    </section>
  )
}
export default Contact
