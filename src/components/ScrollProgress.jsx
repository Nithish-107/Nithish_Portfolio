// Thin progress bar at the top showing scroll depth
import { useEffect, useState } from 'react';
import '../css/scrollProgress.css';

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      setWidth((scrollTop / (scrollHeight - clientHeight)) * 100);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <div className="scroll-progress" style={{ width: `${width}%` }} aria-hidden="true" />;
}
