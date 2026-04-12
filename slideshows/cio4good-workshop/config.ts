import { SlideshowConfig } from '@/lib/types';
import CoverSlide from './slides/CoverSlide';
import ContextSlide from './slides/ContextSlide';
import Evo1SinglePromptSlide from '@/slideshows/ai-webinar/slides/Evo1SinglePromptSlide';
import Evo2PipelineSlide from '@/slideshows/ai-webinar/slides/Evo2PipelineSlide';
import Evo3ParallelSlide from '@/slideshows/ai-webinar/slides/Evo3ParallelSlide';
import Evo4ValidationSlide from '@/slideshows/ai-webinar/slides/Evo4ValidationSlide';
import Evo5SkillsSlide from '@/slideshows/ai-webinar/slides/Evo5SkillsSlide';
import SkillsSlide from './slides/SkillsSlide';
import TeamImpactSlide from './slides/TeamImpactSlide';
import Evo6FullWorkflowSlide from '@/slideshows/ai-webinar/slides/Evo6FullWorkflowSlide';
import ResultsSlide from '@/slideshows/ai-webinar/slides/ResultsSlide';
import LessonsSlide from './slides/LessonsSlide';
import EndSlide from './slides/EndSlide';

export const cio4goodWorkshopConfig: SlideshowConfig = {
  id: 'cio4good-workshop',
  title: 'From single prompts to multi-agent pipelines',
  description: 'A PolicyEngine design journey — from copy-paste to 100+ parallel AI agents',
  date: 'April 2026',
  location: 'CIO4Good Summit Workshop',
  slides: [
    CoverSlide,
    ContextSlide,
    Evo1SinglePromptSlide,
    Evo2PipelineSlide,
    Evo3ParallelSlide,
    Evo4ValidationSlide,
    Evo5SkillsSlide,
    SkillsSlide,
    TeamImpactSlide,
    Evo6FullWorkflowSlide,
    ResultsSlide,
    LessonsSlide,
    EndSlide,
  ],
};
