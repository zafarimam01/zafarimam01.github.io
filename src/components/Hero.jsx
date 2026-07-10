import { useEffect, useState } from 'react'
import { profile, socials } from '../data/profile.js'
import './Hero.css'

const LINES = [
  { prefix: '>', text: `whoami`, isCommand: true },
  { prefix: '', text: profile.name, isOutput: true, strong: true },
  { prefix: '>', text: `role --current`, isCommand: true },
  { prefix: '', text: profile.role, isOutput: true },
  { prefix: '>', text: `status`, isCommand: true },
  { prefix: '', text: profile.resumeNote, isOutput: true },
]

function useTypedLines(lines) {
  const [visibleCount, setVisibleCount] = useState(0)
  const [charCount, setCharCount] = useState(0)

  useEffect(() => {
    if (visibleCount >= lines.length) return undefined

    const current = lines[visibleCount]
    const fullText = `${current.prefix ? current.prefix + ' ' : ''}${current.text}`

    if (charCount < fullText.length) {
      const timeout = setTimeout(() => setCharCount((c) => c + 1), current.isCommand ? 28 : 10)
      return () => clearTimeout(timeout)
    }

    const pause = setTimeout(() => {
      setVisibleCount((v) => v + 1)
      setCharCount(0)
    }, current.isCommand ? 200 : 350)
    return () => clearTimeout(pause)
  }, [charCount, visibleCount, lines])

  return { visibleCount, charCount }
}

function Hero() {
  const { visibleCount, charCount } = useTypedLines(LINES)

  return (
    <section id="hero" className="hero section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="section-eyebrow">// portfolio.init()</p>
          <h1 className="hero-heading">
            Hi, I'm <span className="hero-name">Zafar Imam</span>.
            <br />
            I build things, break things, and fix them again.
          </h1>
          <p className="hero-sub">{profile.bioShort}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={socials.github} target="_blank" rel="noreferrer">
              View GitHub
            </a>
            <a className="btn btn-ghost" href="#projects" onClick={(e) => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              See projects
            </a>
          </div>
        </div>

        <div className="hero-terminal" aria-hidden="true">
          <div className="hero-terminal-bar">
            <span className="dot dot-coral" />
            <span className="dot dot-gold" />
            <span className="dot dot-mint" />
            <span className="hero-terminal-title">zafar@portfolio: ~</span>
          </div>
          <div className="hero-terminal-body">
            {LINES.slice(0, visibleCount).map((line, i) => (
              <p key={i} className={line.isOutput ? 'term-output' : 'term-command'}>
                <span className={line.strong ? 'term-strong' : ''}>
                  {line.prefix ? `${line.prefix} ` : ''}{line.text}
                </span>
              </p>
            ))}
            {visibleCount < LINES.length && (() => {
              const current = LINES[visibleCount]
              const fullText = `${current.prefix ? current.prefix + ' ' : ''}${current.text}`
              const typed = fullText.slice(0, charCount)
              return (
                <p className={current.isOutput ? 'term-output' : 'term-command'}>
                  <span className={current.strong ? 'term-strong' : ''}>{typed}</span>
                  <span className="term-cursor">▍</span>
                </p>
              )
            })()}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
