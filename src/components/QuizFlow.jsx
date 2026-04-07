import React, { useState, useEffect, useRef } from 'react'

const STEPS = [
  {
    id: 0,
    stepLabel: 'ข้อที่ 1 / 3',
    question: 'วันนี้เป็นไงบ้างที่รัก?',
    options: [
      {
        emoji: '😊',
        text: 'มีความสุขดีนะเธอ',
        image: '/images/3.jpg',
        imagePosition: 'top',
        response: 'ดีมากๆเลยเห็นเธอมีความสุขเค้าก็มีความสุขเสมอ แฮปปี้นะเดี๋ยวเค้าก็ได้เจอเธอแล้วนะ แล้วเรามามีความสุขด้วยกัน',
      },
      {
        emoji: '😅',
        text: 'มีเรื่องมากมายเลยแหละ',
        image: '/images/4.jpg',
        imagePosition: 'center 70%',
        response: 'ไม่เป็นไรนะเธอไม่ว่าจะเจอเรื่องอะไรทุกอย่างจะผ่านไปได้ด้วยดีเสมอ เค้าจะอยู่กับเธอไปเรื่อยๆแบบที่ผ่านมาจนถึงวันครบรอบวันนี้นะ ไว้มาบ่นคุยกันได้เสมอๆเลย',
      },
      {
        emoji: '😢',
        text: 'เค้าเสียใจไม่มีความสุขเลย',
        image: '/images/5.jpg',
        imagePosition: 'center 30%',
        response: 'ที่รักฮึ่บๆเข้าไว้นะ เค้าขอให้เธอมีรอยยิ้มมีความสุขขึ้นๆ ไม่อยากให้เธอเศร้า เสียใจกับเรื่องใดๆเลย ไม่ว่ายังไงเค้าก็จะเป็นกำลังใจให้กับเธอและก็อยู่กับเธอเสมอนะ',
      },
      {
        emoji: '🥺',
        text: 'เค้าเหงามากอยากอยู่ด้วยกัน',
        image: '/images/8.jpg',
        imagePosition: 'center 70%',
        response: 'เค้าก็อยากอยู่ด้วยกัน อยากทำหลายๆอย่างเลยแหละ อยากกวนเธออยากทำให้เธอหงุดหงิด แม้กระทั้งคำตอบนี้5555 แต่นั้นแหละ เค้ารู้ได้นะเธอกดคำตอบนี้ในครั้งแรกแสดงว่าเค้าเดาถูก เก่งมะ5555 แต่ถ้าไม่ถูกเค้าต้องไปฝึกมาใหม่ ไม่ว่ายังไงเค้าก็จะอยู่กับเธอเสมอนะ ไม่เหงานะเดี๋ยวเราทั้งคู่ก็ได้เจอกันแล้ว ตอนนี้เค้ามาลองสำรวจโลกแทนเธอไว้เราค่อยมาด้วยกันนะ ขอโทษนะในวันครบรอบเราไม่ได้อยู่ด้วยกันเลย รักเธอนะ',
      },
    ],
  },
  {
    id: 1,
    stepLabel: 'ข้อที่ 2 / 3',
    question: 'ถ้าวันนี้เลือกได้ อยากทำอะไรด้วยกัน?',
    options: [
      { text: 'ไปกินของอร่อยๆกัน' },
      { text: 'ไปดูหนังกัน' },
      { text: 'ทำไอนั้นกันดีกว่า5555' },
      { text: 'อยากเจอหน้ากัน' },
    ],
    response: 'ไม่ว่าจะเป็นอะไร 💕\n ในข้อนี้เค้าก็อยากทำกับเธอทุกๆอย่างเลย อยากให้เธอมีความสุขนะและก็อยากให้เธอยิ้มได้เยอะๆ มีอะไรที่อยากทำหลังจากนี้ค่อยๆมาทำกันนะ',
    cardImages: ['/images/2.jpg', '/images/10.jpg', '/images/18.jpg', '/images/19.jpg', '/images/14.jpg'],
  },
  {
    id: 2,
    stepLabel: 'ข้อที่ 3 / 3',
    question: 'เธอรู้ไหมว่าเค้ารักเธอแค่ไหน?',
    options: [
      {text: 'เค้ารู้ว่าเธอรักเค้าเนาะ(ตายแน่ไอก้อง5555)' },
      {text: 'ไม่อะเธอไม่เคยทำให้เค้าเห็น' },
      {text: 'คิดว่าเท่ากับน้องหนาวแน่นอน' },
      {text: 'บอกให้รู้หน่อยได้ไหม?' },
    ],
    response: 'ฮั่นแน่ตอบได้ดีนิ555555มาดูสิ่งที่เค้าอยากบอกเธอนะ... 💌\nมีบางอย่างพิเศษรอที่รักอยู่ 3 2 1 กดเลยๆ',
    isLast: true,
  },
]

function FlipCard({ src, flipped, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        perspective: '800px',
        width: 'clamp(52px, 14vw, 72px)',
        height: 'clamp(78px, 21vw, 108px)',
        cursor: 'pointer',
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.65s ease',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #7f1d1d, #be123c, #e11d48)',
            border: '2px solid rgba(249,168,212,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '22px',
            boxShadow: '0 0 14px rgba(225,29,72,0.45)',
            opacity: 1,
          }}
        >
          ♡
        </div>
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            borderRadius: '10px',
            transform: 'rotateY(180deg)',
            overflow: 'hidden',
            border: '2px solid rgba(249,168,212,0.7)',
            boxShadow: '0 0 20px rgba(244,63,94,0.5)',
          }}
        >
          <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
        </div>
      </div>
    </div>
  )
}

function FlipCardSection({ images }) {
  const [flipped, setFlipped] = React.useState(() => images.map(() => false))

  function toggle(i) {
    setFlipped(prev => prev.map((v, idx) => idx === i ? !v : v))
  }

  return (
    <div className="mt-6">
      <p className="text-blush font-script text-lg mb-5 text-center" style={{ fontFamily: "'Dancing Script', cursive" }}>
        ลองจิ้มดูสิเธอ
      </p>
      <div className="flex justify-center gap-3 flex-wrap">
        {images.map((src, i) => (
          <FlipCard
            key={i}
            src={src}
            flipped={flipped[i]}
            onClick={() => toggle(i)}
          />
        ))}
      </div>
    </div>
  )
}

function QuizStep({ step, onAnswer, onNext, answered, selectedIdx }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(false)
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [step.id])

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-4 py-16 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="w-full max-w-lg mx-auto">
        <p
          className="text-white/30 font-sans text-xs tracking-widest uppercase mb-6 text-center"
        >
          {step.stepLabel}
        </p>

        <div
          className="text-5xl text-center mb-6"
          style={{ animation: 'float 4s ease-in-out infinite' }}
        >
          {step.icon}
        </div>

        <h2
          className="gradient-text font-serif text-2xl md:text-3xl font-bold text-center mb-10 leading-relaxed"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {step.question}
        </h2>

        {!answered ? (
          <div className="grid grid-cols-1 gap-3">
            {step.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => onAnswer(i)}
                className="group glass rounded-2xl px-6 py-4 flex items-center gap-4 text-left transition-all duration-200 hover:scale-[1.02] hover:glow-rose active:scale-95"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                  {opt.emoji}
                </span>
                <span className="text-white/80 font-sans text-base group-hover:text-white transition-colors">
                  {opt.text}
                </span>
              </button>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <div className="glass rounded-3xl p-8 mb-8 glow-rose">
              {step.options[selectedIdx].image && (
                <div className="my-5 rounded-2xl overflow-hidden">
                  <img
                    src={step.options[selectedIdx].image}
                    alt=""
                    className="w-full max-h-72 object-cover rounded-2xl"
                    style={{ boxShadow: '0 0 20px rgba(244, 63, 94, 0.3)', objectPosition: step.options[selectedIdx].imagePosition || 'center 50%' }}
                  />
                </div>
              )}
              <div className="section-divider my-4" />
              <p className="text-white/80 font-sans text-base leading-relaxed whitespace-pre-line">
                {step.options[selectedIdx].response || step.response}
              </p>
              {step.cardImages && (
                <FlipCardSection images={step.cardImages} />
              )}
            </div>

            <button
              onClick={onNext}
              className="group relative px-10 py-4 rounded-full font-sans text-base font-semibold tracking-wide overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #be123c, #e11d48, #fb7185)',
                boxShadow: '0 0 30px rgba(225, 29, 72, 0.4)',
              }}
            >
              <span className="relative z-10 flex items-center gap-3 text-white">
                <span>{step.isLast ? 'ดูจดหมายรัก 💌' : 'ข้อต่อไป →'}</span>
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

function LoveLetterStep({ onEnd }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-4 py-20 transition-all duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="w-full max-w-3xl mx-auto">
        <div className="text-center mb-12">
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
            style={{ background: 'radial-gradient(circle, #f9a8d4, transparent)' }}
          />
          <div
            className="absolute bottom-0 left-0 w-32 h-32 opacity-10"
            style={{ background: 'radial-gradient(circle, #fb7185, transparent)' }}
          />

          <p
            className="text-blush font-script text-2xl mb-8"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            ถึง จีน... คนเก่งของเค้า
          </p>

          <div className="space-y-6 text-white/80 font-sans text-base md:text-lg leading-loose">
            <p>
              สุขสันต์วันครบรอบนะจีน! แป๊บเดียวเองผ่านไปอีกเดือนแล้วเนอะ
              ขอบคุณจริงๆ นะที่เข้ามาเป็นเรื่องราวดีๆ ในชีวิตเค้า
              ขอบคุณที่คอยอยู่ข้างกันเสมอ ไม่ว่าจะเป็นวันที่เค้าเหนื่อยจากทั้งเรื่องงานและเรื่องเรียน
              ถึงแม้เดือนที่ผ่านมาจะมีทะเลาะกันบ้างแต่ก็ทำให้เราเข้าใจกันมากขึ้น
              หรือในวันที่เรามีความสุขหัวเราะไปด้วยกันก็อยากให้มีแบบนี้ไปอีกนานๆนะ
            </p>
            <p>
              เค้าอาจจะไม่ใช่คนพูดหวานบ่อยๆ หรือบางทีก็ยุ่งจนไม่มีเวลาให้บ้าง
              แต่ใจจริงคือรักและขอบคุณจีนเสมอที่เข้าใจและคอยซัพพอร์ตเค้ามาตลอด
              อยู่เป็นรอยยิ้มให้กันแบบนี้ไปนานๆ นะ
            </p>
            <p>
              วันครบรอบเดือนนี้เค้าขอโทษจริงๆ นะที่ไม่ได้อยู่ด้วยกัน
              ไม่ได้ไปกินข้าว ดูหนัง หรือฟังเพลงด้วยกันเลย แถมยังไม่ได้เล่นสนุกด้วยกันในวันหยุดสงกรานต์นี้ด้วย
              เสียดายมากๆ เลย... เค้าเองก็เหงาเหมือนกัน
              แต่ไม่เป็นไรนะ ไว้กลับมาแล้วเรามามีความสุขชดเชยกันให้เยอะๆ เลยนะ
              เดี๋ยวทางนี้จะเที่ยวเผื่อเยอะๆ แล้วในอนาคตเราค่อยไปเที่ยวด้วยกันนะ
            </p>
            <p>
              ช่วงที่เค้าไม่อยู่ หวังว่าจีนจะแฮปปี้ในทุกๆ วันนะ
              กินอิ่ม นอนหลับฝันดี อย่าเศร้าหรือเจอเรื่องไม่ดีเลยนะ
              แต่ถ้ามีอะไรเกิดขึ้น เค้าเชื่อว่าทุกอย่างจะผ่านไปได้ด้วยดีเสมอ
            </p>
            <p>
              สุดท้ายนี้... ขอให้ &ldquo;เว็บนี้&rdquo; เป็นของขวัญวันครบรอบของเรานะ
              ตั้งใจทำมาให้เพราะอยากเห็นจีนมีรอยยิ้มและสนุกไปกับมัน
              ถึงมันจะออกมาดูแปลกๆ ไปบ้างก็อย่าขำเค้านะ (แอบเขิน 555)
            </p>
          </div>

          <p
            className="font-script text-xl mt-10 text-right leading-relaxed"
            style={{ fontFamily: "'Dancing Script', cursive", color: '#d4a853' }}
          >
            รักจีนนะสุขสันต์วันครบรอบครับ,<br/>ก้อง
          </p>
        </div>

        <div className="text-center mt-10">
          <button
            onClick={onEnd}
            className="group relative px-10 py-4 rounded-full font-sans text-base font-semibold tracking-wide overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #be123c, #e11d48, #fb7185)',
              boxShadow: '0 0 30px rgba(225, 29, 72, 0.4)',
            }}
          >
            <span className="relative z-10 flex items-center gap-3 text-white">
              <span>End Credits</span>
            </span>
          </button>
        </div>

      </div>
    </div>
  )
}

function EndCreditStep() {
  const canvasRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const rockets = []
    const particles = []
    const COLORS = ['#ff6b9d', '#ff4d6d', '#ff8fab', '#ffd6e0', '#ffb3c1', '#fda4af', '#f9a8d4', '#fb7185']

    const heartPts = []
    for (let i = 0; i < 80; i++) {
      const t = (i / 80) * 2 * Math.PI
      heartPts.push({
        x: 16 * Math.pow(Math.sin(t), 3),
        y: -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)),
      })
    }

    function launchRocket() {
      const x = Math.random() * canvas.width * 0.8 + canvas.width * 0.1
      const targetY = Math.random() * canvas.height * 0.45 + canvas.height * 0.05
      rockets.push({
        x, y: canvas.height + 10,
        targetY,
        vy: -(canvas.height - targetY) / 55,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      })
    }

    function explode(rx, ry, color) {
      const scale = Math.random() * 2 + 4
      heartPts.forEach(pt => {
        const life = 70 + Math.random() * 50
        particles.push({
          x: rx, y: ry,
          vx: (pt.x * scale) / 25,
          vy: (pt.y * scale) / 25,
          color, alpha: 1, life, maxLife: life,
          size: Math.random() * 2 + 1,
        })
      })
    }

    let frame = 0
    launchRocket()

    function animate() {
      animId = requestAnimationFrame(animate)
      ctx.fillStyle = 'rgba(13, 0, 22, 0.18)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      frame++
      if (frame % 100 === 0) launchRocket()
      if (frame === 30) launchRocket()

      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i]
        r.y += r.vy
        ctx.globalAlpha = 0.9
        ctx.beginPath()
        ctx.arc(r.x, r.y, 3, 0, Math.PI * 2)
        ctx.fillStyle = r.color
        ctx.fill()
        ctx.globalAlpha = 1
        if (r.y <= r.targetY) {
          explode(r.x, r.y, r.color)
          rockets.splice(i, 1)
        }
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.04
        p.vx *= 0.985
        p.life--
        p.alpha = p.life / p.maxLife
        ctx.globalAlpha = Math.max(0, p.alpha)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()
        if (p.life <= 0) particles.splice(i, 1)
      }
      ctx.globalAlpha = 1
    }

    animate()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div
      className={`relative min-h-screen flex flex-col items-center justify-center transition-all duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}
      style={{ background: '#0d0016' }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="relative z-10 text-center px-4 pointer-events-none">
        <h1
          className="gradient-text font-serif text-2xl sm:text-3xl md:text-5xl font-bold mb-4 px-4 break-words"
          style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.3 }}
        >
          สุขสันต์วันครบรอบเด้อออ55555
        </h1>
        <p
          className="text-blush font-script text-3xl md:text-4xl mt-3"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          จีน & ก้อง
        </p>
        <p className="text-white/40 font-sans text-sm mt-10 tracking-widest uppercase">
          — The End —
        </p>
      </div>
    </div>
  )
}

export default function QuizFlow() {
  const [stepIndex, setStepIndex] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [selectedIdx, setSelectedIdx] = useState(null)
  const [showLetter, setShowLetter] = useState(false)
  const [showEndCredit, setShowEndCredit] = useState(false)

  const currentStep = STEPS[stepIndex]

  function handleAnswer(idx) {
    setSelectedIdx(idx)
    setAnswered(true)
  }

  function handleNext() {
    if (currentStep.isLast) {
      setShowLetter(true)
    } else {
      setAnswered(false)
      setSelectedIdx(null)
      setStepIndex(i => i + 1)
    }
  }

  if (showEndCredit) return <EndCreditStep />
  if (showLetter) return <LoveLetterStep onEnd={() => setShowEndCredit(true)} />

  return (
    <QuizStep
      key={stepIndex}
      step={currentStep}
      onAnswer={handleAnswer}
      onNext={handleNext}
      answered={answered}
      selectedIdx={selectedIdx}
    />
  )
}
