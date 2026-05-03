import { SlideshowConfig } from '@/lib/types';
import { speakers } from '@/lib/speakers';
import TitleSlide from './slides/TitleSlide';
import ForecastDisagreementSlide from './slides/ForecastDisagreementSlide';
import AIGetsItWrongSlide from './slides/AIGetsItWrongSlide';
import MicrosimRealitySlide from './slides/MicrosimRealitySlide';
import ClosedModelSlide from './slides/ClosedModelSlide';
import NeedOpenToolsSlide from './slides/NeedOpenToolsSlide';
import PolicyEngineStackSlide from './slides/PolicyEngineStackSlide';
import RulesAsCodeSlide from './slides/RulesAsCodeSlide';
import WhoUsesItSlide from './slides/WhoUsesItSlide';
import AIInModelSlide from './slides/AIInModelSlide';
import CliffWatchDemoSlide from './slides/CliffWatchDemoSlide';
import PolicyAlignmentSlide from './slides/PolicyAlignmentSlide';
import HouseholdExplainerSlide from './slides/HouseholdExplainerSlide';
import IncomeShiftSlide from './slides/IncomeShiftSlide';
import ClaudeDemoSlide from './slides/ClaudeDemoSlide';
import PolicyBenchSlide from './slides/PolicyBenchSlide';
import AgentMeshSlide from './slides/AgentMeshSlide';
import EconParamAtlasSlide from './slides/EconParamAtlasSlide';
import EncodingEvolutionSlide from './slides/EncodingEvolutionSlide';
import StatuteToRACSlide from './slides/StatuteToRACSlide';
import AxiomSlide from './slides/AxiomSlide';
import CallToActionSlide from './slides/CallToActionSlide';
import EndSlide from './slides/EndSlide';

export const eagxdc2026Config: SlideshowConfig = {
  id: 'eagxdc-2026',
  title: 'Harnessing AI for policy research',
  description:
    'EAGxDC talk on how PolicyEngine is using AI to accelerate rigorous, transparent policy analysis.',
  date: '2026-05-03',
  location: 'EAGxDC · Capitol & Congress',
  footerText: 'PolicyEngine · EAGxDC · May 3, 2026',
  speakers: [
    {
      ...speakers['max-ghenis'],
      title: 'Co-founder and CEO',
    },
  ],
  slides: [
    // ACT 1 — Setup
    TitleSlide,
    ForecastDisagreementSlide,
    AIGetsItWrongSlide,
    // ACT 2 — Why current infrastructure can't meet this moment
    MicrosimRealitySlide,
    ClosedModelSlide,
    NeedOpenToolsSlide,
    // ACT 3 — PolicyEngine: the open foundation
    PolicyEngineStackSlide,
    RulesAsCodeSlide,
    WhoUsesItSlide,
    AIInModelSlide,
    // ACT 4 — What open simulation enables
    CliffWatchDemoSlide,
    PolicyAlignmentSlide,
    HouseholdExplainerSlide,
    IncomeShiftSlide,
    ClaudeDemoSlide,
    // ACT 5 — Closing the loop: AIs need real tools
    PolicyBenchSlide,
    AgentMeshSlide,
    EconParamAtlasSlide,
    EncodingEvolutionSlide,
    StatuteToRACSlide,
    AxiomSlide,
    // ACT 6 — Close
    CallToActionSlide,
    EndSlide,
  ],
};
