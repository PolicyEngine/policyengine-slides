import { describe, it, expect } from 'vitest';
import { resolveImageSrc } from './base-path-image';

describe('resolveImageSrc', () => {
  const basePath = '/slides';

  it('should prepend basePath to local paths', () => {
    const result = resolveImageSrc('/logos/white.svg', basePath);
    expect(result).toBe('/slides/logos/white.svg');
  });

  it('should not double-prefix an already-prefixed path', () => {
    const result = resolveImageSrc('/slides/logos/white.svg', basePath);
    expect(result).toBe('/slides/logos/white.svg');
  });

  it('should leave external URLs unchanged', () => {
    const url = 'https://example.com/img.png';
    const result = resolveImageSrc(url, basePath);
    expect(result).toBe(url);
  });

  it('should prepend basePath to root-relative paths with different prefix', () => {
    const result = resolveImageSrc('/headshots/max.png', basePath);
    expect(result).toBe('/slides/headshots/max.png');
  });

  it('should return src unchanged when basePath is empty', () => {
    const src = '/img.png';
    const result = resolveImageSrc(src, '');
    expect(result).toBe(src);
  });

  it('should leave data URLs unchanged', () => {
    const dataUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';
    const result = resolveImageSrc(dataUrl, basePath);
    expect(result).toBe(dataUrl);
  });
});
