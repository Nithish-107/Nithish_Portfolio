// Hero section with typing animation, animated background, stats, and CTA buttons
import { useState, useEffect } from 'react';
import { FiFolder, FiDownload, FiMail } from 'react-icons/fi';
import { SiOpenjdk, SiSpringboot, SiReact, SiMysql, SiHtml5, SiCss, SiGit, SiIntellijidea } from 'react-icons/si';
import { personalInfo } from '../../data/portfolioData';
import { useCounter } from '../../hooks/useScrollReveal';
import './Hero.css';

const TYPING_STRINGS = [
  'Java Full Stack Developer',
  'Spring Boot Enthusiast',
  'React Developer',
  'Problem Solver',
];

// Floating tech icons — evenly distributed around the outer ring
// Angles are clockwise from top; radius matches .hero-ring-2 (inset: -36px → ~196px from center)
const FLOAT_ICONS = [
  { icon: <SiOpenjdk />,          cls: 'fi-java',      delay: '0s'    }, // 0°   top
  { icon: <SiSpringboot />,       cls: 'fi-spring',    delay: '0.6s'  }, // 45°  top-right
  { icon: <SiReact />,            cls: 'fi-react',     delay: '1.2s'  }, // 90°  right
  { icon: <SiHtml5 />,            cls: 'fi-html',      delay: '1.8s'  }, // 135° bottom-right
  { icon: <SiCss />,              cls: 'fi-css',       delay: '2.4s'  }, // 180° bottom
  { icon: <SiMysql />,            cls: 'fi-mysql',     delay: '3.0s'  }, // 225° bottom-left
  { icon: <SiGit />,              cls: 'fi-vscode',    delay: '3.6s'  }, // 270° left
  { icon: <SiIntellijidea />,     cls: 'fi-intellij',  delay: '4.2s'  }, // 315° top-left
];

function useTyping(strings, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState('');
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[idx];
    let timeout;

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        setCharIdx((c) => c + 1);
      }, speed);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        setCharIdx((c) => c - 1);
      }, speed / 2);
    } else {
      setDeleting(false);
      setIdx((i) => (i + 1) % strings.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, idx, strings, speed, pause]);

  return display;
}

function StatCounter({ target, label, suffix = '+' }) {
  const ref = useCounter(target);
  return (
    <div className="hero-stat">
      <div className="hero-stat-number">
        <span ref={ref}>0</span>{suffix}
      </div>
      <div className="hero-stat-label">{label}</div>
    </div>
  );
}

export default function Hero() {
  const typedText = useTyping(TYPING_STRINGS);
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="hero" aria-label="Hero section">
      {/* Animated background */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>

      <div className="container hero-content">
        {/* Text */}
        <div className="hero-text">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Available for opportunities
          </div>

          <p className="hero-greeting">Hello, I'm</p>

          <h1 className="hero-name">
            {personalInfo.name.split(' ')[0]}{' '}
            <span>{personalInfo.name.split(' ').slice(1).join(' ')}</span>
          </h1>

          <div className="hero-title" aria-live="polite">
            {typedText}
            <span className="typing-cursor" aria-hidden="true" />
          </div>

          <p className="hero-summary">{personalInfo.summary}</p>

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
              <FiFolder size={16} /> View Projects
            </button>
            <a
              href={personalInfo.resumeUrl}
              download
              className="btn btn-ghost"
              aria-label="Download Resume"
            >
              <FiDownload size={16} /> Download Resume
            </a>
            <button className="btn btn-ghost" onClick={() => scrollTo('contact')}>
              <FiMail size={16} /> Contact Me
            </button>
          </div>

          <div className="hero-stats">
            <StatCounter target={3} label="Projects" />
            <StatCounter target={1} label="Internship" />
            <StatCounter target={6} label="Certificates" />
          </div>
        </div>

        {/* Image */}
        <div className="hero-image-wrapper" aria-hidden="true">
          <div className="hero-image-container">
            <div className="hero-ring" />
            <div className="hero-ring hero-ring-2" />
            <div className="hero-pulse" />
            <div className="hero-pulse hero-pulse-2" />

            {/* Floating tech icons — orbiting the ring */}
            {FLOAT_ICONS.map(({ icon, cls, delay }) => (
              <div key={cls} className={`hero-float-icon ${cls}`} style={{ animationDelay: delay }}>{icon}</div>
            ))}

            {/* Code editor card */}
            <div className="hero-code-card" aria-label="Code editor illustration">
              <div className="hero-code-titlebar">
                <span className="hero-code-dot hero-code-dot--red" />
                <span className="hero-code-dot hero-code-dot--yellow" />
                <span className="hero-code-dot hero-code-dot--green" />
                <span className="hero-code-filename">Main.java</span>
              </div>
              <div className="hero-code-body">
                <div className="hero-code-line">
                  <span className="hc-kw">public class</span>
                  <span className="hc-cls"> Developer</span>
                  <span className="hc-pu"> {'{'}</span>
                </div>
                <div className="hero-code-line hero-code-line--indent">
                  <span className="hc-kw">String</span>
                  <span className="hc-var"> name</span>
                  <span className="hc-pu"> = </span>
                  <span className="hc-str">"Nithishkumar"</span>
                  <span className="hc-pu">;</span>
                </div>
                <div className="hero-code-line hero-code-line--indent">
                  <span className="hc-kw">String</span>
                  <span className="hc-var"> stack</span>
                  <span className="hc-pu"> = </span>
                  <span className="hc-str">"Full Stack"</span>
                  <span className="hc-pu">;</span>
                </div>
                <div className="hero-code-line hero-code-line--indent hero-code-line--gap">
                  <span className="hc-fn">build</span>
                  <span className="hc-pu">(</span>
                  <span className="hc-str">"great apps"</span>
                  <span className="hc-pu">);</span>
                </div>
                <div className="hero-code-line">
                  <span className="hc-pu">{'}'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll" aria-hidden="true">
        <div className="hero-scroll-mouse">
          <div className="hero-scroll-wheel" />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
