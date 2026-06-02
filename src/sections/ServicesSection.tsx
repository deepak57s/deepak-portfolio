import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Compass, Cpu, Smartphone, Plus, Minus, ArrowRight } from 'lucide-react';
import Magnet from '../components/Magnet';

export const ServicesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const services = [
    {
      title: "Frontend Architecture & Web Development",
      short: "Interactive interfaces in React & TypeScript",
      icon: Code2,
      color: "text-accent-blue",
      desc: "Creating pixel-perfect, highly responsive interfaces optimized for smooth frame rates. We architect modular code structures using modern TypeScript patterns, advanced global state systems, and Tailwind utility systems that scale perfectly on mobile, tablet, and desktop viewports.",
      techs: ["React", "TypeScript", "Next.js", "Zustand", "Tailwind CSS", "Vite"],
      stat: "60fps Render Speeds"
    },
    {
      title: "Realtime 3D Spaces & Canvas Engineering",
      short: "Interactive experiences using WebGL & Three.js",
      icon: Compass,
      color: "text-accent-purple",
      desc: "Designing and building premium, mouse-responsive 3D environments directly inside the browser viewport. Integrating geometry structures, custom lighting maps, particle streams, raycasters, and mathematical physics to turn standard landing pages into interactive playgrounds.",
      techs: ["Three.js", "WebGL", "GLSL Shaders", "HTML5 Canvas", "Blender Mesh Design"],
      stat: "Full GPU Acceleration"
    },
    {
      title: "Backend Core Logic & Automation Scripts",
      short: "Robust services in Python & Java",
      icon: Cpu,
      color: "text-accent-emerald",
      desc: "Architecting logical backend foundations and automation structures. From highly encapsulated object-oriented structures in Java to clean, rapid script compilers, API aggregators, and system parsers in Python. Strong focus on clean test-driven developments.",
      techs: ["Python", "Java", "OOP Design Patterns", "REST APIs", "Node.js", "SQL Databases"],
      stat: "99.9% Test Coverage"
    },
    {
      title: "Native Android & Multiplatform Engineering",
      short: "Premium mobile experiences in Kotlin & React Native",
      icon: Smartphone,
      color: "text-orange-500",
      desc: "Engineering responsive, performant mobile interfaces maintaining modern clean architectures. Experienced in building native Android applications with Kotlin and declarative Jetpack Compose, alongside multiplatform layouts using React Native. Strong focus on rigorous MVVM structures, asynchronous Coroutines, and pixel-perfect transitions.",
      techs: ["Kotlin", "Jetpack Compose", "React Native", "Android SDK", "MVVM / Clean Architecture", "Coroutines"],
      stat: "Sub-16ms Frame Times"
    }
  ];

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="services"
      className="py-24 md:py-36 px-6 relative w-full bg-background overflow-hidden"
    >
      <div className="absolute top-1/2 left-10 w-96 h-96 rounded-full bg-accent-blue/[0.015] blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col items-start text-left mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold uppercase tracking-[0.2em] text-accent-purple mb-4">
            <Cpu className="w-4 h-4 text-accent-purple" />
            Capabilities & Disciplines
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-kanit uppercase italic text-white mb-6">
            Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue">Expertise</span>
          </h2>
          <p className="text-primary-light/60 text-sm md:text-base max-w-xl leading-relaxed">
            Professional skill offerings focusing on modern web frontends, interactive 3D WebGL scenes, and robust backend engineering logic.
          </p>
        </div>

        {/* Accordion Layout */}
        <div className="flex flex-col border-t border-white/[0.08]">
          {services.map((item, idx) => {
            const isExpanded = activeIndex === idx;
            return (
              <div
                key={idx}
                className="border-b border-white/[0.08] py-8 transition-colors duration-300 hover:bg-white/[0.01]"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full flex items-center justify-between text-left gap-6 group"
                >
                  <div className="flex items-center gap-4 md:gap-8">
                    {/* Index Indicator */}
                    <span className="text-xs md:text-sm font-kanit font-semibold text-primary-light/30 tracking-widest">
                      0{idx + 1}
                    </span>
                    {/* Icon */}
                    <div className={`p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] group-hover:border-white/[0.08] transition-colors ${item.color}`}>
                      <item.icon className="w-5 h-5 md:w-6 h-6" />
                    </div>
                    {/* Titles */}
                    <div>
                      <h3 className="text-base md:text-2xl font-bold font-kanit text-white leading-tight group-hover:text-accent-blue transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs md:text-sm text-primary-light/50 font-medium tracking-wide mt-1">
                        {item.short}
                      </p>
                    </div>
                  </div>

                  {/* Toggle Indicator */}
                  <div className="p-2 rounded-full border border-white/[0.06] bg-white/[0.01] text-primary-light/60 group-hover:text-white transition-colors">
                    {isExpanded ? <Minus className="w-4 h-4 md:w-5 h-5" /> : <Plus className="w-4 h-4 md:w-5 h-5" />}
                  </div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pl-6 md:pl-28 pr-6 pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-8 flex flex-col items-start">
                          <p className="text-xs md:text-base text-primary-light/75 leading-relaxed mb-6 font-outfit">
                            {item.desc}
                          </p>

                          {/* Tech Badges */}
                          <div className="flex flex-wrap gap-2 mb-2">
                            {item.techs.map((t, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[10px] md:text-xs font-semibold tracking-wider text-white"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Asymmetric Side Stat Banner */}
                        <div className="lg:col-span-4 flex flex-col justify-between items-start lg:items-end border-t lg:border-t-0 lg:border-l border-white/[0.06] pt-6 lg:pt-0 lg:pl-8">
                          <div className="text-left lg:text-right">
                            <span className="text-[10px] uppercase font-bold tracking-widest text-primary-light/40">
                              Performance Target
                            </span>
                            <p className={`text-xl font-bold font-kanit ${item.color} mt-1`}>
                              {item.stat}
                            </p>
                          </div>

                          <Magnet range={30} strength={0.3} className="mt-6 lg:mt-0">
                            <a
                              href="#contact"
                              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-white hover:text-accent-blue transition-colors group/btn"
                            >
                              Request service
                              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                            </a>
                          </Magnet>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
