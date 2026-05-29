import Slide from '@/components/core/Slide';
import SlideHeader from '@/components/layout/SlideHeader';
import SlideTitle from '@/components/layout/SlideTitle';

export default function TANFExampleSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Example: AI-accelerated TANF encoding</SlideTitle>
      </SlideHeader>

      <div className="mt-10 grid grid-cols-2 gap-10">
        <div className="space-y-6">
          <div>
            <div className="slide-tag mb-2">The problem</div>
            <p className="text-xl text-gray-800 leading-relaxed">
              50 state-level TANF programs, each with their own asset limits, earned-income disregards, work requirements, family caps, and benefit formulas.
            </p>
          </div>
          <div>
            <div className="slide-tag mb-2">The 2023 baseline</div>
            <p className="text-xl text-gray-800 leading-relaxed">
              Hand-encoding one state took an analyst roughly two weeks &mdash; reading the manual, drafting parameters, writing tests, validating against caseworker tables.
            </p>
          </div>
          <div>
            <div className="slide-tag mb-2">The 2026 workflow</div>
            <p className="text-xl text-gray-800 leading-relaxed">
              Coding agents do the first pass in hours: ingest the state manual, draft parameters with citations, propose Python formulas, generate test cases.
            </p>
          </div>
        </div>

        <div className="content-card p-8 flex flex-col justify-center">
          <h3 className="text-xl font-bold text-pe-dark mb-4">What does not change</h3>
          <ul className="space-y-3 text-lg text-gray-700 leading-relaxed">
            <li className="flex gap-3"><span className="text-pe-teal">·</span> An analyst reads the manual and validates the draft.</li>
            <li className="flex gap-3"><span className="text-pe-teal">·</span> A reviewer signs off on assumptions.</li>
            <li className="flex gap-3"><span className="text-pe-teal">·</span> Edge cases get hand-checked against caseworker tables.</li>
            <li className="flex gap-3"><span className="text-pe-teal">·</span> The CI gate must pass before merge.</li>
          </ul>
          <p className="mt-6 text-base text-gray-600 italic">
            The craft is preserved. The leverage on it has multiplied.
          </p>
        </div>
      </div>
    </Slide>
  );
}
