"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { useSlideshowContextSafe } from "@/components/core/SlideshowContext";
import { isExportMode } from "@/lib/slide-url";

/**
 * A whole number that counts up from zero when it comes into view.
 *
 * The number itself is always in the page as text, so it shows at rest, in an
 * export, with reduced motion and before any script runs. The count is only
 * an effect on top: it plays once each time the number goes from hidden (its
 * slide isn't shown, or its build step hasn't arrived) to visible.
 */
export default function CountUp({ value }: { value: number }) {
  const context = useSlideshowContextSafe();
  const exporting = isExportMode(useSearchParams());
  const element = useRef<HTMLSpanElement>(null);
  const wasVisible = useRef(false);
  const slide = context?.currentSlide;
  const build = context?.buildStep;
  const final = value.toLocaleString("en-GB");

  useEffect(() => {
    const span = element.current;
    if (!span) return;
    const visible =
      span.offsetParent !== null && getComputedStyle(span).visibility !== "hidden";
    const appeared = visible && !wasVisible.current;
    wasVisible.current = visible;
    span.textContent = final;
    if (!appeared || exporting) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const duration = 1100;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      span.textContent = Math.round(value * eased).toLocaleString("en-GB");
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      span.textContent = final;
    };
  }, [slide, build, value, final, exporting]);

  return (
    <span ref={element} style={{ fontVariantNumeric: "tabular-nums" }}>
      {final}
    </span>
  );
}
