import { projects } from '../data/projects.js'
import { socials } from '../data/profile.js'
import ProjectCard from './ProjectCard.jsx'
import './Projects.css'

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <p className="section-eyebrow">02 // projects</p>
        <h2 className="section-title">Things I've built</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          <a className="projects-more-card" href={socials.github} target="_blank" rel="noreferrer">
            <span className="projects-more-icon">↗</span>
            <span className="projects-more-title">More on GitHub</span>
            <span className="projects-more-sub">Browse the rest of the repos and commit history.</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
