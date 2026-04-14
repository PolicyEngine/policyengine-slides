import { SlideshowConfig } from '@/lib/types';
import { speakers } from '@/lib/speakers';
import TitleSlide from './slides/TitleSlide';
import ThesisSlide from './slides/ThesisSlide';
import AIEvolutionSlide from '../cio4good-panel/slides/AIEvolutionSlide';
import CaseStudySlide from '../cio4good-panel/slides/CaseStudySlide';
import FoundationsSlide from './slides/FoundationsSlide';
import OperatingModelSlide from './slides/OperatingModelSlide';
import GovernanceShiftSlide from '../cio4good-panel/slides/GovernanceShiftSlide';
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
    TitleSlide,        // 1. Title
    ThesisSlide,       // 2. "Think about why you chose your org..."
    AIEvolutionSlide,  // 3. Three stages: AI for dev → AI in products → building for AIs
    CaseStudySlide,    // 4. No. 10 Downing Street
    FoundationsSlide,  // 5. What AI needed from the org
    OperatingModelSlide, // 6. Governance + builder loop + adoption
    GovernanceShiftSlide, // 7. Mission governance + Axiom example
    OutcomesSlide,     // 8. Internal capacity + mission delivery
    StartHereSlide,    // 9. Pick one bottleneck, make it legible, give it an owner
  ],
};
