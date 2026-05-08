import { useEffect, useRef } from 'react'
import './FloatingHearts.css'

const HEART_CHARS = ['💖', '💕', '💗', '💓', '💝', '🌸', '✨']

let counter = 0

export default function FloatingHearts() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const spawnHeart = () => {
      const heart = document.createElement('span')
      heart.className = 'fh__heart'
      heart.textContent = HEART_CHARS[Math.floor(Math.random() * HEART_CHARS.length)]

      const size = Math.random() * 18 + 14
      const left = Math.random() * 100
      const duration = Math.random() * 4 + 5
      const delay = 0
      const drift = (Math.random() - 0.5) * 80

      heart.style.cssText = `
        left: ${left}%;
        font-size: ${size}px;
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
        --drift: ${drift}px;
        opacity: 0;
      `

      container.appendChild(heart)
      counter++

      // Remove after animation ends
      heart.addEventListener('animationend', () => {
        heart.remove()
        counter--
      })
    }

    // Initial burst
    for (let i = 0; i < 5; i++) {
      setTimeout(spawnHeart, i * 400)
    }

    // Periodic spawn every 1.8s
    const interval = setInterval(() => {
      if (counter < 20) spawnHeart()
    }, 1800)

    return () => clearInterval(interval)
  }, [])

  return <div ref={containerRef} className="fh" aria-hidden="true" />
}
