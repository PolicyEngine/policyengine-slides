import Slide from "@/components/core/Slide";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";

export default function ForecastsTodaySlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Today, our models forecast the budget</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-6 mt-2 items-stretch">
        <div className="content-card p-7 flex flex-col justify-center">
          <div className="slide-tag mb-3" style={{ fontSize: "0.7rem" }}>
            Policy projections, every year
          </div>
          <p className="font-display text-5xl font-bold text-pe-teal leading-tight tracking-tight">
            Tens to hundreds of thousands
          </p>
          <p className="text-base text-gray-600 mt-4 leading-relaxed">
            From government scorekeepers &mdash; CBO, JCT, Treasury, state fiscal
            offices &mdash; and modelers like PolicyEngine.
          </p>
        </div>

        <div
          className="rounded-2xl p-7 text-white flex flex-col justify-center"
          style={{
            background:
              "linear-gradient(180deg, var(--pe-dark) 0%, var(--pe-darker) 100%)",
          }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-pe-teal mb-3">
            Almost always one question
          </p>
          <p className="text-lg leading-relaxed text-white/90">
            The dollar impact &mdash; budget cost, revenue, who gains and loses.
            Essential. But it&apos;s a sliver of what decides whether a program
            actually works for families.
          </p>
        </div>
      </div>

      <div className="accent-block mt-7">
        <p className="text-xl font-semibold text-gray-700 leading-relaxed">
          We&apos;re one of these modelers. The numbers are real and useful
          &mdash; and they stop at the budget line.
        </p>
      </div>
    </Slide>
  );
}
