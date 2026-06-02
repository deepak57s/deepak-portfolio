import React from 'react';
import { ArrowUpRight, Code2, Globe } from 'lucide-react';
import { Github } from '../components/Icons';
import Magnet from '../components/Magnet';
import projectPortfolio from '../assets/project_portfolio.png';
import projectEcommerce from '../assets/project_ecommerce.png';
import projectAttendance from '../assets/project_attendance.png';
import projectFraud from '../assets/project_fraud.png';

export const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Portfolio website",
      image: projectPortfolio,
      tag: "Front-End Architecture",
      desc: "Personal portfolio with fully responsive layout, smooth animations, and clean UI/UX. Deployed live.",
      stack: ["React.js", "HTML", "CSS", "JS"],
      color: "from-accent-blue/30 via-accent-purple/10 to-transparent",
      accent: "text-accent-blue",
      shadow: "shadow-[0_20px_50px_rgba(59,130,246,0.15)]",
      glowBg: "rgba(59, 130, 246, 0.05)",
      topOffset: "top-[100px]",
      codeLink: "https://github.com",
      demoLink: "https://ds-devx.netlify.app"
    },
    {
      title: "E-commerce website",
      image: projectEcommerce,
      tag: "Fullstack E-Commerce",
      desc: "Responsive front-end with product listing, category filtering, dynamic cart, and reusable components.",
      stack: ["React.js", "Firebase", "HTML", "CSS"],
      color: "from-accent-purple/30 via-accent-blue/10 to-transparent",
      accent: "text-accent-purple",
      shadow: "shadow-[0_20px_50px_rgba(192,132,252,0.15)]",
      glowBg: "rgba(192, 132, 252, 0.05)",
      topOffset: "top-[130px]",
      codeLink: "https://github.com",
      demoLink: "#contact"
    },
    {
      title: "TapIn HR — GPS attendance",
      image: projectAttendance,
      tag: "Mobile App Development",
      desc: "Android attendance app with GPS-verified check-in/check-out, Firebase real-time DB, and auth.",
      stack: ["Kotlin", "Android", "Firebase"],
      color: "from-accent-emerald/30 via-accent-blue/10 to-transparent",
      accent: "text-accent-emerald",
      shadow: "shadow-[0_20px_50px_rgba(52,211,153,0.15)]",
      glowBg: "rgba(52, 211, 153, 0.05)",
      topOffset: "top-[160px]",
      codeLink: "https://github.com",
      demoLink: "#contact"
    },
    {
      title: "Credit card fraud detection",
      image: projectFraud,
      tag: "Machine Learning & AI",
      desc: "ML model built on real-world datasets to detect fraudulent transactions with high accuracy.",
      stack: ["Python", "Scikit-learn"],
      color: "from-accent-orange/30 via-accent-blue/10 to-transparent",
      accent: "text-accent-orange",
      shadow: "shadow-[0_20px_50px_rgba(251,146,60,0.15)]",
      glowBg: "rgba(251, 146, 60, 0.05)",
      topOffset: "top-[190px]",
      codeLink: "https://github.com",
      demoLink: "#contact"
    }
  ];

  return (
    <section
      id="projects"
      className="py-24 md:py-36 px-6 relative w-full bg-[#090909]"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20 md:mb-28">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4">
            <Globe className="w-4 h-4 text-accent-blue" />
            Selected Portfolio
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-kanit uppercase italic text-white mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">Projects</span>
          </h2>
          <p className="text-primary-light/60 text-sm md:text-base max-w-xl leading-relaxed">
            A curated showcase of interactive front-end portfolios, fullstack mobile applications, and machine learning models.
          </p>
        </div>

        {/* Sticky Stacking Projects Wrapper */}
        <div className="flex flex-col gap-12 md:gap-20">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`sticky ${project.topOffset} w-full rounded-[32px] p-[1px] bg-gradient-to-br ${project.color} border border-white/[0.06] ${project.shadow} overflow-hidden`}
              style={{ backgroundColor: '#111' }}
            >
              {/* Internal Mesh glow */}
              <div
                className="absolute inset-0 pointer-events-none opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-50"
                style={{ backgroundColor: project.glowBg }}
              />

              <div className="relative z-10 p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0D0D0E]/90 rounded-[31px]">
                {/* Visual Representation Graphic */}
                <div className="lg:col-span-5 w-full aspect-video md:aspect-[4/3] rounded-2xl glass-panel border border-white/[0.04] flex flex-col justify-between p-6 relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-45 group-hover:scale-105 transition-all duration-700 pointer-events-none select-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none z-[1]" />
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.02] rounded-full blur-xl pointer-events-none" />
                  
                  {/* Decorative Project Icon Screen */}
                  <div className="relative z-10 flex justify-between items-start">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-primary-light/30">
                      SYS CODE // P.0{idx + 1}
                    </span>
                    <Code2 className={`w-5 h-5 ${project.accent}`} />
                  </div>

                  <div className="relative z-10 text-left">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse inline-block mr-2" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary-light/50 font-outfit">
                      {project.tag}
                    </span>
                    <h4 className="text-xl font-bold font-kanit text-white uppercase tracking-wider mt-1 group-hover:text-accent-blue transition-colors">
                      {project.title}
                    </h4>
                  </div>
                </div>

                {/* Technical Specs Text */}
                <div className="lg:col-span-7 flex flex-col items-start text-left">
                  <span className={`text-[10px] uppercase font-bold tracking-[0.2em] mb-3 ${project.accent}`}>
                    {project.tag}
                  </span>
                  
                  <h3 className="text-2xl md:text-3xl font-extrabold font-kanit text-white leading-tight uppercase mb-4">
                    {project.title}
                  </h3>

                  <p className="text-xs md:text-sm text-primary-light/70 leading-relaxed font-outfit mb-6">
                    {project.desc}
                  </p>

                  {/* Tech stack items */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.stack.map((item, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.05] text-[10px] font-semibold tracking-wider text-primary-light/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex items-center gap-4">
                    {project.codeLink && (
                      <Magnet range={35} strength={0.3}>
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 px-4.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs font-bold text-white uppercase tracking-widest hover:bg-white/[0.06] transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                          Code Link
                        </a>
                      </Magnet>
                    )}

                    {project.demoLink && (
                      <Magnet range={30} strength={0.3}>
                        <a
                          href={project.demoLink}
                          target={project.demoLink.startsWith('#') ? '_self' : '_blank'}
                          rel="noreferrer"
                          className={`flex items-center gap-1 px-4.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:underline ${project.accent}`}
                        >
                          View Demo
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </Magnet>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
