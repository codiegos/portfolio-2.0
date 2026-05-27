'use client'

import { useMemo, useState } from 'react'
import ExperienceCard from '@/components/ExperienceCard'
import { ColorfullLine } from './Icons'
import { useLanguage } from '@/contexts/language-context'

function Experience() {
  const { t } = useLanguage()
  const items = t.experience.items
  const [expanded, setExpanded] = useState<boolean[]>(() =>
    items.map(() => false),
  )

  const toggle = (index: number) => {
    setExpanded((prev) => prev.map((v, i) => (i === index ? !v : v)))
  }

  const expandedCount = useMemo(
    () => expanded.filter(Boolean).length,
    [expanded],
  )

  const expandedRatio = useMemo(() => {
    if (expanded.length === 0) return 0.6
    return Math.min(0.6 + (expandedCount / expanded.length) * 0.4, 1)
  }, [expanded, expandedCount])

  // How far the thin tail trails below the last card; grows on "read more".
  const trailPx = 80 + expandedCount * 32

  return (
    <section className='pt-20 sm:pt-32'>
      <h3 className='mb-10 text-3xl font-bold text-sky-400 sm:mb-14 sm:text-4xl'>
        {t.experience.title}
      </h3>
      <div className='relative'>
        <article className='relative z-10 grid w-full max-w-3xl grid-cols-[10px_1fr] gap-6 gap-y-14 rounded-md sm:gap-y-20'>
          {items.map((item, index) => (
            <ExperienceCard
              key={index}
              title={item.title}
              date={item.date}
              charge={item.company}
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
        <ColorfullLine
          aria-hidden='true'
          className='pointer-events-none absolute top-0 right-0 hidden w-44 opacity-95 transition-[bottom] duration-500 ease-out xl:block 2xl:w-56'
          style={{
            bottom: `-${trailPx}px`,
            filter: `drop-shadow(0 0 ${expandedRatio * 18}px rgba(56, 189, 248, 0.5))`,
            WebkitMaskImage: `linear-gradient(to bottom, #000 calc(100% - ${trailPx + 16}px), transparent)`,
            maskImage: `linear-gradient(to bottom, #000 calc(100% - ${trailPx + 16}px), transparent)`,
          }}
        />
      </div>
    </section>
  )
}
export default Experience
