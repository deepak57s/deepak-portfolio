import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cpu, Globe, Layers, Zap, Star, Shield, Sparkles } from 'lucide-react';
import { Codepen } from '../components/Icons';

export const MarqueeSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll inside this container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Map scroll progress to horizontal translation offset (parallax shift)
  const xLeft = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const xRight = useTransform(scrollYProgress, [0, 1], [80, -80]);

  const row1 = [
    { text: 'Python Expert', icon: Cpu, color: 'text-accent-emerald' },
    { text: 'Three.js Playgrounds', icon: Codepen, color: 'text-accent-purple' },
    { text: 'React & TypeScript', icon: Layers, color: 'text-accent-blue' },
    { text: 'Tailwind CSS Stylist', icon: Globe, color: 'text-accent-orange' },
    { text: 'High-Performance Web', icon: Zap, color: 'text-white' },
    { text: 'Creative Engineering', icon: Sparkles, color: 'text-accent-purple' },
  ];

  const row2 = [
    { text: 'Java Engineering', icon: Shield, color: 'text-accent-orange' },
    { text: 'Framer Motion Physics', icon: Star, color: 'text-accent-purple' },
    { text: 'Responsive Interfaces', icon: Layers, color: 'text-accent-blue' },
    { text: 'Data Structures & Logic', icon: Cpu, color: 'text-accent-emerald' },
    { text: 'Next-Gen Portfolios', icon: Sparkles, color: 'text-white' },
    { text: 'Micro-animations', icon: Zap, color: 'text-accent-blue' },
  ];

  // Triplicate array for smooth continuous endless illusion
  const renderRowItems = (items: typeof row1) => {
    return [...items, ...items, ...items].map((item, idx) => (
      <div
        key={idx}
        className="flex items-center gap-2.5 px-6 py-3.5 mx-3 rounded-2xl glass border border-white/[0.04] text-xs font-semibold tracking-[0.18em] uppercase text-white whitespace-nowrap"
      >
        <item.icon className={`w-4 h-4 ${item.color}`} />
        {item.text}
      </div>
    ));
  };

  return (
    <section
      ref={containerRef}
      className="py-16 bg-[#090909] border-y border-white/[0.03] overflow-hidden flex flex-col gap-6"
    >
      {/* Row 1: Scrolling Left -> Right */}
      <div className="flex w-full overflow-hidden select-none pointer-events-none">
        <motion.div
          style={{ x: xLeft }}
          className="flex whitespace-nowrap"
        >
          {renderRowItems(row1)}
        </motion.div>
      </div>

      {/* Row 2: Scrolling Right -> Left */}
      <div className="flex w-full overflow-hidden select-none pointer-events-none">
        <motion.div
          style={{ x: xRight }}
          className="flex whitespace-nowrap"
        >
          {renderRowItems(row2)}
        </motion.div>
      </div>
    </section>
  );
};

export default MarqueeSection;
