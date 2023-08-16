import Image from 'next/image'
import { AiFillGithub, AiFillLock, AiOutlineLink } from 'react-icons/ai'
import { GradientText } from './GradientText'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  name: string
  image: string
  tags: readonly string[]
  github?: string
  link?: string
  index: number
}
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.17 * index,
    },
  }),
}

function ProjectCard({
  name,
  image,
  tags,
  github,
  link,
  index,
}: ProjectCardProps) {
  return (
    <motion.article
      className='relative flex max-w-xl flex-col overflow-hidden rounded-lg bg-secondary/10 ring-2 ring-violet-700/50'
      variants={fadeInAnimationVariants}
      initial='initial'
      whileInView='animate'
      viewport={{
        once: true,
      }}
      custom={index}
    >
      <Image
        src={image}
        alt={name}
        className='h-auto w-full object-cover duration-200 hover:scale-105'
        width={500}
        height={500}
      />

      <div className='flex flex-col gap-2 p-2 pb-10'>
        <h3 className='text-xl font-semibold lg:text-2xl'>
          <GradientText
            text={name}
            className='bg-gradient-to-b from-white to-sky-100'
          />
        </h3>
        <ul className='flex flex-wrap gap-2'>
          {tags.map((tag, i) => (
            <div key={i}>
              <li className='rounded-full bg-gradient-to-tr from-pink-600 to-pink-400 p-1.5 text-[.9rem] ring-2 ring-pink-700'>
                {tag}
              </li>
            </div>
          ))}
        </ul>
        <div className='absolute bottom-2 right-2 flex items-center justify-end'>
          {github ? (
            <a href={github} target='_blank'>
              <AiFillGithub className='h-6 w-6 duration-150 hover:scale-110' />
            </a>
          ) : (
            <AiFillLock className='h-6 w-6 text-red-400' />
          )}

          {link && (
            <a href={link} target='_blank'>
              <AiOutlineLink className='h-6 w-6 text-sky-400 duration-150 hover:scale-110' />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
export default ProjectCard
