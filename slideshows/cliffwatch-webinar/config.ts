import { SlideshowConfig } from '@/lib/types';
import { speakers } from '@/lib/speakers';
import PartnersSlide from '../pwbm-2026/slides/PartnersSlide';
import {
  AgendaSlide,
  CoverageTrackerSlide,
  DemoLinkSlide,
  ExamplesSlide,
  LegacyCliffChartSlide,
  NextStepsSlide,
  PolicyEngineIntroSlide,
  TitleSlide,
  WrapSlide,
} from './slides';

export const cliffwatchWebinarConfig: SlideshowConfig = {
  id: 'cliffwatch-webinar',
  title: 'CliffWatch Webinar',
  description: 'Outline deck for a May 29, 2026 webinar demoing CliffWatch',
  date: '2026-05-29',
  location: 'Webinar',
  footerText: 'CliffWatch Webinar · May 29, 2026',
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
    PolicyEngineIntroSlide,
    CoverageTrackerSlide,
    LegacyCliffChartSlide,
    ExamplesSlide,
    DemoLinkSlide,
    PartnersSlide,
    NextStepsSlide,
    WrapSlide,
  ],
};
