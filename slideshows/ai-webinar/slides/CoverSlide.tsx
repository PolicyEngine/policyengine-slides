import React from 'react';
import Slide from '@/components/core/Slide';
import Image from '@/components/core/BasePathImage';

const speakers = [
  { name: 'Max Ghenis', title: 'CEO', photo: '/headshots/max-ghenis.png' },
  { name: 'Ziming Hua', title: 'Software Engineer', photo: '/headshots/ziming-hua.jpg' },
  { name: 'Pavel Makarchuk', title: 'Chief of Staff', photo: '/headshots/pavel-makarchuk.jpeg' },
];

export default function CoverSlide() {
  return (
    <Slide isCover>
      <div className="flex flex-col items-center justify-center space-y-10 relative z-10">
        <div className="w-20 h-1 bg-white/30 rounded-full" />

        <h1 className="text-5xl font-bold text-center text-white">
          Automating tax and benefit policy modeling with multi-agent AI
        </h1>

        <p className="text-2xl opacity-80 text-center text-white">
          How we built a system that transforms a policy request into a complete, tested pull request in 90 minutes
        </p>

        {/* Speaker headshots and info */}
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

        <div className="opacity-60 text-center text-white pt-2">
          <p>AI Webinar</p>
          <p>February 2026</p>
        </div>
      </div>
    </Slide>
  );
}
