'use client'

import { AnimatePresence, motion } from 'motion/react'
import { HiChevronDown } from 'react-icons/hi'

interface ExperienceCardProps {
  title: string
  date: string
  charge: string
  place: string
  short: string
  more: readonly string[]
  expanded: boolean
  onToggle: () => void
  isLast: boolean
  readMoreLabel: string
  readLessLabel: string
}

function ExperienceCard({
  title,
  date,
  charge,
  place,
  short,
  more,
  expanded,
  onToggle,
  isLast,
  readMoreLabel,
  readLessLabel,
}: ExperienceCardProps) {
  return (
    <>
      <div className='my-2 mr-1.5 flex flex-col items-center'>
        <motion.span
          data-exp-dot
          className='block h-3 w-3 rounded-full bg-linear-to-br from-sky-400 to-indigo-500 ring-4 ring-sky-500/15'
          animate={{ scale: expanded ? 1.25 : 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 18 }}
        />
        {!isLast && (
          <span className='mt-2 h-full w-px bg-linear-to-b from-sky-400/60 via-slate-400/30 to-indigo-500/60' />
        )}
      </div>
      <motion.div
        layout
        className='group flex flex-col gap-5 rounded-2xl border border-slate-700/40 bg-slate-950/40 p-5 backdrop-blur-sm transition-colors hover:border-sky-400/40 sm:p-6'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <motion.div layout='position' className='flex flex-col gap-2'>
          <div className='flex flex-col justify-between gap-1 text-xl font-bold text-sky-400 sm:text-2xl md:flex-row md:items-baseline md:gap-4'>
            <span>{title}</span>
            <span className='text-base font-medium text-slate-200 sm:text-lg md:text-right'>
              {charge}
            </span>
          </div>
          <div className='flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium tracking-wider text-sky-300/80 uppercase sm:text-sm'>
            <span>{date}</span>
            <span aria-hidden='true' className='text-slate-600'>
              /
            </span>
            <span className='text-slate-400'>{place}</span>
          </div>
        </motion.div>

        <motion.p
          layout='position'
          className='text-base text-slate-200/90 sm:text-lg'
        >
          {short}
        </motion.p>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.ul
              key='more'
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className='flex flex-col gap-2 overflow-hidden border-l-2 border-sky-400/40 pl-4 text-sm text-slate-300 sm:text-base'
            >
              {more.map((line, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.25 }}
                >
                  {line}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {more.length > 0 && (
          <motion.button
            layout='position'
            type='button'
            onClick={onToggle}
            aria-expanded={expanded}
            className='group/btn inline-flex w-fit items-center gap-1.5 self-start text-sm font-semibold text-sky-300 transition hover:text-sky-200'
          >
            <span>{expanded ? readLessLabel : readMoreLabel}</span>
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ type: 'spring', stiffness: 280, damping: 18 }}
              className='inline-flex'
            >
              <HiChevronDown className='h-4 w-4' />
            </motion.span>
          </motion.button>
        )}
      </motion.div>
    </>
  )
}
export default ExperienceCard
