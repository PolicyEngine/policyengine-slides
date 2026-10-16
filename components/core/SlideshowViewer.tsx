'use client';

import { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { SlideshowProvider, SlideshowContextValue } from './SlideshowContext';
import { SlideshowConfig, flattenSlides, getSlideComponent } from '@/lib/types';
import { buildSlideUrl, exportSettleMs, isExportMode, parseSlideParam } from '@/lib/slide-url';
import { MAX_SETTLE_MS, releaseExportHold } from '@/lib/export-hold';

interface SlideshowViewerProps {
  config: SlideshowConfig;
}

function SlideshowViewerClient({ config }: SlideshowViewerProps) {
  const searchParams = useSearchParams();
  const steps = useMemo(() => flattenSlides(config.slides), [config.slides]);
  const totalSteps = steps.length;
  const exportMode = isExportMode(searchParams);

  // Read the deep-link step once. After that, currentStep owns the URL: the
  // effect below writes it with replaceState, and Next mirrors that write back
  // into useSearchParams, so re-reading the param would undo navigation.
  const [currentStep, setCurrentStep] = useState(() =>
    parseSlideParam(searchParams.get('slide'), totalSteps),
  );
  const [mounted, setMounted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsFullscreen(!!document.fullscreenElement);

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  useEffect(() => {
    const url = buildSlideUrl(window.location.href, currentStep);
    window.history.replaceState(null, '', url);
  }, [currentStep, config.id]);

  // An export capture holds the page's load event open (lib/export-hold.ts).
  // Start its settle time once the slide is in the DOM.
  useEffect(() => {
    if (mounted && exportMode) {
      releaseExportHold(exportSettleMs(searchParams, MAX_SETTLE_MS));
    }
  }, [mounted, exportMode, searchParams]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentStep((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentStep(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentStep(totalSteps - 1);
      } else if (e.key === 'f' || e.key === 'F11') {
        e.preventDefault();
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen();
        } else {
          document.exitFullscreen();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalSteps]);

  const handleMainClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('.pointer-events-auto')) return;
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1));
  };

  const currentStepData = steps[currentStep];
  const footerText = config.footerText ?? `${config.id.replace(/-/g, ' ')} · ${config.date}`;

  const contextValue: SlideshowContextValue = {
    id: config.id,
    title: config.title,
    date: config.date,
    location: config.location,
    footerText,
    partnerLogo: config.partnerLogo,
    currentSlide: currentStepData?.slideIndex ?? 0,
    buildStep: currentStepData?.buildStep ?? 1,
    totalSteps,
  };

  return (
    <SlideshowProvider value={contextValue}>
      <main
        className="relative cursor-pointer"
        onClick={handleMainClick}
        data-total-steps={totalSteps}
        data-current-step={currentStep}
      >
        {mounted && config.slides.map((slide, slideIndex) => {
          const SlideComponent = getSlideComponent(slide);
          // Export mode captures one step per page load, so it mounts only the
          // current slide: a neighbor's live embed would load in the background
          // and can keep the capture from settling.
          const mountRadius = exportMode ? 0 : 1;
          const isNeighbor = Math.abs(slideIndex - (currentStepData?.slideIndex ?? 0)) <= mountRadius;
          const isCurrent = slideIndex === currentStepData?.slideIndex;

          if (!isNeighbor) {
            return <div key={slideIndex} />;
          }

          return (
            <div
              key={slideIndex}
              className={isCurrent ? 'slide-active' : 'slide-exit'}
              style={{ display: isCurrent ? 'block' : 'none' }}
            >
              <SlideComponent buildStep={isCurrent ? currentStepData?.buildStep : undefined} />
            </div>
          );
        })}

        {!isFullscreen && !exportMode && (
          <div className="fixed bottom-0 left-0 right-0 h-20 z-[100] flex items-center justify-between px-8 pointer-events-none">
            <div className="flex items-center gap-3 pointer-events-auto">
              <span className="text-white/60 text-xs">
                Click or arrow keys &middot; F for fullscreen
              </span>
            </div>

            <div className="flex items-center gap-4 pointer-events-auto">
              <button
                onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
                className="text-white hover:text-white/80 transition-colors text-2xl w-10 h-10 flex items-center justify-center"
                aria-label="Previous slide"
              >
                &larr;
              </button>

              <span className="text-base font-medium text-white min-w-[4rem] text-center">
                {currentStep + 1} / {totalSteps}
              </span>

              <button
                onClick={() => setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1))}
                className="text-white hover:text-white/80 transition-colors text-2xl w-10 h-10 flex items-center justify-center"
                aria-label="Next slide"
              >
                &rarr;
              </button>
            </div>
          </div>
        )}
      </main>
    </SlideshowProvider>
  );
}

export default function SlideshowViewer(props: SlideshowViewerProps) {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <SlideshowViewerClient {...props} />
    </Suspense>
  );
}
