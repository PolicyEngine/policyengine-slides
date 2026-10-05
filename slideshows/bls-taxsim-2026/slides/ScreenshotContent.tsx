import Image from '@/components/core/BasePathImage';
import type { BlsSlideContent } from '../content';

type Screenshot = NonNullable<BlsSlideContent['screenshot']>;

/** A website capture sized to clear the footer at 720p, with an optional fact column and caption. */
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

  if (screenshot.facts) {
    return (
      <div className="mt-4 space-y-6">
        <div className="grid grid-cols-[1.25fr_1fr] items-center gap-10">
          {image}
          <div className="space-y-3">
            {screenshot.facts.map((fact) => (
              <div key={fact.value} className="rounded-lg border-l-4 border-pe-teal bg-gray-50 px-5 py-3">
                <p className="text-2xl font-bold leading-tight text-pe-teal">{fact.value}</p>
                <p className="mt-1 text-base leading-snug text-gray-600">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
        {screenshot.caption && <p className="text-xl leading-snug font-medium text-pe-dark">{screenshot.caption}</p>}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-3 mt-2">
      {image}
      {screenshot.caption && (
        <p className="max-w-5xl text-center text-xl leading-snug text-pe-dark">{screenshot.caption}</p>
      )}
    </div>
  );
}
