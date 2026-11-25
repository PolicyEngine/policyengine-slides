'use client';

import Slide from '@/components/core/Slide';
import { end } from '../text';

/**
 * The close: "Thank you" and four addresses. Built on the end-slide background directly rather than the shared
 * template, whose links are small and at 70% opacity (about 18 px, contrast 4.3:1).
 */
export default function EndSlide() {
  return (
    <Slide isEnd>
      <h1 className="mb-[6vh] text-center font-display text-6xl font-bold">{end.title}</h1>
      <div className="space-y-[1.6vh] text-center font-display text-white" style={{ fontSize: 'clamp(24px, 3.6vh, 44px)' }}>
        {end.links.map((label) => (
          <p key={label}>{label}</p>
        ))}
      </div>
    </Slide>
  );
}
