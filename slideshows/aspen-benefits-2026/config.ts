import { SlideshowConfig } from "@/lib/types";
import { speakers } from "@/lib/speakers";
import CoverSlide from "./slides/CoverSlide";
import MetrSlide from "./slides/MetrSlide";
import PolicyBenchEmbedSlide from "./slides/PolicyBenchEmbedSlide";
import OpenSourceCboSlide from "./slides/OpenSourceCboSlide";
import TwoQuestionsSlide from "./slides/TwoQuestionsSlide";
import UsersBucketedSlide from "./slides/UsersBucketedSlide";
import CliffWatchSlide from "./slides/CliffWatchSlide";
import ObbbaExplorerSlide from "./slides/ObbbaExplorerSlide";
import ClaudePluginSlide from "./slides/ClaudePluginSlide";
import ClaudeComparisonSlide from "./slides/ClaudeComparisonSlide";
import HowMuchLawSlide from "./slides/HowMuchLawSlide";
import AxiomIntroSlide from "./slides/AxiomIntroSlide";
import AxiomDemoSlide from "./slides/AxiomDemoSlide";
import ThinkBiggerSlide from "./slides/ThinkBiggerSlide";
import ThesisCounterfactualSlide from "./slides/ThesisCounterfactualSlide";
import TwoTrajectoriesSlide from "./slides/TwoTrajectoriesSlide";
import WhatTheRoomProducesSlide from "./slides/WhatTheRoomProducesSlide";
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
    PolicyBenchEmbedSlide, // 3. But on taxes and benefits, the best model misses
    OpenSourceCboSlide, // 4. Where we come at this from — the open-source CBO
    TwoQuestionsSlide, // 5. Two questions: what is the law vs what a change does
    UsersBucketedSlide, // 6. Who builds on us, split the same way
    CliffWatchSlide, // 7. Act 1 — determinism today: where benefits cliff
    ObbbaExplorerSlide, // 8. Act 1 — prediction today: who wins/loses under a law
    ClaudePluginSlide, // 9. The turn — analysis by anyone, via agents
    ClaudeComparisonSlide, // 10. Same prompt, with/without the model
    HowMuchLawSlide, // 11. More law than any team can hand-encode → Axiom
    AxiomIntroSlide, // 12. Axiom — start from the statute (+ Ariel handoff)
    AxiomDemoSlide, // 13. LIVE — Axiom rule graph
    ThinkBiggerSlide, // 14. Think bigger than the budget line → Thesis
    ThesisCounterfactualSlide, // 15. LIVE — Thesis Medicaid counterfactual
    TwoTrajectoriesSlide, // 16. Two trajectories: Axiom (the law) + Thesis (outcomes)
    WhatTheRoomProducesSlide, // 17. Your expertise grounds the agents
    EndSlide, // 18. Close
  ],
};
