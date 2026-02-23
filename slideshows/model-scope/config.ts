import { SlideshowConfig } from '@/lib/types';
import { speakers } from '@/lib/speakers';
import ThreeIngredientsSlide from './slides/ThreeIngredientsSlide';
import GoogleSlidesEmbed from './slides/GoogleSlidesEmbed';
import PoliciesScopeSlide from './slides/PoliciesScopeSlide';
import FlowchartSlide from './slides/FlowchartSlide';
import DynamicsSlide from './slides/DynamicsSlide';
import DataMethodologySlide from './slides/DataMethodologySlide';

export const modelScopeConfig: SlideshowConfig = {
  id: 'model-scope',
  title: 'Scope of the model: policies, households, and dynamics',
  description: 'Overview of PolicyEngine microsimulation model structure and data',
  date: '2025-11-03',
  location: 'Central Hall Westminster, London',
  footerText: 'PolicyEngine UK Event \u00b7 November 3, 2025',
  speakers: [
    speakers['max-ghenis'],
    speakers['nikhil-woodruff'],
  ],
  slides: [
    ThreeIngredientsSlide,
    GoogleSlidesEmbed,
    PoliciesScopeSlide,
    FlowchartSlide,
    DynamicsSlide,
    DataMethodologySlide,
  ],
};
