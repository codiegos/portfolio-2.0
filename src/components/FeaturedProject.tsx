'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { AiFillGithub, AiFillLock, AiOutlineLink } from 'react-icons/ai'
import { HiArrowRight, HiOutlinePhotograph } from 'react-icons/hi'
import type { Project } from '@/lib/data'
import { useLanguage } from '@/contexts/language-context'

interface FeaturedProjectProps {
  project: Project
  index: number
  onOpen: () => void
}

export function FeaturedProject({
  project,
  index,
  onOpen,
}: FeaturedProjectProps) {
  const { t, locale } = useLanguage()
  const flip = index % 2 === 1
  const cover = project.gallery[0]

  return (
    <motion.article
      className='grid items-center gap-6 lg:grid-cols-12 lg:gap-10'
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, margin: '-120px' }}
    >
      <motion.button
        type='button'
        onClick={onOpen}
        aria-label={`${t.projects.details}: ${project.name}`}
        className={`group relative block w-full text-left lg:col-span-7 ${flip ? 'lg:order-2' : ''}`}
        variants={{
          hidden: { opacity: 0, x: flip ? 40 : -40 },
          show: {
            opacity: 1,
            x: 0,
            transition: { type: 'spring', stiffness: 80, damping: 18 },
          },
        }}
      >
        <motion.div
          layoutId={`cover-${project.slug}`}
          className='relative aspect-16/10 overflow-hidden rounded-2xl bg-slate-950 shadow-xl ring-1 shadow-slate-950/50 ring-slate-700/60 transition-shadow group-hover:shadow-sky-500/15 group-hover:ring-sky-400/50'
        >
          <Image
            src={cover.src}
            alt={cover.alt[locale]}
            fill
            sizes='(min-width: 1024px) 40rem, 100vw'
            className='object-cover object-left-top transition-transform duration-700 ease-out group-hover:scale-[1.04]'
          />
          <div className='pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/60 to-transparent to-30%' />
          {project.gallery.length > 1 && (
            <span className='absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-slate-950/75 px-3 py-1 text-xs font-semibold text-slate-100 backdrop-blur'>
              <HiOutlinePhotograph className='h-4 w-4' />
              {project.gallery.length} {t.projects.screenshots}
            </span>
          )}
        </motion.div>
      </motion.button>

      <motion.div
        className={`flex flex-col gap-4 lg:col-span-5 ${flip ? 'lg:order-1' : ''}`}
        variants={{
          hidden: { opacity: 0, y: 24 },
          show: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.1, duration: 0.5, ease: 'easeOut' },
          },
        }}
      >
        <p className='flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold tracking-wider text-sky-300/90 uppercase'>
          <span>{project.kind[locale]}</span>
          {project.year && (
            <>
              <span aria-hidden='true' className='text-slate-600'>
                /
              </span>
              <span className='text-slate-400'>{project.year}</span>
            </>
          )}
          {project.status && (
            <span className='rounded-full bg-amber-400/15 px-2 py-0.5 text-amber-300 ring-1 ring-amber-300/30'>
              {project.status[locale]}
            </span>
          )}
        </p>
        <h3 className='text-2xl font-bold text-white sm:text-3xl'>
          {project.name}
        </h3>
        <p className='leading-relaxed text-pretty text-slate-300'>
          {project.summary[locale]}
        </p>
        <ul className='flex flex-wrap gap-2'>
          {project.tags.map((tag) => (
            <li
              key={tag}
              className='rounded-md bg-sky-500/10 px-2.5 py-1 text-xs font-semibold text-sky-200 ring-1 ring-sky-400/20'
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className='flex flex-wrap items-center gap-x-5 gap-y-3 pt-2 text-sm font-semibold'>
          <button
            type='button'
            onClick={onOpen}
            className='group/cta inline-flex items-center gap-2 rounded-full bg-slate-100 px-5 py-2.5 text-slate-950 transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300'
          >
            {t.projects.details}
            <HiArrowRight className='h-4 w-4 transition-transform group-hover/cta:translate-x-0.5' />
          </button>
          {project.link && (
            <a
              href={project.link}
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-1.5 text-sky-300 transition hover:text-sky-200'
            >
              <AiOutlineLink className='h-5 w-5' />
              {project.linkLabel ?? t.projects.visit}
            </a>
          )}
          {project.github ? (
            <a
              href={project.github}
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-1.5 text-slate-300 transition hover:text-sky-300'
            >
              <AiFillGithub className='h-5 w-5' />
              {t.projects.code}
            </a>
          ) : (
            <span className='inline-flex items-center gap-1.5 font-medium text-slate-500'>
              <AiFillLock className='h-4 w-4' />
              {t.projects.private}
            </span>
          )}
        </div>
      </motion.div>
    </motion.article>
  )
}
