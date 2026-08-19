import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Award,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Code2,
  Smartphone,
  Wrench,
  ShieldCheck,
  HeartHandshake,
  Boxes,
  Workflow
} from 'lucide-react';
import Magnet from '../components/Magnet';
import {
  KotlinIcon,
  JavaIcon,
  PythonIcon,
  AndroidIcon,
  ComposeIcon,
  ReactIcon,
  FirebaseIcon,
  GitIcon,
  PostmanIcon,
  FigmaIcon
} from '../components/Icons';

export const BackgroundScreen: React.FC = () => {
  // Education Records
  const educationList = [
    {
      degree: 'Bachelor of Technology — Computer Science Engineering (AI-ML)',
      institution: 'Raghu Institute of Technology (Autonomous)',
      duration: 'Aug 2022 – Apr 2026',
      grade: '8.53 CGPA',
      gradeType: 'Cumulative GPA',
      status: 'Final Year Undergrad',
      highlights: [
        'Specialization in Artificial Intelligence and Machine Learning',
        'Core coursework: Advanced DSA, Neural Networks, Database Management Systems, Computer Networks, OOP with Java/Kotlin',
        'Active participant in mobile engineering labs and tech hackathons',
      ],
      badgeColor: 'from-accent-purple/20 to-accent-blue/20 text-accent-blue border-accent-blue/30',
    },
    {
      degree: 'Intermediate — MPC (Mathematics, Physics, Chemistry)',
      institution: 'Sasi Junior College',
      duration: 'Jun 2020 – May 2022',
      grade: '95.2%',
      gradeType: 'Board Percentage',
      status: 'Completed with Distinction',
      highlights: [
        'Top-tier academic standing with 95.2% aggregate in State Board Examinations',
        'Strong mathematical foundation in calculus, coordinate geometry, and statistics',
        'Developed rigorous logical reasoning and computational thinking',
      ],
      badgeColor: 'from-accent-emerald/20 to-accent-blue/20 text-accent-emerald border-accent-emerald/30',
    },
  ];

  // Categorized Technical Skills
  const skillCategories = [
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: Code2,
      description: 'Core languages for native mobile, algorithmic logic, and backend processing',
      skills: [
        { name: 'Kotlin', level: 'Advanced / Production', icon: KotlinIcon, color: 'text-[#A855F7]' },
        { name: 'Java', level: 'Advanced / OOP', icon: JavaIcon, color: 'text-[#FB923C]' },
        { name: 'Python', level: 'Proficient / AI-ML', icon: PythonIcon, color: 'text-[#3776AB]' },
        { name: 'JavaScript / ES6+', level: 'Proficient / Web', icon: ReactIcon, color: 'text-[#61DAFB]' },
        { name: 'SQL', level: 'Intermediate / Queries', icon: Code2, color: 'text-[#34D399]' },
      ],
    },
    {
      id: 'mobile',
      title: 'Mobile & Frameworks',
      icon: Smartphone,
      description: 'Native Android ecosystem, reactive UI, and backend services',
      skills: [
        { name: 'Android SDK', level: 'Core Native', icon: AndroidIcon, color: 'text-[#3DDC84]' },
        { name: 'Jetpack Compose', level: 'Modern Declarative UI', icon: ComposeIcon, color: 'text-[#38BDF8]' },
        { name: 'Android Studio', level: 'Primary IDE & Profiler', icon: AndroidIcon, color: 'text-[#3DDC84]' },
        { name: 'Firebase & Firestore', level: 'Realtime / Auth / FCM', icon: FirebaseIcon, color: 'text-[#FFCA28]' },
        { name: 'React Native', level: 'Cross-Platform UI', icon: ReactIcon, color: 'text-[#61DAFB]' },
        { name: 'REST APIs & Retrofit', level: 'Network Architecture', icon: Code2, color: 'text-[#F43F5E]' },
      ],
    },
    {
      id: 'sap',
      title: 'SAP Enterprise ERP',
      icon: Boxes,
      description: 'Enterprise supply chain, materials procurement, and financial accounting modules',
      skills: [
        { name: 'SAP MM (Materials Management)', level: 'Fundamentals & Configuration', icon: Boxes, color: 'text-accent-blue' },
        { name: 'Procure-to-Pay (P2P)', level: 'End-to-End Cycle & Purchasing', icon: Workflow, color: 'text-accent-emerald' },
        { name: 'SAP FICO Awareness', level: 'Financial Accounting & Controlling', icon: ShieldCheck, color: 'text-accent-purple' },
      ],
    },
    {
      id: 'tools',
      title: 'Developer Tools & Platforms',
      icon: Wrench,
      description: 'Modern development workflow, testing, version control, and design',
      skills: [
        { name: 'Git', level: 'Version Control', icon: GitIcon, color: 'text-[#F05032]' },
        { name: 'GitHub', level: 'CI/CD & Collaboration', icon: Code2, color: 'text-white' },
        { name: 'Postman', level: 'API Testing & Mocking', icon: PostmanIcon, color: 'text-[#FF6C37]' },
        { name: 'Android Profiler', level: 'Memory & Thread Analysis', icon: AndroidIcon, color: 'text-[#3DDC84]' },
        { name: 'Figma', level: 'UI/UX Specs & Prototypes', icon: FigmaIcon, color: 'text-[#A855F7]' },
      ],
    },
    {
      id: 'practices',
      title: 'Practices & Architecture',
      icon: ShieldCheck,
      description: 'Enterprise architecture patterns, security compliance, and engineering discipline',
      skills: [
        { name: 'Clean Architecture (MVVM/MVI)', level: 'Domain/Data/UI Separation', icon: ShieldCheck, color: 'text-accent-blue' },
        { name: 'Fintech Transaction Workflows', level: 'Secure Banking Modules', icon: ShieldCheck, color: 'text-accent-emerald' },
        { name: 'UIDAI Biometric RD Services', level: 'Aadhaar Auth Integration', icon: ShieldCheck, color: 'text-accent-purple' },
        { name: 'Agile & Scrum Practices', level: 'Sprint Cycles & Reviews', icon: ShieldCheck, color: 'text-accent-orange' },
        { name: 'Responsive Web & Mobile Design', level: 'Multi-Device Layouts', icon: ShieldCheck, color: 'text-accent-blue' },
      ],
    },
    {
      id: 'softskills',
      title: 'Soft Skills & Leadership',
      icon: HeartHandshake,
      description: 'Interpersonal capabilities, collaborative mindset, and structured problem-solving',
      skills: [
        { name: 'Analytical Problem Solving', level: 'Algorithmic Optimization', icon: HeartHandshake, color: 'text-accent-purple' },
        { name: 'Cross-Functional Coordination', level: 'Agile Collaboration', icon: HeartHandshake, color: 'text-accent-blue' },
        { name: 'Critical Thinking & Debugging', level: 'Root Cause Resolution', icon: HeartHandshake, color: 'text-accent-emerald' },
        { name: 'Technical Documentation', level: 'Clear API & Code Specs', icon: HeartHandshake, color: 'text-accent-orange' },
      ],
    },
  ];

  // Certifications & Credentials
  const certifications = [
    {
      title: 'Kotlin Developer Certification',
      issuer: 'JetBrains Academy',
      date: 'Earned Credential',
      category: 'Mobile & Language',
      description: 'Comprehensive mastery of Kotlin native concepts, OOP, coroutines, collections, and Android application development workflows.',
      link: 'https://hyperskill.org',
      icon: KotlinIcon,
      badgeColor: 'text-[#A855F7] border-[#A855F7]/30 bg-[#A855F7]/10',
    },
    {
      title: 'Programming in Java (Elite / Silver)',
      issuer: 'NPTEL — IIT Kharagpur',
      date: 'Jan 2024 – Apr 2024',
      category: 'Object-Oriented Programming',
      description: 'Earned Elite + Silver certificate for advanced Java programming covering multithreading, collections framework, JVM architecture, and generics.',
      link: 'https://nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS43S75020037130279860',
      icon: JavaIcon,
      badgeColor: 'text-[#FB923C] border-[#FB923C]/30 bg-[#FB923C]/10',
    },
    {
      title: 'CS50’s Introduction to Programming with Python',
      issuer: 'HarvardX — Harvard University',
      date: 'Dec 2023',
      category: 'Computer Science & AI',
      description: 'Comprehensive curriculum in Python fundamentals, algorithm complexity, object-oriented design, regular expressions, unit testing, and libraries.',
      link: 'https://courses.edx.org/certificates/0b050d287ee34cb5b617300c0f993d01',
      icon: PythonIcon,
      badgeColor: 'text-[#3776AB] border-[#3776AB]/30 bg-[#3776AB]/10',
    },
    {
      title: 'Ethics in the Age of Generative AI',
      issuer: 'LinkedIn Learning',
      date: 'Earned Credential',
      category: 'AI & Data Ethics',
      description: 'Explores the ethical implications of Large Language Models and AI deployment, including transparency, bias mitigation, accountability, and privacy.',
      link: 'https://www.linkedin.com/learning/certificates/',
      icon: Award,
      badgeColor: 'text-[#34D399] border-[#34D399]/30 bg-[#34D399]/10',
    },
    {
      title: 'Java Programming: Solving Problems with Software',
      issuer: 'GalileoX / edX',
      date: 'Oct 2023',
      category: 'Software Engineering',
      description: 'Rigorous training in foundational Java syntax, data structures, algorithms, modular code development, and debugging methodologies.',
      link: 'https://courses.edx.org/certificates/a5214064d7df40a6bda6391d4e0e56aa',
      icon: JavaIcon,
      badgeColor: 'text-accent-blue border-accent-blue/30 bg-accent-blue/10',
    },
  ];

  return (
    <section
      id="background"
      className="py-24 md:py-32 px-6 relative w-full bg-[#0B0B0B] border-t border-white/[0.04]"
    >
      {/* Background Ambience & Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-accent-purple/5 via-accent-blue/5 to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 grid-overlay opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col gap-24">
        
        {/* ========================================================================= */}
        {/* SECTION 2.1: EDUCATION */}
        {/* ========================================================================= */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-start text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-purple mb-4">
              <GraduationCap className="w-3.5 h-3.5 text-accent-purple" />
              Academic Foundation
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold font-kanit uppercase italic text-white tracking-tight">
              Education &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple to-accent-blue ml-3">
                Credentials
              </span>
            </h2>
            <p className="text-primary-light/70 text-sm md:text-base mt-3 leading-relaxed font-outfit">
              Rigorous computer science curriculum with deep focus on Artificial Intelligence, Machine Learning algorithms, and native mobile software engineering.
            </p>
          </div>

          {/* 2-Column Responsive Education Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {educationList.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="group relative p-8 rounded-3xl glass-panel border border-white/[0.06] hover:border-white/[0.18] hover:bg-white/[0.02] transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle top gradient glow on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-purple/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary-light/50 font-outfit">
                      {edu.duration}
                    </span>
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border bg-gradient-to-r ${edu.badgeColor}`}>
                      <Sparkles className="w-3 h-3" />
                      {edu.grade}
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-kanit tracking-wide group-hover:text-accent-blue transition-colors">
                    {edu.degree}
                  </h3>

                  <div className="text-sm font-semibold text-primary-light/90 mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent-purple/60" />
                    {edu.institution}
                  </div>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2.5 mb-6">
                    {edu.highlights.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-primary-light/70 font-outfit leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-accent-emerald flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between text-xs text-primary-light/40">
                  <span>{edu.gradeType}</span>
                  <span className="text-primary-light/70 font-medium">{edu.status}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 2.2: SKILLS BENTO GRID */}
        {/* ========================================================================= */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-start text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-blue mb-4">
              <Code2 className="w-3.5 h-3.5 text-accent-blue" />
              Technical Arsenal
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold font-kanit uppercase italic text-white tracking-tight">
              Skills
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-emerald ml-3">
                & Capabilities
              </span>
            </h2>
            <p className="text-primary-light/70 text-sm md:text-base mt-3 leading-relaxed font-outfit">
              Specialized in production-grade mobile engineering, enterprise SAP ERP systems, clean architectural design patterns, and hardware/biometric integrations.
            </p>
          </div>

          {/* Bento Grid with Smooth Staggered Scroll Reveal */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, idx) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="p-7 rounded-3xl glass border border-white/[0.06] hover:border-white/[0.18] hover:bg-white/[0.03] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] text-accent-blue group-hover:scale-105 group-hover:border-accent-blue/30 transition-all duration-300">
                      <cat.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white font-kanit tracking-wide group-hover:text-accent-blue transition-colors duration-200">
                        {cat.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs text-primary-light/50 mb-6 font-outfit">
                    {cat.description}
                  </p>

                  {/* Skill Items List */}
                  <div className="space-y-3">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.03] hover:border-white/[0.08] transition-colors duration-150"
                      >
                        <div className="flex items-center gap-2.5">
                          <skill.icon className={`w-4 h-4 ${skill.color}`} />
                          <span className="text-xs font-semibold text-white font-outfit">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[10px] uppercase tracking-wider text-primary-light/50 font-medium">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 2.3: CERTIFICATIONS & LICENSES */}
        {/* ========================================================================= */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-start text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-emerald mb-4">
              <Award className="w-3.5 h-3.5 text-accent-emerald" />
              Verified Industry Milestones
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold font-kanit uppercase italic text-white tracking-tight">
              Honors &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-emerald to-accent-blue ml-3">
                Certifications
              </span>
            </h2>
            <p className="text-primary-light/70 text-sm md:text-base mt-3 leading-relaxed font-outfit">
              Official professional certifications verified by JetBrains Academy, IIT Kharagpur (NPTEL), HarvardX, and LinkedIn Learning.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4 }}
                className="group relative p-6 rounded-3xl glass-panel border border-white/[0.06] hover:border-white/[0.18] hover:bg-white/[0.02] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className={`p-2.5 rounded-xl border ${cert.badgeColor}`}>
                      <cert.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-primary-light/60 font-medium">
                      {cert.date}
                    </span>
                  </div>

                  <span className="text-[10px] uppercase tracking-widest font-semibold text-accent-blue mb-1 block">
                    {cert.issuer}
                  </span>

                  <h3 className="text-lg font-bold text-white mb-2 font-kanit leading-snug group-hover:text-accent-emerald transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-primary-light/65 font-outfit leading-relaxed mb-6">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-primary-light/40 font-medium">
                    {cert.category}
                  </span>
                  <Magnet range={25} strength={0.3}>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-white/80 hover:text-white transition-colors group-hover:underline"
                    >
                      Verify
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Magnet>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default BackgroundScreen;
