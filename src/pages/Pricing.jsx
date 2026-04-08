import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useSEO } from '../hooks/useSEO'

const plans = [
  {
    index: '01',
    tier: 'Launchpad',
    price: '2,500',
    priceLabel: 'one-time',
    desc: 'For small businesses that need a professional online presence without the complexity.',
    features: [
      'Up to 5 pages',
      'Mobile-first responsive design',
      'Contact form + lead capture',
      'SEO foundation setup',
      '2 rounds of revisions',
      '30-day post-launch support',
    ],
    cta: 'Get started →',
    ctaParam: 'launchpad',
  },
  {
    index: '02',
    tier: 'Growth',
    price: '4,500',
    priceLabel: 'one-time',
    desc: 'Our most-chosen package. Built to convert visitors into leads from day one.',
    features: [
      'Up to 12 pages',
      'Custom design system & brand refresh',
      'SEO foundation + Core Web Vitals',
      'CRM integration',
      '1 AI-powered feature included',
      'Unlimited revisions (14 days)',
      '60-day post-launch support',
    ],
    cta: 'Get started →',
    ctaParam: 'growth',
    highlight: true,
  },
  {
    index: '03',
    tier: 'Custom',
    price: "Let's talk",
    priceLabel: null,
    desc: 'Complete digital transformation with automation, AI, and ongoing strategy.',
    features: [
      'Unlimited pages',
      'Full automation stack',
      'AI integrations & chatbots',
      'Monthly strategy calls',
      'Custom dashboard & reporting',
      'Priority support',
    ],
    cta: 'Book a call →',
    ctaParam: 'custom',
    custom: true,
  },
]

const retainerPlans = [
  {
    index: '01',
    tier: 'Maintain',
    price: '299',
    priceLabel: 'per month',
    desc: 'Keep your site live, secure, and running smoothly every month.',
    features: [
      'Hosting & uptime monitoring',
      'Bug fixes & security patches',
      'Monthly performance report',
      'Up to 2hr changes/mo',
    ],
    cta: 'Get started →',
    ctaParam: 'retainer-maintain',
  },
  {
    index: '02',
    tier: 'Partner',
    price: '699',
    priceLabel: 'per month',
    desc: 'Everything in Maintain plus proactive growth support and strategy.',
    features: [
      'Everything in Maintain',
      'Up to 8hr dev changes/mo',
      'SEO monitoring & reporting',
      'Monthly strategy check-in',
      '1 AI feature update per quarter',
    ],
    cta: 'Get started →',
    ctaParam: 'retainer-partner',
    highlight: true,
  },
  {
    index: '03',
    tier: 'Custom',
    price: "Let's talk",
    priceLabel: null,
    desc: 'Tailored retainer for clients needing AI workflows and custom integrations.',
    features: [
      'AI automation workflows',
      'Custom integrations',
      'Priority support (24hr SLA)',
      'Scoped per client',
    ],
    cta: 'Book a call →',
    ctaParam: 'retainer-custom',
    custom: true,
  },
]

const addOns = [
  { name: 'AI Chatbot', desc: 'Custom-trained lead capture or support bot', price: 'From $1,200' },
  { name: 'E-commerce & Payments', desc: 'Full store setup with Stripe or Shopify', price: 'From $2,000' },
  { name: 'Custom Dashboard', desc: 'Internal reporting or client-facing analytics', price: 'From $3,000' },
  { name: 'Workflow Automation', desc: 'Make/Zapier/n8n automations, CRM hooks', price: 'From $800' },
  { name: 'SEO Audit & Strategy', desc: 'Keyword research, on-page fixes, and roadmap', price: 'From $500' },
  { name: 'Email Nurture Sequence', desc: 'AI-assisted copy + automation setup', price: 'From $750' },
]

const proofStats = [
  { stat: '50+', label: 'Projects shipped' },
  { stat: '3×', label: 'Avg. conversion lift' },
  { stat: '2–4 wks', label: 'Typical delivery' },
  { stat: '100%', label: 'You own everything' },
]

const testimonials = [
  {
    quote: "Worth every dollar. Trial signups went up 118% in the first month after launch.",
    name: "Joe Martinez",
    role: "Owner — Joe Gym",
  },
  {
    quote: "Best investment we made for the business. Online bookings tripled within 60 days.",
    name: "Linh Tran",
    role: "Manager — Luxury Nail Spa",
  },
  {
    quote: "I was nervous about the cost, but the first new client I landed paid for the whole project.",
    name: "Laura Dang",
    role: "Founder — Laura Dang Consulting",
  },
]

const faqs = [
  {
    q: "How fast can you actually launch?",
    a: "Most projects go live within 2–4 weeks from your kickoff call. Launchpad builds typically land in 2–3 weeks. Growth builds with AI features take 3–4 weeks. Custom projects with full automation stacks may take 5–6 weeks. You'll get a precise timeline in your proposal — no vague estimates.",
  },
  {
    q: "What's included in the build fee?",
    a: "Everything needed to go live: design, development, integrations, QA, and launch support. Hosting is separate and typically runs $20–50/month depending on your stack. No hidden fees, no surprise invoices after the fact.",
  },
  {
    q: "Do I own everything after it's built?",
    a: "Yes — completely. You own the code, the design, the content, and the domain. We hand over everything at launch with no lock-in. If you cancel a retainer, everything stays yours.",
  },
  {
    q: "Can I add AI or automation to my project?",
    a: "Yes — and it's one of our strengths. AI-powered features, workflow automation, and custom integrations can be scoped into any plan. If you're not sure what's possible, the free discovery call is the best place to start.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. We offer a 50% upfront / 50% on launch split for all builds. If you need a different arrangement, bring it up on the call — we're flexible for the right fit.",
  },
  {
    q: "Can I start with a one-time build and add a retainer later?",
    a: "Absolutely. Most clients start with a one-time build, then move to a monthly retainer once they see the results. There's no pressure — add, pause, or cancel the retainer anytime with 14 days' notice.",
  },
  {
    q: "Why not just hire a freelancer on Fiverr or Upwork?",
    a: "Freelancers are fine for simple, isolated tasks — but you get whoever shows up that day. With Figured Consulting, you get a team that understands your business goals, handles design and development together, and stays accountable through launch and beyond. Most of our clients tried cheap freelancers first. The rework cost them more in the end.",
  },
  {
    q: "What does an 'AI feature' actually do for my business?",
    a: "Practically speaking: an AI chatbot answers customer questions 24/7 and captures leads while you sleep. An automation routes form submissions to your CRM and sends a follow-up email automatically. We don't add AI for novelty — we add it where it saves you time or converts more visitors.",
  },
]

function PricingGrid({ items }) {
  const defaultSelected = items.findIndex(p => p.highlight)
  const [selected, setSelected] = useState(defaultSelected >= 0 ? defaultSelected : 0)

  const formatAmount = (value) => Number(value).toLocaleString('en-US')
  const toNumber = (value) => Number(String(value).replace(/,/g, ''))

  return (
    <div className="pricing-3col-grid">
      {items.map((p, i) => {
        const isSelected = selected === i
        const isDiscounted = Boolean(p.originalPrice)
        return (
          <div
            key={p.tier}
            className={`pricing-card${isSelected ? ' pricing-card--highlight' : ''}`}
            onClick={() => setSelected(i)}
            style={{
              background: isSelected ? 'var(--black)' : 'transparent',
              padding: '36px 32px 32px',
              display: 'flex',
              flexDirection: 'column',
              borderRight: i < items.length - 1 ? '1px solid var(--rule)' : 'none',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {isSelected && (
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: 3,
                background: '#fff',
              }} />
            )}
            {isDiscounted && (
              <div style={{
                position: 'absolute',
                top: 14,
                right: -34,
                transform: 'rotate(35deg)',
                background: isSelected ? '#fff' : 'var(--black)',
                color: isSelected ? 'var(--black)' : '#fff',
                fontSize: 10,
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '5px 38px',
                zIndex: 2,
                boxShadow: '0 6px 12px rgba(0,0,0,0.22)',
              }}>
                50% OFF
              </div>
            )}
            {/* Label */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 10,
              marginBottom: 16,
            }}>
              <span style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: isSelected ? '#fff' : 'var(--muted)',
              }}>
                {p.highlight ? 'Most popular' : p.index}
              </span>
            </div>

            {/* Tier name */}
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: '-0.02em',
              marginBottom: 10,
              color: isSelected ? '#fff' : 'var(--black)',
            }}>
              {p.tier}
            </div>

            {/* Desc */}
            <p style={{
              fontSize: 12,
              lineHeight: 1.7,
              color: isSelected ? '#fff' : 'var(--muted)',
              marginBottom: 28,
            }}>
              {p.desc}
            </p>

            {/* Price */}
            {p.custom ? (
              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 32,
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1,
                color: isSelected ? '#fff' : 'var(--black)',
                marginBottom: 28,
              }}>
                {p.price}
              </div>
            ) : (
              <>
                {p.originalPrice && (
                  <div style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 22,
                    fontWeight: 700,
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    color: isSelected ? '#fff' : 'var(--muted)',
                    marginBottom: 6,
                    textDecoration: 'line-through',
                    textDecorationColor: isSelected ? 'rgba(255,255,255,0.7)' : 'var(--black)',
                    textDecorationThickness: 2,
                  }}>
                    <sup style={{ fontSize: 13, fontWeight: 400, verticalAlign: 'super', letterSpacing: 0 }}>$</sup>
                    {p.originalPrice}
                  </div>
                )}
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 48,
                  fontWeight: 700,
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  color: isSelected ? '#fff' : 'var(--black)',
                  marginBottom: 4,
                }}>
                  <sup style={{ fontSize: 22, fontWeight: 400, verticalAlign: 'super', letterSpacing: 0 }}>$</sup>
                  {p.price}
                </div>
                <div style={{
                  fontSize: 11,
                  color: isSelected ? '#fff' : 'var(--muted)',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  marginBottom: 28,
                }}>
                  {p.priceLabel}
                </div>
                {p.originalPrice && (
                  <div style={{
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: isSelected ? '#fff' : 'var(--black)',
                    background: isSelected ? 'rgba(255,255,255,0.16)' : 'rgba(0,0,0,0.04)',
                    border: `1px solid ${isSelected ? 'rgba(255,255,255,0.3)' : 'var(--rule)'}`,
                    width: 'fit-content',
                    padding: '4px 8px',
                    marginBottom: 24,
                  }}>
                    Save ${formatAmount(toNumber(p.originalPrice) - toNumber(p.price))}
                  </div>
                )}
              </>
            )}

            {/* Features */}
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 auto', flexGrow: 1 }}>
              {p.features.map(f => (
                <li key={f} style={{
                  fontSize: 12,
                  padding: '5px 0',
                  color: isSelected ? '#fff' : 'var(--black)',
                  display: 'flex',
                  gap: 8,
                  alignItems: 'flex-start',
                }}>
                  <span style={{
                    color: isSelected ? '#fff' : 'var(--black)',
                    flexShrink: 0,
                    marginTop: 1,
                  }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div style={{
              borderTop: `1px solid ${isSelected ? 'rgba(255,255,255,0.12)' : 'var(--rule)'}`,
              marginTop: 28,
              paddingTop: 24,
            }}>
              <Link
                to={`/contact?package=${p.ctaParam}`}
                onClick={e => e.stopPropagation()}
                style={{
                  display: 'inline-block',
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: '0.01em',
                  color: isSelected ? '#fff' : 'var(--black)',
                  textDecoration: 'none',
                  borderBottom: `1px solid ${isSelected ? 'rgba(255,255,255,0.35)' : 'var(--black)'}`,
                  paddingBottom: 2,
                }}
              >
                {p.cta}
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function Pricing() {
  useSEO({
    title: 'Pricing — Transparent, No-Surprise Plans | Figured Consulting',
    description: 'Simple, transparent pricing for websites, AI tools, and digital products. One-time builds from $499. Monthly retainers from $99. No hidden costs.',
  })
  const [openFaq, setOpenFaq] = useState(0)
  const [pricingTab, setPricingTab] = useState('onetime')
  const activePlans = pricingTab === 'onetime' ? plans : retainerPlans

  return (
    <>
      {/* ── PAGE HEADER ──────────────────────── */}
      <section className="page-header">
        <div className="container">
          <div className="label">Pricing</div>
          <h1 className="page-header-title">
            Built for business owners,<br />not developers
          </h1>
          <p className="page-header-sub">
            One-time build + optional monthly retainer.
            You own everything. No lock-in. No surprises.
          </p>
        </div>
      </section>

      {/* ── SOCIAL PROOF STRIP ───────────────── */}
      <section style={{ padding: '32px 0', borderBottom: '1px solid var(--rule)' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 64,
            flexWrap: 'wrap',
          }}>
            {proofStats.map((item, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 32,
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                }}>
                  {item.stat}
                </div>
                <div style={{
                  fontSize: 11,
                  color: 'var(--muted)',
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  marginTop: 6,
                }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING SECTION WITH TOGGLE ──────── */}
      <section style={{ padding: '64px 0 80px' }}>
        <div className="container">

          {/* Toggle */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, marginBottom: 48 }}>
            <div style={{
              display: 'inline-flex',
              background: 'rgba(0,0,0,0.06)',
              borderRadius: 100,
              padding: 5,
              gap: 4,
              boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
            }}>
              {[
                { key: 'onetime',  label: 'One-time build' },
                { key: 'retainer', label: 'Monthly retainer' },
              ].map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setPricingTab(tab.key)}
                  style={{
                    padding: '12px 32px',
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: '0.01em',
                    border: 'none',
                    borderRadius: 100,
                    cursor: 'pointer',
                    transition: 'background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease',
                    background: pricingTab === tab.key ? 'var(--black)' : 'transparent',
                    color: pricingTab === tab.key ? '#fff' : 'var(--black)',
                    boxShadow: pricingTab === tab.key ? '0 2px 8px rgba(0,0,0,0.25)' : 'none',
                    position: 'relative',
                  }}
                  aria-pressed={pricingTab === tab.key}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <p style={{
              fontSize: 11,
              color: 'var(--muted)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              margin: 0,
            }}>
              {pricingTab === 'onetime' ? 'Pay once, own it forever' : 'Ongoing support & growth'}
            </p>
          </div>

          {/* Active plans */}
          <div className="page-fade" key={pricingTab}>
            <PricingGrid key={pricingTab} items={activePlans} />
          </div>

        </div>
      </section>

      {/* ── ADD-ONS ──────────────────────────── */}
      <section style={{ padding: '0 0 80px' }}>
        <div className="container">
          <div style={{ marginBottom: 32 }}>
            <div className="label" style={{ marginBottom: 10 }}>À la carte</div>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}>
              Add to any package
            </h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            border: '1px solid var(--rule)',
          }}>
            {addOns.map((item, i) => (
              <div key={item.name} style={{
                padding: '24px 28px',
                borderRight: (i % 3) < 2 ? '1px solid var(--rule)' : 'none',
                borderBottom: i < 3 ? '1px solid var(--rule)' : 'none',
              }}>
                <div style={{
                  fontSize: 13,
                  fontWeight: 700,
                  marginBottom: 4,
                  letterSpacing: '-0.01em',
                }}>
                  {item.name}
                </div>
                <div style={{
                  fontSize: 12,
                  color: 'var(--muted)',
                  lineHeight: 1.6,
                  marginBottom: 12,
                }}>
                  {item.desc}
                </div>
                <div style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                }}>
                  {item.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* ── TESTIMONIALS ─────────────────────── */}
      <section style={{ padding: '64px 0' }}>
        <div className="container">
          <div className="label" style={{ marginBottom: 36, textAlign: 'center' }}>
            What clients say about the investment
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            borderTop: '1px solid var(--rule)',
          }}>
            {testimonials.map((t, i) => (
              <div key={t.name} style={{
                padding: '36px 36px 36px 0',
                paddingLeft: i === 0 ? 0 : 36,
                borderRight: i < testimonials.length - 1 ? '1px solid var(--rule)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 32,
              }}>
                <blockquote style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 16,
                  fontWeight: 400,
                  fontStyle: 'italic',
                  lineHeight: 1.75,
                  color: 'var(--black)',
                  margin: 0,
                }}>
                  "{t.quote}"
                </blockquote>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 3 }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)' }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* ── FAQ ───────────────────────────────── */}
      <section style={{ padding: '64px 0' }}>
        <div className="container">
          <div className="faq-layout">
            <div>
              <div className="label" style={{ marginBottom: 14 }}>FAQ</div>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 25,
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
              }}>
                Common questions
              </h2>
            </div>
            <div>
              {faqs.map((f, i) => (
                <div key={f.q} style={{ borderTop: i === 0 ? 'none' : '1px solid var(--rule)' }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: '100%',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '14px 0',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: 16,
                      textAlign: 'left',
                    }}
                  >
                    <span style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 15,
                      fontWeight: 600,
                      letterSpacing: '-0.01em',
                      color: 'var(--black)',
                    }}>
                      {f.q}
                    </span>
                    <span style={{
                      fontSize: 18,
                      fontWeight: 300,
                      color: 'var(--muted)',
                      flexShrink: 0,
                      lineHeight: 1,
                      display: 'block',
                      transition: 'transform 0.3s ease',
                      transform: openFaq === i ? 'rotate(45deg)' : 'none',
                    }}>
                      +
                    </span>
                  </button>
                  <div style={{
                    overflow: 'hidden',
                    maxHeight: openFaq === i ? '300px' : '0',
                    transition: 'max-height 0.35s ease',
                  }}>
                    <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.8, paddingBottom: 14 }}>
                      {f.a}
                    </p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: '1px solid var(--rule)' }} />
            </div>
          </div>
        </div>
      </section>

      <hr className="rule" />

      {/* ── CTA ──────────────────────────────── */}
      <section className="section-cta">
        <div className="container">
          <div className="label" style={{ marginBottom: 36 }}>Not sure which plan?</div>
          <h2 className="section-cta-title">
            Let's figure it out together
          </h2>
          <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 32, lineHeight: 1.7 }}>
            Free 30-min strategy call. No commitment, no pitch — just clarity on what you need.
          </p>
          <Link to="/contact" className="hero-cta">
            Book a free strategy call →
          </Link>
        </div>
      </section>
    </>
  )
}
