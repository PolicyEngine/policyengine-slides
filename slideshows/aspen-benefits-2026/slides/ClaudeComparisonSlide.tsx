import Slide from "@/components/core/Slide";
import Image from "@/components/core/BasePathImage";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";

export default function ClaudeComparisonSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Same prompt, with and without the model</SlideTitle>
      </SlideHeader>

      <div className="mt-4 grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <div className="text-xs text-gray-500 uppercase tracking-widest">
            Without the model
          </div>
          <div className="content-card overflow-hidden rounded-xl border border-gray-200 bg-white flex items-center justify-center">
            <Image
              src="/screenshots/claude-without-model.png"
              alt="Claude estimating without the PolicyEngine model"
              width={1706}
              height={980}
              className="w-full h-auto object-contain max-h-[255px]"
              priority
            />
          </div>
          <p className="text-sm text-gray-600 leading-snug italic">
            Hand-waved back-of-envelope. A $5&ndash;10B/year range and a
            promise that &ldquo;PolicyEngine will give you the exact
            number.&rdquo;
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div
            className="text-xs uppercase tracking-widest"
            style={{ color: "var(--pe-amber)" }}
          >
            With the model
          </div>
          <div
            className="content-card overflow-hidden rounded-xl border border-gray-200 bg-white flex items-center justify-center"
            style={{ borderLeftColor: "var(--pe-amber)" }}
          >
            <Image
              src="/screenshots/claude-with-model.png"
              alt="Claude estimating using the PolicyEngine microsim plugin"
              width={1710}
              height={901}
              className="w-full h-auto object-contain max-h-[255px]"
              priority
            />
          </div>
          <p className="text-sm text-gray-700 leading-snug">
            <span className="font-semibold">$8.3B/year in 2026</span> on a
            static PolicyEngine-US run, with explicit assumptions, citation to
            the IRS CTC page, distributional breakdown, and a ten-year range.
          </p>
        </div>
      </div>

      <p className="mt-3 text-base text-gray-600 italic text-center max-w-4xl mx-auto">
        Same prompt, same model. What changed is that the agent had a
        calibrated microsim to call &mdash; and the answer became grounded,
        specific, and citation-backed.
      </p>
    </Slide>
  );
}
