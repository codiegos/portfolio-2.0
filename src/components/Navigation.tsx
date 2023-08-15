import { motion } from 'framer-motion'
import { MenuItem } from './MenuItem'
import { links } from '@/lib/data'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export const Navigation = () => (
  <motion.ul variants={variants}>
    {links.map(({ hash, name }) => (
      <MenuItem key={hash} name={name} hash={hash} />
    ))}
  </motion.ul>
)
