import { SlideshowConfig } from '@/lib/types';
import { speakers } from '@/lib/speakers';
import AnswersSlide from './slides/AnswersSlide';
import AxiomSlide from './slides/AxiomSlide';
import CliffsSlide from './slides/CliffsSlide';
import CoverSlide from './slides/CoverSlide';
import DataSlide from './slides/DataSlide';
import EndSlide from './slides/EndSlide';
import EveryProgramSlide from './slides/EveryProgramSlide';
import InterfacesSlide from './slides/InterfacesSlide';
import OneFamilySlide from './slides/OneFamilySlide';
import ParametersSlide from './slides/ParametersSlide';
import QuestionSlide from './slides/QuestionSlide';
import ReformSlide from './slides/ReformSlide';
import RulesSlide from './slides/RulesSlide';
import WaterfallSlide from './slides/WaterfallSlide';
import WebAppsSlide from './slides/WebAppsSlide';
import WorkingOnSlide from './slides/WorkingOnSlide';

export const appam2026Config: SlideshowConfig = {
  id: 'appam-2026',
  title: 'PolicyEngine for state policy research',
  description:
    'Max Ghenis on the APPAM 2026 roundtable "State Policy Impacts on Family Resources: Tools to Improve Policy Analysis".',
  date: '2026-11-05',
  location: 'APPAM 2026, Boston',
  footerText: 'PolicyEngine for state policy research · APPAM · November 5, 2026',
  speakers: [speakers['max-ghenis']],
  clickerKeys: true,
  slides: [
    CoverSlide,
    QuestionSlide,
    { component: AnswersSlide, builds: 2, exportBuilds: 1 },
    EveryProgramSlide,
    WaterfallSlide,
    OneFamilySlide,
    CliffsSlide,
    ParametersSlide,
    ReformSlide,
    InterfacesSlide,
    { component: WebAppsSlide, builds: 2, exportBuilds: 1 },
    RulesSlide,
    DataSlide,
    WorkingOnSlide,
    AxiomSlide,
    EndSlide,
  ],
};
