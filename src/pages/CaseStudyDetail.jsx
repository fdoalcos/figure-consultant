import { useParams, Link } from 'react-router-dom'

export const caseStudies = [
  {
    slug: 'novatech',
    client: 'NovaTech',
    industry: 'E-commerce · Retail',
    title: 'Website Redesign',
    desc: 'Rebuilt their outdated storefront with a conversion-first design, cutting bounce rate and tripling monthly leads.',
    tag: 'WEBSITE REDESIGN',
    metrics: [
      { value: '+212%', label: 'Leads per month' },
      { value: '-38%',  label: 'Bounce rate' },
      { value: '3 wks', label: 'To launch' },
    ],
    fullStory: {
      challenge: "NovaTech had a 6-year-old website built on a rigid template. It looked outdated on mobile, had a confusing navigation structure, and was converting at under 1.2%. They were driving significant paid traffic but losing potential customers before they even saw the product.",
      solution: "We rebuilt their entire web presence from scratch in 3 weeks. Starting with user research and heatmap analysis of the old site, we designed a conversion-first architecture with a clear value proposition above the fold, streamlined product pages, and a simplified checkout flow. We migrated to Next.js for performance and integrated with their existing Shopify backend.",
      results: "Within 60 days of launch, monthly leads increased by 212%, bounce rate dropped by 38%, and their conversion rate went from 1.2% to 4.8%. The new site pays for itself every 3 weeks.",
      quote: '"Figure completely transformed how we show up online. Within 6 weeks of launch our inbound leads doubled. Best investment we\'ve made."',
      quotePerson: 'Jordan Lee, CEO — NovaTech',
    },
  },
  {
    slug: 'crestline-legal',
    client: 'Crestline Legal',
    industry: 'Professional Services · Legal',
    title: 'AI Intake System',
    desc: 'Automated their entire client intake process — from lead capture to CRM entry — saving 15+ hours per week.',
    tag: 'AI AUTOMATIONS',
    metrics: [
      { value: '15h',  label: 'Saved per week' },
      { value: '94%',  label: 'Accuracy' },
      { value: '2 wks', label: 'Deployed' },
    ],
    fullStory: {
      challenge: "Crestline Legal was spending 3+ hours every day manually processing new client inquiries — triaging emails, entering data into their CRM, scheduling consultations, and following up. This was pulling their senior staff away from billable work.",
      solution: "We built a fully automated intake system: an AI-powered intake form that classifies inquiry type and urgency, routes to the right attorney, creates a CRM record, schedules a consultation via Calendly, and sends a personalized follow-up email — all without human intervention.",
      results: "The system processes 100% of new inquiries without manual intervention. Staff now spend those 15+ hours on billable client work. Response time dropped from an average of 6 hours to under 4 minutes.",
      quote: '"The AI intake automation they built has saved my team 15+ hours a week. It just works — every time. Worth every penny and then some."',
      quotePerson: 'Marcus Reid, Partner — Crestline Legal',
    },
  },
  {
    slug: 'orbit-analytics',
    client: 'Orbit Analytics',
    industry: 'SaaS · B2B',
    title: 'Full Transformation',
    desc: 'Redesigned the marketing site, built an AI demo-booking system, and set up full analytics — in under 4 weeks.',
    tag: 'FULL TRANSFORMATION',
    metrics: [
      { value: '+340%', label: 'Demo requests' },
      { value: '4 wks', label: 'Timeline' },
      { value: '8.1x',  label: 'ROI (3 months)' },
    ],
    fullStory: {
      challenge: "Orbit Analytics had a compelling product but a website that didn't reflect it. Their demo request flow required 5 manual back-and-forth emails to schedule a single call. They had no analytics beyond basic page views.",
      solution: "Full transformation: rebuilt their marketing site with a product-led narrative, built an AI demo booking system that qualifies leads and auto-schedules calls with the right sales rep, implemented full analytics with Mixpanel, and set up automated follow-up sequences.",
      results: "Demo requests up 340%. Sales cycle shortened by 40%. In 3 months, they closed enough new ARR to 8.1x their investment in us.",
      quote: '"They delivered in 4 weeks what agencies quoted us 3 months for. The new site is stunning and our demo requests went through the roof."',
      quotePerson: 'Aisha Patel, Founder — Orbit Analytics',
    },
  },
]

export default function CaseStudyDetail() {
  const { slug } = useParams()
  const c = caseStudies.find(cs => cs.slug === slug)
  const others = caseStudies.filter(cs => cs.slug !== slug).slice(0, 2)

  if (!c) {
    return (
      <section style={{ padding: '120px 0', textAlign: 'center' }}>
        <div className="container">
          <div className="label" style={{ marginBottom: 24 }}>Not found</div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 40, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 32 }}>
            Case study not found
          </h2>
          <Link to="/work" className="hero-cta">← Back to all work</Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="case-detail-section">
        <div className="container">
          <div className="case-detail-inner">
            <Link to="/work" className="case-detail-back">← All work</Link>

            <div className="case-detail-label">{c.tag}</div>
            <h1 className="case-detail-title">
              {c.client} —<br />{c.title}
            </h1>
            <p className="case-detail-desc">{c.desc}</p>

            <div className="case-detail-metrics">
              {c.metrics.map(m => (
                <div key={m.label} className="case-detail-metric">
                  <div className="case-detail-metric-value">{m.value}</div>
                  <div className="case-detail-metric-label">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="case-detail-body">
              <h3>The Challenge</h3>
              <p>{c.fullStory.challenge}</p>

              <h3>Our Solution</h3>
              <p>{c.fullStory.solution}</p>

              <div className="case-detail-quote">
                <p>{c.fullStory.quote}</p>
                <cite>— {c.fullStory.quotePerson}</cite>
              </div>

              <h3>The Results</h3>
              <p>{c.fullStory.results}</p>
            </div>

            <div style={{
              marginTop: 72,
              paddingTop: 48,
              borderTop: '1px solid var(--rule)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 20,
            }}>
              <div>
                <div className="label" style={{ marginBottom: 10 }}>Want results like this?</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 600, letterSpacing: '-0.01em' }}>
                  Book a free 30-minute call
                </div>
              </div>
              <Link to="/contact" className="hero-cta">Book a Free Call →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── MORE WORK ────────────────────────── */}
      <hr className="rule" />
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="label" style={{ marginBottom: 48 }}>More work</div>
          <div className="more-work-grid">
            {others.map((cs, i) => (
              <Link key={cs.slug} to={`/work/${cs.slug}`} className="more-work-entry">
                <div className="label" style={{ marginBottom: 14 }}>{cs.tag}</div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 600, letterSpacing: '-0.01em', marginBottom: 6 }}>
                  {cs.client}
                </div>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 16 }}>{cs.industry}</div>
                <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.75 }}>{cs.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
