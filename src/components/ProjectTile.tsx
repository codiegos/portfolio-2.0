'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import type { Project } from '@/lib/data'
import { useLanguage } from '@/contexts/language-context'

interface ProjectTileProps {
  project: Project
  index: number
  onOpen: () => void
}

export function ProjectTile({ project, index, onOpen }: ProjectTileProps) {
  const { t, locale } = useLanguage()
  const cover = project.gallery[0]

  return (
    <motion.li
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.08, duration: 0.45, ease: 'easeOut' }}
    >
      <button
        type='button'
        onClick={onOpen}
        aria-label={`${t.projects.details}: ${project.name}`}
        className='group flex h-full w-full flex-col overflow-hidden rounded-2xl bg-slate-950/50 text-left ring-1 ring-slate-700/50 transition hover:-translate-y-1 hover:ring-sky-400/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300'
      >
        <motion.div
          layoutId={`cover-${project.slug}`}
          className='relative aspect-16/10 w-full overflow-hidden bg-slate-950'
        >
          <Image
            src={cover.src}
            alt={cover.alt[locale]}
            fill
            sizes='(min-width: 1024px) 22rem, (min-width: 640px) 50vw, 100vw'
            className='object-cover object-left-top transition-transform duration-500 group-hover:scale-105'
          />
        </motion.div>
        <div className='flex flex-1 flex-col gap-2 p-5'>
          <span className='text-xs font-semibold tracking-wider text-sky-300/80 uppercase'>
            {project.kind[locale]}
          </span>
          <span className='text-lg font-semibold text-white'>
            {project.name}
          </span>
          <span className='text-sm leading-relaxed text-slate-400'>
            {project.summary[locale]}
          </span>
          <span className='mt-auto pt-3 text-xs font-medium text-slate-500'>
            {project.tags.join(' · ')}
          </span>
        </div>
      </button>
    </motion.li>
  )
}
