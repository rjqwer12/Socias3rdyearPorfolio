import ProjectCard from './ProjectCard.jsx';
import { projects } from '../data/projects.js';

export default function ProjectsSection({ onOpenProject }) {
  const row1 = projects.slice(0, 3);
  const row2 = projects.slice(3, 6);

  return (
    <section className="section section--projects" id="projects">
      <div className="page-shell">
        <header className="section-heading">
          <h2 className="section-heading__title">Featured Academic Work</h2>
          <div className="section-heading__rule" role="presentation" />
        </header>

        <div className="project-grid">
          {row1.map((p) => (
            <ProjectCard key={p.slug} project={p} onOpen={onOpenProject} />
          ))}
        </div>

        <div className="project-grid">
          {row2.map((p) => (
            <ProjectCard key={p.slug} project={p} onOpen={onOpenProject} />
          ))}
        </div>
      </div>
    </section>
  );
}
