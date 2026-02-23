import { SlideshowConfig } from '@/lib/types';
import { speakers } from '@/lib/speakers';
import CoverSlide from './slides/CoverSlide';
import AgendaSlide from './slides/AgendaSlide';
import ThreeIngredientsSlide from './slides/ThreeIngredientsSlide';
import MicrosimIntroSlide from './slides/MicrosimIntroSlide';
import MicrosimBaselineSlide from './slides/MicrosimBaselineSlide';
import MicrosimDynamicsSlide from './slides/MicrosimDynamicsSlide';
import MicrosimAggregateSlide from './slides/MicrosimAggregateSlide';
import OurApproachSlide from './slides/OurApproachSlide';
import ClaudeCodeDemoSlide from './slides/ClaudeCodeDemoSlide';
import PartnersSlide from './slides/PartnersSlide';
import HowPEWorksSlide from './slides/HowPEWorksSlide';
import ScaleChallengeSlide from './slides/ScaleChallengeSlide';
import SolutionOverviewSlide from './slides/SolutionOverviewSlide';
import Evo1SinglePromptSlide from './slides/Evo1SinglePromptSlide';
import Evo2PipelineSlide from './slides/Evo2PipelineSlide';
import Evo3ParallelSlide from './slides/Evo3ParallelSlide';
import Evo4ValidationSlide from './slides/Evo4ValidationSlide';
import Evo5SkillsSlide from './slides/Evo5SkillsSlide';
import Evo6FullWorkflowSlide from './slides/Evo6FullWorkflowSlide';
import DesignPrinciplesSlide from './slides/DesignPrinciplesSlide';
import ResultsSlide from './slides/ResultsSlide';
import TryItSlide from './slides/TryItSlide';
import WhatsNextSlide from './slides/WhatsNextSlide';
import EndSlide from './slides/EndSlide';

export const aiWebinarConfig: SlideshowConfig = {
  id: 'ai-webinar',
  title: 'Automating tax and benefit policy modeling with multi-agent AI',
  description: 'How we built a system that transforms a policy request into a complete, tested pull request in 90 minutes',
  date: '2026-02-01',
  footerText: 'AI Webinar \u00b7 February 2026',
  speakers: [
    speakers['max-ghenis'],
    speakers['ziming-hua'],
    speakers['pavel-makarchuk'],
  ],
  slides: [
    CoverSlide,
    AgendaSlide,
    ThreeIngredientsSlide,
    MicrosimIntroSlide,
    MicrosimBaselineSlide,
    MicrosimDynamicsSlide,
    MicrosimAggregateSlide,
    OurApproachSlide,
    PartnersSlide,
    ClaudeCodeDemoSlide,
    HowPEWorksSlide,
    ScaleChallengeSlide,
    SolutionOverviewSlide,
    Evo1SinglePromptSlide,
    Evo2PipelineSlide,
    Evo3ParallelSlide,
    Evo4ValidationSlide,
    Evo5SkillsSlide,
    Evo6FullWorkflowSlide,
    DesignPrinciplesSlide,
    ResultsSlide,
    TryItSlide,
    WhatsNextSlide,
    EndSlide,
  ],
};
