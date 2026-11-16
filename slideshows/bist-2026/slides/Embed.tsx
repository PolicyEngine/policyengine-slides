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
 * A live page on the slide, after the Autumn Budget 2026 deck's
 * DashboardEmbed. Expand stretches the same frame over the whole screen, so
 * whatever is open in it is kept when it goes back to the slide. Clicks in
 * the frame go to the page, and so do the arrow keys until the slide is
 * clicked outside it. The view buttons load one of the page's tabs into the
 * same frame.
 */
export type EmbedView = {
  label: string;
  /** The deep link's query string, such as "?tab=household". */
  query: string;
};

export default function Embed({
  href,
  title,
  views = [],
  zoom = 1,
}: {
  href: string;
  title: string;
  /** Buttons that open a tab or sub-tab in the frame. */
  views?: readonly EmbedView[];
  /** Shows the page smaller than life, so more of it fits: 0.7 is 70%. */
  zoom?: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const [src, setSrc] = useState(href);
  // Bumped on every view button, so a second click on the same view reloads it.
  const [load, setLoad] = useState(0);
  const ToggleIcon = expanded ? IconArrowsMinimize : IconArrowsMaximize;
  const address = new URL(href);

  return (
    <div
      className={`${styles.embed} ${expanded ? styles.embedExpanded : ""} pointer-events-auto`}
      onClick={(event) => event.stopPropagation()}
    >
      <div className={styles.embedBar}>
        <span className={styles.embedAddress}>
          <IconWorld stroke={1.8} aria-hidden="true" />
          {address.host.replace(/^www\./, "")}
        </span>
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
          <ToggleIcon stroke={1.8} aria-hidden="true" />
          {expanded ? "Back to the slide" : "Expand"}
        </button>
        <a href={href} target="_blank" rel="noopener noreferrer" className={styles.embedButton}>
          <IconExternalLink stroke={1.8} aria-hidden="true" />
          New tab
        </a>
      </div>
      <div className={styles.embedView2}>
        <iframe
          key={load}
          src={src}
          title={title}
          className={styles.embedFrame}
          style={
            zoom === 1 || expanded
              ? undefined
              : { width: `${100 / zoom}%`, height: `${100 / zoom}%`, transform: `scale(${zoom})` }
          }
        />
      </div>
    </div>
  );
}
