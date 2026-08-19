import React from 'react';
import AnimatedText from '../components/AnimatedText';
import Magnet from '../components/Magnet';
import { GraduationCap, Briefcase, Award, Shield, ArrowRight } from 'lucide-react';
import DotField from '../components/DotField';

export const AboutSection: React.FC = () => {
  const stats = [
    { label: 'B.Tech CSE (AI-ML)', value: '8.53 CGPA', subtitle: 'Raghu Institute of Technology', icon: GraduationCap, color: 'bg-accent-purple/10 text-accent-purple' },
    { label: 'Android Industry Experience', value: '8+ Months', subtitle: 'Saranda Software Pvt. Ltd.', icon: Briefcase, color: 'bg-accent-blue/10 text-accent-blue' },
    { label: 'Intermediate (MPC)', value: '95.2%', subtitle: 'Sasi Junior College', icon: Award, color: 'bg-accent-emerald/10 text-accent-emerald' },
    { label: 'Architecture & Security', value: 'Clean MVVM/MVI', subtitle: 'Biometrics & Secure Transactions', icon: Shield, color: 'bg-accent-orange/10 text-accent-orange' },
  ];

  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 relative w-full bg-background overflow-hidden"
    >
      {/* Interactive DotField background canvas */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
        <DotField
          dotRadius={2.5}
          dotSpacing={28}
          bulgeStrength={20}
          glowRadius={80}
          sparkle
          waveAmplitude={2}
          cursorForce={0.8}
          gradientFrom="#240344"
          gradientTo="#4a2068"
          glowColor="#000000"
        />
      </div>

      {/* Grid texture overlay */}
      <div className="absolute inset-0 grid-overlay opacity-25 pointer-events-none" />

      {/* Atmospheric lighting blurs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-accent-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-accent-blue/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Title & Real Quantifiable Metric Cards */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold uppercase tracking-[0.2em] text-accent-purple mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-purple animate-pulse" />
            Engineering Profile
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 font-kanit uppercase italic text-white leading-tight pr-4">
            Engineering Rigor
            <br />
            <span className="inline-block pr-4 pb-1 text-transparent bg-clip-text bg-gradient-to-r from-accent-purple via-accent-blue to-accent-emerald">
              & Native Precision
            </span>
          </h2>

          <p className="text-primary-light/70 text-sm md:text-base mb-8 max-w-md leading-relaxed font-outfit">
            Bridging native Android development, machine learning fundamentals, and enterprise fintech architectures to create high-reliability applications that scale in production.
          </p>

          {/* Quantifiable Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 w-full max-w-md">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3.5 p-3.5 rounded-2xl glass border border-white/[0.05] hover:border-white/[0.12] hover:bg-white/[0.02] transition-all"
              >
                <div className={`p-2.5 rounded-xl ${stat.color} flex-shrink-0`}>
                  <stat.icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-bold text-white tracking-wide">{stat.value}</span>
                    <span className="text-[10px] text-primary-light/50 font-medium uppercase truncate">{stat.label}</span>
                  </div>
                  <p className="text-[11px] text-primary-light/40 truncate">{stat.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Character Opacity Reveal & Screen Navigation Connectors */}
        <div className="lg:col-span-7 text-left flex flex-col gap-6">
          {/* Scroll Character Animation Container */}
          <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/[0.05] relative">
            <div className="absolute top-0 left-0 w-8 h-[1px] bg-accent-purple" />
            <div className="absolute top-0 left-0 w-[1px] h-8 bg-accent-purple" />

            <AnimatedText
              text="Android Developer and Computer Science undergraduate specializing in AI-ML with hands-on industry experience at Saranda Software. Experienced in building and testing native Android applications using Kotlin, Java, and Jetpack Compose under Clean Architecture. Skilled in fintech transaction workflows, Aadhaar biometric authentication via UIDAI RD Services, Firebase Cloud Platform, and scalable REST API integrations."
              className="text-lg md:text-xl lg:text-2xl font-medium font-outfit leading-relaxed tracking-wide text-primary-light/90"
            />
          </div>

          {/* Internal Screen Jump Navigation Connectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Magnet range={30} strength={0.2}>
              <a
                href="#background"
                className="group p-5 rounded-2xl glass border border-white/[0.06] hover:border-accent-purple/30 hover:bg-accent-purple/[0.03] transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-widest text-accent-purple font-semibold">Screen 02</span>
                  <ArrowRight className="w-4 h-4 text-accent-purple group-hover:translate-x-1 transition-transform" />
                </div>
                <h4 className="text-white font-bold text-sm tracking-wide mb-1">Education, Skills & Certifications</h4>
                <p className="text-primary-light/50 text-xs">Explore academic credentials, tech stack & verified certifications &rarr;</p>
              </a>
            </Magnet>

            <Magnet range={30} strength={0.2}>
              <a
                href="#work"
                className="group p-5 rounded-2xl glass border border-white/[0.06] hover:border-accent-blue/30 hover:bg-accent-blue/[0.03] transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-widest text-accent-blue font-semibold">Screen 03</span>
                  <ArrowRight className="w-4 h-4 text-accent-blue group-hover:translate-x-1 transition-transform" />
                </div>
                <h4 className="text-white font-bold text-sm tracking-wide mb-1">Experience & Featured Works</h4>
                <p className="text-primary-light/50 text-xs">Dive into Saranda Software, Micro ATM (MATM), and AI projects &rarr;</p>
              </a>
            </Magnet>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
