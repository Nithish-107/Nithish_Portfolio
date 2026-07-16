// Certificates section — certificate cards with icons
import { FiAward, FiCalendar } from 'react-icons/fi';
import { certificates } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Certificates.css';

function CertCard({ cert, index }) {
  const ref = useScrollReveal();
  return (
    <article
      className="cert-card reveal"
      ref={ref}
      style={{ transitionDelay: `${index * 0.08}s`, '--cert-color': cert.color }}
    >
      <div className="cert-icon-wrapper" aria-hidden="true">
        <FiAward size={22} />
      </div>
      <div>
        <h3 className="cert-title">{cert.title}</h3>
        <p className="cert-issuer">{cert.issuer}</p>
      </div>
      <div className="cert-footer">
        <span className="cert-date"><FiCalendar size={11} /> {cert.date}</span>
      </div>
    </article>
  );
}

export default function Certificates() {
  const headerRef = useScrollReveal();

  return (
    <section id="certificates" className="section" aria-labelledby="certificates-title">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-tag">Achievements</span>
          <h2 className="section-title" id="certificates-title">
            My <span>Certificates</span>
          </h2>
          <p className="section-subtitle">Continuous learning through recognized certifications.</p>
        </div>

        <div className="certificates-grid">
          {certificates.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
