import Slide from '@/components/core/Slide';
import Image from '@/components/core/BasePathImage';

export default function CoverSlide() {
  return (
    <Slide isCover>
      <div className="flex flex-col items-center justify-center space-y-9 relative z-10">
        <div className="w-20 h-1 bg-white/30 rounded-full" />

        <h1 className="font-display text-6xl font-bold text-center text-white leading-tight">
          The open engine for taxes and benefits
        </h1>

        <p className="text-2xl text-white/80 text-center max-w-3xl">
          Any household. Any reform. Free and open source.
        </p>

        <div className="flex items-center justify-center gap-6 mt-2">
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
            <p className="text-lg text-white/70 font-light">
              Co-founder and CEO, PolicyEngine
            </p>
          </div>
        </div>

        <div className="opacity-60 text-center text-white pt-2">
          <p>Civic Builders Demo Night &middot; Washington, DC</p>
          <p>June 17, 2026</p>
        </div>
      </div>
    </Slide>
  );
}
