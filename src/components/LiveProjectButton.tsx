'use client';
import { ButtonHTMLAttributes } from 'react';

interface LiveProjectButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

export default function LiveProjectButton({ label = 'View Site', className = '', ...props }: LiveProjectButtonProps) {
  return (
    <button
      className={`px-8 py-3 sm:px-10 sm:py-3.5 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest text-sm sm:text-base bg-transparent hover:bg-[#D7E2EA]/10 transition-colors cursor-pointer ${className}`}
      {...props}
    >
      {label}
    </button>
  );
}
