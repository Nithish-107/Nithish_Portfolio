// Footer with social links, nav links, and back-to-top button
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolioData';
import './Footer.css';

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Certificates', 'Contact'];

export default function Footer() {
  const year = new Date().getFullYear();
  const initials = personalInfo.name.split(' ').map((n) => n[0]).join('');

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-inner">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">&lt;{initials} /&gt;</div>
            <p className="footer-tagline">
              Java Full Stack Developer passionate about building scalable, user-friendly web applications.
            </p>
            <div className="footer-socials" aria-label="Social links">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="GitHub"><FiGithub /></a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="LinkedIn"><FiLinkedin /></a>
              <a href={`mailto:${personalInfo.email}`} className="footer-social" aria-label="Email"><FiMail /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-col-title">Quick Links</h3>
            <nav className="footer-links" aria-label="Footer navigation">
              {NAV_LINKS.slice(0, 4).map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="footer-link"
                  onClick={(e) => { e.preventDefault(); scrollTo(link.toLowerCase()); }}
                >
                  › {link}
                </a>
              ))}
            </nav>
          </div>

          {/* More Links */}
          <div>
            <h3 className="footer-col-title">More</h3>
            <nav className="footer-links" aria-label="More links">
              {NAV_LINKS.slice(4).map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="footer-link"
                  onClick={(e) => { e.preventDefault(); scrollTo(link.toLowerCase()); }}
                >
                  › {link}
                </a>
              ))}
              <a href={personalInfo.resumeUrl} download className="footer-link">› Download Resume</a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {year} <span>{personalInfo.name}</span>. Built with <FiHeart size={12} style={{ display: 'inline', verticalAlign: 'middle', color: 'var(--accent)' }} /> using React + Vite.
          </p>
          <a
            href="#home"
            className="back-to-top"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            aria-label="Back to top"
          >
            ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
