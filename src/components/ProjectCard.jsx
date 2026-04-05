export default function ProjectCard({ project, onOpen }) {
  return (
    <article className="project-card group">
      <div className="project-card__thumb">
        <img className="project-card__img" alt={project.imageAlt} src={project.image} />
        <div className="project-overlay">
          <button className="project-open btn-view-project" type="button" onClick={() => onOpen(project.slug)}>
            View Project
          </button>
        </div>
      </div>
      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>
        <div className="tag-list">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
