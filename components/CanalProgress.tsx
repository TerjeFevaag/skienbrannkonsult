'use client'

import { useEffect, useRef, useState } from 'react'

interface Chamber {
  id: string
  label: string
}

export default function CanalProgress({ chambers }: { chambers: Chamber[] }) {
  const [progress, setProgress] = useState(0)
  const [activeIndex, setActiveIndex] = useState(-1)
  const ticking = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(() => {
        const scrollTop = window.scrollY
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        setProgress(docHeight > 0 ? Math.min(1, scrollTop / docHeight) : 0)

        let current = -1
        chambers.forEach((chamber, i) => {
          const el = document.getElementById(chamber.id)
          if (el && el.getBoundingClientRect().top <= window.innerHeight / 2) {
            current = i
          }
        })
        setActiveIndex(current)
        ticking.current = false
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [chambers])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="hidden lg:block fixed right-6 top-1/2 -translate-y-1/2 z-40 h-64 w-4">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-brand-black/10 rounded-full overflow-hidden">
        <div
          className="w-full bg-brand-orange transition-[height] duration-150 ease-out"
          style={{ height: `${progress * 100}%` }}
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-between">
        {chambers.map((chamber, i) => (
          <button
            key={chamber.id}
            onClick={() => scrollTo(chamber.id)}
            aria-label={chamber.label}
            title={chamber.label}
            className={`w-2.5 h-2.5 rounded-full border-2 self-center transition-colors duration-200 ${
              i <= activeIndex
                ? 'bg-brand-orange border-brand-orange'
                : 'bg-brand-white border-brand-black/20'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
