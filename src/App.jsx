// Root App component — orchestrates all sections, theme, loader, scroll progress
import { useState, useEffect, lazy, Suspense } from 'react';
import './css/global.css';

import Loader from './components/Loader';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

// Lazy-load below-fold sections for performance
const About        = lazy(() => import('./components/About/About'));
const Skills       = lazy(() => import('./components/Skills/Skills'));
const Projects     = lazy(() => import('./components/Projects/Projects'));
const Experience   = lazy(() => import('./components/Experience/Experience'));
const Education    = lazy(() => import('./components/Education/Education'));
const Certificates = lazy(() => import('./components/Certificates/Certificates'));
const Contact      = lazy(() => import('./components/Contact/Contact'));
const Footer       = lazy(() => import('./components/Footer/Footer'));

export default function App() {
  // ── Theme ──────────────────────────────────────────────────
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  // ── Loader ─────────────────────────────────────────────────
  const [loaderHidden, setLoaderHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaderHidden(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading screen */}
      <Loader hidden={loaderHidden} />

      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Sticky navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main content */}
      <main id="main-content">
        {/* Hero is eagerly loaded — above the fold */}
        <Hero />

        {/* Lazy-loaded sections */}
        <Suspense fallback={null}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Certificates />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </>
  );
}
