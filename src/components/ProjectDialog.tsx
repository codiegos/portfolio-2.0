'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, type PanInfo } from 'motion/react'
import { AiFillGithub, AiFillLock, AiOutlineLink } from 'react-icons/ai'
import { HiChevronLeft, HiChevronRight, HiX } from 'react-icons/hi'
import type { Project } from '@/lib/data'
import { useLanguage } from '@/contexts/language-context'

interface ProjectDialogProps {
  project: Project
  onClose: () => void
}

const slide = {
  enter: (dir: number) => ({ x: dir * 60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir * -60, opacity: 0 }),
}

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  const { t, locale } = useLanguage()
  const [[index, dir], setSlide] = useState<[number, number]>([0, 0])
  const panelRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const { gallery } = project
  const many = gallery.length > 1
  const image = gallery[index]
  const highlights = project.highlights[locale]
  const titleId = `project-${project.slug}-title`

  const go = useCallback(
    (step: number) => {
      setSlide(([i]) => [(i + step + gallery.length) % gallery.length, step])
    },
    [gallery.length],
  )

  // Lock page scroll and send focus into the dialog; give it back on close.
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null
    const root = document.documentElement
    const overflow = root.style.overflow
    root.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      root.style.overflow = overflow
      previous?.focus()
    }
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (many && e.key === 'ArrowRight') go(1)
      if (many && e.key === 'ArrowLeft') go(-1)
      if (e.key === 'Tab' && panelRef.current) {
        const items = [
          ...panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
        ]
        const first = items[0]
        const last = items[items.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go, many, onClose])

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60) go(1)
    else if (info.offset.x > 60) go(-1)
  }

  return (
    <motion.div
      className='fixed inset-0 z-60 flex items-end justify-center sm:items-center sm:p-6'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className='absolute inset-0 bg-slate-950/80 backdrop-blur-sm'
        onClick={onClose}
        aria-hidden='true'
      />
      <motion.div
        ref={panelRef}
        role='dialog'
        aria-modal='true'
        aria-labelledby={titleId}
        className='bg-primary relative max-h-[92svh] w-full max-w-5xl overflow-y-auto overscroll-contain rounded-t-3xl shadow-2xl ring-1 shadow-sky-500/10 ring-slate-700/60 sm:rounded-3xl'
        // Only opacity here: a transform on the panel would throw off the
        // shared-layout morph of the cover image.
        layoutScroll
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <button
          ref={closeRef}
          type='button'
          onClick={onClose}
          aria-label={t.projects.close}
          className='absolute top-3 right-3 z-20 rounded-full bg-slate-950/70 p-2 text-slate-200 ring-1 ring-slate-600/60 backdrop-blur transition hover:text-white hover:ring-sky-400/60 focus-visible:outline-2 focus-visible:outline-sky-300'
        >
          <HiX className='h-5 w-5' />
        </button>

        <div className='relative'>
          <motion.div
            layoutId={`cover-${project.slug}`}
            className='relative aspect-16/10 w-full overflow-hidden bg-slate-950 sm:rounded-t-3xl'
          >
            <AnimatePresence initial={false} custom={dir} mode='popLayout'>
              <motion.div
                key={image.src}
                className='absolute inset-0'
                custom={dir}
                variants={slide}
                initial='enter'
                animate='center'
                exit='exit'
                transition={{ type: 'spring', stiffness: 300, damping: 32 }}
                drag={many ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={onDragEnd}
              >
                <Image
                  src={image.src}
                  alt={image.alt[locale]}
                  fill
                  sizes='(min-width: 1024px) 64rem, 100vw'
                  className='pointer-events-none object-contain select-none'
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {many && (
            <>
              <button
                type='button'
                onClick={() => go(-1)}
                aria-label={t.projects.prev}
                className='absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-slate-950/70 p-2 text-white ring-1 ring-slate-600/60 backdrop-blur transition hover:bg-slate-900 focus-visible:outline-2 focus-visible:outline-sky-300'
              >
                <HiChevronLeft className='h-6 w-6' />
              </button>
              <button
                type='button'
                onClick={() => go(1)}
                aria-label={t.projects.next}
                className='absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-slate-950/70 p-2 text-white ring-1 ring-slate-600/60 backdrop-blur transition hover:bg-slate-900 focus-visible:outline-2 focus-visible:outline-sky-300'
              >
                <HiChevronRight className='h-6 w-6' />
              </button>
              <span className='absolute bottom-3 left-3 rounded-full bg-slate-950/75 px-3 py-1 text-xs font-semibold text-slate-200 tabular-nums backdrop-blur'>
                {index + 1} / {gallery.length}
              </span>
            </>
          )}
        </div>

        {many && (
          <ul className='flex gap-2 overflow-x-auto px-5 pt-4 sm:px-8'>
            {gallery.map((img, i) => (
              <li key={img.src} className='shrink-0'>
                <button
                  type='button'
                  onClick={() => setSlide([i, i > index ? 1 : -1])}
                  aria-label={`${t.projects.goTo} ${i + 1}: ${img.alt[locale]}`}
                  aria-current={i === index}
                  className={`relative block aspect-16/10 w-24 overflow-hidden rounded-lg ring-2 transition sm:w-28 ${
                    i === index
                      ? 'ring-sky-400'
                      : 'opacity-60 ring-transparent hover:opacity-100'
                  }`}
                >
                  <Image
                    src={img.src}
                    alt=''
                    fill
                    sizes='7rem'
                    className='object-cover'
                  />
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className='grid gap-8 p-5 sm:p-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-12'>
          <div className='flex flex-col gap-4'>
            <p className='flex flex-wrap items-center gap-x-2 text-xs font-semibold tracking-wider text-sky-300/90 uppercase'>
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
            <h3
              id={titleId}
              className='text-2xl font-bold text-white sm:text-3xl'
            >
              {project.name}
            </h3>
            <p className='leading-relaxed text-pretty text-slate-300'>
              {project.summary[locale]}
            </p>

            {highlights.length > 0 && (
              <div className='flex flex-col gap-3 pt-2'>
                <h4 className='text-sm font-semibold text-slate-100'>
                  {t.projects.highlights}
                </h4>
                <ul className='flex flex-col gap-2.5 text-sm leading-relaxed text-slate-300 sm:text-base'>
                  {highlights.map((line, i) => (
                    <motion.li
                      key={line}
                      className='flex gap-3'
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.05 }}
                    >
                      <span
                        aria-hidden='true'
                        className='mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400'
                      />
                      <span>{line}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <aside className='flex flex-col gap-6'>
            <div className='flex flex-col gap-3'>
              <h4 className='text-sm font-semibold text-slate-100'>
                {t.projects.stack}
              </h4>
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
            </div>
            <div className='flex flex-col gap-2'>
              {project.link && (
                <a
                  href={project.link}
                  target='_blank'
                  rel='noreferrer'
                  className='inline-flex items-center gap-2 rounded-xl bg-sky-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-400'
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
                  className='inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-100 ring-1 ring-slate-600 transition hover:text-sky-300 hover:ring-sky-400/60'
                >
                  <AiFillGithub className='h-5 w-5' />
                  {t.projects.code}
                </a>
              ) : (
                <span className='inline-flex items-center gap-2 px-1 py-2 text-sm text-slate-400'>
                  <AiFillLock className='h-4 w-4' />
                  {t.projects.private}
                </span>
              )}
            </div>
          </aside>
        </div>
      </motion.div>
    </motion.div>
  )
}
