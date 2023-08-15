import Image from 'next/image'
import { AiFillGithub, AiFillLock, AiOutlineLink } from 'react-icons/ai'
import { GradientText } from './GradientText'

interface ProjectCardProps {
  name: string
  image: string
  tags: readonly string[]
  github?: string
  link?: string
}

function ProjectCard({ name, image, tags, github, link }: ProjectCardProps) {
  return (
    <article className='flex max-w-sm flex-col overflow-hidden rounded-lg bg-gradient-to-br from-violet-500/40 to-primary ring-2 ring-violet-700/50'>
      <Image
        src={image}
        alt={name}
        className='h-64 w-full object-cover duration-200 hover:scale-105'
        width={500}
        height={500}
      />

      <div className='gap.4 flex flex-col gap-4 px-6 py-4 sm:gap-12 lg:gap-4'>
        <h3 className='text-2xl font-semibold'>
          <GradientText
            text={name}
            className='bg-gradient-to-b from-white  to-sky-200'
          />
        </h3>
        <ul className='flex h-12 flex-wrap gap-2'>
          {tags.map((tag, i) => (
            <div key={i}>
              <li className='rounded-full bg-gradient-to-tr from-purple-600 to-pink-600 p-2.5 text-sm ring-2 ring-violet-800'>
                {tag}
              </li>
            </div>
          ))}
        </ul>
        <div className='mt-4 flex items-center justify-end gap-4'>
          {github ? (
            <a href={github} target='_blank'>
              <AiFillGithub className='h-6 w-6' />
            </a>
          ) : (
            <AiFillLock className='h-6 w-6 text-red-400' />
          )}

          {link && (
            <a href={link} target='_blank'>
              <AiOutlineLink className='h-6 w-6 text-sky-400' />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
export default ProjectCard
