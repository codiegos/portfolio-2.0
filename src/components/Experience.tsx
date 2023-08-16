import { useState } from 'react'
import ExperienceCard from './ExperienceCard'

function Experience() {
  const [moreText, setMoreText] = useState(false)

  const infoExperience = [
    {
      title: 'Professional internship',
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
      charge: 'Freelance',
      description: (
        <p className='flex flex-col gap-1'>
          I played an important role in the development of an information system
          for the tourism industry using React in the frontend, TailwindCSS for
          the UI design, JSON Web Tokens (JWT) for authentication and POSTGRESQL
          as database.
          {moreText && (
            <span className='text-violet-100'>
              This information system streamlined the management of stateroom
              reservations through a calendar, as well as the management of
              customer-related tasks and additional configurations. This allowed
              them to focus on providing better service and increasing their
              profitability.
            </span>
          )}
          <span
            className='cursor-pointer text-violet-400 hover:text-violet-300'
            onClick={() => setMoreText(!moreText)}
          >
            {moreText ? ' Read less.' : ' Read more...'}
          </span>
        </p>
      ),
    },
  ] as const

  return (
    <section className='flex flex-col'>
      <article className='relative my-8 grid grid-cols-[10px_1fr] gap-4'>
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
    </section>
  )
}
export default Experience
