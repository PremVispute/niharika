import { useState } from 'react'
import { motion } from 'framer-motion'
import { reasons } from '../data/content'
import './ReasonsILoveYou.css'

function FlipCard({ emoji, front, back, index }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      className="flip-wrapper"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
    >
      <div
        className={`flip-card ${flipped ? 'flip-card--flipped' : ''}`}
        onClick={() => setFlipped((f) => !f)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setFlipped((f) => !f)}
        aria-label={`Reason ${index + 1}: ${front}`}
      >
        {/* Front */}
        <div className="flip-card__face flip-card__front">
          <span className="flip-card__emoji">{emoji}</span>
          <span className="flip-card__front-text">{front}</span>
          <span className="flip-card__hint">tap to reveal 💕</span>
        </div>

        {/* Back */}
        <div className="flip-card__face flip-card__back">
          <p className="flip-card__back-text">{back}</p>
          <span className="flip-card__back-icon">💖</span>
        </div>
      </div>
    </motion.div>
  )
}

export default function ReasonsILoveYou() {
  return (
    <section className="reasons" id="reasons">
      <motion.div
        className="reasons__header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-tag">💕 Always & Forever 💕</span>
        <h2 className="section-title">Reasons I Love You</h2>
        <p className="section-subtitle">Tap each card to reveal a secret reason ✨</p>
      </motion.div>

      <div className="reasons__grid">
        {reasons.map((r, i) => (
          <FlipCard key={i} {...r} index={i} />
        ))}
      </div>
    </section>
  )
}
