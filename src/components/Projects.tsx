'use client'

import { projects } from '@/lib/data'
import ProjectCard from '@/components/ProjectCard'
import { useSectionInView } from '@/hooks/useSectionInView'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/language-context'

function Projects() {
  const { ref } = useSectionInView('Projects')
  const { t, locale } = useLanguage()

  return (
    <section ref={ref}>
      <motion.div
        className='container flex max-w-6xl flex-col gap-10 py-20 sm:gap-12'
        id='projects'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className='flex flex-col gap-3'>
          <h2 className='text-3xl font-bold text-sky-400 sm:text-4xl'>
            {t.projects.title}
          </h2>
          <p className='max-w-2xl text-sm text-slate-300/80 sm:text-base'>
            {t.projects.subtitle}
          </p>
        </div>
        <article className='grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3'>
          {projects.map(
            ({ id, name, image, link, github, tags, description }, index) => (
              <ProjectCard
                key={id}
                name={name}
                image={image}
                description={description[locale]}
                link={link}
                github={github}
                tags={tags}
                index={index}
              />
            ),
          )}
        </article>
      </motion.div>
    </section>
  )
}
export default Projects
