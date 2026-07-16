// Skills section — categorized skill cards with animated progress bars
import { useEffect, useRef, useState } from 'react';
import { FiCode, FiServer, FiDatabase, FiTool } from 'react-icons/fi';
import { skills } from '../../data/portfolioData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Skills.css';

const CATEGORY_ICONS = {
  Languages: <FiCode />,
  Frontend:  <FiCode />,
  Backend:   <FiServer />,
  Database:  <FiDatabase />,
  Tools:     <FiTool />,
};

function SkillBar({ name, level }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimated(true); observer.unobserve(el); } },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="skill-item" ref={ref}>
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-percent">{level}%</span>
      </div>
      <div
        className="skill-bar-track"
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={name}
      >
        <div className="skill-bar-fill" style={{ width: animated ? `${level}%` : '0%' }} />
      </div>
    </div>
  );
}

function CategoryCard({ category, items, index }) {
  const cardRef = useScrollReveal();
  return (
    <div
      className="skill-category-card reveal"
      ref={cardRef}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="skill-category-header">
        <div className="skill-category-icon" aria-hidden="true">
          {CATEGORY_ICONS[category] ?? <FiCode />}
        </div>
        <h3 className="skill-category-name">{category}</h3>
      </div>
      {items.map((skill) => (
        <SkillBar key={skill.name} name={skill.name} level={skill.level} />
      ))}
    </div>
  );
}

export default function Skills() {
  const headerRef = useScrollReveal();

  return (
    <section id="skills" className="section section-alt" aria-labelledby="skills-title">
      <div className="container">
        <div className="section-header reveal" ref={headerRef}>
          <span className="section-tag">What I Know</span>
          <h2 className="section-title" id="skills-title">
            My <span>Skills</span>
          </h2>
          <p className="section-subtitle">Technologies and tools I use to bring ideas to life.</p>
        </div>

        <div className="skills-categories">
          {Object.entries(skills).map(([category, items], i) => (
            <CategoryCard key={category} category={category} items={items} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
