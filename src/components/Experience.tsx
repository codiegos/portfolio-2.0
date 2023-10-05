import { useState } from 'react'
import ExperienceCard from '@/components/ExperienceCard'
import Image from 'next/image'

function Experience() {
  const [moreText, setMoreText] = useState(false)

  const infoExperience = [
    {
      title: 'Professional Internship',
      date: 'Aug-2022 / Nov-2022',
      charge: 'Smert Group - Frontend',
      description: (
        <p>
          During this work placement, I had the opportunity to utilize
          technologies like React, Redux Toolkit Query, and TailwindCSS. I
          actively participated in the development of various modules, with a
          specific focus on a course module designed for firefighter training.
        </p>
      ),
    },
    {
      title: 'Software Developer',
      date: 'Dec-2022 / Jan-2023',
      charge: 'Freelance - Fullstack',
      description: (
        <>
          <p className='flex flex-col gap-1'>
            I played an important role in the development of an information
            system for the tourism industry using React in the frontend,
            TailwindCSS for the UI design, JSON Web Tokens (JWT) for
            authentication and POSTGRESQL as database.
            <span
              className='cursor-pointer text-pink-300 duration-200 hover:text-pink-400'
              onClick={() => setMoreText(!moreText)}
            >
              {!moreText && ' Read more...'}
            </span>
          </p>
          {moreText && (
            <p>
              This information system streamlined the management of stateroom
              reservations through a calendar, as well as the management of
              customer-related tasks and additional configurations. This allowed
              them to focus on providing better service and increasing their
              profitability.
              <span
                className='cursor-pointer text-pink-300 duration-200 hover:text-pink-400'
                onClick={() => setMoreText(!moreText)}
              >
                {moreText && ' Read less...'}
              </span>
            </p>
          )}
        </>
      ),
    },
  ] as const

  return (
    <section className='flex items-start pt-32'>
      <article className='grid max-w-3xl grid-cols-[10px_1fr] gap-6 gap-y-20 rounded-md'>
        {infoExperience.map(({ title, date, description, charge }, index) => (
          <ExperienceCard
            key={index}
            title={title}
            date={date}
            description={description}
            charge={charge}
          />
        ))}
      </article>
      <Image
        src={'line.svg'}
        width={350}
        height={300}
        alt='ffsdfsd'
        className='hidden translate-x-8 translate-y-36 -rotate-90 scale-[1.35] hue-rotate-[25deg] md:block'
      />
    </section>
  )
}
export default Experience
