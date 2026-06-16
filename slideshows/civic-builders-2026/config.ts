import { SlideshowConfig } from '@/lib/types';
import { speakers } from '@/lib/speakers';
import CoverSlide from './slides/CoverSlide';
import ProblemSlide from './slides/ProblemSlide';
import WhatIsPESlide from './slides/WhatIsPESlide';
import CivicStackSlide from './slides/CivicStackSlide';
import AskAISlide from './slides/AskAISlide';
import AsksSlide from './slides/AsksSlide';
import EndSlide from './slides/EndSlide';

export const civicBuilders2026Config: SlideshowConfig = {
  id: 'civic-builders-2026',
  title: 'The open engine for taxes and benefits',
  description:
    'A civic-tech demo of PolicyEngine: one open engine that computes taxes and benefits for any household and any reform — for builders to build on.',
  date: '2026-06-17',
  location: 'Civic Builders Demo Night, Washington, DC',
  footerText: 'PolicyEngine · Civic Builders Demo Night · June 17, 2026',
  speakers: [
    {
      ...speakers['max-ghenis'],
      title: 'Co-founder and CEO',
    },
  ],
  slides: [
    CoverSlide,
    ProblemSlide,
    WhatIsPESlide,
    CivicStackSlide,
    AskAISlide,
    AsksSlide,
    EndSlide,
  ],
};
