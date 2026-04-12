import { SlideshowConfig } from '@/lib/types';
import OpeningSlide from './slides/OpeningSlide';
import JourneyBeforeSlide from './slides/JourneyBeforeSlide';
import JourneyBreakthroughSlide from './slides/JourneyBreakthroughSlide';
import JourneyNowSlide from './slides/JourneyNowSlide';
import SkillsSlide from './slides/SkillsSlide';
import TeamImpactSlide from './slides/TeamImpactSlide';
import LessonsSlide from './slides/LessonsSlide';
import EndSlide from './slides/EndSlide';

export const cio4goodWorkshopConfig: SlideshowConfig = {
  id: 'cio4good-workshop',
  title: 'From single prompts to multi-agent pipelines',
  description: 'A PolicyEngine design journey — from copy-paste to 100+ parallel AI agents',
  date: 'April 2026',
  location: 'CIO4Good Summit Workshop',
  slides: [
    OpeningSlide,
    JourneyBeforeSlide,
    JourneyBreakthroughSlide,
    JourneyNowSlide,
    SkillsSlide,
    TeamImpactSlide,
    LessonsSlide,
    EndSlide,
  ],
};
