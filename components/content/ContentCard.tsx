import React, { ReactNode } from 'react';

interface ContentCardProps {
  children: ReactNode;
  className?: string;
}

export default function ContentCard({ children, className = '' }: ContentCardProps) {
  return (
    <div className={`content-card p-8 ${className}`}>
      {children}
    </div>
  );
}
