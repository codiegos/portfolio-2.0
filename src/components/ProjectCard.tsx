'use client'

import Image from 'next/image'
import { AiFillGithub, AiFillLock, AiOutlineLink } from 'react-icons/ai'
import { GradientText } from './GradientText'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/language-context'

interface ProjectCardProps {
  name: string
  image: string
  description: string
  tags: readonly string[]
  github?: string
  link?: string
  index: number
}

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 80,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.12 * index,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

function ProjectCard({
  name,
  image,
  description,
  tags,
  github,
  link,
  index,
}: ProjectCardProps) {
  const { t } = useLanguage()

  const cover = (
    <Image
      src={image}
      alt={name}
      className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110'
      width={500}
      height={500}
      priority={index < 3}
    />
  )

  return (
    <motion.article
      className='group relative flex h-full flex-col overflow-hidden rounded-2xl bg-linear-to-br from-slate-950/60 via-primary/60 to-primary/90 shadow-lg shadow-slate-950/40 ring-1 ring-slate-700/50 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-500/10 hover:ring-sky-400/40'
      variants={fadeInAnimationVariants}
      initial='initial'
      whileInView='animate'
      viewport={{ once: true, margin: '-50px' }}
      custom={index}
    >
      <div className='relative aspect-video w-full overflow-hidden'>
        {link ? (
          <a
            href={link}
            target='_blank'
            rel='noreferrer'
            aria-label={`${t.projects.visit} — ${name}`}
            className='block h-full w-full'
          >
            {cover}
          </a>
        ) : (
          cover
        )}
        <div className='pointer-events-none absolute inset-0 bg-linear-to-t from-primary/90 via-primary/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-60' />
      </div>

      <div className='flex flex-1 flex-col gap-4 p-5'>
        <h3 className='text-xl font-semibold lg:text-2xl'>
          <GradientText
            text={name}
            className='bg-linear-to-b from-white to-sky-100'
          />
        </h3>

        <p className='text-sm leading-relaxed text-slate-300/90'>
          {description}
        </p>

        <ul className='mt-auto flex flex-wrap gap-2 pt-2'>
          {tags.map((tag) => (
            <li
              key={tag}
              className='rounded-md bg-sky-500/10 px-2.5 py-1 text-xs font-semibold text-sky-200 ring-1 ring-sky-400/20'
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className='flex items-center justify-end gap-3 pt-2'>
          {github ? (
            <a
              href={github}
              target='_blank'
              rel='noreferrer'
              aria-label={t.projects.code}
              className='rounded-full bg-slate-900/70 p-2 ring-1 ring-slate-700/60 transition hover:scale-110 hover:bg-slate-800/80 hover:text-sky-300'
            >
              <AiFillGithub className='h-5 w-5' />
            </a>
          ) : (
            <span
              aria-label={t.projects.private}
              title={t.projects.private}
              className='rounded-full bg-red-500/10 p-2 text-red-400 ring-1 ring-red-400/30'
            >
              <AiFillLock className='h-5 w-5' />
            </span>
          )}

          {link && (
            <a
              href={link}
              target='_blank'
              rel='noreferrer'
              aria-label={t.projects.visit}
              className='rounded-full bg-sky-500/15 p-2 text-sky-300 ring-1 ring-sky-400/30 transition hover:scale-110 hover:bg-sky-500/30 hover:text-sky-200'
            >
              <AiOutlineLink className='h-5 w-5' />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
export default ProjectCard
