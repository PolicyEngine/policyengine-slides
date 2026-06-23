import Slide from "@/components/core/Slide";
import Image from "@/components/core/BasePathImage";

export default function EndSlide() {
  return (
    <Slide>
      <div className="grid grid-cols-[0.92fr_1.08fr] gap-10 h-full items-center">
        {/* Left: the quote */}
        <div className="flex flex-col">
          <p className="font-display text-4xl font-bold text-pe-dark leading-snug tracking-tight">
            &ldquo;The work of social justice is standing in a future space and
            pulling the present towards it.&rdquo;
          </p>

          <div className="mt-7">
            <p className="text-xl font-semibold text-pe-teal-dark">
              &mdash; Peter Gabel
            </p>
          </div>

          <p className="text-sm text-gray-400 mt-10">
            policyengine.org &middot; axiom-foundation.org &middot;
            max@policyengine.org
          </p>
        </div>

        {/* Right: the METR slope — the help that's coming */}
        <div className="flex flex-col items-center">
          <Image
            src="/charts/metr-time-horizon.png"
            alt="METR: the length of task a frontier model can complete, climbing exponentially"
            width={2750}
            height={1087}
            className="w-full h-auto object-contain max-h-[380px]"
          />
          <p className="text-xs text-gray-400 mt-2">
            Source: METR &middot; metr.org/time-horizons
          </p>
        </div>
      </div>
    </Slide>
  );
}
