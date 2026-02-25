/**
 * Resolves image src paths by prepending basePath to local paths.
 *
 * This is a workaround for a Next.js bug where next/image doesn't respect
 * basePath configuration when unoptimized: true is set.
 *
 * @param src - The image source URL
 * @param basePath - The base path to prepend (e.g., '/slides')
 * @returns The resolved image source URL
 */
export function resolveImageSrc(src: string, basePath: string): string {
  if (!basePath || typeof src !== 'string') return src;
  if (src.startsWith('/') && !src.startsWith(basePath + '/')) {
    return basePath + src;
  }
  return src;
}
