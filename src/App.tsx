import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import BackgroundScreen from './sections/BackgroundScreen';
import WorkScreen from './sections/WorkScreen';
import ContactSection from './sections/ContactSection';

export const App: React.FC = () => {
  useEffect(() => {
    // Dynamic page title & SEO meta tags
    document.title = "Srinivas Deepak — Android Developer & AI-ML Engineer";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Professional portfolio of Gollapalli Srinivas Deepak (SD) — Android Developer & CS (AI-ML) Undergrad specializing in Kotlin, Java, Jetpack Compose, Clean Architecture, Fintech Applications, and Biometric Integrations.'
    );
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-primary-light selection:bg-accent-purple/30 selection:text-white font-outfit overflow-x-hidden">
      {/* Background Grid Texture Overlay */}
      <div className="fixed inset-0 grid-overlay opacity-[0.02] pointer-events-none z-[1]" />

      {/* Fixed Glass Navbar */}
      <Navbar />

      {/* 4 Connected Screens */}
      <main className="w-full relative z-10 flex flex-col">
        {/* SCREEN 1: LANDING & CORE IDENTITY (Hero + Marquee + About with links to Screens 2 & 3) */}
        <section id="home" className="w-full">
          <HeroSection />
          <MarqueeSection />
          <AboutSection />
        </section>

        {/* SCREEN 2: BACKGROUND (Education + Categorized Skills Bento + Verified Certifications) */}
        <BackgroundScreen />

        {/* SCREEN 3: WORK & TRACK RECORD (Experience Timeline + Featured Projects Showcase) */}
        <WorkScreen />

        {/* SCREEN 4: CONTACT & REACH OUT (Direct Inquiries, Form, Socials, Footer) */}
        <ContactSection />
      </main>
    </div>
  );
};

export default App;
