import { ReactNode } from 'react';
import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import styles from './deck.module.css';

/** Sizes scale with the window so a slide fits a laptop and a projector alike. */
export default function Frame({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Slide className={styles.deck}>
      <div className={`flex h-full flex-col ${styles.frame}`}>
        <SlideHeader>
          <h1
            className="font-display font-bold leading-tight tracking-tight text-pe-dark"
            style={{ fontSize: 'clamp(28px, 4.4vh, 48px)' }}
          >
            {title}
          </h1>
        </SlideHeader>
        <div
          className={`min-h-0 flex-1 text-gray-800 ${styles.body}`}
          style={{ fontSize: 'clamp(14px, 2.25vh, 28px)' }}
        >
          {children}
        </div>
      </div>
    </Slide>
  );
}
