import Landing from './components/Landing'
import OurStory from './components/OurStory'
import ReasonsILoveYou from './components/ReasonsILoveYou'
import PhotoGallery from './components/PhotoGallery'
import LoveLetter from './components/LoveLetter'
import FinalSurprise from './components/FinalSurprise'
import FloatingHearts from './components/FloatingHearts'
import MusicToggle from './components/MusicToggle'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <>
      {/* Global ambient overlays */}
      <FloatingHearts />
      <MusicToggle />

      {/* Navigation dots */}
      <nav className="nav-dots" aria-label="Page sections">
        {['home', 'story', 'reasons', 'gallery', 'letter', 'surprise'].map((id, i) => (
          <a
            key={id}
            href={`#${id}`}
            className="nav-dot"
            aria-label={`Go to ${id} section`}
            title={id.charAt(0).toUpperCase() + id.slice(1)}
          />
        ))}
      </nav>

      {/* Page sections */}
      <main>
        <Landing />
        <OurStory />
        <ReasonsILoveYou />
        <PhotoGallery />
        <LoveLetter />
        <FinalSurprise />
      </main>

      <Footer />
    </>
  )
}
