import { SlideshowConfig } from '@/lib/types';
import { speakers } from '@/lib/speakers';
import TitleSlide from './slides/TitleSlide';
import BridgeSlide from './slides/BridgeSlide';
import CraftScaledSlide from './slides/CraftScaledSlide';
import WhatIfEveryBillSlide from './slides/WhatIfEveryBillSlide';
import WhatIfEverySeriesSlide from './slides/WhatIfEverySeriesSlide';
import CrossScaleSlide from './slides/CrossScaleSlide';
import HowWeGetThereSlide from './slides/HowWeGetThereSlide';
import OutlineSlide from './slides/OutlineSlide';
import {
  RulesDividerSlide,
  DataDividerSlide,
  LiveDividerSlide,
  FutureDividerSlide,
} from './slides/SectionDivider';
// Section 1 — Rules
import PEOverviewSlide from './slides/PEOverviewSlide';
import WhoUsesItSlide from './slides/WhoUsesItSlide';
import PolicyBenchSlide from './slides/PolicyBenchSlide';
import BridgeToEvolutionSlide from './slides/BridgeToEvolutionSlide';
import Evo1SinglePromptSlide from './slides/Evo1SinglePromptSlide';
import Evo2PipelineSlide from './slides/Evo2PipelineSlide';
import Evo3ParallelSlide from './slides/Evo3ParallelSlide';
import Evo4ValidationSlide from './slides/Evo4ValidationSlide';
import Evo5SkillsSlide from './slides/Evo5SkillsSlide';
import Evo6FullWorkflowSlide from './slides/Evo6FullWorkflowSlide';
import AxiomIntroSlide from './slides/AxiomIntroSlide';
import BelgiumParitySlide from './slides/BelgiumParitySlide';
import CertificationLadderSlide from './slides/CertificationLadderSlide';
// Section 2 — Data
import DataChallengeSlide from './slides/DataChallengeSlide';
import ImputationSlide from './slides/ImputationSlide';
import CalibrationSlide from './slides/CalibrationSlide';
import MicrocosmBESlide from './slides/MicrocosmBESlide';
import MicroplexSlide from './slides/MicroplexSlide';
// Section 3 — Live (demo beats + fallback screenshots)
import {
  DemoAxiomBrowseSlide,
  DemoAxiomProvisionSlide,
  DemoAxiomGraphSlide,
  DemoAxiomValidationSlide,
  DemoPeBeSlide,
  MicrocosmDashboardSlide,
} from './slides/DemoSlides';
import {
  DemoAxiomLiveSlide,
  DemoPeBeLiveSlide,
  DemoDashboardLiveSlide,
} from './slides/DemoLiveSlides';
import DemoPySlide from './slides/DemoPySlide';
// Section 4 — Where this goes
import ConductorsSlide from './slides/ConductorsSlide';
import ForecastUncertaintySlide from './slides/ForecastUncertaintySlide';
import CommunityClosingSlide from './slides/CommunityClosingSlide';
import QuestionsSlide from './slides/QuestionsSlide';

export const iariw2026Config: SlideshowConfig = {
  id: 'iariw-2026',
  title: 'From open models to executable law',
  description:
    'PolicyEngine and Axiom — open models, simulation-ready microdata, and encoding and verifying policy rules',
  date: '2026-08-27',
  location: 'IARIW–CAPE workshop, UCLouvain Saint-Louis, Brussels',
  footerText: 'PolicyEngine · IARIW–CAPE workshop · August 2026',
  speakers: [speakers['max-ghenis']],
  private: false,
  slides: [
    // Opening
    TitleSlide,
    BridgeSlide,
    CraftScaledSlide,
    WhatIfEveryBillSlide,
    WhatIfEverySeriesSlide,
    CrossScaleSlide,
    HowWeGetThereSlide,
    OutlineSlide,

    // Section 1 — Rules
    RulesDividerSlide,
    PEOverviewSlide,
    WhoUsesItSlide,
    PolicyBenchSlide,
    BridgeToEvolutionSlide,
    Evo1SinglePromptSlide,
    Evo2PipelineSlide,
    Evo3ParallelSlide,
    Evo4ValidationSlide,
    Evo5SkillsSlide,
    Evo6FullWorkflowSlide,
    AxiomIntroSlide,
    BelgiumParitySlide,
    CertificationLadderSlide,

    // Section 2 — Data
    DataDividerSlide,
    DataChallengeSlide,
    ImputationSlide,
    CalibrationSlide,
    MicrocosmBESlide,
    DemoDashboardLiveSlide,
    MicrocosmDashboardSlide,
    MicroplexSlide,

    // Section 3 — Live (embedded apps; static screenshots follow as fallbacks)
    LiveDividerSlide,
    DemoAxiomLiveSlide,
    DemoAxiomBrowseSlide,
    DemoAxiomProvisionSlide,
    DemoAxiomGraphSlide,
    DemoAxiomValidationSlide,
    DemoPeBeLiveSlide,
    DemoPeBeSlide,
    DemoPySlide,

    // Section 4 — Where this goes
    FutureDividerSlide,
    ConductorsSlide,
    ForecastUncertaintySlide,
    CommunityClosingSlide,
    QuestionsSlide,
  ],
};
