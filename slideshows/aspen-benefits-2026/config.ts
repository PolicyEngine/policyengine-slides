import { SlideshowConfig } from "@/lib/types";
import { speakers } from "@/lib/speakers";
import CoverSlide from "./slides/CoverSlide";
import {
  TodayDividerSlide,
  DeterministicDividerSlide,
  PredictiveDividerSlide,
} from "./slides/SectionDividers";
import MetrSlide from "./slides/MetrSlide";
import AIUsageSlide from "./slides/AIUsageSlide";
import PolicyBenchEmbedSlide from "./slides/PolicyBenchEmbedSlide";
import LeverageSlide from "./slides/LeverageSlide";
import PolicyEngineSlide from "./slides/PolicyEngineSlide";
import TwoQuestionsSlide from "./slides/TwoQuestionsSlide";
import UsersBucketedSlide from "./slides/UsersBucketedSlide";
import CliffWatchSlide from "./slides/CliffWatchSlide";
import ObbbaExplorerSlide from "./slides/ObbbaExplorerSlide";
import ClaudePluginSlide from "./slides/ClaudePluginSlide";
import HowMuchLawSlide from "./slides/HowMuchLawSlide";
import AxiomIntroSlide from "./slides/AxiomIntroSlide";
import AxiomDemoSlide from "./slides/AxiomDemoSlide";
import ThinkBiggerSlide from "./slides/ThinkBiggerSlide";
import ThesisCounterfactualSlide from "./slides/ThesisCounterfactualSlide";
import EndStateDeterministicSlide from "./slides/EndStateDeterministicSlide";
import EndStatePredictiveSlide from "./slides/EndStatePredictiveSlide";
import EndSlide from "./slides/EndSlide";

export const aspenBenefits2026Config: SlideshowConfig = {
  id: "aspen-benefits-2026",
  title: "Policy analysis in the age of AI",
  description:
    "AI does exponentially longer work but still misses on taxes and benefits. PolicyEngine splits policy analysis in two — what the law is, and what a change does — scaled by agents: Axiom and Thesis.",
  date: "2026-06-22",
  location: "Aspen Benefits Leadership Forum, Chicago",
  footerText: "Aspen Benefits Leadership Forum · June 2026",
  speakers: [
    {
      ...speakers["max-ghenis"],
      title: "Co-founder and CEO",
    },
  ],
  slides: [
    CoverSlide, // 1. Policy analysis in the age of AI
    MetrSlide, // 2. AI can do exponentially longer work — design for the slope
    AIUsageSlide, // 3. And usage is exploding — what people ask AI about
    PolicyBenchEmbedSlide, // 4. But on taxes and benefits, the best model misses
    LeverageSlide, // 5. Our response: use AI to make AI better at policy
    TodayDividerSlide, // 6. SECTION — Policy analysis today
    PolicyEngineSlide, // 7. PolicyEngine (live) — open tool for anyone; building for people enables agents
    TwoQuestionsSlide, // 8. Two questions: what is the law vs what a change does
    UsersBucketedSlide, // 9. Organizations use PolicyEngine for both deterministic and predictive analysis
    CliffWatchSlide, // 10. determinism today: where benefits cliff
    ObbbaExplorerSlide, // 11. prediction today: who wins/loses under a law
    ClaudePluginSlide, // 12. The turn — analysis by anyone, via agents
    DeterministicDividerSlide, // 13. SECTION — A future for deterministic policy analysis (rules as code)
    HowMuchLawSlide, // 14. More law than any team can hand-encode → Axiom
    AxiomIntroSlide, // 15. Axiom — start from the statute (+ Ariel handoff)
    AxiomDemoSlide, // 16. LIVE — Axiom rule graph
    PredictiveDividerSlide, // 17. SECTION — A future for predictive policy analysis
    ThinkBiggerSlide, // 18. Think bigger than the budget line → Thesis
    ThesisCounterfactualSlide, // 19. LIVE — Thesis Medicaid counterfactual
    EndStateDeterministicSlide, // 20. End state, determinism: all policy computable + the room's context
    EndStatePredictiveSlide, // 21. End state, prediction: experience effects -> immersive storytelling
    EndSlide, // 22. Close — Peter Gabel quote + the METR slope
  ],
};
