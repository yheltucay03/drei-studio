'use client';
import { useRef, ReactNode } from 'react';

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  className?: string;
}

export default function Magnet({ children, padding = 100, strength = 3, className }: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  let active = false;

  function handleMouseMove(e: MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const threshold = Math.max(rect.width, rect.height) / 2 + padding;

    if (dist < threshold) {
      active = true;
      el.style.transition = 'transform 0.3s ease-out';
      el.style.transform = `translate3d(${dx / strength}px, ${dy / strength}px, 0)`;
    } else if (active) {
      active = false;
      el.style.transition = 'transform 0.6s ease-in-out';
      el.style.transform = 'translate3d(0,0,0)';
    }
  }

  function attach() {
    window.addEventListener('mousemove', handleMouseMove);
  }

  function detach() {
    window.removeEventListener('mousemove', handleMouseMove);
    const el = ref.current;
    if (el) {
      el.style.transition = 'transform 0.6s ease-in-out';
      el.style.transform = 'translate3d(0,0,0)';
    }
    active = false;
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{ willChange: 'transform', display: 'inline-block' }}
      onMouseEnter={attach}
      onMouseLeave={detach}
    >
      {children}
    </div>
  );
}
