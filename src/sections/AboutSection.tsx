import React from 'react';
import AnimatedText from '../components/AnimatedText';
import Magnet from '../components/Magnet';
import { User, Shield, Zap } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const stats = [
    { label: 'Creative Tech', value: '3D Realtime', icon: Zap, color: 'bg-accent-purple/10 text-accent-purple' },
    { label: 'Key Backend Core', value: 'Java & Logic', icon: Shield, color: 'bg-accent-emerald/10 text-accent-emerald' },
    { label: 'Primary Language', value: 'Python / TS', icon: User, color: 'bg-accent-blue/10 text-accent-blue' },
  ];

  return (
    <section
      id="about"
      className="py-24 md:py-36 px-6 relative w-full bg-background overflow-hidden"
    >
      {/* Decorative background grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />

      {/* Decorative ambient glowing backdrops */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-accent-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-accent-blue/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column: Title & Key Highlights */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold uppercase tracking-[0.2em] text-accent-purple mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-purple animate-pulse" />
            Core Philosophy
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 font-kanit uppercase italic text-white leading-tight">
            Bridging Art 
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue">
              & Pure Logic
            </span>
          </h2>

          <p className="text-primary-light/60 text-sm md:text-base mb-10 max-w-md leading-relaxed font-outfit">
            A software developer inspired by real-time interactive design. Building applications where architectural stability and stunning visual animations exist in complete harmony.
          </p>

          {/* Quick Metrics Grid */}
          <div className="flex flex-col gap-4 w-full max-w-sm">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 rounded-2xl glass border border-white/[0.04] hover:border-white/[0.08] hover:bg-white/[0.02] transition-all"
              >
                <div className={`p-3 rounded-xl ${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs text-primary-light/40 font-semibold uppercase tracking-wider">
                    {stat.label}
                  </h4>
                  <p className="text-sm font-bold text-white tracking-wide">
                    {stat.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Character-by-Character Opacity Reveal */}
        <div className="lg:col-span-7 text-left lg:pt-12">
          {/* Scroll Character Animation Container */}
          <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/[0.04] relative">
            {/* Glowing Accent Corner line */}
            <div className="absolute top-0 left-0 w-8 h-[1px] bg-accent-purple" />
            <div className="absolute top-0 left-0 w-[1px] h-8 bg-accent-purple" />

            <AnimatedText
              text="I craft immersive, high-fidelity web experiences by merging robust software engineering principles with beautiful realtime 3D elements. Specializing in Python core automation and advanced Java logic, I design interactive products that are highly optimized, responsive, and visually memorable. My goal is to build digital spaces that leave a lasting impression while upholding the highest standards of code cleanlines and performance."
              className="text-xl md:text-2xl lg:text-3xl font-medium font-outfit leading-relaxed tracking-wide"
            />

            <div className="mt-8 flex justify-end">
              <Magnet range={45} strength={0.3}>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-accent-blue hover:text-white transition-colors"
                >
                  Learn More About Deepak &rarr;
                </a>
              </Magnet>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
