import { socialLinks } from '../data/socialLinks.js';

export default function ContactSection() {
  return (
    <section className="section section--contact" id="contact">
      <div className="page-shell">
        <div className="contact-inner">
          <h2 className="contact-inner__title">Let&apos;s Connect</h2>
          <p className="contact-inner__lead">
            Stay updated with my latest academic projects and professional journey.
          </p>

          <div className="social-row">
            {socialLinks.map(({ label, href, icon }) => (
              <a key={label} className="group social-link" href={href} target="_blank" rel="noopener noreferrer">
                <span className="social-link__icon">
                  <img className="social-icon" src={icon} width="28" height="28" alt="" />
                </span>
                <span className="social-link__label">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
