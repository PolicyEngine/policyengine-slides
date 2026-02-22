import { SlideshowConfig, SlideshowMetadata, flattenSlides } from './types';
import { aiWebinarConfig } from '@/slideshows/ai-webinar/config';

export const slideshows: SlideshowConfig[] = [
  aiWebinarConfig,
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
