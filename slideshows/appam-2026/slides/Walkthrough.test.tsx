import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { getAllSlideshowMetadata } from '@/lib/slideshows';
import { flattenSlides } from '@/lib/types';
import { appam2026Config } from '../config';
import WebAppsSlide from './WebAppsSlide';

const WEB_APPS = appam2026Config.slides.findIndex(
  (slide) => typeof slide === 'object' && slide.component === WebAppsSlide,
);

let container: HTMLDivElement;
let root: Root;
let paused: boolean;
let play: ReturnType<typeof vi.fn>;
let pause: ReturnType<typeof vi.fn>;

const video = () => container.querySelector('video');
const shown = () => video()!.parentElement!.style.visibility === 'visible';

async function renderStep(buildStep?: number) {
  await act(async () => {
    root.render(<WebAppsSlide buildStep={buildStep} />);
  });
}

async function fire(type: string) {
  await act(async () => {
    video()!.dispatchEvent(new Event(type));
  });
}

beforeEach(() => {
  (globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;
  window.history.replaceState(null, '', '/slides/appam-2026');
  paused = true;
  play = vi.fn(async () => {
    paused = false;
  });
  pause = vi.fn(() => {
    paused = true;
  });
  vi.spyOn(HTMLMediaElement.prototype, 'play').mockImplementation(play as () => Promise<void>);
  vi.spyOn(HTMLMediaElement.prototype, 'pause').mockImplementation(pause as () => void);
  vi.spyOn(HTMLMediaElement.prototype, 'paused', 'get').mockImplementation(() => paused);
  container = document.createElement('div');
  document.body.appendChild(container);
  root = createRoot(container);
});

afterEach(async () => {
  await act(async () => root.unmount());
  container.remove();
  vi.restoreAllMocks();
});

describe('slide 9 steps', () => {
  it('takes one step in a PDF export and two live', () => {
    const steps = (exportMode: boolean) =>
      flattenSlides(appam2026Config.slides, { exportMode }).filter((step) => step.slideIndex === WEB_APPS);
    expect(WEB_APPS).toBe(8);
    expect(steps(true).map((step) => step.buildStep)).toEqual([1]);
    expect(steps(false).map((step) => step.buildStep)).toEqual([1, 2]);
    expect(flattenSlides(appam2026Config.slides, { exportMode: true })).toHaveLength(appam2026Config.slides.length);
  });

  it('counts 13 slides on the index page', () => {
    const deck = getAllSlideshowMetadata().find((meta) => meta.id === appam2026Config.id);
    expect(deck?.slideCount).toBe(13);
  });
});

describe('Walkthrough', () => {
  it('loads a silent video behind the screenshots before the talk reaches it', async () => {
    await renderStep(undefined);
    expect(video()!.getAttribute('src')).toMatch(/\/videos\/appam-2026\/walkthrough\.mp4$/);
    expect(video()!.getAttribute('preload')).toBe('auto');
    expect(video()!.muted).toBe(true);
    expect(video()!.hasAttribute('controls')).toBe(false);
    expect(video()!.loop).toBe(false);
    expect(shown()).toBe(false);
    expect(play).not.toHaveBeenCalled();
  });

  it('stays on the screenshots on the first step', async () => {
    await renderStep(1);
    expect(shown()).toBe(false);
    expect(play).not.toHaveBeenCalled();
  });

  it('plays on the second step and shows once a frame plays', async () => {
    await renderStep(1);
    await renderStep(2);
    expect(play).toHaveBeenCalledTimes(1);
    expect(shown()).toBe(false);
    await fire('playing');
    expect(shown()).toBe(true);
  });

  it('holds the last frame when the video ends', async () => {
    await renderStep(2);
    await fire('playing');
    paused = true;
    await fire('pause');
    await fire('ended');
    expect(shown()).toBe(true);
  });

  it('keeps the screenshots when the file fails to load', async () => {
    await renderStep(2);
    await fire('error');
    expect(shown()).toBe(false);
  });

  it('goes back to the screenshots if the file fails mid-play', async () => {
    await renderStep(2);
    await fire('playing');
    await fire('error');
    expect(shown()).toBe(false);
  });

  it('keeps the screenshots when the browser refuses to play', async () => {
    let handled: ReturnType<typeof vi.spyOn> | undefined;
    play.mockImplementationOnce(() => {
      const refused = Promise.reject(new Error('NotAllowedError'));
      handled = vi.spyOn(refused, 'catch');
      return refused;
    });
    await renderStep(2);
    expect(handled).toHaveBeenCalledTimes(1);
    expect(shown()).toBe(false);
  });

  it('pauses and hides when the step changes', async () => {
    await renderStep(2);
    await fire('playing');
    await renderStep(1);
    expect(pause).toHaveBeenCalledTimes(1);
    expect(shown()).toBe(false);
  });

  it('stays hidden if a playing event arrives after the step changes', async () => {
    await renderStep(2);
    await renderStep(1);
    await fire('playing');
    expect(shown()).toBe(false);
  });

  it('starts from the beginning on a return to the step', async () => {
    await renderStep(2);
    await fire('playing');
    await renderStep(1);
    video()!.currentTime = 20;
    await renderStep(2);
    expect(video()!.currentTime).toBe(0);
    expect(play).toHaveBeenCalledTimes(2);
    expect(shown()).toBe(false);
  });

  it('never loads in a PDF export', async () => {
    window.history.replaceState(null, '', '/slides/appam-2026?slide=8&export=1');
    await renderStep(1);
    expect(video()).toBeNull();
    expect(play).not.toHaveBeenCalled();
    const images = [...container.querySelectorAll('img')].map((image) => image.getAttribute('alt'));
    expect(images.filter((alt) => /^(CliffWatch|Build)’s /.test(alt ?? ''))).toHaveLength(2);
  });
});
