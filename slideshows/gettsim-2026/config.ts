import { SlideshowConfig } from '@/lib/types';
import { speakers } from '@/lib/speakers';
// Opening
import TitleSlide from './slides/TitleSlide';
import IntroSlide from './slides/IntroSlide';
import CraftScaledSlide from './slides/CraftScaledSlide';
import AgendaSlide from './slides/AgendaSlide';
import {
  RulesDividerSlide,
  DataDividerSlide,
  MicrosimDividerSlide,
} from './slides/SectionDivider';
// 1 — Rules: AI-assisted encoding and the Axiom rules engine
import BridgeToEvolutionSlide from './slides/BridgeToEvolutionSlide';
import Evo1SinglePromptSlide from './slides/Evo1SinglePromptSlide';
import Evo2PipelineSlide from './slides/Evo2PipelineSlide';
import Evo3ParallelSlide from './slides/Evo3ParallelSlide';
import Evo4ValidationSlide from './slides/Evo4ValidationSlide';
import Evo5SkillsSlide from './slides/Evo5SkillsSlide';
import Evo6FullWorkflowSlide from './slides/Evo6FullWorkflowSlide';
import AxiomIntroSlide from './slides/AxiomIntroSlide';
import {
  DemoAxiomGraphSlide,
  DemoAxiomValidationSlide,
} from './slides/DemoSlides';
import {
  DemoAxiomLiveSlide,
  ScorecardLiveSlide,
  CalibrationLiveSlide,
} from './slides/DemoLiveSlides';
import BelgiumParitySlide from './slides/BelgiumParitySlide';
import CertificationLadderSlide from './slides/CertificationLadderSlide';
// 2 — Data: how Microcosm builds the microdata, and the harness under it
import MicrodataPipelineSlide from './slides/MicrodataPipelineSlide';
import MicrocosmBESlide from './slides/MicrocosmBESlide';
import HarnessLayersSlide from './slides/HarnessLayersSlide';
// 3 — Microsimulation: PolicyEngine, graded
import PEOverviewSlide from './slides/PEOverviewSlide';
import CountryScopeSlide from './slides/CountryScopeSlide';
import WhoUsesItSlide from './slides/WhoUsesItSlide';
// Closing
import ClosingSlide from './slides/ClosingSlide';
import QuestionsSlide from './slides/QuestionsSlide';

export const gettsim2026Config: SlideshowConfig = {
  id: 'gettsim-2026',
  title: 'AI-driven rules engine development',
  description:
    'Rules, data, microsimulation — AI-assisted encoding and the Axiom rules engine, the calibrated microdata underneath, and PolicyEngine graded against external scorekeepers',
  date: '2026-09-03',
  location: 'GETTSIM workshop, Digital Hub Bonn',
  footerText: 'PolicyEngine · GETTSIM workshop · September 2026',
  partnerLogo: {
    src: '/logos/axiom-foundation-white.svg',
    alt: 'The Axiom Foundation',
  },
  speakers: [speakers['pavel-makarchuk']],
  private: false,
  slides: [
    // Opening
    TitleSlide,
    IntroSlide,
    AgendaSlide,
    CraftScaledSlide,

    // 1 — Rules
    RulesDividerSlide,
    BridgeToEvolutionSlide,
    Evo1SinglePromptSlide,
    Evo2PipelineSlide,
    Evo3ParallelSlide,
    Evo4ValidationSlide,
    Evo5SkillsSlide,
    Evo6FullWorkflowSlide,
    AxiomIntroSlide,
    DemoAxiomLiveSlide,
    DemoAxiomGraphSlide,
    DemoAxiomValidationSlide,
    BelgiumParitySlide,
    CertificationLadderSlide,

    // 2 — Data
    DataDividerSlide,
    MicrodataPipelineSlide,
    MicrocosmBESlide,
    CalibrationLiveSlide,
    HarnessLayersSlide,

    // 3 — Microsimulation
    MicrosimDividerSlide,
    PEOverviewSlide,
    CountryScopeSlide,
    WhoUsesItSlide,
    ScorecardLiveSlide,

    // Closing
    ClosingSlide,
    QuestionsSlide,
  ],
};
