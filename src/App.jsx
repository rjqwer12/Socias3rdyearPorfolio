import { useState, useCallback } from 'react';
import Navbar from './components/Navbar.jsx';
import HomeSection from './components/HomeSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import ProjectModal from './components/ProjectModal.jsx';
import { getProjectBySlug } from './data/projects.js';
import { useSmoothAnchorFallback } from './hooks/useSmoothAnchorFallback.js';

export default function App() {
  const [activeSlug, setActiveSlug] = useState(null);
  const activeProject = activeSlug ? getProjectBySlug(activeSlug) : null;

  useSmoothAnchorFallback();

  const closeModal = useCallback(() => setActiveSlug(null), []);

  return (
    <div className="site-body">
      <Navbar />
      <main>
        <HomeSection />
        <ProjectsSection onOpenProject={setActiveSlug} />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <ProjectModal project={activeProject} onClose={closeModal} />
    </div>
  );
}
