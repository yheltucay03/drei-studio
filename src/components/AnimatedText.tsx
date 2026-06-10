'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import React from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = text.split('');

  return (
    <p ref={ref} className={className} style={{ position: 'relative', ...style }}>
      {chars.map((char, i) => {
        const start = i / chars.length;
        const end = (i + 1) / chars.length;
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
        return (
          <span key={i} style={{ position: 'relative', display: 'inline' }}>
            <span style={{ opacity: 0 }}>{char === ' ' ? ' ' : char}</span>
            <motion.span
              style={{ opacity, position: 'absolute', left: 0, top: 0 }}
            >
              {char === ' ' ? ' ' : char}
            </motion.span>
          </span>
        );
      })}
    </p>
  );
}
