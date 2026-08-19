import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers, Zap, Star, Shield, Boxes } from 'lucide-react';
import {
  PythonIcon,
  AndroidIcon,
  ReactIcon,
  FirebaseIcon,
  KotlinIcon,
  JavaIcon,
  ComposeIcon,
  GitIcon,
  PostmanIcon
} from '../components/Icons';

const useMarqueeScroll = (direction: 'left' | 'right') => {
  const ref = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
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
    const walk = (x - startX.current) * 1.5;
    const targetScroll = scrollLeft.current - walk;
    ref.current.scrollLeft = targetScroll;
    scrollPosRef.current = targetScroll;
  };

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
        const speed = 0.5;
        const half = ref.current.scrollWidth / 2;
        if (half > 0) {
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
    { text: 'Kotlin Native', icon: KotlinIcon, color: 'text-[#A855F7]' },
    { text: 'Android Developer', icon: AndroidIcon, color: 'text-[#3DDC84]' },
    { text: 'Jetpack Compose', icon: ComposeIcon, color: 'text-[#38BDF8]' },
    { text: 'Java Core & OOP', icon: JavaIcon, color: 'text-[#FB923C]' },
    { text: 'Clean Architecture (MVVM/MVI)', icon: Shield, color: 'text-accent-blue' },
    { text: 'Firebase Cloud Platform', icon: FirebaseIcon, color: 'text-[#FFCA28]' },
    { text: 'Python & AI-ML', icon: PythonIcon, color: 'text-[#3776AB]' },
    { text: 'REST APIs & Postman', icon: PostmanIcon, color: 'text-[#FF6C37]' },
  ];

  const row2 = [
    { text: 'SAP MM & P2P Cycles', icon: Boxes, color: 'text-[#38BDF8]' },
    { text: 'Fintech Banking UI', icon: Zap, color: 'text-[#34D399]' },
    { text: 'Aadhaar Biometric Auth', icon: Shield, color: 'text-accent-purple' },
    { text: 'Git & Version Control', icon: GitIcon, color: 'text-[#F05032]' },
    { text: 'React & Modern Frontend', icon: ReactIcon, color: 'text-[#61DAFB]' },
    { text: 'NLP & Sentence-BERT', icon: Cpu, color: 'text-[#C084FC]' },
    { text: 'Responsive Interfaces', icon: Layers, color: 'text-[#38BDF8]' },
    { text: 'UI/UX Design Systems', icon: Star, color: 'text-[#FBBF24]' },
  ];

  const renderRowItems = (items: typeof row1) => {
    return [...items, ...items].map((item, idx) => (
      <div
        key={idx}
        className="flex items-center gap-2.5 px-6 py-3.5 mx-3 rounded-2xl glass border border-white/[0.04] text-xs font-semibold tracking-[0.18em] uppercase text-white whitespace-nowrap select-none hover:border-white/20 transition-colors"
      >
        <item.icon className={`w-4 h-4 ${item.color}`} />
        {item.text}
      </div>
    ));
  };

  return (
    <section
      className="relative py-14 bg-[#090909] border-y border-white/[0.03] overflow-hidden flex flex-col gap-5"
    >
      {/* Left and Right Edge Fade Gradients */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#090909] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#090909] to-transparent z-10 pointer-events-none" />

      {/* Row 1: Scrolling Left */}
      <div 
        ref={row1Scroll.ref}
        {...row1Scroll.handlers}
        className="flex w-full overflow-x-auto select-none pointer-events-auto scrollbar-none cursor-grab"
      >
        <div className="flex whitespace-nowrap">
          {renderRowItems(row1)}
        </div>
      </div>

      {/* Row 2: Scrolling Right */}
      <div 
        ref={row2Scroll.ref}
        {...row2Scroll.handlers}
        className="flex w-full overflow-x-auto select-none pointer-events-auto scrollbar-none cursor-grab"
      >
        <div className="flex whitespace-nowrap">
          {renderRowItems(row2)}
        </div>
      </div>

      {/* Interactive Drag Hint */}
      <div className="flex items-center justify-center gap-3 text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-primary-light/40 select-none mt-2">
        <motion.span
          animate={{ x: [-3, 3, -3] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="text-accent-blue"
        >
          &larr;
        </motion.span>
        <span>Drag or swipe to explore stack</span>
        <motion.span
          animate={{ x: [3, -3, 3] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="text-accent-purple"
        >
          &rarr;
        </motion.span>
      </div>
    </section>
  );
};

export default MarqueeSection;
