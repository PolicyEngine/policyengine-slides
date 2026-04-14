import { SlideshowConfig } from '@/lib/types';
import { speakers } from '@/lib/speakers';
import TitleSlide from './slides/TitleSlide';
import ThesisSlide from './slides/ThesisSlide';
import WhatWeDoSlide from '../cio4good-workshop/slides/WhatWeDoSlide';
import AIEvolutionSlide from '../cio4good-panel/slides/AIEvolutionSlide';
import CaseStudySlide from '../cio4good-panel/slides/CaseStudySlide';
import FoundationsSlide from './slides/FoundationsSlide';
import OperatingModelSlide from './slides/OperatingModelSlide';
import GovernanceShiftSlide from '../cio4good-panel/slides/GovernanceShiftSlide';
import StatuteToggleSlide from '../cio4good-panel/slides/StatuteToggleSlide';
import OutcomesSlide from './slides/OutcomesSlide';
import StartHereSlide from './slides/StartHereSlide';

export const cio4goodTalkConfig: SlideshowConfig = {
  id: 'cio4good-talk',
  title: 'Making organizations legible to AI',
  description: 'CIO4Good panel talk — from legislative text to runnable analysis',
  date: 'April 14, 2026',
  location: 'CIO4Good Panel',
  speakers: [speakers['max-ghenis']],
  slides: [
    TitleSlide,           // 1. Title
    ThesisSlide,          // 2. "Think about why you chose your org..."
    WhatWeDoSlide,        // 3. PolicyEngine in 30 seconds + screenshot
    AIEvolutionSlide,     // 4. Three stages: AI for dev → AI in products → building for AIs
    CaseStudySlide,       // 5. No. 10 Downing Street + AI shift
    FoundationsSlide,     // 6. What AI needed from the org
    OperatingModelSlide,  // 7. Governance + builder loop + adoption
    GovernanceShiftSlide, // 8. Mission governance + Axiom
    StatuteToggleSlide,   // 9. Same law, two representations (toggle)
    OutcomesSlide,        // 10. Internal capacity + mission delivery
    StartHereSlide,       // 11. Pick one bottleneck, make it legible, give it an owner
  ],
};
