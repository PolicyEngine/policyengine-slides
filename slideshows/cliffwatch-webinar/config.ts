import { SlideshowConfig } from '@/lib/types';
import { speakers } from '@/lib/speakers';
import WhatIsPESlide from '../abundance-dmv/slides/WhatIsPESlide';
import PartnersSlide from '../pwbm-2026/slides/PartnersSlide';
import {
  AgendaSlide,
  CoverageTrackerSlide,
  DemoLinkSlide,
  ExamplesSlide,
  LegacyCliffChartSlide,
  NextStepsSlide,
  TitleSlide,
  WrapSlide,
} from './slides';

export const cliffwatchWebinarConfig: SlideshowConfig = {
  id: 'cliffwatch-webinar',
  title: 'CliffWatch',
  description: 'PolicyEngine deck introducing CliffWatch',
  date: '2026-05-29',
  location: 'Webinar',
  footerText: 'CliffWatch · May 29, 2026',
  speakers: [
    {
      ...speakers['daphne-hansell'],
      title: 'Research Analyst',
    },
    {
      ...speakers['max-ghenis'],
      title: 'CEO',
    },
  ],
  slides: [
    TitleSlide,
    AgendaSlide,
    WhatIsPESlide,
    CoverageTrackerSlide,
    LegacyCliffChartSlide,
    ExamplesSlide,
    DemoLinkSlide,
    PartnersSlide,
    NextStepsSlide,
    WrapSlide,
  ],
};
