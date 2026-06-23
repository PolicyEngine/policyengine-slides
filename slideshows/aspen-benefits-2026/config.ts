import { SlideshowConfig } from "@/lib/types";
import { speakers } from "@/lib/speakers";
import CoverSlide from "./slides/CoverSlide";
import {
  TodayDividerSlide,
  DeterministicDividerSlide,
  PredictiveDividerSlide,
  PullingThePresentDividerSlide,
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
import FinbotSnapSlide from "./slides/FinbotSnapSlide";
import AxiomDemoShellSlide from "./slides/AxiomDemoShellSlide";
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
  partnerLogo: {
    src: "/logos/axiom-foundation-white.svg",
    alt: "Axiom Foundation",
  },
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
    TwoQuestionsSlide, // 7. Two questions: what is the law vs what a change does (general frame)
    PolicyEngineSlide, // 8. PolicyEngine (live) — open tool for anyone; building for people enables agents
    UsersBucketedSlide, // 9. Organizations use PolicyEngine for both deterministic and predictive analysis
    CliffWatchSlide, // 10. determinism today: where benefits cliff
    ObbbaExplorerSlide, // 11. prediction today: who wins/loses under a law
    ClaudePluginSlide, // 12. The turn — analysis by anyone, via agents
    DeterministicDividerSlide, // 13. SECTION — A future for deterministic policy analysis (rules as code)
    HowMuchLawSlide, // 14. More law than any team can hand-encode → Axiom
    AxiomIntroSlide, // 15. Axiom — start from the statute (+ Ariel handoff)
    AxiomDemoSlide, // 16. LIVE — Axiom rule graph
    FinbotSnapSlide, // 17. LIVE — grounded SNAP chatbot (boil it down to the right answer)
    AxiomDemoShellSlide, // 18. LIVE — Axiom demo shell: scope for the community / civic tech
    PredictiveDividerSlide, // 19. SECTION — A future for predictive policy analysis
    ThinkBiggerSlide, // 20. Think bigger than the budget line → Thesis
    ThesisCounterfactualSlide, // 21. LIVE — Thesis Medicaid counterfactual
    PullingThePresentDividerSlide, // 22. SECTION — Pulling the present (the synthesis / end states)
    EndStateDeterministicSlide, // 23. End state, determinism: all policy computable + the room's context
    EndStatePredictiveSlide, // 24. End state, prediction: experience effects -> immersive storytelling
    EndSlide, // 25. Close — Peter Gabel quote + the METR slope
  ],
};
