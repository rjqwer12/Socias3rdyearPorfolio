import { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  const open = Boolean(project);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div
      className="project-modal-backdrop"
      data-open={open ? 'true' : 'false'}
      role="dialog"
      aria-modal="true"
      aria-label="Project details"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="project-modal">
        <div className="project-modal-inner">
          <div className="modal-panel__header">
            <div>
              <h3 className="modal-panel__title">{project?.title ?? 'Project'}</h3>
              <p className="modal-panel__tags">{project ? project.tags.join(' • ') : ''}</p>
            </div>
            <button className="project-modal-close" type="button" onClick={onClose}>
              Close
            </button>
          </div>

          <p className="modal-panel__body">{project?.description ?? ''}</p>
          <div className="project-modal-image-wrap">
            <img
              className="project-modal-image"
              src={project?.image ?? '/images/challenge1.png'}
              alt={project ? `${project.title} preview` : 'Project preview'}
            />
          </div>

          <div className="modal-panel__actions">
            {project?.url ? (
              <a className="btn-modal-primary" href={project.url} target="_blank" rel="noreferrer">
                Open Project
              </a>
            ) : null}
            <span className="modal-panel__hint">
              {project && !project.url ? 'Project link not added yet.' : ''}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
