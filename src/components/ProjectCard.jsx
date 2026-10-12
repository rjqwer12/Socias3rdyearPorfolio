export default function ProjectCard({ project, index, onOpen }) {
  return (
    <article className="project-card group">
      <p className="project-card__number">{String(index + 1).padStart(2, '0')}</p>
      <div className="project-card__thumb">
        <img className="project-card__img" alt={project.imageAlt} src={project.image} />
      </div>
      <div className="project-card__body">
        <p className="project-card__kind">{project.kind}</p>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>
        <div className="tag-list">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <button className="project-open btn-view-project" type="button" onClick={() => onOpen(project.slug)}>
          View Project
        </button>
      </div>
    </article>
  );
}
