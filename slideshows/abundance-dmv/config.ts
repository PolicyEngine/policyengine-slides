import { SlideshowConfig } from '@/lib/types';
import CoverSlide from './slides/CoverSlide';
import ProblemSlide from './slides/ProblemSlide';
import FourthOptionSlide from './slides/FourthOptionSlide';
import Microsim1Slide from './slides/Microsim1Slide';
import Microsim2Slide from './slides/Microsim2Slide';
import Microsim3Slide from './slides/Microsim3Slide';
import Microsim4Slide from './slides/Microsim4Slide';
import WhatIsPESlide from './slides/WhatIsPESlide';
import PartnersSlide from './slides/PartnersSlide';
import DemoSlide from './slides/DemoSlide';
import ClaudeCodeSlide from './slides/ClaudeCodeSlide';
import FutureSlide from './slides/FutureSlide';
import EndSlide from './slides/EndSlide';

export const abundanceDmvConfig: SlideshowConfig = {
  id: 'abundance-dmv',
  title: 'Building state capacity through open-source policy simulation',
  description: 'Lightning talk on how PolicyEngine democratizes policy analysis',
  date: '2026-02-21',
  location: 'Logan Circle, DC',
  footerText: 'Abundance DMV \u00b7 February 21, 2026',
  slides: [
    CoverSlide,
    ProblemSlide,
    FourthOptionSlide,
    Microsim1Slide,
    Microsim2Slide,
    Microsim3Slide,
    Microsim4Slide,
    WhatIsPESlide,
    PartnersSlide,
    DemoSlide,
    ClaudeCodeSlide,
    FutureSlide,
    EndSlide,
  ],
};
