import React from 'react';

export interface BulletItem {
  text: string;
  subtext?: string;
}

interface BulletListProps {
  items: BulletItem[];
  size?: 'sm' | 'md' | 'lg';
}

export default function BulletList({ items, size = 'md' }: BulletListProps) {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl',
  };

  const subtextSizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <div className="space-y-8 text-left">
      {items.map((item, index) => (
        <div key={index} className="flex items-start gap-8">
          <div className="flex-shrink-0 pt-4">
            <div className="w-4 h-4 bg-pe-teal rounded-full"></div>
          </div>
          <div className="flex-1">
            <p className={`${sizeClasses[size]} text-gray-800 leading-relaxed`}>
              {item.text}
            </p>
            {item.subtext && (
              <p className={`${subtextSizeClasses[size]} text-gray-600 mt-2 leading-relaxed`}>
                {item.subtext}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
