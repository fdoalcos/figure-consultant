import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/services', label: 'Services' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav>
        <div className="nav-inner">
          <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
            <div className="nav-logo-mark">F</div>
            Figure Consulting
          </Link>

          <div className="nav-links">
            {links.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          <div className="nav-right">
            <a href="#" className="btn-secondary" style={{ padding: '8px 18px', fontSize: '13px' }}>Sign in</a>
            <Link to="/contact" className="btn-primary" style={{ padding: '8px 18px', fontSize: '13px' }}>Book a Call →</Link>
          </div>

          <button
            className="nav-hamburger"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span style={open ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
            <span style={open ? { opacity: 0 } : {}} />
            <span style={open ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
          </button>
        </div>
      </nav>

      <div className={`nav-mobile ${open ? 'open' : ''}`}>
        {links.map(l => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </NavLink>
        ))}
        <div className="nav-mobile-btns">
          <a href="#" className="btn-secondary">Sign in</a>
          <Link to="/contact" className="btn-primary" onClick={() => setOpen(false)}>Book a Call →</Link>
        </div>
      </div>
    </>
  )
}
