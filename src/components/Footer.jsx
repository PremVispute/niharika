import { footer } from '../data/content'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__hearts" aria-hidden="true">
        <span>💖</span><span>💕</span><span>💖</span>
      </div>
      <p className="footer__message">{footer.message}</p>
      <p className="footer__copy">© {new Date().getFullYear()} • Just for you, forever 🌸</p>
    </footer>
  )
}
