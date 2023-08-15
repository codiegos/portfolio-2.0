import { motion } from 'framer-motion'
import Form from './Form'

function Contact() {
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
        <div className='flex flex-col justify-between gap-6 lg:flex-row'>
          <Form />
          <div className='w-full'>
            <h5>My main socials</h5>
            <ul>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Gmail</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
export default Contact
