import { Link } from 'react-router-dom'

const stats = [
  { value: '40+', label: 'Projects delivered' },
  { value: '4 wks', label: 'Avg. time to launch' },
  { value: '98%', label: 'Client satisfaction' },
  { value: '3 yrs', label: 'In business' },
]

const skills = [
  { label: 'Web Design & Development', pct: '95%' },
  { label: 'AI & Automation', pct: '88%' },
  { label: 'Conversion Optimization', pct: '82%' },
  { label: 'Brand Strategy', pct: '75%' },
]

const testimonials = [
  { initials: 'JL', quote: '"Figure completely transformed how we show up online. Within 6 weeks of launch our inbound leads doubled. Best investment we\'ve made."', name: 'Jordan Lee', role: 'CEO, NovaTech' },
  { initials: 'MR', quote: '"The AI intake automation they built has saved my team 15+ hours a week. It just works — every time. Worth every penny and then some."', name: 'Marcus Reid', role: 'Partner, Crestline Legal' },
  { initials: 'AP', quote: '"They delivered in 4 weeks what agencies quoted us 3 months for. The new site is stunning and our demo requests went through the roof."', name: 'Aisha Patel', role: 'Founder, Orbit Analytics' },
]

export default function About() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="section-label">About</div>
          <h1 className="page-hero-title">We're builders,<br />not account managers</h1>
          <p className="page-hero-sub">A boutique digital agency run by engineers and designers who've worked at product companies — obsessed with shipping great work.</p>
        </div>
      </section>

      {/* About Main */}
      <section className="about-section">
        <div className="container">
          <div className="about-inner">
            <div className="about-content">
              <div className="section-label">About</div>
              <h2 className="about-title">We're builders,<br />not account managers</h2>
              <p className="about-body">Figure Consulting is a boutique digital agency run by engineers and designers who have worked at product companies. We don't have layers of middle management — just a small, focused team obsessed with shipping great work.</p>
              <p className="about-body">We're not the right fit for everyone. But if you want fast execution, honest communication, and results you can measure — let's talk.</p>
              <div className="about-stats">
                {stats.map(s => (
                  <div key={s.label} className="about-stat">
                    <div className="about-stat-value">{s.value}</div>
                    <div className="about-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn-primary" style={{ marginTop: 8, width: 'fit-content' }}>Work with us →</Link>
            </div>
            <div className="about-visual">
              <div className="about-visual-header">
                <div className="about-visual-avatar">L</div>
                <div>
                  <div className="about-visual-name">Laura Dang</div>
                  <div className="about-visual-role">Founder &amp; Lead Strategist</div>
                </div>
              </div>
              <div className="about-visual-body">
                <div style={{ fontSize: 13, color: 'var(--gray-400)', marginBottom: 4 }}>Expertise</div>
                {skills.map(s => (
                  <div key={s.label} className="about-skill">
                    <div className="about-skill-label">{s.label}</div>
                    <div className="about-skill-bar">
                      <div className="about-skill-fill" style={{ width: s.pct }}></div>
                    </div>
                  </div>
                ))}
                <div style={{ marginTop: 'auto', paddingTop: 16, borderTop: '1px solid var(--gray-200)' }}>
                  <div style={{ fontSize: 12, color: 'var(--gray-400)', marginBottom: 8 }}>Previously at</div>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    <span className="badge">Google</span>
                    <span className="badge">Shopify</span>
                    <span className="badge">Y Combinator</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Philosophy */}
      <section style={{ padding: '80px 0', background: 'var(--gray-50)', borderTop: '1px solid var(--gray-200)' }}>
        <div className="container">
          <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
            <div className="section-label">Our philosophy</div>
            <h2 className="section-title" style={{ marginTop: 12, marginBottom: 20 }}>We only win when you win</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
              Most agencies charge for hours. We charge for outcomes. That means we're incentivized to ship fast, ship right, and make sure what we build actually performs.
            </p>
            <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
              {[
                { icon: '⚡', title: 'Move fast', desc: 'No 3-month timelines. Most projects go live in 3–4 weeks.' },
                { icon: '🎯', title: 'Stay focused', desc: 'Small, senior team. No juniors running your account.' },
                { icon: '📊', title: 'Measure everything', desc: 'If we can\'t measure it, we don\'t count it as a win.' },
              ].map(v => (
                <div key={v.title} className="card" style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: 24, marginBottom: 12 }}>{v.icon}</div>
                  <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 6, fontFamily: 'var(--font-display)' }}>{v.title}</div>
                  <div style={{ fontSize: 13, color: 'var(--gray-600)', lineHeight: 1.6 }}>{v.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-header">
            <div className="section-label">Testimonials</div>
            <h2 className="section-title" style={{ marginTop: 12 }}>Don't take our word for it</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map(t => (
              <div key={t.initials} className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-quote">{t.quote}</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initials}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="cta-band-inner">
          <h2 className="cta-band-title">Ready to work together?</h2>
          <p className="cta-band-sub">Book a free 30-minute discovery call. No sales pressure — just an honest conversation about your business.</p>
          <div className="cta-band-btns">
            <Link to="/contact" className="btn-white">Book a Free Call →</Link>
            <Link to="/case-studies" className="btn-ghost-white">See our work</Link>
          </div>
        </div>
      </section>
    </>
  )
}
