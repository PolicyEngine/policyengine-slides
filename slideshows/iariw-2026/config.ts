import { SlideshowConfig } from '@/lib/types';
import { speakers } from '@/lib/speakers';
// Opening
import TitleSlide from './slides/TitleSlide';
import BridgeSlide from './slides/BridgeSlide';
import CraftScaledSlide from './slides/CraftScaledSlide';
import ScorekeeperScaleSlide from './slides/ScorekeeperScaleSlide';
// The question sequence
import WhatIfEveryBillSlide from './slides/WhatIfEveryBillSlide';
import WhatIfEverySeriesSlide from './slides/WhatIfEverySeriesSlide';
import CrossScaleSlide from './slides/CrossScaleSlide';
import ScaleAccuracySlide from './slides/ScaleAccuracySlide';
import HowWeGetThereSlide from './slides/HowWeGetThereSlide';
import PolicyBenchSlide from './slides/PolicyBenchSlide';
// The spine
import FivePrimitivesSlide from './slides/FivePrimitivesSlide';
import HistorySlide from './slides/HistorySlide';
import OutlineSlide from './slides/OutlineSlide';
import {
  AxiomDividerSlide,
  ChronicleDividerSlide,
  MicrocosmDividerSlide,
  EngineDividerSlide,
  TogetherDividerSlide,
} from './slides/SectionDivider';
// 1 — Axiom
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
// 2 — Chronicle
import ChronicleSlide from './slides/ChronicleSlide';
// 3 — Microcosm
import DataChallengeSlide from './slides/DataChallengeSlide';
import ImputationSlide from './slides/ImputationSlide';
import CalibrationSlide from './slides/CalibrationSlide';
import DistrictCalibrationMapSlide from './slides/DistrictCalibrationMapSlide';
import MicrocosmBESlide from './slides/MicrocosmBESlide';
// 4 — PolicyEngine
import PEOverviewSlide from './slides/PEOverviewSlide';
import WhoUsesItSlide from './slides/WhoUsesItSlide';
import DemoPySlide from './slides/DemoPySlide';
import {
  CliffWatchLiveSlide,
  ObbbaExplorerLiveSlide,
} from './slides/PolicyEngineExamplesSlides';
// Live embeds + static fallbacks
import {
  DemoAxiomBrowseSlide,
  DemoAxiomProvisionSlide,
  DemoAxiomGraphSlide,
  DemoAxiomValidationSlide,
  DemoPeBeSlide,
  MicrocosmDashboardSlide,
  ChronicleTargetsStaticSlide,
  AxiomCliffStaticSlide,
  AxiomChatbotStaticSlide,
  ThesisSpmStaticSlide,
  ThesisBillsStaticSlide,
} from './slides/DemoSlides';
import {
  DemoAxiomLiveSlide,
  DemoPeBeLiveSlide,
  DemoDashboardLiveSlide,
} from './slides/DemoLiveSlides';
import {
  ChronicleLiveSlide,
  AxiomCliffLiveSlide,
  AxiomChatbotLiveSlide,
  ThesisForecastLiveSlide,
  ThesisLiveSlide,
} from './slides/DemoLiveSlides2';
// 5 — Together
import ConductorsSlide from './slides/ConductorsSlide';
import StackRecapSlide from './slides/StackRecapSlide';
import HarnessRecapSlide from './slides/HarnessRecapSlide';
import BaselineForecastSlide from './slides/BaselineForecastSlide';
import ForecastUncertaintySlide from './slides/ForecastUncertaintySlide';
import ClosingLoopSlide from './slides/ClosingLoopSlide';
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
  partnerLogo: {
    src: '/logos/axiom-foundation-white.svg',
    alt: 'The Axiom Foundation',
  },
  speakers: [speakers['max-ghenis']],
  private: false,
  slides: [
    // Opening
    TitleSlide,
    BridgeSlide,
    CraftScaledSlide,

    // The question sequence
    ScorekeeperScaleSlide,
    WhatIfEveryBillSlide,
    WhatIfEverySeriesSlide,
    CrossScaleSlide,
    ScaleAccuracySlide,
    HowWeGetThereSlide,
    PolicyBenchSlide,

    // The spine: what do we arm the AI with?
    FivePrimitivesSlide,
    HistorySlide,
    OutlineSlide,

    // 1 — Axiom (the rules)
    AxiomDividerSlide,
    BridgeToEvolutionSlide,
    Evo1SinglePromptSlide,
    Evo2PipelineSlide,
    Evo3ParallelSlide,
    Evo4ValidationSlide,
    Evo5SkillsSlide,
    Evo6FullWorkflowSlide,
    AxiomIntroSlide,
    DemoAxiomLiveSlide,
    DemoAxiomBrowseSlide,
    DemoAxiomProvisionSlide,
    DemoAxiomGraphSlide,
    DemoAxiomValidationSlide,
    AxiomCliffLiveSlide,
    AxiomCliffStaticSlide,
    AxiomChatbotLiveSlide,
    AxiomChatbotStaticSlide,
    BelgiumParitySlide,
    CertificationLadderSlide,

    // 2 — Chronicle (official statistics)
    ChronicleDividerSlide,
    ChronicleSlide,
    ChronicleLiveSlide,
    ChronicleTargetsStaticSlide,

    // 3 — Microcosm (the world at micro level)
    MicrocosmDividerSlide,
    DataChallengeSlide,
    ImputationSlide,
    CalibrationSlide,
    DistrictCalibrationMapSlide,
    MicrocosmBESlide,
    DemoDashboardLiveSlide,
    MicrocosmDashboardSlide,

    // 4 — PolicyEngine (the model)
    EngineDividerSlide,
    PEOverviewSlide,
    WhoUsesItSlide,
    CliffWatchLiveSlide,
    ObbbaExplorerLiveSlide,
    DemoPeBeLiveSlide,
    DemoPeBeSlide,
    DemoPySlide,

    // 5 — Together
    TogetherDividerSlide,
    ConductorsSlide,
    ClosingLoopSlide,
    ThesisForecastLiveSlide,
    ThesisSpmStaticSlide,
    ThesisLiveSlide,
    ThesisBillsStaticSlide,
    StackRecapSlide,
    HarnessRecapSlide,
    BaselineForecastSlide,
    ForecastUncertaintySlide,
    CommunityClosingSlide,
    QuestionsSlide,
  ],
};
