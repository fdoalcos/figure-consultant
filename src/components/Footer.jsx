import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="footer-logo-mark">F</div>
              Figure Consulting
            </Link>
            <p className="footer-tagline">Websites and AI automations that turn visitors into revenue. Built by builders, not account managers.</p>
            <div className="footer-socials">
              <div className="footer-social">𝕏</div>
              <div className="footer-social">in</div>
              <div className="footer-social">▶</div>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Services</div>
            <div className="footer-links">
              <Link to="/services">Website Redesign</Link>
              <Link to="/services">AI Automations</Link>
              <Link to="/services">Full Transformation</Link>
              <Link to="/pricing">Monthly Retainer</Link>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Company</div>
            <div className="footer-links">
              <Link to="/about">About</Link>
              <Link to="/case-studies">Case Studies</Link>
              <Link to="/about">Testimonials</Link>
              <a href="#">Blog</a>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Legal</div>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Figure Consulting. All rights reserved.</span>
          <a href="mailto:hello@figureconsulting.co">hello@figureconsulting.co</a>
        </div>
      </div>
    </footer>
  )
}
