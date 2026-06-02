import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltCardProps {
  imageSrc: string;
  altText: string;
  name: string;
  subtitle: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  imageSrc,
  altText,
  name,
  subtitle,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values to track normalized mouse coordinates (range: -0.5 to 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Very smooth spring animation configurations for rotation
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), {
    stiffness: 120,
    damping: 18,
    mass: 0.2,
  });
  
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), {
    stiffness: 120,
    damping: 18,
    mass: 0.2,
  });

  // Parallax translation for the nested overlay card to give deep 3D separation
  const textTranslateX = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
    stiffness: 120,
    damping: 18,
  });
  
  const textTranslateY = useSpring(useTransform(y, [-0.5, 0.5], [-10, 10]), {
    stiffness: 120,
    damping: 18,
  });

  // Calculate dynamic radial gradient background for the holographic glare overlay
  const shineBackground = useTransform([x, y], ([latestX, latestY]) => {
    const px = (latestX as number + 0.5) * 100;
    const py = (latestY as number + 0.5) * 100;
    return `radial-gradient(circle 240px at ${px}% ${py}%, rgba(251, 146, 60, 0.3) 0%, rgba(147, 51, 234, 0.15) 40%, transparent 80%)`;
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalized position relative to center: range is [-0.5, 0.5]
    const normalizedX = (e.clientX - rect.left) / width - 0.5;
    const normalizedY = (e.clientY - rect.top) / height - 0.5;
    
    x.set(normalizedX);
    y.set(normalizedY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      className="perspective-1000 flex items-center justify-center select-none"
      style={{ perspective: '1200px' }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="group relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden p-[1px] bg-gradient-to-br from-orange-500 via-transparent to-accent-purple shadow-[0_20px_50px_rgba(249,115,22,0.25)] hover:shadow-[0_25px_60px_rgba(249,115,22,0.4)] transition-shadow duration-500 cursor-pointer"
      >
        {/* Neon Orange & Purple Glowing ambient mesh */}
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/25 to-accent-purple/20 blur-3xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

        {/* Dynamic Holographic Foil Glare / Shine */}
        <motion.div
          style={{ background: shineBackground }}
          className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-color-dodge"
        />

        {/* Outer Fine border highlight overlay */}
        <div className="absolute inset-0 border border-white/10 rounded-3xl z-30 pointer-events-none group-hover:border-orange-500/30 transition-colors duration-500" />

        {/* Card Body inner container */}
        <div
          style={{ transform: 'translateZ(0px)', transformStyle: 'preserve-3d' }}
          className="relative w-full h-full rounded-[23px] bg-[#0A0A0A]/95 overflow-hidden flex items-center justify-center"
        >
          {/* Main Visual Image Layer (With depth translation) */}
          <motion.img
            src={imageSrc}
            alt={altText}
            style={{
              transform: 'translateZ(20px) scale(1.05)',
            }}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 pointer-events-none"
          />

          {/* Decorative Cybernetic Grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-10 opacity-40 mix-blend-overlay" />

          {/* Double Corner Glowing Accents (Orange top-right, Purple bottom-left) */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 blur-xl rounded-full z-10 group-hover:bg-orange-500/20 transition-all duration-500" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent-purple/10 blur-xl rounded-full z-10 group-hover:bg-accent-purple/20 transition-all duration-500" />

          {/* Embedded Parallax Overlay Card (Sits at translateZ(50px) for maximum depth separation) */}
          <motion.div
            style={{
              x: textTranslateX,
              y: textTranslateY,
              transform: 'translateZ(50px)',
            }}
            className="absolute bottom-5 left-5 right-5 glass p-4 rounded-xl border border-white/[0.08] backdrop-blur-md flex items-center justify-between z-30 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:border-orange-500/20 transition-all duration-500"
          >
            <div>
              <h3 className="text-xs md:text-sm font-bold font-kanit uppercase tracking-wider text-white flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                {name}
              </h3>
              <p className="text-[10px] text-primary-light/60 tracking-wider mt-0.5">
                {subtitle}
              </p>
            </div>
            {/* Kyuubi orange pulsing active dot */}
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse shadow-[0_0_12px_#f97316]" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default TiltCard;
