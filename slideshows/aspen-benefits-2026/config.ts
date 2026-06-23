import { SlideshowConfig } from "@/lib/types";
import { speakers } from "@/lib/speakers";
import CoverSlide from "./slides/CoverSlide";
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
    PolicyEngineSlide, // 6. PolicyEngine (live) — open tool for anyone; building for people enables agents
    TwoQuestionsSlide, // 7. Two questions: what is the law vs what a change does
    UsersBucketedSlide, // 8. Who builds on us, split the same way
    CliffWatchSlide, // 9. Act 1 — determinism today: where benefits cliff
    ObbbaExplorerSlide, // 10. Act 1 — prediction today: who wins/loses under a law
    ClaudePluginSlide, // 11. The turn — analysis by anyone, via agents
    HowMuchLawSlide, // 12. More law than any team can hand-encode → Axiom
    AxiomIntroSlide, // 13. Axiom — start from the statute (+ Ariel handoff)
    AxiomDemoSlide, // 14. LIVE — Axiom rule graph
    ThinkBiggerSlide, // 15. Think bigger than the budget line → Thesis
    ThesisCounterfactualSlide, // 16. LIVE — Thesis Medicaid counterfactual
    EndStateDeterministicSlide, // 17. End state, determinism: all policy computable + the room's context
    EndStatePredictiveSlide, // 18. End state, prediction: experience effects -> immersive storytelling
    EndSlide, // 19. Close — building for what will be
  ],
};
