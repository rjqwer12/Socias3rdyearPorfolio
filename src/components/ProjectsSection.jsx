import ProjectCard from './ProjectCard.jsx';
import { projects } from '../data/projects.js';

export default function ProjectsSection({ onOpenProject }) {

  return (
    <section className="section section--projects" id="projects">
      <div className="page-shell">
        <header className="section-heading">
          <p className="section-label">01 / Selected work</p>
          <h2 className="section-heading__title">The project index.</h2>
          <p className="section-heading__intro">A selection of web applications, interface designs, and prototypes from my academic journey.</p>
        </header>

        <div className="project-grid">
          {projects.map((p, index) => (
            <ProjectCard key={p.slug} project={p} index={index} onOpen={onOpenProject} />
          ))}
        </div>
      </div>
    </section>
  );
}
