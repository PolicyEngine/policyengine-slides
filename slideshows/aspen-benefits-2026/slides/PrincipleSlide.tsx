import Slide from "@/components/core/Slide";

export default function PrincipleSlide() {
  return (
    <Slide>
      <div className="flex flex-col items-center justify-center h-full max-w-5xl mx-auto text-center">
        <div className="slide-tag mb-7">The fix</div>

        <h2 className="font-display text-5xl font-bold text-pe-dark leading-tight tracking-tight">
          The answer isn&apos;t to keep AI away from benefits.
          <br />
          It&apos;s to <span className="text-pe-teal">ground it</span>.
        </h2>

        <p className="text-2xl text-gray-600 leading-relaxed mt-9 max-w-4xl">
          An agent shouldn&apos;t reason out your SNAP benefit from memory. It
          should call something that computes it &mdash; and cite where the
          number came from.
        </p>

        <div className="accent-block mt-10">
          <p className="text-xl font-semibold text-gray-700">
            Accurate. Grounded. Credible. That&apos;s the bar for AI in the
            safety net.
          </p>
        </div>
      </div>
    </Slide>
  );
}
