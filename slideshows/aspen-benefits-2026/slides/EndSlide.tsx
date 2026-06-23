import Slide from "@/components/core/Slide";

export default function EndSlide() {
  return (
    <Slide isEnd>
      <h1 className="font-display text-5xl font-bold mb-5 text-center leading-tight max-w-4xl">
        We&apos;re not building for what is. We&apos;re building for what will be.
      </h1>

      <p className="text-2xl opacity-80 mb-9 text-center max-w-3xl">
        Call it understanding policy, or policy analysis &mdash; or something we
        don&apos;t have a name for yet.
      </p>

      <div className="opacity-70 text-center space-y-2">
        <p className="text-xl font-semibold">
          policyengine.org &middot; axiom-foundation.org
        </p>
        <p className="text-lg">max@policyengine.org</p>
      </div>
    </Slide>
  );
}
