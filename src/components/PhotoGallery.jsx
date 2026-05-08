import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { photos } from '../data/content'
import './PhotoGallery.css'

function Lightbox({ photo, onClose, onPrev, onNext }) {
  return (
    <AnimatePresence>
      <motion.div
        className="lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        aria-modal="true"
        role="dialog"
      >
        <motion.div
          className="lightbox__content"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: 'spring', bounce: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="lightbox__close" onClick={onClose} aria-label="Close">✕</button>

          <div className="lightbox__img-wrapper">
            {photo.src ? (
              <img src={photo.src} alt={photo.alt} className="lightbox__img" />
            ) : (
              <div className="lightbox__placeholder">
                <span className="lightbox__placeholder-emoji">{photo.emoji}</span>
                <span className="lightbox__placeholder-text">{photo.alt}</span>
              </div>
            )}
          </div>

          <p className="lightbox__caption">{photo.alt}</p>

          <div className="lightbox__nav">
            <button className="lightbox__nav-btn" onClick={onPrev}>‹</button>
            <button className="lightbox__nav-btn" onClick={onNext}>›</button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function PhotoGallery() {
  const [activeIdx, setActiveIdx] = useState(null)

  const openPhoto = useCallback((idx) => setActiveIdx(idx), [])
  const closePhoto = useCallback(() => setActiveIdx(null), [])
  const prevPhoto = useCallback(() => setActiveIdx((i) => (i - 1 + photos.length) % photos.length), [])
  const nextPhoto = useCallback(() => setActiveIdx((i) => (i + 1) % photos.length), [])

  return (
    <section className="gallery" id="gallery">
      <motion.div
        className="gallery__header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-tag">📸 Our Memories 📸</span>
        <h2 className="section-title">Our Gallery</h2>
        <p className="section-subtitle">Every picture holds a thousand feelings.</p>
      </motion.div>

      <div className="gallery__grid">
        {photos.map((photo, i) => (
          <motion.div
            key={photo.id}
            className={`gallery__item gallery__item--${(i % 3 === 0) ? 'tall' : 'normal'}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: (i % 6) * 0.07 }}
            whileHover={{ scale: 1.03, zIndex: 2 }}
            onClick={() => openPhoto(i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && openPhoto(i)}
            aria-label={`Open photo: ${photo.alt}`}
          >
            {photo.src ? (
              <img src={photo.src} alt={photo.alt} className="gallery__img" loading="lazy" />
            ) : (
              <div className="gallery__placeholder">
                <span className="gallery__placeholder-emoji">{photo.emoji}</span>
                <span className="gallery__placeholder-label">{photo.alt}</span>
              </div>
            )}
            <div className="gallery__overlay">
              <span className="gallery__overlay-icon">🔍</span>
            </div>
          </motion.div>
        ))}
      </div>

      {activeIdx !== null && (
        <Lightbox
          photo={photos[activeIdx]}
          onClose={closePhoto}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}
    </section>
  )
}
