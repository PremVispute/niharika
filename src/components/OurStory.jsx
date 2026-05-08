import { motion } from 'framer-motion'
import { storyMilestones } from '../data/content'
import './OurStory.css'

const itemVariants = {
  hidden: (dir) => ({ opacity: 0, x: dir === 'left' ? -60 : 60 }),
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, type: 'spring', bounce: 0.3 } },
}

export default function OurStory() {
  return (
    <section className="story" id="story">
      <div className="story__bg-decor" />

      <motion.div
        className="story__header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-tag">✨ Chapter One ✨</span>
        <h2 className="section-title">Our Story</h2>
        <p className="section-subtitle">Every moment that made us, <em>us</em>.</p>
      </motion.div>

      <div className="story__timeline">
        <div className="story__line" />

        {storyMilestones.map((item, i) => {
          const dir = i % 2 === 0 ? 'left' : 'right'
          return (
            <motion.div
              key={item.id}
              className={`story__item story__item--${dir}`}
              custom={dir}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <div className="story__dot">
                <span>{item.emoji}</span>
              </div>

              <div className="story__card">
                <span className="story__date">{item.date}</span>
                <h3 className="story__title">{item.title}</h3>
                <p className="story__desc">{item.description}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
