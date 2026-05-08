import { motion } from 'framer-motion'
import { loveLetter } from '../data/content'
import './LoveLetter.css'

export default function LoveLetter() {
  return (
    <section className="letter" id="letter">
      <motion.div
        className="letter__header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-tag">💌 From My Heart 💌</span>
        <h2 className="section-title">A Love Letter</h2>
        <p className="section-subtitle">Some things are better said on paper.</p>
      </motion.div>

      <motion.div
        className="letter__paper"
        initial={{ opacity: 0, y: 50, rotate: -1 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, type: 'spring', bounce: 0.2 }}
      >
        {/* Decorative tape */}
        <div className="letter__tape" />
        <div className="letter__tape letter__tape--bottom" />

        {/* Lines decoration */}
        <div className="letter__lines" aria-hidden="true" />

        <div className="letter__content">
          <motion.p
            className="letter__salutation"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {loveLetter.salutation}
          </motion.p>

          {loveLetter.paragraphs.map((para, i) => (
            <motion.p
              key={i}
              className="letter__paragraph"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
            >
              {para}
            </motion.p>
          ))}

          <motion.div
            className="letter__closing"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="letter__closing-text">{loveLetter.closing}</p>
            <p className="letter__signature">{loveLetter.signature}</p>
          </motion.div>

          {/* Decorative hearts */}
          <div className="letter__hearts" aria-hidden="true">
            <span>💕</span><span>💖</span><span>💕</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
