// Sticky navbar with smooth scroll, active section highlight, theme toggle, mobile menu
import { useState, useEffect } from 'react';
import { personalInfo } from '../../data/portfolioData';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect scroll for navbar background + active section
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = NAV_LINKS.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const initials = personalInfo.name.split(' ').map((n) => n[0]).join('');

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="container navbar-inner">
          {/* Logo */}
          <a href="#home" className="navbar-logo" onClick={() => handleNavClick('#home')}>
            &lt;{initials} /&gt;
          </a>

          {/* Desktop Links */}
          <ul className="navbar-links" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`nav-link${active === href.slice(1) ? ' active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Controls */}
          <div className="navbar-controls">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <button
              className={`hamburger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} role="dialog" aria-modal="true" aria-label="Mobile navigation">
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className={`nav-link${active === href.slice(1) ? ' active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
          >
            {label}
          </a>
        ))}
      </div>
    </>
  );
}
