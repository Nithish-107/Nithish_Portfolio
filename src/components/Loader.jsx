// Loading screen shown on initial page load
import { personalInfo } from '../data/portfolioData';
import '../css/loader.css';

export default function Loader({ hidden }) {
  const initials = personalInfo.name.split(' ').map((n) => n[0]).join('');
  return (
    <div className={`loader-overlay${hidden ? ' hidden' : ''}`} aria-hidden={hidden}>
      <div className="loader-logo">&lt;{initials} /&gt;</div>
      <div className="loader-bar-track">
        <div className="loader-bar-fill" />
      </div>
    </div>
  );
}
