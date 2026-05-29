import type { Metadata } from 'next';
import { SlideshowConfig } from './types';

/**
 * Public origin and basePath the deck is served under. Next's metadata file
 * conventions (opengraph-image / twitter-image) drop the configured basePath
 * from generated URLs, so social-card URLs are built here explicitly and used
 * both in metadata and in tests that guard against the basePath regression.
 */
export const SITE_ORIGIN = 'https://policyengine.org';
export const SLIDES_BASE_PATH = '/slides';

export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

/** Canonical public URL for a slideshow, e.g. https://policyengine.org/slides/cbo-2026 */
export function slideshowCanonicalUrl(id: string): string {
  return `${SITE_ORIGIN}${SLIDES_BASE_PATH}/${id}`;
}

/** Absolute URL of the generated Open Graph / Twitter card image for a deck. */
export function slideshowOgImageUrl(id: string): string {
  return `${slideshowCanonicalUrl(id)}/og`;
}

/** Build the full Next.js Metadata (title, description, OG, Twitter) for a deck. */
export function buildSlideshowMetadata(config: SlideshowConfig): Metadata {
  const { id, title, description } = config;
  const url = slideshowCanonicalUrl(id);
  const ogImage = slideshowOgImageUrl(id);

  return {
    title: `${title} · PolicyEngine`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'PolicyEngine',
      type: 'article',
      images: [
        { url: ogImage, width: OG_IMAGE_WIDTH, height: OG_IMAGE_HEIGHT, alt: title },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}
