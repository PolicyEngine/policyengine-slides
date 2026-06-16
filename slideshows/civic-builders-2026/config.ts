import { SlideshowConfig } from '@/lib/types';
import { speakers } from '@/lib/speakers';
import CoverSlide from './slides/CoverSlide';
import ProblemSlide from './slides/ProblemSlide';
import WhatIsPESlide from './slides/WhatIsPESlide';
import AskAISlide from './slides/AskAISlide';
import AxiomSlide from './slides/AxiomSlide';
import StatuteToggleSlide from '../cio4good-panel/slides/StatuteToggleSlide';
import StackTeaseSlide from './slides/StackTeaseSlide';
import AsksSlide from './slides/AsksSlide';
import EndSlide from './slides/EndSlide';

export const civicBuilders2026Config: SlideshowConfig = {
  id: 'civic-builders-2026',
  title: 'The open engine for taxes and benefits',
  description:
    'A civic-tech demo: PolicyEngine computes taxes and benefits for any household and reform — built on open rules-as-code (Axiom) and open microdata.',
  date: '2026-06-17',
  location: 'Civic Builders Demo Night, Washington, DC',
  footerText: 'PolicyEngine · Civic Builders Demo Night · June 17, 2026',
  speakers: [
    {
      ...speakers['max-ghenis'],
      title: 'Co-founder and CEO',
    },
  ],
  slides: [
    CoverSlide, // 1. Cover
    ProblemSlide, // 2. The rules are public. Computing them isn't.
    WhatIsPESlide, // 3. What PolicyEngine is
    AskAISlide, // 4. Demo 1 — plain English → computed answer
    AxiomSlide, // 5. The same AI can encode the law itself (Axiom)
    StatuteToggleSlide, // 6. Demo 2 — statute ↔ .rac toggle (self-contained)
    StackTeaseSlide, // 7. Axiom + populace → PolicyEngine; something bigger
    AsksSlide, // 8. What I'm looking for tonight
    EndSlide, // 9. Thank you
  ],
};
