import { describe, it, expect } from 'vitest';
import { slideshows } from './slideshows';
import { formatDate } from './types';
import {
  slideshowCanonicalUrl,
  slideshowOgImageUrl,
  buildSlideshowMetadata,
} from './slideshow-seo';

describe('slideshow SEO URLs', () => {
  it('includes the /slides basePath in canonical and og:image URLs', () => {
    // Regression guard: Next's metadata file conventions silently drop the
    // configured basePath, which produced 404 social-card images.
    expect(slideshowCanonicalUrl('demo')).toBe(
      'https://policyengine.org/slides/demo',
    );
    expect(slideshowOgImageUrl('demo')).toBe(
      'https://policyengine.org/slides/demo/og',
    );
  });

  it('builds absolute, basePath-prefixed og + twitter image URLs', () => {
    const md = buildSlideshowMetadata(slideshows[0]);
    const ogImages = md.openGraph?.images as { url: string }[];
    const twitterImages = (md.twitter as { images?: string[] }).images ?? [];
    const urls = [ogImages[0]?.url, twitterImages[0]].filter(Boolean) as string[];

    expect(urls).toHaveLength(2);
    for (const url of urls) {
      expect(url.startsWith('https://policyengine.org/slides/')).toBe(true);
      expect(url.endsWith('/og')).toBe(true);
    }
    expect(md.twitter?.card).toBe('summary_large_image');
  });
});

// Every registered deck — and therefore every new deck added to the registry —
// must carry metadata that renders a clean social card. This is the CI gate.
describe('every registered slideshow has card-ready metadata', () => {
  for (const s of slideshows) {
    describe(s.id, () => {
      it('has a URL-safe id', () => {
        expect(s.id).toMatch(/^[a-z0-9-]+$/);
      });

      it('has a non-empty title that fits the card', () => {
        expect((s.title ?? '').trim().length).toBeGreaterThan(0);
        expect(s.title.length).toBeLessThanOrEqual(80);
      });

      it('has a non-empty description that fits the card', () => {
        expect((s.description ?? '').trim().length).toBeGreaterThan(0);
        expect(s.description.length).toBeLessThanOrEqual(200);
      });

      it('has an ISO date that formats without NaN/undefined', () => {
        expect(s.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
        expect(formatDate(s.date)).not.toMatch(/NaN|undefined/);
      });
    });
  }
});
