import Image, { ImageProps } from 'next/image';
import { resolveImageSrc } from '@/lib/base-path-image';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

/**
 * Drop-in replacement for next/image that prepends basePath to local src paths.
 * Fixes the Next.js bug where unoptimized + basePath doesn't prefix image src.
 */
export default function BasePathImage({ src, ...props }: ImageProps) {
  const resolvedSrc =
    typeof src === 'string' ? resolveImageSrc(src, BASE_PATH) : src;
  return <Image {...props} src={resolvedSrc} />;
}
