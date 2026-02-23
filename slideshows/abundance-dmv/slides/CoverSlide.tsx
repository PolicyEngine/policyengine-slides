import Slide from '@/components/core/Slide';
import Image from 'next/image';

export default function CoverSlide() {
  return (
    <Slide isCover>
      <div className="flex flex-col items-center justify-center space-y-10 relative z-10">
        <div className="w-20 h-1 bg-white/30 rounded-full" />

        <h1 className="text-5xl font-bold text-center text-white leading-tight">
          Building state capacity through open-source policy simulation
        </h1>

        <div className="flex items-center justify-center gap-6 mt-4">
          <div className="w-24 h-24 relative overflow-hidden rounded-full border-2 border-white/40">
            <Image
              src="/headshots/max-ghenis.png"
              alt="Max Ghenis"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-left">
            <p className="text-2xl font-semibold text-white">Max Ghenis</p>
            <p className="text-lg text-white/70 font-light">CEO, PolicyEngine</p>
          </div>
        </div>

        <div className="opacity-60 text-center text-white pt-2">
          <p>Abundance DMV</p>
          <p>February 21, 2026</p>
        </div>
      </div>
    </Slide>
  );
}
