import { SlideshowConfig } from '@/lib/types';
import { speakers } from '@/lib/speakers';
import TitleSlide from './slides/TitleSlide';
import ThesisSlide from './slides/ThesisSlide';
import WhatWeDoSlide from '../cio4good-workshop/slides/WhatWeDoSlide';
import AIEvolutionSlide from '../cio4good-panel/slides/AIEvolutionSlide';
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
    FoundationsSlide,     // 5. Open everything, require tools, build the harness
    OperatingModelSlide,  // 6. If I were a CIO
    GovernanceShiftSlide, // 7. Two missions — Axiom
    StatuteToggleSlide,   // 8. Same law, two representations (toggle)
    OutcomesSlide,        // 9. What changes about the people
    StartHereSlide,       // 10. Closer — callback to thesis
  ],
};
