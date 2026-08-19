import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ArrowUpRight, Shield, Sparkles, CheckCircle2, Layers, Smartphone } from 'lucide-react';
import Magnet from '../components/Magnet';
import { KotlinIcon, JavaIcon, AndroidIcon, FirebaseIcon, GitIcon, Github } from '../components/Icons';

// Images from assets
import nexusImg from '../assets/project_nexus.jpeg';
import resumeImg from '../assets/project_resume.png';
import portfolioImg from '../assets/project_portfolio.png';
import microAtmImg from '../assets/project_micro_atm.jpeg';
import horizonImg from '../assets/project_horizon.png';

export const WorkScreen: React.FC = () => {
  const [activeProjectFilter, setActiveProjectFilter] = useState<'all' | 'android' | 'ai' | 'web'>('all');

  // Work Experiences
  const experiences = [
    {
      role: 'Android Developer',
      company: 'Saranda Software Pvt. Ltd.',
      duration: 'Jan 2026 – Present',
      tenure: '8 Months Total (3 Mo Training + 5 Mo Development)',
      type: 'On-Site / Enterprise Mobility',
      location: 'India',
      badge: 'Fintech & Enterprise Mobility',
      summary:
        'Completed a 3-month structured training program in native Android development before advancing into active production feature development for banking and enterprise mobility solutions.',
      keyContributions: [
        'Contributed core fintech modules to Micro ATM (MATM) / VCBL Tab Banking, a native Android micro-banking app (Java/Kotlin) built for Visakhapatnam Cooperative Bank Ltd., enabling secure agent-led doorstep and branchless transactions.',
        'Integrated Aadhaar-enabled biometric authentication via UIDAI L0/L1 RD Services with multi-device interoperability across Vriddhi and Evolute field hardware.',
        'Engineered wireless receipt-printing workflows and connection-recovery logic for ESC/POS thermal printer commands with individual failure-case exception handling to maintain field reliability.',
        'Developed and tested native Android application modules over a 5-month development cycle, executing feature builds, UI refinements, and secure REST API data synchronization.',
      ],
      techStack: [
        { name: 'Java', icon: JavaIcon },
        { name: 'Kotlin', icon: KotlinIcon },
        { name: 'Android SDK', icon: AndroidIcon },
        { name: 'Fintech ', icon: Shield },
        { name: 'UIDAI Biometrics', icon: Shield },
        { name: 'Firebase', icon: FirebaseIcon },
        { name: 'Micro Atm', icon: Layers },
      ],
      accentColor: 'border-accent-blue/30 bg-accent-blue/5 text-accent-blue',
    },
    {
      role: 'Front-End Developer Intern',
      company: 'VirtuNexa',
      duration: 'Feb 2025 – Mar 2025',
      tenure: '2 Months Virtual Internship',
      type: 'Remote / Frontend Web',
      location: 'Remote',
      badge: 'Interactive Web Interfaces',
      summary:
        'Contributed to assigned front-end development tasks, building modern interactive web components and gaining hands-on experience with remote agile collaboration.',
      keyContributions: [
        'Developed modular and responsive front-end UI interfaces utilizing modern HTML5, CSS3, and JavaScript (ES6+).',
        'Implemented cross-browser compatible layouts, optimizing responsiveness across mobile, tablet, and desktop viewports.',
        'Practiced Git version control, structured code commits, and collaborative remote code review workflows.',
      ],
      techStack: [
        { name: 'HTML5 / CSS3', icon: Layers },
        { name: 'JavaScript ES6+', icon: Layers },
        { name: 'Git & GitHub', icon: GitIcon },
        { name: 'Responsive Design', icon: Layers },
      ],
      accentColor: 'border-accent-purple/30 bg-accent-purple/5 text-accent-purple',
    },
  ];

  // Project Showcase
  const projects = [
    {
      id: 'micro-atm-matm',
      category: 'android',
      title: 'Micro ATM (MATM)',
      subtitle: 'Native Android Fintech & Micro-Banking Platform',
      flagship: true,
      image: microAtmImg,
      description:
        'Contributed core banking and transaction modules to a native Android Micro ATM (MATM) financial application (Java/Kotlin) for Visakhapatnam Cooperative Bank Ltd. (VCBL), enabling secure, agent-led doorstep and branchless banking. Integrated Aadhaar-enabled biometric authentication via UIDAI L0/L1 RD Services and engineered wireless transaction receipt workflows for field banking agents.',
      features: [
        'Doorstep & branchless micro-banking operations',
        'UIDAI L0/L1 RD Services Aadhaar biometric auth',
        'Fintech transaction flows & secure session logic',
        'Multi-device interoperability across Vriddhi & Evolute hardware',
      ],
      tech: ['Java', 'Android SDK', 'Fintech Workflows', 'UIDAI Biometrics', 'Firebase', 'REST APIs'],
      github: 'https://github.com/deepak57s',
      live: '#contact',
      liveText: 'Fintech Case Study',
    },
    {
      id: 'nexus-hr',
      category: 'android',
      title: 'Nexus — Native Enterprise HR App',
      subtitle: 'Modern Android with Jetpack Compose & Clean Architecture',
      flagship: false,
      image: nexusImg,
      description:
        'Built a native enterprise HR and attendance-tracking app in Kotlin and Jetpack Compose following Clean Architecture (MVVM). Implemented anti-spoofed geofenced attendance check-ins using FusedLocationProviderClient and atomic Firestore transactions to guarantee leave-balance consistency. Added biometric login via EncryptedSharedPreferences.',
      features: [
        'Anti-spoofed geofenced check-ins with FusedLocationProvider',
        'Atomic Firestore transactions for concurrency safety',
        'Biometric authentication with EncryptedSharedPreferences',
        'Real-time alerts via Firebase Cloud Messaging (FCM)',
      ],
      tech: ['Kotlin', 'Jetpack Compose', 'Clean Architecture (MVVM)', 'Firestore', 'Biometrics', 'FCM'],
      github: 'https://github.com/deepak57s/Tapin',
      live: 'https://github.com/deepak57s/Tapin',
      liveText: 'Source Code',
    },
    {
      id: 'ai-resume-evaluator',
      category: 'ai',
      title: 'AI Resume Builder & Intelligent Evaluator',
      subtitle: 'Python, NLP & Sentence-BERT Semantic Scoring',
      flagship: false,
      image: resumeImg,
      description:
        'Designed an end-to-end AI resume evaluation platform using Sentence-BERT semantic similarity models to score candidate resumes against job descriptions. Built a FastAPI backend serving ATS compatibility scoring, AI-generated resume improvement suggestions, and automated interview question generation with bias-aware evaluation logic.',
      features: [
        'Sentence-BERT semantic similarity matching',
        'Automated ATS compatibility scoring engine',
        'AI-generated resume improvement recommendations',
        'Bias-aware recruiter-friendly candidate ranking',
      ],
      tech: ['Python', 'NLP', 'Sentence-BERT', 'FastAPI', 'Transformers', 'Scikit-Learn'],
      github: 'https://github.com/deepak57s',
      live: 'https://github.com/deepak57s',
      liveText: 'Explore System',
    },
    {
      id: 'orizon-weather',
      category: 'web',
      title: 'Horizon — Weather Dashboard',
      subtitle: 'Vanilla JavaScript & Open-Meteo REST API',
      flagship: false,
      image: horizonImg,
      description:
        'Full-stack vanilla JavaScript weather dashboard deployed on GitHub Pages with zero external frameworks and requiring no API keys. Integrated the Open-Meteo REST API for live weather telemetry, timezone picker, geolocation lookups, custom sun-arc SVG visualization, and 7-day forecast view.',
      features: [
        'Live weather integration via Open-Meteo API',
        'Custom interactive sun-arc SVG visualization',
        'Dynamic timezone switcher & geolocation detection',
        'Clean zero-dependency Vanilla ES6+ architecture',
      ],
      tech: ['JavaScript (ES6+)', 'HTML5 / CSS3', 'Open-Meteo REST API', 'SVG Graphics', 'GitHub Pages'],
      github: 'https://github.com/deepak57s',
      live: 'https://deepak57s.github.io/project2VN',
      liveText: 'Live Web App',
    },
    {
      id: 'developer-portfolio',
      category: 'web',
      title: 'Personal 3D Developer Portfolio',
      subtitle: 'React, Three.js WebGL & Framer Motion',
      flagship: false,
      image: portfolioImg,
      description:
        'Engineered an interactive 4-screen portfolio featuring Three.js/R3F WebGL 3D canvas backgrounds, Framer Motion spring physics and micro-interactions, responsive Tailwind CSS layouts, and seamless anchor navigation.',
      features: [
        'Interactive 3D Three.js particle & geometry canvas',
        'Framer Motion spring physics & tilt card shaders',
        '4-screen connected unified architecture',
        'Production-optimized bundle & responsive layouts',
      ],
      tech: ['React 19', 'TypeScript', 'Three.js / R3F', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/deepak57s/deepak-portfolio',
      live: 'https://deepak-portfolio-orpin-xi.vercel.app',
      liveText: 'Live Deployment',
    },
  ];

  const filteredProjects = projects.filter(
    (p) => activeProjectFilter === 'all' || p.category === activeProjectFilter
  );

  return (
    <section
      id="work"
      className="py-24 md:py-32 px-6 relative w-full bg-[#080808] border-t border-white/[0.04]"
    >
      {/* Ambient Lighting Blurs */}
      <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-accent-blue/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 rounded-full bg-accent-purple/5 blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 grid-overlay opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col gap-24">

        {/* ========================================================================= */}
        {/* SECTION 3.1: WORK EXPERIENCE TIMELINE */}
        {/* ========================================================================= */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-start text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4">
              <Briefcase className="w-3.5 h-3.5 text-accent-blue" />
              Industry Experience
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold font-kanit uppercase italic text-white tracking-tight">
              Work &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple ml-3">
                Track Record
              </span>
            </h2>
            <p className="text-primary-light/70 text-sm md:text-base mt-3 leading-relaxed font-outfit">
              Production-level native Android feature development, financial micro-banking integrations, and modern frontend application engineering.
            </p>
          </div>

          {/* Vertical Timeline Container */}
          <div className="relative border-l border-white/[0.08] ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative group"
              >
                {/* Timeline node icon on the line */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#0C0C0C] border-2 border-accent-blue flex items-center justify-center shadow-[0_0_12px_rgba(56,189,248,0.4)]">
                  <div className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
                </div>

                {/* Experience Card */}
                <div className="p-8 md:p-10 rounded-3xl glass-panel border border-white/[0.06] hover:border-white/[0.15] transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-widest text-accent-blue font-outfit block mb-1">
                        {exp.company}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white font-kanit tracking-wide">
                        {exp.role}
                      </h3>
                    </div>

                    <div className="flex flex-col md:items-end gap-1">
                      <span className="text-xs font-bold text-white px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] inline-block">
                        {exp.duration}
                      </span>
                      <span className="text-[11px] text-primary-light/50 font-medium font-outfit">
                        {exp.tenure}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-primary-light/80 font-outfit leading-relaxed mb-6">
                    {exp.summary}
                  </p>

                  {/* Bullet Points */}
                  <div className="space-y-3 mb-8">
                    {exp.keyContributions.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-3 text-xs md:text-sm text-primary-light/70 font-outfit leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-accent-emerald flex-shrink-0 mt-1" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack pills */}
                  <div className="pt-6 border-t border-white/[0.05] flex flex-wrap items-center gap-2">
                    <span className="text-[10px] uppercase tracking-wider text-primary-light/40 font-semibold mr-2">
                      Key Technologies:
                    </span>
                    {exp.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs font-medium text-white/90"
                      >
                        <tech.icon className="w-3.5 h-3.5 text-accent-blue" />
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 3.2: FEATURED PROJECTS GALLERY */}
        {/* ========================================================================= */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col items-start text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-purple mb-4">
                <Smartphone className="w-3.5 h-3.5 text-accent-purple" />
                Featured Portfolio
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold font-kanit uppercase italic text-white tracking-tight">
                Engineering &
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple via-accent-blue to-accent-emerald ml-3">
                  Production Works
                </span>
              </h2>
              <p className="text-primary-light/70 text-sm md:text-base mt-3 leading-relaxed font-outfit">
                Flagship native Android financial applications, AI semantic engines, and modern full-stack web platforms.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'android', label: 'Native Android' },
                { id: 'ai', label: 'AI & NLP' },
                { id: 'web', label: 'Web Applications' },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveProjectFilter(filter.id as any)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all ${activeProjectFilter === filter.id
                    ? 'bg-white text-black shadow-lg shadow-white/10'
                    : 'bg-white/[0.04] text-primary-light/70 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
                    }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {filteredProjects.map((project, idx) => {
              const isFlagship = project.flagship || idx === 0;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`p-8 rounded-3xl glass-panel border border-white/[0.06] hover:border-white/[0.18] transition-all flex flex-col justify-between overflow-hidden group ${isFlagship ? 'lg:col-span-12' : 'lg:col-span-6'
                    }`}
                >
                  <div className={`grid ${isFlagship ? 'grid-cols-1 lg:grid-cols-12 gap-8' : 'grid-cols-1 gap-6'}`}>

                    {/* Left Column (or Top for 6-col) */}
                    <div className={isFlagship ? 'lg:col-span-7 flex flex-col justify-between' : 'flex flex-col'}>
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          {project.flagship && (
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-gradient-to-r from-accent-purple to-accent-blue text-black">
                              <Sparkles className="w-3 h-3" /> Flagship Project
                            </span>
                          )}
                          <span className="text-[10px] uppercase tracking-widest text-primary-light/50 font-semibold font-outfit">
                            {project.subtitle}
                          </span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-extrabold text-white font-kanit tracking-wide mb-3 group-hover:text-accent-blue transition-colors">
                          {project.title}
                        </h3>

                        <p className="text-xs md:text-sm text-primary-light/75 font-outfit leading-relaxed mb-6">
                          {project.description}
                        </p>

                        {/* Feature bullets */}
                        <div className="space-y-2 mb-6">
                          {project.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2.5 text-xs text-primary-light/70 font-outfit">
                              <CheckCircle2 className="w-3.5 h-3.5 text-accent-emerald flex-shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tech.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[11px] text-white/80 font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Column: Image Preview + Action Links */}
                    <div className={isFlagship ? 'lg:col-span-5 flex flex-col justify-between' : 'flex flex-col'}>
                      <div className="relative rounded-2xl overflow-hidden bg-black/40 border border-white/[0.08] aspect-[16/10] mb-4 group-hover:border-white/20 transition-all">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center gap-3">
                        <Magnet range={30} strength={0.25}>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-white/[0.04] text-white hover:bg-white/[0.08] border border-white/[0.08] transition-all"
                          >
                            <Github className="w-4 h-4" />
                            GitHub Code
                          </a>
                        </Magnet>

                        <Magnet range={30} strength={0.25}>
                          <a
                            href={project.live}
                            target={project.live.startsWith('http') ? '_blank' : '_self'}
                            rel="noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-accent-purple to-accent-blue text-black hover:opacity-95 transition-all"
                          >
                            {project.liveText}
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        </Magnet>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkScreen;
