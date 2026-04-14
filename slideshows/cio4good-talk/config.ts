import { SlideshowConfig } from '@/lib/types';
import { speakers } from '@/lib/speakers';
import TitleSlide from './slides/TitleSlide';
import ThesisSlide from './slides/ThesisSlide';
import AnswerSlide from './slides/AnswerSlide';
import CaseStudySlide from './slides/CaseStudySlide';
import FoundationsSlide from './slides/FoundationsSlide';
import OperatingModelSlide from './slides/OperatingModelSlide';
import OutcomesSlide from './slides/OutcomesSlide';
import StartHereSlide from './slides/StartHereSlide';

export const cio4goodTalkConfig: SlideshowConfig = {
  id: 'cio4good-talk',
  title: 'Making organizations legible to AI',
  description: 'CIO4Good panel talk — from legislative text to runnable analysis',
  date: 'April 14, 2026',
  location: 'CIO4Good Panel',
  speakers: [speakers['max-ghenis']],
  slides: [
    TitleSlide,
    ThesisSlide,
    AnswerSlide,
    CaseStudySlide,
    FoundationsSlide,
    OperatingModelSlide,
    OutcomesSlide,
    StartHereSlide,
  ],
};
