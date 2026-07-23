import { codingProfiles } from '../data/coding.js'
import './CodingProfiles.css'

function CodingProfiles() {
  return (
    <section id="coding" className="section coding">
      <div className="container">
        <p className="section-eyebrow"></p>
        <h2 className="section-title">Where I solve problems</h2>
        
        <div className="coding-grid">
          {codingProfiles.map((p) => (
            <a
              key={p.key}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className={`coding-card ${p.highlight ? 'is-highlight' : ''}`}
            >
              <div className="coding-card-top">
                <span className="pill coding-status">
                  {p.highlight ? '● currently obsessed' : '● active'}
                </span>
              </div>
              <h3 className="coding-card-label">{p.label}</h3>
              <p className="coding-card-handle">{p.handle}</p>
              <p className="coding-card-note">{p.note}</p>
              <span className="coding-card-link">Visit profile ↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CodingProfiles
