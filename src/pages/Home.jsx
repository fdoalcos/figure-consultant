import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-announce">
          <div className="hero-announce-dot"></div>
          Now accepting Q2 2026 clients
        </div>
        <h1 className="hero-title">
          Websites &amp; AI that<br /><span>grow your business</span>
        </h1>
        <p className="hero-sub">We design, build, and automate the digital infrastructure ambitious businesses need to scale — from stunning redesigns to full AI transformation.</p>
        <div className="hero-ctas">
          <Link to="/contact" className="btn-primary" style={{ fontSize: '15px', padding: '13px 26px' }}>Book a Free Call →</Link>
          <Link to="/case-studies" className="btn-secondary" style={{ fontSize: '15px', padding: '13px 26px' }}>See Our Work</Link>
        </div>
        <div className="hero-social-proof">
          <div className="hero-avatars">
            <div className="hero-avatar">JL</div>
            <div className="hero-avatar">MR</div>
            <div className="hero-avatar">AP</div>
            <div className="hero-avatar">SK</div>
          </div>
          <span>Trusted by <strong>40+ founders</strong> across North America</span>
        </div>
        <div className="hero-preview">
          <div className="hero-preview-bar">
            <div className="hero-preview-dot" style={{ background: '#FF5F57' }}></div>
            <div className="hero-preview-dot" style={{ background: '#FEBC2E' }}></div>
            <div className="hero-preview-dot" style={{ background: '#28C840' }}></div>
            <div className="hero-preview-url">figconsulting.co/dashboard</div>
          </div>
          <div className="hero-preview-body">
            <div className="hero-preview-metric">
              <div className="hero-preview-metric-label">Leads Generated</div>
              <div className="hero-preview-metric-value">284 <span>↑ 62%</span></div>
            </div>
            <div className="hero-preview-metric">
              <div className="hero-preview-metric-label">Conversion Rate</div>
              <div className="hero-preview-metric-value">8.4% <span>↑ 3.1%</span></div>
            </div>
            <div className="hero-preview-chart">
              <div style={{ fontSize: '12px', color: 'var(--gray-400)', fontWeight: 500 }}>Monthly Performance</div>
              <div className="chart-bars">
                <div className="chart-bar" style={{ height: '30%' }}></div>
                <div className="chart-bar" style={{ height: '45%' }}></div>
                <div className="chart-bar" style={{ height: '35%' }}></div>
                <div className="chart-bar" style={{ height: '60%' }}></div>
                <div className="chart-bar" style={{ height: '50%' }}></div>
                <div className="chart-bar active" style={{ height: '80%' }}></div>
                <div className="chart-bar active" style={{ height: '95%' }}></div>
                <div className="chart-bar active" style={{ height: '100%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Logos() {
  return (
    <section className="logos-section">
      <div className="container">
        <p className="logos-label">Trusted by fast-growing companies</p>
        <div className="logos-inner">
          {['Acme Co', 'NovaTech', 'Bloom Studio', 'Vertex Labs', 'Crestline', 'Orbit'].map(name => (
            <div key={name} className="logo-pill">
              <div className="logo-pill-icon"></div>
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesOverview() {
  const services = [
    {
      icon: '🎨', tag: 'Website Redesign', name: 'High-Converting Website Redesign',
      desc: 'A complete rebuild of your web presence — designed to convert visitors into leads from day one.',
      features: ['Custom design system & brand refresh', 'Conversion-optimized page architecture', 'SEO foundation + Core Web Vitals', 'CMS integration (Webflow / Next.js)'],
      price: 'From $3,500', featured: false,
    },
    {
      icon: '🤖', tag: 'AI Automations', name: 'AI-Powered Automations',
      desc: 'Replace manual workflows with intelligent automations that save hours every week and never sleep.',
      features: ['Lead qualification & routing', 'AI chatbot & support agents', 'CRM & calendar integrations', 'Custom Make/Zapier workflows'],
      price: 'From $2,000', featured: true,
    },
    {
      icon: '⚡', tag: 'Full Transformation', name: 'Full Digital Transformation',
      desc: 'The complete package — new website, automation stack, and ongoing strategic support, all in one engagement.',
      features: ['Everything in Website Redesign', 'Everything in AI Automations', 'Monthly strategy & growth calls', 'Priority support & iteration'],
      price: 'From $6,500', featured: false,
    },
  ]

  return (
    <section className="services-section">
      <div className="container">
        <div className="services-header">
          <div className="section-label">What we do</div>
          <h2 className="section-title" style={{ marginTop: 12 }}>Built for businesses ready to grow</h2>
          <p className="section-subtitle" style={{ margin: '12px auto 0' }}>Three focused service tracks — each designed to deliver measurable ROI, not just deliverables.</p>
        </div>
        <div className="services-grid">
          {services.map(s => (
            <div key={s.name} className={`service-card${s.featured ? ' featured' : ''}`}>
              <div className="service-icon">{s.icon}</div>
              <div className="service-tag">{s.tag}</div>
              <div className="service-name">{s.name}</div>
              <div className="service-desc">{s.desc}</div>
              <div className="service-features">
                {s.features.map(f => (
                  <div key={f} className="service-feature">
                    <span className="feature-check">✓</span>{f}
                  </div>
                ))}
              </div>
              <div className="service-cta">
                <span className="service-price">{s.price}</span>
                <Link to="/services" className={s.featured ? 'btn-primary' : 'btn-secondary'} style={{ padding: '7px 16px', fontSize: '13px' }}>
                  {s.featured ? 'Book a Call →' : 'Learn more →'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProcessSteps() {
  const steps = [
    { num: 1, title: 'Discovery Call', desc: '30-min call to understand your goals, current challenges, and what success looks like.', active: true },
    { num: 2, title: 'Strategy & Proposal', desc: 'Custom roadmap and proposal delivered within 48 hours of the call.' },
    { num: 3, title: 'Build & Iterate', desc: 'We build fast, share progress daily, and refine based on your feedback.' },
    { num: 4, title: 'Launch & Support', desc: 'Go live with confidence. Ongoing support ensures everything keeps performing.' },
  ]
  return (
    <section className="process-section">
      <div className="container">
        <div className="process-header">
          <div className="section-label">How it works</div>
          <h2 className="section-title" style={{ marginTop: 12 }}>From first call to launch in 4 weeks</h2>
          <p className="section-subtitle" style={{ margin: '12px auto 0', textAlign: 'center' }}>A structured process that keeps you in the loop without slowing us down.</p>
        </div>
        <div className="process-steps">
          {steps.map(s => (
            <div key={s.num} className={`process-step${s.active ? ' active' : ''}`}>
              <div className="process-num">{s.num}</div>
              <div className="process-title">{s.title}</div>
              <div className="process-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingPreview() {
  return (
    <section className="pricing-section">
      <div className="container">
        <div className="pricing-header">
          <div className="section-label">Pricing</div>
          <h2 className="section-title" style={{ marginTop: 12 }}>Transparent, no-surprise pricing</h2>
          <p className="section-subtitle" style={{ margin: '12px auto 0', textAlign: 'center' }}>One-time build fee + optional monthly retainer. No hidden costs.</p>
        </div>
        <div className="pricing-preview-grid">
          {/* Starter */}
          <div className="pricing-card">
            <div className="pricing-tier">Starter</div>
            <div className="pricing-price"><sup>$</sup>1,500</div>
            <div className="pricing-desc">One-time build fee. Best for early-stage businesses getting online.</div>
            <hr className="pricing-divider" />
            <div className="pricing-features">
              <div className="pricing-feature"><span className="feature-check">✓</span>Up to 5 pages</div>
              <div className="pricing-feature"><span className="feature-check">✓</span>Mobile-responsive design</div>
              <div className="pricing-feature"><span className="feature-check">✓</span>Contact form integration</div>
              <div className="pricing-feature"><span className="feature-check">✓</span>2 rounds of revisions</div>
            </div>
            <div className="pricing-btn"><a href="/pricing">Get started</a></div>
          </div>
          {/* Growth */}
          <div className="pricing-card popular">
            <div className="popular-badge">⭐ Most popular</div>
            <div className="pricing-tier">Growth</div>
            <div className="pricing-price"><sup>$</sup>3,500</div>
            <div className="pricing-desc">One-time build + optional $499/mo maintenance.</div>
            <hr className="pricing-divider" />
            <div className="pricing-features">
              <div className="pricing-feature"><span className="feature-check">✓</span>Up to 12 pages</div>
              <div className="pricing-feature"><span className="feature-check">✓</span>Custom design system</div>
              <div className="pricing-feature"><span className="feature-check">✓</span>2 AI automations included</div>
              <div className="pricing-feature"><span className="feature-check">✓</span>CRM integration</div>
            </div>
            <div className="pricing-btn"><Link to="/contact">Book a Call →</Link></div>
          </div>
        </div>
        <div className="pricing-see-all">
          <Link to="/pricing" className="btn-secondary">See all pricing →</Link>
        </div>
      </div>
    </section>
  )
}

function CaseStudiesPreview() {
  const cases = [
    {
      slug: 'novatech',
      client: 'E-commerce · Retail',
      title: 'NovaTech — Website Redesign',
      desc: 'Rebuilt their outdated storefront with a conversion-first design, cutting bounce rate and tripling monthly leads.',
      metrics: [{ value: '+212%', label: 'Leads / mo' }, { value: '-38%', label: 'Bounce rate' }, { value: '3 wks', label: 'To launch' }],
      tag: 'Website Redesign',
      visual: (
        <div className="case-image-inner">
          <div className="case-image-bars">
            <div className="case-image-bar" style={{ height: 30 }}></div>
            <div className="case-image-bar after" style={{ height: 55 }}></div>
          </div>
          <div style={{ fontSize: 11, color: 'var(--gray-400)' }}>Before / After</div>
        </div>
      ),
    },
    {
      slug: 'crestline-legal',
      client: 'Professional Services · Legal',
      title: 'Crestline Legal — AI Intake System',
      desc: 'Automated their entire client intake process — from lead capture to CRM entry — saving 15+ hours per week.',
      metrics: [{ value: '15h', label: 'Saved / week' }, { value: '94%', label: 'Accuracy' }, { value: '2 wks', label: 'Deployed' }],
      tag: 'AI Automations',
      visual: <div className="case-image-inner"><div style={{ fontSize: 32, marginBottom: 8 }}>🤖</div><div style={{ fontSize: 11, color: 'var(--gray-400)' }}>AI Workflow Diagram</div></div>,
    },
  ]

  return (
    <section className="cases-section">
      <div className="container">
        <div className="cases-header">
          <div className="section-label">Case Studies</div>
          <div className="cases-header-row">
            <h2 className="section-title">Real results for real businesses</h2>
            <Link to="/case-studies" className="btn-secondary" style={{ fontSize: 13, padding: '8px 18px' }}>See all work →</Link>
          </div>
        </div>
        <div className="cases-grid" style={{ gridTemplateColumns: 'repeat(2,1fr)' }}>
          {cases.map(c => (
            <Link key={c.slug} to={`/case-studies/${c.slug}`} className="case-card">
              <div className="case-image">{c.visual}</div>
              <div className="case-body">
                <div className="case-client">{c.client}</div>
                <div className="case-title">{c.title}</div>
                <div className="case-desc">{c.desc}</div>
                <div className="case-metrics">
                  {c.metrics.map(m => (
                    <div key={m.label} className="case-metric">
                      <div className="case-metric-value">{m.value}</div>
                      <div className="case-metric-label">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="case-footer">
                <span className="case-tag">{c.tag}</span>
                <span>Read case study →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const testimonials = [
    { initials: 'JL', quote: '"Figure completely transformed how we show up online. Within 6 weeks of launch our inbound leads doubled. Best investment we\'ve made."', name: 'Jordan Lee', role: 'CEO, NovaTech' },
    { initials: 'MR', quote: '"The AI intake automation they built has saved my team 15+ hours a week. It just works — every time. Worth every penny and then some."', name: 'Marcus Reid', role: 'Partner, Crestline Legal' },
    { initials: 'AP', quote: '"They delivered in 4 weeks what agencies quoted us 3 months for. The new site is stunning and our demo requests went through the roof."', name: 'Aisha Patel', role: 'Founder, Orbit Analytics' },
  ]
  return (
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
  )
}

function CtaBand() {
  return (
    <section className="cta-band">
      <div className="cta-band-inner">
        <h2 className="cta-band-title">Ready to level up your digital presence?</h2>
        <p className="cta-band-sub">Book a free 30-minute discovery call. No sales pressure — just an honest conversation about what your business needs.</p>
        <div className="cta-band-btns">
          <Link to="/contact" className="btn-white">Book a Free Call →</Link>
          <Link to="/case-studies" className="btn-ghost-white">See case studies</Link>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Logos />
      <ServicesOverview />
      <ProcessSteps />
      <PricingPreview />
      <CaseStudiesPreview />
      <Testimonials />
      <CtaBand />
    </>
  )
}
