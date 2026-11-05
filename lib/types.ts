import { ComponentType } from 'react';

export interface SpeakerInfo {
  name: string;
  title: string;
  photo: string;
}

/**
 * Format an ISO date string (YYYY-MM-DD) for display.
 * Returns e.g. "February 21, 2026" or "February 2026" if day is 01.
 */
export function formatDate(iso: string): string {
  const [year, month, day] = iso.split('-').map(Number);
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const monthName = monthNames[month - 1] ?? '';
  if (day === 1) return `${monthName} ${year}`;
  return `${monthName} ${day}, ${year}`;
}

export interface SlideEntry {
  component: ComponentType<{ buildStep?: number }>;
  builds?: number;
  /** Steps in a PDF export, when a later step only works live, such as a video. Defaults to `builds`. */
  exportBuilds?: number;
}

export type SlideConfig = ComponentType | SlideEntry;

export interface SlideshowConfig {
  id: string;
  title: string;
  description: string;
  date: string;
  location?: string;
  footerText?: string;
  /** Optional co-brand wordmark shown next to the PolicyEngine logo in the footer. */
  partnerLogo?: { src: string; alt: string };
  speakers?: SpeakerInfo[];
  private?: boolean;
  /** Move the deck on PageDown and PageUp, which presentation clickers send. Leave it off for a deck with a region that scrolls. */
  clickerKeys?: boolean;
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

export function getSlideBuilds(
  slide: SlideConfig,
  { exportMode = false }: { exportMode?: boolean } = {},
): number {
  if (!isSlideEntry(slide)) return 1;
  const builds = slide.builds ?? 1;
  return exportMode ? (slide.exportBuilds ?? builds) : builds;
}

export function flattenSlides(
  slides: SlideConfig[],
  options: { exportMode?: boolean } = {},
): { slideIndex: number; buildStep: number }[] {
  const steps: { slideIndex: number; buildStep: number }[] = [];
  slides.forEach((slide, i) => {
    const builds = getSlideBuilds(slide, options);
    for (let b = 1; b <= builds; b++) {
      steps.push({ slideIndex: i, buildStep: b });
    }
  });
  return steps;
}
