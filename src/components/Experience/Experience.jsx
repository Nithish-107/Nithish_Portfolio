// Experience section — alternating timeline layout
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import { experience } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Experience.css';

function TimelineItem({ item, index }) {
  const ref = useScrollReveal();
  return (
    <div className="timeline-item reveal" ref={ref} style={{ transitionDelay: `${index * 0.15}s` }}>
      <div className="timeline-spacer" aria-hidden="true" />

      <div className="timeline-dot" aria-hidden="true">
        <div className="timeline-dot-inner" />
      </div>

      <article className="timeline-card">
        <span className="timeline-type-badge">{item.type}</span>
        <h3 className="timeline-role">{item.role}</h3>
        <p className="timeline-company">{item.company}</p>
        <div className="timeline-meta">
          <span><FiCalendar size={12} /> {item.duration}</span>
          <span><FiMapPin size={12} /> {item.location}</span>
        </div>
        <p className="timeline-desc">{item.description}</p>
        <ul className="timeline-highlights" aria-label="Key highlights">
          {item.highlights.map((h) => (
            <li key={h} className="timeline-highlight">{h}</li>
          ))}
        </ul>
      </article>
    </div>
  );
}

export default function Experience() {
  const headerRef = useScrollReveal();

  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-tag">My Journey</span>
          <h2 className="section-title" id="experience-title">
            Work <span>Experience</span>
          </h2>
          <p className="section-subtitle">Professional experience that shaped my skills.</p>
        </div>

        <div className="experience-timeline" role="list">
          {experience.map((item, i) => (
            <TimelineItem key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
