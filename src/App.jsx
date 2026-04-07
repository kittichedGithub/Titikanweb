import React, { useState } from 'react'
import FloatingPetals from './components/FloatingPetals'
import Hero from './components/Hero'
import QuizFlow from './components/QuizFlow'

export default function App() {
  const [started, setStarted] = useState(false)

  return (
    <div className="relative min-h-screen bg-[#0d0010] text-white overflow-x-hidden">
      <FloatingPetals />

      <div className="relative z-10">
        {!started ? (
          <Hero onStart={() => setStarted(true)} />
        ) : (
          <QuizFlow />
        )}
      </div>
    </div>
  )
}
