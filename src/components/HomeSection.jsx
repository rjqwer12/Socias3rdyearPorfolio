/**
 * Top of the page — matches <a href="#home"> in the navbar and id="home".
 * Portrait image file is still hero_dark.jpg (asset filename only).
 */
export default function HomeSection() {
  return (
    <section className="home-section" id="home">
      <div className="page-shell">
        <div className="home-section__content">
          <div className="home-section__copy">
            <h1 className="home-section__title animate-fade-in">
              Aspiring <span className="home-section__title-accent">Full Stack Developer</span> at{' '}
              <span className="home-section__title-accent">Western Institute of Technology</span>
            </h1>
            <p className="home-section__lead animate-fade-in home-section-delay-1">
              Full Stack Web Development student specializing in modern frontend and backend technologies. Committed to
              academic excellence and building scalable, user-centric applications.
            </p>
            <div className="home-section__actions animate-fade-in home-section-delay-2">
              <a className="btn-primary" href="#projects">
                View Academic Projects
              </a>
              <a className="btn-secondary" href="#contact">
                Get in Touch
              </a>
            </div>
          </div>

          <div className="home-profile animate-fade-in home-section-delay-3">
            <div className="home-profile__pulse-ring" aria-hidden="true" />
            <div className="home-profile__frame">
              <img alt="Professional portrait" src="/images/hero_dark.jpg" />
            </div>
          </div>
        </div>
      </div>

      <div className="home-section__decor" aria-hidden="true">
        <svg viewBox="0 0 100 100">
          <circle cx="80" cy="20" r="40" />
        </svg>
      </div>
    </section>
  );
}
