import { motion } from 'framer-motion'
import Form from './Form'
import { socialMedias } from '@/lib/data'
import { BiCopy } from 'react-icons/bi'
import { Toaster, toast } from 'sonner'

function Contact() {
  const handleClipboardCopy = (name: string, text: string) => {
    toast.success(`${name} copied to clipboard!`)
    navigator.clipboard.writeText(text)
  }
  return (
    <section className='container max-w-6xl py-6'>
      <motion.div
        className='flex flex-col '
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h2 className='text-3xl font-bold text-pink-400 sm:text-4xl'>
          Get in touch!
        </h2>
        <div className='flex flex-col justify-between gap-36 pt-12 lg:flex-row'>
          <Form />
          <ul className='flex flex-col justify-end gap-6 sm:text-lg'>
            {socialMedias.map(
              ({ name, link, icon: Icon, color, clipboardCopy }) => (
                <li
                  key={name}
                  className='flex items-center justify-between gap-12'
                >
                  <a
                    href={link}
                    target='_blank'
                    rel='noreferrer'
                    className='flex items-center gap-3'
                  >
                    <Icon className='h-12 w-12' color={color} />

                    <span>{name}</span>
                  </a>
                  <button
                    className='rounded-lg bg-violet-900 p-1 ring-2 ring-violet-800 duration-200 hover:scale-105 hover:text-pink-300'
                    onClick={() => handleClipboardCopy(name, clipboardCopy)}
                  >
                    <BiCopy className='h-6 w-6' />
                  </button>
                </li>
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
