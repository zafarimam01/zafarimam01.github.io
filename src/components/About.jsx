import { useState } from 'react'
import { profile } from '../data/profile.js'
import './About.css'

function About() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="about" className="section about">
      <div className="container">
        <p className="section-eyebrow">01 // about</p>
        <h2 className="section-title">About me</h2>

        <div className="about-card">
          <div className="about-card-header">
            <span className="about-card-dot" />
            <span className="about-card-filename">about.js</span>
            <button
              className="about-toggle"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
            >
              {expanded ? '– minimise' : '+ maximise'}
            </button>
          </div>
          <div className="about-card-body">
            <p>
              <span className="about-comment">{'// '}short version</span>
              <br />
              {profile.bioShort}
            </p>
            {expanded && (
              <p className="about-expanded">
                <span className="about-comment">{'// '}full version</span>
                <br />
                {profile.bioFull}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
