import { ComponentType } from 'react';

export interface SpeakerInfo {
  name: string;
  title: string;
  photo: string;
}

export interface SlideEntry {
  component: ComponentType<{ buildStep?: number }>;
  builds?: number;
}

export type SlideConfig = ComponentType | SlideEntry;

export interface SlideshowConfig {
  id: string;
  title: string;
  description: string;
  date: string;
  location?: string;
  footerText?: string;
  speakers?: SpeakerInfo[];
  private?: boolean;
  slides: SlideConfig[];
}

export interface SlideshowMetadata {
  id: string;
  title: string;
  description: string;
  date: string;
  location?: string;
  speakers?: SpeakerInfo[];
  private?: boolean;
  slideCount: number;
}

export function isSlideEntry(slide: SlideConfig): slide is SlideEntry {
  return typeof slide === 'object' && 'component' in slide;
}

export function getSlideComponent(slide: SlideConfig): ComponentType<{ buildStep?: number }> {
  if (isSlideEntry(slide)) return slide.component;
  return slide as ComponentType<{ buildStep?: number }>;
}

export function getSlideBuilds(slide: SlideConfig): number {
  if (isSlideEntry(slide)) return slide.builds ?? 1;
  return 1;
}

export function flattenSlides(slides: SlideConfig[]): { slideIndex: number; buildStep: number }[] {
  const steps: { slideIndex: number; buildStep: number }[] = [];
  slides.forEach((slide, i) => {
    const builds = getSlideBuilds(slide);
    for (let b = 1; b <= builds; b++) {
      steps.push({ slideIndex: i, buildStep: b });
    }
  });
  return steps;
}
