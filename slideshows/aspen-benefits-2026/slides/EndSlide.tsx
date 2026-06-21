import Slide from "@/components/core/Slide";

export default function EndSlide() {
  return (
    <Slide isEnd>
      <h1 className="font-display text-5xl font-bold mb-5 text-center leading-tight max-w-4xl">
        Policy analysis in the age of AI is only as good as what we ground it in.
      </h1>

      <p className="text-2xl opacity-80 mb-9 text-center">
        Find me here &mdash; let&apos;s make your knowledge callable.
      </p>

      <div className="opacity-70 text-center space-y-2">
        <p className="text-xl font-semibold">
          policyengine.org &middot; policybench.org &middot; axiom-foundation.org
        </p>
        <p className="text-lg">max@policyengine.org</p>
      </div>
    </Slide>
  );
}
