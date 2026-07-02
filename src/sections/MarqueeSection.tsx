import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers, Zap, Star, Shield, Sparkles } from 'lucide-react';
import { Codepen, Github, PythonIcon, AndroidIcon, ReactIcon, FirebaseIcon } from '../components/Icons';

const useMarqueeScroll = (direction: 'left' | 'right') => {
  const ref = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  // Track scroll position as a float to prevent browser rounding/clamping bugs
  const scrollPosRef = useRef(0);

  const startPause = () => {
    setIsPaused(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const endPause = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // Sync float tracker with final drag scroll position
    if (ref.current) {
      scrollPosRef.current = ref.current.scrollLeft;
    }
    timeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 1200);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (!ref.current) return;
    isDown.current = true;
    startPause();
    ref.current.classList.add('cursor-grabbing');
    ref.current.classList.remove('cursor-grab');
    startX.current = e.pageX - ref.current.offsetLeft;
    scrollLeft.current = ref.current.scrollLeft;
    scrollPosRef.current = ref.current.scrollLeft;
  };

  const onMouseLeave = () => {
    if (isDown.current) {
      isDown.current = false;
      endPause();
    }
    if (ref.current) {
      ref.current.classList.add('cursor-grab');
      ref.current.classList.remove('cursor-grabbing');
    }
  };

  const onMouseUp = () => {
    if (isDown.current) {
      isDown.current = false;
      endPause();
    }
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
    const targetScroll = scrollLeft.current - walk;
    ref.current.scrollLeft = targetScroll;
    scrollPosRef.current = targetScroll;
  };

  // Touch handlers for mobile native swipe
  const onTouchStart = () => {
    startPause();
    if (ref.current) {
      scrollPosRef.current = ref.current.scrollLeft;
    }
  };

  const onTouchEnd = () => {
    endPause();
  };

  useEffect(() => {
    let animationFrameId: number;
    const scroll = () => {
      if (!isPaused && !isDown.current && ref.current) {
        const speed = 0.5; // Slower speed
        const half = ref.current.scrollWidth / 2;
        if (half > 0) {
          // Initialize scrollPosRef if needed (especially for right direction)
          if (direction === 'right' && scrollPosRef.current === 0 && ref.current.scrollLeft === 0) {
            scrollPosRef.current = half;
          }

          if (direction === 'left') {
            scrollPosRef.current += speed;
            if (scrollPosRef.current >= half) {
              scrollPosRef.current -= half;
            }
          } else {
            scrollPosRef.current -= speed;
            if (scrollPosRef.current <= 0) {
              scrollPosRef.current += half;
            }
          }
          ref.current.scrollLeft = Math.round(scrollPosRef.current);
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };
    animationFrameId = requestAnimationFrame(scroll);
    return () => {
      cancelAnimationFrame(animationFrameId);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isPaused, direction]);

  return {
    ref,
    handlers: {
      onMouseDown,
      onMouseLeave,
      onMouseUp,
      onMouseMove,
      onTouchStart,
      onTouchEnd,
    }
  };
};

export const MarqueeSection: React.FC = () => {
  const row1Scroll = useMarqueeScroll('left');
  const row2Scroll = useMarqueeScroll('right');

  const row1 = [
    { text: 'Python Expert', icon: PythonIcon, color: 'text-[#3776AB]' },
    { text: 'React Native ', icon: ReactIcon, color: 'text-[#61DAFB]' },
    { text: 'Android Devloper', icon: AndroidIcon, color: 'text-[#3DDC84]' },
    { text: 'Front-End Dev', icon: Codepen, color: 'text-accent-purple' },
    { text: 'Firebase', icon: FirebaseIcon, color: 'text-[#FFCA28]' },
    { text: 'Kotlin/React Native Dev', icon: AndroidIcon, color: 'text-white' },
    { text: 'High-Performance Web', icon: Zap, color: 'text-accent-orange' },
    { text: 'Git/Github', icon: Github, color: 'text-white' },
  ];

  const row2 = [
    { text: 'Agentic Ai deployement', icon: Star, color: 'text-accent-purple' },
    { text: 'Responsive Interfaces', icon: Layers, color: 'text-accent-blue' },
    { text: 'Kotlin/React Android Apps', icon: Shield, color: 'text-accent-orange' },
    { text: 'Data Structures & Logic', icon: Cpu, color: 'text-accent-emerald' },
    { text: 'Next-Gen Portfolios', icon: Sparkles, color: 'text-white' },
    { text: 'Micro-animations', icon: Zap, color: 'text-accent-blue' },
    { text: 'UI/UX Design', icon: Zap, color: 'text-accent-white' },
  ];

  const renderRowItems = (items: typeof row1) => {
    return [...items, ...items].map((item, idx) => (
      <div
        key={idx}
        className="flex items-center gap-2.5 px-6 py-3.5 mx-3 rounded-2xl glass border border-white/[0.04] text-xs font-semibold tracking-[0.18em] uppercase text-white whitespace-nowrap select-none"
      >
        <item.icon className={`w-4 h-4 ${item.color}`} />
        {item.text}
      </div>
    ));
  };

  return (
    <section
      className="relative py-16 bg-[#090909] border-y border-white/[0.03] overflow-hidden flex flex-col gap-6"
    >
      {/* Left and Right Fade Gradients */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#090909] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#090909] to-transparent z-10 pointer-events-none" />

      {/* Row 1: Scrolling Left -> Right */}
      <div 
        ref={row1Scroll.ref}
        {...row1Scroll.handlers}
        className="flex w-full overflow-x-auto select-none pointer-events-auto scrollbar-none cursor-grab"
      >
        <div className="flex whitespace-nowrap">
          {renderRowItems(row1)}
        </div>
      </div>

      {/* Row 2: Scrolling Right -> Left */}
      <div 
        ref={row2Scroll.ref}
        {...row2Scroll.handlers}
        className="flex w-full overflow-x-auto select-none pointer-events-auto scrollbar-none cursor-grab"
      >
        <div className="flex whitespace-nowrap">
          {renderRowItems(row2)}
        </div>
      </div>

      {/* Interactive hint */}
      <div className="flex flex-col items-center gap-2.5 mt-4 px-4 select-none">
        {/* Drag Hint */}
        <div className="flex items-center gap-3 text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-primary-light/45">
          <motion.span
            animate={{ x: [-4, 4, -4] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="text-accent-blue"
          >
            &larr;
          </motion.span>
          <span>Drag/Swipe to explore • Holds for 1.2s on click</span>
          <motion.span
            animate={{ x: [4, -4, 4] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="text-accent-purple"
          >
            &rarr;
          </motion.span>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
