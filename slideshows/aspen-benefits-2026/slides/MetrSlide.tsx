import Slide from "@/components/core/Slide";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";
import Image from "@/components/core/BasePathImage";

// METR's live "Task-Completion Time Horizons of Frontier AI Models" chart
// (metr.org/time-horizons, last updated 2026-05-08; CC-BY). The newest plotted
// models are Claude Opus 4.6 and Claude Mythos Preview — the current frontier
// (Opus 4.8, GPT-5.5, Fable 5) is past METR's ~16-hour measurement ceiling.
export default function MetrSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>AI can do exponentially longer work</SlideTitle>
      </SlideHeader>

      <div className="flex flex-col items-center">
        <Image
          src="/charts/metr-time-horizon.png"
          alt="METR: the length of task a frontier model completes with 50% reliability, doubling roughly every 7 months from 2019 to 2026"
          width={2750}
          height={1087}
          className="w-full h-auto object-contain max-h-[285px]"
          priority
        />
        <p className="text-xs text-gray-400 mt-1">
          Source: METR &middot; metr.org/time-horizons (May 2026), CC&ndash;BY
        </p>
      </div>

      <div className="accent-block mt-4">
        <p className="text-xl font-semibold text-gray-700 leading-relaxed">
          Design for the slope, not the dot. Today&apos;s frontier &mdash; Opus
          4.8, GPT&#8209;5.5, Fable 5 &mdash; isn&apos;t even on this chart yet.
          Build for what&apos;s coming, not just what&apos;s here.
        </p>
      </div>
    </Slide>
  );
}
