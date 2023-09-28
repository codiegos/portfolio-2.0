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
      <div className='my-2 mr-1.5 flex flex-col items-center'>
        <span className='rounded-full bg-white p-1.5' />
        <span className='mt-2 h-full w-0 border border-white' />
      </div>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-col justify-between gap-2 text-xl font-bold text-sky-400 sm:text-2xl md:flex-row'>
            <span>{title}</span>
            <span className='text-lg font-medium text-sky-300 sm:text-2xl md:font-bold'>
              {charge}
            </span>
          </div>
          <span className='text-sm font-medium text-sky-200'>{date}</span>
        </div>
        <div className='text-justify sm:text-lg'>{description}</div>
      </div>
    </>
  )
}
export default ExperienceCard
