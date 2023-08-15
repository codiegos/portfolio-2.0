import React from 'react'
interface ExperienceCardProps {
  title: string
  date: string
  charge: string
  description: React.ReactNode
}

function ExperienceCard({
  title,
  date,
  charge,
  description,
}: ExperienceCardProps) {
  return (
    <>
      <div className='flex flex-col items-center gap-2'>
        <div className='rounded-full bg-white p-1' />
        <div className='h-full w-0 border border-white' />
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-xl font-bold text-sky-400 sm:text-2xl'>{title}</h2>
        <span className='text-sm font-semibold text-sky-300'>{date}</span>
        <span className='right-0 font-bold text-sky-400 sm:text-xl lg:absolute'>
          {charge}
        </span>
        <div className='max-w-2xl sm:text-lg'>{description}</div>
      </div>
    </>
  )
}
export default ExperienceCard
