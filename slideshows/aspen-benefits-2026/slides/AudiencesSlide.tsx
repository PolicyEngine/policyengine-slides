import Slide from "@/components/core/Slide";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";
import { IconHome, IconBuildingBank } from "@tabler/icons-react";

export default function AudiencesSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>People are already asking AI about benefits</SlideTitle>
      </SlideHeader>

      <div className="grid grid-cols-2 gap-6 mt-2">
        <div className="content-card p-7">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="icon-circle shrink-0"
              style={{ width: "48px", height: "48px", borderRadius: "14px" }}
            >
              <IconHome size={26} stroke={1.5} style={{ color: "var(--pe-teal)" }} />
            </div>
            <h3 className="text-2xl font-bold text-pe-dark">Households</h3>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-3">
            &ldquo;Will this raise cost me more than I gain? Which programs am I
            eligible for? How does a new baby change my taxes?&rdquo;
          </p>
          <p className="text-base text-gray-500 leading-relaxed">
            Millions now ask a chatbot before they ask an agency.
          </p>
        </div>

        <div className="content-card p-7">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="icon-circle shrink-0"
              style={{ width: "48px", height: "48px", borderRadius: "14px" }}
            >
              <IconBuildingBank
                size={26}
                stroke={1.5}
                style={{ color: "var(--pe-teal)" }}
              />
            </div>
            <h3 className="text-2xl font-bold text-pe-dark">
              The policy community
            </h3>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-3">
            &ldquo;Who wins and loses under this bill? What would expanding the
            CTC cost? How many families hit a cliff at $40k?&rdquo;
          </p>
          <p className="text-base text-gray-500 leading-relaxed">
            Agencies, analysts, and advocates lean on AI to answer faster.
          </p>
        </div>
      </div>

      <div className="accent-block mt-8">
        <p className="text-xl font-semibold text-gray-700 leading-relaxed">
          Both are pointing general-purpose models at taxes and benefits &mdash;
          where a confident wrong number changes what a family does, or what a
          state funds.
        </p>
      </div>
    </Slide>
  );
}
