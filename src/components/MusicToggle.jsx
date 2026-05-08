import { useState, useRef, useEffect } from 'react'
import './MusicToggle.css'

export default function MusicToggle() {
  const [playing, setPlaying] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = new Audio()
    audio.loop = true
    audio.volume = 0.35
    audio.preload = 'none'

    audio.addEventListener('canplaythrough', () => setLoaded(true))
    audio.addEventListener('error', () => setLoaded(false))

    // Only set src after mount — triggers preload
    audio.src = '/audio/background.mp3'
    audioRef.current = audio

    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return

    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {})
    }
  }

  return (
    <button
      className={`music-toggle ${playing ? 'music-toggle--playing' : ''}`}
      onClick={toggle}
      aria-label={playing ? 'Pause music' : 'Play music'}
      title={playing ? 'Pause music' : 'Play background music'}
    >
      <span className="music-toggle__icon">{playing ? '🎵' : '🎶'}</span>
      <span className="music-toggle__label">{playing ? 'Pause' : 'Music'}</span>
      {playing && <span className="music-toggle__pulse" aria-hidden="true" />}
    </button>
  )
}
