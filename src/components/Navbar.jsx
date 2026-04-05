export default function Navbar() {
  return (
    <nav className="site-nav" aria-label="Primary">
      <div className="site-nav__inner">
        <span className="site-nav__brand">
          RJ MOLENE <span className="site-nav__brand-accent">SOCIAS</span>
        </span>
        <div className="site-nav__menu">
          <div className="site-nav__links">
            <a className="site-nav__link" href="#home">
              Home
            </a>
            <a className="site-nav__link" href="#projects">
              Projects
            </a>
            <a className="site-nav__link" href="#about">
              About
            </a>
            <a className="site-nav__cta" href="#contact">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
