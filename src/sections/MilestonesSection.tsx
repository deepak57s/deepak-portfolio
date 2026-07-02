import React from 'react';
import { Award, ExternalLink, Calendar, GraduationCap, Star } from 'lucide-react';
import Magnet from '../components/Magnet';

export const MilestonesSection: React.FC = () => {
  const milestones = [
    {
      title: "CS50's Introduction to Programming with Python",
      issuer: "HarvardX (Harvard University)",
      date: "Dec 2023",
      desc: "Deep core mastery of algorithmic problem solving using Python. Covered file handling, regular expressions, APIs, standard testing suites, and object-oriented architectures.",
      link: "https://courses.edx.org/certificates/60d9c01298aa4bd695af7238c303fe5b",
      color: "from-accent-blue/20 to-transparent",
      borderColor: "group-hover:border-accent-blue/40",
      accent: "text-accent-blue",
      badge: "Python Core"
    },
    {
      title: "Java Programming Fundamentals",
      issuer: "GalileoX (Universidad Galileo)",
      date: "Oct 2023",
      desc: "Rigorous certification in fundamental Java development. Focused on data encapsulation, inheritance, interfaces, exception handling, and core software structures.",
      link: "https://courses.edx.org/certificates/e3095b9ef0164471a9e8c6e4800fe215",
      color: "from-accent-orange/20 to-transparent",
      borderColor: "group-hover:border-accent-orange/40",
      accent: "text-accent-orange",
      badge: "Java Core"
    },
    {
      title: "Programming in JAVA (Elite / Silver NPTEL)",
      issuer: "NPTEL (IIT Kharagpur / Ministry of Education, India)",
      date: "Jan 2024",
      desc: "Rigorous elite certification in professional Java architectures. Comprehensive concepts in multithreading, graphic user interfaces, JDBC databases, and networking.",
      link: "https://nptel.ac.in/noc/E_Certificate/NPTEL24CS43S97020049130745346",
      color: "from-accent-emerald/20 to-transparent",
      borderColor: "group-hover:border-accent-emerald/40",
      accent: "text-accent-emerald",
      badge: "Advanced Java"
    },
    {
      title: "Kotlin Developer",
      issuer: "JetBrains Academy",
      date: "Q3 2026",
      desc: " Harnessing Kotlin to develop robust Android applications and modern web solutions with clean architecture, concise code, and exceptional performance across multiple platforms..",
      link: "#",
      color: "from-accent-purple/20 to-transparent",
      borderColor: "group-hover:border-accent-purple/40",
      accent: "text-accent-purple",
      badge: "Kotlin Core"
    }
  ];

  return (
    <section
      id="milestones"
      className="py-24 md:py-36 px-6 relative w-full bg-[#090909] overflow-hidden"
    >
      {/* Visual background lights */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-accent-blue/[0.02] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-accent-purple/[0.02] blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4">
            <GraduationCap className="w-4 h-4 text-accent-blue" />
            Verified Achievements
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-kanit uppercase italic text-white mb-6 pr-4">
            Milestones & <span className="inline-block pr-4 pb-1 text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">Credentials</span>
          </h2>
          <p className="text-primary-light/60 text-sm md:text-base max-w-xl leading-relaxed">
            Professional academic records, certificates, and technological accomplishments representing verified skills in programming, structure, and system logic.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {milestones.map((card, idx) => (
            <div
              key={idx}
              className={`group relative rounded-3xl p-[1px] bg-gradient-to-b ${card.color} to-transparent border border-white/[0.04] hover:bg-white/[0.02] transition-all duration-500 overflow-hidden flex flex-col justify-between`}
            >
              {/* Corner Glowing Highlight */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/[0.03] to-transparent blur-md pointer-events-none" />

              <div className="p-8 flex flex-col justify-between h-full">
                {/* Upper Metadata */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[10px] uppercase font-bold tracking-widest ${card.accent}`}>
                      {card.badge}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-primary-light/45">
                      <Calendar className="w-3.5 h-3.5" />
                      {card.date}
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold font-kanit text-white leading-snug mb-3 hover:text-accent-blue transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs md:text-sm font-semibold text-primary-light/50 uppercase tracking-widest mb-4">
                    Issuer: {card.issuer}
                  </p>

                  <p className="text-xs md:text-sm text-primary-light/65 leading-relaxed font-outfit mb-6">
                    {card.desc}
                  </p>
                </div>

                {/* Lower Action */}
                <div className="border-t border-white/[0.05] pt-5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold text-primary-light/40">
                    <Award className={`w-4 h-4 ${card.accent}`} />
                    Verified Credential
                  </div>

                  {card.link !== '#' ? (
                    <Magnet range={30} strength={0.3}>
                      <a
                        href={card.link}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase hover:underline ${card.accent}`}
                      >
                        Verify
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </Magnet>
                  ) : (
                    <span className="text-[10px] tracking-widest uppercase text-white/20 font-bold flex items-center gap-1.5">
                      <Star className="w-3 h-3 text-accent-purple animate-pulse" />
                      Roadmap Goal
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MilestonesSection;
