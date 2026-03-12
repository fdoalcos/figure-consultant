import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="section-label">Contact</div>
          <h1 className="page-hero-title">Let's build something<br />great together</h1>
          <p className="page-hero-sub">Whether you know exactly what you need or are still figuring it out — we're happy to help.</p>
        </div>
      </section>

      {/* Contact form */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-inner">
            <div className="contact-content">
              <div className="section-label">Get in touch</div>
              <h2 className="contact-title">Let's build something great together</h2>
              <p className="contact-body">Whether you know exactly what you need or are still figuring it out — we're happy to help. Fill out the form or reach out directly.</p>
              <div className="contact-meta">
                <div className="contact-meta-item">
                  <div className="contact-meta-icon">📧</div>
                  hello@figureconsulting.co
                </div>
                <div className="contact-meta-item">
                  <div className="contact-meta-icon">📅</div>
                  Usually respond within 24 hours
                </div>
                <div className="contact-meta-item">
                  <div className="contact-meta-icon">🌎</div>
                  Remote-first. Serving clients globally.
                </div>
              </div>

              {/* Book a call block */}
              <div style={{ marginTop: 32, padding: 28, background: 'var(--gray-50)', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-lg)' }}>
                <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 8, fontFamily: 'var(--font-display)' }}>Prefer to book directly?</div>
                <p style={{ fontSize: 14, color: 'var(--gray-600)', lineHeight: 1.6, marginBottom: 16 }}>Skip the form and book a 30-min discovery call directly on our calendar. Pick a time that works for you.</p>
                <a href="#" className="btn-primary" style={{ width: 'fit-content' }}>📅 Book on Calendly →</a>
              </div>
            </div>

            <div className="contact-form">
              <div className="form-title">Book a Discovery Call</div>
              <div className="form-row">
                <div className="form-field">
                  <label className="form-label">First name</label>
                  <input className="form-input" type="text" placeholder="Jordan" />
                </div>
                <div className="form-field">
                  <label className="form-label">Last name</label>
                  <input className="form-input" type="text" placeholder="Lee" />
                </div>
              </div>
              <div className="form-field">
                <label className="form-label">Email</label>
                <input className="form-input" type="email" placeholder="jordan@company.com" />
              </div>
              <div className="form-field">
                <label className="form-label">Company / Website</label>
                <input className="form-input" type="text" placeholder="Acme Inc. / acme.co" />
              </div>
              <div className="form-field">
                <label className="form-label">What are you looking for?</label>
                <select className="form-select">
                  <option>Website Redesign</option>
                  <option>AI Automations</option>
                  <option>Full Transformation</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div className="form-field">
                <label className="form-label">Tell us about your project</label>
                <textarea className="form-input" placeholder="What does your business do? What's the problem you're trying to solve?" />
              </div>
              <div className="form-submit">
                <a href="#" className="btn-accent" style={{ width: '100%', justifyContent: 'center', padding: '14px' }}>Book My Free Call →</a>
              </div>
              <p style={{ fontSize: 12, color: 'var(--gray-400)', textAlign: 'center' }}>No spam. No commitment. We'll follow up within 24 hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <section style={{ padding: '48px 0', background: 'var(--gray-50)', borderTop: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 48, flexWrap: 'wrap' }}>
            {[
              { value: '40+', label: 'Projects delivered' },
              { value: '4 wks', label: 'Avg. time to launch' },
              { value: '98%', label: 'Client satisfaction' },
              { value: '< 24h', label: 'Response time' },
            ].map(s => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-.03em', fontFamily: 'var(--font-display)' }}>{s.value}</div>
                <div style={{ fontSize: 13, color: 'var(--gray-400)', marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
