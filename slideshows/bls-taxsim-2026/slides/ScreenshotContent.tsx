import Image from '@/components/core/BasePathImage';
import type { BlsSlideContent } from '../content';

type Screenshot = NonNullable<BlsSlideContent['screenshot']>;

/** A website capture sized to clear the footer at 720p, with a caption. */
export default function ScreenshotContent({ screenshot }: { screenshot: Screenshot }) {
  const image = (
    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-lg">
      <Image
        src={screenshot.src}
        alt={screenshot.alt}
        width={screenshot.width}
        height={screenshot.height}
        className="block w-auto max-w-full max-h-[calc(100vh-400px)] object-contain"
      />
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-3 mt-2">
      {image}
      {screenshot.caption && (
        <p className="max-w-5xl text-center text-xl leading-snug text-pe-dark">{screenshot.caption}</p>
      )}
    </div>
  );
}
