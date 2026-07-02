import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';
import ThreePlayground from '../components/ThreePlayground';
import Magnet from '../components/Magnet';
import TiltCard from '../components/TiltCard';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 px-6"
    >
      {/* 3D Visual Playground Canvas */}
      <ThreePlayground />

      {/* Subtle bottom fade to blend with next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12 md:py-20">
        {/* Left Side: Typography */}
        <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
          {/* Creative Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-accent-blue mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
            Android & Full-Stack Developer
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-none mb-6">
            <span className="text-white/60 text-3xl md:text-4xl block font-medium tracking-normal mb-2">
              Hi, i'm deepak
            </span>
            <span className="hero-heading uppercase font-kanit italic font-black block pr-4 pb-1">
              Srinivas
              <br />
              Deepak
            </span>
          </h1>

          {/* Subheading Description */}
          <p className="text-primary-light/70 text-base md:text-lg max-w-xl mb-8 leading-relaxed font-outfit">
            Passionate Android Developer and Full-Stack Developer with a strong foundation in programming and problem-solving. I build scalable mobile applications and modern web experiences using Kotlin, Java, React, and Firebase, focusing on clean architecture, intuitive user experiences, and high-performance solutions that solve real-world problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Magnet range={60} strength={0.3}>
              <a
                href="#projects"
                className="group flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wider bg-white text-black hover:bg-[#eaeaea] transition-all duration-300 shadow-[0_4px_30px_rgba(255,255,255,0.05)]"
              >
                Explore Work
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnet>

            <Magnet range={50} strength={0.25}>
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full text-sm font-semibold tracking-wider bg-transparent border border-white/[0.12] text-white hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
              >
                Let's Talk
              </a>
            </Magnet>
          </div>

          {/* Micro Social Indicators */}
          <div className="flex items-center gap-4 border-t border-white/[0.06] pt-6 w-full max-w-md">
            <span className="text-[10px] uppercase tracking-widest text-primary-light/45">
              Connect Online
            </span>
            <div className="h-[1px] flex-1 bg-white/[0.06]" />
            <div className="flex items-center gap-3">
              {[
                { icon: Github, href: 'https://github.com/deepak57' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/srinivas-deepak-a87a532a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
                { icon: Mail, href: 'mailto:deepakparker222@gmail.com' },
              ].map((social, idx) => (
                <Magnet key={idx} range={30} strength={0.4}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg text-primary-light/60 hover:text-white bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.04] transition-all"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                </Magnet>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: 3D Mouse Tracking Spiderman Logo Display */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <TiltCard
            imageSrc="/spider_logo.png"
            altText="Srinivas Deepak - Spider Logo"
            name="Srinivas Deepak"
            subtitle="India • Android & Full-Stack"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
