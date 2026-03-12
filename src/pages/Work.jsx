import { Link } from 'react-router-dom'

const work = [
  {
    slug: 'novatech',
    client: 'NovaTech',
    type: 'WEBSITE REDESIGN',
    tagline: 'From outdated to industry-leading in 3 weeks',
    // dark gradient placeholder — deep charcoal
    bg: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 40%, #111 100%)',
  },
  {
    slug: 'bloom-studio',
    client: 'Bloom Studio',
    type: 'FULL TRANSFORMATION',
    tagline: 'New site + AI automations = 40% more leads',
    bg: 'linear-gradient(160deg, #0f0f0f 0%, #1e1e1e 50%, #2a2a2a 100%)',
  },
  {
    slug: 'vertex-laws',
    client: 'Vertex Laws',
    type: 'WEBSITE REDESIGN',
    tagline: 'Clean, professional presence that converts',
    bg: 'linear-gradient(120deg, #222 0%, #333 60%, #111 100%)',
  },
  {
    slug: 'crestline-legal',
    client: 'Crestline Co',
    type: 'AI AUTOMATIONS',
    tagline: 'Automated their entire client onboarding flow',
    bg: 'linear-gradient(150deg, #141414 0%, #252525 50%, #1a1a1a 100%)',
  },
  {
    slug: 'orbit-analytics',
    client: 'Orbit Agency',
    type: 'FULL TRANSFORMATION',
    tagline: 'Complete digital overhaul, launched in 4 weeks',
    bg: 'linear-gradient(140deg, #1c1c1c 0%, #2e2e2e 55%, #0d0d0d 100%)',
  },
  {
    slug: 'novatech',
    client: 'Acme Co',
    type: 'WEBSITE REDESIGN',
    tagline: '$2,500 site that competes with Fortune 500 brands',
    bg: 'linear-gradient(130deg, #111 0%, #1f1f1f 45%, #2b2b2b 100%)',
  },
]

const cardHeights = [500, 500, 500, 500, 500, 500]

export default function Work() {
  return (
    <>
      {/* ── PAGE HEADER ──────────────────────── */}
      <section className="page-header" style={{ paddingBottom: 52 }}>
        <div className="container">
          <div className="label">Our work</div>
          <h1 className="page-header-title">
            Real results for<br />real businesses
          </h1>
        </div>
      </section>

      <hr className="rule" />

      {/* ── EDITORIAL GRID ───────────────────── */}
      <section style={{ padding: 0 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 0,
        }}>
          {work.map((w, i) => (
            <Link
              key={`${w.slug}-${i}`}
              to={`/work/${w.slug}`}
              style={{
                display: 'block',
                position: 'relative',
                height: cardHeights[i],
                overflow: 'hidden',
                borderRight: i % 2 === 0 ? '1px solid var(--rule)' : 'none',
                borderBottom: '1px solid var(--rule)',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              {/* Background image / placeholder */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: w.bg,
                transition: 'transform 0.3s ease',
              }}
              className="work-card-bg"
              />

              {/* Bottom gradient overlay for text legibility */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.18) 45%, transparent 70%)',
                zIndex: 1,
              }} />

              {/* Top-left label */}
              <div style={{
                position: 'absolute',
                top: 24,
                left: 24,
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}>
                <span style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#fff',
                  display: 'inline-block',
                  flexShrink: 0,
                }} />
                <span style={{
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#fff',
                  fontFamily: 'var(--font-sans)',
                }}>
                  {w.type}
                </span>
              </div>

              {/* Bottom-left text */}
              <div style={{
                position: 'absolute',
                bottom: 28,
                left: 28,
                right: 28,
                zIndex: 2,
              }}>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 22,
                  fontWeight: 700,
                  color: '#fff',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  marginBottom: 6,
                }}>
                  {w.client}
                </div>
                <div style={{
                  fontSize: 13,
                  color: 'rgba(255,255,255,0.65)',
                  fontFamily: 'var(--font-sans)',
                  lineHeight: 1.5,
                }}>
                  {w.tagline}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <hr className="rule" />

      {/* ── CTA ──────────────────────────────── */}
      <section className="section-cta">
        <div className="container">
          <div className="label" style={{ marginBottom: 36 }}>Work with us</div>
          <h2 className="section-cta-title">
            Want results like these?
          </h2>
          <Link to="/contact" className="hero-cta">
            Book a free call →
          </Link>
        </div>
      </section>
    </>
  )
}
