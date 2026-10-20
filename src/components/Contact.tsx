'use client'

import { motion, type Variants } from 'motion/react'
import Form from '@/components/Form'
import { socialMedias } from '@/lib/data'
import { BiCopy } from 'react-icons/bi'
import { toast } from 'sonner'
import { useSectionInView } from '@/hooks/useSectionInView'
import { useLanguage } from '@/contexts/language-context'

const fadeInAnimationVariants: Variants = {
  initial: {
    opacity: 0,
    y: 24,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.06 * index,
      duration: 0.4,
    },
  }),
}

function Contact() {
  const { ref } = useSectionInView<HTMLElement>('Contact')
  const { t } = useLanguage()

  const handleClipboardCopy = async (name: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      toast.success(`${name} ${t.contact.copied}`)
    } catch {
      toast.error(t.contact.error)
    }
  }

  return (
    <section
      className='container max-w-6xl scroll-mt-16 py-24 sm:py-32'
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
          <p className='max-w-2xl text-sm text-pretty text-slate-300/80 sm:text-base'>
            {t.contact.subtitle}
          </p>
        </div>
        <div className='grid grid-cols-1 items-stretch gap-12 pt-10 sm:pt-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-20'>
          <Form />
          <ul className='flex h-full flex-col divide-y divide-slate-800 rounded-2xl border border-slate-700/40 bg-slate-950/40'>
            {socialMedias.map(
              (
                { name, handle, link, icon: Icon, color, clipboardCopy },
                index,
              ) => (
                <motion.li
                  key={name}
                  className='flex flex-1 items-center gap-2 px-3 py-2 sm:px-4'
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
                    aria-label={`${t.contact.open} ${name}`}
                    className='group flex min-w-0 flex-1 items-center gap-3 rounded-lg p-2 transition-colors hover:bg-slate-900/60'
                  >
                    <Icon
                      aria-hidden='true'
                      className='h-8 w-8 shrink-0 transition-transform group-hover:scale-110'
                      color={color}
                    />
                    <span className='flex min-w-0 flex-col'>
                      <span className='font-semibold text-slate-100 group-hover:text-sky-300'>
                        {name}
                      </span>
                      <span className='truncate text-sm text-slate-400'>
                        {handle}
                      </span>
                    </span>
                  </a>
                  <button
                    type='button'
                    className='rounded-lg p-2.5 text-slate-400 ring-1 ring-slate-700/60 transition hover:text-sky-300 hover:ring-sky-400/50 active:scale-95'
                    aria-label={`${t.contact.copy} ${name}`}
                    title={`${t.contact.copy} ${name}`}
                    onClick={() => handleClipboardCopy(name, clipboardCopy)}
                  >
                    <BiCopy className='h-5 w-5' />
                  </button>
                </motion.li>
              ),
            )}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}
export default Contact
