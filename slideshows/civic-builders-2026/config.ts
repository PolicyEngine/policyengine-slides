import { SlideshowConfig } from "@/lib/types";
import { speakers } from "@/lib/speakers";
import CoverSlide from "./slides/CoverSlide";
import ProblemSlide from "./slides/ProblemSlide";
import WhatIsPESlide from "./slides/WhatIsPESlide";
import CliffWatchSlide from "./slides/CliffWatchSlide";
import ObbbaExplorerSlide from "./slides/ObbbaExplorerSlide";
import RealizationSlide from "./slides/RealizationSlide";
import AxiomSlide from "./slides/AxiomSlide";
import AxiomDemoSlide from "./slides/AxiomDemoSlide";
import ThesisDemoSlide from "./slides/ThesisDemoSlide";
import StackSlide from "./slides/StackSlide";
import AsksSlide from "./slides/AsksSlide";
import EndSlide from "./slides/EndSlide";

export const civicBuilders2026Config: SlideshowConfig = {
  id: "civic-builders-2026",
  title: "The open engine for taxes and benefits",
  description:
    "A civic-tech demo: PolicyEngine computes taxes and benefits for any household and reform — and a look at the massively scalable digital public goods agents can now build (Axiom, populace, Thesis).",
  date: "2026-06-17",
  location: "Civic Builders Demo Night, Washington, DC",
  footerText: "PolicyEngine · Civic Builders Demo Night · June 17, 2026",
  speakers: [
    {
      ...speakers["max-ghenis"],
      title: "Co-founder and CEO",
    },
  ],
  slides: [
    CoverSlide, // 1. Cover
    ProblemSlide, // 2. The rules are public. Computing them isn't.
    WhatIsPESlide, // 3. What PolicyEngine is
    CliffWatchSlide, // 4. Live embed — benefit cliffs
    ObbbaExplorerSlide, // 5. Live embed — who wins/loses under a real law
    RealizationSlide, // 6. The turn — agents → scalable digital public goods
    AxiomSlide, // 7. Agents encode the world's rules (concept)
    AxiomDemoSlide, // 8. Live embed — Axiom
    ThesisDemoSlide, // 9. Live embed — Thesis forecast
    StackSlide, // 10. The stack + the pattern (Axiom · populace · Thesis)
    AsksSlide, // 11. What I'm looking for tonight
    EndSlide, // 12. Thank you
  ],
};
