import { useSearchParams } from 'react-router-dom'

const packageOptions = [
  { value: 'starter',         label: "Starter ($999)" },
  { value: 'growth',          label: "Growth ($2,500)" },
  { value: 'custom',          label: "Custom — Let's talk" },
  { value: 'retainer-standard', label: "Monthly Retainer" },
  { value: 'retainer-growth', label: "Monthly Retainer" },
  { value: 'not-sure',        label: "Not sure yet" },
]

export default function Contact() {
  const [searchParams] = useSearchParams()
  const packageParam = searchParams.get('package') || ''

  return (
    <>
      {/* ── PAGE HEADER ──────────────────────── */}
      <section className="page-header">
        <div className="container">
          <div className="label">Contact</div>
          <h1 className="page-header-title">
            Let's build something<br />great together
          </h1>
          <p className="page-header-sub">
            Whether you know exactly what you need or are still figuring it
            out — we're happy to help.
          </p>
        </div>
      </section>

      {/* ── FORM ─────────────────────────────── */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-form-inner">
            <div className="label" style={{ marginBottom: 52 }}>Book a discovery call</div>

            <div className="contact-form-grid">
              <div className="contact-form-field">
                <label className="contact-form-label">First name</label>
                <input className="contact-form-input" type="text" placeholder="Jordan" />
              </div>
              <div className="contact-form-field">
                <label className="contact-form-label">Last name</label>
                <input className="contact-form-input" type="text" placeholder="Lee" />
              </div>
            </div>

            <div className="contact-form-field">
              <label className="contact-form-label">Email</label>
              <input className="contact-form-input" type="email" placeholder="jordan@company.com" />
            </div>

            <div className="contact-form-field">
              <label className="contact-form-label">Company / Website</label>
              <input className="contact-form-input" type="text" placeholder="Acme Inc. / acme.co" />
            </div>

            <div className="contact-form-field">
              <label className="contact-form-label">Package interest</label>
              <select
                className="contact-form-input"
                style={{ cursor: 'pointer' }}
                defaultValue={['retainer-standard', 'retainer-growth'].includes(packageParam) ? 'retainer' : packageParam}
              >
                <option value="" disabled>Select a package</option>
                <option value="starter">Starter ($999)</option>
                <option value="growth">Growth ($2,500)</option>
                <option value="custom">Custom — Let's talk</option>
                <option value="retainer">Monthly Retainer</option>
                <option value="not-sure">Not sure yet</option>
              </select>
            </div>

            <div className="contact-form-field">
              <label className="contact-form-label">What are you looking for?</label>
              <select className="contact-form-input" style={{ cursor: 'pointer' }}>
                <option value="" disabled selected>Select a service</option>
                <option>Website Redesign</option>
                <option>AI Automations</option>
                <option>Full Transformation</option>
                <option>Not sure yet</option>
              </select>
            </div>

            <div className="contact-form-field">
              <label className="contact-form-label">Tell us about your project</label>
              <textarea
                className="contact-form-input"
                placeholder="What does your business do? What problem are you trying to solve?"
                style={{ height: 110 }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>
              <button className="contact-submit">Book my free call →</button>
              <span style={{ fontSize: 11, color: '#888', letterSpacing: '0.04em' }}>
                hello@figureconsulting.co
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
