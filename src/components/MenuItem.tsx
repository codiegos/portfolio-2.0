import { useMenu } from '@/hooks/useMenu'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface MenuItemProps {
  hash: string
  name: string
}
export const MenuItem = ({ name, hash }: MenuItemProps) => {
  const { setIsOpen } = useMenu()
  return (
    <motion.li
      className='cursor-pointer transition hover:text-pink-400'
      onClick={() => setIsOpen(false)}
    >
      <Link href={hash}>{name}</Link>
    </motion.li>
  )
}
