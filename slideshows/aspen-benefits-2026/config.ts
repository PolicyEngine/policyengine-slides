import { SlideshowConfig } from "@/lib/types";
import { speakers } from "@/lib/speakers";
import CoverSlide from "./slides/CoverSlide";
import ShiftSlide from "./slides/ShiftSlide";
import AudiencesSlide from "./slides/AudiencesSlide";
import CliffWatchSlide from "./slides/CliffWatchSlide";
import ObbbaExplorerSlide from "./slides/ObbbaExplorerSlide";
import PolicyBenchEmbedSlide from "./slides/PolicyBenchEmbedSlide";
import PrincipleSlide from "./slides/PrincipleSlide";
import TriadSlide from "./slides/TriadSlide";
import AxiomDemoSlide from "./slides/AxiomDemoSlide";
import ThesisDemoSlide from "./slides/ThesisDemoSlide";
import ThesisCounterfactualSlide from "./slides/ThesisCounterfactualSlide";
import RoomSlide from "./slides/RoomSlide";
import WhatTheRoomProducesSlide from "./slides/WhatTheRoomProducesSlide";
import EndSlide from "./slides/EndSlide";

export const aspenBenefits2026Config: SlideshowConfig = {
  id: "aspen-benefits-2026",
  title: "Policy analysis in the age of AI",
  description:
    "A lightning talk for the Aspen Benefits Leadership Forum: AI makes policy analysis abundant, households and the policy community already ask it about benefits, and it's only as accurate as what we ground it in. Live demos of PolicyEngine (CliffWatch, OBBBA), PolicyBench, Axiom, and Thesis — and a call on the corpora this room produces.",
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
    ShiftSlide, // 2. We can just do things now
    AudiencesSlide, // 3. Households + the policy community already ask AI
    CliffWatchSlide, // 4. LIVE — where benefits cliff (the household question)
    ObbbaExplorerSlide, // 5. LIVE — who wins/loses under a real law (the policy question)
    PolicyBenchEmbedSlide, // 6. LIVE — ask a model unaided, and it misses
    PrincipleSlide, // 7. The fix: ground the agent
    TriadSlide, // 8. PolicyEngine plugin + Axiom + Thesis
    AxiomDemoSlide, // 9. LIVE — Axiom rule graph (determinism)
    ThesisDemoSlide, // 10. LIVE — Thesis forecast (prediction)
    ThesisCounterfactualSlide, // 11. LIVE — Thesis counterfactual (Medicaid work req)
    RoomSlide, // 12. Pivot — most sources of truth are in this room
    WhatTheRoomProducesSlide, // 13. What the room produces that can ground agents
    EndSlide, // 14. Close
  ],
};
