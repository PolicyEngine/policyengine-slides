import { SlideshowConfig } from '@/lib/types';
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
  date: 'April 2026',
  location: 'CIO4Good Summit',
  slides: [
    ThesisSlide,
    AnswerSlide,
    CaseStudySlide,
    FoundationsSlide,
    OperatingModelSlide,
    OutcomesSlide,
    StartHereSlide,
  ],
};
