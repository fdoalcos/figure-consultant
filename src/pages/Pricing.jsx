import { useState } from 'react'
import { Link } from 'react-router-dom'

const plans = [
  {
    tier: 'Starter',
    price: '1,500',
    sub: '',
    desc: 'One-time build fee. Best for early-stage businesses getting online.',
    features: [
      { yes: true, text: 'Up to 5 pages' },
      { yes: true, text: 'Mobile-responsive design' },
      { yes: true, text: 'Contact form integration' },
      { yes: true, text: '2 rounds of revisions' },
      { yes: false, text: 'AI automations' },
      { yes: false, text: 'Monthly support' },
    ],
    cta: 'Get started',
    popular: false,
  },
  {
    tier: 'Growth',
    price: '3,500',
    sub: '',
    desc: 'One-time build + optional $499/mo maintenance. Our most-chosen package.',
    features: [
      { yes: true, text: 'Up to 12 pages' },
      { yes: true, text: 'Custom design system' },
      { yes: true, text: '2 AI automations included' },
      { yes: true, text: 'CRM integration' },
      { yes: true, text: 'SEO + Analytics setup' },
      { yes: true, text: 'Unlimited revisions (30 days)' },
    ],
    cta: 'Book a Call →',
    popular: true,
  },
  {
    tier: 'Full Transformation',
    price: '6,500',
    sub: '+',
    desc: 'Custom quote. Complete digital transformation with ongoing retainer support.',
    features: [
      { yes: true, text: 'Unlimited pages' },
      { yes: true, text: 'Full automation stack' },
      { yes: true, text: 'Monthly strategy calls' },
      { yes: true, text: 'Priority support (24hr SLA)' },
      { yes: true, text: 'Quarterly performance reviews' },
      { yes: true, text: 'Custom integrations' },
    ],
    cta: 'Contact us',
    popular: false,
  },
]

const retainerPlans = [
  {
    tier: 'Lite',
    price: '299',
    desc: 'Minor updates and bug fixes. Best for stable sites.',
    features: ['Up to 2hr changes/mo', 'Bug fixes & security patches', 'Monthly performance report'],
    popular: false,
  },
  {
    tier: 'Care',
    price: '499',
    desc: 'Ongoing updates and support. Most popular choice.',
    features: ['Up to 5hr changes/mo', 'Priority support', 'Monthly strategy check-in', 'SEO monitoring'],
    popular: true,
  },
  {
    tier: 'Growth',
    price: '999',
    desc: 'Active partnership for fast-moving teams.',
    features: ['Up to 12hr changes/mo', 'New features & A/B testing', 'Weekly check-ins', 'Analytics & CRO'],
    popular: false,
  },
]

const faqs = [
  { q: "What's included in the build fee?", a: "Everything you need to go from zero to a live, fully functional website or automation system. Design, development, integrations, QA, and launch are all included. Hosting is separate and typically runs $20–50/month depending on your needs." },
  { q: "Can I cancel my monthly retainer?", a: "Yes. Monthly retainers are month-to-month with no long-term commitment. You can cancel or pause anytime with 14 days' notice." },
  { q: "How long does a project typically take?", a: "Most projects launch within 3–4 weeks from the kickoff call. The Full Transformation track may take 5–6 weeks depending on scope. We'll give you a precise timeline in your proposal." },
  { q: "Do you work with early-stage startups?", a: "Absolutely. Our Starter plan is designed for founders who are just getting started and need a professional online presence without a massive investment." },
  { q: "What if I need something custom?", a: "Reach out and we'll scope it together. The Full Transformation plan is fully custom-quoted based on your specific needs. Nothing is off the table." },
  { q: "Do you offer payment plans?", a: "Yes. For projects over $3,000 we offer a 50% upfront / 50% on launch payment split. We can also discuss monthly payment options for the right fit." },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setOpen(o => !o)}>
        {q}
        <span style={{ fontSize: 18, flexShrink: 0 }}>{open ? '−' : '+'}</span>
      </button>
      {open && <p className="faq-answer">{a}</p>}
    </div>
  )
}

export default function Pricing() {
  const [billing, setBilling] = useState('onetime')

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="section-label">Pricing</div>
          <h1 className="page-hero-title">Transparent,<br />no-surprise pricing</h1>
          <p className="page-hero-sub">One-time build fee + optional monthly retainer. No hidden costs, no scope creep, no BS.</p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="pricing-section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="pricing-header">
            <div className="pricing-toggle">
              <div className="pricing-toggle-inner">
                <button className={`toggle-btn${billing === 'onetime' ? ' active' : ''}`} onClick={() => setBilling('onetime')}>One-time</button>
                <button className={`toggle-btn${billing === 'retainer' ? ' active' : ''}`} onClick={() => setBilling('retainer')}>Monthly retainer</button>
              </div>
            </div>
          </div>

          {billing === 'onetime' ? (
            <>
              <div className="pricing-grid">
                {plans.map(p => (
                  <div key={p.tier} className={`pricing-card${p.popular ? ' popular' : ''}`}>
                    {p.popular && <div className="popular-badge">⭐ Most popular</div>}
                    <div className="pricing-tier">{p.tier}</div>
                    <div className="pricing-price"><sup>$</sup>{p.price}{p.sub && <sub>{p.sub}</sub>}</div>
                    <div className="pricing-desc">{p.desc}</div>
                    <hr className="pricing-divider" />
                    <div className="pricing-features">
                      {p.features.map(f => (
                        <div key={f.text} className="pricing-feature" style={!f.yes ? { color: 'var(--gray-300)' } : {}}>
                          <span className="feature-check" style={!f.yes ? { color: 'var(--gray-300)' } : {}}>{f.yes ? '✓' : '✗'}</span>
                          {f.text}
                        </div>
                      ))}
                    </div>
                    <div className="pricing-btn">
                      <Link to="/contact">{p.cta}</Link>
                    </div>
                  </div>
                ))}
              </div>
              <p className="pricing-note">All plans include a <strong>free 30-minute discovery call</strong>. No commitment required.</p>
            </>
          ) : (
            <>
              <div className="pricing-grid">
                {retainerPlans.map(p => (
                  <div key={p.tier} className={`pricing-card${p.popular ? ' popular' : ''}`}>
                    {p.popular && <div className="popular-badge">⭐ Most popular</div>}
                    <div className="pricing-tier">{p.tier}</div>
                    <div className="pricing-price"><sup>$</sup>{p.price}<sub>/mo</sub></div>
                    <div className="pricing-desc">{p.desc}</div>
                    <hr className="pricing-divider" />
                    <div className="pricing-features">
                      {p.features.map(f => (
                        <div key={f} className="pricing-feature">
                          <span className="feature-check">✓</span>{f}
                        </div>
                      ))}
                    </div>
                    <div className="pricing-btn">
                      <Link to="/contact">Get started</Link>
                    </div>
                  </div>
                ))}
              </div>
              <p className="pricing-note">Monthly retainers are <strong>cancel anytime</strong>. Requires an active Figure-built website.</p>
            </>
          )}
        </div>
      </section>

      {/* Monthly Maintenance Upsell */}
      <section className="maintenance-section">
        <div className="container">
          <div className="maintenance-card">
            <div>
              <div className="maintenance-title">Add monthly maintenance to any project</div>
              <p className="maintenance-desc">Keep your site fast, secure, and evolving. Our Care plan pairs perfectly with any one-time build — add it at checkout or anytime after launch.</p>
              <Link to="/contact" className="btn-primary" style={{ marginTop: 20, width: 'fit-content' }}>Add to my project →</Link>
            </div>
            <div className="maintenance-price">
              <div className="maintenance-price-value">$499<span style={{ fontSize: 18, fontWeight: 500, color: 'var(--gray-400)' }}>/mo</span></div>
              <div className="maintenance-price-label">Care plan · cancel anytime</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="faq-header">
            <div className="section-label">FAQ</div>
            <h2 className="section-title" style={{ marginTop: 12 }}>Common questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map(f => <FaqItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="cta-band-inner">
          <h2 className="cta-band-title">Not sure which plan is right?</h2>
          <p className="cta-band-sub">Book a free 30-minute call. We'll recommend the right fit for your budget and goals — no pressure.</p>
          <div className="cta-band-btns">
            <Link to="/contact" className="btn-white">Book a Free Call →</Link>
            <Link to="/services" className="btn-ghost-white">See all services</Link>
          </div>
        </div>
      </section>
    </>
  )
}
