import { SlideshowConfig } from '@/lib/types';
import { speakers } from '@/lib/speakers';
import {
  TitleSlide,
  AudienceSlide,
  NarrativeSlide,
  DuplicationSlide,
  ArchitectureSlide,
  CapabilitiesSlide,
  ModelScopeSlide,
  AgentWorkflowSlide,
  CredibilityLayerSlide,
  ScaleSlide,
  EcosystemLoopSlide,
  DemoPathSlide,
  PartnerHandoffSlide,
} from './slides';

export const codeForAmerica2026Config: SlideshowConfig = {
  id: 'code-for-america-2026',
  title: "PolicyEngine's Open-Source Ecosystem",
  description:
    'From policy design to benefit access: shared rules infrastructure powering measurement, navigation, and screening.',
  date: '2026-05-08',
  location: 'Code for America Summit',
  footerText: 'PolicyEngine - Code for America Summit - May 8, 2026',
  speakers: [
    {
      ...speakers['max-ghenis'],
      title: 'Co-founder and CEO',
    },
  ],
  slides: [
    TitleSlide,
    AudienceSlide,
    NarrativeSlide,
    DuplicationSlide,
    ArchitectureSlide,
    CapabilitiesSlide,
    ModelScopeSlide,
    AgentWorkflowSlide,
    CredibilityLayerSlide,
    ScaleSlide,
    EcosystemLoopSlide,
    DemoPathSlide,
    PartnerHandoffSlide,
  ],
};
