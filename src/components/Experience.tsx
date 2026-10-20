'use client'

import { useRef, useState } from 'react'
import ExperienceCard from '@/components/ExperienceCard'
import { ExperienceSnake } from '@/components/ExperienceSnake'
import { useLanguage } from '@/contexts/language-context'

function Experience() {
  const { t } = useLanguage()
  const items = t.experience.items
  const timelineRef = useRef<HTMLDivElement>(null)
  const [expanded, setExpanded] = useState<boolean[]>(() =>
    items.map(() => false),
  )

  const toggle = (index: number) => {
    setExpanded((prev) => prev.map((v, i) => (i === index ? !v : v)))
  }

  return (
    <section className='pt-20 sm:pt-32'>
      <h3 className='mb-10 text-3xl font-bold text-sky-400 sm:mb-14 sm:text-4xl'>
        {t.experience.title}
      </h3>
      <div ref={timelineRef} className='relative'>
        <article className='relative z-10 grid w-full max-w-3xl grid-cols-[10px_1fr] gap-6 gap-y-14 rounded-md sm:gap-y-20'>
          {items.map((item, index) => (
            <ExperienceCard
              key={index}
              title={item.title}
              date={item.date}
              charge={item.company}
              place={item.place}
              short={item.short}
              more={item.more}
              expanded={expanded[index]}
              onToggle={() => toggle(index)}
              isLast={index === items.length - 1}
              readMoreLabel={t.experience.readMore}
              readLessLabel={t.experience.readLess}
            />
          ))}
        </article>
        <ExperienceSnake targetRef={timelineRef} />
      </div>
    </section>
  )
}
export default Experience
