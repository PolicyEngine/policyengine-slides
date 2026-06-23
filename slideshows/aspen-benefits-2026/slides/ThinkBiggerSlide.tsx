import Slide from "@/components/core/Slide";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";

export default function ThinkBiggerSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Think bigger than the budget line</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-6 mt-2 items-stretch">
        <div className="content-card p-6">
          <div className="slide-tag mb-3" style={{ fontSize: "0.7rem" }}>
            What scoring covers today
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            CBO scores a handful of outcomes &mdash; mostly the cost. But the
            questions that decide whether a program works for families aren&apos;t
            only cost.
          </p>
        </div>

        <div
          className="rounded-2xl p-6 text-white flex flex-col justify-center"
          style={{
            background:
              "linear-gradient(180deg, var(--pe-dark) 0%, var(--pe-darker) 100%)",
          }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-pe-teal mb-3">
            The shift
          </p>
          <p className="text-lg leading-relaxed text-white/90">
            Forecast every outcome &mdash; take-up, customer experience, the
            call-center wait a Medicaid work requirement creates &mdash; each
            with honest uncertainty.
          </p>
        </div>
      </div>

      <div className="accent-block mt-7">
        <p className="text-xl font-semibold text-gray-700 leading-relaxed">
          AI forecasters now match some of the best humans &mdash; so an agent
          can read the evidence and assemble the forecast.
        </p>
      </div>
    </Slide>
  );
}
