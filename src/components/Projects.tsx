'use client'

import { projects } from '@/lib/data'
import ProjectCard from '@/components/ProjectCard'
import { useSectionInView } from '@/hooks/useSectionInView'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

function Projects() {
  const { ref } = useSectionInView('Projects')
  const refScroll = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: refScroll,
    offset: ['0 1', '1 1'],
  })
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.01, 2])

  return (
    <section ref={ref}>
      <motion.div
        className='container flex max-w-6xl flex-col gap-12 py-20'
        id='projects'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={refScroll}
        style={{
          opacity: opacityProgess,
        }}
      >
        <h2 className='text-3xl font-bold text-pink-400 sm:text-4xl'>
          Projects
        </h2>
        <article className='grid place-content-center justify-between gap-8 gap-y-20 sm:grid-cols-2 lg:grid-cols-3'>
          {projects.map(({ id, name, image, link, github, tags }, index) => (
            <ProjectCard
              key={id}
              name={name}
              image={image}
              link={link}
              github={github}
              tags={tags}
              index={index}
            />
          ))}
        </article>
      </motion.div>
    </section>
  )
}
export default Projects
