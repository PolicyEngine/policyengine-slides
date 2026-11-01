import { SlideshowConfig } from '@/lib/types';
import { speakers } from '@/lib/speakers';
import AxiomSlide from './slides/AxiomSlide';
import CliffsSlide from './slides/CliffsSlide';
import CoverSlide from './slides/CoverSlide';
import EndSlide from './slides/EndSlide';
import MicrodataSlide from './slides/MicrodataSlide';
import OneFamilySlide from './slides/OneFamilySlide';
import ParametersSlide from './slides/ParametersSlide';
import ScopeSlide from './slides/ScopeSlide';
import ToolsSlide from './slides/ToolsSlide';
import WhatItDoesSlide from './slides/WhatItDoesSlide';
import WhichLinesSlide from './slides/WhichLinesSlide';

export const appam2026Config: SlideshowConfig = {
  id: 'appam-2026',
  title: 'PolicyEngine for state policy research',
  description:
    'Max Ghenis on the APPAM 2026 roundtable "State Policy Impacts on Family Resources: Tools to Improve Policy Analysis".',
  date: '2026-11-05',
  location: 'APPAM 2026, Boston',
  footerText: 'PolicyEngine for state policy research · APPAM · November 5, 2026',
  speakers: [speakers['max-ghenis']],
  slides: [
    CoverSlide,
    WhatItDoesSlide,
    OneFamilySlide,
    WhichLinesSlide,
    CliffsSlide,
    ParametersSlide,
    MicrodataSlide,
    ToolsSlide,
    ScopeSlide,
    AxiomSlide,
    EndSlide,
  ],
};
