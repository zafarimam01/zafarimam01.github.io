import { useState } from 'react'
import { skills } from '../data/skills.js'
import './Skills.css'

function SkillGroup({ group }) {
  const [open, setOpen] = useState(true)

  return (
    <div className="skill-group">
      <button
        className="skill-group-key"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="skill-caret">{open ? '▾' : '▸'}</span>
        <span className="skill-emoji">{group.emoji}</span>
        <span className="skill-key-name">"{group.label}"</span>
        <span className="skill-colon">:</span>
        {!open && <span className="skill-collapsed-hint">[ {group.items.length} items ]</span>}
      </button>

      {open && (
        <ul className="skill-items">
          {group.items.map((item) => (
            <li key={item} className="skill-item">
              <span className="skill-string">"{item}"</span>
              <span className="skill-comma">,</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <p className="section-eyebrow"></p>
        <h2 className="section-title">What I work with</h2>

        <div className="skills-json">
          <div className="skills-json-header">
            <span className="skill-caret-static">{'{'}</span>
            <span className="skills-json-title"></span>
          </div>
          <div className="skills-json-body">
            {skills.map((group) => (
              <SkillGroup key={group.key} group={group} />
            ))}
          </div>
          <div className="skills-json-footer">{'}'}</div>
        </div>
      </div>
    </section>
  )
}

export default Skills
