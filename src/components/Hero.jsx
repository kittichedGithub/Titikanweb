import React, { useEffect, useState } from 'react'

export default function Hero({ onStart }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 40%, rgba(190, 18, 60, 0.25) 0%, rgba(13, 0, 16, 0) 70%)',
        }}
      />

      <div
        className={`relative z-10 transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <p
          className="text-blush font-script text-2xl md:text-3xl mb-4 tracking-wide"
          style={{ fontFamily: "'Dancing Script', cursive", animationDelay: '0.2s' }}
        >
          A love letter to
        </p>

        <h1
          className="gradient-text font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight text-glow"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Titikan
        </h1>
        <h2
          className="gradient-text-gold font-serif text-3xl md:text-5xl lg:text-6xl font-semibold mb-10"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Yodsavad
        </h2>

        <div className="mt-14">
          <button
            onClick={onStart}
            className="group relative px-10 py-4 rounded-full font-sans text-base font-semibold tracking-wide overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #be123c, #e11d48, #fb7185)',
              boxShadow: '0 0 30px rgba(225, 29, 72, 0.5), 0 0 60px rgba(225, 29, 72, 0.2)',
            }}
          >
            <span className="relative z-10 flex items-center gap-3 text-white">
              <span>ไปผจญภัยกัน</span>
              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">✨</span>
            </span>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'linear-gradient(135deg, #e11d48, #fb7185, #fda4af)',
              }}
            />
          </button>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-0"
        style={{
          background: 'linear-gradient(to bottom, transparent, #0d0010)',
        }}
      />
    </section>
  )
}
