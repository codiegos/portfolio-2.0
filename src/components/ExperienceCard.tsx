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
      <div className='my-1.5 mr-1.5 flex flex-col items-center'>
        <span className='rounded-full bg-white p-1.5' />
        <span className='mt-2 h-full w-0 border border-white' />
      </div>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-col items-center justify-between gap-2 md:flex-row'>
            <h2 className='text-xl font-bold text-sky-400 sm:text-2xl'>
              {title}
            </h2>
            <span className='mr-9 font-semibold text-sky-400 sm:text-xl'>
              {charge}
            </span>
          </div>
          <span className='text-sm font-semibold text-sky-300'>{date}</span>
        </div>
        <div className='sm:text-lg'>{description}</div>
      </div>
    </>
  )
}
export default ExperienceCard
