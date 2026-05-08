import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { surprise } from '../data/content'
import './FinalSurprise.css'

function Confetti() {
  const pieces = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    color: ['#FFB7C5', '#C9B1FF', '#FFD700', '#FF85A1', '#B8F0E6'][i % 5],
    delay: Math.random() * 1.2,
    duration: Math.random() * 1.5 + 1.5,
    size: Math.random() * 10 + 6,
    shape: i % 3 === 0 ? '❤️' : i % 3 === 1 ? '✨' : '🌸',
  }))

  return (
    <div className="confetti" aria-hidden="true">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti__piece"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            fontSize: p.size,
          }}
        >
          {p.shape}
        </span>
      ))}
    </div>
  )
}

export default function FinalSurprise() {
  const [revealed, setRevealed] = useState(false)
  const sectionRef = useRef(null)

  const handleReveal = () => {
    setRevealed(true)
    // Scroll into view nicely after a tick
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 100)
  }

  return (
    <section className="surprise" id="surprise" ref={sectionRef}>
      <div className="surprise__bg-orb surprise__bg-orb--1" />
      <div className="surprise__bg-orb surprise__bg-orb--2" />

      <motion.div
        className="surprise__inner"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <AnimatePresence mode="wait">
          {!revealed ? (
            <motion.div
              key="button-state"
              className="surprise__pre"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <div className="surprise__teaser-hearts" aria-hidden="true">
                <span>💝</span><span>💝</span><span>💝</span>
              </div>
              <h2 className="surprise__pre-title">There's one more thing…</h2>
              <p className="surprise__pre-subtitle">Are you ready for a little surprise?</p>
              <motion.button
                className="surprise__btn"
                onClick={handleReveal}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              >
                {surprise.buttonText}
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="revealed-state"
              className="surprise__revealed"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', bounce: 0.5, duration: 0.8 }}
            >
              <Confetti />

              <motion.div
                className="surprise__big-heart"
                animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              >
                💖
              </motion.div>

              <motion.h2
                className="surprise__message"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {surprise.message}
              </motion.h2>

              <motion.p
                className="surprise__sub-message"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {surprise.subMessage}
              </motion.p>

              <motion.div
                className="surprise__hearts-row"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                aria-hidden="true"
              >
                {'💕 💖 💕 💖 💕'.split(' ').map((h, i) => (
                  <span key={i} style={{ animationDelay: `${i * 0.2}s` }}>{h}</span>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
