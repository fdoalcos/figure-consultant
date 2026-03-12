import { useParams, Link } from 'react-router-dom'
import { caseStudies } from './CaseStudies'

export default function CaseStudyDetail() {
  const { slug } = useParams()
  const c = caseStudies.find(cs => cs.slug === slug)

  if (!c) {
    return (
      <section style={{ padding: '120px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title">Case study not found</h2>
          <Link to="/case-studies" className="btn-primary" style={{ marginTop: 24, width: 'fit-content', display: 'inline-flex' }}>← Back to all case studies</Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="case-detail-section">
        <div className="container">
          <div className="case-detail-inner">
            <Link to="/case-studies" className="case-detail-back">← Back to case studies</Link>

            <div className="case-detail-image">
              {c.visual === 'bars' ? (
                <div style={{ textAlign: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, justifyContent: 'center', height: 100, marginBottom: 12 }}>
                    <div style={{ width: 24, height: 40, background: 'var(--gray-300)', borderRadius: '4px 4px 0 0' }}></div>
                    <div style={{ width: 24, height: 90, background: 'var(--black)', borderRadius: '4px 4px 0 0' }}></div>
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--gray-400)' }}>Before / After</div>
                </div>
              ) : c.visual === 'robot' ? (
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 64, marginBottom: 12 }}>🤖</div>
                  <div style={{ fontSize: 13, color: 'var(--gray-400)' }}>AI Workflow System</div>
                </div>
              ) : (
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 64, marginBottom: 12 }}>⚡</div>
                  <div style={{ fontSize: 13, color: 'var(--gray-400)' }}>Full Transformation</div>
                </div>
              )}
            </div>

            <div className="case-detail-client">{c.client}</div>
            <h1 className="case-detail-title">{c.title}</h1>
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
                <p>"{c.fullStory.quote.replace(/^"|"$/g, '')}"</p>
                <cite>— {c.fullStory.quotePerson}</cite>
              </div>

              <h3>The Results</h3>
              <p>{c.fullStory.results}</p>
            </div>

            <div style={{ marginTop: 56, paddingTop: 40, borderTop: '1px solid var(--gray-200)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
              <div>
                <div style={{ fontSize: 13, color: 'var(--gray-400)', marginBottom: 4 }}>Want results like this?</div>
                <div style={{ fontSize: 17, fontWeight: 600 }}>Book a free 30-minute call</div>
              </div>
              <Link to="/contact" className="btn-primary">Book a Free Call →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other case studies */}
      <section style={{ padding: '0 0 80px', background: 'var(--gray-50)', borderTop: '1px solid var(--gray-200)' }}>
        <div className="container" style={{ paddingTop: 64 }}>
          <div style={{ marginBottom: 32 }}>
            <div className="section-label">More case studies</div>
            <h2 className="section-title" style={{ marginTop: 8 }}>More work</h2>
          </div>
          <div className="cases-grid" style={{ gridTemplateColumns: 'repeat(2,1fr)' }}>
            {caseStudies.filter(cs => cs.slug !== slug).slice(0, 2).map(cs => (
              <Link key={cs.slug} to={`/case-studies/${cs.slug}`} className="case-card">
                <div className="case-image">
                  <div className="case-image-inner">
                    {cs.visual === 'bars' ? (
                      <>
                        <div className="case-image-bars">
                          <div className="case-image-bar" style={{ height: 30 }}></div>
                          <div className="case-image-bar after" style={{ height: 55 }}></div>
                        </div>
                        <div style={{ fontSize: 11, color: 'var(--gray-400)' }}>Before / After</div>
                      </>
                    ) : cs.visual === 'robot' ? (
                      <>
                        <div style={{ fontSize: 32, marginBottom: 8 }}>🤖</div>
                        <div style={{ fontSize: 11, color: 'var(--gray-400)' }}>AI Workflow</div>
                      </>
                    ) : (
                      <>
                        <div style={{ fontSize: 32, marginBottom: 8 }}>⚡</div>
                        <div style={{ fontSize: 11, color: 'var(--gray-400)' }}>Full Transformation</div>
                      </>
                    )}
                  </div>
                </div>
                <div className="case-body">
                  <div className="case-client">{cs.client}</div>
                  <div className="case-title">{cs.title}</div>
                  <div className="case-desc">{cs.desc}</div>
                </div>
                <div className="case-footer">
                  <span className="case-tag">{cs.tag}</span>
                  <span>Read →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
