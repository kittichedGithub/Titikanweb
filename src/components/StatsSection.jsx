import React, { useEffect, useRef, useState } from 'react'

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

export default function StatsSection({ startDate }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const days = Math.floor((new Date() - startDate) / (1000 * 60 * 60 * 24))
  const hours = days * 24
  const smiles = days * 47
  const kisses = days * 3

  const daysCount = useCountUp(days, 1800, visible)
  const hoursCount = useCountUp(hours, 1800, visible)
  const smilesCount = useCountUp(smiles, 1800, visible)
  const kissesCount = useCountUp(kisses, 1800, visible)

  const stats = [
    { value: daysCount, label: 'Days Together', emoji: '📅' },
    { value: hoursCount.toLocaleString(), label: 'Hours of Love', emoji: '⏰' },
    { value: smilesCount.toLocaleString() + '+', label: 'Smiles Shared', emoji: '😊' },
    { value: kissesCount.toLocaleString() + '+', label: 'Kisses Given', emoji: '💋' },
  ]

  return (
    <section ref={ref} className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="text-center mb-12">
            <p className="text-blush font-script text-xl mb-3" style={{ fontFamily: "'Dancing Script', cursive" }}>
              by the numbers
            </p>
            <h2
              className="gradient-text font-serif text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Love in Numbers
            </h2>
            <div className="section-divider mt-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-6 text-center hover:glow-rose transition-all duration-300"
                style={{
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <div className="text-3xl mb-2">{stat.emoji}</div>
                <div
                  className="gradient-text font-serif text-3xl md:text-4xl font-bold mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {stat.value}
                </div>
                <div className="text-white/50 text-xs font-sans tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
