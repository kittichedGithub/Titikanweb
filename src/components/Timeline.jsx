import React, { useEffect, useRef, useState } from 'react'

const moments = [
  {
    emoji: '💫',
    title: 'The Day We Met',
    description: 'A moment that changed everything. The universe had been quietly arranging this meeting for a long time.',
  },
  {
    emoji: '🌹',
    title: 'Our First Date',
    description: 'Nervous smiles, warm laughter, and the sweet realization that I never wanted the evening to end.',
  },
  {
    emoji: '🤝',
    title: 'The Promise',
    description: 'When we decided to walk this journey together — side by side, hand in hand, heart in heart.',
  },
  {
    emoji: '🌟',
    title: 'Every Little Moment',
    description: 'Quiet mornings, silly jokes, shared meals — every tiny detail woven into something extraordinary.',
  },
  {
    emoji: '❤️',
    title: 'Today & Always',
    description: 'Here we are, still growing, still laughing, still choosing each other every single day.',
  },
]

function TimelineItem({ item, index }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)
  const isLeft = index % 2 === 0

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`relative flex items-center mb-12 ${
        isLeft ? 'flex-row' : 'flex-row-reverse'
      } transition-all duration-700 ${
        visible
          ? 'opacity-100 translate-x-0'
          : isLeft
          ? 'opacity-0 -translate-x-12'
          : 'opacity-0 translate-x-12'
      }`}
    >
      <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
        <div className="glass rounded-2xl p-5 hover:glow-rose transition-all duration-300">
          <div className={`flex items-center gap-3 mb-2 ${isLeft ? 'justify-end' : 'justify-start'}`}>
            <span className="text-2xl">{item.emoji}</span>
            <h3
              className="gradient-text font-serif text-lg font-semibold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {item.title}
            </h3>
          </div>
          <p className="text-white/60 text-sm leading-relaxed font-sans">
            {item.description}
          </p>
        </div>
      </div>

      <div className="w-2/12 flex justify-center relative z-10">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-lg border-2 border-rose-500 bg-rose-900/50 glow-rose"
          style={{ animation: 'heartbeat 2s ease-in-out infinite' }}
        >
          ❤️
        </div>
      </div>

      <div className="w-5/12" />
    </div>
  )
}

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blush font-script text-xl mb-3" style={{ fontFamily: "'Dancing Script', cursive" }}>
            our story
          </p>
          <h2
            className="gradient-text font-serif text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Chapters of Us
          </h2>
          <div className="section-divider mt-4" />
        </div>

        <div className="relative">
          <div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 timeline-line transform -translate-x-1/2"
          />
          {moments.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
