'use client';

import React from 'react';
import Image from 'next/image';
import Slide from '@/components/core/Slide';
import { useSlideshowContextSafe } from '@/components/core/SlideshowContext';
import { SpeakerInfo, formatDate } from '@/lib/types';

interface CoverSlideProps {
  title?: string;
  subtitle?: string;
  speakers?: SpeakerInfo[];
  event?: string;
  date?: string;
}

export default function CoverSlide({
  title,
  subtitle,
  speakers,
  event,
  date,
}: CoverSlideProps) {
  const ctx = useSlideshowContextSafe();
  const resolvedTitle = title ?? ctx?.title ?? '';
  const resolvedDate = date ?? ctx?.date ?? '';
  const resolvedEvent = event ?? ctx?.location ?? ctx?.id?.replace(/-/g, ' ') ?? '';

  return (
    <Slide isCover>
      <div className="flex flex-col items-center justify-center space-y-10 relative z-10">
        <div className="w-20 h-1 bg-white/30 rounded-full" />

        <h1 className="font-display text-5xl font-bold text-center text-white">
          {resolvedTitle}
        </h1>

        {subtitle && (
          <p className="text-2xl opacity-80 text-center text-white">
            {subtitle}
          </p>
        )}

        {speakers && speakers.length > 0 && (
          <div className="flex items-center justify-center gap-16 mt-4">
            {speakers.map((speaker, i) => (
              <div key={i} className="text-center">
                <div className="w-28 h-28 relative overflow-hidden rounded-full border-2 border-white/40 mx-auto mb-3">
                  <Image
                    src={speaker.photo}
                    alt={speaker.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xl font-semibold text-white">{speaker.name}</p>
                <p className="text-sm text-white/70 font-light">{speaker.title}</p>
              </div>
            ))}
          </div>
        )}

        <div className="opacity-60 text-center text-white pt-2">
          {resolvedEvent && <p className="capitalize">{resolvedEvent}</p>}
          {resolvedDate && <p>{resolvedDate.includes('-') ? formatDate(resolvedDate) : resolvedDate}</p>}
        </div>
      </div>
    </Slide>
  );
}
