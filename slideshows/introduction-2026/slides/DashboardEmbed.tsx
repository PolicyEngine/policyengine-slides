"use client";

import { useState } from "react";
import {
  IconArrowsMaximize,
  IconArrowsMinimize,
  IconExternalLink,
  IconWorld,
} from "@tabler/icons-react";
import styles from "./deck.module.css";

/**
 * The dashboard, live on the slide. Expand stretches the same frame over the
 * whole screen, so the tab, measures and household it shows are kept when it
 * goes back to the slide. Clicks in the frame go to the dashboard, and so do
 * the arrow keys until the slide is clicked outside it.
 */
export default function DashboardEmbed({
  href,
  address,
  title,
}: {
  href: string;
  /** The address as shown in the bar above the frame. */
  address: string;
  title: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const ToggleIcon = expanded ? IconArrowsMinimize : IconArrowsMaximize;

  return (
    <div
      className={`${styles.embed} ${expanded ? styles.embedExpanded : ""} pointer-events-auto`}
      onClick={(event) => event.stopPropagation()}
    >
      <div className={styles.embedBar}>
        <IconWorld size={18} stroke={1.8} aria-hidden="true" />
        <span className={styles.embedAddress}>{address}</span>
        <button
          type="button"
          className={styles.embedButton}
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
      <iframe src={href} title={title} className={styles.embedFrame} />
    </div>
  );
}
