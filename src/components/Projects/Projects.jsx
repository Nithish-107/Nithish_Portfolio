// Projects section with filter tabs and animated cards
import { useState } from 'react';
import { FiGithub, FiLayout, FiMonitor, FiBox } from 'react-icons/fi';
import { projects } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Projects.css';

// Clean SVG placeholder icons per project index — no emoji
const PROJECT_ICONS = [<FiMonitor />, <FiLayout />, <FiBox />];

function ProjectCard({ project, index }) {
  const ref = useScrollReveal();
  return (
    <article
      className="project-card reveal"
      ref={ref}
      style={{ transitionDelay: `${index * 0.1}s` }}
      aria-label={project.title}
    >
      {/* Image */}
      <div className="project-img-wrapper">
        {project.image ? (
          <img src={project.image} alt={project.title} className="project-img" loading="lazy" />
        ) : (
          <div className="project-img-placeholder" aria-hidden="true">
            {PROJECT_ICONS[index % PROJECT_ICONS.length]}
          </div>
        )}
        <div className="project-overlay" aria-hidden="true">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-overlay-btn outline">
            GitHub
          </a>
        </div>
      </div>

      {/* Body */}
      <div className="project-body">
        <p className="project-category">{project.category}</p>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        <ul className="project-features" aria-label="Features">
          {project.features.slice(0, 3).map((f) => (
            <li key={f} className="project-feature">{f}</li>
          ))}
        </ul>

        <div className="project-tech" aria-label="Technologies used">
          {project.tech.map((t) => (
            <span key={t} className="project-tech-badge">{t}</span>
          ))}
        </div>

        <div className="project-footer">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link github"
            aria-label={`${project.title} GitHub`}
          >
            <FiGithub size={14} /> GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const headerRef = useScrollReveal();
  const categories = ['All', ...new Set(projects.map((p) => p.category))];
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section section-alt" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-tag">What I've Built</span>
          <h2 className="section-title" id="projects-title">
            My <span>Projects</span>
          </h2>
          <p className="section-subtitle">A selection of projects that showcase my skills and passion.</p>
        </div>

        <div className="projects-filters" role="group" aria-label="Project filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn${filter === cat ? ' active' : ''}`}
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
