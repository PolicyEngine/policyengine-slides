import { SlideshowConfig } from '@/lib/types';
import { speakers } from '@/lib/speakers';
import CoverSlide from './slides/CoverSlide';
import StatusSlide from './slides/StatusSlide';
import PlanRulesSlide from './slides/PlanRulesSlide';
import PaymentCurvesSlide from './slides/PaymentCurvesSlide';
import SaveMinusRapSlide from './slides/SaveMinusRapSlide';
import BracketJumpsSlide from './slides/BracketJumpsSlide';
import FloorSlide from './slides/FloorSlide';
import MarriageSlide from './slides/MarriageSlide';
import ScfProfileSlide from './slides/ScfProfileSlide';
import QuestionsSlide from './slides/QuestionsSlide';
import NextStepsSlide from './slides/NextStepsSlide';
import EndSlide from './slides/EndSlide';

/**
 * Pre-read for an October 7, 2026 check-in on the student debt pilot. Every
 * chart reads outputs of the pilot's prelim/2026-10-07 scripts (household_charts.py rerun on
 * policyengine-us student-loan-ibr-save @ ec7214d2; scf_borrower_profile.py),
 * exported to ./data. Nothing in the deck computes a payment itself.
 */
export const studentDebt2026Config: SlideshowConfig = {
  id: 'student-debt-2026',
  title: 'Student debt in PolicyEngine: preliminary results',
  description: 'Preliminary household results and a borrower profile for a student debt pilot: the Repayment Assistance Plan against IBR, SAVE and the standard plan.',
  date: '2026-10-07',
  location: 'Check-in',
  footerText: 'Student debt in PolicyEngine · preliminary',
  speakers: [
    { ...speakers['max-ghenis'], title: 'CEO, PolicyEngine' },
    { ...speakers['david-trimmer'], title: 'Research Analyst, PolicyEngine' },
  ],
  slides: [
    CoverSlide,
    StatusSlide,
    PlanRulesSlide,
    PaymentCurvesSlide,
    SaveMinusRapSlide,
    BracketJumpsSlide,
    FloorSlide,
    MarriageSlide,
    ScfProfileSlide,
    QuestionsSlide,
    NextStepsSlide,
    EndSlide,
  ],
};
