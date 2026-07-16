// Education section — degree cards
import { FiBook, FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';
import { education } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Education.css';

function EducationCard({ edu, index }) {
  const cardRef = useScrollReveal();
  return (
    <article
      className="education-card reveal"
      ref={cardRef}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="education-icon" aria-hidden="true"><FiBook size={22} /></div>
      <h3 className="education-degree">{edu.degree}</h3>
      <p className="education-field">{edu.field}</p>
      <p className="education-institution">{edu.institution}</p>
      <div className="education-meta">
        <span><FiCalendar size={12} /> {edu.duration}</span>
        <span><FiMapPin size={12} /> {edu.location}</span>
      </div>
      <div className="education-grade"><FiAward size={13} /> {edu.grade}</div>
      <div className="education-highlights" aria-label="Key subjects">
        {edu.highlights.map((h) => (
          <span key={h} className="education-highlight-tag">{h}</span>
        ))}
      </div>
    </article>
  );
}

export default function Education() {
  const headerRef = useScrollReveal();

  return (
    <section id="education" className="section section-alt" aria-labelledby="education-title">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-tag">Academic Background</span>
          <h2 className="section-title" id="education-title">
            My <span>Education</span>
          </h2>
          <p className="section-subtitle">The foundation that drives my technical expertise.</p>
        </div>

        <div className="education-grid">
          {education.map((edu, i) => (
            <EducationCard key={edu.id} edu={edu} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
