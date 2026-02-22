import React from 'react';
import Slide from '@/components/core/Slide';

interface EndSlideProps {
  message?: string;
  subtitle?: string;
  links?: { label: string; url: string }[];
}

export default function EndSlide({
  message = 'Thank you',
  subtitle = 'Questions?',
  links = [
    { label: 'policyengine.org', url: 'https://policyengine.org' },
    { label: 'github.com/PolicyEngine', url: 'https://github.com/PolicyEngine' },
  ],
}: EndSlideProps) {
  return (
    <Slide isEnd>
      <h1 className="font-display text-5xl font-bold mb-4 text-center">
        {message}
      </h1>

      <p className="text-2xl opacity-80 mb-8 text-center">
        {subtitle}
      </p>

      <div className="opacity-70 text-center space-y-2">
        {links.map((link, i) => (
          <p key={i} className="text-lg">{link.label}</p>
        ))}
      </div>
    </Slide>
  );
}
