function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-header">
        <span className="project-card-dot" />
        <span className="project-card-filename">{project.fileName}</span>
        <span className="pill project-card-status">{project.status}</span>
      </div>
      <div className="project-card-body">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc">{project.description}</p>
        <div className="project-card-stack">
          {project.stack.map((tech) => (
            <span key={tech} className="project-card-tech">
              import {tech}
            </span>
          ))}
        </div>
        <a className="project-card-link" href={project.repo} target="_blank" rel="noreferrer">
          View repository ↗
        </a>
      </div>
    </article>
  )
}

export default ProjectCard
