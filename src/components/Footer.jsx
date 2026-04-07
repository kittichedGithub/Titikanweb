import React from 'react'

export default function Footer() {
  return (
    <footer className="relative py-20 px-4 text-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 100%, rgba(190, 18, 60, 0.2) 0%, transparent 70%)',
        }}
      />
      <div className="relative z-10 max-w-2xl mx-auto">
        <div
          className="text-7xl md:text-8xl mb-8 inline-block"
          style={{ animation: 'heartbeat 1.5s ease-in-out infinite' }}
        >
          ❤️
        </div>

        <h2
          className="gradient-text font-serif text-3xl md:text-4xl font-bold mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          I love you more than words
        </h2>

        <p
          className="text-blush font-script text-2xl mb-8"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          ...and I always will, Titikan.
        </p>

        <div className="section-divider mb-8" />

        <div className="flex justify-center gap-6 text-3xl mb-10">
          {['🌹', '💕', '✨', '💕', '🌹'].map((e, i) => (
            <span
              key={i}
              style={{
                animation: `float ${3 + i * 0.4}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            >
              {e}
            </span>
          ))}
        </div>

        <p className="text-white/20 text-xs font-sans tracking-widest uppercase">
          Made with ❤️ just for you
        </p>
      </div>
    </footer>
  )
}
