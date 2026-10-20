'use client'

import { useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'motion/react'
import { projects } from '@/lib/data'
import { FeaturedProject } from '@/components/FeaturedProject'
import { ProjectTile } from '@/components/ProjectTile'
import { ProjectDialog } from '@/components/ProjectDialog'
import { useSectionInView } from '@/hooks/useSectionInView'
import { useLanguage } from '@/contexts/language-context'

const featured = projects.filter((p) => p.featured)
const others = projects.filter((p) => !p.featured)

function Projects() {
  const { ref } = useSectionInView<HTMLElement>('Projects')
  const { t } = useLanguage()
  const [openSlug, setOpenSlug] = useState<string | null>(null)
  const open = projects.find((p) => p.slug === openSlug)

  return (
    <section
      ref={ref}
      id='projects'
      className='container flex max-w-6xl scroll-mt-16 flex-col gap-14 py-20 sm:gap-20'
    >
      <motion.div
        className='flex flex-col gap-3'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h2 className='text-3xl font-bold text-sky-400 sm:text-4xl'>
          {t.projects.title}
        </h2>
        <p className='max-w-2xl text-sm text-pretty text-slate-300/80 sm:text-base'>
          {t.projects.subtitle}
        </p>
      </motion.div>

      <LayoutGroup>
        <div className='flex flex-col gap-20 sm:gap-28'>
          {featured.map((project, index) => (
            <FeaturedProject
              key={project.slug}
              project={project}
              index={index}
              onOpen={() => setOpenSlug(project.slug)}
            />
          ))}
        </div>

        <div className='flex flex-col gap-8'>
          <h3 className='text-xl font-semibold text-slate-200 sm:text-2xl'>
            {t.projects.more}
          </h3>
          <ul className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {others.map((project, index) => (
              <ProjectTile
                key={project.slug}
                project={project}
                index={index}
                onOpen={() => setOpenSlug(project.slug)}
              />
            ))}
          </ul>
        </div>

        <AnimatePresence>
          {open && (
            <ProjectDialog
              key={open.slug}
              project={open}
              onClose={() => setOpenSlug(null)}
            />
          )}
        </AnimatePresence>
      </LayoutGroup>
    </section>
  )
}
export default Projects
