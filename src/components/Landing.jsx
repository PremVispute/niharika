import { motion } from 'framer-motion'
import { hero } from '../data/content'
import './Landing.css'

const stars = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 12 + 6,
  left: Math.random() * 100,
  top: Math.random() * 100,
  delay: Math.random() * 4,
  duration: Math.random() * 3 + 2,
}))

export default function Landing() {
  return (
    <section className="landing" id="home">
      {/* Animated gradient orbs */}
      <div className="landing__orb landing__orb--1" />
      <div className="landing__orb landing__orb--2" />
      <div className="landing__orb landing__orb--3" />

      {/* Twinkling stars */}
      {stars.map((s) => (
        <span
          key={s.id}
          className="landing__star"
          style={{
            width: s.size,
            height: s.size,
            left: `${s.left}%`,
            top: `${s.top}%`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="landing__content">
        <motion.div
          className="landing__badge"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
        >
          💖 A special place, just for you 💖
        </motion.div>

        <motion.h1
          className="landing__headline"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {hero.headline}
        </motion.h1>

        <motion.div
          className="landing__name"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, type: 'spring', bounce: 0.5 }}
        >
          {hero.name}
        </motion.div>

        <motion.p
          className="landing__subtext"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {hero.subtext}
        </motion.p>

        <motion.a
          href="#story"
          className="landing__scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <span className="landing__scroll-text">{hero.scrollHint}</span>
          <span className="landing__scroll-arrow">⬇</span>
        </motion.a>
      </div>
    </section>
  )
}
