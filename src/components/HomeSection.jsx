export default function HomeSection() {
  return (
    <section className="home-section" id="home">
      <div className="page-shell">
        <div className="home-section__content">
          <div className="home-section__headline">
            <p className="home-section__eyebrow">RJ Molene Socias</p>
            <h1 className="home-section__title">
              <span className="home-section__outline">Back End</span>
              <span className="home-section__title-main">Developer.</span>
            </h1>
          </div>
          <div className="home-profile">
            <div className="home-profile__frame">
              <img alt="RJ Molene Socias" src="/images/imageportfolio-cutout.png" />
            </div>
          </div>
          <div className="home-section__copy">
            <h2 className="home-section__role">Learn. Build.<br />Keep improving.</h2>
            <p className="home-section__lead">
              IT student at Western Institute of Technology, exploring server-side logic, databases, and APIs.
            </p>
            <div className="home-section__actions">
              <a className="btn-primary" href="#projects">View projects</a>
              <a className="btn-secondary" href="#contact">Get in touch</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
