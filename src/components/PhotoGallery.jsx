import React, { useEffect, useRef, useState } from 'react'

const placeholders = [
  { emoji: '📸', label: 'Our first photo together' },
  { emoji: '🌅', label: 'A beautiful sunset' },
  { emoji: '☕', label: 'Coffee dates' },
  { emoji: '🎂', label: 'Celebrating together' },
  { emoji: '🌸', label: 'Spring moments' },
  { emoji: '🌙', label: 'Stargazing nights' },
]

export default function PhotoGallery() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="gallery" ref={ref} className="relative py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="text-center mb-14">
            <p className="text-blush font-script text-xl mb-3" style={{ fontFamily: "'Dancing Script', cursive" }}>
              memories we've made
            </p>
            <h2
              className="gradient-text font-serif text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Gallery
            </h2>
            <div className="section-divider mt-4" />
            <p className="text-white/40 text-sm mt-4 font-sans">
              ✨ Replace these with your favourite photos together ✨
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {placeholders.map((item, i) => (
              <div
                key={i}
                className={`photo-placeholder rounded-2xl aspect-square flex flex-col items-center justify-center gap-3 cursor-pointer hover:scale-105 transition-all duration-300 hover:glow-rose group`}
                style={{
                  transitionDelay: `${i * 80}ms`,
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'scale(1)' : 'scale(0.8)',
                  transition: `all 0.5s ease ${i * 80}ms`,
                }}
              >
                <span
                  className="text-5xl md:text-6xl group-hover:scale-110 transition-transform duration-300"
                  style={{ animation: `float ${4 + i * 0.5}s ease-in-out infinite` }}
                >
                  {item.emoji}
                </span>
                <p className="text-white/50 text-xs text-center font-sans px-3 group-hover:text-rose-300 transition-colors">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <div className="glass rounded-2xl px-6 py-4 inline-block">
              <p className="text-white/50 text-sm font-sans">
                💡 To add photos: replace the placeholders in{' '}
                <code className="text-rose-400 text-xs">PhotoGallery.jsx</code>{' '}
                with{' '}
                <code className="text-rose-400 text-xs">&lt;img src="..." /&gt;</code>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
