import { SlideshowConfig, SlideshowMetadata, flattenSlides } from './types';
import { aiWebinarConfig } from '@/slideshows/ai-webinar/config';
import { abundanceDmvConfig } from '@/slideshows/abundance-dmv/config';
import { vanderbilt2025Config } from '@/slideshows/vanderbilt-2025/config';
import { mnHouse2025Config } from '@/slideshows/mn-house-2025/config';
import { riCtcWebinarConfig } from '@/slideshows/ri-ctc-webinar/config';
import { modelScopeConfig } from '@/slideshows/model-scope/config';
import { georgetown2026Config } from '@/slideshows/georgetown-2026/config';
import { cio4goodPanelConfig } from '@/slideshows/cio4good-panel/config';
import { cio4goodTalkConfig } from '@/slideshows/cio4good-talk/config';
import { cio4goodWorkshopConfig } from '@/slideshows/cio4good-workshop/config';

export const slideshows: SlideshowConfig[] = [
  cio4goodWorkshopConfig,
  cio4goodPanelConfig,
  cio4goodTalkConfig,
  aiWebinarConfig,
  abundanceDmvConfig,
  vanderbilt2025Config,
  mnHouse2025Config,
  riCtcWebinarConfig,
  modelScopeConfig,
  georgetown2026Config,
];

export function getSlideshowById(id: string): SlideshowConfig | undefined {
  return slideshows.find(s => s.id === id);
}

export function getAllSlideshowMetadata(): SlideshowMetadata[] {
  return slideshows.map(s => ({
    id: s.id,
    title: s.title,
    description: s.description,
    date: s.date,
    location: s.location,
    speakers: s.speakers,
    private: s.private,
    slideCount: flattenSlides(s.slides).length,
  }));
}
