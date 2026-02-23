import React from 'react';
import Slide from '@/components/core/Slide';

export default function EndSlide() {
  return (
    <Slide isEnd>
      <h1 className="text-5xl font-bold mb-4 text-center">
        Thank you
      </h1>

      <p className="text-2xl opacity-80 mb-8 text-center">
        Let&apos;s build state capacity together
      </p>

      <div className="opacity-70 text-center space-y-3">
        <p className="text-2xl font-semibold">policyengine.org</p>
        <p className="text-lg">github.com/PolicyEngine</p>
        <p className="text-lg">max@policyengine.org</p>
      </div>
    </Slide>
  );
}
