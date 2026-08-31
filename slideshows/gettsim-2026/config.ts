import { SlideshowConfig } from '@/lib/types';
import { speakers } from '@/lib/speakers';
// Opening
import TitleSlide from './slides/TitleSlide';
import PEOverviewSlide from './slides/PEOverviewSlide';
import CountryScopeSlide from './slides/CountryScopeSlide';
import WhoUsesItSlide from './slides/WhoUsesItSlide';
import CraftScaledSlide from './slides/CraftScaledSlide';
import {
  EncodingDividerSlide,
  ExecutableDividerSlide,
  VerifiableDividerSlide,
} from './slides/SectionDivider';
// 1 — Encoding: the evolution of AI-assisted encoding
import BridgeToEvolutionSlide from './slides/BridgeToEvolutionSlide';
import Evo1SinglePromptSlide from './slides/Evo1SinglePromptSlide';
import Evo2PipelineSlide from './slides/Evo2PipelineSlide';
import Evo3ParallelSlide from './slides/Evo3ParallelSlide';
import Evo4ValidationSlide from './slides/Evo4ValidationSlide';
import Evo5SkillsSlide from './slides/Evo5SkillsSlide';
import Evo6FullWorkflowSlide from './slides/Evo6FullWorkflowSlide';
// 2 — Executable: the Axiom rules engine
import AxiomIntroSlide from './slides/AxiomIntroSlide';
import {
  DemoAxiomBrowseSlide,
  DemoAxiomProvisionSlide,
  DemoAxiomGraphSlide,
  DemoAxiomValidationSlide,
  ScorecardStaticSlide,
  CalibrationDashboardStaticSlide,
} from './slides/DemoSlides';
import {
  DemoAxiomLiveSlide,
  CalibrationLiveSlide,
} from './slides/DemoLiveSlides';
// 3 — Verifiable: the harness at every layer
import BelgiumParitySlide from './slides/BelgiumParitySlide';
import CertificationLadderSlide from './slides/CertificationLadderSlide';
import HarnessLayersSlide from './slides/HarnessLayersSlide';
// Closing
import ClosingSlide from './slides/ClosingSlide';
import QuestionsSlide from './slides/QuestionsSlide';

export const gettsim2026Config: SlideshowConfig = {
  id: 'gettsim-2026',
  title: 'AI-driven rules engine development',
  description:
    'Encoding statutes into executable, verifiable rules — AI-assisted encoding, the Axiom rules engine, and the validation harness at every layer',
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
    PEOverviewSlide,
    CountryScopeSlide,
    WhoUsesItSlide,
    CraftScaledSlide,

    // 1 — Encoding
    EncodingDividerSlide,
    BridgeToEvolutionSlide,
    Evo1SinglePromptSlide,
    Evo2PipelineSlide,
    Evo3ParallelSlide,
    Evo4ValidationSlide,
    Evo5SkillsSlide,
    Evo6FullWorkflowSlide,

    // 2 — Executable
    ExecutableDividerSlide,
    AxiomIntroSlide,
    DemoAxiomLiveSlide,
    DemoAxiomBrowseSlide,
    DemoAxiomProvisionSlide,
    DemoAxiomGraphSlide,

    // 3 — Verifiable
    VerifiableDividerSlide,
    DemoAxiomValidationSlide,
    BelgiumParitySlide,
    CertificationLadderSlide,
    HarnessLayersSlide,
    ScorecardStaticSlide,
    CalibrationLiveSlide,
    CalibrationDashboardStaticSlide,

    // Closing
    ClosingSlide,
    QuestionsSlide,
  ],
};
