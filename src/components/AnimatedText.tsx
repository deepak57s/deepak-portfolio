import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "start 0.35"]
  });

  const words = text.split(' ');

  return (
    <p ref={containerRef} className={`flex flex-wrap ${className}`}>
      {words.map((word, wordIndex) => {
        // Calculate a start/end index for characters in the word to offset timings correctly
        const prevWordsLength = words.slice(0, wordIndex).join(' ').length + (wordIndex > 0 ? 1 : 0);
        
        return (
          <span key={wordIndex} className="mr-[0.25em] inline-block whitespace-nowrap">
            {word.split('').map((char, charIndex) => {
              const charPosition = prevWordsLength + charIndex;
              const totalLength = text.length;
              
              return (
                <Character
                  key={charIndex}
                  progress={scrollYProgress}
                  range={[charPosition / totalLength, (charPosition + 1.5) / totalLength]}
                >
                  {char}
                </Character>
              );
            })}
          </span>
        );
      })}
    </p>
  );
};

interface CharacterProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Character: React.FC<CharacterProps> = ({ children, progress, range }) => {
  // Map scroll progress to opacity from 0.2 (dim) to 1.0 (bright white)
  const opacity = useTransform(progress, range, [0.2, 1]);
  
  return (
    <motion.span style={{ opacity }} className="text-white inline-block">
      {children}
    </motion.span>
  );
};

export default AnimatedText;
