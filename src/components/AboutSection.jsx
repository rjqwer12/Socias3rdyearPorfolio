export default function AboutSection() {
  return (
    <section className="section section--about" id="about">
      <div className="page-shell">
        <div className="about-layout">
          <div className="about-layout__media">
            <div className="about-photo">
              <div className="about-photo__inner">
                <img alt="Professional portrait" src="/images/about_dark.jpg" />
              </div>
            </div>
          </div>

          <div className="about-layout__text about-copy">
            <p className="section-label">02 / About me</p>
            <h2 className="about-copy__title">Curious about what<br />happens behind the screen.</h2>
            <p className="about-copy__p">
              I am an Information Technology student at the Western Institute of Technology, focused on designing and
              building dependable back end systems, with a focus on server-side logic, databases, and APIs.
            </p>
            <p className="about-copy__p">
              My coursework combines structured theory with practical labs and team projects, which helps me strengthen
              both technical delivery and professional collaboration in settings similar to industry practice.
            </p>

            <div className="skill-grid">
              <div>
                <h4 className="skill-block__title">Software Development</h4>
                <p className="skill-block__detail">Java, Python, C++, SQL</p>
              </div>
              <div>
                <h4 className="skill-block__title">Systems &amp; Tooling</h4>
                <p className="skill-block__detail">Networking, Linux, Git</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
