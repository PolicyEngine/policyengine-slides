import Slide from "@/components/core/Slide";

export default function LeverageSlide() {
  return (
    <Slide>
      <div className="flex flex-col items-center justify-center h-full max-w-5xl mx-auto text-center">
        <div className="slide-tag mb-7">Our response</div>

        <h2 className="font-display text-5xl font-bold text-pe-dark leading-tight tracking-tight">
          If AI will be transformative, the highest-leverage move is to make it{" "}
          <span className="text-pe-teal">more capable in your own field</span>.
        </h2>

        <p className="text-2xl text-gray-600 leading-relaxed mt-9 max-w-4xl">
          And AI itself can help you do that. So we use AI&apos;s capabilities to
          build AI systems that meet the policy conversation where it&apos;s
          going &mdash; more accurate, more effective, faster, as the world
          changes faster than ever.
        </p>

        <div className="accent-block mt-10">
          <p className="text-xl font-semibold text-gray-700">
            Use AI to make AI better at policy. That&apos;s the bet &mdash; and
            it&apos;s what we&apos;ve been building.
          </p>
        </div>
      </div>
    </Slide>
  );
}
