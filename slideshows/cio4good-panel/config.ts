import { SlideshowConfig } from '@/lib/types';
import CoverSlide from './slides/CoverSlide';
import ContextSlide from './slides/ContextSlide';
import CaseStudySlide from './slides/CaseStudySlide';
import GovernanceShiftSlide from './slides/GovernanceShiftSlide';
import AIEvolutionSlide from './slides/AIEvolutionSlide';
import OrgTransformSlide from './slides/OrgTransformSlide';
import LessonsSlide from './slides/LessonsSlide';
import EndSlide from './slides/EndSlide';

export const cio4goodPanelConfig: SlideshowConfig = {
  id: 'cio4good-panel',
  title: 'Building data foundations for policy impact',
  description: 'How open-source infrastructure turns policy rules into public goods',
  date: 'April 2026',
  location: 'CIO4Good Summit',
  slides: [
    CoverSlide,
    ContextSlide,
    CaseStudySlide,
    GovernanceShiftSlide,
    AIEvolutionSlide,
    OrgTransformSlide,
    LessonsSlide,
    EndSlide,
  ],
};
