import React from 'react';
import Slide from '@/components/core/Slide';

export default function EndSlide() {
  return (
    <Slide isEnd>
      <h1 className="text-5xl font-bold mb-4 text-center">
        Thank you
      </h1>

      <p className="text-2xl opacity-80 mb-8 text-center">
        Questions?
      </p>

      <div className="opacity-70 text-center space-y-2">
        <p className="text-lg">policyengine.org</p>
        <p className="text-lg">github.com/PolicyEngine</p>
      </div>
    </Slide>
  );
}
