import { SlideshowConfig } from '@/lib/types';

// Max block 1: context and early wins (after Brian's LLM intuition)
import CoverSlide from './slides/CoverSlide';
import EarlyWinsSlide from './slides/EarlyWinsSlide';
import BridgeSlide from './slides/BridgeSlide';

// Max block 2: encoding evolution (after Brian's agents/skills concepts + DAAF)
import ScaleChallengeSlide from '../ai-webinar/slides/ScaleChallengeSlide';
import SolutionOverviewSlide from '../ai-webinar/slides/SolutionOverviewSlide';
import Evo1SinglePromptSlide from '../ai-webinar/slides/Evo1SinglePromptSlide';
import Evo2PipelineSlide from '../ai-webinar/slides/Evo2PipelineSlide';
import Evo3ParallelSlide from '../ai-webinar/slides/Evo3ParallelSlide';
import Evo4ValidationSlide from '../ai-webinar/slides/Evo4ValidationSlide';
import Evo5SkillsSlide from '../ai-webinar/slides/Evo5SkillsSlide';
import Evo6FullWorkflowSlide from '../ai-webinar/slides/Evo6FullWorkflowSlide';
import ResultsSlide from '../ai-webinar/slides/ResultsSlide';

// Skills setup → table exercise
import SkillsSlide from './slides/SkillsSlide';

// Post-exercise: strategic implications (Max + Brian, Section 6)
import StrategicImplicationsSlide from './slides/StrategicImplicationsSlide';
import AxiomSlide from './slides/AxiomSlide';
import PolicyBenchSlide from './slides/PolicyBenchSlide';
import TeamImpactSlide from './slides/TeamImpactSlide';
import LessonsSlide from './slides/LessonsSlide';
import EndSlide from './slides/EndSlide';

export const cio4goodWorkshopConfig: SlideshowConfig = {
  id: 'cio4good-workshop',
  title: 'PolicyEngine: from simple wins to strategic implications',
  description:
    'Workshop support deck — early wins, Evo1-Evo6 encoding journey, skills exercise, strategic implications',
  date: 'April 2026',
  location: 'CIO4Good Summit Workshop',
  slides: [
    // --- Max block 1 (after Brian's LLM intro) ---
    CoverSlide,           // 1. Mission hook
    EarlyWinsSlide,       // 2. GPT-4 research reports, household explainer
    BridgeSlide,          // 3. Where one-prompt broke down

    // --- Max block 2 (after Brian's agents/DAAF) ---
    ScaleChallengeSlide,  // 4. The manual process problem
    SolutionOverviewSlide,// 5. /encode-policy terminal
    Evo1SinglePromptSlide,// 6. Single prompt, 70% errors
    Evo2PipelineSlide,    // 7. 4-agent pipeline
    Evo3ParallelSlide,    // 8. Parallel, 40% errors
    Evo4ValidationSlide,  // 9. Validation loop, 8 agents
    Evo5SkillsSlide,      // 10. Modular skills, 15% errors
    Evo6FullWorkflowSlide,// 11. Full workflow, 12 agents, 90 min
    ResultsSlide,         // 12. Results: 90 min, 45+ programs

    // --- Skills setup → TABLE EXERCISE ---
    SkillsSlide,          // 13. Skills for CIOs + "(yours?)" prompt

    // --- Post-exercise: strategic implications (Max + Brian) ---
    StrategicImplicationsSlide, // 14. Panel callback + 3 questions
    AxiomSlide,           // 15. AI changed the size of the mission
    PolicyBenchSlide,     // 16. What AI can't do alone
    TeamImpactSlide,      // 17. Budget, performance reviews, divergence
    LessonsSlide,         // 18. 4 takeaways
    EndSlide,             // 19. Close
  ],
};
