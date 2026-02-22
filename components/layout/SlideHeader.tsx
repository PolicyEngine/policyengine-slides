import React, { ReactNode } from 'react';

interface SlideHeaderProps {
  children: ReactNode;
}

export default function SlideHeader({ children }: SlideHeaderProps) {
  return (
    <div className="mb-10">
      <div className="flex items-start justify-between gap-8">
        <div className="flex-1">
          {children}
        </div>
      </div>
      <div className="w-32 accent-bar mt-5"></div>
    </div>
  );
}
