import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cpu, Globe, Layers, Zap, Star, Shield, Sparkles } from 'lucide-react';
import { Codepen } from '../components/Icons';

// Custom hook to manage mouse click-and-drag scrolling on desktop
// and track scroll progress for both touch and mouse users.
const useDragScroll = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateProgress = () => {
    if (!ref.current) return;
    const { scrollLeft: left, scrollWidth, clientWidth } = ref.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;
    setScrollProgress(left / maxScroll);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (!ref.current) return;
    isDown.current = true;
    ref.current.classList.add('cursor-grabbing');
    ref.current.classList.remove('cursor-grab');
    startX.current = e.pageX - ref.current.offsetLeft;
    scrollLeft.current = ref.current.scrollLeft;
  };

  const onMouseLeave = () => {
    isDown.current = false;
    if (ref.current) {
      ref.current.classList.add('cursor-grab');
      ref.current.classList.remove('cursor-grabbing');
    }
  };

  const onMouseUp = () => {
    isDown.current = false;
    if (ref.current) {
      ref.current.classList.add('cursor-grab');
      ref.current.classList.remove('cursor-grabbing');
    }
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !ref.current) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Drag speed multiplier
    ref.current.scrollLeft = scrollLeft.current - walk;
    updateProgress();
  };

  const onScroll = () => {
    updateProgress();
  };

  useEffect(() => {
    updateProgress();
    // Re-check progress on window resize or load
    window.addEventListener('resize', updateProgress);
    return () => window.removeEventListener('resize', updateProgress);
  }, []);

  return {
    ref,
    scrollProgress,
    handlers: {
      onMouseDown,
      onMouseLeave,
      onMouseUp,
      onMouseMove,
      onScroll,
    }
  };
};

export const MarqueeSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const row1Drag = useDragScroll();
  const row2Drag = useDragScroll();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Set initial scroll offset on Row 2 for a dynamic staggered layout on load
    if (row2Drag.ref.current) {
      setTimeout(() => {
        if (row2Drag.ref.current) {
          row2Drag.ref.current.scrollLeft = 80;
        }
      }, 100);
    }

    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
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
    { text: 'Google-ADK dev ', icon: Sparkles, color: 'text-accent-purple' },
    { text: 'Android Devloper', icon: Globe, color: 'text-accent-orange' },
    { text: 'Front-End Dev', icon: Codepen, color: 'text-accent-purple' },
    { text: 'Tailwind CSS Stylist', icon: Layers, color: 'text-accent-blue' },
    { text: 'High-Performance Web', icon: Zap, color: 'text-white' },
  ];

  const row2 = [
    { text: 'Agentic Ai deployement', icon: Star, color: 'text-accent-purple' },
    { text: 'Responsive Interfaces', icon: Layers, color: 'text-accent-blue' },
    { text: 'Android Apps', icon: Shield, color: 'text-accent-orange' },
    { text: 'Data Structures & Logic', icon: Cpu, color: 'text-accent-emerald' },
    { text: 'Next-Gen Portfolios', icon: Sparkles, color: 'text-white' },
    { text: 'Micro-animations', icon: Zap, color: 'text-accent-blue' },
  ];

  // Triplicate array for smooth continuous endless illusion
  const renderRowItems = (items: typeof row1) => {
    return [...items, ...items, ...items].map((item, idx) => (
      <div
        key={idx}
        className="flex items-center gap-2.5 px-6 py-3.5 mx-3 rounded-2xl glass border border-white/[0.04] text-xs font-semibold tracking-[0.18em] uppercase text-white whitespace-nowrap select-none"
      >
        <item.icon className={`w-4 h-4 ${item.color}`} />
        {item.text}
      </div>
    ));
  };

  const averageProgress = (row1Drag.scrollProgress + row2Drag.scrollProgress) / 2;

  return (
    <section
      ref={containerRef}
      className="relative py-16 bg-[#090909] border-y border-white/[0.03] overflow-hidden flex flex-col gap-6"
    >
      {/* Left and Right Fade Gradients */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#090909] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#090909] to-transparent z-10 pointer-events-none" />

      {/* Row 1: Scrolling Left -> Right */}
      <div 
        ref={row1Drag.ref}
        {...row1Drag.handlers}
        className="flex w-full overflow-x-auto select-none pointer-events-auto scrollbar-none cursor-grab"
      >
        <motion.div
          style={isMobile ? undefined : { x: xLeft }}
          className="flex whitespace-nowrap"
        >
          {renderRowItems(row1)}
        </motion.div>
      </div>

      {/* Row 2: Scrolling Right -> Left */}
      <div 
        ref={row2Drag.ref}
        {...row2Drag.handlers}
        className="flex w-full overflow-x-auto select-none pointer-events-auto scrollbar-none cursor-grab"
      >
        <motion.div
          style={isMobile ? undefined : { x: xRight }}
          className="flex whitespace-nowrap"
        >
          {renderRowItems(row2)}
        </motion.div>
      </div>

      {/* Interactive hint and scroll progress */}
      <div className="flex flex-col items-center gap-2.5 mt-4 px-4 select-none">
        {/* Drag / Swipe Hint */}
        <div className="flex items-center gap-3 text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-primary-light/45">
          <motion.span
            animate={{ x: [-4, 4, -4] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="text-accent-blue"
          >
            &larr;
          </motion.span>
          <span>Drag or Swipe to Explore Skills</span>
          <motion.span
            animate={{ x: [4, -4, 4] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="text-accent-purple"
          >
            &rarr;
          </motion.span>
        </div>

        {/* Progress Bar */}
        <div className="w-32 md:w-48 h-[3px] bg-white/[0.06] rounded-full overflow-hidden relative mt-1">
          <div 
            className="h-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-orange rounded-full transition-all duration-75 ease-out"
            style={{ width: `${Math.min(Math.max(averageProgress * 100, 0), 100)}%` }}
          />
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
