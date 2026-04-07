import React, { useMemo } from 'react'

const PETALS = [
  { emoji: '🌸', size: 18 },
  { emoji: '❤️', size: 14 },
  { emoji: '🌹', size: 16 },
  { emoji: '💕', size: 13 },
  { emoji: '✨', size: 12 },
]

export default function FloatingPetals() {
  const petals = useMemo(() => {
    return Array.from({ length: 22 }, (_, i) => {
      const type = PETALS[i % PETALS.length]
      const left = Math.random() * 100
      const delay = Math.random() * 15
      const duration = 10 + Math.random() * 14
      const swayDuration = 3 + Math.random() * 4
      const opacity = 0.5 + Math.random() * 0.5
      return { id: i, left, delay, duration, swayDuration, opacity, ...type }
    })
  }, [])

  const stars = useMemo(() => {
    return Array.from({ length: 60 }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 1 + Math.random() * 2.5,
      delay: Math.random() * 4,
      duration: 1.5 + Math.random() * 3,
    }))
  }, [])

  return (
    <>
      {stars.map(star => (
        <div
          key={`star-${star.id}`}
          className="star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
      {petals.map(petal => (
        <div
          key={`petal-${petal.id}`}
          className="petal"
          style={{
            left: `${petal.left}%`,
            fontSize: `${petal.size}px`,
            opacity: petal.opacity,
            animationDuration: `${petal.duration}s, ${petal.swayDuration}s`,
            animationDelay: `${petal.delay}s, ${petal.delay * 0.5}s`,
          }}
        >
          {petal.emoji}
        </div>
      ))}
    </>
  )
}
