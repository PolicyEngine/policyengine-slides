"use client";

import { useState } from "react";
import {
  IconArrowsMaximize,
  IconArrowsMinimize,
  IconExternalLink,
  type Icon,
} from "@tabler/icons-react";
import styles from "./embed.module.css";

/**
 * The macro site, live on the slide. Expand stretches the same frame over the
 * whole screen, so the page it shows is kept when it
 * goes back to the slide. Clicks in the frame go to the site, and so do
 * the arrow keys until the slide is clicked outside it. The view buttons in
 * the bar load one of the site's pages into the same frame.
 */
export type SiteView = {
  label: string;
  icon: Icon;
  /** The page path to load, such as "/models/compare". */
  path: string;
};

export default function SiteEmbed({
  href,
  title,
  views = [],
}: {
  href: string;
  title: string;
  /** Buttons that open a page of the site in the frame. */
  views?: SiteView[];
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
                key={view.path}
                type="button"
                className={styles.embedView}
                onClick={() => {
                  setSrc(`${href}${view.path}`);
                  setLoad(load + 1);
                }}
              >
                <view.icon size={16} stroke={1.8} aria-hidden="true" />
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
