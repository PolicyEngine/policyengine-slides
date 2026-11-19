"use client";

import { useLayoutEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { useSlideshowContextSafe } from "@/components/core/SlideshowContext";
import { isExportMode } from "@/lib/slide-url";

/**
 * A slide body that knows its build step and keeps clear of the footer.
 *
 * Builds: elements inside carry `data-step="N"`; deck.module.css hides those
 * above the current step and animates each in when its step arrives. An
 * export shows every step, so a slide with builds is one complete page in
 * the PDF (`exportBuilds: 1`).
 *
 * Fit: the body's sizes are all in em, so if its content is taller than the
 * space above the footer (a short window), `--fit` shrinks the base size
 * until it fits. Hidden steps keep their place, so the fit doesn't change
 * between steps.
 */
export default function BuildScope({
  className,
  style,
  children,
}: {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const context = useSlideshowContextSafe();
  const exporting = isExportMode(useSearchParams());
  const build = exporting || !context ? "all" : String(context.buildStep);
  const body = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = body.current;
    if (!element) return;
    const fit = () => {
      // A slide that isn't shown has no height: fit it when it appears.
      if (element.clientHeight === 0) return;
      // Layout heights, which an entrance animation's transform doesn't move
      // (scrollHeight would count it and shrink a slide that fits).
      const room =
        element.clientHeight - parseFloat(getComputedStyle(element).paddingBottom || "0");
      const content = () =>
        Array.from(element.children).reduce(
          (sum, child) => sum + (child as HTMLElement).offsetHeight,
          0,
        );
      let scale = 1;
      element.style.setProperty("--fit", "1");
      let before = content();
      while (before > room + 1 && scale > 0.6) {
        scale -= 0.03;
        element.style.setProperty("--fit", scale.toFixed(2));
        const after = content();
        // Content that doesn't follow the base size (the module map sizes
        // itself from the window) can't be fitted this way: leave it.
        if (after >= before) {
          element.style.setProperty("--fit", "1");
          break;
        }
        before = after;
      }
    };
    fit();
    // Fit again whenever the space or the content changes size (a resized
    // window, styles or fonts arriving after the first paint).
    const observer = new ResizeObserver(fit);
    observer.observe(element);
    for (const child of Array.from(element.children)) observer.observe(child);
    document.fonts?.ready.then(fit);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={body} className={className} style={style} data-build={build}>
      {children}
    </div>
  );
}
