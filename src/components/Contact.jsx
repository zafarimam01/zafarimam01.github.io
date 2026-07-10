import { socials } from '../data/profile.js'
import './Contact.css'

const LINKS = [
  { flag: '--github', label: 'GitHub', url: socials.github },
  { flag: '--youtube', label: 'YouTube', url: socials.youtube },
  { flag: '--instagram', label: 'Instagram', url: socials.instagram },
].filter((link) => link.url)

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <p className="section-eyebrow">06 // contact</p>
        <h2 className="section-title">Let's connect</h2>

        <div className="contact-terminal">
          <p className="contact-command">
            <span className="term-prefix-symbol">$</span> ./contact.sh
          </p>
          <div className="contact-flags">
            {LINKS.map((link) => (
              <a key={link.flag} className="contact-flag" href={link.url} target="_blank" rel="noreferrer">
                <span className="contact-flag-name">{link.flag}</span>
                <span className="contact-flag-value">{link.label} ↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
