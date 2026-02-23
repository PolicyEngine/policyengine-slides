import React, { ReactNode } from 'react';

interface SlideContentProps {
  children: ReactNode;
  columns?: 1 | 2;
  size?: 'sm' | 'md' | 'lg';
}

export default function SlideContent({ children, columns = 1, size = 'lg' }: SlideContentProps) {
  const textSize = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  }[size];

  return (
    <div className={`
      ${textSize} leading-relaxed space-y-8 text-left
      ${columns === 2 ? 'grid grid-cols-2 gap-16' : ''}
    `}>
      {children}
    </div>
  );
}
