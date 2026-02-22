'use client';

import { ReactNode } from 'react';
import { useSlideshowContextSafe } from './SlideshowContext';

interface BuildRevealProps {
  step: number;
  children: ReactNode;
  className?: string;
}

export default function BuildReveal({ step, children, className = '' }: BuildRevealProps) {
  const ctx = useSlideshowContextSafe();
  const currentBuild = ctx?.buildStep ?? Infinity;

  if (currentBuild < step) {
    return null;
  }

  return (
    <div className={`animate-fade-in-up ${className}`}>
      {children}
    </div>
  );
}
