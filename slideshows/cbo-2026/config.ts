import { SlideshowConfig } from '@/lib/types';
import { speakers } from '@/lib/speakers';
import TitleSlide from './slides/TitleSlide';
import OutlineSlide from './slides/OutlineSlide';
import CboScaleSlide from './slides/CboScaleSlide';
import ScaleOpportunitySlide from './slides/ScaleOpportunitySlide';
import EverySeriesForecastSlide from './slides/EverySeriesForecastSlide';
import CrossScaleSlide from './slides/CrossScaleSlide';
import ScaleAccuracySlide from './slides/ScaleAccuracySlide';
import HowWeGetThereSlide from './slides/HowWeGetThereSlide';
import ProjectionApparatusSlide from './slides/ProjectionApparatusSlide';
import {
  RulesDividerSlide,
  DataDividerSlide,
  TheoryDividerSlide,
  AnalysisDividerSlide,
} from './slides/SectionDivider';
// Rules section
import RulesScopeSlide from './slides/RulesScopeSlide';
import CliffWatchSlide from './slides/CliffWatchSlide';
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
import AxiomDemoSlide from './slides/AxiomDemoSlide';
// Data section
import DataChallengeSlide from './slides/DataChallengeSlide';
import ObbbaExplorerSlide from './slides/ObbbaExplorerSlide';
import ImputationSlide from './slides/ImputationSlide';
import CalibrationSlide from './slides/CalibrationSlide';
import MicroplexSlide from './slides/MicroplexSlide';
// Theory section
import TheoryApproachSlide from './slides/TheoryApproachSlide';
import LLMBeliefsSlide from './slides/LLMBeliefsSlide';
import LLMETISlide from './slides/LLMETISlide';
// Analysis section
import AnalysisLogosSlide from './slides/AnalysisLogosSlide';
import PolicyAnalysisSlide from './slides/PolicyAnalysisSlide';
import ClaudePluginSlide from './slides/ClaudePluginSlide';
import ClaudeComparisonSlide from './slides/ClaudeComparisonSlide';
import UKChatPrototypeSlide from './slides/UKChatPrototypeSlide';
import PredictAllSlide from './slides/PredictAllSlide';
import MarketsMockSlide from './slides/MarketsMockSlide';
import AIInequalitySlide from './slides/AIInequalitySlide';
import ClosingSlide from './slides/ClosingSlide';
// Existing slides — to be reworked into Theory / Analysis sections.
// Parked here so they are still reachable while the new content gets built.
import PEOverviewSlide from './slides/PEOverviewSlide';
import CoverageSlide from './slides/CoverageSlide';
import DataPipelineSlide from './slides/DataPipelineSlide';
import ValidationSlide from './slides/ValidationSlide';
import RulesAsCodeSlide from './slides/RulesAsCodeSlide';
import TANFExampleSlide from './slides/TANFExampleSlide';
import AIUsesTodaySlide from './slides/AIUsesTodaySlide';
import AITrajectorySlide from './slides/AITrajectorySlide';
import ParamVsModelSlide from './slides/ParamVsModelSlide';
import DebtGdpSlide from './slides/DebtGdpSlide';
import BacktestingSlide from './slides/BacktestingSlide';
import DifferentPiecesSlide from './slides/DifferentPiecesSlide';
import ConditionalForecastsSlide from './slides/ConditionalForecastsSlide';
import ConductorsSlide from './slides/ConductorsSlide';
import CommunityClosingSlide from './slides/CommunityClosingSlide';
import QuestionsSlide from './slides/QuestionsSlide';

export const cbo2026Config: SlideshowConfig = {
  id: 'cbo-2026',
  title: 'Model-building and AI',
  description:
    'Where AI is, where it is heading, and what it could mean for federal policy modeling',
  date: '2026-05-27',
  location: 'Congressional Budget Office',
  footerText: 'PolicyEngine · CBO · May 2026',
  speakers: [speakers['max-ghenis']],
  private: false,
  slides: [
    // Opening
    TitleSlide,
    OutlineSlide,
    CboScaleSlide,
    ScaleOpportunitySlide,
    EverySeriesForecastSlide,
    CrossScaleSlide,
    ScaleAccuracySlide,
    HowWeGetThereSlide,
    ProjectionApparatusSlide,

    // Section 1 — Rules
    RulesDividerSlide,
    RulesScopeSlide,
    CliffWatchSlide,
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
    AxiomDemoSlide,

    // Section 2 — Data
    DataDividerSlide,
    DataChallengeSlide,
    ObbbaExplorerSlide,
    ImputationSlide,
    CalibrationSlide,
    MicroplexSlide,

    // Section 3 — Theory
    TheoryDividerSlide,
    TheoryApproachSlide,
    LLMBeliefsSlide,
    LLMETISlide,

    // Section 4 — Analysis
    AnalysisDividerSlide,
    AnalysisLogosSlide,
    PolicyAnalysisSlide,
    ClaudePluginSlide,
    ClaudeComparisonSlide,
    UKChatPrototypeSlide,
    PredictAllSlide,
    MarketsMockSlide,
    AIInequalitySlide,
    ClosingSlide,

    QuestionsSlide,
  ],
};
