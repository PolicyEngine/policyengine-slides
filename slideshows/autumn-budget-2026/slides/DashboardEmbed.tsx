"use client";

import { useState } from "react";
import {
  IconArrowsMaximize,
  IconArrowsMinimize,
  IconExternalLink,
} from "@tabler/icons-react";
import styles from "./deck.module.css";

/**
 * The dashboard, live on the slide. Expand stretches the same frame over the
 * whole screen, so the tab, measures and household it shows are kept when it
 * goes back to the slide. Clicks in the frame go to the dashboard, and so do
 * the arrow keys until the slide is clicked outside it. The view buttons in
 * the bar load one of the dashboard's tabs or sub-tabs into the same frame.
 */
export type DashboardView = {
  label: string;
  /** The deep link's query string, such as "?tab=household". */
  query: string;
};

export default function DashboardEmbed({
  href,
  title,
  views = [],
}: {
  href: string;
  title: string;
  /** Buttons that open a tab or sub-tab in the frame. */
  views?: DashboardView[];
}) {
  const [expanded, setExpanded] = useState(false);
  const [src, setSrc] = useState(href);
  // Bumped on every view button, so a second click on the same view reloads it.
  const [load, setLoad] = useState(0);
  const ToggleIcon = expanded ? IconArrowsMinimize : IconArrowsMaximize;

  return (
    <div
      className={`${styles.embed} ${expanded ? styles.embedExpanded : ""} pointer-events-auto`}
      onClick={(event) => event.stopPropagation()}
    >
      <div className={styles.embedBar}>
        {views.length > 0 && (
          <div className={styles.embedViews}>
            {views.map((view) => (
              <button
                key={view.query}
                type="button"
                className={styles.embedView}
                onClick={() => {
                  setSrc(`${href}${view.query}`);
                  setLoad(load + 1);
                }}
              >
                {view.label}
              </button>
            ))}
          </div>
        )}
        <button
          type="button"
          className={`${styles.embedButton} ${styles.embedPush}`}
          onClick={() => setExpanded(!expanded)}
        >
          <ToggleIcon size={18} stroke={1.8} aria-hidden="true" />
          {expanded ? "Back to the slide" : "Expand"}
        </button>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.embedButton}
        >
          <IconExternalLink size={18} stroke={1.8} aria-hidden="true" />
          New tab
        </a>
      </div>
      <iframe key={load} src={src} title={title} className={styles.embedFrame} />
    </div>
  );
}
