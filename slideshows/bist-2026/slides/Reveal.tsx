"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { useSlideshowContextSafe } from "@/components/core/SlideshowContext";
import { isExportMode } from "@/lib/slide-url";
import styles from "./deck.module.css";

/**
 * The slide's build step. Outside a viewer everything is shown, and so it is
 * in an export: config.ts gives every slide one export step, and that one
 * page shows the slide complete.
 */
function useBuildStep() {
  const step = useSlideshowContextSafe()?.buildStep ?? Infinity;
  return isExportMode(useSearchParams()) ? Infinity : step;
}

/**
 * A build step that keeps its place. Before its step the content is hidden
 * but still takes its space, so nothing on the slide moves when it appears;
 * from its step on it is shown, with a short rise. Content is visible unless
 * the "not yet" class says otherwise, so a page never depends on an
 * animation finishing.
 */
export function Reveal({
  step,
  children,
  className = "",
  style,
  motion = "rise",
  ghost = false,
}: {
  step: number;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** "rise" fades up; "wipe" draws in from the left, for arrows and lines. */
  motion?: "rise" | "wipe" | "fade";
  /** Before its step, a box shows as an empty dashed outline, not a gap. */
  ghost?: boolean;
}) {
  const shown = useBuildStep() >= step;
  const motionClass =
    motion === "wipe" ? styles.revealWipe : motion === "fade" ? styles.revealFade : styles.revealRise;
  return (
    <div
      className={`${className} ${
        shown ? (step > 1 ? motionClass : "") : ghost ? styles.revealGhost : styles.revealHidden
      }`}
      style={style}
      aria-hidden={shown ? undefined : true}
    >
      {children}
    </div>
  );
}

// The figure inside a value such as "about 7.2k", "1,514" or "43.7%".
const figure = /^(.*?)(\d[\d,]*(?:\.\d+)?)(.*)$/;

function format(n: number, template: string) {
  const decimals = template.includes(".") ? template.split(".")[1].length : 0;
  const fixed = n.toFixed(decimals);
  if (!template.includes(",")) return fixed;
  const [whole, fraction] = fixed.split(".");
  const grouped = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return fraction ? `${grouped}.${fraction}` : grouped;
}

/**
 * A figure that counts up when its build step arrives. The text is always
 * the exact value given, except during the 0.7 seconds of the count; a timer
 * restores the exact value whether or not the animation frames ran. There is
 * no count in a PDF export, with reduced motion or in a hidden tab.
 */
export function CountUp({ value, step }: { value: string; step: number }) {
  const shown = useBuildStep() >= step;
  const [text, setText] = useState(value);
  const wasShown = useRef(shown);

  useEffect(() => {
    const arrived = shown && !wasShown.current;
    wasShown.current = shown;
    const match = figure.exec(value);
    if (
      !arrived ||
      !match ||
      document.visibilityState !== "visible" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const [, before, digits, after] = match;
    const target = Number(digits.replace(/,/g, ""));
    const duration = 700;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      if (t >= 1) return;
      const eased = 1 - (1 - t) ** 3;
      setText(`${before}${format(target * eased, digits)}${after}`);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    const settle = window.setTimeout(() => {
      cancelAnimationFrame(frame);
      setText(value);
    }, duration + 40);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(settle);
      setText(value);
    };
  }, [shown, value]);

  return <>{text}</>;
}
