import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import MilestonesSection from './sections/MilestonesSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';

export const App: React.FC = () => {
  useEffect(() => {
    // Dynamic premium page branding & SEO tags
    document.title = "Srinivas Deepak -- Portfolio";
    
    // Selectively set meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', 'High-fidelity Front-End Developer and Creative UI/UX portfolio of Gollapalli Srinivas Deepak (SD). Powered by React, Tailwind CSS, and Three.js.');
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-primary-light selection:bg-accent-purple/30 selection:text-white font-outfit overflow-x-hidden">
      {/* Dynamic Background Noise/Overlay texture */}
      <div className="fixed inset-0 grid-overlay opacity-[0.015] pointer-events-none z-[1]" />
      
      {/* Top Floating Glassmorphic Nav */}
      <Navbar />

      {/* Structured Sections Aggregation */}
      <main className="w-full relative z-10 flex flex-col">
        {/* Introfold & 3D Interactive Playground */}
        <HeroSection />

        {/* Scroll Linked Micro Animated Marquee */}
        <MarqueeSection />

        {/* Philosophy & Character Oppacity Reveal */}
        <AboutSection />

        {/* Verified Credentials Certifications display */}
        <MilestonesSection />

        {/* Accordion fluid service panels */}
        <ServicesSection />

        {/* Sticky stacking scalable portfolio cards */}
        <ProjectsSection />

        {/* Form controls & legal footer */}
        <ContactSection />
      </main>
    </div>
  );
};

export default App;
