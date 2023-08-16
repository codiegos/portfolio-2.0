'use client'
import { useId } from 'react'
import { AiOutlineMenu, AiFillCloseCircle } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { links } from '@/lib/data'
import { MenuItem } from './MenuItem'
import { useMenu } from '@/hooks/useMenu'
import Image from 'next/image'

function Header() {
  const menuId = useId()
  const { isOpen, setIsOpen } = useMenu()
  return (
    <header
      className={
        'fixed left-0 right-0 z-10 m-auto text-lg font-semibold sm:mt-6 sm:w-fit sm:backdrop-blur-sm '
      }
    >
      <motion.nav
        className='border-secondary/25 sm:rounded-full sm:border-2 sm:bg-primary/50 sm:p-2.5 sm:px-8'
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <label
          htmlFor={menuId}
          onClick={() => setIsOpen(!isOpen)}
          className='absolute right-4 top-4 z-10 h-6 w-6 cursor-pointer transition hover:text-pink-400 sm:hidden'
        >
          {isOpen ? (
            <AiFillCloseCircle className='h-6 w-6' />
          ) : (
            <AiOutlineMenu className='opacity h-6 w-6 rounded bg-primary/50' />
          )}
        </label>
        <Image
          src='/icon.png'
          width={36}
          height={36}
          alt='logo'
          className='absolute left-4 top-4 sm:hidden'
        />
        <input readOnly checked={isOpen} type='checkbox' id={menuId} hidden />
        <ul
          className={`flex flex-col items-center justify-center gap-8 bg-primary/90 transition-all duration-200 sm:flex sm:h-auto sm:flex-row sm:bg-transparent ${
            isOpen
              ? 'h-screen scale-100 opacity-100'
              : 'h-0 scale-0 opacity-0 sm:scale-100 sm:opacity-100'
          }`}
        >
          {links.map(({ name, hash }) => (
            <MenuItem key={hash} name={name} hash={hash} />
          ))}
        </ul>
      </motion.nav>
    </header>
  )
}
export default Header
