import { ReactNode } from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';

/** Sizes scale with the window so a slide fits a laptop and a projector alike. */
export default function Frame({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Slide>
      <div className="flex h-full flex-col">
        <SlideHeader>
          <h1
            className="font-display font-bold leading-tight tracking-tight text-pe-dark"
            style={{ fontSize: 'clamp(28px, 4.4vh, 48px)' }}
          >
            {title}
          </h1>
        </SlideHeader>
        <div
          className="min-h-0 flex-1 text-gray-800"
          style={{ fontSize: 'clamp(14px, 2.25vh, 28px)' }}
        >
          {children}
        </div>
      </div>
    </Slide>
  );
}
