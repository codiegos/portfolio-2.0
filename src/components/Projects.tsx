import { projects } from '@/lib/data'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section className='container flex max-w-6xl flex-col gap-12 py-12'>
      <h2 className='text-3xl font-bold text-pink-400 sm:text-4xl'>Projects</h2>
      <article className='grid place-content-center gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {projects.map(({ id, name, image, link, github, tags }) => (
          <ProjectCard
            key={id}
            name={name}
            image={image}
            link={link}
            github={github}
            tags={tags}
          />
        ))}
      </article>
    </section>
  )
}
export default Projects
