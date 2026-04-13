import { SlideshowConfig } from '@/lib/types';
import OpeningSlide from './slides/OpeningSlide';
import ScaleChallengeSlide from '../ai-webinar/slides/ScaleChallengeSlide';
import SolutionOverviewSlide from '../ai-webinar/slides/SolutionOverviewSlide';
import Evo1SinglePromptSlide from '../ai-webinar/slides/Evo1SinglePromptSlide';
import Evo2PipelineSlide from '../ai-webinar/slides/Evo2PipelineSlide';
import Evo3ParallelSlide from '../ai-webinar/slides/Evo3ParallelSlide';
import Evo4ValidationSlide from '../ai-webinar/slides/Evo4ValidationSlide';
import Evo5SkillsSlide from '../ai-webinar/slides/Evo5SkillsSlide';
import Evo6FullWorkflowSlide from '../ai-webinar/slides/Evo6FullWorkflowSlide';
import ResultsSlide from '../ai-webinar/slides/ResultsSlide';
import SkillsSlide from './slides/SkillsSlide';
import TeamImpactSlide from './slides/TeamImpactSlide';
import PolicyBenchSlide from './slides/PolicyBenchSlide';
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
    ScaleChallengeSlide,
    SolutionOverviewSlide,
    Evo1SinglePromptSlide,
    Evo2PipelineSlide,
    Evo3ParallelSlide,
    Evo4ValidationSlide,
    Evo5SkillsSlide,
    Evo6FullWorkflowSlide,
    ResultsSlide,
    SkillsSlide,
    TeamImpactSlide,
    PolicyBenchSlide,
    LessonsSlide,
    EndSlide,
  ],
};
