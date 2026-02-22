import React, { ReactNode } from 'react';

interface SlideTitleProps {
  children: ReactNode;
  className?: string;
}

export default function SlideTitle({ children, className = '' }: SlideTitleProps) {
  if (className) {
    return (
      <h1 className={`font-display text-5xl font-bold leading-tight ${className}`}>
        {children}
      </h1>
    );
  }

  return (
    <h1 className="font-display text-5xl font-bold text-pe-dark leading-tight tracking-tight">
      {children}
    </h1>
  );
}
