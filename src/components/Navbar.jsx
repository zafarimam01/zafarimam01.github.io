import { useEffect, useState } from 'react'
import { NAV_TABS } from '../data/nav.js'
import './Navbar.css'

function Navbar() {
  const [activeId, setActiveId] = useState(NAV_TABS[0].id)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const sections = NAV_TABS
      .map((tab) => document.getElementById(tab.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleTabClick = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <div className="navbar-window-controls" aria-hidden="true">
          <span className="dot dot-coral" />
          <span className="dot dot-gold" />
          <span className="dot dot-mint" />
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar-tabs ${open ? 'is-open' : ''}`}>
          {NAV_TABS.map((tab) => (
            <button
              key={tab.id}
              className={`navbar-tab ${activeId === tab.id ? 'is-active' : ''}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
