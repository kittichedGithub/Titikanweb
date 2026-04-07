import React, { useEffect, useRef, useState } from 'react'

export default function LoveLetter() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="letter" ref={ref} className="relative py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="text-center mb-14">
            <p className="text-blush font-script text-xl mb-3" style={{ fontFamily: "'Dancing Script', cursive" }}>
              words from my heart
            </p>
            <h2
              className="gradient-text font-serif text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              My Love Letter
            </h2>
            <div className="section-divider mt-4" />
          </div>

          <div className="glass rounded-3xl p-8 md:p-12 glow-rose relative overflow-hidden">
            <div
              className="absolute top-0 right-0 w-40 h-40 opacity-10"
              style={{
                background: 'radial-gradient(circle, #f9a8d4, transparent)',
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-32 h-32 opacity-10"
              style={{
                background: 'radial-gradient(circle, #fb7185, transparent)',
              }}
            />

            <p
              className="text-blush font-script text-2xl mb-8"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              ถึง จีน,
            </p>

            <div className="space-y-5 text-white/80 font-sans text-base md:text-lg leading-relaxed">
              <p>
                From the very first moment I saw you, something changed inside me — quietly, completely,
                and beautifully. You have a way of making the ordinary feel magical, and every single day
                spent with you is a day I treasure more than words can say.
              </p>
              <p>
                You are my calm in the chaos, my laughter on hard days, my reason to smile every single
                morning. The way you care, the way you love — it fills my world with a warmth I never
                knew I needed until I found you.
              </p>
              <p>
                I want you to know that I am endlessly grateful for you. For your kindness, your patience,
                your beautiful soul. You inspire me to be better every day just by being exactly who you are.
              </p>
              <p>
                No matter how many tomorrows we have, I would choose you again in every single one of them.
                You are my today, my tomorrow, and every dream in between.
              </p>
            </div>

            <p
              className="text-gold font-script text-2xl mt-10 text-right"
              style={{ fontFamily: "'Dancing Script', cursive", color: '#d4a853' }}
            >
              Forever yours, with all my love ❤️
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
