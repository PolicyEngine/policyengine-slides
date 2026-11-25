'use client';

import BasePathImage from '@/components/core/BasePathImage';

/**
 * One screenshot or document image, as large as the slide body allows at its own shape, centred, in a light frame
 * unless `frame` is false. It sizes to the body box with container units, so it fits both the title-and-footer page
 * and the body-only `?bare=1` view (the latter is 57.4vh tall, so a height fixed in vh for the taller body under a
 * one-line title would spill out of it).
 */
export default function Shot({
  src,
  width,
  height,
  alt,
  frame = true,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  frame?: boolean;
}) {
  const ratio = width / height;
  return (
    <div className="flex h-full w-full items-center justify-center" style={{ containerType: 'size' }}>
      <div
        className={`overflow-hidden rounded-xl shadow-md ${frame ? 'border border-gray-200 bg-white' : ''}`}
        style={{ width: `min(100cqw, (100cqh - 4px) * ${ratio})`, aspectRatio: `${width} / ${height}` }}
      >
        <BasePathImage src={src} width={width} height={height} alt={alt} className="block h-full w-full object-contain" priority />
      </div>
    </div>
  );
}
