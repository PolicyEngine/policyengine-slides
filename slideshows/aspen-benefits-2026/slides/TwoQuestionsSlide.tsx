import Slide from "@/components/core/Slide";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";
import { IconScale, IconChartDots3 } from "@tabler/icons-react";

export default function TwoQuestionsSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Policy analysis asks two kinds of questions</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-6 mt-2">
        <div className="content-card p-7">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="icon-circle shrink-0"
              style={{ width: "48px", height: "48px", borderRadius: "14px" }}
            >
              <IconScale size={26} stroke={1.5} style={{ color: "var(--pe-teal)" }} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-pe-dark">What is the law?</h3>
              <span className="slide-tag" style={{ fontSize: "0.62rem" }}>
                Determinism
              </span>
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-3">
            What does a policy actually do? Who&apos;s eligible for SNAP today?
            How much from the Child Tax Credit? How big is the cliff?
          </p>
          <p className="text-base text-gray-500 leading-relaxed">
            Interpreting current law &mdash; exactly, the same way every time.
          </p>
        </div>

        <div className="content-card p-7">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="icon-circle shrink-0"
              style={{ width: "48px", height: "48px", borderRadius: "14px" }}
            >
              <IconChartDots3 size={26} stroke={1.5} style={{ color: "var(--pe-teal)" }} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-pe-dark">
                What would a change do?
              </h3>
              <span className="slide-tag" style={{ fontSize: "0.62rem" }}>
                Prediction
              </span>
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-3">
            Change the policy &mdash; what happens to households and to society?
            How do people respond? What&apos;s the net effect?
          </p>
          <p className="text-base text-gray-500 leading-relaxed">
            Modeling consequences, with honest uncertainty.
          </p>
        </div>
      </div>

      <div className="accent-block mt-8">
        <p className="text-xl font-semibold text-gray-700 leading-relaxed">
          Two different problems. Given the right mission, agents can scale each
          &mdash; and that&apos;s the rest of this talk.
        </p>
      </div>
    </Slide>
  );
}
