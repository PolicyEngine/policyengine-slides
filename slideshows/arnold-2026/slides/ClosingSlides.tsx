import Slide from "@/components/core/Slide";
import SlideHeader from "@/components/layout/SlideHeader";
import SlideTitle from "@/components/layout/SlideTitle";
import EndSlide from "@/components/layout/EndSlide";

const loops = [
  {
    layer: "Axiom",
    loop: "Oracle suites vs independent engines and records — ~900k household cases",
    where: "axiom.org/validation",
  },
  {
    layer: "Chronicle",
    loop: "First prints witnessed by two timestamp authorities, checkable offline",
    where: "chronicle.institute/verify",
  },
  {
    layer: "Microcosm",
    loop: "5,659 calibration targets published with their errors — 95.7% within 10%",
    where: "microcosm.institute",
  },
  {
    layer: "PolicyEngine",
    loop: "The Scorecard beside JCT, CBO, TPC, Urban, PWBM — explained divergence",
    where: "policyengine.org/scorecard",
  },
  {
    layer: "Thesis",
    loop: "Forecasts graded against reality — 35 of 45 witnessed resolutions in interval",
    where: "thesisinstitute.org",
  },
  {
    layer: "Corollary",
    loop: "Inherits the checks below — nothing of its own to publish yet",
    where: "earliest stage",
  },
];

export function LoopsRecapSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>Every layer publishes its own checks, in public</SlideTitle>
      </SlideHeader>

      <div className="mt-8 content-card overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-6 py-3 text-xs uppercase tracking-wide text-gray-500 font-semibold">
                Layer
              </th>
              <th className="px-6 py-3 text-xs uppercase tracking-wide text-gray-500 font-semibold">
                The feedback loop
              </th>
              <th className="px-6 py-3 text-xs uppercase tracking-wide text-gray-500 font-semibold">
                Where it lives
              </th>
            </tr>
          </thead>
          <tbody>
            {loops.map((row) => (
              <tr key={row.layer} className="border-b border-gray-100">
                <td className="px-6 py-3.5 text-xl font-bold text-pe-dark whitespace-nowrap">
                  {row.layer}
                </td>
                <td className="px-6 py-3.5 text-lg text-gray-700">
                  {row.loop}
                </td>
                <td className="px-6 py-3.5 font-mono text-base text-pe-teal whitespace-nowrap">
                  {row.where}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="accent-block mt-8 max-w-5xl">
        <p className="text-xl text-gray-800 leading-relaxed">
          Certified is computed, never set by hand &mdash; and the dashboard
          publishes whatever the computation says. That discipline is what lets
          AI do more of the work without anyone taking its word for it.
        </p>
      </div>
    </Slide>
  );
}

export function NextSlide() {
  return (
    <Slide>
      <SlideHeader>
        <SlideTitle>The near-term picture</SlideTitle>
      </SlideHeader>

      <p className="mt-8 text-2xl text-gray-900 leading-relaxed font-light max-w-5xl">
        Charlie&apos;s August note named the frame: near-term projects that
        close gaps in tax data and modeling capability, toward capital-taxation
        options &ldquo;sufficiently ready to be enacted by the end of
        2028.&rdquo; Three capabilities decide how those options score:
      </p>

      <div className="mt-8 grid grid-cols-3 gap-6">
        <div className="content-card p-6">
          <div className="text-2xl font-bold text-pe-dark mb-3">
            Capital income and wealth
          </div>
          <p className="text-base text-gray-700 leading-relaxed">
            In the calibrated population itself &mdash; so distributional claims
            about capital taxation rest on data anchored to administrative
            totals.
          </p>
        </div>
        <div className="content-card p-6">
          <div className="text-2xl font-bold text-pe-dark mb-3">
            Realization responses
          </div>
          <p className="text-base text-gray-700 leading-relaxed">
            Behavioral machinery for capital gains &mdash; the difference
            between a static score and one CBO would recognize.
          </p>
        </div>
        <div className="content-card p-6">
          <div className="text-2xl font-bold text-pe-dark mb-3">
            Incidence by state and district
          </div>
          <p className="text-base text-gray-700 leading-relaxed">
            The district layer your current grant built, extended to the capital
            side &mdash; every estimate published beside other models&apos;
            where a published score exists.
          </p>
        </div>
      </div>

      <p className="mt-8 text-lg text-gray-600 max-w-5xl">
        Meanwhile the threads keep moving: Social Security and LTSS to
        Gopi&apos;s February convening, the cross-model exercise whenever AV
        schedules it, and the district grant&apos;s hand-off report on December
        31.
      </p>
    </Slide>
  );
}

export function QuestionsSlide() {
  return (
    <EndSlide
      message="Thank you"
      subtitle="Sara, Hana, Charlie — over to you"
      links={[
        {
          label: "policyengine.org/scorecard",
          url: "https://www.policyengine.org/scorecard",
        },
        { label: "microcosm.institute", url: "https://microcosm.institute" },
        { label: "axiom.org/validation", url: "https://axiom.org/validation" },
        { label: "thesisinstitute.org", url: "https://thesisinstitute.org" },
      ]}
    />
  );
}
