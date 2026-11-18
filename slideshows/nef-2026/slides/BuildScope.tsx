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
      let scale = 1;
      element.style.setProperty("--fit", "1");
      while (element.scrollHeight > element.clientHeight + 1 && scale > 0.6) {
        scale -= 0.03;
        element.style.setProperty("--fit", scale.toFixed(2));
      }
    };
    fit();
    const observer = new ResizeObserver(fit);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={body} className={className} style={style} data-build={build}>
      {children}
    </div>
  );
}
