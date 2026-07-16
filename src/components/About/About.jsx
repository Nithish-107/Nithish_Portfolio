// About section — intro, objective, tech stack, strengths
import { personalInfo } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './About.css';

const TECH_STACK = ['Java', 'Spring Boot', 'React', 'JavaScript', 'MySQL', 'REST API', 'Git', 'HTML/CSS'];

/* Glass terminal card — mirrors Hero code-editor visual language */
function AboutTerminal() {
  return (
    <div className="about-terminal" aria-hidden="true">
      {/* Title bar */}
      <div className="about-terminal-bar">
        <span className="about-terminal-dot about-terminal-dot--red" />
        <span className="about-terminal-dot about-terminal-dot--yellow" />
        <span className="about-terminal-dot about-terminal-dot--green" />
        <span className="about-terminal-filename">developer.js</span>
      </div>
      {/* Code body */}
      <div className="about-terminal-body">
        <div className="atl">
          <span className="at-kw">const </span>
          <span className="at-var">developer</span>
          <span className="at-pu"> = {'{'}</span>
        </div>
        <div className="atl atl--in">
          <span className="at-key">name</span>
          <span className="at-pu">: </span>
          <span className="at-str">"{personalInfo.name}"</span>
          <span className="at-pu">,</span>
        </div>
        <div className="atl atl--in">
          <span className="at-key">role</span>
          <span className="at-pu">: </span>
          <span className="at-str">"Full Stack Developer"</span>
          <span className="at-pu">,</span>
        </div>
        <div className="atl atl--in">
          <span className="at-key">stack</span>
          <span className="at-pu">: [</span>
          <span className="at-str">"Java"</span>
          <span className="at-pu">, </span>
          <span className="at-str">"Spring Boot"</span>
          <span className="at-pu">, </span>
          <span className="at-str">"React"</span>
          <span className="at-pu">],</span>
        </div>
        <div className="atl atl--in">
          <span className="at-key">passion</span>
          <span className="at-pu">: </span>
          <span className="at-str">"Building scalable apps"</span>
          <span className="at-pu">,</span>
        </div>
        <div className="atl atl--in">
          <span className="at-key">available</span>
          <span className="at-pu">: </span>
          <span className="at-bool">true</span>
        </div>
        <div className="atl">
          <span className="at-pu">{'}'};</span>
        </div>
        {/* Blinking cursor line */}
        <div className="atl atl--cursor">
          <span className="at-prompt">▋</span>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Who I Am</span>
          <h2 className="section-title" id="about-title">
            About <span>Me</span>
          </h2>
          <p className="section-subtitle">A passionate developer who loves building impactful web experiences.</p>
        </div>

        <div className="about-grid">
          {/* Left — terminal card replaces placeholder */}
          <div className="about-image-card reveal reveal-left" ref={leftRef}>
            <div className="about-img-wrapper">
              <AboutTerminal />
            </div>
            <div className="about-exp-badge">
              <strong>1+</strong>
              <span>Year Exp.</span>
            </div>
          </div>

          {/* Right — content */}
          <div className="about-content reveal reveal-right" ref={rightRef}>
            <div className="section-tag" style={{ marginBottom: '1rem' }}>Full Stack Developer</div>

            <p className="about-intro">{personalInfo.summary}</p>

            <blockquote className="about-objective">{personalInfo.objective}</blockquote>

            <p className="about-tech-title">Technologies I work with:</p>
            <ul className="about-tech-list" aria-label="Technologies">
              {TECH_STACK.map((tech) => (
                <li key={tech} className="tech-badge">{tech}</li>
              ))}
            </ul>

            <p className="about-tech-title">Core Strengths:</p>
            <ul className="about-strengths" aria-label="Strengths">
              {personalInfo.strengths.map((s) => (
                <li key={s} className="strength-item">
                  <span className="strength-dot" aria-hidden="true" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
