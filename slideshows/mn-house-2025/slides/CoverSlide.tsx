import Slide from '@/components/core/Slide';
import SlideTitle from '@/components/layout/SlideTitle';

export default function CoverSlide() {
  return (
    <Slide isCover showFooter={false}>
      <div className="flex flex-col items-center justify-center space-y-14 relative z-10">
        {/* Decorative element */}
        <div className="w-20 h-1 bg-white/30 rounded-full" />

        <SlideTitle className="text-white text-7xl text-center">
          Modeling Minnesota<br />
          Tax Policy
        </SlideTitle>

        {/* Speaker info */}
        <div className="flex items-center justify-center gap-12">
          <div className="text-center">
            <p className="text-2xl font-semibold text-white">Max Ghenis</p>
            <p className="text-lg text-white/70 font-light">CEO</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-semibold text-white">David Trimmer</p>
            <p className="text-lg text-white/70 font-light">Lead State Tax Analyst</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-semibold text-white">Pavel Makarchuk</p>
            <p className="text-lg text-white/70 font-light">Director of Growth</p>
          </div>
        </div>

        {/* Event details */}
        <div className="flex items-center gap-10 pt-6">
          <div className="text-center">
            <p className="text-white/50 text-xs uppercase tracking-[0.2em] mb-2">Presented to</p>
            <p className="text-white font-medium text-lg">Minnesota House Research</p>
          </div>
          <div className="w-px h-14 bg-white/20" />
          <div className="text-center">
            <p className="text-white/50 text-xs uppercase tracking-[0.2em] mb-2">Date</p>
            <p className="text-white font-medium text-lg">January 6, 2025</p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
