import { SlideshowConfig } from '@/lib/types';
import { speakers } from '@/lib/speakers';
import TitleSlide from './slides/TitleSlide';
import WhyThisMattersSlide from './slides/WhyThisMattersSlide';
import ChainSlide from './slides/ChainSlide';
import WorkflowSlide from './slides/WorkflowSlide';
import LimitsSlide from './slides/LimitsSlide';
import AppRoadmapSlide from './slides/AppRoadmapSlide';
import AskSlide from './slides/AskSlide';

export const aeaReproducibilityConfig: SlideshowConfig = {
  id: 'aea-reproducibility-2026-04-21',
  title: 'PolicyEngine reproducibility architecture',
  description:
    'Working meeting with Lars Vilhuber (AEA Data Editor), Tara Watson, John Sabelhaus, and the PolicyEngine team',
  date: '2026-04-21',
  location: 'Virtual meeting',
  footerText:
    'PolicyEngine \u00b7 Reproducibility architecture \u00b7 April 21, 2026',
  speakers: [speakers['max-ghenis']],
  private: true,
  slides: [
    TitleSlide,
    WhyThisMattersSlide,
    ChainSlide,
    WorkflowSlide,
    LimitsSlide,
    AppRoadmapSlide,
    AskSlide,
  ],
};
